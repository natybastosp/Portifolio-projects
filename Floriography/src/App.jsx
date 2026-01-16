import Navbar from "./components/navbar";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navbar */}
      <Navbar />

      <section className=" mx-3 my-8 p-8 border-9 border-double flex flex-col gap-8 border-gold bg-cream">
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
          <div className="flex flex-col items-center">
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
          </div>

          {/* Bloco 2: Combinações */}
          <div className="flex flex-col items-center">
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
          </div>

          {/* Bloco 3: Buquês */}
          <div className="flex flex-col items-center">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
