import { readFile } from "fs/promises";

// Callbacks accept the '(error, result)' argument signature where error could be 'null' if there is no error.

// For promises, you can continue to use the '.catch()' pattern. Nothing new to see here.

// For 'async / await' you should use 'try / catch'.

// catch all
process.on("uncaughtException", (e) => {
  console.log(e);
});

const result = await readFile(new URL("app.jss", import.meta.url), "utf-8");

// will not execute
console.log("hello");
