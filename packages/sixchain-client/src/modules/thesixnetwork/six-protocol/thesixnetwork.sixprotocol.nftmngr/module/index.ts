// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad';
import {EncodeObject, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { SigningStargateClient, SigningStargateClientOptions} from '@cosmjs/stargate';

import { Api } from './rest';
import { MsgSetMintauth } from './types/nftmngr/tx';
import { MsgSetAttributeOveriding } from './types/nftmngr/tx';
import { MsgUpdateActionExecutor } from './types/nftmngr/tx';
import { MsgDisableVirtualSchemaProposal } from './types/nftmngr/tx';
import { MsgChangeSchemaOwner } from './types/nftmngr/tx';
import { MsgSetOriginContract } from './types/nftmngr/tx';
import { MsgPerformActionByAdmin } from './types/nftmngr/tx';
import { MsgCreateMultiMetadata } from './types/nftmngr/tx';
import { MsgDeleteVirtualSchema } from './types/nftmngr/tx';
import { MsgUpdateAction } from './types/nftmngr/tx';
import { MsgDeleteVirtualAction } from './types/nftmngr/tx';
import { MsgShowAttributes } from './types/nftmngr/tx';
import { MsgPerformVirtualAction } from './types/nftmngr/tx';
import { MsgSetFeeConfig } from './types/nftmngr/tx';
import { MsgSetOriginChain } from './types/nftmngr/tx';
import { MsgCreateNFTSchema } from './types/nftmngr/tx';
import { MsgUpdateSchemaAttribute } from './types/nftmngr/tx';
import { MsgCreateActionExecutor } from './types/nftmngr/tx';
import { MsgSetUriRetrievalMethod } from './types/nftmngr/tx';
import { MsgCreateMetadata } from './types/nftmngr/tx';
import { MsgUpdateVirtualAction } from './types/nftmngr/tx';
import { MsgToggleAction } from './types/nftmngr/tx';
import { MsgChangeOrgOwner } from './types/nftmngr/tx';
import { MsgAddAttribute } from './types/nftmngr/tx';
import { MsgCreateVirtualSchemaProposal } from './types/nftmngr/tx';
import { MsgVoteCreateVirtualSchema } from './types/nftmngr/tx';
import { MsgSetBaseUri } from './types/nftmngr/tx';
import { MsgCreateVirtualAction } from './types/nftmngr/tx';
import { MsgSetMetadataFormat } from './types/nftmngr/tx';
import { MsgDeleteActionExecutor } from './types/nftmngr/tx';
import { MsgAddAction } from './types/nftmngr/tx';
import { MsgResyncAttributes } from './types/nftmngr/tx';


const types = [
  ['/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauth', MsgSetMintauth],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveriding', MsgSetAttributeOveriding],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionExecutor', MsgUpdateActionExecutor],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposal', MsgDisableVirtualSchemaProposal],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwner', MsgChangeSchemaOwner],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContract', MsgSetOriginContract],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdmin', MsgPerformActionByAdmin],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadata', MsgCreateMultiMetadata],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchema', MsgDeleteVirtualSchema],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgUpdateAction', MsgUpdateAction],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualAction', MsgDeleteVirtualAction],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributes', MsgShowAttributes],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualAction', MsgPerformVirtualAction],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfig', MsgSetFeeConfig],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChain', MsgSetOriginChain],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchema', MsgCreateNFTSchema],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttribute', MsgUpdateSchemaAttribute],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutor', MsgCreateActionExecutor],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethod', MsgSetUriRetrievalMethod],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadata', MsgCreateMetadata],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualAction', MsgUpdateVirtualAction],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgToggleAction', MsgToggleAction],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwner', MsgChangeOrgOwner],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgAddAttribute', MsgAddAttribute],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaProposal', MsgCreateVirtualSchemaProposal],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchema', MsgVoteCreateVirtualSchema],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUri', MsgSetBaseUri],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualAction', MsgCreateVirtualAction],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormat', MsgSetMetadataFormat],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutor', MsgDeleteActionExecutor],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgAddAction', MsgAddAction],
  ['/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributes', MsgResyncAttributes],
  
];
export const MissingWalletError = new Error('wallet is required');

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: '200000',
};

interface TxClientOptions {
  addr: string
}

export interface SignAndBroadcastOptions {
  fee: StdFee | 'auto',
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: 'http://localhost:26657' }, options?: SigningStargateClientOptions) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry, ...options});
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ''}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgSetMintauth: (data: MsgSetMintauth): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauth', value: MsgSetMintauth.fromPartial( data ) }),
    msgSetAttributeOveriding: (data: MsgSetAttributeOveriding): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveriding', value: MsgSetAttributeOveriding.fromPartial( data ) }),
    msgUpdateActionExecutor: (data: MsgUpdateActionExecutor): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionExecutor', value: MsgUpdateActionExecutor.fromPartial( data ) }),
    msgDisableVirtualSchemaProposal: (data: MsgDisableVirtualSchemaProposal): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposal', value: MsgDisableVirtualSchemaProposal.fromPartial( data ) }),
    msgChangeSchemaOwner: (data: MsgChangeSchemaOwner): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwner', value: MsgChangeSchemaOwner.fromPartial( data ) }),
    msgSetOriginContract: (data: MsgSetOriginContract): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContract', value: MsgSetOriginContract.fromPartial( data ) }),
    msgPerformActionByAdmin: (data: MsgPerformActionByAdmin): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdmin', value: MsgPerformActionByAdmin.fromPartial( data ) }),
    msgCreateMultiMetadata: (data: MsgCreateMultiMetadata): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadata', value: MsgCreateMultiMetadata.fromPartial( data ) }),
    msgDeleteVirtualSchema: (data: MsgDeleteVirtualSchema): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchema', value: MsgDeleteVirtualSchema.fromPartial( data ) }),
    msgUpdateAction: (data: MsgUpdateAction): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateAction', value: MsgUpdateAction.fromPartial( data ) }),
    msgDeleteVirtualAction: (data: MsgDeleteVirtualAction): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualAction', value: MsgDeleteVirtualAction.fromPartial( data ) }),
    msgShowAttributes: (data: MsgShowAttributes): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributes', value: MsgShowAttributes.fromPartial( data ) }),
    msgPerformVirtualAction: (data: MsgPerformVirtualAction): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualAction', value: MsgPerformVirtualAction.fromPartial( data ) }),
    msgSetFeeConfig: (data: MsgSetFeeConfig): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfig', value: MsgSetFeeConfig.fromPartial( data ) }),
    msgSetOriginChain: (data: MsgSetOriginChain): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChain', value: MsgSetOriginChain.fromPartial( data ) }),
    msgCreateNFTSchema: (data: MsgCreateNFTSchema): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchema', value: MsgCreateNFTSchema.fromPartial( data ) }),
    msgUpdateSchemaAttribute: (data: MsgUpdateSchemaAttribute): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttribute', value: MsgUpdateSchemaAttribute.fromPartial( data ) }),
    msgCreateActionExecutor: (data: MsgCreateActionExecutor): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutor', value: MsgCreateActionExecutor.fromPartial( data ) }),
    msgSetUriRetrievalMethod: (data: MsgSetUriRetrievalMethod): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethod', value: MsgSetUriRetrievalMethod.fromPartial( data ) }),
    msgCreateMetadata: (data: MsgCreateMetadata): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadata', value: MsgCreateMetadata.fromPartial( data ) }),
    msgUpdateVirtualAction: (data: MsgUpdateVirtualAction): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualAction', value: MsgUpdateVirtualAction.fromPartial( data ) }),
    msgToggleAction: (data: MsgToggleAction): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleAction', value: MsgToggleAction.fromPartial( data ) }),
    msgChangeOrgOwner: (data: MsgChangeOrgOwner): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwner', value: MsgChangeOrgOwner.fromPartial( data ) }),
    msgAddAttribute: (data: MsgAddAttribute): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttribute', value: MsgAddAttribute.fromPartial( data ) }),
    msgCreateVirtualSchemaProposal: (data: MsgCreateVirtualSchemaProposal): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaProposal', value: MsgCreateVirtualSchemaProposal.fromPartial( data ) }),
    msgVoteCreateVirtualSchema: (data: MsgVoteCreateVirtualSchema): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchema', value: MsgVoteCreateVirtualSchema.fromPartial( data ) }),
    msgSetBaseUri: (data: MsgSetBaseUri): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUri', value: MsgSetBaseUri.fromPartial( data ) }),
    msgCreateVirtualAction: (data: MsgCreateVirtualAction): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualAction', value: MsgCreateVirtualAction.fromPartial( data ) }),
    msgSetMetadataFormat: (data: MsgSetMetadataFormat): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormat', value: MsgSetMetadataFormat.fromPartial( data ) }),
    msgDeleteActionExecutor: (data: MsgDeleteActionExecutor): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutor', value: MsgDeleteActionExecutor.fromPartial( data ) }),
    msgAddAction: (data: MsgAddAction): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAction', value: MsgAddAction.fromPartial( data ) }),
    msgResyncAttributes: (data: MsgResyncAttributes): EncodeObject => ({ typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributes', value: MsgResyncAttributes.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: 'http://localhost:1317' }) => {
  return new Api({ baseUrl: addr });
};

export {
  queryClient,
  txClient,
};
