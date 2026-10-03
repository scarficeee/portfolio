import { createServer } from "node:http";
import next from "next";
import { watch } from "node:fs";
import { prepareDocumentation } from "./prepare-documentation.mjs";
const port = Number(process.env.PORT || 3000);
const app = next({ dev: true, hostname: "127.0.0.1", port, webpack: true });
await app.prepare();
const handle = app.getRequestHandler();
createServer((req, res) => handle(req, res)).listen(port, "127.0.0.1", () =>
  console.log(`Portfolio ready at http://127.0.0.1:${port}`),
);

let timer;
let updating = false;
let pending = false;
async function refreshDocumentation() {
  if (updating) return;
  updating = true;
  try {
    do {
      pending = false;
      await prepareDocumentation();
    } while (pending);
  } catch (error) {
    console.error("Documentation refresh failed:", error.message);
  } finally {
    updating = false;
  }
}
watch(new URL("../public/media/", import.meta.url), { recursive: true }, (_event, filename) => {
  if (!filename) return;
  const parts = filename.toString().split(/[\\/]/);
  if (parts.some((part) => part.startsWith(".")) || parts[0] === "_previews" || parts[0] === "profile") return;
  if (!/\.(webp|png|jpe?g|avif)$/i.test(filename.toString())) return;
  pending = true;
  clearTimeout(timer);
  timer = setTimeout(refreshDocumentation, 600);
});
