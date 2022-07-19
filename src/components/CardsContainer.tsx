import Card from "./Card";

import moviesJSON from '../JSON/movies.json';

const CardsContainer: React.FC = () => {

    const movies = moviesJSON.slice(0,5);

    const renderCards = movies.map( renderCard => {

        console.log(renderCard.id, typeof(renderCard.id));

        return (
            <Card key={renderCard.id} />
        )
    });

    console.log(movies);

    return (
        <>
            {/*movies.map( movie => <Card />)*/}
            {renderCards}
        </>
    )
};

export default CardsContainer;