import './Card.css';

import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";

const Card: React.FC = () => {
  return (
    <IonCard className="ion-card__img">
      <img src="https://image.tmdb.org/t/p/w220_and_h330_face/1f3qspv64L5FXrRy0MF8X92ieuw.jpg" />
      <IonCardHeader>
        <IonCardTitle>My card</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default Card;
