import Footer from "./Footer";
import Header from "./Header";
import "./index.css";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='content'>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
