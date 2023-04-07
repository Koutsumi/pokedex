
import { useEffect, useState } from "react"
import api from "../../services/api"

function Home() {

    const [pokemons, setPokemons] = useState([{}])

    async function getPokemons () {
      try{
        const response = await api.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        setPokemons(response.data.results)
      }catch(err){
        console.log(err)
      }
    }

    useEffect(() => {
      getPokemons ()
    }, []);

  return (
    <main className="flex flex-col items-center content-center">
      <section className="container ">

        <div className="content my-[4rem]">
          <p>Primeira Geração</p>

          <div className="wrap gap-4 my-[4rem]">
            {
              pokemons.map((pokemon, index) => {
                return (
                  <div className="myBlock customBlock">
                    <h2 className="uppercase">{pokemon.name}</h2>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
                  </div>
                )
              })
            }
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;
