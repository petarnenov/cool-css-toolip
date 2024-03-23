import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import sass from 'rollup-plugin-sass';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';

import pkg from './package.json';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: `dist/index.js`,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: `dist/index.es.js`,
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
            image(),
            commonjs(),
            json(),
            postcss({
                modules: true,
                extract: 'styles.css',
                minimize: true,
                inject: false,
                sourceMap: true,
                extensions: ['.scss', '.css'],
                use: ['sass'],
            })
            //terser(),
        ],
    },
];
