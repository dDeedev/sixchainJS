//@ts-nocheck
import { MsgAddAction, MsgAddAttribute, MsgChangeOrgOwner, MsgChangeSchemaOwner, MsgCreateActionExecutor, MsgCreateMetadata, MsgCreateMultiMetadata, MsgCreateNFTSchema, MsgCreateVirtualAction, MsgCreateVirtualSchemaProposal, MsgDeleteActionExecutor, MsgDeleteVirtualAction, MsgDeleteVirtualSchema, MsgDisableVirtualSchemaProposal, MsgPerformActionByAdmin, MsgPerformVirtualAction,MsgResyncAttributes, MsgSetAttributeOveriding, MsgSetBaseUri, MsgSetFeeConfig, MsgSetMetadataFormat, MsgSetMintauth, MsgSetOriginChain, MsgSetOriginContract, MsgSetUriRetrievalMethod, MsgShowAttributes, MsgToggleAction, MsgUpdateAction, MsgUpdateSchemaAttribute, MsgUpdateVirtualAction, MsgVoteCreateVirtualSchema } from './tx';
export const AminoConverter = {
  '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchema': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchema',
    toAmino: MsgCreateNFTSchema.toAmino,
    fromAmino: MsgCreateNFTSchema.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadata': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadata',
    toAmino: MsgCreateMetadata.toAmino,
    fromAmino: MsgCreateMetadata.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdmin': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdmin',
    toAmino: MsgPerformActionByAdmin.toAmino,
    fromAmino: MsgPerformActionByAdmin.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttribute': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttribute',
    toAmino: MsgAddAttribute.toAmino,
    fromAmino: MsgAddAttribute.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgAddAction': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAction',
    toAmino: MsgAddAction.toAmino,
    fromAmino: MsgAddAction.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUri': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUri',
    toAmino: MsgSetBaseUri.toAmino,
    fromAmino: MsgSetBaseUri.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgToggleAction': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleAction',
    toAmino: MsgToggleAction.toAmino,
    fromAmino: MsgToggleAction.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwner': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwner',
    toAmino: MsgChangeSchemaOwner.toAmino,
    fromAmino: MsgChangeSchemaOwner.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributes': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributes',
    toAmino: MsgResyncAttributes.toAmino,
    fromAmino: MsgResyncAttributes.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributes': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributes',
    toAmino: MsgShowAttributes.toAmino,
    fromAmino: MsgShowAttributes.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfig': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfig',
    toAmino: MsgSetFeeConfig.toAmino,
    fromAmino: MsgSetFeeConfig.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauth': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauth',
    toAmino: MsgSetMintauth.toAmino,
    fromAmino: MsgSetMintauth.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwner': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwner',
    toAmino: MsgChangeOrgOwner.toAmino,
    fromAmino: MsgChangeOrgOwner.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadata': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadata',
    toAmino: MsgCreateMultiMetadata.toAmino,
    fromAmino: MsgCreateMultiMetadata.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethod': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethod',
    toAmino: MsgSetUriRetrievalMethod.toAmino,
    fromAmino: MsgSetUriRetrievalMethod.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChain': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChain',
    toAmino: MsgSetOriginChain.toAmino,
    fromAmino: MsgSetOriginChain.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContract': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContract',
    toAmino: MsgSetOriginContract.toAmino,
    fromAmino: MsgSetOriginContract.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveriding': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveriding',
    toAmino: MsgSetAttributeOveriding.toAmino,
    fromAmino: MsgSetAttributeOveriding.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormat': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormat',
    toAmino: MsgSetMetadataFormat.toAmino,
    fromAmino: MsgSetMetadataFormat.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutor': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutor',
    toAmino: MsgCreateActionExecutor.toAmino,
    fromAmino: MsgCreateActionExecutor.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutor': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutor',
    toAmino: MsgDeleteActionExecutor.toAmino,
    fromAmino: MsgDeleteActionExecutor.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttribute': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttribute',
    toAmino: MsgUpdateSchemaAttribute.toAmino,
    fromAmino: MsgUpdateSchemaAttribute.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateAction': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateAction',
    toAmino: MsgUpdateAction.toAmino,
    fromAmino: MsgUpdateAction.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualAction': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualAction',
    toAmino: MsgCreateVirtualAction.toAmino,
    fromAmino: MsgCreateVirtualAction.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualAction': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualAction',
    toAmino: MsgUpdateVirtualAction.toAmino,
    fromAmino: MsgUpdateVirtualAction.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualAction': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualAction',
    toAmino: MsgDeleteVirtualAction.toAmino,
    fromAmino: MsgDeleteVirtualAction.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaProposal': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaProposal',
    toAmino: MsgCreateVirtualSchemaProposal.toAmino,
    fromAmino: MsgCreateVirtualSchemaProposal.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchema': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchema',
    toAmino: MsgDeleteVirtualSchema.toAmino,
    fromAmino: MsgDeleteVirtualSchema.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchema': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchema',
    toAmino: MsgVoteCreateVirtualSchema.toAmino,
    fromAmino: MsgVoteCreateVirtualSchema.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposal': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposal',
    toAmino: MsgDisableVirtualSchemaProposal.toAmino,
    fromAmino: MsgDisableVirtualSchemaProposal.fromAmino
  },
  '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualAction': {
    aminoType: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualAction',
    toAmino: MsgPerformVirtualAction.toAmino,
    fromAmino: MsgPerformVirtualAction.fromAmino
  }
};