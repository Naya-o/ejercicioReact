import "./stylesheet.css"
import CardContainer from "./CardContainer"

import CardTitle from "./Cardtitle"
import Amigos from "./Amigos"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import CardBootstrap from 'react-bootstrap/Card';
import Image from "../../assets/cain.png";


export default function Card ({pers}){
    return(
    <>
         { /* esto es el HTML */}
        <CardContainer>
            {/* valor de hijo */}
                <CardBootstrap style={{ width: '100%' }}>
                <CardBootstrap.Img variant="top" src={Image}/>
                <CardBootstrap.Body>
                    <CardBootstrap.Title> 
                        <h4>Amigos</h4>
                    <CardTitle nombre={pers.nombre} /></CardBootstrap.Title>
                            <div >
                                <Amigos amigos={pers.amigos}/>
                            </div>

                    <Button variant="primary">Go somewhere</Button>
                </CardBootstrap.Body>
            </CardBootstrap>
        {/* valor de hijo */}
        </CardContainer>

    </>
    )
}