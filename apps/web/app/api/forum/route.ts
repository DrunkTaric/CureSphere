import { NextResponse } from 'next/server';
import prisma from '@/providers/prisma';
import { extractParams } from '@/utils/requester';
import { ForumPosts } from '@prisma/client';
import { CreateRequest, GetRequest, UpdateRequest, DeleteRequest } from '@/interfaces';

export async function GET(request: Request) {
  try {
    let forums: ForumPosts[] | undefined;
    const queryParams = extractParams<GetRequest<ForumPosts>>(request.url);

    if (Object.keys(queryParams.data).length === 0) {
      forums = await prisma.forumPosts.findMany();
    } else {
      const where: { [key: string]: string | number | boolean } = {};
      for (const [key, value] of Object.entries(queryParams.data)) {
        where[key] = value;
      }
      forums = await prisma.forumPosts.findMany({ where });
    }

    if (forums === undefined) {
      return NextResponse.json({ error: true, error_msg: "value or colmun doesn't exist", data: null }, { status: 400 });
    }

    return NextResponse.json({ error: false, error_msg: '', data: forums }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const queryParams = extractParams<CreateRequest<ForumPosts>>(request.url);
    const data: ForumPosts = JSON.parse(queryParams.data.toString());

    const newForum = await prisma.forumPosts.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    return NextResponse.json({ error: false, error_msg: '', data: newForum }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const queryParams = extractParams<UpdateRequest<ForumPosts>>(request.url);
    const data: ForumPosts = JSON.parse(queryParams.data.toString());

    const updatedForum = await prisma.forumPosts.update({
      where: { id: Number(queryParams.id) },
      data: {
        ...data,
        updatedAt: new Date()
      }
    });

    return NextResponse.json({ error: false, error_msg: '', data: updatedForum }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const queryParams = extractParams<DeleteRequest>(request.url);

    await prisma.forumPosts.update({ where: { id: Number(queryParams.id) }, data: { deleted: true } });

    return NextResponse.json({ error: false, error_msg: '', data: null }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: true, error_msg: error.message, data: null }, { status: 400 });
  }
}
