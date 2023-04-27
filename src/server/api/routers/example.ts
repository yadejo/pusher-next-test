import { z } from "zod";
import { pusherServer } from "~/pusher/pusher.server";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  sendMessageOnChannel1: publicProcedure.input(z.string()).mutation(async ({input}) => {
    await pusherServer.trigger("channel1", "message-sent", {
      message: `${input.toUpperCase()}`
    })
  })
});
