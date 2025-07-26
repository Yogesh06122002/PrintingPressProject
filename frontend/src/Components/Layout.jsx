import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa'

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <a
        href="https://wa.me/1234567890" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-2 lg:p-3 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}

export default Layout;
