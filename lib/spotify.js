let fetch = require('node-fetch');
let songName, imagAlb, artistInfo

export const getNowPlaying = async () => {

  return fetch('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bajgerb&api_key=a2a02d30cfb92608983e9dd81d8fbe52&format=json')
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
