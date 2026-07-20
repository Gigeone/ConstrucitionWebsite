import { spawn } from "node:child_process";
import open, { apps } from "open";

const child = spawn("next dev", {
  stdio: ["inherit", "pipe", "inherit"],
  shell: true,
});

let opened = false;

child.stdout.on("data", (chunk) => {
  process.stdout.write(chunk);

  if (!opened) {
    const match = chunk.toString().match(/Local:\s+(http:\/\/localhost:\d+)/);
    if (match) {
      opened = true;
      open(match[1], { app: { name: apps.chrome } }).catch(() => open(match[1]));
    }
  }
});

child.on("exit", (code) => process.exit(code ?? 0));
