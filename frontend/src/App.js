import { useEffect } from "react";
import "@/App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar, FloatingDonate } from "@/components/Navbar";
import Home from "@/pages/Home";
import BookingPage from "@/pages/BookingPage";
import DonatePage from "@/pages/DonatePage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App bg-paper min-h-screen">
      <BrowserRouter>
        <SmoothScroll>
          <ScrollToTop />
          <Navbar />
          <FloatingDonate />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:type" element={<BookingPage />} />
            <Route path="/donate" element={<DonatePage />} />
          </Routes>
          <Toaster
            position="top-center"
            richColors
            toastOptions={{ style: { fontFamily: "Outfit, sans-serif" } }}
          />
        </SmoothScroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
