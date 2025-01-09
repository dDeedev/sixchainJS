//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';

import { MsgCreateActionRequest, MsgCreateActionSigner, MsgCreateActionSignerConfig, MsgCreateMintRequest, MsgCreateSyncActionSigner, MsgCreateVerifyCollectionOwnerRequest, MsgDeleteActionSigner, MsgDeleteActionSignerConfig, MsgSetMinimumConfirmation, MsgSubmitActionResponse, MsgSubmitMintResponse, MsgSubmitSyncActionSigner,MsgSubmitVerifyCollectionOwner, MsgUpdateActionSigner, MsgUpdateActionSignerConfig } from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [['/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequest', MsgCreateMintRequest], ['/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponse', MsgSubmitMintResponse], ['/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequest', MsgCreateActionRequest], ['/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponse', MsgSubmitActionResponse], ['/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest', MsgCreateVerifyCollectionOwnerRequest], ['/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner', MsgSubmitVerifyCollectionOwner], ['/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmation', MsgSetMinimumConfirmation], ['/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSigner', MsgCreateActionSigner], ['/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSigner', MsgUpdateActionSigner], ['/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSigner', MsgDeleteActionSigner], ['/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfig', MsgCreateActionSignerConfig], ['/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfig', MsgUpdateActionSignerConfig], ['/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfig', MsgDeleteActionSignerConfig], ['/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSigner', MsgCreateSyncActionSigner], ['/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSigner', MsgSubmitSyncActionSigner]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createMintRequest(value: MsgCreateMintRequest) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequest',
        value: MsgCreateMintRequest.encode(value).finish()
      };
    },
    submitMintResponse(value: MsgSubmitMintResponse) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponse',
        value: MsgSubmitMintResponse.encode(value).finish()
      };
    },
    createActionRequest(value: MsgCreateActionRequest) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequest',
        value: MsgCreateActionRequest.encode(value).finish()
      };
    },
    submitActionResponse(value: MsgSubmitActionResponse) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponse',
        value: MsgSubmitActionResponse.encode(value).finish()
      };
    },
    createVerifyCollectionOwnerRequest(value: MsgCreateVerifyCollectionOwnerRequest) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest',
        value: MsgCreateVerifyCollectionOwnerRequest.encode(value).finish()
      };
    },
    submitVerifyCollectionOwner(value: MsgSubmitVerifyCollectionOwner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner',
        value: MsgSubmitVerifyCollectionOwner.encode(value).finish()
      };
    },
    setMinimumConfirmation(value: MsgSetMinimumConfirmation) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmation',
        value: MsgSetMinimumConfirmation.encode(value).finish()
      };
    },
    createActionSigner(value: MsgCreateActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSigner',
        value: MsgCreateActionSigner.encode(value).finish()
      };
    },
    updateActionSigner(value: MsgUpdateActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSigner',
        value: MsgUpdateActionSigner.encode(value).finish()
      };
    },
    deleteActionSigner(value: MsgDeleteActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSigner',
        value: MsgDeleteActionSigner.encode(value).finish()
      };
    },
    createActionSignerConfig(value: MsgCreateActionSignerConfig) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfig',
        value: MsgCreateActionSignerConfig.encode(value).finish()
      };
    },
    updateActionSignerConfig(value: MsgUpdateActionSignerConfig) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfig',
        value: MsgUpdateActionSignerConfig.encode(value).finish()
      };
    },
    deleteActionSignerConfig(value: MsgDeleteActionSignerConfig) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfig',
        value: MsgDeleteActionSignerConfig.encode(value).finish()
      };
    },
    createSyncActionSigner(value: MsgCreateSyncActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSigner',
        value: MsgCreateSyncActionSigner.encode(value).finish()
      };
    },
    submitSyncActionSigner(value: MsgSubmitSyncActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSigner',
        value: MsgSubmitSyncActionSigner.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createMintRequest(value: MsgCreateMintRequest) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequest',
        value
      };
    },
    submitMintResponse(value: MsgSubmitMintResponse) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponse',
        value
      };
    },
    createActionRequest(value: MsgCreateActionRequest) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequest',
        value
      };
    },
    submitActionResponse(value: MsgSubmitActionResponse) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponse',
        value
      };
    },
    createVerifyCollectionOwnerRequest(value: MsgCreateVerifyCollectionOwnerRequest) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest',
        value
      };
    },
    submitVerifyCollectionOwner(value: MsgSubmitVerifyCollectionOwner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner',
        value
      };
    },
    setMinimumConfirmation(value: MsgSetMinimumConfirmation) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmation',
        value
      };
    },
    createActionSigner(value: MsgCreateActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSigner',
        value
      };
    },
    updateActionSigner(value: MsgUpdateActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSigner',
        value
      };
    },
    deleteActionSigner(value: MsgDeleteActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSigner',
        value
      };
    },
    createActionSignerConfig(value: MsgCreateActionSignerConfig) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfig',
        value
      };
    },
    updateActionSignerConfig(value: MsgUpdateActionSignerConfig) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfig',
        value
      };
    },
    deleteActionSignerConfig(value: MsgDeleteActionSignerConfig) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfig',
        value
      };
    },
    createSyncActionSigner(value: MsgCreateSyncActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSigner',
        value
      };
    },
    submitSyncActionSigner(value: MsgSubmitSyncActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSigner',
        value
      };
    }
  },
  fromPartial: {
    createMintRequest(value: MsgCreateMintRequest) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequest',
        value: MsgCreateMintRequest.fromPartial(value)
      };
    },
    submitMintResponse(value: MsgSubmitMintResponse) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponse',
        value: MsgSubmitMintResponse.fromPartial(value)
      };
    },
    createActionRequest(value: MsgCreateActionRequest) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequest',
        value: MsgCreateActionRequest.fromPartial(value)
      };
    },
    submitActionResponse(value: MsgSubmitActionResponse) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponse',
        value: MsgSubmitActionResponse.fromPartial(value)
      };
    },
    createVerifyCollectionOwnerRequest(value: MsgCreateVerifyCollectionOwnerRequest) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest',
        value: MsgCreateVerifyCollectionOwnerRequest.fromPartial(value)
      };
    },
    submitVerifyCollectionOwner(value: MsgSubmitVerifyCollectionOwner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner',
        value: MsgSubmitVerifyCollectionOwner.fromPartial(value)
      };
    },
    setMinimumConfirmation(value: MsgSetMinimumConfirmation) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmation',
        value: MsgSetMinimumConfirmation.fromPartial(value)
      };
    },
    createActionSigner(value: MsgCreateActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSigner',
        value: MsgCreateActionSigner.fromPartial(value)
      };
    },
    updateActionSigner(value: MsgUpdateActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSigner',
        value: MsgUpdateActionSigner.fromPartial(value)
      };
    },
    deleteActionSigner(value: MsgDeleteActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSigner',
        value: MsgDeleteActionSigner.fromPartial(value)
      };
    },
    createActionSignerConfig(value: MsgCreateActionSignerConfig) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfig',
        value: MsgCreateActionSignerConfig.fromPartial(value)
      };
    },
    updateActionSignerConfig(value: MsgUpdateActionSignerConfig) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfig',
        value: MsgUpdateActionSignerConfig.fromPartial(value)
      };
    },
    deleteActionSignerConfig(value: MsgDeleteActionSignerConfig) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfig',
        value: MsgDeleteActionSignerConfig.fromPartial(value)
      };
    },
    createSyncActionSigner(value: MsgCreateSyncActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSigner',
        value: MsgCreateSyncActionSigner.fromPartial(value)
      };
    },
    submitSyncActionSigner(value: MsgSubmitSyncActionSigner) {
      return {
        typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSigner',
        value: MsgSubmitSyncActionSigner.fromPartial(value)
      };
    }
  }
};