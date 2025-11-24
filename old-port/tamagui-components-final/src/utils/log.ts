// A simple logger utility.
// Can be replaced with a more robust logging service later.

export const log = (...args: any[]) => {
  console.log('[MIGRATION-LOG]', ...args);
};
