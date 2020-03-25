export function randomNumber(min, max) {
    return parseInt(Math.random() * (max-min) + min, 10);
}

export function chunkArray(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
}
