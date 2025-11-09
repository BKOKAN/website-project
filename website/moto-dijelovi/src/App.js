import "./newApp.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  Trgovina,
  Novosti,
  Kontakt,
  Prijava,
  Registracija,
  LostPassword,
  Kosarica,
} from "./komponente/komponente.js";

function App() {
  let brojProizvoda = 0;

  const [contentState, setContentState] = useState("default");

  let content;
  switch (contentState) {
    case "novosti":
      content = <Novosti />;
      break;
    case "kontakt":
      content = <Kontakt />;
      break;
    case "prijava":
      content = <Prijava setContentState={setContentState} />;
      break;
    case "register":
      content = <Registracija setContentState={setContentState} />;
      break;
    case "lostPassword":
      content = <LostPassword setContentState={setContentState} />;
      break;
    case "kosarica":
      content = <Kosarica setContentState={setContentState} />;
      break;
    default:
      content = <Trgovina />;
      break;
  }

  return (
    <div className="App">
      <header>
        <div className="headerDiv">
          <div className="kosaricaEl">
            <p>
              <span>{brojProizvoda}</span> proizvoda u
              <ShoppingCartIcon
                style={{
                  width: "32px",
                  height: "32px",
                  color: "rgb(255, 72, 72)",
                }}
              />
            </p>
            <Button
              onClick={() => setContentState("kosarica")}
              variant="primary"
              size="sm"
            >
              Vidi košaricu
            </Button>
          </div>

          <h1 className="companyName">
            MOTO <span>DIJELOVI</span>
          </h1>

          <div className="ButtonDiv">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setContentState("prijava")}
            >
              Prijava
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setContentState("kontakt")}
            >
              Kontakt
            </Button>
          </div>
        </div>

        <ul className="izbornik">
          <li className="Home active">
            Home
            <ul className="Home-List">
              <li onClick={() => setContentState("novosti")}>Novosti</li>
              <li onClick={() => setContentState("default")}>Novi Proizvodi</li>
            </ul>
          </li>

          <li onClick={() => setContentState("default")} className="Trgovina">
            Trgovina
          </li>

          <li className="Onama">
            O nama
            <ul>
              <li onClick={() => setContentState("kontakt")}>Kontakt</li>
              <li>Informacije o nama</li>
            </ul>
          </li>

          <li className="Kupac">
            Kupac
            <ul>
              <li onClick={() => setContentState("prijava")}>Prijava</li>
              <li
                onClick={() => setContentState("register")}
                className="Registracijanovogkorisnika"
              >
                Registracija novog kupca
              </li>
            </ul>
          </li>
          <li>
            Administracija
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </li>
        </ul>
      </header>

      <main>{content}</main>
    </div>
  );
}

export default App;
