import React from "react";
import { useNavigate } from "react-router-dom";

const PendingTasks = ({ todoArr, setTodoArr, editText, setEditText }) => {
  const navigate = useNavigate();

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

  const handleDelete = (e) => {
    setTodoArr(todoArr.filter((todo) => todo.id !== e.id));
  };



  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-[#131313] w-4/5 text-white py-3 px-20 overflow-y-auto h-screen ">
      <div className="w-2/3 flex flex-col justify-between">
        <div>
          <h1 className="text-5xl p-2 font-bold">Pending Tasks</h1>
        </div>

        <div className="flex flex-col mt-10 ">
          {todoArr
            .filter((item) => !item.completed) // Filter only completed tasks
            .map((item) => (
              <div
                className="my-5 bg-[#252525] px-2 py-4 flex items-center rounded-md justify-between "
                key={item.id}
              >
                <div className="flex gap-2 items-center w-full">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleCheckbox(item.id)}
                    className="cursor-pointer"
                  />
                  <p className="w-2/3 font-bold">{item.text}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditToggle(item)}
                    className="bg-[#f5c76b] px-4 py-2 text-black rounded-md text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(item);
                    }}
                    className="bg-[#f5c76b] px-4  py-2 text-black rounded-md text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="my-5">
          <button
            className="px-5 py-2 bg-[#f5c76b] text-black rounded-md mx-2"
            onClick={navigateToHome}
          >
            Add a todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingTasks;
