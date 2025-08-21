import { connectToDataBase } from "@/lib/mongoDBConnect";

export async function GET() {
  const dbConnection = await connectToDataBase();
  const items = await dbConnection
    .collection("testing-items")
    .find({})
    .toArray();

  return Response.json(items);
}

export async function POST(request) {
  const data = await request.json();
  const dbConnection = await connectToDataBase();
  const result = await dbConnection
    .collection("testing-items")
    .insertOne({ ...data });

  return Response.json({ insertedId: result.insertedId });
}
