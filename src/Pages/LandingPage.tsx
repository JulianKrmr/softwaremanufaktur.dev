import React from "react";
import { Navbar, Button, Menu } from "react-daisyui";

const LandingPage = (props: any) => {
  return (
    <div className="flex absolute inset-x-0 top-0 w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="bg-base-100 shadow-xl rounded-box">
        <div className="flex-1 ">
          <Button color="ghost" className="normal-case text-xl">
            Softwaremanufaktur
          </Button>
        </div>
        <div className="flex-none space-x-4">
          <Button
            onClick={() => {
              props.scrollTo(2);
            }}
            color="ghost"
          >
            Projekte
          </Button>
          <Button color="ghost">Kontakt</Button>
        </div>
      </Navbar>
    </div>
  );
};

export default LandingPage;
