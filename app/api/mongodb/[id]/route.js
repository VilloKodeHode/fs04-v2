import { connectToDataBase } from "@/lib/mongoDBConnect";
import { ObjectId } from "mongodb";

export async function DELETE(_, { params }) {
  const param = await params;
  const dbConnection = await connectToDataBase();
  await dbConnection.collection("testing-items").deleteOne({
    _id: ObjectId.createFromHexString(param.id),
  });
  return new Response({ deleted: true });
}

export async function PUT(request, { params }) {
  const param = await params;
  const data = await request.json();

  const dbConnection = await connectToDataBase();

  await dbConnection.collection("testing-items").updateOne(
    {
      _id: ObjectId.createFromHexString(param.id),
    },
    { $set: data }
  );
  return Response.json({ updated: true });
}
