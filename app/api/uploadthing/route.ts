import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

export type OurFileRouter = typeof ourFileRouter;

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    callbackUrl: ourFileRouter,
    token: process.env.UPLOADTHING_SECRET,
    uploadthingId: process.env.UPLOADTHING_APP_ID,
  },
});