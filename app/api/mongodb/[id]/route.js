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
