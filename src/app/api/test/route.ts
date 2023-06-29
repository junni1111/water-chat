import { NextResponse } from 'next/server';
import { firebase } from '@/lib/firebase-admin';

export async function GET(request: Request) {
  try {
    const token = 'ee.dd.yy';
    const user = await firebase.auth.verifyIdToken(token);
    console.log(user);
    return NextResponse.json({ data: user });
  } catch (error) {
    console.log(error);
    return NextResponse.json('fail');
  }
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
