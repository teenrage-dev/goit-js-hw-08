import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const LOCALSTORAGEKEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlayer, 1000));

function onPlayer(evt) {
    console.log(evt);
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(evt));
};


const currentTime = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY));
console.log(currentTime.seconds);
player.setCurrentTime(currentTime.seconds)



