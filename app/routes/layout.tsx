import NavBar from "~/components/NavBar.jsx";
import { Outlet } from "react-router";
import Footer from "~/components/Footer";

export default function Layout() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background font-sans text-foreground antialiased">
      {/* Header / Navbar Component */}
      <header className="absolute top-0 left-0 z-50 w-full">
        <NavBar />
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Footer Component goes here */}
    </div>
  );
}
