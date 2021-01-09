



const Song = ({ results: query }) => {
    return (
        <div>
            <h1>getServerSideProps</h1>
            {query.map((q, index) =>(
                <div key={index}>
                    <h3>{q.json.item.album.artists[0].name}</h3>
                </div>
            ))}
        </div>
    )
}

const { chromium } = require('playwright');
const fetch = require('node-fetch');

let albImg, artist, songName, songPreview, songLength, isPlaying, songAt, tempValue = 0, value = 0;


export async function getServerSideProps(context) {

    const ayncExample = async (value) => {
        const browser = await chromium.launch({headless: true});
        const page = await browser.newPage();
        await page.goto('https://accounts.spotify.com/sv/login?continue=https:%2F%2Fwww.spotify.com%2Fse%2Faccount%2Foverview%2F');
        await page.fill('#login-username', "bbajrm");
        await page.fill('#login-password', "xJawz123");
        await page.click('#login-button');
        await page.goto('https://developer.spotify.com/console/get-users-currently-playing-track/?market=ES&additional_types=');
        await page.click('#fill-sample-data');
        await page.click('button:text("Get Token")');
        await page.click('#oauthRequestToken');
        await page.fill('#login-password', "xJawz123");
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
                        console.log(json)
                        artist = json.item.album.artists[0].name
                        songName = json.item.name
                        albImg = json.item.album.images[2].url
                        songPreview = json.item.preview_url // 30 seconds of the song
                        songLength = json.item.duration_ms
                        songAt = json.progress_ms
                        isPlaying = json.is_playing  // boolean

                        console.log(artist,
                            songName,
                            albImg,
                            songPreview,
                            songLength,
                            songAt,
                            isPlaying)
                    })
                    .catch((err) => console.log("error m: " , err))
            }, 1000);
        })};

    return {
        props: { results: artist,}, // will be passed to the page component as props
    }
}

export default Song