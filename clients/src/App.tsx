import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./hooks/useAuth";
import { Header } from "./components/layout/Header";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { SelectionBus } from "./pages/SelectionBus";
import { AdminPage } from "./users/Admin/AdminPage";
import PaymentProcessing from "./components/layout/PaymentProcessing";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    // <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/selectionbus/:id" element={<SelectionBus />} />
              <Route path="/admin-profile" element={<AdminPage />} />
              <Route path="/PaymentProcessing" element={<PaymentProcessing/>} />
              <Route path="/about-us" element={<AboutPage/>} />
            </Routes>
          </main>
        </div>
      </Router>
    // </AuthProvider>
  );
}

export default App;
