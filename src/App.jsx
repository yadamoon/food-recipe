import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import FooterApp from "./components/common/FooterApp";
import HeaderApp from "./components/common/HeaderApp";
import DetailsComponents from "./components/Navs/DetailsComponents";
import NotFound from "./components/Navs/NotFound";
// import EditorFoodRecipe from "./components/cards/EditorFoodRecipe";
import Services from "./components/Services";
import Help from "./components/Help";
import RegisterForm from "./components/forms/RegisterForm";

function App() {
  return (
    <div className="pt-0 bg-gray-300">
      <HeaderApp />
      <Nav/>
      <Routes>
             <Route path="/" element={<DetailsComponents />}/>
             <Route path="/Services" element={<Services />} />
             <Route path="/help" element={<Help />} />
             <Route path="/register" element={<RegisterForm />} />
             <Route path="*" element={<NotFound />} />
            
      </Routes>
      <FooterApp />
    </div>
  );
}

export default App;
