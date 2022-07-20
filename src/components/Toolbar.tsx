import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

const Toolbar: React.FC = () => {

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
