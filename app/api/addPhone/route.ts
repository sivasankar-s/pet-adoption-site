import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prsima";
import { getServerSession } from "next-auth";
import { AuthOptions } from "../auth/[...nextauth]/route";

export async function PUT(req : NextRequest) {
    const body = await req.json();
    // const user = prisma.user.findUnique({where: {email: body.email}});

    const updatedUser = await prisma.user.update({where: {email: body.email}, data: {
        phoneNumber: body.phoneNumber
    }})

    return NextResponse.json(updatedUser, {status: 200})
}


export async function GET(req: NextRequest) {
    const session = await getServerSession(AuthOptions);
    

    const user = await prisma.user.findUnique({where: {email: (session?.user?.email)!}, select: {
        phoneNumber: true
    }})
    console.log(user)

    return NextResponse.json(user, {status: 200});
}