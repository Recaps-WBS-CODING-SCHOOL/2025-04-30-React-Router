import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Layout = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div>
      <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
      <main>
        <Outlet context={{ signedIn, setSignedIn }} />
      </main>
    </div>
  );
};

export default Layout;
