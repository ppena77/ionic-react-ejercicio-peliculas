import { IonPage, IonContent, IonGrid, IonRow, IonCol} from '@ionic/react';
import Toolbar from '../components/Toolbar';

const Pelicula: React.FC = () => { 

  return (
    <IonPage>
      <Toolbar />
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Movie Title</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <p>
              <a href="/home">Volver</a>
            </p>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Pelicula;