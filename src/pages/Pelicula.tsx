import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import Toolbar from '../components/Toolbar';


const Pelicula: React.FC = () => { 
  console.log('cache test 104');

  return (
    <IonPage>
      <Toolbar />
      <IonContent fullscreen className='ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Movie title</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <a href="/home">Volver</a>              
            </IonCol>
          </IonRow>
        </IonGrid>        
      </IonContent>      
    </IonPage>
  )
};

export default Pelicula;