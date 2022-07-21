import "./App.css";
import AllIdeas from "./components/AllIdeas/AllIdeas";
import AllPlans from "./components/AllPlans/AllPlans";
import Cards from "./components/Cards/Cards";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Review from "./components/Review/Review";
import TrustedBy from "./components/TrustedBy/TrustedBy";

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <TrustedBy />
      <Cards />
      <AllPlans />
      <Review />
      <Intro profile />
      <Intro profile reverse />
      <Intro profile />
      <AllIdeas />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
