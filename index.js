module.exports = function markdownItEmph (md) {

  function renderEm (tokens, idx, opts, _, slf) {
    var token = tokens[idx];
    if (token.markup === '_') {
      token.tag = 'i';
    }
    if (token.markup === '__') {
      token.tag = 'b';
    }
    if (token.markup === '____') {
      token.tag = 'u';
    }
    return slf.renderToken(tokens, idx, opts);
  }

  md.renderer.rules.em_open = renderEm;
  md.renderer.rules.em_close = renderEm;
};
