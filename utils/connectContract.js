import { ethers } from "ethers"
import abiJson from "./StoreContract.json"

function connectContract() {
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    let storeContract;
    try {
        const { ethereum } = window
        if (ethereum) {
            const providers = new ethers.providers.Web3Provider(ethereum)
            const signer = providers.getSigner()
            storeContract = new ethers.Contract(contractAddress, abiJson.abi, signer)
        }
        else {
            console.log("Ethereum object do not exist")
        }
    } catch (error) {
        console.log("ERROR: ", error)
    }
    return storeContract
}

export default connectContract