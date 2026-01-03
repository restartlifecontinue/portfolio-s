import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db, connection } from "@/drizzle/db";

const main = async () => {
  try {
    console.log("Migrating...");
    await migrate(db, { migrationsFolder: "./drizzle/migrations" });
    console.log("Migration completed");
    await connection.end();
    process.exit(0);
  } catch (error) {
    console.log(error);
    await connection.end();
    process.exit(1);
  }
};

main();
