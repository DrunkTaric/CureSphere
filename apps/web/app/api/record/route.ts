import { NextResponse } from 'next/server';
import prisma from '@/providers/prisma';
import { extractParams } from '@/utils/requester';
import { MedicalRecord } from '@prisma/client';
import { CreateRequest, GetRequest, UpdateRequest, DeleteRequest } from '@/interfaces';

export async function GET(request: Request) {
  try {
    let medicalRecords: MedicalRecord[] | undefined;
    const queryParams = extractParams<GetRequest<MedicalRecord>>(request.url);

    const where: { [key: string]: string | number | boolean } = {};
    for (const [key, value] of Object.entries(queryParams.data)) {
      where[key] = value;
    }

    medicalRecords = await prisma.medicalRecord.findMany({ where });

    if (medicalRecords === undefined) {
      return NextResponse.json({ error: true, error_msg: "value or colmun doesn't exist", data: null }, { status: 400 });
    }

    return NextResponse.json({ error: false, error_msg: '', data: medicalRecords }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const queryParams = extractParams<CreateRequest<(MedicalRecord)>>(request.url);
    const data: MedicalRecord = JSON.parse(queryParams.data.toString());

    const newRecord = await prisma.medicalRecord.create({
      data: {
        ...data,
      }
    });

    return NextResponse.json({ error: false, error_msg: '', data: newRecord }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const queryParams = extractParams<UpdateRequest<MedicalRecord>>(request.url);
    const data: MedicalRecord = JSON.parse(queryParams.data.toString());

    const updatedRecord = await prisma.medicalRecord.update({
      where: { id: Number(queryParams.id) },
      data: {
        ...data,
      }
    });

    return NextResponse.json({ error: false, error_msg: '', data: updatedRecord }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const queryParams = extractParams<DeleteRequest>(request.url);

    await prisma.medicalRecord.delete({ where: { id: Number(queryParams.id) } });

    return NextResponse.json({ error: false, error_msg: '', data: null }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}
