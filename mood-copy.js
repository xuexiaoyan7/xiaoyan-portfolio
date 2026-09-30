function refineMoodMapCopy() {
  const content = document.querySelector('#dialogContent');
  if (!document.querySelector('#dialogNo')?.textContent.includes('01') || !content) return;
  const heading = [...content.querySelectorAll('h3')].find(node => node.textContent.includes('Mood Map'));
  const paragraph = heading?.nextElementSibling;
  if (paragraph?.tagName === 'P') {
    paragraph.className = 'mood-description';
    paragraph.innerHTML = '<span>把走过的地方和当时的心情，以照片为媒介藏进一张只属于自己的地图里。</span><em>A map for the fleeting feelings I left behind along the way.</em>';
  }
}
new MutationObserver(() => setTimeout(refineMoodMapCopy, 0)).observe(document.querySelector('#dialogContent'), { childList: true });
