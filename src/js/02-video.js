import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const throttle = require('lodash.throttle');

const currentTime = localStorage.getItem('videoplayer-current-time');

player.on(
  'timeupdate',
  throttle(({ duration, percent, seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
