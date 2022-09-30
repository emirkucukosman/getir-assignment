// src/mocks/server.js
import { rest } from "msw";
import { setupServer } from "msw/node";

import { companies, items } from "../../server.json";

// This configures a request mocking server with the given request handlers.
export const server = setupServer(
  rest.get("http://localhost:3001/companies", (req, res, ctx) => {
    return res(ctx.json(companies));
  }),
  rest.get("http://localhost:3001/items", (req, res, ctx) => {
    return res(ctx.json(items));
  })
);
