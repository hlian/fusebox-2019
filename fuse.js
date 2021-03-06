const { FuseBox } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/$name.js",
});

fuse.bundle("app").instructions(`> index.ts`).completed(proc => proc.start());

fuse.run();
