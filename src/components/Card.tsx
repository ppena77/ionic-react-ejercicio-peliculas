import "./Card.css";

import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCol } from "@ionic/react";

const Card: React.FC = () => {
  return (
    <IonCol size="12" size-sm="6" size-md="4" size-lg="2">
      <IonCard className="ion-card__img">
        <img src="https://image.tmdb.org/t/p/w220_and_h330_face/1f3qspv64L5FXrRy0MF8X92ieuw.jpg" />
        <IonCardHeader>
          <IonButton href="" expand="block">+ Info</IonButton>
        </IonCardHeader>
      </IonCard>
    </IonCol>
  );
};

export default Card;
