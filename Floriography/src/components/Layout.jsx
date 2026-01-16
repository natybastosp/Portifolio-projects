import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navbar presente em todas as páginas */}
      <Navbar />

      {/* Conteúdo específico de cada página */}
      <main className="mx-3 my-8 p-8 border-9 border-double border-gold bg-cream">
        {children}
      </main>
    </div>
  );
}

export default Layout;
