// Bundles the extension client and the language server, with their
// dependencies, into dist/ for packaging. Pass --watch to rebuild on change.
import * as esbuild from 'esbuild';

const shared = {
  bundle: true,
  platform: 'node',
  target: 'node20',
  format: 'cjs',
  sourcemap: true,
  logLevel: 'info',
};

const builds = [
  { ...shared, entryPoints: ['client/src/extension.ts'], outfile: 'dist/extension.js', external: ['vscode'] },
  { ...shared, entryPoints: ['server/src/server.ts'], outfile: 'dist/server.js' },
];

if (process.argv.includes('--watch')) {
  for (const options of builds) {
    const ctx = await esbuild.context(options);
    await ctx.watch();
  }
} else {
  await Promise.all(builds.map((options) => esbuild.build(options)));
}
