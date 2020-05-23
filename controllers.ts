import { todos } from "./data.ts";

const createId = () => (
  Math.max(...Array.from(todos.values()).map((o) => o.id)) + 1
);

export const getTodos = ({ response }: { response: any }) => {
  response.body = Array.from(todos.values());
};

export const getTodo = (
  { response, params }: { response: any; params: any },
) => {
  const { id } = params;
  response.body = (id && todos.has(id)) && todos.get(id);
};

export const addTodo = async (
  { request, response }: { request: any; response: any },
) => {
  const { url } = request;
  const { value } = await request.body();
  const { content } = value;

  const id = createId();
  const now = new Date();

  todos.set(id + "", {
    id,
    content,
    createdAt: now,
    updatedAt: now,
  });

  // TODO: add in db

  response.headers.set("Location", url.href);
  response.body = value;
};

export const updateTodo = async (
  { request, response, params }: { request: any; response: any; params: any },
) => {
  const { id } = params;
  const { value } = await request.body();
  const { content } = value;

  if (id && todos.has(id)) {
    const todo = todos.get(id)!;

    todos.set(id, {
      ...todo,
      content,
      updatedAt: new Date(),
    });
  }

  // TODO: update on db

  response.body = value;
};

export const deleteTodo = async (
  { params }: { params: any },
) => {
  const { id } = params;

  if (id && todos.has(id)) {
    todos.delete(id)!;
  }

  // TODO: delete from db
};
