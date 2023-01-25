import { readFile, writeFile } from "fs/promises";

let template = await readFile(new URL("index.html", import.meta.url), "utf-8");

const data = {
  title: "Learn Node.js",
  body: "This is the final HTML",
};

for (const [k, v] of Object.entries(data)) {
  template = template.replace(`{${k}}`, v);
}

console.log(template);

await writeFile(new URL('template.html', import.meta.url), template);


