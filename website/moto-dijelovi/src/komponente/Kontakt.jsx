import instagramIcon from "../icons/instagram.png";
import facebookIcon from "../icons/Facebook_Logo.png";
import emailIconV4 from "../icons/email_logo_v4.png";
import phoneIconV4 from "../icons/phone_logo_v4.png";
export default function Kontakt() {
  return (
    <div className="KontaktJsx">
      <h2>Kontakt</h2>
      <div className="KontaktOpcije">
        <h4>Možete nas kontaktirati pomoću:</h4>
        <div className="Opcija">
          <a href="mailto:motoDijelovi@hotmail.com">
            <img alt="email slika" src={emailIconV4}></img>
            <h5>motoDijelovi@hotmail.com</h5>
          </a>
        </div>
        <div className="Opcija">
          <a href="tel:+385954658562155">
            <img alt="telefon slika" src={phoneIconV4}></img>
            <h5>+385 95 465 8562</h5>
          </a>
        </div>
        <div className="Opcija">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img alt="instagram slika" src={instagramIcon}></img>
            <h5>@MotoDijelovi</h5>
          </a>
        </div>
        <div className="Opcija">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img alt="facebook slika" src={facebookIcon}></img>
            <h5>MotoDijelovi</h5>
          </a>
        </div>
      </div>
    </div>
  );
}
