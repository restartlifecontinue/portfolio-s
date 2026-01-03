import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const url = process.env.DATABASE_URL!;

// do not create a new database connections during development
const globalDb = global as unknown as { connection: postgres.Sql | undefined };
const connection = globalDb.connection ?? postgres(url);

if (process.env.NODE_ENV !== "production") globalDb.connection = connection;

export const db = drizzle(connection, { schema });
export { connection };
