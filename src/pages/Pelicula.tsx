import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import Toolbar from "../components/Toolbar";

/* Hay que expandir las definiciones de RouteComponentProps para que espere y pueda capturar el id y el title que pasamos a la página a través de la URL. Lo hacemos declarando el siguiente interface */

interface urlDataCatcher
  extends RouteComponentProps<{
    id: string;
    title: string;
  }> {}

/* Cargamos la funcionalidad RouteComponentProps "expandido" en nuestra página, y llamamos al objeto "match" asociado, con el que se accede a las propiedades de RouteComponentProps, dentro del cual deben estar registrados el id y title de la url */

const Pelicula: React.FC<urlDataCatcher> = ({ match }) => {
  return (
    <IonPage>
      <Toolbar />
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>{match.params.title}</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton routerLink="/home">Volver</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Pelicula;
