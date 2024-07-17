import { Route, Routes, Outlet } from "react-router-dom";
import LayoutWrapper from "./components/layout/Layout";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Featured from "./components/home/Featured.jsx";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

import { OpenMenuProvider } from "./components/context/menuContext.jsx"

function App() {
    return (
        <>
            <OpenMenuProvider>
                <LayoutWrapper>
                    <Header/>
                    <Routes>
                        <Route path="/" element={[<Featured key={1}/>, <Footer key={5}/>]} />
                        <Route path="/sobre-nosotros" element={[<About key={2}/>,<Footer key={5}/>]} />
                        <Route path="/productos" element={[<Products key={3}/>,<Footer key={5}/>]} />
                        <Route path="/contacto" element={[<Contact key={4}/>,<Footer key={5}/>]} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </LayoutWrapper>
            </OpenMenuProvider>
        </>
    );
}


export default App;
