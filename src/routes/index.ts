import { Router } from "express";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router: Router = Router();

router.route("/todo")
  .get(getTodos)
  .post(addTodo);

router.route("/todo/:id")
  .delete(deleteTodo)
  .put(updateTodo);

export default router;
