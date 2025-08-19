import { connectToDataBase } from "@/lib/mongoDBConnect";

export async function GET() {
  const dbConnection = await connectToDataBase();
  const items = await dbConnection
    .collection("testing-items")
    .find({})
    .toArray();

  return Response.json(items);
}
