import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { pusherClient } from "~/pusher/pusher.client";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const {mutate: sendMessage} = api.example.sendMessageOnChannel1.useMutation();
  const [receivedMessage, setReceivedMessage] = useState<string>("");

  useEffect(() => {
    const channel = pusherClient.subscribe('channel1');
    channel.bind('message-sent', (data: {message:string}) => {
      setReceivedMessage(data.message)
    })
    return () =>  channel.unsubscribe();
  }, []);

  return (
    <>
         <p>from pusher channel: {receivedMessage}</p>
         <input type="text" onChange={e => sendMessage(e.target.value)}/>
         {receivedMessage.length > 40 && <p>lenth greater than 40!<CustomComponentWithQuery message={receivedMessage}/></p>}
    </>
  );
};

export default Home;

const CustomComponentWithQuery = ({message}: {message:string}) => {
  const {data: response} = api.example.hello.useQuery({text: message});
  return response ? <p>from trpc: {response.greeting}</p> : <></>
}






const useKudos = () => {
  const [kudos, setKudos] = useState([]);
}