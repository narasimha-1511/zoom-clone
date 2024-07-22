"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const api_secret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User in not Logged in!");
  }
  if (!apiKey) throw new Error("Stream API key is not set");
  if (!api_secret) throw new Error("Stream API secret is not set");

  const streamClient = new StreamClient(apiKey, api_secret);

  const exp = Math.round(new Date().getTime() / 1000) + 3600;

  const issued = Math.floor(Date.now() / 1000);

  const token = streamClient.createToken(user.id, exp, issued);

  return token;
};
