import { MainSlot } from "./component/MainSlot";
import { SpinButton } from "./component/SpinButton";
import { SlotContextProvider } from "./context/SlotContext";

function App() {
  return (
    <div className="App">
      <SlotContextProvider>
        <MainSlot />
        <SpinButton />
      </SlotContextProvider>
    </div>
  );
}

export default App;
