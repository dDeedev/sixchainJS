//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';

import { MsgBurn, MsgCreateMintperm, MsgCreateOptions, MsgCreateToken, MsgDeleteMintperm, MsgDeleteOptions, MsgDeleteToken, MsgMint, MsgSendWrapToken,MsgUnwrapToken, MsgUpdateMintperm, MsgUpdateOptions, MsgUpdateToken, MsgWrapToken } from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [['/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken', MsgCreateToken], ['/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken', MsgUpdateToken], ['/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken', MsgDeleteToken], ['/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm', MsgCreateMintperm], ['/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm', MsgUpdateMintperm], ['/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm', MsgDeleteMintperm], ['/thesixnetwork.sixprotocol.tokenmngr.MsgMint', MsgMint], ['/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions', MsgCreateOptions], ['/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions', MsgUpdateOptions], ['/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions', MsgDeleteOptions], ['/thesixnetwork.sixprotocol.tokenmngr.MsgBurn', MsgBurn], ['/thesixnetwork.sixprotocol.tokenmngr.MsgWrapToken', MsgWrapToken], ['/thesixnetwork.sixprotocol.tokenmngr.MsgUnwrapToken', MsgUnwrapToken], ['/thesixnetwork.sixprotocol.tokenmngr.MsgSendWrapToken', MsgSendWrapToken]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createToken(value: MsgCreateToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken',
        value: MsgCreateToken.encode(value).finish()
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken',
        value: MsgUpdateToken.encode(value).finish()
      };
    },
    deleteToken(value: MsgDeleteToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken',
        value: MsgDeleteToken.encode(value).finish()
      };
    },
    createMintperm(value: MsgCreateMintperm) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm',
        value: MsgCreateMintperm.encode(value).finish()
      };
    },
    updateMintperm(value: MsgUpdateMintperm) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm',
        value: MsgUpdateMintperm.encode(value).finish()
      };
    },
    deleteMintperm(value: MsgDeleteMintperm) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm',
        value: MsgDeleteMintperm.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgMint',
        value: MsgMint.encode(value).finish()
      };
    },
    createOptions(value: MsgCreateOptions) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions',
        value: MsgCreateOptions.encode(value).finish()
      };
    },
    updateOptions(value: MsgUpdateOptions) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions',
        value: MsgUpdateOptions.encode(value).finish()
      };
    },
    deleteOptions(value: MsgDeleteOptions) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions',
        value: MsgDeleteOptions.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgBurn',
        value: MsgBurn.encode(value).finish()
      };
    },
    wrapToken(value: MsgWrapToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgWrapToken',
        value: MsgWrapToken.encode(value).finish()
      };
    },
    unwrapToken(value: MsgUnwrapToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgUnwrapToken',
        value: MsgUnwrapToken.encode(value).finish()
      };
    },
    sendWrapToken(value: MsgSendWrapToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgSendWrapToken',
        value: MsgSendWrapToken.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createToken(value: MsgCreateToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken',
        value
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken',
        value
      };
    },
    deleteToken(value: MsgDeleteToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken',
        value
      };
    },
    createMintperm(value: MsgCreateMintperm) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm',
        value
      };
    },
    updateMintperm(value: MsgUpdateMintperm) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm',
        value
      };
    },
    deleteMintperm(value: MsgDeleteMintperm) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm',
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgMint',
        value
      };
    },
    createOptions(value: MsgCreateOptions) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions',
        value
      };
    },
    updateOptions(value: MsgUpdateOptions) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions',
        value
      };
    },
    deleteOptions(value: MsgDeleteOptions) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions',
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgBurn',
        value
      };
    },
    wrapToken(value: MsgWrapToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgWrapToken',
        value
      };
    },
    unwrapToken(value: MsgUnwrapToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgUnwrapToken',
        value
      };
    },
    sendWrapToken(value: MsgSendWrapToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgSendWrapToken',
        value
      };
    }
  },
  fromPartial: {
    createToken(value: MsgCreateToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken',
        value: MsgCreateToken.fromPartial(value)
      };
    },
    updateToken(value: MsgUpdateToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken',
        value: MsgUpdateToken.fromPartial(value)
      };
    },
    deleteToken(value: MsgDeleteToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken',
        value: MsgDeleteToken.fromPartial(value)
      };
    },
    createMintperm(value: MsgCreateMintperm) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm',
        value: MsgCreateMintperm.fromPartial(value)
      };
    },
    updateMintperm(value: MsgUpdateMintperm) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm',
        value: MsgUpdateMintperm.fromPartial(value)
      };
    },
    deleteMintperm(value: MsgDeleteMintperm) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm',
        value: MsgDeleteMintperm.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgMint',
        value: MsgMint.fromPartial(value)
      };
    },
    createOptions(value: MsgCreateOptions) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions',
        value: MsgCreateOptions.fromPartial(value)
      };
    },
    updateOptions(value: MsgUpdateOptions) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions',
        value: MsgUpdateOptions.fromPartial(value)
      };
    },
    deleteOptions(value: MsgDeleteOptions) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions',
        value: MsgDeleteOptions.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgBurn',
        value: MsgBurn.fromPartial(value)
      };
    },
    wrapToken(value: MsgWrapToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgWrapToken',
        value: MsgWrapToken.fromPartial(value)
      };
    },
    unwrapToken(value: MsgUnwrapToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgUnwrapToken',
        value: MsgUnwrapToken.fromPartial(value)
      };
    },
    sendWrapToken(value: MsgSendWrapToken) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.MsgSendWrapToken',
        value: MsgSendWrapToken.fromPartial(value)
      };
    }
  }
};