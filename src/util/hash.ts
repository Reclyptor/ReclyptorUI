import cryptoJS from "crypto-js";

export const sha1 = (input: string | object = ''): string => {
  const data = typeof input === 'object' ? JSON.stringify(input) : input;
  return cryptoJS.SHA1(data).toString(cryptoJS.enc.Hex).toUpperCase();
};