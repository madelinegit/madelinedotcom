import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Madeline Gall</p>
    </footer>
  );
}

export default Footer;