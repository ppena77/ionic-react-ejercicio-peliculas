import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

import Navigation from "./Navigation";

const Toolbar: React.FC = () => {
    console.log('testing Toolbar component 3');

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle slot="start">My Ionic App</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false}>
                
            </IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Toolbar;
