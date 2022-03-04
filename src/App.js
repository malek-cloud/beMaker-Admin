import Main from "./pages/main";
import Shop from "./pages/shop/shop";
import Activity from "./pages/presentation/activity";
import Workshops from "./pages/presentation/workshops";
import Machines from "./pages/presentation/machines";
import Projets from "./pages/presentation/projets";
import Employee from "./pages/employee/employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/activity" element={<Activity/>} />
          <Route path="/hire" element={<Employee/>} />
          <Route path="/activity/workshops" element={<Workshops/>} />
          <Route path="/activity/machine" element={<Machines/>} />
          <Route path="/activity/project" element={<Projets/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
