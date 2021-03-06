import { useState } from "react"
import { useMoralis, useMoralisQuery } from "react-moralis";

function SendMessage({ EOMRef }) {

     const { user, Moralis } = useMoralis();
     const [message, setMessage] = useState('');

     const sendMessage = (e) => {
          e.preventDefault();
          if (!message) return;

          const Messages = Moralis.Object.extend("Messages")
          const messages = new Messages()

          messages.save({
               message: message,
               username: user.getUsername(),
               ethAddress: user.get('ethAddress')
          }).then((message) => {

          }), (error) => {
               console.log(error.message)    
          }
          EOMRef.current.scrollIntoView({ behavior: 'smooth' })
          setMessage("");
     }

     return (
          <form
               className="flex fixed bottom-10 bg-black opacity-80  w-11/12 pl-5 pr-2 py-2 max-w-2xl shadow-xl border-4 border-blue-400 z-50 rounded-full">
               <input
                    type="text"
                    className='flex-grow outline-none bg-transparent text-white pr-5 placeholder-gray-500'
                    placeholder="Enter a message"
                    value={message}
                    onChange={e => setMessage(e.target.value)} />
               <button
                    className='font-bold text-pink-500'
                    type="submit"
                    onClick={sendMessage}>Send</button>
          </form>
     )
}

export default SendMessage
