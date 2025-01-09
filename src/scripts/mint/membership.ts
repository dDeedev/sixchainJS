import { SixDataChainConnector, ITxNFTmngr, fee } from "@thesixnetwork/sixchain-client";
import S_ZERO_YEAR from "../../resources/metadatas/membership/senior/nft-data_0_years.json";
import S_THREE_YEAR from "../../resources/metadatas/membership/senior/nft-data_3_years.json";
import S_FIVE_YEAR from "../../resources/metadatas/membership/senior/nft-data_5_years.json";
import S_TEN_YEAR from "../../resources/metadatas/membership/senior/nft-data_10_years.json";

import J_ZERO_YEAR from "../../resources/metadatas/membership/junior/nft-data_0_years.json";
import J_THREE_YEAR from "../../resources/metadatas/membership/junior/nft-data_3_years.json";
import J_FIVE_YEAR from "../../resources/metadatas/membership/junior/nft-data_5_years.json";
import J_TEN_YEAR from "../../resources/metadatas/membership/junior/nft-data_10_years.json";

import { getConnectorConfig } from "../client";
import dotenv from "dotenv";
import moment from "moment";

dotenv.config();

const JUNIOR_TIER_FILE_NAME: { [key: string]: any } = {
  "0": J_ZERO_YEAR,
  "3": J_THREE_YEAR,
  "5": J_FIVE_YEAR,
  "10": J_TEN_YEAR,
};

const SENIOR_TIER_FILE_NAME : { [key: string]: any } = {
  "0": S_ZERO_YEAR,
  "3": S_THREE_YEAR,
  "5": S_FIVE_YEAR,
  "10": S_TEN_YEAR,
};

const NETWORK = process.argv[2]!;
const TOKEN_ID = process.argv[3]!;
const TIER = process.argv[4]!;
const SENIOR = process.argv[5]!;

let schemaCode: string; // Make sure to initialize this variable before using

async function generateNFTData(tier: string, tokenId: string, senior:boolean): Promise<any> {
  let tierFileName = JUNIOR_TIER_FILE_NAME[tier];
  if(senior){
    tierFileName = SENIOR_TIER_FILE_NAME[tier]
  }
  const split_schema = tierFileName.nft_schema_code.split(".");
  const _name = split_schema[1];
  const org_name = process.env.ORG_NAME
  schemaCode = `${org_name}.${_name}`;
  tierFileName.nft_schema_code = schemaCode

  var today = moment().utc().format();
  var expire = moment().utc().add(Number(tier),'years').format()

  tierFileName.onchain_attributes.forEach((attribute:any) => {
    if (attribute.name === "start_date" && attribute.string_attribute_value) {
      attribute.string_attribute_value.value = today;
    }
    if (attribute.name === "expire_date" && attribute.string_attribute_value) {
      attribute.string_attribute_value.value = expire;
    }
  });

  const nftData = {
    ...tierFileName,
    nft_schema_code: schemaCode,
    token_id: tokenId,
  };
  nftData.origin_image = `https://storage.googleapis.com/samitivej-nft-metadata-image/empty.png`;
  return nftData;
}

async function isTokenMinted(
  apiClient: any,
  schemaCode: string,
  tokenId: string,
): Promise<boolean> {
  try {
    const token = await apiClient.nftmngrModule.queryNftData(
      schemaCode,
      tokenId,
    );
    return !!token.data;
  } catch (error) {
    return false;
  }
}

async function mintNFT(tier: string, tokenId: number, senior:boolean) {
  console.log(`Minting... tier: ${tier}, tokenId: ${tokenId}`);

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet).",
    );
  }

  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = rpcUrl;
  sixConnector.apiUrl = apiUrl;

  const accountSigner =
    await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);
  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: fee.GasPrice.fromString("1.25usix"),
  });
  
  const apiClient = await sixConnector.connectAPIClient();

  const token_id = tokenId.toString();

  if (await isTokenMinted(apiClient, schemaCode, token_id)) {
    console.log(`Token ID ${token_id} is already minted.`);
    return;
  }

  const nftData = await generateNFTData(tier, token_id, senior);
  const encodeBase64Metadata = Buffer.from(JSON.stringify(nftData)).toString(
    "base64",
  );

  const msgCreateMetaData: ITxNFTmngr.MsgCreateMetadata = {
    creator: address,
    nftSchemaCode: schemaCode,
    tokenId: token_id,
    base64NFTData: encodeBase64Metadata,
  };

  const msgMintData =
    rpcClient.nftmngrModule.msgCreateMetadata(msgCreateMetaData);

  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(
    [msgMintData],
    {
      fee: "auto",
      memo: "Mint NFT Metadata Token",
    },
  );

  if (txResponse.code !== 0) {
    console.error(`Error minting NFT: ${txResponse.rawLog}`);
  } else {
    console.log(
      `Minting successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`,
    );
  }
}

mintNFT(String(TIER), Number(TOKEN_ID), Boolean(SENIOR)) .then(() => console.log("Minting completed")) .catch((err) => console.error(err));
