import { IonButton, IonCard, IonCardHeader, IonCol, IonImg } from "@ionic/react";

/* Definimos la interfaz movie con los elementos que queremos capturaar que vienen del componente padre */
interface movie {
  id: number;
  title: string;
  poster_path: string;
};

/* Cargamos nuestra propiedad custom movieData, que es el atributo con los datos que llegan desde el componente padre, y le asignamos el tipo movie, definido arriba (quizá no es muy ideal que definamos como un "movie" la propidad movieData " y que los datos almacenados en el atributo se haga también a través de un objeto llamado "movie", pero lo dejamos así)*/
const Card: React.FC<{ movieData: movie }> = (props) => {
  
  const imgDomain = "https://image.tmdb.org/t/p/w220_and_h330_face";

  return (
    <IonCol className="ion-align-self-center" size="12" size-sm="6" size-md="4" size-lg="2">
      <IonCard className="ion-card__img">
        <IonImg 
          src={imgDomain + props.movieData.poster_path}
          alt={props.movieData.title}
          title={props.movieData.title} />
        <IonCardHeader>
          <IonButton routerLink={`/pelicula/${props.movieData.id}/${props.movieData.title}`} expand="block">
            + Info
          </IonButton>
        </IonCardHeader>
      </IonCard>
    </IonCol>
  );
};

export default Card;