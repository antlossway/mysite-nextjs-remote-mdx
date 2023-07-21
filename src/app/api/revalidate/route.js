//on-demand revalided path

import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Invalid Token" }), {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const path = req.nextUrl.searchParams.get("path") || "/blog";

  revalidatePath(path);

  return NextResponse.json({
    revalidated: true,
    path,
  });
}

// for github webhook
export async function POST(req) {
  const data = await req.json(); // {path: '/blog'}
  const path = data.path || "/blog";

  revalidatePath(path);

  return NextResponse.json({
    revalidated: true,
    path,
  });
}
