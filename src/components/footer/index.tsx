const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-24 border-t border-black" />
      <div className="flex flex-row text-sm mt-4 mb-8">
        <p>&copy;{new Date().getFullYear()} Jake Dawkins, Emily Gaudet.</p>
        <p className="ml-1">Good vibes only.</p>
      </div>
    </div>
  );
};

export default Footer;
