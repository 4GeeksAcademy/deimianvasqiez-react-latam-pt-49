// Fragmento de react --> Fragment o <></>(Pico parentesis)

import { TitleMain } from "../../components/TitleMain"
import { CardList } from "../../components/CardList"
import "./home.css"
import { Navbar } from "../../components/Navbar"

// Props --> properties

function Home() {
  // Aqui puede tener cualquier logíca de javascript

  // Un componente es una función que retorna JSX (Solo un JSX IMPORTANTE)
  return (
    // JSX - no html
    <>
      <Navbar />

      <TitleMain
        title="Hola ¿qué tal Deimian? Soy objeto props"
        style="text-danger"
        deimian={5}
      />

      <TitleMain
        title="Desde layout"
        style="text-warning"
        deimian={63}
      />

      <h1>Hola desde el components Home</h1>

      <h1>Otro titulo</h1>

      <TitleMain title="Este es el titulo de Home abajo" />

      <h1>Uno más</h1>
      <div>
        <img src="https://" alt="" />
      </div>

      <CardList />
    </>
  )
}


export default Home