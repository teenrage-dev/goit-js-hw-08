import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

debugger
const onPlay = function(data) {
    data: {
        duration: 61.857,
        percent: 0.049,
        seconds: 3.034,
        customKey: 'videoplayer-current-time'
    },
};


console.log(player.on('timeupdate', onPlay));
