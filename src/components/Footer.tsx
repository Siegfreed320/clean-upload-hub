const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border/40 bg-card/50 py-6">
      <div className="container px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} — Espace Multimédia
      </div>
    </footer>
  );
};

export default Footer;
