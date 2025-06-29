import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HeroSection from "./components/HeroSection";
import NewReleases from "./components/NewReleases";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection></HeroSection>
      <NewReleases></NewReleases>
    </>
  );
}

export default App;
