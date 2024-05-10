import { NextResponse } from 'next/server';
import prisma from '@/services/prisma';
import { extractParams } from '@/utils/requester';
import { Department } from '@prisma/client';
import { CreateRequest, GetRequest, UpdateRequest, DeleteRequest } from '@/interfaces';

export async function GET(request: Request) {
  try {
    let departments: Department[] | undefined;
    const queryParams = extractParams<GetRequest<Department>>(request.url);

    if (Object.keys(queryParams).length === 0) {
      departments = await prisma.department.findMany();
    } else {
      const where: { [key: string]: string | number | boolean } = {};
      for (const [key, value] of Object.entries(queryParams)) {
        where[key] = value;
      }
      departments = await prisma.department.findMany({ where });
    }

    if (departments === undefined) {
      return NextResponse.json({ error: true, error_msg: "value or colmun doesn't exist", data: null }, { status: 400 });
    }

    return NextResponse.json({ error: false, error_msg: '', data: departments }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const queryParams = extractParams<CreateRequest<Department>>(request.url);
    const data: Omit<Department, "id"> = JSON.parse(queryParams.data.toString());

    const newDepartment = await prisma.department.create({ data });

    return NextResponse.json({ error: false, error_message: '', data: newDepartment }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_message: error.message, data: null }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const queryParams = extractParams<UpdateRequest<Department>>(request.url);
    const data: Department = JSON.parse(queryParams.data.toString());

    const updatedDepartment = await prisma.department.update({
      where: { id: data.id },
      data,
    });

    return NextResponse.json({ error: false, error_message: '', data: updatedDepartment }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_message: error.message, data: null }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const queryParams = extractParams<DeleteRequest>(request.url);
    const { id } = queryParams;

    await prisma.department.delete({ where: { id: Number(id) } });

    return NextResponse.json({ error: false, error_message: '', data: null }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_message: error.message, data: null }, { status: 400 });
  }
}
