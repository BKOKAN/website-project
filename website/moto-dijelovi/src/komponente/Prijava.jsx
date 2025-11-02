export default function Prijava({ setContentState }) {
  return (
    <div className="prijava-container">
      <h2>Prijava</h2>
      <div className="content"></div>
      <form className="prijava-form">
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

        <div className="form-options">
          <label className="checkbox">
            <input type="checkbox" name="remember" /> Zapamti me
          </label>

          <button
            type="button"
            className="forgot-password"
            onClick={() => setContentState("lostPassword")}
          >
            Zaboravljena lozinka?
          </button>
        </div>

        <button type="submit" className="submit-btn">
          Prijavi se
        </button>

        <p className="register-text">
          Nemaš račun?{" "}
          <button
            type="button"
            onClick={() => setContentState("register")}
            className="register-btn"
          >
            Registriraj se
          </button>
        </p>
      </form>
    </div>
  );
}
