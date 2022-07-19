import "./Card.css";

import { IonButton, IonCard, IonCardHeader, IonCol } from "@ionic/react";

interface movie {
  id: number;
  title: string;
  poster_path: string;
}

const Card: React.FC<{ movieData: movie }> = (props) => {
  /*console.log(props.movieData);
  console.log(typeof(props.movieData));
  console.log(props.movieData.id);
  console.log(props.movieData.title);
  console.log(props.movieData.poster_path);*/

  const imgDomain = "https://image.tmdb.org/t/p/w220_and_h330_face";

  return (
    <IonCol size="12" size-sm="6" size-md="4" size-lg="2">
      <IonCard className="ion-card__img">
        <img
          src={imgDomain + props.movieData.poster_path}
          alt={props.movieData.title}
          title={props.movieData.title}
        />
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
