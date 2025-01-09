import { SixDataChainConnector, ITxNFTmngr, fee } from "@thesixnetwork/sixchain-client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { v4 } from "uuid";
import dotenv from "dotenv";
dotenv.config();

const network: string = "local";
const schemaCode: string = "TechSauce.GlobalSummit2023";

const main = async (tokenID: number):Promise<any> => {
  const sixConnector = new SixDataChainConnector();
  let accountSigner;

  if (network === "local") {
    // ** LOCAL TESTNET **
    sixConnector.rpcUrl = "http://localhost:26657";
    sixConnector.apiUrl = "http://localhost:1317";
    // const accountSigner = await sixConnector.accounts.privateKeyToAccount(
    //   process.env.ALICE_PRIVATE_KEY
    // );
    accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
      process.env.ALICE_MNEMONIC!
    );
  } else if (network === "fivenet") {
    // ** FIVENET **
    sixConnector.rpcUrl = "https://rpc2.fivenet.sixprotocol.net:443";
    sixConnector.apiUrl = "https://api1.fivenet.sixprotocol.net:443";
    // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
      process.env.ADDRESS_KLANG_MNEMONIC
    );
  } else if (network === "sixnet") {
    // ** SIXNET **
    // sixConnector.rpcUrl = "https://sixnet-rpc.sixprotocol.net:443";
    sixConnector.apiUrl = "https://sixnet-api.sixprotocol.net:443";
    // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
      process.env.TECHSAUCE_MNEMONIC
    );
  } else {
    throw new Error("Invalid network");
  }

  // ** CORE CONCEPT **
  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: fee.GasPrice.fromString("1.25usix"),
  });
  const apiClient = await sixConnector.connectAPIClient();
  let metadata;
  try {
    metadata = await apiClient.nftmngrModule.queryNftData(
      schemaCode,
      String(tokenID)
    );
  } catch (error:any) {
    console.log("token not found", error.error);
    metadata = null;
    // return fail
    return null;
  }
  //   console.log(metadata.data.nftData.onchain_attributes);

  const onChainAttribute = metadata.data.nftData.onchain_attributes;
  //   console.log(onChainAttribute);

  const mustDoList = [
    "stage_1",
    "stage_2",
    "stage_3",
    "stage_4",
    "stage_5",
    "exhibition_a",
    "exhibition_b",
    "exhibition_c",
    "bussiness_zone",
    "relax_zone",
    "exp_zone",
    "cvc_zone",
    "techsauce_booth",
  ];

  let unDoneAttrubtes = [];
  for (let i = 0; i < onChainAttribute.length; i++) {
    const element = onChainAttribute[i];
    if (mustDoList.includes(element.name)) {
      if (element.boolean_attribute_value.value === true) {
        continue;
      } else {
        unDoneAttrubtes.push(element.name);
      }
    }
  }
  //   console.log(unDoneAttrubtes);

  let msgArray: Array<EncodeObject> = [];
  const stage_list = ["stage_1", "stage_2", "stage_3", "stage_4", "stage_5"];
  const exhibition_list = ["exhibition_a", "exhibition_b", "exhibition_c"];
  const zone_list = ["bussiness_zone", "relax_zone", "exp_zone", "cvc_zone"];
  const check_in = ["check_in"];
  // check if stage_list is in unDoneAttrubtes
  for (let i = 0; i < stage_list.length; i++) {
    if (unDoneAttrubtes.includes(stage_list[i])) {
      // build msg
      const ref_id = v4();
      let token_id = String(tokenID);
      const action: ITxNFTmngr.MsgPerformActionByAdmin = {
        creator: address,
        nft_schema_code: schemaCode,
        tokenId: token_id,
        action: "attend_stage",
        ref_id: `${ref_id}`,
        parameters: [{ name: "stage", value: stage_list[i] }],
      };
      const msg = await rpcClient.nftmngrModule.msgPerformActionByAdmin(action);
      msgArray.push(msg);
    }
  }

  // check if exhibition_list is in unDoneAttrubtes
  for (let i = 0; i < exhibition_list.length; i++) {
    if (unDoneAttrubtes.includes(exhibition_list[i])) {
      // build msg
      const ref_id = v4();
      let token_id = String(tokenID);
      const action: ITxNFTmngr.MsgPerformActionByAdmin = {
        creator: address,
        nft_schema_code: schemaCode,
        tokenId: token_id,
        action: "attend_exhibition",
        ref_id: `${ref_id}`,
        parameters: [{ name: "exhibition", value: exhibition_list[i] }],
      };
      const msg = await rpcClient.nftmngrModule.msgPerformActionByAdmin(action);
      msgArray.push(msg);
    }
  }

  // check if zone_list is in unDoneAttrubtes
  for (let i = 0; i < zone_list.length; i++) {
    if (unDoneAttrubtes.includes(zone_list[i])) {
      // build msg
      const ref_id = v4();
      let token_id = String(tokenID);
      const action: ITxNFTmngr.MsgPerformActionByAdmin = {
        creator: address,
        nft_schema_code: schemaCode,
        tokenId: token_id,
        action: "attend_zone",
        ref_id: `${ref_id}`,
        parameters: [{ name: "zone", value: zone_list[i] }],
      };
      const msg = await rpcClient.nftmngrModule.msgPerformActionByAdmin(action);
      msgArray.push(msg);
    }
  }

  // check if check_in is in unDoneAttrubtes
  for (let i = 0; i < check_in.length; i++) {
    if (unDoneAttrubtes.includes(check_in[i])) {
      // build msg
      const ref_id = v4();
      let token_id = String(tokenID);
      const action: ITxNFTmngr.MsgPerformActionByAdmin = {
        creator: address,
        nft_schema_code: schemaCode,
        tokenId: token_id,
        action: "check_in",
        ref_id: `${ref_id}`,
        parameters: [],
      };
      const msg = await rpcClient.nftmngrModule.msgPerformActionByAdmin(action);
      msgArray.push(msg);
    }
  }

  //   console.log(msgArray);

  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
    fee: "auto",
    memo: `privilege`,
  });

  console.log(txResponse);
};

main(2)
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.log(err);
  });
