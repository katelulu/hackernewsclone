function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <ul>
          <li className="logo">Y</li>
          <li className="navbar-title">Hacker News</li>
          <li className="navbar-border">news</li>
          <li className="navbar-border">past</li>
          <li className="navbar-border">comments</li>
          <li className="navbar-border">ask</li>
          <li className="navbar-border">show</li>
          <li className="navbar-border">jobs</li>
          <li>submit</li>
        </ul>
      </div>
      <div className="navbar-right">
        <p>login</p>
      </div>
    </div>
  );
}

export default Navbar;
