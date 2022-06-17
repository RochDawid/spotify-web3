import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import Payment from "./Payment";

const styles = {
  loginPage: `w-screen h-screen bg-white flex flex-col items-center justify-center`,
  loginPageText: `text-4xl text-center text-gray-600 mb-10`,
};

const Login = () => {
  const wallet = useWallet();
  
  if (wallet.connected) return <Payment />;

  return (
    <div className={styles.loginPage}>
      <p className={styles.loginPageText}>
        Please login with your wallet to access the app
      </p>
      <WalletMultiButton />
    </div>
  );
};

export default Login;
