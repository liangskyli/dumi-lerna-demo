import '@testing-library/jest-dom/vitest';
import { beforeEach, vi } from 'vitest';

beforeEach(() => {
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});
