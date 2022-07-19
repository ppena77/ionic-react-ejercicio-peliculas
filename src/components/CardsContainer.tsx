import Card from "./Card";

import moviesJSON from '../JSON/movies.json';

const CardsContainer: React.FC = () => {

    const movies = moviesJSON.slice(0,5);

    return (
        <>
            {movies.map( movie => {
                return (
                    <Card movieData={movie} key={movie.id} />
                )})}
        </>
    )
};

export default CardsContainer;