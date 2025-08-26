import { connectToDataBase } from "@/lib/mongoDBConnect";

export async function POST(request) {
  // const { userId } = await auth();
  // console.log(userId);
  const userInfo = await request.json();

  if (!userInfo) return new Response("Unauthorized", { status: 401 });

  const db = await connectToDataBase();
  const existingUser = await db
    .collection("users")
    .findOne({ id: userInfo.id });

  if (!existingUser) {
    await db.collection("users").insertOne({ ...userInfo });
  }

  return new Response(JSON.stringify({ userInfo }), { status: 200 });
}
