import { NextResponse } from 'next/server';
import prisma from '@/services/prisma';
import { extractParams } from '@/utils/requester';
import { Doctor, User } from '@prisma/client';
import { CreateRequest, GetRequest, UpdateRequest, DeleteRequest } from '@/interfaces';

export async function GET(request: Request) {
  try {
    let doctors: User[] | undefined;
    const queryParams = extractParams<GetRequest<User>>(request.url);

    const userWhere: { [key: string]: string | number | boolean } = {};
    for (const [key, value] of Object.entries(queryParams.data)) {
      userWhere[key] = value;
    }

    doctors = await prisma.user.findMany({
      where: { ...userWhere, userType: "DOCTOR" },
      include: { Doctor: true }
    });

    if (doctors === undefined) {
      return NextResponse.json({ error: true, error_msg: "value or colmun doesn't exist", data: null }, { status: 400 });
    }

    return NextResponse.json({ error: false, error_msg: '', data: doctors }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const queryParams = extractParams<CreateRequest<(Doctor)>>(request.url);
    const data: User & { doctor: Doctor } = JSON.parse(queryParams.data.toString());
    const { doctor, ...userData } = data

    userData.userType = 'DOCTOR';

    const newDoctor = await prisma.user.create({
      data: {
        ...userData,
        Doctor: { create: { ...doctor } }
      }
    });

    return NextResponse.json({ error: false, error_msg: '', data: newDoctor }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const queryParams = extractParams<UpdateRequest<User>>(request.url);
    const data: User & { doctor: Doctor } = JSON.parse(queryParams.data.toString());
    const { doctor, ...userData } = data;

    const updatedDoctor = await prisma.user.update({
      where: { id: Number(queryParams.id) },
      data: {
        ...userData,
        Doctor: {
          update: { where: { id: Number(queryParams.id) }, data: { ...doctor } }
        }
      }
    });

    return NextResponse.json({ error: false, error_msg: '', data: updatedDoctor }, { status: 200 });

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

