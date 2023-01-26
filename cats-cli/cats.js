#! /usr/bin/env node
import fetch from "node-fetch";
import open from "open";
import yargs from "yargs";

const { argv } = yargs(process.argv);
const link = "https://catfact.ninja";
const res = await fetch(`${link}/breeds?limit=10`, {
  headers: {
    "Content-Type": "application/json",
  },
});
const data = await res.json();

if (argv.print) {
  console.log(data.data[Math.ceil(Math.random() * 9)]);
} else {
  open("https://http.cat/");
}
