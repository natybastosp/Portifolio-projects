import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-burgundy font-yeseva text-4xl mb-4">
            A Linguagem Secreta das Flores
          </h2>
          <p className="text-burgundy text-lg font-josefin font-bold">
            A arte milenar de expressar sentimentos através das flores
          </p>
          <p className="text-burgundy text-lg font-josefin font-bold">
            Desvende os significados ocultos em cada pétala
          </p>
        </div>

        {/* Grid com os 3 blocos principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bloco 1: Significados */}
          <button
            onClick={() => navigate("/significados")}
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-3/4 aspect-square border-4 border-gold bg-cream-light mb-4 overflow-hidden">
              <img
                src="/images/flowers/rosa-vermelha.jpg"
                alt="Rosa - Significado"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-burgundy font-yeseva text-2xl mb-2 text-center">
              Significados
            </h3>
            <p className="text-burgundy text-base font-josefin text-center">
              Descubra o significado oculto em cada flor
            </p>
          </button>

          {/* Bloco 2: Combinações */}
          <button
            onClick={() => navigate("/combinacoes")}
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-3/4 aspect-square border-4 border-gold bg-cream-light mb-4 overflow-hidden">
              <img
                src="/images/flowers/combinacao.jpg"
                alt="Combinações de Flores"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-burgundy font-yeseva text-2xl mb-2 text-center">
              Combinações
            </h3>
            <p className="text-burgundy text-base font-josefin text-center">
              Crie mensagens únicas combinando flores
            </p>
          </button>

          {/* Bloco 3: Buquês */}
          <button
            onClick={() => navigate("/buques")}
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-3/4 aspect-square border-4 border-gold bg-cream-light mb-4 overflow-hidden">
              <img
                src="/images/flowers/buques.jpg"
                alt="Buquês Especiais"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-burgundy font-yeseva text-2xl mb-2 text-center">
              Buquês
            </h3>
            <p className="text-burgundy text-base font-josefin text-center">
              Arranjos especiais para cada ocasião
            </p>
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
