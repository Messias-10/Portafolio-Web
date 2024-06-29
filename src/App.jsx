import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar2 />
    </div>
  );
};

export default App;