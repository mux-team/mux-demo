#!/bin/bash

out_dir="output"
tpl_dir="./"
static_dir="webroot/dist"

rm -rf dist $out_dir

webpack --config ./build/webpack.prod.babel.js

mkdir -p $out_dir && cd $out_dir

# move tpl
mkdir -p $tpl_dir
mv ../dist/entry/* $tpl_dir && rm -rf ../dist/entry

# mv js
mkdir -p $static_dir
mv ../dist/* $static_dir

# rm -rf webroot template
# rm -rf ../dist


