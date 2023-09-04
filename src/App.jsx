import FooterApp from "./components/common/FooterApp";
import HeaderApp from "./components/common/HeaderApp";
import NewRecipe from "./components/common/NewRecipe";
import MainApp from "./components/main/MainApp";

function App() {
  return (
    <div className="pt-0 bg-gray-300">
      <HeaderApp />
      <MainApp />
      <NewRecipe/>
      <FooterApp />
    </div>
  );
}

export default App;
