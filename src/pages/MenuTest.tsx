import { IonContent } from "@ionic/react";

import Navigation from "../components/Navigation";

const MenuTest: React.FC = () => {
    return (
        <>
            <Navigation />  
            <IonContent>
                {/* Aquí va contenido */}
            </IonContent>
        </>
        
    )
};

export default MenuTest;