import { SixDataChainConnector, typesTxBank, fee } from "@thesixnetwork/sixchain-client";
import { StdFee } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice, calculateFee } from "@cosmjs/stargate/build/fee";
import { getConnectorConfig } from "../client";
import dotenv from "dotenv";

dotenv.config();

const NETOWRK = process.argv[2]!;
const amount = process.argv[3]; // input six amount
const using_amount = parseInt(amount) * 1_000_000; // convert to usix

const cosmosSendAuto = async () => {
  if (!NETOWRK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/deploy.ts fivenet || yarn ts-node ./scripts/deploy.ts fivenet",
    );
  }

  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(NETOWRK);
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = rpcUrl;
  sixConnector.apiUrl = apiUrl;

  const accountSigner =
    await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);

  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: GasPrice.fromString("1.25usix"),
  });

  let msgArray: Array<EncodeObject> = [];
  const send: typesTxBank.MsgSend = {
    from_address: address,
    to_address: "6x1t3p2vzd7w036ahxf4kefsc9sn24pvlqphcuauv",
    amount: [
      {
        denom: "usix",
        amount: using_amount.toString(),
      },
    ],
  };

  const msg = rpcClient.cosmosBankModule.msgSend(send);
  msgArray.push(msg);
  const amount = { denom: "usix", amount: "12500000" };
  const fee: StdFee = {
    amount: [amount],
    gas: "2000000",
  };

  const txResponse = await rpcClient.cosmosBankModule.signAndBroadcast(
    msgArray,
    {
      fee: 'auto',
      memo: "send balance to action executor",
    },
  );
  if (txResponse.code !== 0) {
    console.error(`Error minting NFT: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `AUTO successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`,
    );
    return true;
  }
};

const cosmosSendFixed = async () => {
  if (!NETOWRK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/deploy.ts fivenet || yarn ts-node ./scripts/deploy.ts fivenet",
    );
  }

  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(NETOWRK);
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = rpcUrl;
  sixConnector.apiUrl = apiUrl;

  const accountSigner =
    await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);

  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: GasPrice.fromString("1.25usix"),
  });

  let msgArray: Array<EncodeObject> = [];
  const send: typesTxBank.MsgSend = {
    from_address: address,
    to_address: "6x1t3p2vzd7w036ahxf4kefsc9sn24pvlqphcuauv",
    amount: [
      {
        denom: "usix",
        amount: using_amount.toString(),
      },
    ],
  };

  const msg = rpcClient.cosmosBankModule.msgSend(send);
  msgArray.push(msg);

  const amount = { denom: "usix", amount: "12500000" };
  const fee: StdFee = {
    amount: [amount],
    gas: "2000000",
  };

  const txResponse = await rpcClient.cosmosBankModule.signAndBroadcast(
    msgArray,
    {
      fee: fee,
      memo: "send balance to action executor",
    },
  );
  if (txResponse.code !== 0) {
    console.error(`Error minting NFT: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `FIXED successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`,
    );
    return true;
  }
};

async function main() {
  if (!NETOWRK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/deploy.ts fivenet || yarn ts-node ./scripts/deploy.ts fivenet",
    );
  }

  try {
    // Call both functions and wait for them to resolve or reject
    const [autoResponse, fixedResponse] = await Promise.all([
      cosmosSendAuto(),
      cosmosSendFixed(),
    ]);

    // Check which function had a successful response
    if (autoResponse) {
      console.log("cosmosSendAuto completed successfully:", autoResponse);
    } else if (fixedResponse) {
      console.log("cosmosSendFixed completed successfully:", fixedResponse);
    } else {
      console.log("Both functions failed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main().then(() => {
  console.log;
});
