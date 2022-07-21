import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import Toolbar from '../components/Toolbar';

interface urlDataCatcher extends RouteComponentProps <{
  id: string;
  title: string
}> {};


const Pelicula: React.FC< urlDataCatcher > = ( {match} ) => { 
  console.log('cache test 104');

  return (
    <IonPage>
      <Toolbar />
      <IonContent fullscreen className='ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>{match.params.title}</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton routerLink='/home' >Volver</IonButton>              
            </IonCol>
          </IonRow>
        </IonGrid>        
      </IonContent>      
    </IonPage>
  )
};

export default Pelicula;