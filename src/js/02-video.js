import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const playerIframe = document.querySelector('#vimeo-player');
const player = new Player(playerIframe);

player.on('timeupdate', throttle(currentTime, 1000));
function currentTime(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

const savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime) {
  player.setCurrentTime(savedTime);
}
