import ShowProducts from "./Components/ShowProducts/index";
import ShowCart from "./Components/ShowCart/index";
import GlobalStyle from "./Styles/global";

function App() {
  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <h1>Produtos</h1>
      <ShowProducts/>
      <h1>Carrinho</h1>
      <ShowCart/>
    </div>
    </>
  );
}

export default App;
