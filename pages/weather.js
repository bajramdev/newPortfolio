import Image from 'next/image'


function Weather({ posts }) {
    return (
        <div>
            {posts.weather.map((post) => (
                <p>{post.main} {post.icon} </p>

            ))}
        </div>
)
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {

    const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=TRELLEBORG&appid=73efc87c4798668f966ed4bef13fd0db')
    const posts = await res.json()

    return {

        props: {
            posts,
        },


    }
}

export default Weather;