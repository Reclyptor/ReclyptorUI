import { SHA1, enc } from "crypto-js";

export const sha1 = (input: string | object = ''): string => {
  const data = typeof input === 'object' ? JSON.stringify(input) : input;
  return SHA1(data).toString(enc.Hex).toUpperCase();
};