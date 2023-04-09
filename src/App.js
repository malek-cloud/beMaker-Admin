import Main from "./pages/main";
import Shop from "./pages/shop/shop";
import Products from "./pages/shop/products";
import SelectActivity from "./pages/activities/selectActivity";
import Activity from "./pages/activities/activity";
import Employee from "./pages/employee/employee";
import Marketing from "./pages/shop/marketing";
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
          <Route path="/shop/iot" element={<Products title={"Nos Kits IOT"}  category={"IOT"}/>} />
          <Route path="/shop/robotique" element={<Products title={"Nos Kits Robotique"}  category={"Robotique"}/>} />
          <Route path="/shop/modules" element={<Products title={"Nos modules"} />} category={"Modules"}/>
          <Route path="/shop/capteur" element={<Products title={"Nos Capteurs"} />} category={"Capteurs"} />
          <Route path="/shop/afficheurs" element={<Products title={"Nos Afficheurs"} category={"Afficheurs"} />} />
          <Route path="/shop/machines3D&CNC " element={<Products title={"Nos Machines 3D et cnc"} category={"Machines 3D et cnc"} />} />
          <Route path="/shop/cartes" element={<Products title={"Nos Cartes de Développement"} category={"Cartes de développement"} />} />
          <Route path="/shop/drone" element={<Products title={"Nos Drone & Aeromodele"} category={"Drone & Aeromodele"} />} />
          <Route path="/shop/moteurs" element={<Products title={"Nos Moteurs & Drivers"} category={"Moteurs & Drivers"} />} />
          <Route path="/shop/electronique" element={<Products title={"Nos Composants electroniques"} category={"Composants electroniques"} />} />
          <Route path="/shop/connecteurs" element={<Products title={"Nos connecteurs et cables"} category={"Connecteurs et cables"} />} />
          <Route path="/shop/alimentation" element={<Products title={"Nos Alimentation & Batteries"} category={"Alimentation & Batteries"} />} />
          <Route path="/shop/outillages" element={<Products title={"Nos Outillages & Mesures"} category={"Outillages & Mesures"} />} />
          <Route path="/activity/events" element={<Activity title={"Nos événements"} addButton={"Ajouter Evénement"}/>} />
          <Route path="/activity/projects" element={<Activity title={"Nos Projets"} addButton={"Ajouter Projet"}/>} />
          <Route path="/activity/participants" element={<Participants inWhat={"formations"}  />} />
          <Route path="/activity/participantsEvents" element={<Participants inWhat={"événements"}  />} />
          <Route
                path={`/shop/detail_order/:id`}
                element={<DetailedOrder />}
              />      
               <Route path="/shop/addMarketingImage" element={<Marketing inWhat={"shop marketing"}  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
