const Footer = () => {
  return (
    <footer className="bg-white shadow-md">
      <div className="container mx-auto p-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Collins Adaigho. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
