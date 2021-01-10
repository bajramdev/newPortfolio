import React from 'react';


// posts will be populated at build time by getStaticProps()
function Header({ date }) {
    return (
        <h1>  time is {date} </h1>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    let date =  new Date()

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            date,
        },
    }
}

export default Header;