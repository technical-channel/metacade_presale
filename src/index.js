import React from "react";
import ReactDOM from "react-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
function getLibrary(provider) {
  const library = new ethers.providers.Web3Provider(provider);
  console.log(library);
  library.pollingInterval = 12000; // frequency provider is polling
  return library;
}
ReactDOM.render(
  <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
