//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';

import { MsgAddAction, MsgAddAttribute, MsgChangeOrgOwner, MsgChangeSchemaOwner, MsgCreateActionExecutor, MsgCreateMetadata, MsgCreateMultiMetadata, MsgCreateNFTSchema, MsgCreateVirtualAction, MsgCreateVirtualSchemaProposal, MsgDeleteActionExecutor, MsgDeleteVirtualAction, MsgDeleteVirtualSchema, MsgDisableVirtualSchemaProposal, MsgPerformActionByAdmin, MsgPerformVirtualAction,MsgResyncAttributes, MsgSetAttributeOveriding, MsgSetBaseUri, MsgSetFeeConfig, MsgSetMetadataFormat, MsgSetMintauth, MsgSetOriginChain, MsgSetOriginContract, MsgSetUriRetrievalMethod, MsgShowAttributes, MsgToggleAction, MsgUpdateAction, MsgUpdateSchemaAttribute, MsgUpdateVirtualAction, MsgVoteCreateVirtualSchema } from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [['/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchema', MsgCreateNFTSchema], ['/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadata', MsgCreateMetadata], ['/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdmin', MsgPerformActionByAdmin], ['/thesixnetwork.sixprotocol.nftmngr.MsgAddAttribute', MsgAddAttribute], ['/thesixnetwork.sixprotocol.nftmngr.MsgAddAction', MsgAddAction], ['/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUri', MsgSetBaseUri], ['/thesixnetwork.sixprotocol.nftmngr.MsgToggleAction', MsgToggleAction], ['/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwner', MsgChangeSchemaOwner], ['/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributes', MsgResyncAttributes], ['/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributes', MsgShowAttributes], ['/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfig', MsgSetFeeConfig], ['/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauth', MsgSetMintauth], ['/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwner', MsgChangeOrgOwner], ['/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadata', MsgCreateMultiMetadata], ['/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethod', MsgSetUriRetrievalMethod], ['/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChain', MsgSetOriginChain], ['/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContract', MsgSetOriginContract], ['/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveriding', MsgSetAttributeOveriding], ['/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormat', MsgSetMetadataFormat], ['/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutor', MsgCreateActionExecutor], ['/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutor', MsgDeleteActionExecutor], ['/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttribute', MsgUpdateSchemaAttribute], ['/thesixnetwork.sixprotocol.nftmngr.MsgUpdateAction', MsgUpdateAction], ['/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualAction', MsgCreateVirtualAction], ['/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualAction', MsgUpdateVirtualAction], ['/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualAction', MsgDeleteVirtualAction], ['/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaProposal', MsgCreateVirtualSchemaProposal], ['/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchema', MsgDeleteVirtualSchema], ['/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchema', MsgVoteCreateVirtualSchema], ['/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposal', MsgDisableVirtualSchemaProposal], ['/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualAction', MsgPerformVirtualAction]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createNFTSchema(value: MsgCreateNFTSchema) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchema',
        value: MsgCreateNFTSchema.encode(value).finish()
      };
    },
    createMetadata(value: MsgCreateMetadata) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadata',
        value: MsgCreateMetadata.encode(value).finish()
      };
    },
    performActionByAdmin(value: MsgPerformActionByAdmin) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdmin',
        value: MsgPerformActionByAdmin.encode(value).finish()
      };
    },
    addAttribute(value: MsgAddAttribute) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttribute',
        value: MsgAddAttribute.encode(value).finish()
      };
    },
    addAction(value: MsgAddAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAction',
        value: MsgAddAction.encode(value).finish()
      };
    },
    setBaseUri(value: MsgSetBaseUri) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUri',
        value: MsgSetBaseUri.encode(value).finish()
      };
    },
    toggleAction(value: MsgToggleAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleAction',
        value: MsgToggleAction.encode(value).finish()
      };
    },
    changeSchemaOwner(value: MsgChangeSchemaOwner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwner',
        value: MsgChangeSchemaOwner.encode(value).finish()
      };
    },
    resyncAttributes(value: MsgResyncAttributes) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributes',
        value: MsgResyncAttributes.encode(value).finish()
      };
    },
    showAttributes(value: MsgShowAttributes) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributes',
        value: MsgShowAttributes.encode(value).finish()
      };
    },
    setFeeConfig(value: MsgSetFeeConfig) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfig',
        value: MsgSetFeeConfig.encode(value).finish()
      };
    },
    setMintauth(value: MsgSetMintauth) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauth',
        value: MsgSetMintauth.encode(value).finish()
      };
    },
    changeOrgOwner(value: MsgChangeOrgOwner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwner',
        value: MsgChangeOrgOwner.encode(value).finish()
      };
    },
    createMultiMetadata(value: MsgCreateMultiMetadata) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadata',
        value: MsgCreateMultiMetadata.encode(value).finish()
      };
    },
    setUriRetrievalMethod(value: MsgSetUriRetrievalMethod) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethod',
        value: MsgSetUriRetrievalMethod.encode(value).finish()
      };
    },
    setOriginChain(value: MsgSetOriginChain) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChain',
        value: MsgSetOriginChain.encode(value).finish()
      };
    },
    setOriginContract(value: MsgSetOriginContract) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContract',
        value: MsgSetOriginContract.encode(value).finish()
      };
    },
    setAttributeOveriding(value: MsgSetAttributeOveriding) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveriding',
        value: MsgSetAttributeOveriding.encode(value).finish()
      };
    },
    setMetadataFormat(value: MsgSetMetadataFormat) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormat',
        value: MsgSetMetadataFormat.encode(value).finish()
      };
    },
    createActionExecutor(value: MsgCreateActionExecutor) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutor',
        value: MsgCreateActionExecutor.encode(value).finish()
      };
    },
    deleteActionExecutor(value: MsgDeleteActionExecutor) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutor',
        value: MsgDeleteActionExecutor.encode(value).finish()
      };
    },
    updateSchemaAttribute(value: MsgUpdateSchemaAttribute) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttribute',
        value: MsgUpdateSchemaAttribute.encode(value).finish()
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateAction',
        value: MsgUpdateAction.encode(value).finish()
      };
    },
    createVirtualAction(value: MsgCreateVirtualAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualAction',
        value: MsgCreateVirtualAction.encode(value).finish()
      };
    },
    updateVirtualAction(value: MsgUpdateVirtualAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualAction',
        value: MsgUpdateVirtualAction.encode(value).finish()
      };
    },
    deleteVirtualAction(value: MsgDeleteVirtualAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualAction',
        value: MsgDeleteVirtualAction.encode(value).finish()
      };
    },
    createVirtualSchemaProposal(value: MsgCreateVirtualSchemaProposal) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaProposal',
        value: MsgCreateVirtualSchemaProposal.encode(value).finish()
      };
    },
    deleteVirtualSchema(value: MsgDeleteVirtualSchema) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchema',
        value: MsgDeleteVirtualSchema.encode(value).finish()
      };
    },
    voteCreateVirtualSchema(value: MsgVoteCreateVirtualSchema) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchema',
        value: MsgVoteCreateVirtualSchema.encode(value).finish()
      };
    },
    disableVirtualSchemaProposal(value: MsgDisableVirtualSchemaProposal) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposal',
        value: MsgDisableVirtualSchemaProposal.encode(value).finish()
      };
    },
    performVirtualAction(value: MsgPerformVirtualAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualAction',
        value: MsgPerformVirtualAction.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createNFTSchema(value: MsgCreateNFTSchema) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchema',
        value
      };
    },
    createMetadata(value: MsgCreateMetadata) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadata',
        value
      };
    },
    performActionByAdmin(value: MsgPerformActionByAdmin) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdmin',
        value
      };
    },
    addAttribute(value: MsgAddAttribute) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttribute',
        value
      };
    },
    addAction(value: MsgAddAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAction',
        value
      };
    },
    setBaseUri(value: MsgSetBaseUri) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUri',
        value
      };
    },
    toggleAction(value: MsgToggleAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleAction',
        value
      };
    },
    changeSchemaOwner(value: MsgChangeSchemaOwner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwner',
        value
      };
    },
    resyncAttributes(value: MsgResyncAttributes) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributes',
        value
      };
    },
    showAttributes(value: MsgShowAttributes) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributes',
        value
      };
    },
    setFeeConfig(value: MsgSetFeeConfig) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfig',
        value
      };
    },
    setMintauth(value: MsgSetMintauth) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauth',
        value
      };
    },
    changeOrgOwner(value: MsgChangeOrgOwner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwner',
        value
      };
    },
    createMultiMetadata(value: MsgCreateMultiMetadata) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadata',
        value
      };
    },
    setUriRetrievalMethod(value: MsgSetUriRetrievalMethod) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethod',
        value
      };
    },
    setOriginChain(value: MsgSetOriginChain) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChain',
        value
      };
    },
    setOriginContract(value: MsgSetOriginContract) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContract',
        value
      };
    },
    setAttributeOveriding(value: MsgSetAttributeOveriding) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveriding',
        value
      };
    },
    setMetadataFormat(value: MsgSetMetadataFormat) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormat',
        value
      };
    },
    createActionExecutor(value: MsgCreateActionExecutor) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutor',
        value
      };
    },
    deleteActionExecutor(value: MsgDeleteActionExecutor) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutor',
        value
      };
    },
    updateSchemaAttribute(value: MsgUpdateSchemaAttribute) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttribute',
        value
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateAction',
        value
      };
    },
    createVirtualAction(value: MsgCreateVirtualAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualAction',
        value
      };
    },
    updateVirtualAction(value: MsgUpdateVirtualAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualAction',
        value
      };
    },
    deleteVirtualAction(value: MsgDeleteVirtualAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualAction',
        value
      };
    },
    createVirtualSchemaProposal(value: MsgCreateVirtualSchemaProposal) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaProposal',
        value
      };
    },
    deleteVirtualSchema(value: MsgDeleteVirtualSchema) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchema',
        value
      };
    },
    voteCreateVirtualSchema(value: MsgVoteCreateVirtualSchema) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchema',
        value
      };
    },
    disableVirtualSchemaProposal(value: MsgDisableVirtualSchemaProposal) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposal',
        value
      };
    },
    performVirtualAction(value: MsgPerformVirtualAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualAction',
        value
      };
    }
  },
  fromPartial: {
    createNFTSchema(value: MsgCreateNFTSchema) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchema',
        value: MsgCreateNFTSchema.fromPartial(value)
      };
    },
    createMetadata(value: MsgCreateMetadata) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadata',
        value: MsgCreateMetadata.fromPartial(value)
      };
    },
    performActionByAdmin(value: MsgPerformActionByAdmin) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdmin',
        value: MsgPerformActionByAdmin.fromPartial(value)
      };
    },
    addAttribute(value: MsgAddAttribute) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttribute',
        value: MsgAddAttribute.fromPartial(value)
      };
    },
    addAction(value: MsgAddAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAction',
        value: MsgAddAction.fromPartial(value)
      };
    },
    setBaseUri(value: MsgSetBaseUri) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUri',
        value: MsgSetBaseUri.fromPartial(value)
      };
    },
    toggleAction(value: MsgToggleAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleAction',
        value: MsgToggleAction.fromPartial(value)
      };
    },
    changeSchemaOwner(value: MsgChangeSchemaOwner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwner',
        value: MsgChangeSchemaOwner.fromPartial(value)
      };
    },
    resyncAttributes(value: MsgResyncAttributes) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributes',
        value: MsgResyncAttributes.fromPartial(value)
      };
    },
    showAttributes(value: MsgShowAttributes) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributes',
        value: MsgShowAttributes.fromPartial(value)
      };
    },
    setFeeConfig(value: MsgSetFeeConfig) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfig',
        value: MsgSetFeeConfig.fromPartial(value)
      };
    },
    setMintauth(value: MsgSetMintauth) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauth',
        value: MsgSetMintauth.fromPartial(value)
      };
    },
    changeOrgOwner(value: MsgChangeOrgOwner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwner',
        value: MsgChangeOrgOwner.fromPartial(value)
      };
    },
    createMultiMetadata(value: MsgCreateMultiMetadata) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadata',
        value: MsgCreateMultiMetadata.fromPartial(value)
      };
    },
    setUriRetrievalMethod(value: MsgSetUriRetrievalMethod) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethod',
        value: MsgSetUriRetrievalMethod.fromPartial(value)
      };
    },
    setOriginChain(value: MsgSetOriginChain) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChain',
        value: MsgSetOriginChain.fromPartial(value)
      };
    },
    setOriginContract(value: MsgSetOriginContract) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContract',
        value: MsgSetOriginContract.fromPartial(value)
      };
    },
    setAttributeOveriding(value: MsgSetAttributeOveriding) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveriding',
        value: MsgSetAttributeOveriding.fromPartial(value)
      };
    },
    setMetadataFormat(value: MsgSetMetadataFormat) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormat',
        value: MsgSetMetadataFormat.fromPartial(value)
      };
    },
    createActionExecutor(value: MsgCreateActionExecutor) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutor',
        value: MsgCreateActionExecutor.fromPartial(value)
      };
    },
    deleteActionExecutor(value: MsgDeleteActionExecutor) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutor',
        value: MsgDeleteActionExecutor.fromPartial(value)
      };
    },
    updateSchemaAttribute(value: MsgUpdateSchemaAttribute) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttribute',
        value: MsgUpdateSchemaAttribute.fromPartial(value)
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateAction',
        value: MsgUpdateAction.fromPartial(value)
      };
    },
    createVirtualAction(value: MsgCreateVirtualAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualAction',
        value: MsgCreateVirtualAction.fromPartial(value)
      };
    },
    updateVirtualAction(value: MsgUpdateVirtualAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualAction',
        value: MsgUpdateVirtualAction.fromPartial(value)
      };
    },
    deleteVirtualAction(value: MsgDeleteVirtualAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualAction',
        value: MsgDeleteVirtualAction.fromPartial(value)
      };
    },
    createVirtualSchemaProposal(value: MsgCreateVirtualSchemaProposal) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaProposal',
        value: MsgCreateVirtualSchemaProposal.fromPartial(value)
      };
    },
    deleteVirtualSchema(value: MsgDeleteVirtualSchema) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchema',
        value: MsgDeleteVirtualSchema.fromPartial(value)
      };
    },
    voteCreateVirtualSchema(value: MsgVoteCreateVirtualSchema) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchema',
        value: MsgVoteCreateVirtualSchema.fromPartial(value)
      };
    },
    disableVirtualSchemaProposal(value: MsgDisableVirtualSchemaProposal) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposal',
        value: MsgDisableVirtualSchemaProposal.fromPartial(value)
      };
    },
    performVirtualAction(value: MsgPerformVirtualAction) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualAction',
        value: MsgPerformVirtualAction.fromPartial(value)
      };
    }
  }
};