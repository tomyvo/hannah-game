import { BrowserRouter } from "react-router-dom";
import App from "./App";

const basename = "/hannah-game"; // Hier der Name deines GitHub Repo

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
