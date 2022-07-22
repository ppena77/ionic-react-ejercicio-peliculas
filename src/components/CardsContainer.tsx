import Card from "./Card";

import moviesJSON from '../JSON/movies.json';

const CardsContainer: React.FC = () => {

    /* Cargamos el archivo JSON correspondiente, nos quedamos con los 5 primeros elementos y lo guardamos en la variable movies, a la que llamaremos dentro del "cuerpo" del componente */
    const movies = moviesJSON.slice(0,5);

    /* Vamos a retornar las cards pertinentes, a la que le inyectaremos los datos almacendos en movies, invocando a movies y pasandole el método maps. Haay que asignar una key por cuestión de optimización a cada card. El atributo movieData, donde vamos a pasar los datos de la card al componente hijo está predefinido en este último */
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