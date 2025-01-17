import Background from "./components/Background";
import Foreground from "./components/Foreground";

const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800 font-display">
      <Background />
      <Foreground />
    </div>
  );
};

export default App;