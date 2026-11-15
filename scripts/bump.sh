#!/bin/sh
# bump the ?v= on style.css, content.js and gh-data.js so browsers fetch fresh copies after a push
cd "$(dirname "$0")/.." && V=$(date +%Y%m%d%H%M) && sed -i '' -E "s/(style\.css|content\.js|gh-data\.js)\?v=[0-9]+/\1?v=$V/g" index.html && echo "v=$V"
