const portraitStage = document.querySelector('#portraitStage');
document.querySelector('#helloButton').addEventListener('click', () => {
  portraitStage.classList.remove('hand-wave');
  void portraitStage.offsetWidth;
  portraitStage.classList.add('hand-wave');
});
