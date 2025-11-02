export default function Registracija({ setContentState }) {
  return (
    <div className="prijava-container">
      <h2>Registracija</h2>
      <form className="prijava-form">
        <div className="form-group">
          <label htmlFor="ime">Ime</label>
          <input
            type="text"
            id="ime"
            name="ime"
            placeholder="Unesite ime"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="prezime">Prezime</label>
          <input
            type="text"
            id="prezime"
            name="prezime"
            placeholder="Unesite prezime"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email adresa</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Unesite email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Lozinka</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Unesite lozinku"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Potvrdi lozinku</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Ponovno unesite lozinku"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Registriraj se
        </button>

        <p className="register-text">
          Već imate račun?{" "}
          <button
            type="button"
            className="register-btn"
            onClick={() => setContentState("prijava")}
          >
            Prijavi se
          </button>
        </p>
      </form>
    </div>
  );
}
