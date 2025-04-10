/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const start = performance.now();

  let sum = 0;
  for (let i = 0; i < data; i++) {
    sum += i;
  }

  const end = performance.now();
  const duration = end - start;

  postMessage({
    message: `Computation complete for input ${data}`,
    result: sum,
    time: duration.toFixed(3)
  });
});
