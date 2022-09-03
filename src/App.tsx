import { AppRouter } from "./core/router/AppRouter";
import { ButtonInstallPwa } from "./modules/pwa/ButtonInstallPwa";
import "./styles/index.scss";

export const App = () => {
  return (
    <div className="App">

      {/* for test */}
      <ButtonInstallPwa />
      {/* for test */}
      <AppRouter />
    </div>
  );
};
