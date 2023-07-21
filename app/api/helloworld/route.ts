import { NextResponse } from 'next/server'

export async function GET(params: Request) {
return NextResponse.json({malikismonkey: 'Hello World'})
}