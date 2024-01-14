import { ethers } from "ethers";

const EthersPlugin = {
  install: function (app) {
    app.config.globalProperties.ethers = ethers;

    app.provide("$ethers", ethers);
  },
};

export default EthersPlugin;
