import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
     <Image  src="/icon.png" alt=""  width={80} height={60}/>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Listing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
