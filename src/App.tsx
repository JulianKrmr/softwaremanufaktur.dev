import React from "react";
import { Button } from "react-daisyui";
import ReactFullpage from "@fullpage/react-fullpage";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={""}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        const scrollTo = (section: number) => {
          fullpageApi.moveTo(section);
        };
        return (
          <ReactFullpage.Wrapper>
            <div className="section bg-primary">
              <LandingPage scrollTo={scrollTo}></LandingPage>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
