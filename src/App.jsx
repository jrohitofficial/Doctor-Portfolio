import About from "./components/about";
import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";
import Header from "./components/header";
import LatestEventsShow from "./components/latest-events";
import NavigationBar from "./components/navigation-bar";
import QualificationAwards from "./components/qualification-awards";
import SensitivePerson from "./components/sensitive-person";
import SuccessStory from "./components/success-story";
import Testimonial from "./components/testimonial";
import WorkHistory from "./components/work-history";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <About />
      <WorkHistory />
      <Testimonial />
      <QualificationAwards />
      {/* <SensitivePerson /> */}
      <SuccessStory />
      <LatestEventsShow />
      <CallToAction />
      <Footer />
    </>
  );
};

export default App;
