 # HW9-UNISWAP

### Goal

Implement a single swap contract and provide liquidity to a pool

### Instructions

1. Follow the setup instructions here:
https://docs.uniswap.org/contracts/v3/guides/local-environment

2. Before running "npx hardhat test --network localhost", make sure to do the follwing:
   - Change "module exports" of your "hardhat.config.js" to the code block below
     - Make sure you replace "YOUR_INFURA_NODE_MAINNET_ETH_URL" accordingly
   - If you need help doint this, please ping the hw9 channel on discord
   - Afterwards both tests should pass wehn running "npx hardhat test --network localhost"

```
module.exports = {
  solidity: "0.7.6",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: "<YOUR_INFURA_NODE_MAINNET_ETH_URL>"
      }
    }
  }
};
```
   

3. Complete the "Single Swaps" section (linked below) and attach a screen shot of you tests passing after running the test command
https://docs.uniswap.org/contracts/v3/guides/swaps/single-swaps

4. Complete everything under the "Providing Liquidity" section (linked below) and attach a screen shot of you tests passing after running the test command
https://docs.uniswap.org/contracts/v3/guides/providing-liquidity/setting-up

5. Please submit to the appropriate assignment on bCourses
