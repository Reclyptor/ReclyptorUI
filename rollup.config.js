import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

const injectStyles = () => ({
  // https://github.com/egoist/rollup-plugin-postcss/issues/381
  name: 'Inject Styles',
  generateBundle: (_options, bundle) => {
    Object.entries(bundle).forEach(entry => {
      if (!entry[0].match(/.*(.css.js)$/)) {
        return;
      }
      bundle[entry[0]].code = entry[1].code.replace(
        /(\.+\/)*node_modules\/style-inject\/dist\/style-inject\.es\.js/,
        'style-inject'
      );
    });
  },
});

export default [
  {
    input: [
      'src/component/Input/Button/index.ts',
    ],
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false
    },
    plugins: [
      json(),
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
      injectStyles(),
    ],
  }
]
