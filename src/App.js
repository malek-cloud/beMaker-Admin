import Main from "./pages/main";
import Shop from "./pages/shop/shop";
import Products from "./pages/shop/products";
import SelectActivity from "./pages/activities/selectActivity";
import Activity from "./pages/activities/activity";
import Employee from "./pages/employee/employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Participants from "./components/activitiesComponents/participants";
import DetailedOrder from "./pages/shop/detailedOrder";
import Login from "./pages/login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"  element={JSON.parse(localStorage.getItem("employee")) === null ? <Login/> : <Main/>}   />
          {/* <Route path="/accueil" element={<Main/>} /> */}
          <Route path="/shop" element={<Shop/>} />
          <Route path="/activity" element={<SelectActivity/>} />
          <Route path="/hire" element={<Employee/>} />
          <Route path="/activity/workshops" element={<Activity title={"Nos Formations"} addButton={"Ajouter Formation"} />} />
          <Route path="/shop/kitIot" element={<Products title={"Nos Kits IOT"}  category={"kit IOT"}/>} />
          <Route path="/shop/kitRobotique" element={<Products title={"Nos Kits Robotique"}  category={"kit Robotique"}/>} />
          <Route path="/shop/kitArduino" element={<Products title={"Nos Kits Arduino"} />} category={"kit Arduino"}/>
          <Route path="/shop/capteur" element={<Products title={"Nos Capteurs"} />} category={"capteur"} />
          <Route path="/shop/accessoires" element={<Products title={"Nos Accessoires"} category={"accessoire"} />} />
          <Route path="/shop/ClipartLaser" element={<Products title={"Nos Cliparts Découpe Laser"} category={"clipart découpe laser"} />} />
          <Route path="/shop/cartes" element={<Products title={"Nos Cartes de Développement"} category={"carte de développement"} />} />
          <Route path="/activity/events" element={<Activity title={"Nos événements"} addButton={"Ajouter Evénement"}/>} />
          <Route path="/activity/projects" element={<Activity title={"Nos Projets"} addButton={"Ajouter Projet"}/>} />
          {/*<Route path="/activity/machines" element={<Activity title={"Nos Machines"} addButton={"Ajouter Machine"}/>} />
          <Route path="/activity/bootcamps" element={<Activity title={"Nos Bootcamps"} addButton={"Ajouter Bootcamp"}/>} /> */}
          {/*<Route path="/activity/domaines" element={<Activity title={"Nos Domaines"} addButton={"Ajouter Domaine"}/>} />
          <Route path="/activity/services" element={<Activity title={"Nos Services"} addButton={"Ajouter Service"}/>} /> */}
          <Route path="/activity/participants" element={<Participants inWhat={"formations"}  />} />
          <Route path="/activity/participantsEvents" element={<Participants inWhat={"événements"}  />} />
          <Route
                path={`/shop/detail_order/:id`}
                element={<DetailedOrder />}
              />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
