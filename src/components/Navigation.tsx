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
  console.log("Inyectando Menú Navegación");

  return (
    <>
      <IonMenu side="end" type="push">
        <IonHeader>
          <IonToolbar color="danger">
            <IonTitle>End Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet></IonRouterOutlet>
    </>
  );
};

export default Navigation;
