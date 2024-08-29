import { Provider } from "react-redux";
import AppRouter from "./AppRouter/AppRouter";
import { store, persistor } from "./app/Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>

      <ToastContainer />
    </Provider>
  );
}
