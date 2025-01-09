//@ts-nocheck
import { Rpc } from '../helpers';
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import('../cosmos/authz/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import('../cosmos/bank/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import('../cosmos/distribution/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import('../cosmos/feegrant/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    gov: {
      v1beta1: new (await import('../cosmos/gov/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import('../cosmos/staking/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import('../cosmos/vesting/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
    }
  },
  thesixnetwork: {
    sixprotocol: {
      nftadmin: new (await import('../nftadmin/tx.rpc.msg')).MsgClientImpl(rpc),
      nftmngr: new (await import('../nftmngr/tx.rpc.msg')).MsgClientImpl(rpc),
      nftoracle: new (await import('../nftoracle/tx.rpc.msg')).MsgClientImpl(rpc),
      protocoladmin: new (await import('../protocoladmin/tx.rpc.msg')).MsgClientImpl(rpc),
      tokenmngr: new (await import('../tokenmngr/tx.rpc.msg')).MsgClientImpl(rpc)
    }
  }
});