import { NextResponse } from 'next/server';
import prisma from '@/providers/prisma';
import { extractParams } from '@/utils/requester';
import { Employee, User } from '@prisma/client';
import { CreateRequest, GetRequest, UpdateRequest, DeleteRequest } from '@/interfaces';

export async function GET(request: Request) {
  try {
    let employees: User[] | undefined;
    const queryParams = extractParams<GetRequest<User>>(request.url);

    const userWhere: { [key: string]: string | number | boolean } = {};
    for (const [key, value] of Object.entries(queryParams.data)) {
      userWhere[key] = value;
    }

    employees = await prisma.user.findMany({
      where: { ...userWhere, userType: "EMPLOYEE" },
      include: { Employee: true }
    });

    if (employees === undefined) {
      return NextResponse.json({ error: true, error_msg: "value or colmun doesn't exist", data: null }, { status: 400 });
    }

    return NextResponse.json({ error: false, error_msg: '', data: employees }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const queryParams = extractParams<CreateRequest<(Employee)>>(request.url);
    const data: User & { employee: Employee } = JSON.parse(queryParams.data.toString());
    const { employee, ...userData } = data

    userData.userType = 'EMPLOYEE';

    const newEmployee = await prisma.user.create({
      data: {
        ...userData,
        Employee: { create: { ...employee } }
      }
    });

    return NextResponse.json({ error: false, error_msg: '', data: newEmployee }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const queryParams = extractParams<UpdateRequest<User>>(request.url);
    const data: User & { employee: Employee } = JSON.parse(queryParams.data.toString());
    const { employee, ...userData } = data;

    const updatedEmployee = await prisma.user.update({
      where: { id: Number(queryParams.id) },
      data: {
        ...userData,
        Employee: {
          update: { where: { id: Number(queryParams.id) }, data: { ...employee } }
        }
      }
    });

    return NextResponse.json({ error: false, error_msg: '', data: updatedEmployee }, { status: 200 });

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
