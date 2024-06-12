function Navbar() {
  return (
    <div className="hidden header md:flex justify-between gap-10 text-white font-manrope absolute top-10">
      <a
        className="nav-links hover:text-primary transition-transform hover:scale-110"
        href="#home"
      >
        Home
      </a>
      <a
        className="nav-links hover:text-primary transition-transform hover:scale-110"
        href="#about"
      >
        About
      </a>
      <a href="#projects">
        <div className="nav-links hover:text-primary transition-transform hover:scale-110">
          Projects
        </div>
      </a>
      <a href="#contact">
        <div className="nav-links hover:text-primary transition-transform hover:scale-110">
          Contact
        </div>
      </a>
    </div>
  );
}

export default Navbar;
