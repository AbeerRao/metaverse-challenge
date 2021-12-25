import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-4 p-5 z-50 bg-black/90 shadow-lg text-pink-500 border-2 border-pink-700 container-header rounded-lg  ">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto  hidden  lg:inline-grid">
          <Image
            className="object-cover rounded-full profil-image bg-slate-400/[0.3]"
            src="https://links.papareact.com/3pi"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-40 w-40  lg:mx-auto border-pink-500 border-4 rounded-full">
            <Avatar username="" logoutOnPress />
          </div>
          <h1 className="text-3xl"> Welcome to the Metaverse </h1>
          <h2 className="text-5xl font-bold truncate">
            {user.getUsername()}
          </h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;