const hash = new URL(location.href).hash.substring(1);

document.getElementById('static-js').textContent = decodeURIComponent(hash);

window.addEventListener('keyup', () => {
  const code = [...document.getElementsByClassName('CodeMirror-line')]
    .map(el => el.textContent).join('\n');
  const state = new URL(location.href);
  // empty lines contain %E2%80%8B for some reason
  state.hash = encodeURIComponent(code).replaceAll('%E2%80%8B', '');
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
