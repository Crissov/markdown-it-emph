# markdown-it-emph

Renders this markdown

```md
_italic_ *emphasis* __bold__ **strong** ____underline____
```

to this HTML

```HTML
<i>italic</i> <em>emphasis</em> <b>bold</b> <strong>strong</strong> <u>underline</u>
```

## Install

```sh
npm install markdown-it-emph
```

## Usage

```js
const emph = require('markdown-it-emph');
const md = require('markdown-it')().use(emph);

console.log(md.renderInline('_italic_ *emphasis*'));
```

## Development

Add tests in [test.js](test.js).

```sh
npm test
npm version [patch|minor|major]
npm publish
```
