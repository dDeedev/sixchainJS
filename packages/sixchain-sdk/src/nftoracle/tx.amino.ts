//@ts-nocheck
import { MsgCreateActionRequest, MsgCreateActionSigner, MsgCreateActionSignerConfig, MsgCreateMintRequest, MsgCreateSyncActionSigner, MsgCreateVerifyCollectionOwnerRequest, MsgDeleteActionSigner, MsgDeleteActionSignerConfig, MsgSetMinimumConfirmation, MsgSubmitActionResponse, MsgSubmitMintResponse, MsgSubmitSyncActionSigner,MsgSubmitVerifyCollectionOwner, MsgUpdateActionSigner, MsgUpdateActionSignerConfig } from './tx';
export const AminoConverter = {
  '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequest': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequest',
    toAmino: MsgCreateMintRequest.toAmino,
    fromAmino: MsgCreateMintRequest.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponse': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponse',
    toAmino: MsgSubmitMintResponse.toAmino,
    fromAmino: MsgSubmitMintResponse.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequest': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequest',
    toAmino: MsgCreateActionRequest.toAmino,
    fromAmino: MsgCreateActionRequest.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponse': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponse',
    toAmino: MsgSubmitActionResponse.toAmino,
    fromAmino: MsgSubmitActionResponse.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest',
    toAmino: MsgCreateVerifyCollectionOwnerRequest.toAmino,
    fromAmino: MsgCreateVerifyCollectionOwnerRequest.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner',
    toAmino: MsgSubmitVerifyCollectionOwner.toAmino,
    fromAmino: MsgSubmitVerifyCollectionOwner.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmation': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmation',
    toAmino: MsgSetMinimumConfirmation.toAmino,
    fromAmino: MsgSetMinimumConfirmation.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSigner': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSigner',
    toAmino: MsgCreateActionSigner.toAmino,
    fromAmino: MsgCreateActionSigner.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSigner': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSigner',
    toAmino: MsgUpdateActionSigner.toAmino,
    fromAmino: MsgUpdateActionSigner.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSigner': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSigner',
    toAmino: MsgDeleteActionSigner.toAmino,
    fromAmino: MsgDeleteActionSigner.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfig': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfig',
    toAmino: MsgCreateActionSignerConfig.toAmino,
    fromAmino: MsgCreateActionSignerConfig.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfig': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfig',
    toAmino: MsgUpdateActionSignerConfig.toAmino,
    fromAmino: MsgUpdateActionSignerConfig.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfig': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfig',
    toAmino: MsgDeleteActionSignerConfig.toAmino,
    fromAmino: MsgDeleteActionSignerConfig.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSigner': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSigner',
    toAmino: MsgCreateSyncActionSigner.toAmino,
    fromAmino: MsgCreateSyncActionSigner.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSigner': {
    aminoType: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSigner',
    toAmino: MsgSubmitSyncActionSigner.toAmino,
    fromAmino: MsgSubmitSyncActionSigner.fromAmino
  }
};