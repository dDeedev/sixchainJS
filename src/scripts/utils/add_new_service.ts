import { SixDataChainConnector, ITxNFTmngr, fee, BASE64, typesTxNFTManager } from "@ddeedev/sixchain-client";
import newAttribute from "../../resources/utils/new-attribute.json";
import divine_elite from "../../resources/schemas/divineelite-nft-schema.json";
import { getConnectorConfig } from "../client";

const main = async () => {
  const NETWORK = process.argv[2]!;

  let schemaCode: string;
  schemaCode = divine_elite.code
  const _name = schemaCode.split('.');
  const org_name = process.env.ORG_NAME
  schemaCode = `${org_name}.${_name}`;

  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = rpcUrl;
  sixConnector.apiUrl = apiUrl;

  const accountSigner =
    await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);

  // Get index of account
  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: fee.GasPrice.fromString("1.25usix"),
  });
  // Encode NFT data to base64
  const encodeBase64NewAttribute = BASE64.encode(
    JSON.stringify(newAttribute),
  );
  // Create message
  const addAttribute: typesTxNFTManager.MsgAddAttribute = {
    creator: address,
    code: schemaCode,
    location: 1, // 0: NFT Attribute(non-Dynamic Attribute), 1: Token Attribute (Dynamic Attribute)
    base64NewAttriuteDefenition: encodeBase64NewAttribute,
  };
  const msg = rpcClient.nftmngrModule.msgAddAttribute(addAttribute);
  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg], {
    fee: "auto",
    memo: "Add New Attribute to NFT Schema",
  });

  console.log(txResponse);
};
main();
