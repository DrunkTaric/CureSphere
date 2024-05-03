import { NextResponse } from 'next/server';
import prisma from '@/providers/prisma';
import { extractParams } from '@/utils/requester';
import { Nurse, User } from '@prisma/client';
import { CreateRequest, GetRequest, UpdateRequest, DeleteRequest } from '@/interfaces';

export async function GET(request: Request) {
  try {
    let nurses: User[] | undefined;
    const queryParams = extractParams<GetRequest<Nurse>>(request.url);

    const userWhere: { [key: string]: string | number | boolean } = {};
    for (const [key, value] of Object.entries(queryParams.data)) {
      userWhere[key] = value;
    }

    nurses = await prisma.user.findMany({
      where: { ...userWhere, userType: "NURSE" },
      include: { Nurse: true }
    });

    return NextResponse.json({ error: false, error_msg: '', data: nurses }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const queryParams = extractParams<CreateRequest<(Nurse)>>(request.url);
    const data: User & { nurse: Nurse } = JSON.parse(queryParams.data.toString());
    const { nurse, ...userData } = data

    userData.userType = 'NURSE';

    const newNurse = await prisma.user.create({
      data: {
        ...userData,
        Nurse: { create: { ...nurse } }
      }
    });

    return NextResponse.json({ error: false, error_msg: '', data: newNurse }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const queryParams = extractParams<UpdateRequest<User>>(request.url);
    const data: User & { nurse: Nurse } = JSON.parse(queryParams.data.toString());
    const { nurse, ...userData } = data;

    const updatedNurse = await prisma.user.update({
      where: { id: Number(queryParams.id) },
      data: {
        ...userData,
        Nurse: {
          update: { where: { id: Number(queryParams.id) }, data: { ...nurse } }
        }
      }
    });

    return NextResponse.json({ error: false, error_msg: '', data: updatedNurse }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const queryParams = extractParams<DeleteRequest>(request.url);

    await prisma.user.update({ where: { id: Number(queryParams.id) }, data: { deleted: true } });

    return NextResponse.json({ error: false, error_msg: '', data: null }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}
