import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import "./Home.css";

import Toolbar from "../components/Toolbar";
import CardsContainer from "../components/CardsContainer";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Toolbar />
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <h1>Películas recientes</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <CardsContainer />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
