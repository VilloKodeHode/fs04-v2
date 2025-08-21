"use client";

import { useState } from "react";

export default function TodoPage() {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    setList([...list, newTask]);
    setNewTask("");
  };

  return (
    <>
      <section className="h-screen flex justify-center items-center bg-pink-800">
        <input
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Skriv en oppgave"
        />
        <button onClick={addNewTask}>Legg til i listen</button>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </section>
    </>
  );
}
