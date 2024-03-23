import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import sass from 'rollup-plugin-sass';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';

import pkg from './package.json';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: `dist/index-v${pkg.version}.js`,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: `dist/index-v${pkg.version}.es.js`,
                format: 'es',
                exports: 'named',
                sourcemap: true,
            },
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            external(),
            resolve(),
            sass(),
            image(),
            commonjs(),
            json(),
            terser(),
        ],
    },
];
