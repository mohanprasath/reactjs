const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// ROUTES

// create a todo
app.post("/todos", async (req, res) => {
  try {
    // await
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    // console.log(req.body);
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(err.message);
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("select * from todo");
    // console.log(allTodos);
    res.json(allTodos);
  } catch (error) {
    console.error(err.message);
  }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const todo = await pool.query(`select * from todo where todo_id=${id}`);
    res.json(todo);
  } catch (error) {
    console.error(error.message);
  }
});

// update a toto - using `{}` syntax in sql commands throws syntax error
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "update todo set description=$1 where todo_id=$2",
      [description, id]
    );
    res.json("Todo is updated!");
  } catch (error) {
    console.error(error.message);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removeTodo = await pool.query("delete from todo where todo_id=$1", [
      id,
    ]);
    res.json("Todo removed from the List");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("server is started on port 5000");
});
