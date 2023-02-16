const hash = decodeURIComponent(new URL(location.href).hash.substring(1));
document.getElementById('static-js').textContent = hash;

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