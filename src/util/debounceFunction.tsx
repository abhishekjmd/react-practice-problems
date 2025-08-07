export const debounceFunction = (callback, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      try {
        await callback(...args); // <-- now properly handles async
      } catch (error) {
        console.error("Debounced function error:", error);
      }
    }, delay);
  };
};