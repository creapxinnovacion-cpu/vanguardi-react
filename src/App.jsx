import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/layout/Navbar";
import Footer from "./assets/components/layout/Footer";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full flex flex-col">
        <Navbar />

        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
