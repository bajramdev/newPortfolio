const { chromium } = require('playwright');
const fetch = require('node-fetch');
const fs = require('fs');
const songJ = require ('../song.json');
let albImg, artist, songName, songPreview, songLength, isPlaying, songAt, tempValue = 0, value = 0;
const info = require('../loginInfo/variables');

const ayncExample = async () => {
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://accounts.spotify.com/sv/login?continue=https:%2F%2Fwww.spotify.com%2Fse%2Faccount%2Foverview%2F');
    await page.fill('#login-username', `${info.firstName}`);
    await page.fill('#login-password', `${info.password}`);
    await page.click('#login-button');
    await page.goto('https://developer.spotify.com/console/get-users-currently-playing-track/?market=ES&additional_types=');
    await page.click('#fill-sample-data');
    await page.click('button:text("Get Token")');
    await page.click('#oauthRequestToken');
    await page.fill('#login-password', `${info.password}`);
    await page.press('#login-button', 'Enter');
//        await page.check('scope-user-read-currently-playing');
    await Promise.all([
        page.waitForSelector('#oauth-input')
    ])
    value = await page.$eval('#oauth-input', (el) => el.value);
    await page.screenshot({ path: `example-${browser}.png` });
    await console.log("inside f ", value);
    await browser.close();
    return value;
};

console.log("otuside" , value)

async function a()  {

    const newValue =  await ayncExample();

    setTimeout(a, 3400000); //calls a first then setstimeout of 1 hour for new token
    const headers1 = {
        'Authorization' : `Bearer ${newValue}`
    }
    console.log("aw shit" , headers1.Authorization)
    return headers1;

}

async function getCurrentlyPLaying(){

    a().then((token) => {
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

                    let ArtistInfo = ({
                       artist :   artist,
                        song : songName,
                        imag :   albImg,
                     songpre :  songPreview,
                     songlng :  songLength,
                      songcur : songAt,
                      isplay : isPlaying
                    })

                    fs.writeFileSync("../song.json", JSON.stringify(ArtistInfo));

                })
                .catch((err) => console.log("error m: " , err))
        }, 5000);
    })}

getCurrentlyPLaying();