import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
