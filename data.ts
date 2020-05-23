type ITodo = {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export const todos = new Map<string, ITodo>([
  ["1", {
    id: 1,
    content: "foo",
    createdAt: new Date(),
    updatedAt: new Date(),
  }],
  ["2", {
    id: 2,
    content: "bar",
    createdAt: new Date(),
    updatedAt: new Date(),
  }],
  ["3", {
    id: 3,
    content: "baz",
    createdAt: new Date(),
    updatedAt: new Date(),
  }],
]);
