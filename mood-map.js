const moodMapUrl = 'https://emotional-map-xuexiaoyan.netlify.app/u/23-memory-2';
const projectTicket = document.querySelector('.ticket-project');

function addMoodMapLink() {
  const content = document.querySelector('#dialogContent');
  if (!content || content.querySelector('.project-link')) return;
  const link = document.createElement('a');
  link.className = 'project-link';
  link.href = moodMapUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = document.documentElement.lang === 'zh' ? '打开 MOOD MAP ↗' : 'OPEN MOOD MAP ↗';
  content.append(link);
}

projectTicket.addEventListener('click', () => setTimeout(addMoodMapLink, 0));
projectTicket.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') setTimeout(addMoodMapLink, 0);
});

new MutationObserver(() => {
  if (document.querySelector('#detailDialog').open && document.querySelector('#dialogNo').textContent.includes('01')) addMoodMapLink();
}).observe(document.querySelector('#dialogContent'), { childList: true });
