import { SixDataChainConnector, ITxNFTmngr, fee } from "@thesixnetwork/sixchain-client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "../client";
import { GasPrice } from "@cosmjs/stargate";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
    const network = process.argv[2];

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


    let schema_name = "divineXmembership"

    const virtualSchemaProp: ITxNFTmngr.MsgCreateVirtualSchemaProposal = {
        creator: address,
        registry: [{
            nftSchemaCode: "sixprotocol.divine_elite",
            sharedAttributes: ["service_3", "service_4", "service_7"]
        }, {
            nftSchemaCode: "sixprotocol.membership",
            sharedAttributes: ["service_1", "service_2", "service_x"]
        }],
        virtualNftSchemaCode: schema_name
    }

    msgArray.push(rpcClient.nftmngrModule.msgCreateVirtualSchemaProposal(virtualSchemaProp))


    try {
        const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
            fee: "auto",
            memo: "create virtual schema proposal"
        })
        console.log(txResponse);
    } catch (err) {
        console.error("Transaction failed:", err);
    }

}

main().catch((err) => {
    console.error("Error in main execution:", err);
});