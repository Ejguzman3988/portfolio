// creates a fake server response
// Useful for testing suspense
export function fakeDelay(ms: number) {
  return (promise: Promise<any>): Promise<any> =>
    promise.then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(data), ms);
        }),
    );
}
