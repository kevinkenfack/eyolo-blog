import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
