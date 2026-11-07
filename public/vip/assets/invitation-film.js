(() => {
  const film = document.getElementById('gathering-film');
  const voices = document.getElementById('founding-film');
  const playButton = document.querySelector('.vip-film-play');
  const syncPlayButton = () => { playButton.hidden = !film.paused && !film.ended; };
  syncPlayButton();
  document.querySelectorAll('[data-play-film]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      film.play()?.then(() => {
        if (trigger === playButton) film.focus({ preventScroll: true });
      }).catch(syncPlayButton);
    });
  });
  film.addEventListener('play', () => { voices.pause(); syncPlayButton(); });
  ['pause', 'ended', 'error'].forEach(event => film.addEventListener(event, syncPlayButton));
  voices.addEventListener('play', () => film.pause());
  if (location.hash === '#founding-supporter') location.replace('supporter.html');
})();
