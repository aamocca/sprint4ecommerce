import "../header.css";

const Header = () => {
  return (
    <>
      <p>Header</p>
      <div className="headerv1">
        <section className="sideBar3">
          <div className="App">
            <header>
              <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
            </header>
            <Navbar show={showNav} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
