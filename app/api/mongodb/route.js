import { connectToDataBase } from "@/lib/mongoDBConnect";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const dbConnection = await connectToDataBase();
  const items = await dbConnection
    .collection("testing-items")
    .find({})
    .toArray();

  return Response.json(items);
}

export async function POST(request) {
  // const { userId } = await auth();

  // if (!userId) return;

  const data = await request.json();
  const dbConnection = await connectToDataBase();
  const result = await dbConnection
    .collection("testing-items")
    .insertOne({ imageUrl: data.imageUrl, id: data.id, name: data.name });

  return Response.json({ insertedId: result.insertedId });
}
