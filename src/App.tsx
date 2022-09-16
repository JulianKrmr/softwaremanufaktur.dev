import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import LandingPage from "./Pages/LandingPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={""}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        const scrollTo = (section: number) => {
          //@ts-ignore
          fullpageApi.moveTo(section);
        };
        return (
          <ReactFullpage.Wrapper>
            <div className="section bg-gray-900">
              <LandingPage scrollTo={scrollTo}></LandingPage>
            </div>
            <div className="section bg-gray-900">
              <p>Section 2</p>
            </div>
            <div className="section bg-gray-900">
              <ContactPage></ContactPage>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
