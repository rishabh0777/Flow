const Footer = () => {
    return (
      <footer className="w-full h-[10vh] bg-white-10/5 backdrop-blur-lg flex justify-center items-center px-4 flex fixed bottom-0 z-50 shadow-top-2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Flow. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  