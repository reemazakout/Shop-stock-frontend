import { Provider } from "react-redux";
import AppRouter from "./AppRouter/AppRouter";
import { store, persistor } from "./app/Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <ToastContainer />

          <PersistGate loading={null} persistor={persistor}></PersistGate>

          <AppRouter />
        </Provider>
      </div>
    </>
  );
}
