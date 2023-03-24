# block-chain basics in solidity
# code is in basic branch

1) Transections - Fields
  Nonce: tx count for thr account
  Gas Price: price per unit in gas (wei)
  Gas Limit: 21000
  To: address that the tx is sent to 
  Value: amount of wei to send
  Data: empty
  v, r, s: tx signature components
  
2) Coding step
  1)  Install vs-code
  2)  ``` yarn init ```
  3)  ``` corepack enable ```
  4)  ``` yarn add solc ```
  5)  ``` yarn add solc@0.8.7-fixed ```
  6)  ``` yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol ``` (add as a script)
  7)  ``` yarn add ethers@5.7.2 ``` //current version is unstable / 6 is in beta
  8)  ``` yarn add dotenv --save ```
  9)  ``` ./ganache-2.7.0-linux-x86_64.AppImage ``` to run ganache
