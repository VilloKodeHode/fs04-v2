"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";

export const ItemList = ({ initialItems }) => {
  const { isLoaded, isSignedIn, user } = useUser();

  console.log(user)

  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  async function addItem() {
    const res = await fetch(`/api/mongodb`, {
      method: "POST",
      body: JSON.stringify({ name: newItem, ...user }),
    });
    const newItemRes = await res.json();
    setItems([...items], { _id: newItemRes.insertedId, name: newItem, ...user });
    setNewItem("");
  }

  async function deleteItem(id) {
    await fetch(`/api/mongodb/${id}`, { method: "DELETE" });
    setItems(items.filter((item) => item._id !== id));
  }

  //   useEffect(() => {
  //     console.log(newItem);
  //   }, [newItem]);

  //UPDATE function:

  function startEditing(item) {
    setEditingId(item._id);
    setEditingName(item.name);
  }

  function cancelEditing() {
    setEditingId(null);
    setEditingName("");
  }

  async function saveEdit(id) {
    const prev = items;
    const next = items.map((item) =>
      item._id === id ? { ...item, name: editingName } : item
    );
    setItems(next);

    try {
      const res = await fetch(`api/mongodb/${id}`, {
        method: "PUT",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: editingName }),
      });

      const json = await res.json();

      if (!res.ok || !json.updated) {
        setItems(prev);
        throw new Error("Failed to update item");
      }
    } catch (error) {
      setItems(prev);
    } finally {
      cancelEditing();
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <input
          className="border"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem} className="bg-green-400">
          Add
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li
            className="p-4 overflow-hidden relative m-2 flex items-center justify-between bg-fuchsia-900 text-white border-2 border-fuchsia-950"
            key={item._id}
          >
            {editingId === item._id ? (
              <>
                <input
                className="z-10"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  autoFocus
                />
                <button
                  className="border z-10 m-2 p-2 bg-green-600"
                  onClick={() => saveEdit(item._id)}
                >
                  Save
                </button>
                <button
                  className="border z-10 m-2 p-2 bg-red-600"
                  onClick={cancelEditing}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{item.name}</span>
                <button
                  className="border z-10 m-2 p-2 bg-slate-600"
                  onClick={() => startEditing(item)}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteItem(item._id)}
                  className="absolute z-10 px-1 top-0 border-b-2 border-l-2 bg-slate-900 border-slate-700 right-0 hover:scale-150 cursor-pointer font-bold text-red-500 active:text-white"
                >
                  X
                </button>
              </>
            )}
            {isLoaded && isSignedIn && (
              <Image alt="user image" src={item.imageUrl} width={200} height={200} className="bg-fuchsia-100 rounded-full absolute opacity-60 -right-12" />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
