import "tailwindcss/tailwind.css"
import  Head  from "next/head";
import {useState} from "react"
import Date from '../components/date.component';
import Song from "./api/song.json";
import style1 from "../styles/Home.module.css";
import Link from 'next/link';
import { motion } from "framer-motion";
import Container from "../components/NowPlaying";
const animation = require('../animations/animations');
export default function Home({posts}) {

    const [photos, setPhotos] = useState(posts)

    return (
      <html lang="en" >
      <Head>
        <title>Bajram Gerbeshi • Portfolio</title>
          <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body className="bg-black text-white" >

          <motion.div id="__next" initial="initial" animate="animate">

          <div className="flex flex-col min-h-screen">
              <nav className="w-full flex justify-start items-center mx-auto max-w-4xl px-8 my-20" >
                  <Link href="/">
                  <a className="focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-200" >
                     Hem
                  </a>
                  </Link>
                  <Link href="/projekt" >
                  <a className="focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-200" >
                      Projekt
                  </a>
                  </Link>
                  <div className="ml-auto">
                  </div>
              </nav>
         <div className="h-full md:px-0 px-10">
             <div className="h-full w-full flex flex-col max-w-3xl mx-auto mb-16 sm:px-0">
        <motion.div className={style1.diva} variants={animation.fadeInUp} >
        <motion.h1 className="text-6xl font-bold" variants={animation.fadeInUp} >Bajram</motion.h1>
        </motion.div>
                 <motion.div className={style1.diva} variants={animation.fadeInUp} >                  <p className="text-gray-400 max-w-sm mt-2">20 år gammal <span className="font-semibold">software developer</span> och student <br/> på Mau,
                     från Trelleborg.</p>
              </motion.div>

                 <motion.div className={style1.diva} variants={animation.fadeInUp} >                     <div className="grid grid-flow-col w-48 mt-3 text-lg" >

                         <div>
                             <a aria-label="GitHub" className="fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-200" href="https://github.com/bajramdev" rel="noopener" target="_blank" >
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                             </a>
                         </div>
                         <div>
                             <a aria-label="Linkedin"
                                className="fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-200"
                                href="https://se.linkedin.com/in/bajram-gerbeshi-3292751b7" rel="noopener" target="_blank">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                             </a>
                         </div>
                         <div>
                             <a>
                                 <a aria-label="Mail"
                                    className="fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-200"
                                    rel="noopener" target="_blank" href="" onClick={(e) => {
                                     window.location = "mailto:bajramgerbeshi@hotmail.com";
                                     e.preventDefault();
                                 }} >
                                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                                 </a>
                             </a>
                         </div>
                     </div>
                 </motion.div>
              <motion.div className={style1.diva} variants={animation.fadeInUp} >
              <div className="grid my-8 gap-2" >
                  <div>
          <Date/>
                  </div>
          <div>
          <p>
              {photos.weather.map((post) => (
                  <p key={post.id} > Det är för tillfället <span className="font-bold" >{Math.round(photos.main.temp_min * 10) / 10} °C </span>  <span className="text-xs" >({post.description})</span> i <a href="https://openweathermap.org/city/2692969" rel="noopener" target="_blank" className="font-bold focus:outline-none transition duration-300 ease-in-out hover:text-indigo-200" >Malmö.</a></p>
              ))}
          </p>

          </div>
              </div>
              </motion.div>
          <motion.div className={style1.diva} variants={animation.fadeInUp}>
              <div>
                <Container/>
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
//API call to the endpoint of weather website to get useful information regarding
export async function getServerSideProps() {

    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Malmo&appid=73efc87c4798668f966ed4bef13fd0db&units=metric`);
    const posts = await res.json();

    return {

        props: {
            posts,
            results: Song,
        },


    }
}
