let fetch = require('node-fetch');
let songName, imagAlb, artistInfo

export const getNowPlaying = async () => {

  return fetch('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=arfiesty&api_key=6b1604ce95589a085d9c8f75a17ef0af&format=json')
        .then(res => res.json())
        .then((json) => {

            songName = json.recenttracks.track[0].name;
            imagAlb = json.recenttracks.track[0].image[0]["#text"]

           return artistInfo = ({
                song: songName,
                imag: imagAlb,
            })
        })
};
