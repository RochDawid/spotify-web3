import dynamic from "next/dynamic";
import "../styles/globals.css";
require("@solana/wallet-adapter-react-ui/styles.css");
import { SpotifyProvider } from "../context/context";

const WalletConnectionProvider = dynamic(
  () => import("../context/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <WalletConnectionProvider>
      <SpotifyProvider>
        <Component {...pageProps} />
      </SpotifyProvider>
    </WalletConnectionProvider>
  );
}

export default MyApp;
