const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "8080",
                pathname: "/uploads/**",
            },
        ],
    },
};

export default nextConfig;
