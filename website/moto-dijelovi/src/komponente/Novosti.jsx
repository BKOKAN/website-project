export default function Novosti() {
  return (
    <div className="Novosti">
      <h2>Novosti</h2>
      <div className="novaNovost">
        <h2>Glavni naslov</h2>
        <p className="opis">Ovdje ide tekst za obavjestenje...</p>
        <div className="slikaWrapper">
          <p className="leftArrow"> &#171; </p>
          <div className="slika"></div>
          <p className="rightArrow"> &#187; </p>
        </div>
      </div>
    </div>
  );
}
