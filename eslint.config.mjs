import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

/** Flat ESLint config — Next.js core-web-vitals plus TypeScript rules. */
const config = [
  { ignores: [".next/**", "out/**", "node_modules/**"] },
  ...coreWebVitals,
  ...typescript,
];

export default config;
