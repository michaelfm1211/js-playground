const hash = new URL(location.href).hash.substring(1);
// if code is empty, then hash will be %E2%80%8B
document.getElementById('static-js').textContent =
  hash !== '%E2%80%8B' ? decodeURIComponent(hash) : '';

window.addEventListener('keyup', () => {
  const code = [...document.getElementsByClassName('CodeMirror-line')]
    .map(el => el.textContent).join('\n');
  const state = new URL(location.href);
  state.hash = encodeURIComponent(code);
  location.href = state;
});

const stackOut = document.getElementById('stack-out');
document.getElementById('stack').addEventListener('click', () => {
  const code = [...document.getElementsByClassName('CodeMirror-line')]
    .map(el => '    ' + el.textContent).join('\n');
  navigator.clipboard.writeText(`<!-- begin snippet: js hide: false console: true babel: false -->
<!-- language: lang-js -->
${code}
<!-- end snippet -->`);
})
