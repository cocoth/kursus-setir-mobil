import { verifyToken } from "./utils/auth";
import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
    const token = req.cookies.get("token")?.value;
    if(!token){
        return NextResponse.redirect(new URL('/login', req.url))
    }
    try {
        verifyToken(token);
        return NextResponse.next()
    } catch (error) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
}

export const config = {
    matcher: '/admin/:path*',
}