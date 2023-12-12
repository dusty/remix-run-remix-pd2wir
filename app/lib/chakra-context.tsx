import createCache from '@emotion/cache';
import { createContext } from 'react';

interface ServerStyleContextData {
  key: string;
  ids: Array<string>;
  css: string;
}

export const ServerStyleContext = createContext<
  ServerStyleContextData[] | null
>(null);

interface ClientStyleContextData {
  reset: () => void;
}

export const ClientStyleContext = createContext<ClientStyleContextData | null>(
  null
);

export const defaultCache = createEmotionCache();

export function createEmotionCache() {
  return createCache({ key: 'css' });
}
