import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

import Navigation from "../components/Navigation";

const MenuTest: React.FC = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My Ionic App</IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <IonContent>
                {/* Aquí va contenido */}
            </IonContent>
        </>
        
    )
};

export default MenuTest;