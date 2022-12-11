const key = 'minimal_mistakes_skin';

function getTheme() {
  let theme = document.getElementById('stylesheet');
  let current_style = localStorage.getItem(key);
  if (current_style === null) {
    localStorage.setItem(key, theme.href);
  }
  theme.href = localStorage.getItem(key);
}

function changeTheme() {
  let current_style = localStorage.getItem(key);
  if (current_style.includes('dark')) {
    localStorage.setItem(key, '/minimal-mistakes.css');
  }
  else {
    localStorage.setItem(key, '/minimal-mistakes.css');
  }
  let theme = document.getElementById('stylesheet');
  theme.href = localStorage.getItem(key);
}