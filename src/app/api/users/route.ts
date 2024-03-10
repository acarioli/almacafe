import { dbConnect } from "@/lib/mongodb"
import User from "@/model/user"
import { NextResponse } from "next/server"

export async function GET() {
    const connection = await dbConnect()

    console.log("connection", connection);
    const users = await User.find()
    return NextResponse.json(users)
}

export async function POST(request: any) {
    await dbConnect()
    const data = await request.json()

    const users = await User.create(data)
    return NextResponse.json(users)
}