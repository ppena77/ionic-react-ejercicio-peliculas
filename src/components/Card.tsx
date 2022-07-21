import { IonButton, IonCard, IonCardHeader, IonCol, IonImg } from "@ionic/react";

interface movie {
  id: number;
  title: string;
  poster_path: string;
};

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