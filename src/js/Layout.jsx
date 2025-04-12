import Home from "./pages/Home"
import { Contact } from "./pages/Contact"
import { TitleMain } from "./components/TitleMain"

const Layout = () => {
    return (
        <>
            {/*Aqui solo van los componentes de vista*/}
            <Home />
            <Contact />
        </>
    )
}

export default Layout