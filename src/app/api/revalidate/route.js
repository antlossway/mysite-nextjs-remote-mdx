//on-demand revalided path
import * as crypto from "crypto";

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
const verify_signature = (req) => {
  const signature = crypto
    .createHmac("sha256", process.env.MY_SECRET_TOKEN)
    .update(JSON.stringify(req.body))
    .digest("hex");
  const calculatedSig = `sha256=${signature}`;
  const receivedSig = req.headers.get("x-hub-signature-256");
  console.log(`debug calculated ${calculatedSig}, received ${receivedSig}`);

  return calculatedSig === receivedSig;
};

export async function POST(req) {
  if (!verify_signature(req)) {
    return NextResponse.json({
      revalidated: false,
      error: "Unauthorized",
    });
  }

  const data = await req.json(); // {path: '/blog'}
  console.log("debug: secret match, will revalidate");
  const path = data.path || "/blog";

  revalidatePath(path);

  return NextResponse.json({
    revalidated: true,
    path,
  });
}
