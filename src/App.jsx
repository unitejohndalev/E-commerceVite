//import components
import NikeProducts from "./components/NikeProducts";
import HMProducts from "./components/HMProducts";
import HerschelProducts from "./components/HerschelProducts";
import NikeProductDescription from "./context/NikeProductDescription";
import HMProductDescription from "./context/HMProductDescription";
import HerschelProductDescription from "./context/HerschelProductDescription";

function App() {
  return (
    <>
      <NikeProducts />
      <HMProducts />
      <HerschelProducts />
      <NikeProductDescription />
      <HMProductDescription />
      <HerschelProductDescription />
    </>
  );
}

export default App;
