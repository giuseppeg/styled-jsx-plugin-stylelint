# styled-jsx-plugin-stylelint

[![Build Status](https://travis-ci.org/giuseppeg/styled-jsx-plugin-stylelint.svg?branch=master)](https://travis-ci.org/giuseppeg/styled-jsx-plugin-stylelint)
[![npm](https://img.shields.io/npm/v/styled-jsx-plugin-stylelint.svg)](https://www.npmjs.com/package/styled-jsx-plugin-stylelint)

Use [stylelint](https://github.com/stylelint/stylelint) with [styled-jsx](https://github.com/zeit/styled-jsx) 💥

## Usage

Install the package first.

```bash
npm install --save styled-jsx-plugin-stylelint
```

Next, add `styled-jsx-plugin-stylelint` to the `styled-jsx`'s `plugins` in your babel configuration:

```json
{
  "plugins": [
    [
      "styled-jsx/babel",
      { "plugins": ["styled-jsx-plugin-stylelint"] }
    ]
  ]
}
```

#### Notes

`styled-jsx-plugin-stylelint` uses `styled-jsx`'s plugin system which is supported from version 2.
Read more on their repository for further info.

**This is a Proof of Concept plugin, in case you or your team needs such a plugin please consider contributing.**

## License

MIT
