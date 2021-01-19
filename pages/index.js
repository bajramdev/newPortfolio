import "tailwindcss/tailwind.css"
import  Head  from "next/head";
import {useState} from "react"
import Weather from '../components/Header';
import Songa from "../song.json";
import Image from "next/image";
import style1 from "../styles/Home.module.css";
import Mail from "../components/Mail"


export default function Home({posts , results: song}) {

    const [photos, setPhotos] = useState(posts)
    const [songs, setSongs] = useState(song)



    return (
      <html lang="en" >
      <Head>
        <title>Bajram Gerbeshi • Portfolio</title>
      </Head>
      <body className="bg-white dark:bg-black text-black dark:text-white" >

          <div id="__next">

          <div className="flex flex-col min-h-screen">
              <nav className="w-full flex justify-start items-center mx-auto max-w-4xl px-8 my-20" >
                  <a className="focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200" >
                      Projects
                  </a>
                  <div className="ml-auto" >
                    <button aria-label="Toggle Dark Mode" type="button" className="focus:outline-none bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="h-4 w-4 text-gray-800 dark:text-gray-200">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="moon" class="svg-inline--fa fa-moon fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                                <path fill="currentColor" d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z" ></path>
                            </svg>
                        </svg>
                    </button>


                  </div>
              </nav>
         <div className="h-full md:px-0 px-10">
             <div className="h-full w-full flex flex-col max-w-3xl mx-auto mb-16 sm:px-0">
        <div className={style1.diva}>
        <h1 className="text-6xl font-bold">Bajram</h1>
        </div>
                 <div className={style1.diva}>                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-sm mt-2">20 år gammal <span className="font-semibold">software developer</span> och student <br/> på MaU
                     från Trelleborg.</p>
              </div>

                 <div className={style1.diva}>                     <div className="grid grid-flow-col w-48 mt-3 text-lg" >

                         <div>
                             <a aria-label="GitHub" className="fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200" href="https://github.com/bajramdev" rel="noopener" target="_blank" >
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                             </a>
                         </div>
                         <div>
                             <a aria-label="GitHub"
                                className="fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
                                href="https://se.linkedin.com/in/bajram-gerbeshi-3292751b7" rel="noopener" target="_blank">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                             </a>
                         </div>
                         <div>
                             <a>
                                 <a aria-label="GitHub"
                                    className="fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
                                    rel="noopener" target="_blank" href="" onClick={(e) => {
                                     window.location = "mailto:bajramgerbeshi@hotmail.com";
                                     e.preventDefault();
                                 }} >
                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                                 </a>
                             </a>
                         </div>
                         <div></div>
                     </div>

                 </div>



              <div className={style1.diva} >
              <div className="grid my-8 gap-2" >
          <Weather/>
          <div className="fade-in" >
          <p >
              {photos.weather.map((post) => (
                  <p> It's currently <span className="font-bold" >{photos.main.temp_min} °C </span>  <span className="text-xs" >({post.description})</span> in <a href="https://openweathermap.org/city/2692969" rel="noopener" target="_blank" className="font-bold focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200" >Malmö.</a></p>
              ))}
          </p>
          </div>
              </div>
              </div>
          <div className={style1.diva}>
              <div>
                  <div className={style1.diva}>
                      <a href="https://spotify.com/" rel="noopener" target="_blank" className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 p-3 rounded-md border border-gray-800 shadow flex flex-row max-w-sm" >
                          <Image src={song.imag} alt="Song cover art" class="w-12 h-12 rounded shadow mr-4" height={40} width={40} />
                <div className="my-auto" >
              <div className="font-semibold text-sm sm:text-regular" >Not listening to anything</div>
                    <p className="text-xs" >
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="spotify" className="svg-inline--fa fa-spotify fa-w-16 fill-current text-green-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0"  >
                        <svg fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" ></svg>
                    </svg>Spotify</p>

                </div>
                      </a>
                  </div>
              </div>
              </div>
          </div>
         </div>

          </div>
          </div>

      </body>
    </html>
  )
}

export async function getServerSideProps() {

    const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Malmo&appid=73efc87c4798668f966ed4bef13fd0db&units=metric')
    const posts = await res.json()

    return {

        props: {
            posts,
            results: Songa,

        },


    }
}