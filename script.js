/* eslint-disable */
var jukeBox = document.querySelector('ul.player');

jukeBox.addEventListener('click', function(e) {
    var songName = e.target.getAttribute('data-src');
    var audioPlayer = document.querySelector('#player');

    if (audioPlayer) {
            if (songName === audioPlayer.getAttribute('src')) {
                if (audioPlayer.paused) {
                audioPlayer.play();
                e.target.id = 'playing';           
            } else {
                audioPlayer.pause();
                e.target.id = 'paused';
            }
        } else {
            audioPlayer.src = songName;
            audioPlayer.play();
            if (document.querySelector('#playing')) {
                document.querySelector('#playing').id = '';
            } else {
                document.querySelector('#paused').id = '';
            }
                e.target.id = 'playing';
        }

    } else {
        var audioPlayer = document.createElement('audio');
        audioPlayer.id = 'player';
        e.target.id = 'playing';
        audioPlayer.src = songName;
        document.body.appendChild(audioPlayer);
        audioPlayer.play();

        // will remove the audio from DOM once done playing
        audioPlayer.addEventListener('ended', function () {
            audioPlayer.parentNode.removeChild(audioPlayer);
            e.target.id = '';
        }, false);
    }

}, false);