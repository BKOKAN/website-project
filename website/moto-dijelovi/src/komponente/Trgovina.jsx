import { useState } from "react";
import { dijeloviKategorije, proizvodi } from "../functions/data";
import { useCart } from "./CartProvider";
import useResetDropdowns from "../hooks/useResetDropdowns";

export default function Trgovina() {
  // later attach data base to give select options in each state
  let motorcycleOptions = ["Sve", "Motor"];
  let markaOptions = ["Sve", "BMW", "HONDA", "KAWASAKI"];
  let kubikazaOption = ["Sve", "750", "880", "975"];
  let modelOptions = ["Sve", "F 800 GS", "F 800 GT"];
  let godinaIzgradnjeOptions = ["Sve", "2015", "2016", "2017"];

  const [searchMotocikl, setSearchMotocikl] = useState("Sve");
  const [searchMarka, setSearchMarka] = useState("Sve");
  const [searchKubikaza, setSearchKubikaza] = useState("Sve");
  const [searchModel, setSearchModel] = useState("Sve");
  const [searchGodinaIzgradnje, setSearchGodinaIzgradnje] = useState("Sve");
  const [searchMinPrice, setMinPrice] = useState(0);
  const [searchMaxPrice, setMaxPrice] = useState(0);

  useResetDropdowns({
    searchMotocikl,
    searchMarka,
    searchKubikaza,
    searchModel,
    setSearchMarka,
    setSearchKubikaza,
    setSearchModel,
    setSearchGodinaIzgradnje,
  });

  const { addToCart } = useCart();

  let proizvodiCheckbox = false;

  let pokaziProizvode = proizvodiCheckbox
    ? Object.entries(proizvodi).map(([ime, proizvod], index) => (
        <li className="proizvod" key={index}>
          <h5>NOVO</h5>
          <div className="infoContainer">
            <h3 className="imeProizvoda">{ime}</h3>
            <p className="cijena">{proizvod.cijena}</p>
          </div>
          <img
            src={proizvod.img || ""}
            alt="Slika proizvoda"
            className="slikaProizvoda"
          />
          <p className="opis">{proizvod.opis}</p>
          <div className="proizvodButtonDiv">
            <button className="addToCart">Dodaj u kosaricu</button>
            <button className="detalji">Detalji</button>
          </div>
        </li>
      ))
    : Object.entries(proizvodi).map(([ime, proizvod], index) => (
        <li key={index} className="proizvod">
          <div className="infoContainer">
            <h3 className="imeProizvoda">{ime}</h3>
            <p className="cijena">{proizvod.cijena}</p>
          </div>
          <img
            src={proizvod.img || ""}
            alt="Slika proizvoda"
            className="slikaProizvoda"
          />
          <p className="opis">{proizvod.opis}</p>
          <div className="proizvodButtonDiv">
            <button
              onClick={() => addToCart({ name: ime, ...proizvod })}
              className="addToCart"
            >
              Dodaj u kosaricu
            </button>
            <button className="detalji">Detalji</button>
          </div>
        </li>
      ));

  return (
    <div className="TrgovinaContent">
      <div className="kategorijeDiv">
        <ul className="searchList">
          <li className="listItem searchItem">
            <h2>
              <span>Unesite traženi pojam</span>
            </h2>
            <div className="inputWrapper">
              <input
                className="searchBar"
                placeholder="Unesite model ili ime proizvoda"
              />
            </div>
            <button className="searchButton">Pretraži</button>
          </li>
          <li className="searchMoto listItem">
            <h2>
              <span>Pretraživanje po motociklu</span>
            </h2>
            <form method="get" className="specificSearch">
              <label htmlFor="motori">Pretraživanje po motociklu:</label>
              <select
                id="motori"
                name="searchMotor"
                value={searchMotocikl}
                onChange={(e) => setSearchMotocikl(e.target.value)}
              >
                {motorcycleOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <label htmlFor="marka">Proizvođać (marka):</label>
              <select
                name="searchMarka"
                id="marka"
                value={searchMarka}
                onChange={(e) => setSearchMarka(e.target.value)}
                disabled={searchMotocikl === "Sve"}
              >
                {markaOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <label htmlFor="kubikaza">Kubikaža:</label>
              <select
                name="searchKubikaza"
                id="kubikaza"
                value={searchKubikaza}
                onChange={(e) => setSearchKubikaza(e.target.value)}
                disabled={searchMarka === "Sve"}
              >
                {kubikazaOption.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <label htmlFor="model">Model vozila:</label>
              <select
                name="searchModel"
                id="model"
                value={searchModel}
                onChange={(e) => setSearchModel(e.target.value)}
                disabled={searchKubikaza === "Sve"}
              >
                {modelOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <label htmlFor="godina">Godina proizvodnje:</label>
              <select
                name="searchGodina"
                id="godina"
                value={searchGodinaIzgradnje}
                onChange={(e) => setSearchGodinaIzgradnje(e.target.value)}
                disabled={searchModel === "Sve"}
              >
                {godinaIzgradnjeOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                className="searchButton"
                disabled={searchGodinaIzgradnje === "Sve"}
              >
                Pretraži
              </button>
            </form>
          </li>
          <li className="listItem">
            <h2 id="dijelovi">Katalog Dijelovi:</h2>

            <ul className="katalogLista">
              {Object.entries(dijeloviKategorije).map(
                ([nazivKategorije, podaci]) => (
                  <li className="katalogDijelova" key={nazivKategorije}>
                    {nazivKategorije}
                    <ul className="PodKategorijeLista">
                      {podaci.podkategorije.map((podKategorija, index) => (
                        <li className="PodKategorijeDijelova" key={index}>
                          {podKategorija}
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </li>
        </ul>
      </div>
      <ul className="proizvodi">
        <h2>Trgovina</h2>
        <div className="trgovinaFilters">
          <div className="cijenaFilter">
            <h5>Trazi po cijeni</h5>
            <div className="minCijenaDiv">
              <label htmlFor="minCijena">od </label>
              <input
                className="inputMinCijena"
                type="number"
                step="10"
                value={searchMinPrice}
                onChange={(e) => {
                  const newVal = Number(e.target.value);
                  if (newVal >= 0) setMinPrice(newVal);
                }}
              />
              <span className="euro">€</span>
            </div>
            <div className="maxCijenaDiv">
              <label htmlFor="maxCijena"> do </label>
              <input
                className="inputMaxCijena"
                type="number"
                step="10"
                value={searchMaxPrice}
                onChange={(e) => {
                  const newVal = Number(e.target.value);
                  if (newVal >= 0) setMaxPrice(newVal);
                }}
              />
              <span className="euro">€</span>
            </div>
          </div>
          <div className="checkboxContainer">
            <label htmlFor="novo">Novo u ponudi</label>
            <input type="checkbox" id="novo" />
          </div>
        </div>
        <ul className="proizvodiItems">{pokaziProizvode}</ul>
      </ul>
    </div>
  );
}
