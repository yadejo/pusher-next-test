import Pusher from 'pusher';
import { env } from '~/env.mjs';

export const pusherServer = new Pusher({
    appId: env.PUSHER_APP_ID,
    key: env.PUSHER_KEY,
    secret: env.PUSHER_SECRET,
    cluster: "eu",
    useTLS: true
});