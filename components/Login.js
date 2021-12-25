import Image from 'next/image'
import { useMoralis } from "react-moralis";

function Login() {

     const { authenticate } = useMoralis();

     return (
          <div className="bg-black reltive overflow-y-auto">
               <h1>I am the login screen</h1>
               <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                    <Image src='https://links.papareact.com/3pi' className="object-cover rounded-full" width={200} height={200} />
                    <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold">Login to the metaverse</button>
               </div>
               <div className="w-full h-screen">
                    <Image src='https://links.papareact.com/55n' layout="fill" objectFit='cover' />
               </div>
          </div>
     )
}

export default Login
