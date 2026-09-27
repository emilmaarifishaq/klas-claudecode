import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lessons are read from content/ at request time; make sure they ship with the server bundle.
  outputFileTracingIncludes: {
    "/**": ["./content/**/*"],
  },
};

export default nextConfig;
