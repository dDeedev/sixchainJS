import { SixDataChainConnector, ITxNFTmngr, fee } from "@ddeedev/sixchain-client";
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

    const virtualAction: ITxNFTmngr.MsgCreateVirtualAction = {
        creator: address,
        nftSchemaCode: schema_name,
        newActions: [
            {
                name: "bridge_4_to_2",
                desc: "Bridge service 4 to service 2",
                when: "meta.GetNumber('sixprotocol.divine_elite','service_4') >= params['amount'].GetNumber()",
                then: [
                    "ser4value = meta.GetNumber('sixprotocol.divine_elite','service_4')",
                    "ser2Value = meta.GetNumber('sixprotocol.membership','service_2')",
                    "toSetValue = ser2Value + params['amount'].GetNumber()",
                    "meta.SetNumber('sixprotocol.membership','service_2', toSetValue)",
                    "meta.SetNumber('sixprotocol.divine_elite','service_4', ser4value - params['amount'].GetNumber())"
                ],
                params: [
                    {
                        name: "amount",
                        desc: "Service 4 Amount",
                        data_type: "number",
                        required: true,
                        default_value: "0"
                    }
                ],
                allowed_actioner: 1,
                disable: false
            },
            {
                name: "bridge_3_to_1",
                desc: "Bridge service 1 to service 4",
                when: "true",
                then: [
                    "ser3value = meta.GetNumber('sixprotocol.divine_elite','service_3')",
                    "ser1Value = meta.GetNumber('sixprotocol.membership','service_1')",
                    "toSetValue = ser3value + ser1Value",
                    "meta.SetNumber('sixprotocol.membership','service_1', toSetValue)",
                    "meta.SetNumber('sixprotocol.divine_elite','service_3', 0)"
                ],
                params: [],
                allowed_actioner:1,
                disable:false,
            },
            {
                name: "native_bridge",
                desc: "Send Value across schema",
                when: "true",
                then: [
                    "meta.ConvertNumberAttribute('sixprotocol.divine_elite','service_7','sixprotocol.membership','service_x', params['amount'].GetNumber())"
                ],
                params: [
                    {
                        name: "amount",
                        desc: "Service 7 Amount",
                        data_type: "number",
                        required: true,
                        default_value: "0"
                    }
                ],
                allowed_actioner:1,
                disable:false
            },
        ]
    }

    msgArray.push(rpcClient.nftmngrModule.msgCreateVirtualAction(virtualAction))


    try {
        const txReponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
            fee: "auto",
            memo: "create virtual action"
        })
        console.log(txReponse);
    } catch (err) {
        console.error("Transaction failed:", err);
    }

}

main().catch((err) => {
    console.error("Error in main execution:", err);
});