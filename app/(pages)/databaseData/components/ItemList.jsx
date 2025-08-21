"use client";

import { baseUrl } from "@/utils/baseUrl";
import { useEffect, useState } from "react";

export const ItemList = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  async function addItem() {
    const res = await fetch(`/api/mongodb`, {
      method: "POST",
      body: JSON.stringify({ name: newItem }),
    });
    const newItemRes = await res.json();
    setItems([...items], { _id: newItemRes.insertedId, name: newItem });
    setNewItem("");
  }

  async function deleteItem(id) {
    await fetch(`/api/mongodb/${id}`, { method: "DELETE" });
    setItems(items.filter((item) => item._id !== id));
  }

  //   useEffect(() => {
  //     console.log(newItem);
  //   }, [newItem]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <input
          className="border"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          onClick={addItem}
          className="bg-green-400">
          Add
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li
            className="p-4 m-2 flex items-center justify-between bg-fuchsia-900 text-white border-2 border-fuchsia-950"
            key={item._id}>
            {item.name}
            <button
              onClick={() => deleteItem(item._id)}
              className="p-2 font-bold text-red-500 active:text-white">
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
