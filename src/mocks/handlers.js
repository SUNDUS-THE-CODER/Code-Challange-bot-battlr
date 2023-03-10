import { rest } from "msw";
import { data } from "./data";

let bots = data;

export const handlers = [
  rest.get("http://localhost:8002/bots", (req, res, ctx) => {
    return res(ctx.json(bots));
  }),
  rest.delete("http://localhost:8002/bots/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (isNaN(parseInt(id))) {
      return res(ctx.status(404), ctx.json({ message: "Invalid ID" }));
    }
    bots = bots.filter((q) => q.id !== parseInt(id));
    return res(ctx.json({}));
  })
];
