//@ts-nocheck
import { MsgAddAdminToGroup, MsgCreateGroup, MsgDeleteGroup, MsgRemoveAdminFromGroup,MsgUpdateGroup } from './tx';
export const AminoConverter = {
  '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroup': {
    aminoType: '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroup',
    toAmino: MsgCreateGroup.toAmino,
    fromAmino: MsgCreateGroup.fromAmino
  },
  '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroup': {
    aminoType: '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroup',
    toAmino: MsgUpdateGroup.toAmino,
    fromAmino: MsgUpdateGroup.fromAmino
  },
  '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroup': {
    aminoType: '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroup',
    toAmino: MsgDeleteGroup.toAmino,
    fromAmino: MsgDeleteGroup.fromAmino
  },
  '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroup': {
    aminoType: '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroup',
    toAmino: MsgAddAdminToGroup.toAmino,
    fromAmino: MsgAddAdminToGroup.fromAmino
  },
  '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroup': {
    aminoType: '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroup',
    toAmino: MsgRemoveAdminFromGroup.toAmino,
    fromAmino: MsgRemoveAdminFromGroup.fromAmino
  }
};