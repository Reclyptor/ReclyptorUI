import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default [
  {
    input: [
      'src/component/Input/Button/index.ts',
      'src/style/index.ts',
    ],
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false
    },
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
        exclude: [
          '**/*.mdx',
          '**/*.demo.tsx',
          '**/*.stories.tsx'
        ]
      }),
      postcss({
        config: { path: './postcss.config.js' },
        extensions: ['.css'],
        minimize: true,
        inject: { insertAt: 'bottom' }
      }),
      json()
    ],
  }
]
