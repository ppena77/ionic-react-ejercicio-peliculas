import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

import CardsContainer from '../components/CardsContainer';
import Toolbar from '../components/Toolbar';

const Home: React.FC = () => {
  console.log('testing home 3');

  return (
    <IonPage>
      <Toolbar />
      <IonContent fullscreen className='ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol>
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