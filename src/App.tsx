import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Páginas del proyecto */

import Home from "./pages/Home";
import Pelicula from "./pages/Pelicula";
import About from "./pages/About";

/* Menú */

import Navigation from "./components/Navigation";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* Inyectamos aquí el menú de navegación */}
    <Navigation />

    {/* Aplicamos la configuración de nuestras páginas con Ion React Router */}
    <IonReactRouter>
      <IonRouterOutlet id="main">
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route path="/pelicula/:id/:title" component={Pelicula} />
        <Route path="/about" component={About} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
