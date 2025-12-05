import { vi } from 'vitest';
import '@testing-library/react';

class IntersectionObserver {
  constructor() {}
  observe() { return null; }
  disconnect() { return null; }
  unobserve() { return null; }
  takeRecords() { return []; }
}

global.IntersectionObserver = IntersectionObserver;
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).IntersectionObserver = IntersectionObserver;
}

const matchMediaMock = vi.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(), // deprecated
  removeListener: vi.fn(), // deprecated
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: matchMediaMock,
  });
}
// Also define on global for good measure
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).matchMedia = matchMediaMock;
