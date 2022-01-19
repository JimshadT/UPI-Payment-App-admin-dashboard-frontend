import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store/store";
import Main from "./Main";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Main />
            </PersistGate>
        </Provider>
    );
};

export default App;
