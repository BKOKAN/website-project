import { useCart } from "./CartProvider";

export default function Kosarica() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="kosarica">
      <div className="kosaricaProizvodi">
        {cartItems.length === 0 ? (
          <p>Košarica je prazna.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="kosaricaItem">
              <img src={item.img} alt={item.name} className="kosaricaSlika" />
              <div className="kosaricaInfo">
                <h4>{item.name}</h4>
                <p>{item.cijena}</p>
                <p>Količina: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.name)}
                className="removeBtn"
              >
                Ukloni
              </button>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="kosaricaButtoni">
          <button onClick={clearCart}>Isprazni košaricu</button>
        </div>
      )}
    </div>
  );
}
