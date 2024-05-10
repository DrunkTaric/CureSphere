import { CreateRequest, DeleteRequest, GetRequest } from '@/interfaces';
import { extractParams } from '@/utils/requester';
import { Appointment } from '@prisma/client';
import { NextResponse } from 'next/server';
import prisma from '@/services/prisma';

export async function GET(request: Request) {
  try {
    let appointments: Appointment[] | undefined;
    const queryParams = extractParams<GetRequest<Appointment>>(request.url);

    if (Object.keys(queryParams).length === 0) {
      appointments = await prisma.appointment.findMany();
    } else {
      const where: { [key: string]: string | number | boolean } = {};
      for (const [key, value] of Object.entries(queryParams)) {
        where[key] = value;
      }
      appointments = await prisma.appointment.findMany({ where });
    }

    if (appointments === undefined) {
      return NextResponse.json({ error: true, error_msg: "value or colmun doesn't exist", data: null }, { status: 400 });
    } else {
      return NextResponse.json({ error: false, error_msg: '', data: appointments }, { status: 200 });
    }

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const queryParams = extractParams<CreateRequest<Appointment>>(request.url);
    const data: Omit<Appointment, "id"> = JSON.parse(queryParams.data.toString())

    const newAppointment = await prisma.appointment.create({
      data: {
        ...data,
        appointmentDateTime: new Date()
      }
    });

    return NextResponse.json({ error: false, error_message: '', data: newAppointment }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_message: error.message, data: null }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const queryParams = extractParams<CreateRequest<Appointment>>(request.url);
    const data: Appointment = JSON.parse(queryParams.data.toString())

    const updatedAppointment = await prisma.appointment.update({
      where: { id: data.id },
      data: {
        ...data,
        appointmentDateTime: new Date()
      }
    });

    return NextResponse.json({ error: false, error_message: '', data: updatedAppointment }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_message: error.message, data: null }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const queryParams = extractParams<DeleteRequest>(request.url);

    await prisma.appointment.delete({ where: { id: Number(queryParams.id) } });

    return NextResponse.json({ error: false, error_message: '', data: null }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_message: error.message, data: null }, { status: 400 });
  }
}
