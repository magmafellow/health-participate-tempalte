import { NextResponse } from 'next/server'

export async function GET() {
  const data = [
    {
      name: 'alex',
      password: 'admin-romanov',
    },
  ]

  // artificial delay 1500ms
  await new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(true)
    }, 1500)
  })

  return new NextResponse(JSON.stringify({ data: data }))
}
