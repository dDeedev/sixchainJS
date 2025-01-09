//@ts-nocheck
import { QueryClient } from '@cosmjs/stargate';
import { HttpEndpoint,Tendermint34Client } from '@cosmjs/tendermint-rpc';
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      auth: {
        v1beta1: (await import('../cosmos/auth/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import('../cosmos/authz/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import('../cosmos/bank/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import('../cosmos/distribution/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import('../cosmos/feegrant/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      gov: {
        v1beta1: (await import('../cosmos/gov/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import('../cosmos/mint/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import('../cosmos/params/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import('../cosmos/staking/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import('../cosmos/tx/v1beta1/service.rpc.Service')).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import('../cosmos/upgrade/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
      }
    },
    thesixnetwork: {
      sixprotocol: {
        nftadmin: (await import('../nftadmin/query.rpc.Query')).createRpcQueryExtension(client),
        nftmngr: (await import('../nftmngr/query.rpc.Query')).createRpcQueryExtension(client),
        nftoracle: (await import('../nftoracle/query.rpc.Query')).createRpcQueryExtension(client),
        protocoladmin: (await import('../protocoladmin/query.rpc.Query')).createRpcQueryExtension(client),
        tokenmngr: (await import('../tokenmngr/query.rpc.Query')).createRpcQueryExtension(client)
      }
    }
  };
};