import { Route, Routes } from "react-router-dom";
import LayoutWrapper from "./components/layout/Layout.jsx";
import Header from "./components/header/Header.jsx";
import Products from "./components/products/Products.jsx";
import Featured from "./components/home/Featured.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

import { OpenMenuProvider } from "./components/context/menuContext.jsx"
import { CartProvider } from "./components/context/cartContext.jsx";

function App() {
    return (
        <>
            <OpenMenuProvider>
                <CartProvider>
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
                </CartProvider>
            </OpenMenuProvider>
        </>
    );
}


export default App;
