import { useCart } from "./CartProvider";

export default function Kosarica() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const handlePurchase = () => {
    alert("Kupnja nije još implementirana 😊");
  };

  return (
    <div className="kosarica">
      <h2>Košarica</h2>
      <div className="kosaricaProizvodi">
        {cartItems.length === 0 ? (
          <p>Košarica je prazna.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="kosaricaItem">
              <img src={item.img} alt={item.name} className="kosaricaSlika" />
              <div className="kosaricaInfo">
                <h4 className="kosaricaNaziv">{item.name}</h4>
                <p>{item.cijena}</p>
                <p>Količina: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.name)}
                className="btn btn-danger removeBtn"
                type="button"
              >
                Ukloni
              </button>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="kosaricaButtoni d-flex justify-content-between mt-4">
          <button className="btn btn-primary px-4" onClick={handlePurchase}>
            Kupi
          </button>
          <button className="btn btn-danger px-4" onClick={clearCart}>
            Isprazni košaricu
          </button>
        </div>
      )}
    </div>
  );
}
