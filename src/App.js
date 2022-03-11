import Main from "./pages/main";
import Shop from "./pages/shop/shop";
import SelectActivity from "./pages/activities/selectActivity";
import Activity from "./pages/activities/activity";
import Employee from "./pages/employee/employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/activity" element={<SelectActivity/>} />
          <Route path="/hire" element={<Employee/>} />
          <Route path="/activity/workshops" element={<Activity title={"Nos Formation"} addButton={"Ajouter Formation"}/>} />
          <Route path="/activity/machines" element={<Activity title={"Nos Machines"} addButton={"Ajouter Machine"}/>} />
          <Route path="/activity/projects" element={<Activity title={"Nos Projets"} addButton={"Ajouter Projet"}/>} />
          <Route path="/activity/bootcamps" element={<Activity title={"Nos Bootcamps"} addButton={"Ajouter Bootcamp"}/>} />
          <Route path="/activity/events" element={<Activity title={"Nos événements"} addButton={"Ajouter Evénement"}/>} />
          <Route path="/activity/domaines" element={<Activity title={"Nos Domaines"} addButton={"Ajouter Domaine"}/>} />
          <Route path="/activity/services" element={<Activity title={"Nos Services"} addButton={"Ajouter Service"}/>} />
          <Route path="/activity/events" element={<Activity title={"Nos Evénements"} addButton={"Ajouter Evénement"}/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
