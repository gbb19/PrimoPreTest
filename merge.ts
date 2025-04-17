export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[],
): number[] {
  const result: number[] = [];

  let i1 = 0;
  let i2 = 0;
  let i3 = collection3.length - 1;

  while (i1 < collection1.length || i2 < collection2.length || i3 >= 0) {
    let candidates: [number, number][] = [];

    if (i1 < collection1.length) {
      candidates.push([collection1[i1], 1]);
    }

    if (i2 < collection2.length) {
      candidates.push([collection2[i2], 2]);
    }

    if (i3 >= 0) {
      candidates.push([collection3[i3], 3]);
    }

    let minVal = candidates[0][0];
    let source = candidates[0][1];

    for (let i = 1; i < candidates.length; i++) {
      if (candidates[i][0] < minVal) {
        minVal = candidates[i][0];
        source = candidates[i][1];
      }
    }

    result.push(minVal);

    if (source === 1) i1++;
    else if (source === 2) i2++;
    else i3--;
  }

  return result;
}
