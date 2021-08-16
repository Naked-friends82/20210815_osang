import AppRouter from "./AppRouter";
import "../style/web/univ.css";
import "../style/mobile/univ_mobile.css";


function App() {
  return (
    <main className="App">
        <AppRouter />
      <footer>
        <div>
          © 2021. Oh Sang Min. All Rights Reserved.
        </div>
        <div>Designed by Naked Friends+82</div>
      </footer>
    </main>
  );
}

export default App;