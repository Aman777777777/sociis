import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/supabase/vite";

import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    {
      name: "serve-living-change-v4",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const pathname = req.url ? req.url.split("?")[0] : "";
          if (pathname === "/" || pathname === "/index.html") {
            const html = fs.readFileSync(path.resolve(__dirname, "public/site.html"), "utf8");
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            return res.end(html);
          }
          if (pathname === "/privacy-policy") {
            const html = fs.readFileSync(path.resolve(__dirname, "public/privacy-policy.html"), "utf8");
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            return res.end(html);
          }
          if (pathname === "/terms-of-service") {
            const html = fs.readFileSync(path.resolve(__dirname, "public/terms-of-service.html"), "utf8");
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            return res.end(html);
          }
          if (pathname === "/cookie-policy") {
            const html = fs.readFileSync(path.resolve(__dirname, "public/cookie-policy.html"), "utf8");
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            return res.end(html);
          }
          if (pathname === "/governance") {
            res.writeHead(302, { Location: "/#governance" });
            return res.end();
          }
          if (pathname === "/bee") {
            res.writeHead(302, { Location: "/#bee" });
            return res.end();
          }
          if (pathname === "/media") {
            res.writeHead(302, { Location: "/#gatherings" });
            return res.end();
          }
          next();
        });
      },
      closeBundle() {
        const distIndex = path.resolve(__dirname, "dist/index.html");
        const siteHtml = path.resolve(__dirname, "public/site.html");
        if (fs.existsSync(siteHtml)) {
          fs.copyFileSync(siteHtml, distIndex);
          console.log("[build] Emitted Living Change V4 as dist/index.html");
        }
      },
    },
    react(),
    mcpPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
