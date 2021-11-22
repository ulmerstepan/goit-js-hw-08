import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const playerIframe = document.querySelector('#vimeo-player');
const player = new Player(playerIframe);

player.on('timeupdate', throttle(currentTime, 1000));
function currentTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime);
}
