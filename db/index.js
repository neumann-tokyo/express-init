import * as dotenv from "dotenv";
import { knex as k } from "knex";
import spacetime from "spacetime";
import { types } from "pg";
import { builtins } from "pg-types";

dotenv.config();

const parseFn = (val) => {
  return val === null ? null : spacetime(val, "Asia/Tokyo").format("iso");
};
types.setTypeParser(builtins.TIMESTAMPTZ, parseFn);
types.setTypeParser(builtins.TIMESTAMP, parseFn);

const knex = k({
  client: "pg",
  connection:
    process.env.NODE_ENV === "test"
      ? process.env.TEST_DB_URL
      : process.env.SERVER_DB_URL,
  searchPath: ["knex", "public"],
});

export default knex;
