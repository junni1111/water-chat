import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import * as process from 'process';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/test')) {
    return NextResponse.rewrite(new URL('/', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/api/test')) {
    console.log('call api test123');
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/test/:path*', '/dashboard/:path*', '/api/:function*'],
};
