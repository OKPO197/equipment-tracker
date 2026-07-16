import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: replace "equipment-tracker" below with the exact name of your GitHub repository.
// Example: if your repo is https://github.com/yourname/equipment-tracker,
// set base to "/equipment-tracker/".
// If you're deploying to a custom domain or a user/org page (yourname.github.io
// repo itself), set base to "/" instead.
export default defineConfig({
  plugins: [react()],
  base: "/equipment-tracker/",
});
