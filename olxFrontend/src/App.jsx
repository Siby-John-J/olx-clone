import PostProduct from "./components/pages/PostProduct";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";
import { useContext, useState } from "react";
import { modelContext } from "./context/authContext";
function App() {
    const [model, setModel] = useState(false)
    return (
        <modelContext.Provider value={{model, setModel}}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<PostProduct />} />
                <Route
                    path="/:products"
                    element={
                        <>
                            <Header />
                            <Products />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </modelContext.Provider>
    );
}

export default App;
