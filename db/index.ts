import dotenv from "dotenv";
import { knex as k } from "knex";

dotenv.config();

const knex = k({
  client: "pg",
  connection:
    process.env.NODE_ENV !== "test"
      ? process.env.SERVER_DB_URL
      : process.env.TEST_DB_URL,
  searchPath: ["knex", "public"],
});

export default knex;
