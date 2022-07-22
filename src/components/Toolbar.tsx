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
          <IonTitle>My Ionic App</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton menu="main-menu" autoHide={false}>                
            </IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Toolbar;
