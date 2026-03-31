import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default {
  schema: "./src/**/*.schema.ts", // 👈 PEGA TODOS OS SCHEMAS
  out: "./src/shared/infra/database/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};