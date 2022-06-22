import { PublicKey } from "@solana/web3.js";
import spotifyWeb3 from "./spotify_web3.json";

export const SOLANA_HOST =
  "https://muddy-shy-dawn.solana-devnet.quiknode.pro/5b638e723dd3df716748cb5432458a2e21e53e05/";

export const STABLE_POOL_PROGRAM_ID = new PublicKey(
  "EiJtBeCJemfokFJquSb3daAK6BDAQT4wfaujrbZENNB1"
);
export const STABLE_POOL_IDL = spotifyWeb3;
