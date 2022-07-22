import { IonContent, IonHeader, IonItem, IonList, IonMenu, IonRouterOutlet, IonTitle, IonToolbar } from "@ionic/react";

const Navigation: React.FC = () => {
  
  return (
    <>
      <IonMenu menuId="main-menu" contentId="main">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Página Inicio</IonItem>
            <IonItem>Sobre My Ionic App</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Navigation;