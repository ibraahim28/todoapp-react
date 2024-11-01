import React, { useState } from "react";

export default function AddTask() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [editText, setEditText] = useState("");

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 && todo.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: todo,
        completed: false,
        isEditing: false,
      };
      setTodoArr([...todoArr, newTodo]);
      setTodo("");
    }
  };

  const handleCheckbox = (id) => {
    setTodoArr(
      todoArr.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleEditToggle = (item) => {
    setTodoArr(
      todoArr.map((todo) =>
        todo.id === item.id && todo.completed === false
          ? { ...todo, isEditing: !todo.isEditing }
          : todo
      )
    );
    setEditText(item.text);
  };

  const handleEditSave = (id) => {
    setTodoArr(
      todoArr.map((todo) =>
        todo.id === id ? { ...todo, text: editText, isEditing: false } : todo
      )
    );
    setEditText("");
  };

  const handleEditCancel = (id) => {
    setTodoArr(
      todoArr.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false } : todo
      )
    );
    setEditText("");
  };

  return (
    <div className="overflow-y-scroll py-3 px-20 bg-[#131313] flex flex-col gap-16 text-left w-4/5 h-screen p-10 text-white">
      <div>
        <h1 className="text-5xl p-2 font-bold">Good Afternoon.</h1>
        <h1 className="text-3xl text-zinc-400 font-bold ">
          What's your plan for today?
        </h1>
      </div>
      <div className="w-2/3">
        <input
          className="w-full px-3 py-6 bg-[#252525] text-xl border-none outline-none text-white rounded-lg"
          placeholder="Add Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <div className="mt-10">
          {todoArr.map((item) => (
            <div
              key={item.id}
              className="my-5 bg-[#252525] px-2 py-4 flex items-center rounded-md justify-between"
            >
              {item.isEditing ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-2/3 px-3 py-2 bg-[#252525] text-white rounded-lg"
                  />
                  <button
                    onClick={() => handleEditSave(item.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => handleEditCancel(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <div className="flex gap-2 items-center w-full">
                    <input
                      type="checkbox"
                      value={item.completed}
                      onChange={() => handleCheckbox(item.id)}
                      className="cursor-pointer"
                    />
                    <p
                      className={`w-2/3 ${
                        item.completed ? "line-through" : ""
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    
                    <button
                      onClick={() => handleEditToggle(item)}
                      className="bg-[#f5c76b] px-4 py-2 text-black rounded-md text-sm"
                    >
                      Edit
                    </button>
                    <button className="bg-[#f5c76b] px-4  py-2 text-black rounded-md text-sm">
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
