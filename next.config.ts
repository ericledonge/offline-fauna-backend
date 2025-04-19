import type { NextConfig } from "next";

const config: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": process.cwd(),
    };
    return config;
  },
};

export default config;
