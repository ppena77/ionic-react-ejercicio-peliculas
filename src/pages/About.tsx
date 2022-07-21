import { IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";

import Navigation from "../components/Navigation";
import Toolbar from "../components/Toolbar";

const About: React.FC = () => {

    return (
        <IonPage>
            <Toolbar />
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonRow>
                            <h1>Sobre My Ionic App</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae inventore ipsa explicabo quibusdam at enim magnam dolorem ab, nulla incidunt quam. Debitis eius praesentium quibusdam rerum atque, harum accusamus assumenda.</p>
                        </IonRow>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default About;