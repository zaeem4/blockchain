# block-chain basics in solidity

1) Transections - Fields
  Nonce: tx count for thr account
  Gas Price: price per unit in gas (wei)
  Gas Limit: 21000
  To: address that the tx is sent to 
  Value: amount of wei to send
  Data: empty
  v, r, s: tx signature components
  
2) Coding step
  1)  Install vs code and install yarn.
  2)  ``` corepack enable ```
  3)  ``` yarn add solc ```
  4)  ``` yarn add solc@0.8.7-fixed ```
  5)  ``` yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol ``` (add as a script)
  6)  ``` yarn add ethers@5.7.2 ``` //current version is unstable / 6 is in beta
  7)  ``` yarn add dotenv --save ```
  8)  ``` ./ganache-2.7.0-linux-x86_64.AppImage ``` to run ganache
