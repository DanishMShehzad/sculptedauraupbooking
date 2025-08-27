import { NextResponse } from "next/server"
import { getConnection } from "@/lib/db"

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, date, time, service } = body   // 👈 time include

    if (!name || !email || !date || !time || !service?.name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const db = await getConnection()

    await db.query(
      `INSERT INTO bookings (name, email, date, time, service_name, service_price, service_duration, service_description) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, date, time, service.name, service.price, service.duration, service.description]
    )

    return NextResponse.json({ message: "Booking saved successfully" }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
