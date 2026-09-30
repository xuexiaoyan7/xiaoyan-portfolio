const moodPreviewUrl = 'https://emotional-map-xuexiaoyan.netlify.app/u/23-memory-2';
function addMoodPreview() {
  const content = document.querySelector('#dialogContent');
  const dialogNo = document.querySelector('#dialogNo');
  if (!content || !dialogNo.textContent.includes('01') || content.querySelector('.mood-preview')) return;
  const preview = document.createElement('a');
  preview.className = 'mood-preview';
  preview.href = moodPreviewUrl;
  preview.target = '_blank';
  preview.rel = 'noopener noreferrer';
  preview.innerHTML = `<img src="mood-map-preview.png" alt="Emotional Map interactive website preview"><span>${document.documentElement.lang === 'zh' ? '查看可互动的情绪地图 ↗' : 'VIEW THE LIVE INTERACTIVE MAP ↗'}</span>`;
  const nextHeading = content.querySelectorAll('h3')[1];
  if (nextHeading) nextHeading.before(preview); else content.append(preview);
}
new MutationObserver(() => setTimeout(addMoodPreview, 0)).observe(document.querySelector('#dialogContent'), { childList: true });
