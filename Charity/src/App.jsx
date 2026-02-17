import "./App.css";
import MainHeader from "../src/component/Layout/MainHeader";
import Home from "./pages/Home";
import Footer from "./component/Layout/MainFooter";

function App() {
  return (
    <div className="">
      <MainHeader />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
