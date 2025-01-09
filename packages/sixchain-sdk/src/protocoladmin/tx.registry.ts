//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';

import { MsgAddAdminToGroup, MsgCreateGroup, MsgDeleteGroup, MsgRemoveAdminFromGroup,MsgUpdateGroup } from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [['/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroup', MsgCreateGroup], ['/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroup', MsgUpdateGroup], ['/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroup', MsgDeleteGroup], ['/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroup', MsgAddAdminToGroup], ['/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroup', MsgRemoveAdminFromGroup]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createGroup(value: MsgCreateGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroup',
        value: MsgCreateGroup.encode(value).finish()
      };
    },
    updateGroup(value: MsgUpdateGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroup',
        value: MsgUpdateGroup.encode(value).finish()
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroup',
        value: MsgDeleteGroup.encode(value).finish()
      };
    },
    addAdminToGroup(value: MsgAddAdminToGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroup',
        value: MsgAddAdminToGroup.encode(value).finish()
      };
    },
    removeAdminFromGroup(value: MsgRemoveAdminFromGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroup',
        value: MsgRemoveAdminFromGroup.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createGroup(value: MsgCreateGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroup',
        value
      };
    },
    updateGroup(value: MsgUpdateGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroup',
        value
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroup',
        value
      };
    },
    addAdminToGroup(value: MsgAddAdminToGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroup',
        value
      };
    },
    removeAdminFromGroup(value: MsgRemoveAdminFromGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroup',
        value
      };
    }
  },
  fromPartial: {
    createGroup(value: MsgCreateGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroup',
        value: MsgCreateGroup.fromPartial(value)
      };
    },
    updateGroup(value: MsgUpdateGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroup',
        value: MsgUpdateGroup.fromPartial(value)
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroup',
        value: MsgDeleteGroup.fromPartial(value)
      };
    },
    addAdminToGroup(value: MsgAddAdminToGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroup',
        value: MsgAddAdminToGroup.fromPartial(value)
      };
    },
    removeAdminFromGroup(value: MsgRemoveAdminFromGroup) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroup',
        value: MsgRemoveAdminFromGroup.fromPartial(value)
      };
    }
  }
};