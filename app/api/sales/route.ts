import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Sale from "@/lib/models/Sale"

export async function GET() {
  await connectDB()
  const sales = await Sale.find().sort({ createdAt: -1 })
  return NextResponse.json(sales)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (
      !body.name ||
      !body.amount ||
      !body.stage ||
      !body.nextActivity
    ) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    await connectDB()
    const sale = await Sale.create(body)

    return NextResponse.json(sale, { status: 201 })
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create sale" },
      { status: 500 }
    )
  }
}
