import { connectToDataBase } from "@/lib/mongoDBConnect";
import { ObjectId } from "mongodb";

export async function DELETE(_, { params }) {
  const dbConnection = await connectToDataBase();
  await dbConnection.collection("testing-items").deleteOne({
    _id: ObjectId.createFromHexString(params.id),
  });
  return Response({ deleted: true });
}
