import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
} from "@ionic/react";

interface MenuCustomEvent<T = any> extends CustomEvent {
  detail: T;
  target: HTMLIonMenuElement;
}

const Navigation: React.FC = () => {
  
  return (
    <>
      <IonMenu side="end" type="push" contentId="mainNav">
        <IonHeader>
          <IonToolbar color="danger">
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/home">Página Inicio</IonItem>
            <IonItem>Sobre nosotos</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="maniNav"></IonRouterOutlet>
    </>
  );
};

export default Navigation;