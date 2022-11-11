import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { FavoritosContext } from "./components/FavoritosContext/FavoritosContext";

function App() {
  return (
    <FavoritosContext>
      <Header />
      <Main />
      <Footer />
    </FavoritosContext>
  );
}

export default App;
