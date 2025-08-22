import "./newApp.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Trgovina, Novosti, Kontakt } from "./komponente/komponente.js";
function App() {
  let brojProizvoda = 0;

  const [contentState, setContentState] = useState("novosti");
  let content;
  switch (contentState) {
    case "novosti":
      content = <Novosti />;
      break;
    case "kontakt":
      content = <Kontakt />;
      break;
    default:
      content = <Trgovina />;
      break;
  }

  return (
    <div className="App">
      <header>
        <div className="headerDiv">
          <div className="kosarica">
            <p>
              <span> {brojProizvoda} </span> proizvoda u
              <ShoppingCartIcon
                style={{
                  width: "32px",
                  height: "32px",
                  color: "rgb(255, 72, 72)",
                }}
              />
            </p>
            <Button variant="primary" size="sm">
              Vidi Kosaricu
            </Button>
          </div>
          <h1 className="companyName">
            MOTO <span>DIJELOVI</span>
          </h1>
          <div className="ButtonDiv">
            <Button variant="primary" size="sm">
              Prijava
            </Button>
            <Button variant="primary" size="sm">
              Kontakt
            </Button>
          </div>
        </div>
        <ul className="izbornik">
          <li className="Home active">
            Home
            <ul className="Home-List">
              <li className="Novosti">Novosti</li>
              <li className="NoviProizvodi">Novi Proizvodi</li>
            </ul>
          </li>
          <li className="Trgovina">
            Trgovina
            <ul className="Trgovina-lista">
              <li className="Auspusi">Auspusi</li>
              <li className="Dijelovi">Dijelovi</li>
            </ul>
          </li>
          <li className="0nama">
            O nama
            <ul>
              <li className="Kontakt">Kontakt</li>
              <li className="Informacijeonama">Informacije o nama</li>
            </ul>
          </li>
          <li className="Kupac">
            Kupac
            <ul>
              <li className="Prijava">Prijava</li>
              <li className="Izgubljenalozinka">Izgubljena lozinka</li>
            </ul>
          </li>
          <li className="Registracijanovogkorisnika">
            Registracija novog kupca
          </li>
        </ul>
      </header>
      <main>{content}</main>
    </div>
  );
}

export default App;
