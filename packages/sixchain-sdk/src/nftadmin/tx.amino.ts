//@ts-nocheck
import { MsgGrantPermission, MsgRevokePermission } from './tx';
export const AminoConverter = {
  '/thesixnetwork.sixprotocol.nftadmin.MsgGrantPermission': {
    aminoType: '/thesixnetwork.sixprotocol.nftadmin.MsgGrantPermission',
    toAmino: MsgGrantPermission.toAmino,
    fromAmino: MsgGrantPermission.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftadmin.MsgRevokePermission': {
    aminoType: '/thesixnetwork.sixprotocol.nftadmin.MsgRevokePermission',
    toAmino: MsgRevokePermission.toAmino,
    fromAmino: MsgRevokePermission.fromAmino
  }
};