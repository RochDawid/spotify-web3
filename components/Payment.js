import React, { useEffect, useState } from "react";
import { getProgramInstance } from "../utils/utils";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { SOLANA_HOST } from "../utils/const";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import HomePage from '../pages/homepage';

const anchor = require("@project-serum/anchor");
const utf8 = anchor.utils.bytes.utf8;
const defaultAccounts = {
  tokenProgram: TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: anchor.web3.SystemProgram.programId,
};
const styles = {
  main: "w-screen h-screen flex bg-white text-black flex-col items-center justify-center",
  text: "text-center text-xl mb-10",
  buttons: "flex items-center justify-center gap-x-5",
  button:
    "rounded-lg shadow-lg p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 py-4",
};

const Payment = () => {
  const wallet = useWallet();
  const connection = new anchor.web3.Connection(SOLANA_HOST);
  const program = getProgramInstance(connection, wallet);
  const [payers, setPayers] = useState([]);
  const [isPaid, setPaid] = useState(false);

  useEffect(() => {
    if (wallet.connected) getAllWallets();
  }, [wallet.connected, isPaid]);

  const getAllWallets = async () => {
    const payerList = await program.account.payerAccount.all();
    setPayers(payerList);

    payerList.forEach(payer => {
      if (payer.account.wallet.toBase58() === wallet.publicKey.toBase58()) setPaid(true);
    })
  }

  const payClicked = async () => {
    let [payerSigner] = await anchor.web3.PublicKey.findProgramAddress(
      [utf8.encode('payer'), wallet.publicKey.toBuffer()],
      program.programId
    );

    try {
      payerInfo = await program.account.payerAccount.fetch(payerSigner);
    } catch (e) {
      try {
        await program.rpc.acceptPayment({
          accounts: {
            payerWallet: payerSigner,
            receiver: new PublicKey(
              "CVNigTQvuAXJmvGYmqbwk11Npw32Ltkthkc1T1GnDWze"
            ),
            authority: wallet.publicKey,
            ...defaultAccounts,
          },
        });
      } catch (e) {
        console.error(e.message);
      }
    }
  };

  if (isPaid) return <HomePage />;

  return (
    <div className={styles.main}>
      <p className={styles.text}>
        Make a one-time payment for joining the Spotify Web 3.0 community!
      </p>
      <div className={styles.buttons}>
        <button onClick={payClicked} className={styles.button}>
          Pay 0.1 SOL
        </button>
        <button onClick={getAllWallets} className={styles.button}>Verify Payment</button>
      </div>
    </div>
  );
};

export default Payment;
