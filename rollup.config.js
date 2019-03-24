import jsx from 'rollup-plugin-jsx';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from 'rollup-plugin-replace';
import commonJS from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  external: [
    'styled-components',
    'react',
    'react-dom',
  ],
  plugins: [
    peerDepsExternal(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.js', '.jsx', '.json'],
    }),
    jsx({ factory: 'React.createElement' }),
    commonJS(),
  ],
};
