#!/bin/bash
npx hint .
npx stylelint "**/*.{css,scss}"
npx eslint . --fix