import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      'lib': resolve(__dirname, '../lib'),
    },
  },
  reactStrictMode: true,
};

export default nextConfig;
