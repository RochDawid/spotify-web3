import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";
import { SOLANA_HOST } from "../utils/const";
import { getProgramInstance } from "../utils/utils";
const anchor = require("@project-serum/anchor");

const defaultAccounts = {
  tokenProgram: TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: anchor.web3.SystemProgram.programId,
};

const useSpotify = (
  title,
  musicUrl,
  setTitle,
  setMusicUrl,
  setShowUploadMusic
) => {
  const wallet = useWallet();
  const connection = new anchor.web3.Connection(SOLANA_HOST);
  const program = getProgramInstance(connection, wallet);

  const getSongs = async () => {
    const songs = await program.account.musicAccount.all();

    return songs;
  };

  const newMusic = async () => {
    const randomKey = anchor.web3.Keypair.generate().publicKey;

    let [music_pda] = await anchor.web3.PublicKey.findProgramAddress(
      [anchor.utils.bytes.utf8.encode("music"), randomKey.toBuffer()],
      program.programId
    );

    await program.rpc.createMusic(title, musicUrl, {
      accounts: {
        music: music_pda,
        randomkey: randomKey,
        authority: wallet.publicKey,
        ...defaultAccounts,
      },
    });

    setTitle("");
    setMusicUrl("");
    setShowUploadMusic(false);
  };

  return { newMusic, getSongs };
};

export default useSpotify;
