import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";

function Layout() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <a
        href="https://wa.me/9361011583"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 lg:p-3 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}

export default Layout;
