import Layout from "../components/Layout";

function Buques() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <h1 className="text-burgundy font-yeseva text-4xl text-center">
          Buquês Especiais
        </h1>
        <p className="text-burgundy text-lg font-josefin text-center">
          Descubra arranjos florais perfeitos para cada ocasião
        </p>

        {/* Aqui vai o conteúdo específico da página de Buquês */}
      </div>
    </Layout>
  );
}

export default Buques;
