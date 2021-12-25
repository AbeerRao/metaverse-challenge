import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

function Messages() {

     const { user } = useMoralis();
     const EOMRef = useRef(null);
     const { data, loading, error } = useMoralisQuery(
          'Messages',
          (query) => query.ascending('createdAt'),
          [],
          {
               live: true
          }
     );
     console.log(data)

     return (
          <div className="pb-64">
               <div className="my-5">
                    <ByMoralis variant="dark" style={{ marginLeft: "auto", marginRight: "auto" }} />
               </div>
               <div className='space-y-10 p-4'>
                    {data.map(message => (
                         <Message key={message.id} message={message} />
                    ))}
               </div>
               <div className='flex justify-center'>
                    <SendMessage EOMRef={EOMRef} />
               </div>
               <div ref={EOMRef} className="text-gray-500 text-center mt-5 mb-10">
                    <p>You're up to date {user.getUsername()}!</p>
               </div>
          </div>
     )
}

export default Messages
