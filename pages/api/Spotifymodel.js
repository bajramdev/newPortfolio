const { chromium } = require('playwright');
const fetch = require('node-fetch');
const fs = require('fs');
let albImg, artist, songName, songPreview, songLength, isPlaying, songAt, ArtistInfo,value = 0;
require('dotenv').config({path: '/Users/bajramgerbeshi/WebstormProjects/untitled4/newPortfolio/.env'})
const firstname = process.env.USERNAME;
const password = process.env.PASSWORD;


//Playwright script to get bearer token which needs to be scraped in order to send get request to spotify's API
const ayncExample = async () => {
    const browser = await chromium.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://accounts.spotify.com/sv/login?continue=https:%2F%2Fwww.spotify.com%2Fse%2Faccount%2Foverview%2F');
    await page.fill('#login-username', `${firstname}`);
    await page.fill('#login-password', `${password}`);
    await page.click('#login-button');
    await page.goto('https://developer.spotify.com/console/get-users-currently-playing-track/?market=ES&additional_types=');
    await page.click('#fill-sample-data');
    await page.click('button:text("Get Token")');
    await page.click('#oauthRequestToken');
    await page.fill('#login-password', `${password}`);
    await page.press('#login-button', 'Enter');
//        await page.check('scope-user-read-currently-playing');
    await Promise.all([
        page.waitForSelector('#oauth-input')
    ])
    value = await page.$eval('#oauth-input', (el) => el.value);
    await browser.close();
    return value;
};
async function getToken()  {

    const newValue =  await ayncExample();

    setTimeout(getToken, 3400000); //calls a first then setstimeout of 1 hour for new token
    const headers1 = {
        'Authorization' : `Bearer ${newValue}`
    }
    return headers1;
}

    async function getCurrentlyPLaying() {
        getToken().then((token) => {
            setInterval(async () => {
                fetch('https://api.spotify.com/v1/me/player/currently-playing', {
                    method: 'GET',
                    headers: token
                })
                    .then(res => res.json())
                    .then((json) => {
                        artist = json.item.album.artists[0].name
                        songName = json.item.name
                        albImg = json.item.album.images[2].url
                        songPreview = json.item.preview_url // 30 seconds of the song
                        songLength = json.item.duration_ms
                        songAt = json.progress_ms
                        isPlaying = json.is_playing  // boolean

                        ArtistInfo = ({
                            artist: artist,
                            song: songName,
                            imag: albImg,
                            songpre: songPreview,
                            songlng: songLength,
                            songcur: songAt,
                            isplay: isPlaying
                        })
                        fs.writeFileSync("../song.json", JSON.stringify(ArtistInfo));

                        return JSON.stringify(ArtistInfo);
                    })
                    .catch((err) => console.log("error m: ", err))
            }, 5000);
        })
    }


getCurrentlyPLaying();


