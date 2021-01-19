import Songa from '../song.json';

const Songs = ({ results: query }) => {
    return (
        <div>
            <h1>getServerSideProps</h1>
                    <h3>{query.artist} - {query.song}</h3>
                    <p>{query.imag}</p>
            )}
        </div>
    );
}

export async function getServerSideProps(context){
    return {
        props: {
            results: Songa,
        }
    }
}

export default Songs