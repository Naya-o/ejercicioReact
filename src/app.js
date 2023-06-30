import Componente1 from "./Components/Componente1"
import Componente2 from "./Components/Componente2"
import Personaje from "./Components/Personaje";
import Card from "./Components/Card";

export default function App(){ //App se llama la funcion que no es el componente
    /* desafio
    const personajes - realizar una array */
    const personaje = {
        nombre:"Cain",
        edad: 10000,
        color: "Hermoso",
        amigos: ["Ben","Zid","Gyeong Joon su amor"]
    }

    const saludo = "Bienvenido º^º";
    return(<>
        <h1>{saludo}</h1>
        <Componente1 />
        <Componente2 />
        <Personaje pers={personaje}/>
        <Card pers={personaje}/>
    </>)
}
