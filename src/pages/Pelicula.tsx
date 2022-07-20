import { IonPage, IonContent } from '@ionic/react';


const Pelicula: React.FC = () => { 
  console.log('why is it not rendering');

  return (
    <IonPage>
      <IonContent fullscreen className='ion-padding'>
        <p>Hello</p>
      </IonContent>      
    </IonPage>
  )
};

export default Pelicula;