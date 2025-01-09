import { SixDataChainConnector, ITxNFTmngr, fee } from "@thesixnetwork/sixchain-client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "../client";
import { GasPrice } from "@cosmjs/stargate";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
    const network = process.argv[2];
    const propId = process.argv[3];
    const schemaName = process.argv[4];

    if (!propId || propId == "" || !schemaName || schemaName == ""){
        throw new Error(
            "Make sure to input proposal Id and Schema name"
        );
    }

    let msgArray: EncodeObject[] = [];
    if (!network) {
        throw new Error(
            "Network not specified. Please provide a network as an argument (local, fivenet, sixnet).",
        );
    }

    const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(network);
    const sixConnector = new SixDataChainConnector();
    sixConnector.rpcUrl = rpcUrl;
    sixConnector.apiUrl = apiUrl;

    const accountSigner =
        await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);
    const address = (await accountSigner.getAccounts())[0].address;
    const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
        gasPrice: GasPrice.fromString("1.25usix"),
    });

    const voteCreateSchema: ITxNFTmngr.MsgVoteCreateVirtualSchema = {
        creator: address,
        id: propId,
        nftSchemaCode: schemaName,
        option: 2
    }

    msgArray.push(rpcClient.nftmngrModule.msgVoteCreateVirtualSchema(voteCreateSchema))

    try {
        const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
            fee: "auto",
            memo: "vote create virtual schema"
        })
        console.log(txResponse);
    } catch (err) {
        console.error("Transaction failed:", err);
    }
}

main().catch((err) => {
    console.error("Error in main execution:", err);
});