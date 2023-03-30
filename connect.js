
const { ethers } = require("ethers")
// const solc = require("solc")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
    // First, compile this!
    // And make sure to have your ganache network up!
    let provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
    
    const signer = provider.getSigner()
    const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, contractABI, provider)
    const contractSigner = contract.connect(signer)
  
    let currentFavoriteNumber = await contractSigner.retrieve()
    console.log(`Current Favorite Number: ${currentFavoriteNumber}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

// Promise
// Pending
// Fulfilled
// Rejected
