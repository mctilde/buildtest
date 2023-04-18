import { useState, forwardRef } from "react";
import Image from "next/image";
import Scroll from "../Scroll";
import Link from "next/link";

const Nav = forwardRef<HTMLDivElement>((_, forwardedRef) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      ref={forwardedRef}
      className="flex items-center justify-between pl-3 pr-5"
    >
      <div className="flex gap-4 items-center">
        <div>
          <Image
            src="/nxodetor.svg"
            width={40}
            height={40}
            alt="Nxodetor"
            className="cursor-pointer"
          />
        </div>
        <h1 className="text-base	">We&apos;quore on a Mission</h1>
      </div>
      <div  onClick={toggleMenu} className="cursor-pointer mr-2">
        <Image src="/menu.svg" width={18} height={7} alt="Menu" />
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-10 bg-black-test flex flex-col justify-between">
          <div className="flex items-center justify-between pl-3 pr-4">
            <div className="flex items-center">
              <Image
                src="/nxodetor.svg"
                width={40}
                height={40}
                alt="Nxodetor"
                className="cursor-pointer"
              />
              {menuOpen ? <span className="ml-2">MENU</span> : null}
            </div>
            <div className="cursor-pointer" onClick={toggleMenu}>
              <Image src="/close-icon.svg" width={18} height={18} alt="Close" />
            </div>
          </div>
          <div className="py-8">
            <Link
              href="/genesispass"
              className="block font-bold px-4 py-2 hover:bg-gray-400"
            >
              GENESIS PASS
            </Link>
            <Link
              href="/services"
              className="block font-bold px-4 py-2 hover:bg-gray-400"
            >
              SERVICES
            </Link>
            <Link
              href="/proyects"
              className="block font-bold px-4 py-2 hover:bg-gray-400"
            >
              PROYECTS
            </Link>
            <Link
              href="/nft"
              className="block font-bold px-4 py-2 hover:bg-gray-400"
            >
              NFT
            </Link>
            <Link
              href="/faq"
              className="block font-bold px-4 py-2 hover:bg-gray-400"
            >
              FAQ
            </Link>
            <div className="flex gap-5 px-4 py-2 opacity-40	font-bold">
              <div>PRATFORM</div>
              <div>COMING SOON</div>
            </div>
          </div>
          <Scroll />
        </div>
      )}
    </div>
  );
});
Nav.displayName = "Nav";

export default Nav;
