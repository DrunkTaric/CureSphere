import { NextResponse } from 'next/server';
import prisma from '@/services/prisma';
import { extractParams } from '@/utils/requester';
import { Patient, User } from '@prisma/client';
import { CreateRequest, GetRequest, UpdateRequest, DeleteRequest } from '@/interfaces';

export async function GET(request: Request) {
  try {
    let patients: User[] | undefined;
    const queryParams = extractParams<GetRequest<User>>(request.url);

    const userWhere: { [key: string]: string | number | boolean } = {};
    for (const [key, value] of Object.entries(queryParams.data)) {
      userWhere[key] = value;
    }

    patients = await prisma.user.findMany({
      where: { ...userWhere, userType: "PATIENT" },
      include: { Patient: true }
    });

    if (patients === undefined) {
      return NextResponse.json({ error: true, error_msg: "value or colmun doesn't exist", data: null }, { status: 400 });
    }

    return NextResponse.json({ error: false, error_msg: '', data: patients }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const queryParams = extractParams<CreateRequest<(Patient)>>(request.url);
    const data: User & { patient: Patient } = JSON.parse(queryParams.data.toString());
    const { patient, ...userData } = data

    userData.userType = 'PATIENT';

    const newPatient = await prisma.user.create({
      data: {
        ...userData,
        Patient: { create: { ...patient } }
      }
    });

    return NextResponse.json({ error: false, error_msg: '', data: newPatient }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const queryParams = extractParams<UpdateRequest<User>>(request.url);
    const data: User & { patient: Patient } = JSON.parse(queryParams.data.toString());
    const { patient, ...userData } = data;

    const updatedPatient = await prisma.user.update({
      where: { id: Number(queryParams.id) },
      data: {
        ...userData,
        Patient: {
          update: { where: { id: Number(queryParams.id) }, data: { ...patient } }
        }
      }
    });

    return NextResponse.json({ error: false, error_msg: '', data: updatedPatient }, { status: 200 });

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
