import "tailwindcss/tailwind.css"
import  Head  from "next/head";
import {useState} from "react"
import style1 from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
const some = require('../animations/animations');
export default function Home({posts , results: song}) {

    const [photos, setPhotos] = useState(posts)
    const [songs, setSongs] = useState(song)



    return (
        <html lang="en" >
        <Head>
            <title>Bajram Gerbeshi • Portfolio</title>
        </Head>
        <body className="bg-black text-white" >

        <motion.div id="__next" initial="initial" animate="animate" >

            <div className="flex flex-col min-h-screen">
                <nav className="w-full flex justify-start items-center mx-auto max-w-4xl px-8 my-20" >
                    <Link href="/">
                        <a className="focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-200" >
                            Hem
                        </a>
                    </Link>
                    <Link href="/project" >
                        <a className="focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-200" >
                            Projects
                        </a>
                    </Link>
                    <motion.div className={style1.div2} variants={some.fadeInUp} >
                    </motion.div>
                </nav>
                <div className="h-full md:px-0 px-10">
                    <div className="h-full w-full flex flex-col max-w-3xl mx-auto mb-16 sm:px-0">
                        <motion.div className={style1.diva} variants={some.fadeInUp} >
                            <h1 className="text-5xl font-bold">Projekt</h1>
                        </motion.div>
                        <motion.div className={style1.diva} variants={some.fadeInUp} >                  <p className="text-gray-400 max-w-sm mt-2">En lista över alla de projekt jag har arbetat med eller för närvarande arbetar med.
                        </p>
                        </motion.div>

                        <motion.div className={style1.diva} variants={some.fadeInUp} >
                            <div className="mt-8 grid gap-6" >
                                    <a  href="https://discord.bio" rel="noopener" target="_blank" className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5 flex flex-col sm:flex-row text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-800 shadow flex flex-row max-w-2xl">
                                    <div className="flex items-center justify-center text-4xl w-full sm:w-1/12 mr-6 mb-4 sm:mb-0" >
                                        <svg height={32}  width={36} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" class="svg-inline--fa fa-discord fa-w-14" role="img" viewBox="0 0 448 512"  xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
                                    </div>
                                    <div className="flex flex-col w-full sm:w-11/12" >
                                        <div className="font-bold" >Spotify Playing</div>
                                        <div className="text-gray-300">Automatisering bearer token på Spotify konto samt skicka API request för att få data.</div>
                                    </div>

                                    </a>

                                <a href="https://discord.bio" rel="noopener" target="_blank"
                                   className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5 flex flex-col sm:flex-row text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-800 shadow flex flex-row max-w-2xl">
                                    <div
                                        className="flex items-center justify-center text-4xl w-full sm:w-1/12 mr-6 mb-4 sm:mb-0">
                                        <svg height={37} width={36} aria-hidden="true" focusable="false"
                                             data-prefix="fab" data-icon="discord"
                                             className="svg-inline--fa fa-discord fa-w-14" role="img"
                                             viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M43.4688 122.875C32.2188 119.719 26.5938 112.453 26.5938 101.078V91.75C26.5938 85.1562 23.8125 81.8594 18.25 81.8594V72.1562C23.6875 72.1562 26.4688 69.0469 26.5938 62.8281V52.8906C26.5938 47.1094 28 42.4375 30.8125 38.875C33.625 35.3125 37.8438 32.7344 43.4688 31.1406L46.0938 38.6875C43.7188 39.5625 41.9219 41.0938 40.7031 43.2812C39.4844 45.4375 38.8438 48.4375 38.7812 52.2812V62.125C38.7812 69.1875 35.9844 74.1406 30.3906 76.9844C35.9844 79.8594 38.7812 84.8438 38.7812 91.9375V101.875C38.9375 109.188 41.375 113.656 46.0938 115.281L43.4688 122.875ZM98.5938 81.1094C98.5938 89.2344 96.8594 95.5781 93.3906 100.141C89.9219 104.672 85.0781 106.938 78.8594 106.938C73.3594 106.938 68.9688 104.828 65.6875 100.609L65.0781 106H52.8906V34H66.4375V59.8281C69.5625 56.1719 73.6719 54.3438 78.7656 54.3438C84.9531 54.3438 89.7969 56.625 93.2969 61.1875C96.8281 65.7188 98.5938 72.1094 98.5938 80.3594V81.1094ZM85.0469 80.125C85.0469 75 84.2344 71.2656 82.6094 68.9219C80.9844 66.5469 78.5625 65.3594 75.3438 65.3594C71.0312 65.3594 68.0625 67.125 66.4375 70.6562V90.6719C68.0938 94.2344 71.0938 96.0156 75.4375 96.0156C79.8125 96.0156 82.6875 93.8594 84.0625 89.5469C84.7188 87.4844 85.0469 84.3438 85.0469 80.125ZM105.016 80.2656C105.016 72.4844 106.859 66.2188 110.547 61.4688C114.266 56.7188 119.266 54.3438 125.547 54.3438C131.109 54.3438 135.438 56.25 138.531 60.0625L139.094 55.2812H151.375V104.312C151.375 108.75 150.359 112.609 148.328 115.891C146.328 119.172 143.5 121.672 139.844 123.391C136.188 125.109 131.906 125.969 127 125.969C123.281 125.969 119.656 125.219 116.125 123.719C112.594 122.25 109.922 120.344 108.109 118L114.109 109.75C117.484 113.531 121.578 115.422 126.391 115.422C129.984 115.422 132.781 114.453 134.781 112.516C136.781 110.609 137.781 107.891 137.781 104.359V101.641C134.656 105.172 130.547 106.938 125.453 106.938C119.359 106.938 114.422 104.562 110.641 99.8125C106.891 95.0312 105.016 88.7031 105.016 80.8281V80.2656ZM118.562 81.25C118.562 85.8438 119.484 89.4531 121.328 92.0781C123.172 94.6719 125.703 95.9688 128.922 95.9688C133.047 95.9688 136 94.4219 137.781 91.3281V70C135.969 66.9062 133.047 65.3594 129.016 65.3594C125.766 65.3594 123.203 66.6875 121.328 69.3438C119.484 72 118.562 75.9688 118.562 81.25ZM158.219 115.281C162.969 113.594 165.406 109.062 165.531 101.688V91.75C165.531 84.6875 168.391 79.7812 174.109 77.0312C168.391 74.2812 165.531 69.2969 165.531 62.0781V52.2812C165.406 45 162.969 40.4688 158.219 38.6875L160.844 31.1406C166.438 32.7031 170.641 35.2656 173.453 38.8281C176.266 42.3594 177.688 47 177.719 52.75V62.8281C177.844 69.0469 180.625 72.1562 186.062 72.1562V81.8594C180.5 81.8594 177.719 85.125 177.719 91.6562V101.828C177.469 112.766 171.844 119.781 160.844 122.875L158.219 115.281Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col w-full sm:w-11/12">
                                        <div className="font-bold">bajram.fyi</div>
                                        <div className="text-gray-300">Webbplatsen du just nu är på! Utvecklat med Next.js och använder serverlösa funktioner.
                                        </div>
                                    </div>
                                </a>

                                <a href="https://discord.bio" rel="noopener" target="_blank"
                                   className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5 flex flex-col sm:flex-row text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-800 shadow flex flex-row max-w-2xl">
                                    <div
                                        className="flex items-center justify-center text-4xl w-full sm:w-1/12 mr-6 mb-4 sm:mb-0">
                                        <svg height={36} width={36} aria-hidden="true" focusable="false"
                                             data-prefix="fab" data-icon="discord"
                                             className="svg-inline--fa fa-discord fa-w-14" role="img"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor"
                                                  d="M19.5 3c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm-.5 7v-2h-2v-1h2v-2l3 2.5-3 2.5zm-3.5 8c.828 0 1.5.671 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5zm-15.5-15l.743 2h1.929l3.474 12h13.239l1.307-3.114c-.387.072-.785.114-1.192.114-3.59 0-6.5-2.91-6.5-6.5 0-.517.067-1.018.181-1.5h-5.993l2.542 9h-2.103l-3.431-12h-4.196zm9 16.5c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5z"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col w-full sm:w-11/12">
                                        <div className="font-bold">Elgiganten Bot</div>
                                        <div className="text-gray-300">Program som deltar i Playstation 5 på elgigantens hemsida när de fick in de, JSON-filen behöver captcha nyckel.
                                        </div>
                                    </div>
                                </a>
                                <a href="https://discord.bio" rel="noopener" target="_blank"
                                   className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5 flex flex-col sm:flex-row text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-800 shadow flex flex-row max-w-2xl">
                                    <div
                                        className="flex items-center justify-center text-4xl w-full sm:w-1/12 mr-6 mb-4 sm:mb-0">
                                        <svg height={36} width={36} aria-hidden="true" focusable="false"
                                             data-prefix="fab" data-icon="discord"
                                             className="svg-inline--fa fa-discord fa-w-14" role="img"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor"
                                                  d="M21.826 9h-2.086c.171-.487.262-.957.262-1.41 0-2.326-1.818-3.776-4.024-3.573-2.681.247-4.518 3.71-4.978 4.484-.527-.863-2.261-4.238-4.981-4.494-2.11-.199-4.019 1.181-4.019 3.582 0 3.109 4.347 7.084 9.001 11.615 1.16-1.127 2.285-2.208 3.324-3.243l.97 1.857c-1.318 1.302-2.769 2.686-4.294 4.181-6.164-6.037-11.001-10.202-11.001-14.403 0-3.294 2.462-5.526 5.674-5.596 2.163-.009 4.125.957 5.327 2.952 1.177-1.956 3.146-2.942 5.253-2.942 3.064 0 5.746 2.115 5.746 5.595 0 .464-.06.928-.174 1.395zm-11.094 4c-.346.598-.992 1-1.732 1-1.104 0-2-.896-2-2s.896-2 2-2c.74 0 1.386.402 1.732 1h1.222l1.88-2.71c.14-.202.376-.315.622-.299.245.016.464.161.576.38l2.27 4.437.813-1.45c.124-.221.357-.358.611-.358h5.274v2h-4.513l-1.759 2.908c-.132.219-.373.348-.629.337-.255-.01-.484-.16-.598-.389l-2.256-4.559-.989 1.406c-.131.186-.345.297-.573.297h-1.951z"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col w-full sm:w-11/12">
                                        <div className="font-bold">Fitness Tracker</div>
                                        <div className="text-gray-300">MERN-stack applikation där användaren kan hålla koll på hur deras fysiska aktivitet ser ut.
                                        </div>
                                    </div>
                                </a>
                        </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </motion.div>

        </body>
        </html>
    )
}