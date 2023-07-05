import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src="https://img.freepik.com/premium-vector/catering-quality-food-design-logo_187482-593.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
