import { NextResponse } from 'next/server';
import prisma from '@/providers/prisma';
import { extractParams } from '@/utils/requester';
import { ChatMessage } from '@prisma/client';
import { CreateRequest, GetRequest, UpdateRequest, DeleteRequest } from '@/interfaces';

export async function GET(request: Request) {
  try {
    let chatMessages: ChatMessage[] | undefined;
    const queryParams = extractParams<GetRequest<ChatMessage>>(request.url);

    if (Object.keys(queryParams).length === 0) {
      chatMessages = await prisma.chatMessage.findMany();
    } else {
      const where: { [key: string]: string | number | boolean } = {};
      for (const [key, value] of Object.entries(queryParams)) {
        where[key] = value;
      }
      chatMessages = await prisma.chatMessage.findMany({ where });
    }

    if (chatMessages === undefined) {
      return NextResponse.json({ error: true, error_msg: "value or colmun doesn't exist", data: null }, { status: 400 });
    }

    return NextResponse.json({ error: false, error_msg: '', data: chatMessages }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const queryParams = extractParams<CreateRequest<ChatMessage>>(request.url);
    const data: Omit<ChatMessage, "id"> = JSON.parse(queryParams.data.toString());

    const newChatMessage = await prisma.chatMessage.create({ data });

    return NextResponse.json({ error: false, error_message: '', data: newChatMessage }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_message: error.message, data: null }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const queryParams = extractParams<UpdateRequest<ChatMessage>>(request.url);
    const data: Omit<ChatMessage, "id"> = JSON.parse(queryParams.data.toString()) satisfies ChatMessage;

    const updatedChatMessage = await prisma.chatMessage.update({
      where: { id: Number(queryParams.id) },
      data,
    });

    return NextResponse.json({ error: false, error_message: '', data: updatedChatMessage }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_message: error.message, data: null }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const queryParams = extractParams<DeleteRequest>(request.url);
    const { id } = queryParams;

    await prisma.chatMessage.delete({ where: { id: Number(id) } });

    return NextResponse.json({ error: false, error_message: '', data: null }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_message: error.message, data: null }, { status: 400 });
  }
}

