import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

/* Ojo, en IonMenuButton hay que apuntar a través del atributo "menu" a la propiedad menuId del menú de navegación */

const Toolbar: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Ionic App</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton menu="main-menu" autoHide={false} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Toolbar;
