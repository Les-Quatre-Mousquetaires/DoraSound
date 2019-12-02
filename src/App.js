import React from 'react';
import MasterComponent from "./components/MasterPage/masterComponent";
import LoaderComponent from "./components/UtilsComponents/loaderComponent";
import RegisterComponent from "./components/AuthPage/registerComponent";
import ClearComponent from "./components/UtilsComponents/clearComponent";
import SaveComponent from "./components/UtilsComponents/saveComponent";
import LanguageComponent from "./components/UtilsComponents/languageComponent";

function App() {
    return (
        <div>
            <LoaderComponent/>
            <MasterComponent/>
            <RegisterComponent/>
            <LanguageComponent/>
            <ClearComponent/>
            <SaveComponent/>
        </div>

    );
}

export default App;
