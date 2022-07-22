import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Navigation: React.FC = () => {
  return (
    <IonMenu side="end" menuId="main-menu" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menú</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/home">Página Inicio</IonItem>
          <IonItem routerLink="/about">Sobre My Ionic App</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Navigation;
