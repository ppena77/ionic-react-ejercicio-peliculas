import { IonContent, IonGrid, IonPage, IonRow, IonCol, IonButton } from "@ionic/react";

import Toolbar from "../components/Toolbar";

const About: React.FC = () => {

    return (
        <IonPage>
            <Toolbar />
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <h1>Sobre My Ionic App</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae inventore ipsa explicabo quibusdam at enim magnam dolorem ab, nulla incidunt quam. Debitis eius praesentium quibusdam rerum atque, harum accusamus assumenda.</p>
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
    )
};

export default About;