/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // Serve the archived WordPress snapshot (in /public/old/) at /old and /old/.
    // Assets resolve via the <base href="/old/"> tag injected into the snapshot.
    return [
      { source: "/old", destination: "/old/index.html" },
      { source: "/old/", destination: "/old/index.html" },
    ];
  },
};

export default nextConfig;
