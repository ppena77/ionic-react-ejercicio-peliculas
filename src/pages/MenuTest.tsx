import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";

const MenuTest: React.FC = () => {
    console.log('menú test');

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle slot="start">My Ionic App</IonTitle>
                    <IonButtons slot="end">
                        <IonMenuButton autoHide={false}></IonMenuButton>
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