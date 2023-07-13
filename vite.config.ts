import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
const itkConfig = path.resolve(__dirname, 'node_modules', 'itk-vtk-viewer', 'src', 'itkConfig.js');

 

// https://vitejs.dev/config/
export default defineConfig({
 
  optimizeDeps: {
    include: ['itk-vtk-viewer'],
  },
  resolve: {
    alias: {
      "../itkConfig.js": itkConfig,
    },
  },
  plugins: [react(),
    // glsl({include:"/vtk\.js[\/\\]Sources/"}),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        compact:true,
        plugins: [
          [
            "@babel/plugin-proposal-decorators",
            { loose: true, version: "2022-03" },
          ],
        ],
      },
    }),
    viteStaticCopy({
      targets: [
        { src: 'node_modules/itk-vtk-viewer/dist/itk/web-workers/min-bundles/pipeline.worker.js', dest: './' },
        { src: 'node_modules/itk-vtk-viewer/dist/itk', dest: './' },
      ],
    }),
  ],
})
