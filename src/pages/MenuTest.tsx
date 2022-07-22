import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";

const MenuTest: React.FC = () => {
    console.log('menú test');

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Toolbar</IonTitle>
                        <IonButtons slot="end">
                            <IonMenuButton menu="main-menu" autoHide={false}></IonMenuButton>
                        </IonButtons>                        
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe aut similique libero quibusdam ab animi quaerat nulla repellendus! Unde illum deleniti aut aliquid quod commodi, sit itaque iure culpa.</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
        
    )
};

export default MenuTest;