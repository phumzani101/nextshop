import mongodb from "../../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  mongodb.connect();
  mongodb.disconnect();
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
