import { ethers } from "ethers";
import abi from "../resource/UnwrapSIXToken_metadata.json"

const contractABI = abi.output.abi;
const precompileContract = "0x249D6DFBb6476e976A228a03E6449659749FA472";
const rpcUrl = "https://rpc-evm.fivenet.sixprotocol.net"; // six fivenet evm rpc

const privateKey = "YOUR_PRIVATE_KEY_HERE";

const provider = new ethers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(precompileContract, contractABI, wallet);

async function sendToCosmos(dst: string, amount: number) {
  try {
    const amountWei = ethers.parseEther(amount.toString());
    const tx = await contract.transferToCosmos(dst, amountWei);
    await tx.wait();
    console.log("Transaction complete!");
  } catch (error) {
    console.log(error);
  }
}

sendToCosmos("DESTINATION_ADDRESS_HERE", 1)
