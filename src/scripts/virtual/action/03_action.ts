import { SixDataChainConnector, ITxNFTmngr, fee } from "@thesixnetwork/sixchain-client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "../../client";
import { GasPrice } from "@cosmjs/stargate";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
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
    const ref_id = uuidv4();

    const virualAction: ITxNFTmngr.MsgPerformVirtualAction = {
        creator: address,
        nftSchemaName: schema_name,
        action: "native_bridge",
        parameters: [{
            name: "amount",
            value: "1"
        }],
        refId: ref_id,
        tokenIdMap: [
            {
                nftSchemaName: "sixprotocol.divine_elite",
                tokenId: "1"
            },
            {
                nftSchemaName: "sixprotocol.membership",
                tokenId: "5"
            }
        ]
    }

    msgArray.push(rpcClient.nftmngrModule.msgPerformVirtualAction(virualAction))

    try {
        const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
            fee: "auto",
            memo: "perfrom virtual action"
        })
        console.log(txResponse);
    } catch (err) {
        console.error("Transaction failed:", err);
    }

}

main().catch((err) => {
    console.error("Error in main execution:", err);
});