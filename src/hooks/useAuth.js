import { useWeb3React } from "@web3-react/core";

import { useHistory } from "react-router-dom";
import { injected } from "../Utils/connectors";

// import { ConnectWallet } from "../Redux/actions";
export const useAuth = () => {
  const { activate, deactivate } = useWeb3React();
  const history = useHistory();

  const login = () => {
    activate(injected).then();
  };
  const logout = async () => {
    // refreshState();
    deactivate();
  };
  return { login, logout };
};

export default useAuth;
