import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";

import Navigation from "../components/Navigation";

const MenuTest: React.FC = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle slot="start">My Ionic App</IonTitle>
                    <IonButtons slot="end">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            
            <IonContent>
                {/* Aquí va contenido */}
            </IonContent>
        </>
        
    )
};

export default MenuTest;