# Tailwind CSS: Missing File Paths in `content`

This repository demonstrates a common issue in Tailwind CSS projects where styles aren't applied because the relevant HTML or JSX files are not listed in the `content` array of the `tailwind.config.js` file. 

## Problem

The `tailwind.config.js` file's `content` option specifies which files Tailwind CSS should scan for directives.  If a file containing a Tailwind class is not listed, Tailwind will not process that class, resulting in the styles not appearing or unexpected CSS being generated.

## Solution

Ensure all files containing Tailwind CSS directives are listed in the `content` array.  Use glob patterns for comprehensive inclusion of files in different directories.

## Usage

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `npm install` to install necessary dependencies.
4. Run `npm run build` to build the CSS.
5. Examine the `tailwind.config.js` and `tailwind.config.fixed.js` files to see the differences.