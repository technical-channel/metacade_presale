import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 97],
});
export const walletconnect = new WalletConnectConnector({
  url: `https://mainnet.infura.io/v3/8ef7ffaaf1b348249b09e4dea208dd08`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});
