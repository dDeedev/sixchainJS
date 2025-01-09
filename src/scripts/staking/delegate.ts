import { SixDataChainConnector, BASE64, typesTxCosmosStaking, fee } from "@ddeedev/sixchain-client";
import { Coin } from "@cosmjs/amino";
import dotenv from "dotenv";

dotenv.config();

const Delegate = async () => {
    const sixConnector = new SixDataChainConnector();
    sixConnector.rpcUrl = "https://rpc1.fivenet.sixprotocol.net:443";

    // Retrieve acctount signer from private key or mnemonic
    const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(process.env.ALICE_MNEMONIC!);

    // Get index of account
    const address = (await accountSigner.getAccounts())[0].address;
    const rpcClient = await sixConnector.connectRPCClient(accountSigner, { gasPrice: fee.GasPrice.fromString("1.25usix") })

    const validator_address = "6xvaloper13dwxflzhc3qlkcy9syfnhr8tu2kdvuavhzdf9f"

    const delegate_amount: Coin = {
        amount: "20000000000",
        denom: "usix"
    }

    const msgDelegate: typesTxCosmosStaking.MsgDelegate = {
        amount: delegate_amount,
        delegator_address: address,
        validator_address: validator_address
    }

    const msg = rpcClient.cosmosStakingModule.msgDelegate(msgDelegate)
    const txResponse = await rpcClient.cosmosStakingModule.signAndBroadcast([msg], {
        fee: "auto",
        memo: "memo",
    });
    console.log(txResponse);
}

Delegate().then((res) => {
    console.log
}).catch((err) => {
    console.log(err);
});
