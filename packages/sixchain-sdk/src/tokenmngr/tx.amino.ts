//@ts-nocheck
import { MsgBurn, MsgCreateMintperm, MsgCreateOptions, MsgCreateToken, MsgDeleteMintperm, MsgDeleteOptions, MsgDeleteToken, MsgMint, MsgSendWrapToken,MsgUnwrapToken, MsgUpdateMintperm, MsgUpdateOptions, MsgUpdateToken, MsgWrapToken } from './tx';
export const AminoConverter = {
  '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateToken',
    toAmino: MsgCreateToken.toAmino,
    fromAmino: MsgCreateToken.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateToken',
    toAmino: MsgUpdateToken.toAmino,
    fromAmino: MsgUpdateToken.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteToken',
    toAmino: MsgDeleteToken.toAmino,
    fromAmino: MsgDeleteToken.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateMintperm',
    toAmino: MsgCreateMintperm.toAmino,
    fromAmino: MsgCreateMintperm.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateMintperm',
    toAmino: MsgUpdateMintperm.toAmino,
    fromAmino: MsgUpdateMintperm.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteMintperm',
    toAmino: MsgDeleteMintperm.toAmino,
    fromAmino: MsgDeleteMintperm.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgMint': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgMint',
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgCreateOptions',
    toAmino: MsgCreateOptions.toAmino,
    fromAmino: MsgCreateOptions.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgUpdateOptions',
    toAmino: MsgUpdateOptions.toAmino,
    fromAmino: MsgUpdateOptions.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgDeleteOptions',
    toAmino: MsgDeleteOptions.toAmino,
    fromAmino: MsgDeleteOptions.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgBurn': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgBurn',
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgWrapToken': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgWrapToken',
    toAmino: MsgWrapToken.toAmino,
    fromAmino: MsgWrapToken.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgUnwrapToken': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgUnwrapToken',
    toAmino: MsgUnwrapToken.toAmino,
    fromAmino: MsgUnwrapToken.fromAmino
  },
  '/thesixnetwork.sixprotocol.tokenmngr.MsgSendWrapToken': {
    aminoType: '/thesixnetwork.sixprotocol.tokenmngr.MsgSendWrapToken',
    toAmino: MsgSendWrapToken.toAmino,
    fromAmino: MsgSendWrapToken.fromAmino
  }
};