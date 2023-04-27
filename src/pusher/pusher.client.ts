import Pusher from "pusher-js";
import { env } from "~/env.mjs";

export const pusherClient = new Pusher(env.NEXT_PUBLIC_PUSHER_APP_ID, {
    cluster: "eu"
});
  

