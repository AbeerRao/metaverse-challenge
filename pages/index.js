import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {

  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="overflow-y-scroll scrollbar-hide h-screen bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse Challenge</title>
      </Head>
      <div className="max-w-7xl p-5 mx-auto">
          <Header />
          <Messages />
        </div>
    </div>
  )
}
