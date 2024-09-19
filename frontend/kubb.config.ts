import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTanstackQuery } from "@kubb/swagger-tanstack-query";
import { pluginTs } from "@kubb/swagger-ts";

export default defineConfig({
  root: ".",
  input: {
    path: "http://127.0.0.1:8000/api/openapi.json",
  },
  output: {
    path: "./src/gen",
    clean: true,
  },
  plugins: [pluginOas(), pluginTs(), pluginTanstackQuery()],
});
