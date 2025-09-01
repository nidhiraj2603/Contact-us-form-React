import "./App.css";
import ContactFrom from "./components/ContactForm/ContactFrom";
import ContactHeader from "./components/Navigation/ContachHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";

function App() {
  // console.log("APP");
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactFrom />
      </main>
    </div>
  );
}

export default App;
