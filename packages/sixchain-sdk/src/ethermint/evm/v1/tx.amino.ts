//@ts-nocheck
import { MsgEthereumTx } from './tx';
export const AminoConverter = {
  '/ethermint.evm.v1.MsgEthereumTx': {
    aminoType: '/ethermint.evm.v1.MsgEthereumTx',
    toAmino: MsgEthereumTx.toAmino,
    fromAmino: MsgEthereumTx.fromAmino
  }
};