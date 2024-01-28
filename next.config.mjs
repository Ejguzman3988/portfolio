import path from "path"
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(path.dirname(import.meta.url), "styles")],
  }

};

export default nextConfig;
