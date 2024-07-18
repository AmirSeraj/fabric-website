import { NextUIProvider } from "@nextui-org/system";
import Main from "./components/Main";
import { DataProvider } from "./components/Context";

function App() {
  return (
    <NextUIProvider>
      <DataProvider>
        <Main />
      </DataProvider>
    </NextUIProvider>
  );
}

export default App;
