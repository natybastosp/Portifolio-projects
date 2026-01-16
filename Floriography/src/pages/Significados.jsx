import Layout from "../components/Layout";

function Significados() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <h1 className="text-burgundy font-yeseva text-4xl text-center">
          Significados das Flores
        </h1>
        <p className="text-burgundy text-lg font-josefin text-center">
          Explore o significado único de cada flor
        </p>

        {/* Aqui vai o conteúdo específico da página de Significados */}
      </div>
    </Layout>
  );
}

export default Significados;
