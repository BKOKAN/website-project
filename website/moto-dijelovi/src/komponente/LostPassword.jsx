import { useState } from "react";

export default function LostPassword({ setContentState }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/request-password-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Provjerite svoj email za link za promjenu lozinke.");
      } else {
        setMessage("Email nije pronađen.");
      }
    } catch (err) {
      setMessage("Došlo je do greške. Pokušajte ponovno.");
    }
  };

  return (
    <div className="prijava-container">
      <h2>Zaboravljena lozinka</h2>
      <form className="prijava-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email adresa</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Unesite email povezan s računom"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Pošalji link na email
        </button>

        {message && <p style={{ marginTop: "10px" }}>{message}</p>}

        <p className="register-text">
          Sjetili ste se lozinke?{" "}
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
