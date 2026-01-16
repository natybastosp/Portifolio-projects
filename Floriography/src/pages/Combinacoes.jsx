import Layout from "../components/Layout";

function Combinacoes() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <h1 className="text-burgundy font-yeseva text-4xl text-center">
          Combinações de Flores
        </h1>
        <p className="text-burgundy text-lg font-josefin text-center">
          Crie mensagens especiais combinando diferentes flores
        </p>

        {/* Aqui vai o conteúdo específico da página de Combinações */}
      </div>
    </Layout>
  );
}

export default Combinacoes;
