import React from "react";
import { useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout/Layout";
import AddTask from "../pages/AddTask";
import PendingTasks from "../pages/PendingTasks";
import CompletedTasks from "../pages/CompletedTasks";

const AppRouter = () => {
  const [todoArr, setTodoArr] = useState([]);
  const [editText, setEditText] = useState("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          path=""
          element={<AddTask todoArr={todoArr} setTodoArr={setTodoArr} />}
        />
        <Route
          path="pending"
          element={
            <PendingTasks
              todoArr={todoArr}
              setTodoArr={setTodoArr}
              editText={editText}
              setEditText={setEditText}
            />
          }
        />
        <Route
          path="completed"
          element={<CompletedTasks todoArr={todoArr} setTodoArr={setTodoArr} />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
