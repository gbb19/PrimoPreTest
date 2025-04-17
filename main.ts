import { merge } from "./merge";

function main() {
  const collection1: number[] = [];
  const collection2: number[] = [2, 3];
  const collection3: number[] = [4, 1];

  const result = merge(collection1, collection2, collection3);
  console.log(result);
}

main();
