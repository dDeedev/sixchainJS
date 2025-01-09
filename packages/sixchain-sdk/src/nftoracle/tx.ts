//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Long } from '../helpers';
export interface MsgCreateMintRequest {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  requiredConfirm: Long;
}
export interface MsgCreateMintRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequest';
  value: Uint8Array;
}
export interface MsgCreateMintRequestAmino {
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string;
  requiredConfirm?: string;
}
export interface MsgCreateMintRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequest';
  value: MsgCreateMintRequestAmino;
}
export interface MsgCreateMintRequestSDKType {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  requiredConfirm: Long;
}
export interface MsgCreateMintRequestResponse {
  id: Long;
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgCreateMintRequestResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequestResponse';
  value: Uint8Array;
}
export interface MsgCreateMintRequestResponseAmino {
  id?: string;
  nftSchemaCode?: string;
  tokenId?: string;
}
export interface MsgCreateMintRequestResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequestResponse';
  value: MsgCreateMintRequestResponseAmino;
}
export interface MsgCreateMintRequestResponseSDKType {
  id: Long;
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgSubmitMintResponse {
  creator: string;
  mintRequestID: Long;
  base64NftData: string;
}
export interface MsgSubmitMintResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponse';
  value: Uint8Array;
}
export interface MsgSubmitMintResponseAmino {
  creator?: string;
  mintRequestID?: string;
  base64NftData?: string;
}
export interface MsgSubmitMintResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponse';
  value: MsgSubmitMintResponseAmino;
}
export interface MsgSubmitMintResponseSDKType {
  creator: string;
  mintRequestID: Long;
  base64NftData: string;
}
export interface MsgSubmitMintResponseResponse {
  mintRequestID: string;
}
export interface MsgSubmitMintResponseResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponseResponse';
  value: Uint8Array;
}
export interface MsgSubmitMintResponseResponseAmino {
  mintRequestID?: string;
}
export interface MsgSubmitMintResponseResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponseResponse';
  value: MsgSubmitMintResponseResponseAmino;
}
export interface MsgSubmitMintResponseResponseSDKType {
  mintRequestID: string;
}
export interface MsgCreateActionRequest {
  creator: string;
  vm: string;
  base64ActionSignature: string;
  requiredConfirm: Long;
}
export interface MsgCreateActionRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequest';
  value: Uint8Array;
}
export interface MsgCreateActionRequestAmino {
  creator?: string;
  vm?: string;
  base64ActionSignature?: string;
  requiredConfirm?: string;
}
export interface MsgCreateActionRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequest';
  value: MsgCreateActionRequestAmino;
}
export interface MsgCreateActionRequestSDKType {
  creator: string;
  vm: string;
  base64ActionSignature: string;
  requiredConfirm: Long;
}
export interface MsgCreateActionRequestResponse {
  id: Long;
}
export interface MsgCreateActionRequestResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequestResponse';
  value: Uint8Array;
}
export interface MsgCreateActionRequestResponseAmino {
  id?: string;
}
export interface MsgCreateActionRequestResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequestResponse';
  value: MsgCreateActionRequestResponseAmino;
}
export interface MsgCreateActionRequestResponseSDKType {
  id: Long;
}
export interface MsgSubmitActionResponse {
  creator: string;
  actionRequestID: Long;
  base64NftData: string;
}
export interface MsgSubmitActionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponse';
  value: Uint8Array;
}
export interface MsgSubmitActionResponseAmino {
  creator?: string;
  actionRequestID?: string;
  base64NftData?: string;
}
export interface MsgSubmitActionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponse';
  value: MsgSubmitActionResponseAmino;
}
export interface MsgSubmitActionResponseSDKType {
  creator: string;
  actionRequestID: Long;
  base64NftData: string;
}
export interface MsgSubmitActionResponseResponse {
  actionRequestID: string;
}
export interface MsgSubmitActionResponseResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponseResponse';
  value: Uint8Array;
}
export interface MsgSubmitActionResponseResponseAmino {
  actionRequestID?: string;
}
export interface MsgSubmitActionResponseResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponseResponse';
  value: MsgSubmitActionResponseResponseAmino;
}
export interface MsgSubmitActionResponseResponseSDKType {
  actionRequestID: string;
}
export interface MsgCreateVerifyCollectionOwnerRequest {
  creator: string;
  nftSchemaCode: string;
  base64VerifyRequestorSignature: string;
  requiredConfirm: Long;
}
export interface MsgCreateVerifyCollectionOwnerRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest';
  value: Uint8Array;
}
export interface MsgCreateVerifyCollectionOwnerRequestAmino {
  creator?: string;
  nftSchemaCode?: string;
  base64VerifyRequestorSignature?: string;
  requiredConfirm?: string;
}
export interface MsgCreateVerifyCollectionOwnerRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest';
  value: MsgCreateVerifyCollectionOwnerRequestAmino;
}
export interface MsgCreateVerifyCollectionOwnerRequestSDKType {
  creator: string;
  nftSchemaCode: string;
  base64VerifyRequestorSignature: string;
  requiredConfirm: Long;
}
export interface MsgCreateVerifyCollectionOwnerRequestResponse {
  id: Long;
  nftSchemaCode: string;
  ownerAddress: string;
}
export interface MsgCreateVerifyCollectionOwnerRequestResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequestResponse';
  value: Uint8Array;
}
export interface MsgCreateVerifyCollectionOwnerRequestResponseAmino {
  id?: string;
  nftSchemaCode?: string;
  ownerAddress?: string;
}
export interface MsgCreateVerifyCollectionOwnerRequestResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequestResponse';
  value: MsgCreateVerifyCollectionOwnerRequestResponseAmino;
}
export interface MsgCreateVerifyCollectionOwnerRequestResponseSDKType {
  id: Long;
  nftSchemaCode: string;
  ownerAddress: string;
}
export interface MsgSubmitVerifyCollectionOwner {
  creator: string;
  verifyRequestID: Long;
  nftSchemaCode: string;
  base64OriginContractInfo: string;
}
export interface MsgSubmitVerifyCollectionOwnerProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner';
  value: Uint8Array;
}
export interface MsgSubmitVerifyCollectionOwnerAmino {
  creator?: string;
  verifyRequestID?: string;
  nftSchemaCode?: string;
  base64OriginContractInfo?: string;
}
export interface MsgSubmitVerifyCollectionOwnerAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner';
  value: MsgSubmitVerifyCollectionOwnerAmino;
}
export interface MsgSubmitVerifyCollectionOwnerSDKType {
  creator: string;
  verifyRequestID: Long;
  nftSchemaCode: string;
  base64OriginContractInfo: string;
}
export interface MsgSubmitVerifyCollectionOwnerResponse {
  verifyRequestID: Long;
}
export interface MsgSubmitVerifyCollectionOwnerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwnerResponse';
  value: Uint8Array;
}
export interface MsgSubmitVerifyCollectionOwnerResponseAmino {
  verifyRequestID?: string;
}
export interface MsgSubmitVerifyCollectionOwnerResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwnerResponse';
  value: MsgSubmitVerifyCollectionOwnerResponseAmino;
}
export interface MsgSubmitVerifyCollectionOwnerResponseSDKType {
  verifyRequestID: Long;
}
export interface MsgSetMinimumConfirmation {
  creator: string;
  newConfirmation: string;
}
export interface MsgSetMinimumConfirmationProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmation';
  value: Uint8Array;
}
export interface MsgSetMinimumConfirmationAmino {
  creator?: string;
  newConfirmation?: string;
}
export interface MsgSetMinimumConfirmationAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmation';
  value: MsgSetMinimumConfirmationAmino;
}
export interface MsgSetMinimumConfirmationSDKType {
  creator: string;
  newConfirmation: string;
}
export interface MsgSetMinimumConfirmationResponse {
  newConfirmation: string;
}
export interface MsgSetMinimumConfirmationResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmationResponse';
  value: Uint8Array;
}
export interface MsgSetMinimumConfirmationResponseAmino {
  newConfirmation?: string;
}
export interface MsgSetMinimumConfirmationResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmationResponse';
  value: MsgSetMinimumConfirmationResponseAmino;
}
export interface MsgSetMinimumConfirmationResponseSDKType {
  newConfirmation: string;
}
export interface MsgCreateActionSigner {
  creator: string;
  base64EncodedSetSignerAction: string;
}
export interface MsgCreateActionSignerProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSigner';
  value: Uint8Array;
}
export interface MsgCreateActionSignerAmino {
  creator?: string;
  base64EncodedSetSignerAction?: string;
}
export interface MsgCreateActionSignerAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSigner';
  value: MsgCreateActionSignerAmino;
}
export interface MsgCreateActionSignerSDKType {
  creator: string;
  base64EncodedSetSignerAction: string;
}
export interface MsgCreateActionSignerResponse {
  ownerAddress: string;
  signerAddress: string;
  expireAt: string;
}
export interface MsgCreateActionSignerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerResponse';
  value: Uint8Array;
}
export interface MsgCreateActionSignerResponseAmino {
  ownerAddress?: string;
  signerAddress?: string;
  expireAt?: string;
}
export interface MsgCreateActionSignerResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerResponse';
  value: MsgCreateActionSignerResponseAmino;
}
export interface MsgCreateActionSignerResponseSDKType {
  ownerAddress: string;
  signerAddress: string;
  expireAt: string;
}
export interface MsgUpdateActionSigner {
  creator: string;
  base64EncodedSetSignerAction: string;
}
export interface MsgUpdateActionSignerProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSigner';
  value: Uint8Array;
}
export interface MsgUpdateActionSignerAmino {
  creator?: string;
  base64EncodedSetSignerAction?: string;
}
export interface MsgUpdateActionSignerAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSigner';
  value: MsgUpdateActionSignerAmino;
}
export interface MsgUpdateActionSignerSDKType {
  creator: string;
  base64EncodedSetSignerAction: string;
}
export interface MsgUpdateActionSignerResponse {
  ownerAddress: string;
  signerAddress: string;
  expireAt: string;
}
export interface MsgUpdateActionSignerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerResponse';
  value: Uint8Array;
}
export interface MsgUpdateActionSignerResponseAmino {
  ownerAddress?: string;
  signerAddress?: string;
  expireAt?: string;
}
export interface MsgUpdateActionSignerResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerResponse';
  value: MsgUpdateActionSignerResponseAmino;
}
export interface MsgUpdateActionSignerResponseSDKType {
  ownerAddress: string;
  signerAddress: string;
  expireAt: string;
}
export interface MsgDeleteActionSigner {
  creator: string;
  base64EncodedSetSignerAction: string;
}
export interface MsgDeleteActionSignerProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSigner';
  value: Uint8Array;
}
export interface MsgDeleteActionSignerAmino {
  creator?: string;
  base64EncodedSetSignerAction?: string;
}
export interface MsgDeleteActionSignerAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSigner';
  value: MsgDeleteActionSignerAmino;
}
export interface MsgDeleteActionSignerSDKType {
  creator: string;
  base64EncodedSetSignerAction: string;
}
export interface MsgDeleteActionSignerResponse {
  ownerAddress: string;
  signerAddress: string;
}
export interface MsgDeleteActionSignerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerResponse';
  value: Uint8Array;
}
export interface MsgDeleteActionSignerResponseAmino {
  ownerAddress?: string;
  signerAddress?: string;
}
export interface MsgDeleteActionSignerResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerResponse';
  value: MsgDeleteActionSignerResponseAmino;
}
export interface MsgDeleteActionSignerResponseSDKType {
  ownerAddress: string;
  signerAddress: string;
}
export interface MsgCreateActionSignerConfig {
  creator: string;
  chain: string;
  rpcEndpoint: string;
  contractAddress: string;
  contractName: string;
  contractOwner: string;
}
export interface MsgCreateActionSignerConfigProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfig';
  value: Uint8Array;
}
export interface MsgCreateActionSignerConfigAmino {
  creator?: string;
  chain?: string;
  rpc_endpoint?: string;
  contractAddress?: string;
  contractName?: string;
  contractOwner?: string;
}
export interface MsgCreateActionSignerConfigAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfig';
  value: MsgCreateActionSignerConfigAmino;
}
export interface MsgCreateActionSignerConfigSDKType {
  creator: string;
  chain: string;
  rpc_endpoint: string;
  contractAddress: string;
  contractName: string;
  contractOwner: string;
}
export interface MsgCreateActionSignerConfigResponse {
  chain: string;
  rpcEndpoint: string;
  contractAddress: string;
  contractName: string;
  contractOwner: string;
}
export interface MsgCreateActionSignerConfigResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfigResponse';
  value: Uint8Array;
}
export interface MsgCreateActionSignerConfigResponseAmino {
  chain?: string;
  rpc_endpoint?: string;
  contractAddress?: string;
  contractName?: string;
  contractOwner?: string;
}
export interface MsgCreateActionSignerConfigResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfigResponse';
  value: MsgCreateActionSignerConfigResponseAmino;
}
export interface MsgCreateActionSignerConfigResponseSDKType {
  chain: string;
  rpc_endpoint: string;
  contractAddress: string;
  contractName: string;
  contractOwner: string;
}
export interface MsgUpdateActionSignerConfig {
  creator: string;
  chain: string;
  rpcEndpoint: string;
  contractAddress: string;
  contractName: string;
  contractOwner: string;
}
export interface MsgUpdateActionSignerConfigProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfig';
  value: Uint8Array;
}
export interface MsgUpdateActionSignerConfigAmino {
  creator?: string;
  chain?: string;
  rpc_endpoint?: string;
  contractAddress?: string;
  contractName?: string;
  contractOwner?: string;
}
export interface MsgUpdateActionSignerConfigAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfig';
  value: MsgUpdateActionSignerConfigAmino;
}
export interface MsgUpdateActionSignerConfigSDKType {
  creator: string;
  chain: string;
  rpc_endpoint: string;
  contractAddress: string;
  contractName: string;
  contractOwner: string;
}
export interface MsgUpdateActionSignerConfigResponse {
  chain: string;
  rpcEndpoint: string;
  newRpcEndpoint: string;
  contractAddress: string;
  newContractAddress: string;
  contractName: string;
  newContractName: string;
  contractOwner: string;
  newContractOwner: string;
}
export interface MsgUpdateActionSignerConfigResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfigResponse';
  value: Uint8Array;
}
export interface MsgUpdateActionSignerConfigResponseAmino {
  chain?: string;
  rpc_endpoint?: string;
  new_rpc_endpoint?: string;
  contractAddress?: string;
  new_contractAddress?: string;
  contractName?: string;
  new_contractName?: string;
  contractOwner?: string;
  new_contractOwner?: string;
}
export interface MsgUpdateActionSignerConfigResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfigResponse';
  value: MsgUpdateActionSignerConfigResponseAmino;
}
export interface MsgUpdateActionSignerConfigResponseSDKType {
  chain: string;
  rpc_endpoint: string;
  new_rpc_endpoint: string;
  contractAddress: string;
  new_contractAddress: string;
  contractName: string;
  new_contractName: string;
  contractOwner: string;
  new_contractOwner: string;
}
export interface MsgDeleteActionSignerConfig {
  creator: string;
  chain: string;
}
export interface MsgDeleteActionSignerConfigProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfig';
  value: Uint8Array;
}
export interface MsgDeleteActionSignerConfigAmino {
  creator?: string;
  chain?: string;
}
export interface MsgDeleteActionSignerConfigAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfig';
  value: MsgDeleteActionSignerConfigAmino;
}
export interface MsgDeleteActionSignerConfigSDKType {
  creator: string;
  chain: string;
}
export interface MsgDeleteActionSignerConfigResponse {
  chain: string;
}
export interface MsgDeleteActionSignerConfigResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfigResponse';
  value: Uint8Array;
}
export interface MsgDeleteActionSignerConfigResponseAmino {
  chain?: string;
}
export interface MsgDeleteActionSignerConfigResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfigResponse';
  value: MsgDeleteActionSignerConfigResponseAmino;
}
export interface MsgDeleteActionSignerConfigResponseSDKType {
  chain: string;
}
export interface MsgCreateSyncActionSigner {
  creator: string;
  chain: string;
  actorAddress: string;
  ownerAddress: string;
  requiredConfirm: Long;
}
export interface MsgCreateSyncActionSignerProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSigner';
  value: Uint8Array;
}
export interface MsgCreateSyncActionSignerAmino {
  creator?: string;
  chain?: string;
  actorAddress?: string;
  ownerAddress?: string;
  requiredConfirm?: string;
}
export interface MsgCreateSyncActionSignerAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSigner';
  value: MsgCreateSyncActionSignerAmino;
}
export interface MsgCreateSyncActionSignerSDKType {
  creator: string;
  chain: string;
  actorAddress: string;
  ownerAddress: string;
  requiredConfirm: Long;
}
export interface MsgCreateSyncActionSignerResponse {
  id: Long;
  chain: string;
  ownerAddress: string;
  actorAddress: string;
}
export interface MsgCreateSyncActionSignerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSignerResponse';
  value: Uint8Array;
}
export interface MsgCreateSyncActionSignerResponseAmino {
  id?: string;
  chain?: string;
  ownerAddress?: string;
  actorAddress?: string;
}
export interface MsgCreateSyncActionSignerResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSignerResponse';
  value: MsgCreateSyncActionSignerResponseAmino;
}
export interface MsgCreateSyncActionSignerResponseSDKType {
  id: Long;
  chain: string;
  ownerAddress: string;
  actorAddress: string;
}
export interface MsgSubmitSyncActionSigner {
  creator: string;
  syncId: Long;
  chain: string;
  actorAddress: string;
  ownerAddress: string;
  expireEpoch: string;
}
export interface MsgSubmitSyncActionSignerProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSigner';
  value: Uint8Array;
}
export interface MsgSubmitSyncActionSignerAmino {
  creator?: string;
  syncId?: string;
  chain?: string;
  actorAddress?: string;
  ownerAddress?: string;
  expire_epoch?: string;
}
export interface MsgSubmitSyncActionSignerAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSigner';
  value: MsgSubmitSyncActionSignerAmino;
}
export interface MsgSubmitSyncActionSignerSDKType {
  creator: string;
  syncId: Long;
  chain: string;
  actorAddress: string;
  ownerAddress: string;
  expire_epoch: string;
}
export interface MsgSubmitSyncActionSignerResponse {
  verifyRequestID: Long;
  expireAt: string;
}
export interface MsgSubmitSyncActionSignerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSignerResponse';
  value: Uint8Array;
}
export interface MsgSubmitSyncActionSignerResponseAmino {
  verifyRequestID?: string;
  expireAt?: string;
}
export interface MsgSubmitSyncActionSignerResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSignerResponse';
  value: MsgSubmitSyncActionSignerResponseAmino;
}
export interface MsgSubmitSyncActionSignerResponseSDKType {
  verifyRequestID: Long;
  expireAt: string;
}
function createBaseMsgCreateMintRequest(): MsgCreateMintRequest {
  return {
    creator: '',
    nftSchemaCode: '',
    tokenId: '',
    requiredConfirm: Long.UZERO
  };
}
export const MsgCreateMintRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequest',
  encode(message: MsgCreateMintRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(26).string(message.tokenId);
    }
    if (!message.requiredConfirm.isZero()) {
      writer.uint32(32).uint64(message.requiredConfirm);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMintRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMintRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.tokenId = reader.string();
        break;
      case 4:
        message.requiredConfirm = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateMintRequest>): MsgCreateMintRequest {
    const message = createBaseMsgCreateMintRequest();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? Long.fromValue(object.requiredConfirm) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgCreateMintRequestAmino): MsgCreateMintRequest {
    const message = createBaseMsgCreateMintRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    if (object.requiredConfirm !== undefined && object.requiredConfirm !== null) {
      message.requiredConfirm = Long.fromString(object.requiredConfirm);
    }
    return message;
  },
  toAmino(message: MsgCreateMintRequest): MsgCreateMintRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === '' ? undefined : message.tokenId;
    obj.requiredConfirm = !message.requiredConfirm.isZero() ? message.requiredConfirm?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMintRequestAminoMsg): MsgCreateMintRequest {
    return MsgCreateMintRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMintRequestProtoMsg): MsgCreateMintRequest {
    return MsgCreateMintRequest.decode(message.value);
  },
  toProto(message: MsgCreateMintRequest): Uint8Array {
    return MsgCreateMintRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMintRequest): MsgCreateMintRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequest',
      value: MsgCreateMintRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMintRequestResponse(): MsgCreateMintRequestResponse {
  return {
    id: Long.UZERO,
    nftSchemaCode: '',
    tokenId: ''
  };
}
export const MsgCreateMintRequestResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequestResponse',
  encode(message: MsgCreateMintRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(26).string(message.tokenId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMintRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMintRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.uint64() as Long;
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.tokenId = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateMintRequestResponse>): MsgCreateMintRequestResponse {
    const message = createBaseMsgCreateMintRequestResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    return message;
  },
  fromAmino(object: MsgCreateMintRequestResponseAmino): MsgCreateMintRequestResponse {
    const message = createBaseMsgCreateMintRequestResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    return message;
  },
  toAmino(message: MsgCreateMintRequestResponse): MsgCreateMintRequestResponseAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? message.id?.toString() : undefined;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === '' ? undefined : message.tokenId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMintRequestResponseAminoMsg): MsgCreateMintRequestResponse {
    return MsgCreateMintRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMintRequestResponseProtoMsg): MsgCreateMintRequestResponse {
    return MsgCreateMintRequestResponse.decode(message.value);
  },
  toProto(message: MsgCreateMintRequestResponse): Uint8Array {
    return MsgCreateMintRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMintRequestResponse): MsgCreateMintRequestResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateMintRequestResponse',
      value: MsgCreateMintRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitMintResponse(): MsgSubmitMintResponse {
  return {
    creator: '',
    mintRequestID: Long.UZERO,
    base64NftData: ''
  };
}
export const MsgSubmitMintResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponse',
  encode(message: MsgSubmitMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (!message.mintRequestID.isZero()) {
      writer.uint32(16).uint64(message.mintRequestID);
    }
    if (message.base64NftData !== '') {
      writer.uint32(26).string(message.base64NftData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.mintRequestID = reader.uint64() as Long;
        break;
      case 3:
        message.base64NftData = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitMintResponse>): MsgSubmitMintResponse {
    const message = createBaseMsgSubmitMintResponse();
    message.creator = object.creator ?? '';
    message.mintRequestID = object.mintRequestID !== undefined && object.mintRequestID !== null ? Long.fromValue(object.mintRequestID) : Long.UZERO;
    message.base64NftData = object.base64NftData ?? '';
    return message;
  },
  fromAmino(object: MsgSubmitMintResponseAmino): MsgSubmitMintResponse {
    const message = createBaseMsgSubmitMintResponse();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.mintRequestID !== undefined && object.mintRequestID !== null) {
      message.mintRequestID = Long.fromString(object.mintRequestID);
    }
    if (object.base64NftData !== undefined && object.base64NftData !== null) {
      message.base64NftData = object.base64NftData;
    }
    return message;
  },
  toAmino(message: MsgSubmitMintResponse): MsgSubmitMintResponseAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.mintRequestID = !message.mintRequestID.isZero() ? message.mintRequestID?.toString() : undefined;
    obj.base64NftData = message.base64NftData === '' ? undefined : message.base64NftData;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMintResponseAminoMsg): MsgSubmitMintResponse {
    return MsgSubmitMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitMintResponseProtoMsg): MsgSubmitMintResponse {
    return MsgSubmitMintResponse.decode(message.value);
  },
  toProto(message: MsgSubmitMintResponse): Uint8Array {
    return MsgSubmitMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMintResponse): MsgSubmitMintResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponse',
      value: MsgSubmitMintResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitMintResponseResponse(): MsgSubmitMintResponseResponse {
  return {
    mintRequestID: ''
  };
}
export const MsgSubmitMintResponseResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponseResponse',
  encode(message: MsgSubmitMintResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintRequestID !== '') {
      writer.uint32(10).string(message.mintRequestID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMintResponseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMintResponseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.mintRequestID = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitMintResponseResponse>): MsgSubmitMintResponseResponse {
    const message = createBaseMsgSubmitMintResponseResponse();
    message.mintRequestID = object.mintRequestID ?? '';
    return message;
  },
  fromAmino(object: MsgSubmitMintResponseResponseAmino): MsgSubmitMintResponseResponse {
    const message = createBaseMsgSubmitMintResponseResponse();
    if (object.mintRequestID !== undefined && object.mintRequestID !== null) {
      message.mintRequestID = object.mintRequestID;
    }
    return message;
  },
  toAmino(message: MsgSubmitMintResponseResponse): MsgSubmitMintResponseResponseAmino {
    const obj: any = {};
    obj.mintRequestID = message.mintRequestID === '' ? undefined : message.mintRequestID;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMintResponseResponseAminoMsg): MsgSubmitMintResponseResponse {
    return MsgSubmitMintResponseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitMintResponseResponseProtoMsg): MsgSubmitMintResponseResponse {
    return MsgSubmitMintResponseResponse.decode(message.value);
  },
  toProto(message: MsgSubmitMintResponseResponse): Uint8Array {
    return MsgSubmitMintResponseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMintResponseResponse): MsgSubmitMintResponseResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitMintResponseResponse',
      value: MsgSubmitMintResponseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateActionRequest(): MsgCreateActionRequest {
  return {
    creator: '',
    vm: '',
    base64ActionSignature: '',
    requiredConfirm: Long.UZERO
  };
}
export const MsgCreateActionRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequest',
  encode(message: MsgCreateActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.vm !== '') {
      writer.uint32(18).string(message.vm);
    }
    if (message.base64ActionSignature !== '') {
      writer.uint32(26).string(message.base64ActionSignature);
    }
    if (!message.requiredConfirm.isZero()) {
      writer.uint32(32).uint64(message.requiredConfirm);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.vm = reader.string();
        break;
      case 3:
        message.base64ActionSignature = reader.string();
        break;
      case 4:
        message.requiredConfirm = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateActionRequest>): MsgCreateActionRequest {
    const message = createBaseMsgCreateActionRequest();
    message.creator = object.creator ?? '';
    message.vm = object.vm ?? '';
    message.base64ActionSignature = object.base64ActionSignature ?? '';
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? Long.fromValue(object.requiredConfirm) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgCreateActionRequestAmino): MsgCreateActionRequest {
    const message = createBaseMsgCreateActionRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.vm !== undefined && object.vm !== null) {
      message.vm = object.vm;
    }
    if (object.base64ActionSignature !== undefined && object.base64ActionSignature !== null) {
      message.base64ActionSignature = object.base64ActionSignature;
    }
    if (object.requiredConfirm !== undefined && object.requiredConfirm !== null) {
      message.requiredConfirm = Long.fromString(object.requiredConfirm);
    }
    return message;
  },
  toAmino(message: MsgCreateActionRequest): MsgCreateActionRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.vm = message.vm === '' ? undefined : message.vm;
    obj.base64ActionSignature = message.base64ActionSignature === '' ? undefined : message.base64ActionSignature;
    obj.requiredConfirm = !message.requiredConfirm.isZero() ? message.requiredConfirm?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateActionRequestAminoMsg): MsgCreateActionRequest {
    return MsgCreateActionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateActionRequestProtoMsg): MsgCreateActionRequest {
    return MsgCreateActionRequest.decode(message.value);
  },
  toProto(message: MsgCreateActionRequest): Uint8Array {
    return MsgCreateActionRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateActionRequest): MsgCreateActionRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequest',
      value: MsgCreateActionRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCreateActionRequestResponse(): MsgCreateActionRequestResponse {
  return {
    id: Long.UZERO
  };
}
export const MsgCreateActionRequestResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequestResponse',
  encode(message: MsgCreateActionRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateActionRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateActionRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateActionRequestResponse>): MsgCreateActionRequestResponse {
    const message = createBaseMsgCreateActionRequestResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgCreateActionRequestResponseAmino): MsgCreateActionRequestResponse {
    const message = createBaseMsgCreateActionRequestResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateActionRequestResponse): MsgCreateActionRequestResponseAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateActionRequestResponseAminoMsg): MsgCreateActionRequestResponse {
    return MsgCreateActionRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateActionRequestResponseProtoMsg): MsgCreateActionRequestResponse {
    return MsgCreateActionRequestResponse.decode(message.value);
  },
  toProto(message: MsgCreateActionRequestResponse): Uint8Array {
    return MsgCreateActionRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateActionRequestResponse): MsgCreateActionRequestResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionRequestResponse',
      value: MsgCreateActionRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitActionResponse(): MsgSubmitActionResponse {
  return {
    creator: '',
    actionRequestID: Long.UZERO,
    base64NftData: ''
  };
}
export const MsgSubmitActionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponse',
  encode(message: MsgSubmitActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (!message.actionRequestID.isZero()) {
      writer.uint32(16).uint64(message.actionRequestID);
    }
    if (message.base64NftData !== '') {
      writer.uint32(26).string(message.base64NftData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.actionRequestID = reader.uint64() as Long;
        break;
      case 3:
        message.base64NftData = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitActionResponse>): MsgSubmitActionResponse {
    const message = createBaseMsgSubmitActionResponse();
    message.creator = object.creator ?? '';
    message.actionRequestID = object.actionRequestID !== undefined && object.actionRequestID !== null ? Long.fromValue(object.actionRequestID) : Long.UZERO;
    message.base64NftData = object.base64NftData ?? '';
    return message;
  },
  fromAmino(object: MsgSubmitActionResponseAmino): MsgSubmitActionResponse {
    const message = createBaseMsgSubmitActionResponse();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.actionRequestID !== undefined && object.actionRequestID !== null) {
      message.actionRequestID = Long.fromString(object.actionRequestID);
    }
    if (object.base64NftData !== undefined && object.base64NftData !== null) {
      message.base64NftData = object.base64NftData;
    }
    return message;
  },
  toAmino(message: MsgSubmitActionResponse): MsgSubmitActionResponseAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.actionRequestID = !message.actionRequestID.isZero() ? message.actionRequestID?.toString() : undefined;
    obj.base64NftData = message.base64NftData === '' ? undefined : message.base64NftData;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitActionResponseAminoMsg): MsgSubmitActionResponse {
    return MsgSubmitActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitActionResponseProtoMsg): MsgSubmitActionResponse {
    return MsgSubmitActionResponse.decode(message.value);
  },
  toProto(message: MsgSubmitActionResponse): Uint8Array {
    return MsgSubmitActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitActionResponse): MsgSubmitActionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponse',
      value: MsgSubmitActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitActionResponseResponse(): MsgSubmitActionResponseResponse {
  return {
    actionRequestID: ''
  };
}
export const MsgSubmitActionResponseResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponseResponse',
  encode(message: MsgSubmitActionResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionRequestID !== '') {
      writer.uint32(10).string(message.actionRequestID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitActionResponseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitActionResponseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionRequestID = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitActionResponseResponse>): MsgSubmitActionResponseResponse {
    const message = createBaseMsgSubmitActionResponseResponse();
    message.actionRequestID = object.actionRequestID ?? '';
    return message;
  },
  fromAmino(object: MsgSubmitActionResponseResponseAmino): MsgSubmitActionResponseResponse {
    const message = createBaseMsgSubmitActionResponseResponse();
    if (object.actionRequestID !== undefined && object.actionRequestID !== null) {
      message.actionRequestID = object.actionRequestID;
    }
    return message;
  },
  toAmino(message: MsgSubmitActionResponseResponse): MsgSubmitActionResponseResponseAmino {
    const obj: any = {};
    obj.actionRequestID = message.actionRequestID === '' ? undefined : message.actionRequestID;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitActionResponseResponseAminoMsg): MsgSubmitActionResponseResponse {
    return MsgSubmitActionResponseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitActionResponseResponseProtoMsg): MsgSubmitActionResponseResponse {
    return MsgSubmitActionResponseResponse.decode(message.value);
  },
  toProto(message: MsgSubmitActionResponseResponse): Uint8Array {
    return MsgSubmitActionResponseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitActionResponseResponse): MsgSubmitActionResponseResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitActionResponseResponse',
      value: MsgSubmitActionResponseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVerifyCollectionOwnerRequest(): MsgCreateVerifyCollectionOwnerRequest {
  return {
    creator: '',
    nftSchemaCode: '',
    base64VerifyRequestorSignature: '',
    requiredConfirm: Long.UZERO
  };
}
export const MsgCreateVerifyCollectionOwnerRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest',
  encode(message: MsgCreateVerifyCollectionOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.base64VerifyRequestorSignature !== '') {
      writer.uint32(26).string(message.base64VerifyRequestorSignature);
    }
    if (!message.requiredConfirm.isZero()) {
      writer.uint32(32).uint64(message.requiredConfirm);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVerifyCollectionOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVerifyCollectionOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.base64VerifyRequestorSignature = reader.string();
        break;
      case 4:
        message.requiredConfirm = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateVerifyCollectionOwnerRequest>): MsgCreateVerifyCollectionOwnerRequest {
    const message = createBaseMsgCreateVerifyCollectionOwnerRequest();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.base64VerifyRequestorSignature = object.base64VerifyRequestorSignature ?? '';
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? Long.fromValue(object.requiredConfirm) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgCreateVerifyCollectionOwnerRequestAmino): MsgCreateVerifyCollectionOwnerRequest {
    const message = createBaseMsgCreateVerifyCollectionOwnerRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.base64VerifyRequestorSignature !== undefined && object.base64VerifyRequestorSignature !== null) {
      message.base64VerifyRequestorSignature = object.base64VerifyRequestorSignature;
    }
    if (object.requiredConfirm !== undefined && object.requiredConfirm !== null) {
      message.requiredConfirm = Long.fromString(object.requiredConfirm);
    }
    return message;
  },
  toAmino(message: MsgCreateVerifyCollectionOwnerRequest): MsgCreateVerifyCollectionOwnerRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.base64VerifyRequestorSignature = message.base64VerifyRequestorSignature === '' ? undefined : message.base64VerifyRequestorSignature;
    obj.requiredConfirm = !message.requiredConfirm.isZero() ? message.requiredConfirm?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateVerifyCollectionOwnerRequestAminoMsg): MsgCreateVerifyCollectionOwnerRequest {
    return MsgCreateVerifyCollectionOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateVerifyCollectionOwnerRequestProtoMsg): MsgCreateVerifyCollectionOwnerRequest {
    return MsgCreateVerifyCollectionOwnerRequest.decode(message.value);
  },
  toProto(message: MsgCreateVerifyCollectionOwnerRequest): Uint8Array {
    return MsgCreateVerifyCollectionOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVerifyCollectionOwnerRequest): MsgCreateVerifyCollectionOwnerRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequest',
      value: MsgCreateVerifyCollectionOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVerifyCollectionOwnerRequestResponse(): MsgCreateVerifyCollectionOwnerRequestResponse {
  return {
    id: Long.UZERO,
    nftSchemaCode: '',
    ownerAddress: ''
  };
}
export const MsgCreateVerifyCollectionOwnerRequestResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequestResponse',
  encode(message: MsgCreateVerifyCollectionOwnerRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.ownerAddress !== '') {
      writer.uint32(26).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVerifyCollectionOwnerRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVerifyCollectionOwnerRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.uint64() as Long;
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.ownerAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateVerifyCollectionOwnerRequestResponse>): MsgCreateVerifyCollectionOwnerRequestResponse {
    const message = createBaseMsgCreateVerifyCollectionOwnerRequestResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.ownerAddress = object.ownerAddress ?? '';
    return message;
  },
  fromAmino(object: MsgCreateVerifyCollectionOwnerRequestResponseAmino): MsgCreateVerifyCollectionOwnerRequestResponse {
    const message = createBaseMsgCreateVerifyCollectionOwnerRequestResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    }
    return message;
  },
  toAmino(message: MsgCreateVerifyCollectionOwnerRequestResponse): MsgCreateVerifyCollectionOwnerRequestResponseAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? message.id?.toString() : undefined;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.ownerAddress = message.ownerAddress === '' ? undefined : message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCreateVerifyCollectionOwnerRequestResponseAminoMsg): MsgCreateVerifyCollectionOwnerRequestResponse {
    return MsgCreateVerifyCollectionOwnerRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateVerifyCollectionOwnerRequestResponseProtoMsg): MsgCreateVerifyCollectionOwnerRequestResponse {
    return MsgCreateVerifyCollectionOwnerRequestResponse.decode(message.value);
  },
  toProto(message: MsgCreateVerifyCollectionOwnerRequestResponse): Uint8Array {
    return MsgCreateVerifyCollectionOwnerRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVerifyCollectionOwnerRequestResponse): MsgCreateVerifyCollectionOwnerRequestResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateVerifyCollectionOwnerRequestResponse',
      value: MsgCreateVerifyCollectionOwnerRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitVerifyCollectionOwner(): MsgSubmitVerifyCollectionOwner {
  return {
    creator: '',
    verifyRequestID: Long.UZERO,
    nftSchemaCode: '',
    base64OriginContractInfo: ''
  };
}
export const MsgSubmitVerifyCollectionOwner = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner',
  encode(message: MsgSubmitVerifyCollectionOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (!message.verifyRequestID.isZero()) {
      writer.uint32(16).uint64(message.verifyRequestID);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(26).string(message.nftSchemaCode);
    }
    if (message.base64OriginContractInfo !== '') {
      writer.uint32(34).string(message.base64OriginContractInfo);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitVerifyCollectionOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitVerifyCollectionOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.verifyRequestID = reader.uint64() as Long;
        break;
      case 3:
        message.nftSchemaCode = reader.string();
        break;
      case 4:
        message.base64OriginContractInfo = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitVerifyCollectionOwner>): MsgSubmitVerifyCollectionOwner {
    const message = createBaseMsgSubmitVerifyCollectionOwner();
    message.creator = object.creator ?? '';
    message.verifyRequestID = object.verifyRequestID !== undefined && object.verifyRequestID !== null ? Long.fromValue(object.verifyRequestID) : Long.UZERO;
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.base64OriginContractInfo = object.base64OriginContractInfo ?? '';
    return message;
  },
  fromAmino(object: MsgSubmitVerifyCollectionOwnerAmino): MsgSubmitVerifyCollectionOwner {
    const message = createBaseMsgSubmitVerifyCollectionOwner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.verifyRequestID !== undefined && object.verifyRequestID !== null) {
      message.verifyRequestID = Long.fromString(object.verifyRequestID);
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.base64OriginContractInfo !== undefined && object.base64OriginContractInfo !== null) {
      message.base64OriginContractInfo = object.base64OriginContractInfo;
    }
    return message;
  },
  toAmino(message: MsgSubmitVerifyCollectionOwner): MsgSubmitVerifyCollectionOwnerAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.verifyRequestID = !message.verifyRequestID.isZero() ? message.verifyRequestID?.toString() : undefined;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.base64OriginContractInfo = message.base64OriginContractInfo === '' ? undefined : message.base64OriginContractInfo;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitVerifyCollectionOwnerAminoMsg): MsgSubmitVerifyCollectionOwner {
    return MsgSubmitVerifyCollectionOwner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitVerifyCollectionOwnerProtoMsg): MsgSubmitVerifyCollectionOwner {
    return MsgSubmitVerifyCollectionOwner.decode(message.value);
  },
  toProto(message: MsgSubmitVerifyCollectionOwner): Uint8Array {
    return MsgSubmitVerifyCollectionOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitVerifyCollectionOwner): MsgSubmitVerifyCollectionOwnerProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwner',
      value: MsgSubmitVerifyCollectionOwner.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitVerifyCollectionOwnerResponse(): MsgSubmitVerifyCollectionOwnerResponse {
  return {
    verifyRequestID: Long.UZERO
  };
}
export const MsgSubmitVerifyCollectionOwnerResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwnerResponse',
  encode(message: MsgSubmitVerifyCollectionOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.verifyRequestID.isZero()) {
      writer.uint32(8).uint64(message.verifyRequestID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitVerifyCollectionOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitVerifyCollectionOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.verifyRequestID = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitVerifyCollectionOwnerResponse>): MsgSubmitVerifyCollectionOwnerResponse {
    const message = createBaseMsgSubmitVerifyCollectionOwnerResponse();
    message.verifyRequestID = object.verifyRequestID !== undefined && object.verifyRequestID !== null ? Long.fromValue(object.verifyRequestID) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgSubmitVerifyCollectionOwnerResponseAmino): MsgSubmitVerifyCollectionOwnerResponse {
    const message = createBaseMsgSubmitVerifyCollectionOwnerResponse();
    if (object.verifyRequestID !== undefined && object.verifyRequestID !== null) {
      message.verifyRequestID = Long.fromString(object.verifyRequestID);
    }
    return message;
  },
  toAmino(message: MsgSubmitVerifyCollectionOwnerResponse): MsgSubmitVerifyCollectionOwnerResponseAmino {
    const obj: any = {};
    obj.verifyRequestID = !message.verifyRequestID.isZero() ? message.verifyRequestID?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitVerifyCollectionOwnerResponseAminoMsg): MsgSubmitVerifyCollectionOwnerResponse {
    return MsgSubmitVerifyCollectionOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitVerifyCollectionOwnerResponseProtoMsg): MsgSubmitVerifyCollectionOwnerResponse {
    return MsgSubmitVerifyCollectionOwnerResponse.decode(message.value);
  },
  toProto(message: MsgSubmitVerifyCollectionOwnerResponse): Uint8Array {
    return MsgSubmitVerifyCollectionOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitVerifyCollectionOwnerResponse): MsgSubmitVerifyCollectionOwnerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitVerifyCollectionOwnerResponse',
      value: MsgSubmitVerifyCollectionOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMinimumConfirmation(): MsgSetMinimumConfirmation {
  return {
    creator: '',
    newConfirmation: ''
  };
}
export const MsgSetMinimumConfirmation = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmation',
  encode(message: MsgSetMinimumConfirmation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.newConfirmation !== '') {
      writer.uint32(18).string(message.newConfirmation);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinimumConfirmation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinimumConfirmation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.newConfirmation = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMinimumConfirmation>): MsgSetMinimumConfirmation {
    const message = createBaseMsgSetMinimumConfirmation();
    message.creator = object.creator ?? '';
    message.newConfirmation = object.newConfirmation ?? '';
    return message;
  },
  fromAmino(object: MsgSetMinimumConfirmationAmino): MsgSetMinimumConfirmation {
    const message = createBaseMsgSetMinimumConfirmation();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.newConfirmation !== undefined && object.newConfirmation !== null) {
      message.newConfirmation = object.newConfirmation;
    }
    return message;
  },
  toAmino(message: MsgSetMinimumConfirmation): MsgSetMinimumConfirmationAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.newConfirmation = message.newConfirmation === '' ? undefined : message.newConfirmation;
    return obj;
  },
  fromAminoMsg(object: MsgSetMinimumConfirmationAminoMsg): MsgSetMinimumConfirmation {
    return MsgSetMinimumConfirmation.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMinimumConfirmationProtoMsg): MsgSetMinimumConfirmation {
    return MsgSetMinimumConfirmation.decode(message.value);
  },
  toProto(message: MsgSetMinimumConfirmation): Uint8Array {
    return MsgSetMinimumConfirmation.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMinimumConfirmation): MsgSetMinimumConfirmationProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmation',
      value: MsgSetMinimumConfirmation.encode(message).finish()
    };
  }
};
function createBaseMsgSetMinimumConfirmationResponse(): MsgSetMinimumConfirmationResponse {
  return {
    newConfirmation: ''
  };
}
export const MsgSetMinimumConfirmationResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmationResponse',
  encode(message: MsgSetMinimumConfirmationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newConfirmation !== '') {
      writer.uint32(10).string(message.newConfirmation);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinimumConfirmationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinimumConfirmationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.newConfirmation = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMinimumConfirmationResponse>): MsgSetMinimumConfirmationResponse {
    const message = createBaseMsgSetMinimumConfirmationResponse();
    message.newConfirmation = object.newConfirmation ?? '';
    return message;
  },
  fromAmino(object: MsgSetMinimumConfirmationResponseAmino): MsgSetMinimumConfirmationResponse {
    const message = createBaseMsgSetMinimumConfirmationResponse();
    if (object.newConfirmation !== undefined && object.newConfirmation !== null) {
      message.newConfirmation = object.newConfirmation;
    }
    return message;
  },
  toAmino(message: MsgSetMinimumConfirmationResponse): MsgSetMinimumConfirmationResponseAmino {
    const obj: any = {};
    obj.newConfirmation = message.newConfirmation === '' ? undefined : message.newConfirmation;
    return obj;
  },
  fromAminoMsg(object: MsgSetMinimumConfirmationResponseAminoMsg): MsgSetMinimumConfirmationResponse {
    return MsgSetMinimumConfirmationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMinimumConfirmationResponseProtoMsg): MsgSetMinimumConfirmationResponse {
    return MsgSetMinimumConfirmationResponse.decode(message.value);
  },
  toProto(message: MsgSetMinimumConfirmationResponse): Uint8Array {
    return MsgSetMinimumConfirmationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMinimumConfirmationResponse): MsgSetMinimumConfirmationResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSetMinimumConfirmationResponse',
      value: MsgSetMinimumConfirmationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateActionSigner(): MsgCreateActionSigner {
  return {
    creator: '',
    base64EncodedSetSignerAction: ''
  };
}
export const MsgCreateActionSigner = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSigner',
  encode(message: MsgCreateActionSigner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.base64EncodedSetSignerAction !== '') {
      writer.uint32(18).string(message.base64EncodedSetSignerAction);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateActionSigner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateActionSigner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.base64EncodedSetSignerAction = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateActionSigner>): MsgCreateActionSigner {
    const message = createBaseMsgCreateActionSigner();
    message.creator = object.creator ?? '';
    message.base64EncodedSetSignerAction = object.base64EncodedSetSignerAction ?? '';
    return message;
  },
  fromAmino(object: MsgCreateActionSignerAmino): MsgCreateActionSigner {
    const message = createBaseMsgCreateActionSigner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.base64EncodedSetSignerAction !== undefined && object.base64EncodedSetSignerAction !== null) {
      message.base64EncodedSetSignerAction = object.base64EncodedSetSignerAction;
    }
    return message;
  },
  toAmino(message: MsgCreateActionSigner): MsgCreateActionSignerAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.base64EncodedSetSignerAction = message.base64EncodedSetSignerAction === '' ? undefined : message.base64EncodedSetSignerAction;
    return obj;
  },
  fromAminoMsg(object: MsgCreateActionSignerAminoMsg): MsgCreateActionSigner {
    return MsgCreateActionSigner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateActionSignerProtoMsg): MsgCreateActionSigner {
    return MsgCreateActionSigner.decode(message.value);
  },
  toProto(message: MsgCreateActionSigner): Uint8Array {
    return MsgCreateActionSigner.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateActionSigner): MsgCreateActionSignerProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSigner',
      value: MsgCreateActionSigner.encode(message).finish()
    };
  }
};
function createBaseMsgCreateActionSignerResponse(): MsgCreateActionSignerResponse {
  return {
    ownerAddress: '',
    signerAddress: '',
    expireAt: ''
  };
}
export const MsgCreateActionSignerResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerResponse',
  encode(message: MsgCreateActionSignerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== '') {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.signerAddress !== '') {
      writer.uint32(18).string(message.signerAddress);
    }
    if (message.expireAt !== '') {
      writer.uint32(26).string(message.expireAt);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateActionSignerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateActionSignerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.ownerAddress = reader.string();
        break;
      case 2:
        message.signerAddress = reader.string();
        break;
      case 3:
        message.expireAt = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateActionSignerResponse>): MsgCreateActionSignerResponse {
    const message = createBaseMsgCreateActionSignerResponse();
    message.ownerAddress = object.ownerAddress ?? '';
    message.signerAddress = object.signerAddress ?? '';
    message.expireAt = object.expireAt ?? '';
    return message;
  },
  fromAmino(object: MsgCreateActionSignerResponseAmino): MsgCreateActionSignerResponse {
    const message = createBaseMsgCreateActionSignerResponse();
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    }
    if (object.signerAddress !== undefined && object.signerAddress !== null) {
      message.signerAddress = object.signerAddress;
    }
    if (object.expireAt !== undefined && object.expireAt !== null) {
      message.expireAt = object.expireAt;
    }
    return message;
  },
  toAmino(message: MsgCreateActionSignerResponse): MsgCreateActionSignerResponseAmino {
    const obj: any = {};
    obj.ownerAddress = message.ownerAddress === '' ? undefined : message.ownerAddress;
    obj.signerAddress = message.signerAddress === '' ? undefined : message.signerAddress;
    obj.expireAt = message.expireAt === '' ? undefined : message.expireAt;
    return obj;
  },
  fromAminoMsg(object: MsgCreateActionSignerResponseAminoMsg): MsgCreateActionSignerResponse {
    return MsgCreateActionSignerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateActionSignerResponseProtoMsg): MsgCreateActionSignerResponse {
    return MsgCreateActionSignerResponse.decode(message.value);
  },
  toProto(message: MsgCreateActionSignerResponse): Uint8Array {
    return MsgCreateActionSignerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateActionSignerResponse): MsgCreateActionSignerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerResponse',
      value: MsgCreateActionSignerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateActionSigner(): MsgUpdateActionSigner {
  return {
    creator: '',
    base64EncodedSetSignerAction: ''
  };
}
export const MsgUpdateActionSigner = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSigner',
  encode(message: MsgUpdateActionSigner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.base64EncodedSetSignerAction !== '') {
      writer.uint32(18).string(message.base64EncodedSetSignerAction);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateActionSigner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateActionSigner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.base64EncodedSetSignerAction = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateActionSigner>): MsgUpdateActionSigner {
    const message = createBaseMsgUpdateActionSigner();
    message.creator = object.creator ?? '';
    message.base64EncodedSetSignerAction = object.base64EncodedSetSignerAction ?? '';
    return message;
  },
  fromAmino(object: MsgUpdateActionSignerAmino): MsgUpdateActionSigner {
    const message = createBaseMsgUpdateActionSigner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.base64EncodedSetSignerAction !== undefined && object.base64EncodedSetSignerAction !== null) {
      message.base64EncodedSetSignerAction = object.base64EncodedSetSignerAction;
    }
    return message;
  },
  toAmino(message: MsgUpdateActionSigner): MsgUpdateActionSignerAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.base64EncodedSetSignerAction = message.base64EncodedSetSignerAction === '' ? undefined : message.base64EncodedSetSignerAction;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateActionSignerAminoMsg): MsgUpdateActionSigner {
    return MsgUpdateActionSigner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateActionSignerProtoMsg): MsgUpdateActionSigner {
    return MsgUpdateActionSigner.decode(message.value);
  },
  toProto(message: MsgUpdateActionSigner): Uint8Array {
    return MsgUpdateActionSigner.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateActionSigner): MsgUpdateActionSignerProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSigner',
      value: MsgUpdateActionSigner.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateActionSignerResponse(): MsgUpdateActionSignerResponse {
  return {
    ownerAddress: '',
    signerAddress: '',
    expireAt: ''
  };
}
export const MsgUpdateActionSignerResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerResponse',
  encode(message: MsgUpdateActionSignerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== '') {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.signerAddress !== '') {
      writer.uint32(18).string(message.signerAddress);
    }
    if (message.expireAt !== '') {
      writer.uint32(26).string(message.expireAt);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateActionSignerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateActionSignerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.ownerAddress = reader.string();
        break;
      case 2:
        message.signerAddress = reader.string();
        break;
      case 3:
        message.expireAt = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateActionSignerResponse>): MsgUpdateActionSignerResponse {
    const message = createBaseMsgUpdateActionSignerResponse();
    message.ownerAddress = object.ownerAddress ?? '';
    message.signerAddress = object.signerAddress ?? '';
    message.expireAt = object.expireAt ?? '';
    return message;
  },
  fromAmino(object: MsgUpdateActionSignerResponseAmino): MsgUpdateActionSignerResponse {
    const message = createBaseMsgUpdateActionSignerResponse();
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    }
    if (object.signerAddress !== undefined && object.signerAddress !== null) {
      message.signerAddress = object.signerAddress;
    }
    if (object.expireAt !== undefined && object.expireAt !== null) {
      message.expireAt = object.expireAt;
    }
    return message;
  },
  toAmino(message: MsgUpdateActionSignerResponse): MsgUpdateActionSignerResponseAmino {
    const obj: any = {};
    obj.ownerAddress = message.ownerAddress === '' ? undefined : message.ownerAddress;
    obj.signerAddress = message.signerAddress === '' ? undefined : message.signerAddress;
    obj.expireAt = message.expireAt === '' ? undefined : message.expireAt;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateActionSignerResponseAminoMsg): MsgUpdateActionSignerResponse {
    return MsgUpdateActionSignerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateActionSignerResponseProtoMsg): MsgUpdateActionSignerResponse {
    return MsgUpdateActionSignerResponse.decode(message.value);
  },
  toProto(message: MsgUpdateActionSignerResponse): Uint8Array {
    return MsgUpdateActionSignerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateActionSignerResponse): MsgUpdateActionSignerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerResponse',
      value: MsgUpdateActionSignerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteActionSigner(): MsgDeleteActionSigner {
  return {
    creator: '',
    base64EncodedSetSignerAction: ''
  };
}
export const MsgDeleteActionSigner = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSigner',
  encode(message: MsgDeleteActionSigner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.base64EncodedSetSignerAction !== '') {
      writer.uint32(18).string(message.base64EncodedSetSignerAction);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteActionSigner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteActionSigner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.base64EncodedSetSignerAction = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteActionSigner>): MsgDeleteActionSigner {
    const message = createBaseMsgDeleteActionSigner();
    message.creator = object.creator ?? '';
    message.base64EncodedSetSignerAction = object.base64EncodedSetSignerAction ?? '';
    return message;
  },
  fromAmino(object: MsgDeleteActionSignerAmino): MsgDeleteActionSigner {
    const message = createBaseMsgDeleteActionSigner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.base64EncodedSetSignerAction !== undefined && object.base64EncodedSetSignerAction !== null) {
      message.base64EncodedSetSignerAction = object.base64EncodedSetSignerAction;
    }
    return message;
  },
  toAmino(message: MsgDeleteActionSigner): MsgDeleteActionSignerAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.base64EncodedSetSignerAction = message.base64EncodedSetSignerAction === '' ? undefined : message.base64EncodedSetSignerAction;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteActionSignerAminoMsg): MsgDeleteActionSigner {
    return MsgDeleteActionSigner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteActionSignerProtoMsg): MsgDeleteActionSigner {
    return MsgDeleteActionSigner.decode(message.value);
  },
  toProto(message: MsgDeleteActionSigner): Uint8Array {
    return MsgDeleteActionSigner.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteActionSigner): MsgDeleteActionSignerProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSigner',
      value: MsgDeleteActionSigner.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteActionSignerResponse(): MsgDeleteActionSignerResponse {
  return {
    ownerAddress: '',
    signerAddress: ''
  };
}
export const MsgDeleteActionSignerResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerResponse',
  encode(message: MsgDeleteActionSignerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== '') {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.signerAddress !== '') {
      writer.uint32(18).string(message.signerAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteActionSignerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteActionSignerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.ownerAddress = reader.string();
        break;
      case 2:
        message.signerAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteActionSignerResponse>): MsgDeleteActionSignerResponse {
    const message = createBaseMsgDeleteActionSignerResponse();
    message.ownerAddress = object.ownerAddress ?? '';
    message.signerAddress = object.signerAddress ?? '';
    return message;
  },
  fromAmino(object: MsgDeleteActionSignerResponseAmino): MsgDeleteActionSignerResponse {
    const message = createBaseMsgDeleteActionSignerResponse();
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    }
    if (object.signerAddress !== undefined && object.signerAddress !== null) {
      message.signerAddress = object.signerAddress;
    }
    return message;
  },
  toAmino(message: MsgDeleteActionSignerResponse): MsgDeleteActionSignerResponseAmino {
    const obj: any = {};
    obj.ownerAddress = message.ownerAddress === '' ? undefined : message.ownerAddress;
    obj.signerAddress = message.signerAddress === '' ? undefined : message.signerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteActionSignerResponseAminoMsg): MsgDeleteActionSignerResponse {
    return MsgDeleteActionSignerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteActionSignerResponseProtoMsg): MsgDeleteActionSignerResponse {
    return MsgDeleteActionSignerResponse.decode(message.value);
  },
  toProto(message: MsgDeleteActionSignerResponse): Uint8Array {
    return MsgDeleteActionSignerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteActionSignerResponse): MsgDeleteActionSignerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerResponse',
      value: MsgDeleteActionSignerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateActionSignerConfig(): MsgCreateActionSignerConfig {
  return {
    creator: '',
    chain: '',
    rpcEndpoint: '',
    contractAddress: '',
    contractName: '',
    contractOwner: ''
  };
}
export const MsgCreateActionSignerConfig = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfig',
  encode(message: MsgCreateActionSignerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.chain !== '') {
      writer.uint32(18).string(message.chain);
    }
    if (message.rpcEndpoint !== '') {
      writer.uint32(26).string(message.rpcEndpoint);
    }
    if (message.contractAddress !== '') {
      writer.uint32(34).string(message.contractAddress);
    }
    if (message.contractName !== '') {
      writer.uint32(42).string(message.contractName);
    }
    if (message.contractOwner !== '') {
      writer.uint32(50).string(message.contractOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateActionSignerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateActionSignerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.chain = reader.string();
        break;
      case 3:
        message.rpcEndpoint = reader.string();
        break;
      case 4:
        message.contractAddress = reader.string();
        break;
      case 5:
        message.contractName = reader.string();
        break;
      case 6:
        message.contractOwner = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateActionSignerConfig>): MsgCreateActionSignerConfig {
    const message = createBaseMsgCreateActionSignerConfig();
    message.creator = object.creator ?? '';
    message.chain = object.chain ?? '';
    message.rpcEndpoint = object.rpcEndpoint ?? '';
    message.contractAddress = object.contractAddress ?? '';
    message.contractName = object.contractName ?? '';
    message.contractOwner = object.contractOwner ?? '';
    return message;
  },
  fromAmino(object: MsgCreateActionSignerConfigAmino): MsgCreateActionSignerConfig {
    const message = createBaseMsgCreateActionSignerConfig();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.rpc_endpoint !== undefined && object.rpc_endpoint !== null) {
      message.rpcEndpoint = object.rpc_endpoint;
    }
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    }
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = object.contractName;
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = object.contractOwner;
    }
    return message;
  },
  toAmino(message: MsgCreateActionSignerConfig): MsgCreateActionSignerConfigAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.chain = message.chain === '' ? undefined : message.chain;
    obj.rpc_endpoint = message.rpcEndpoint === '' ? undefined : message.rpcEndpoint;
    obj.contractAddress = message.contractAddress === '' ? undefined : message.contractAddress;
    obj.contractName = message.contractName === '' ? undefined : message.contractName;
    obj.contractOwner = message.contractOwner === '' ? undefined : message.contractOwner;
    return obj;
  },
  fromAminoMsg(object: MsgCreateActionSignerConfigAminoMsg): MsgCreateActionSignerConfig {
    return MsgCreateActionSignerConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateActionSignerConfigProtoMsg): MsgCreateActionSignerConfig {
    return MsgCreateActionSignerConfig.decode(message.value);
  },
  toProto(message: MsgCreateActionSignerConfig): Uint8Array {
    return MsgCreateActionSignerConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateActionSignerConfig): MsgCreateActionSignerConfigProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfig',
      value: MsgCreateActionSignerConfig.encode(message).finish()
    };
  }
};
function createBaseMsgCreateActionSignerConfigResponse(): MsgCreateActionSignerConfigResponse {
  return {
    chain: '',
    rpcEndpoint: '',
    contractAddress: '',
    contractName: '',
    contractOwner: ''
  };
}
export const MsgCreateActionSignerConfigResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfigResponse',
  encode(message: MsgCreateActionSignerConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== '') {
      writer.uint32(10).string(message.chain);
    }
    if (message.rpcEndpoint !== '') {
      writer.uint32(18).string(message.rpcEndpoint);
    }
    if (message.contractAddress !== '') {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.contractName !== '') {
      writer.uint32(34).string(message.contractName);
    }
    if (message.contractOwner !== '') {
      writer.uint32(42).string(message.contractOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateActionSignerConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateActionSignerConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.chain = reader.string();
        break;
      case 2:
        message.rpcEndpoint = reader.string();
        break;
      case 3:
        message.contractAddress = reader.string();
        break;
      case 4:
        message.contractName = reader.string();
        break;
      case 5:
        message.contractOwner = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateActionSignerConfigResponse>): MsgCreateActionSignerConfigResponse {
    const message = createBaseMsgCreateActionSignerConfigResponse();
    message.chain = object.chain ?? '';
    message.rpcEndpoint = object.rpcEndpoint ?? '';
    message.contractAddress = object.contractAddress ?? '';
    message.contractName = object.contractName ?? '';
    message.contractOwner = object.contractOwner ?? '';
    return message;
  },
  fromAmino(object: MsgCreateActionSignerConfigResponseAmino): MsgCreateActionSignerConfigResponse {
    const message = createBaseMsgCreateActionSignerConfigResponse();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.rpc_endpoint !== undefined && object.rpc_endpoint !== null) {
      message.rpcEndpoint = object.rpc_endpoint;
    }
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    }
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = object.contractName;
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = object.contractOwner;
    }
    return message;
  },
  toAmino(message: MsgCreateActionSignerConfigResponse): MsgCreateActionSignerConfigResponseAmino {
    const obj: any = {};
    obj.chain = message.chain === '' ? undefined : message.chain;
    obj.rpc_endpoint = message.rpcEndpoint === '' ? undefined : message.rpcEndpoint;
    obj.contractAddress = message.contractAddress === '' ? undefined : message.contractAddress;
    obj.contractName = message.contractName === '' ? undefined : message.contractName;
    obj.contractOwner = message.contractOwner === '' ? undefined : message.contractOwner;
    return obj;
  },
  fromAminoMsg(object: MsgCreateActionSignerConfigResponseAminoMsg): MsgCreateActionSignerConfigResponse {
    return MsgCreateActionSignerConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateActionSignerConfigResponseProtoMsg): MsgCreateActionSignerConfigResponse {
    return MsgCreateActionSignerConfigResponse.decode(message.value);
  },
  toProto(message: MsgCreateActionSignerConfigResponse): Uint8Array {
    return MsgCreateActionSignerConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateActionSignerConfigResponse): MsgCreateActionSignerConfigResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateActionSignerConfigResponse',
      value: MsgCreateActionSignerConfigResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateActionSignerConfig(): MsgUpdateActionSignerConfig {
  return {
    creator: '',
    chain: '',
    rpcEndpoint: '',
    contractAddress: '',
    contractName: '',
    contractOwner: ''
  };
}
export const MsgUpdateActionSignerConfig = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfig',
  encode(message: MsgUpdateActionSignerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.chain !== '') {
      writer.uint32(18).string(message.chain);
    }
    if (message.rpcEndpoint !== '') {
      writer.uint32(26).string(message.rpcEndpoint);
    }
    if (message.contractAddress !== '') {
      writer.uint32(34).string(message.contractAddress);
    }
    if (message.contractName !== '') {
      writer.uint32(42).string(message.contractName);
    }
    if (message.contractOwner !== '') {
      writer.uint32(50).string(message.contractOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateActionSignerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateActionSignerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.chain = reader.string();
        break;
      case 3:
        message.rpcEndpoint = reader.string();
        break;
      case 4:
        message.contractAddress = reader.string();
        break;
      case 5:
        message.contractName = reader.string();
        break;
      case 6:
        message.contractOwner = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateActionSignerConfig>): MsgUpdateActionSignerConfig {
    const message = createBaseMsgUpdateActionSignerConfig();
    message.creator = object.creator ?? '';
    message.chain = object.chain ?? '';
    message.rpcEndpoint = object.rpcEndpoint ?? '';
    message.contractAddress = object.contractAddress ?? '';
    message.contractName = object.contractName ?? '';
    message.contractOwner = object.contractOwner ?? '';
    return message;
  },
  fromAmino(object: MsgUpdateActionSignerConfigAmino): MsgUpdateActionSignerConfig {
    const message = createBaseMsgUpdateActionSignerConfig();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.rpc_endpoint !== undefined && object.rpc_endpoint !== null) {
      message.rpcEndpoint = object.rpc_endpoint;
    }
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    }
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = object.contractName;
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = object.contractOwner;
    }
    return message;
  },
  toAmino(message: MsgUpdateActionSignerConfig): MsgUpdateActionSignerConfigAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.chain = message.chain === '' ? undefined : message.chain;
    obj.rpc_endpoint = message.rpcEndpoint === '' ? undefined : message.rpcEndpoint;
    obj.contractAddress = message.contractAddress === '' ? undefined : message.contractAddress;
    obj.contractName = message.contractName === '' ? undefined : message.contractName;
    obj.contractOwner = message.contractOwner === '' ? undefined : message.contractOwner;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateActionSignerConfigAminoMsg): MsgUpdateActionSignerConfig {
    return MsgUpdateActionSignerConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateActionSignerConfigProtoMsg): MsgUpdateActionSignerConfig {
    return MsgUpdateActionSignerConfig.decode(message.value);
  },
  toProto(message: MsgUpdateActionSignerConfig): Uint8Array {
    return MsgUpdateActionSignerConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateActionSignerConfig): MsgUpdateActionSignerConfigProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfig',
      value: MsgUpdateActionSignerConfig.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateActionSignerConfigResponse(): MsgUpdateActionSignerConfigResponse {
  return {
    chain: '',
    rpcEndpoint: '',
    newRpcEndpoint: '',
    contractAddress: '',
    newContractAddress: '',
    contractName: '',
    newContractName: '',
    contractOwner: '',
    newContractOwner: ''
  };
}
export const MsgUpdateActionSignerConfigResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfigResponse',
  encode(message: MsgUpdateActionSignerConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== '') {
      writer.uint32(10).string(message.chain);
    }
    if (message.rpcEndpoint !== '') {
      writer.uint32(18).string(message.rpcEndpoint);
    }
    if (message.newRpcEndpoint !== '') {
      writer.uint32(26).string(message.newRpcEndpoint);
    }
    if (message.contractAddress !== '') {
      writer.uint32(34).string(message.contractAddress);
    }
    if (message.newContractAddress !== '') {
      writer.uint32(42).string(message.newContractAddress);
    }
    if (message.contractName !== '') {
      writer.uint32(50).string(message.contractName);
    }
    if (message.newContractName !== '') {
      writer.uint32(58).string(message.newContractName);
    }
    if (message.contractOwner !== '') {
      writer.uint32(66).string(message.contractOwner);
    }
    if (message.newContractOwner !== '') {
      writer.uint32(74).string(message.newContractOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateActionSignerConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateActionSignerConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.chain = reader.string();
        break;
      case 2:
        message.rpcEndpoint = reader.string();
        break;
      case 3:
        message.newRpcEndpoint = reader.string();
        break;
      case 4:
        message.contractAddress = reader.string();
        break;
      case 5:
        message.newContractAddress = reader.string();
        break;
      case 6:
        message.contractName = reader.string();
        break;
      case 7:
        message.newContractName = reader.string();
        break;
      case 8:
        message.contractOwner = reader.string();
        break;
      case 9:
        message.newContractOwner = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateActionSignerConfigResponse>): MsgUpdateActionSignerConfigResponse {
    const message = createBaseMsgUpdateActionSignerConfigResponse();
    message.chain = object.chain ?? '';
    message.rpcEndpoint = object.rpcEndpoint ?? '';
    message.newRpcEndpoint = object.newRpcEndpoint ?? '';
    message.contractAddress = object.contractAddress ?? '';
    message.newContractAddress = object.newContractAddress ?? '';
    message.contractName = object.contractName ?? '';
    message.newContractName = object.newContractName ?? '';
    message.contractOwner = object.contractOwner ?? '';
    message.newContractOwner = object.newContractOwner ?? '';
    return message;
  },
  fromAmino(object: MsgUpdateActionSignerConfigResponseAmino): MsgUpdateActionSignerConfigResponse {
    const message = createBaseMsgUpdateActionSignerConfigResponse();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.rpc_endpoint !== undefined && object.rpc_endpoint !== null) {
      message.rpcEndpoint = object.rpc_endpoint;
    }
    if (object.new_rpc_endpoint !== undefined && object.new_rpc_endpoint !== null) {
      message.newRpcEndpoint = object.new_rpc_endpoint;
    }
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    }
    if (object.new_contractAddress !== undefined && object.new_contractAddress !== null) {
      message.newContractAddress = object.new_contractAddress;
    }
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = object.contractName;
    }
    if (object.new_contractName !== undefined && object.new_contractName !== null) {
      message.newContractName = object.new_contractName;
    }
    if (object.contractOwner !== undefined && object.contractOwner !== null) {
      message.contractOwner = object.contractOwner;
    }
    if (object.new_contractOwner !== undefined && object.new_contractOwner !== null) {
      message.newContractOwner = object.new_contractOwner;
    }
    return message;
  },
  toAmino(message: MsgUpdateActionSignerConfigResponse): MsgUpdateActionSignerConfigResponseAmino {
    const obj: any = {};
    obj.chain = message.chain === '' ? undefined : message.chain;
    obj.rpc_endpoint = message.rpcEndpoint === '' ? undefined : message.rpcEndpoint;
    obj.new_rpc_endpoint = message.newRpcEndpoint === '' ? undefined : message.newRpcEndpoint;
    obj.contractAddress = message.contractAddress === '' ? undefined : message.contractAddress;
    obj.new_contractAddress = message.newContractAddress === '' ? undefined : message.newContractAddress;
    obj.contractName = message.contractName === '' ? undefined : message.contractName;
    obj.new_contractName = message.newContractName === '' ? undefined : message.newContractName;
    obj.contractOwner = message.contractOwner === '' ? undefined : message.contractOwner;
    obj.new_contractOwner = message.newContractOwner === '' ? undefined : message.newContractOwner;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateActionSignerConfigResponseAminoMsg): MsgUpdateActionSignerConfigResponse {
    return MsgUpdateActionSignerConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateActionSignerConfigResponseProtoMsg): MsgUpdateActionSignerConfigResponse {
    return MsgUpdateActionSignerConfigResponse.decode(message.value);
  },
  toProto(message: MsgUpdateActionSignerConfigResponse): Uint8Array {
    return MsgUpdateActionSignerConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateActionSignerConfigResponse): MsgUpdateActionSignerConfigResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgUpdateActionSignerConfigResponse',
      value: MsgUpdateActionSignerConfigResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteActionSignerConfig(): MsgDeleteActionSignerConfig {
  return {
    creator: '',
    chain: ''
  };
}
export const MsgDeleteActionSignerConfig = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfig',
  encode(message: MsgDeleteActionSignerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.chain !== '') {
      writer.uint32(18).string(message.chain);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteActionSignerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteActionSignerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.chain = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteActionSignerConfig>): MsgDeleteActionSignerConfig {
    const message = createBaseMsgDeleteActionSignerConfig();
    message.creator = object.creator ?? '';
    message.chain = object.chain ?? '';
    return message;
  },
  fromAmino(object: MsgDeleteActionSignerConfigAmino): MsgDeleteActionSignerConfig {
    const message = createBaseMsgDeleteActionSignerConfig();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    return message;
  },
  toAmino(message: MsgDeleteActionSignerConfig): MsgDeleteActionSignerConfigAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.chain = message.chain === '' ? undefined : message.chain;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteActionSignerConfigAminoMsg): MsgDeleteActionSignerConfig {
    return MsgDeleteActionSignerConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteActionSignerConfigProtoMsg): MsgDeleteActionSignerConfig {
    return MsgDeleteActionSignerConfig.decode(message.value);
  },
  toProto(message: MsgDeleteActionSignerConfig): Uint8Array {
    return MsgDeleteActionSignerConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteActionSignerConfig): MsgDeleteActionSignerConfigProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfig',
      value: MsgDeleteActionSignerConfig.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteActionSignerConfigResponse(): MsgDeleteActionSignerConfigResponse {
  return {
    chain: ''
  };
}
export const MsgDeleteActionSignerConfigResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfigResponse',
  encode(message: MsgDeleteActionSignerConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== '') {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteActionSignerConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteActionSignerConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.chain = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteActionSignerConfigResponse>): MsgDeleteActionSignerConfigResponse {
    const message = createBaseMsgDeleteActionSignerConfigResponse();
    message.chain = object.chain ?? '';
    return message;
  },
  fromAmino(object: MsgDeleteActionSignerConfigResponseAmino): MsgDeleteActionSignerConfigResponse {
    const message = createBaseMsgDeleteActionSignerConfigResponse();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    return message;
  },
  toAmino(message: MsgDeleteActionSignerConfigResponse): MsgDeleteActionSignerConfigResponseAmino {
    const obj: any = {};
    obj.chain = message.chain === '' ? undefined : message.chain;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteActionSignerConfigResponseAminoMsg): MsgDeleteActionSignerConfigResponse {
    return MsgDeleteActionSignerConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteActionSignerConfigResponseProtoMsg): MsgDeleteActionSignerConfigResponse {
    return MsgDeleteActionSignerConfigResponse.decode(message.value);
  },
  toProto(message: MsgDeleteActionSignerConfigResponse): Uint8Array {
    return MsgDeleteActionSignerConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteActionSignerConfigResponse): MsgDeleteActionSignerConfigResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgDeleteActionSignerConfigResponse',
      value: MsgDeleteActionSignerConfigResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSyncActionSigner(): MsgCreateSyncActionSigner {
  return {
    creator: '',
    chain: '',
    actorAddress: '',
    ownerAddress: '',
    requiredConfirm: Long.UZERO
  };
}
export const MsgCreateSyncActionSigner = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSigner',
  encode(message: MsgCreateSyncActionSigner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.chain !== '') {
      writer.uint32(18).string(message.chain);
    }
    if (message.actorAddress !== '') {
      writer.uint32(26).string(message.actorAddress);
    }
    if (message.ownerAddress !== '') {
      writer.uint32(34).string(message.ownerAddress);
    }
    if (!message.requiredConfirm.isZero()) {
      writer.uint32(40).uint64(message.requiredConfirm);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSyncActionSigner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSyncActionSigner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.chain = reader.string();
        break;
      case 3:
        message.actorAddress = reader.string();
        break;
      case 4:
        message.ownerAddress = reader.string();
        break;
      case 5:
        message.requiredConfirm = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateSyncActionSigner>): MsgCreateSyncActionSigner {
    const message = createBaseMsgCreateSyncActionSigner();
    message.creator = object.creator ?? '';
    message.chain = object.chain ?? '';
    message.actorAddress = object.actorAddress ?? '';
    message.ownerAddress = object.ownerAddress ?? '';
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? Long.fromValue(object.requiredConfirm) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgCreateSyncActionSignerAmino): MsgCreateSyncActionSigner {
    const message = createBaseMsgCreateSyncActionSigner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.actorAddress !== undefined && object.actorAddress !== null) {
      message.actorAddress = object.actorAddress;
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    }
    if (object.requiredConfirm !== undefined && object.requiredConfirm !== null) {
      message.requiredConfirm = Long.fromString(object.requiredConfirm);
    }
    return message;
  },
  toAmino(message: MsgCreateSyncActionSigner): MsgCreateSyncActionSignerAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.chain = message.chain === '' ? undefined : message.chain;
    obj.actorAddress = message.actorAddress === '' ? undefined : message.actorAddress;
    obj.ownerAddress = message.ownerAddress === '' ? undefined : message.ownerAddress;
    obj.requiredConfirm = !message.requiredConfirm.isZero() ? message.requiredConfirm?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSyncActionSignerAminoMsg): MsgCreateSyncActionSigner {
    return MsgCreateSyncActionSigner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSyncActionSignerProtoMsg): MsgCreateSyncActionSigner {
    return MsgCreateSyncActionSigner.decode(message.value);
  },
  toProto(message: MsgCreateSyncActionSigner): Uint8Array {
    return MsgCreateSyncActionSigner.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSyncActionSigner): MsgCreateSyncActionSignerProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSigner',
      value: MsgCreateSyncActionSigner.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSyncActionSignerResponse(): MsgCreateSyncActionSignerResponse {
  return {
    id: Long.UZERO,
    chain: '',
    ownerAddress: '',
    actorAddress: ''
  };
}
export const MsgCreateSyncActionSignerResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSignerResponse',
  encode(message: MsgCreateSyncActionSignerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.chain !== '') {
      writer.uint32(18).string(message.chain);
    }
    if (message.ownerAddress !== '') {
      writer.uint32(26).string(message.ownerAddress);
    }
    if (message.actorAddress !== '') {
      writer.uint32(34).string(message.actorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSyncActionSignerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSyncActionSignerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.uint64() as Long;
        break;
      case 2:
        message.chain = reader.string();
        break;
      case 3:
        message.ownerAddress = reader.string();
        break;
      case 4:
        message.actorAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateSyncActionSignerResponse>): MsgCreateSyncActionSignerResponse {
    const message = createBaseMsgCreateSyncActionSignerResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.chain = object.chain ?? '';
    message.ownerAddress = object.ownerAddress ?? '';
    message.actorAddress = object.actorAddress ?? '';
    return message;
  },
  fromAmino(object: MsgCreateSyncActionSignerResponseAmino): MsgCreateSyncActionSignerResponse {
    const message = createBaseMsgCreateSyncActionSignerResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    }
    if (object.actorAddress !== undefined && object.actorAddress !== null) {
      message.actorAddress = object.actorAddress;
    }
    return message;
  },
  toAmino(message: MsgCreateSyncActionSignerResponse): MsgCreateSyncActionSignerResponseAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? message.id?.toString() : undefined;
    obj.chain = message.chain === '' ? undefined : message.chain;
    obj.ownerAddress = message.ownerAddress === '' ? undefined : message.ownerAddress;
    obj.actorAddress = message.actorAddress === '' ? undefined : message.actorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSyncActionSignerResponseAminoMsg): MsgCreateSyncActionSignerResponse {
    return MsgCreateSyncActionSignerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSyncActionSignerResponseProtoMsg): MsgCreateSyncActionSignerResponse {
    return MsgCreateSyncActionSignerResponse.decode(message.value);
  },
  toProto(message: MsgCreateSyncActionSignerResponse): Uint8Array {
    return MsgCreateSyncActionSignerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSyncActionSignerResponse): MsgCreateSyncActionSignerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgCreateSyncActionSignerResponse',
      value: MsgCreateSyncActionSignerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitSyncActionSigner(): MsgSubmitSyncActionSigner {
  return {
    creator: '',
    syncId: Long.UZERO,
    chain: '',
    actorAddress: '',
    ownerAddress: '',
    expireEpoch: ''
  };
}
export const MsgSubmitSyncActionSigner = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSigner',
  encode(message: MsgSubmitSyncActionSigner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (!message.syncId.isZero()) {
      writer.uint32(16).uint64(message.syncId);
    }
    if (message.chain !== '') {
      writer.uint32(26).string(message.chain);
    }
    if (message.actorAddress !== '') {
      writer.uint32(34).string(message.actorAddress);
    }
    if (message.ownerAddress !== '') {
      writer.uint32(42).string(message.ownerAddress);
    }
    if (message.expireEpoch !== '') {
      writer.uint32(50).string(message.expireEpoch);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitSyncActionSigner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitSyncActionSigner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.syncId = reader.uint64() as Long;
        break;
      case 3:
        message.chain = reader.string();
        break;
      case 4:
        message.actorAddress = reader.string();
        break;
      case 5:
        message.ownerAddress = reader.string();
        break;
      case 6:
        message.expireEpoch = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitSyncActionSigner>): MsgSubmitSyncActionSigner {
    const message = createBaseMsgSubmitSyncActionSigner();
    message.creator = object.creator ?? '';
    message.syncId = object.syncId !== undefined && object.syncId !== null ? Long.fromValue(object.syncId) : Long.UZERO;
    message.chain = object.chain ?? '';
    message.actorAddress = object.actorAddress ?? '';
    message.ownerAddress = object.ownerAddress ?? '';
    message.expireEpoch = object.expireEpoch ?? '';
    return message;
  },
  fromAmino(object: MsgSubmitSyncActionSignerAmino): MsgSubmitSyncActionSigner {
    const message = createBaseMsgSubmitSyncActionSigner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.syncId !== undefined && object.syncId !== null) {
      message.syncId = Long.fromString(object.syncId);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.actorAddress !== undefined && object.actorAddress !== null) {
      message.actorAddress = object.actorAddress;
    }
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    }
    if (object.expire_epoch !== undefined && object.expire_epoch !== null) {
      message.expireEpoch = object.expire_epoch;
    }
    return message;
  },
  toAmino(message: MsgSubmitSyncActionSigner): MsgSubmitSyncActionSignerAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.syncId = !message.syncId.isZero() ? message.syncId?.toString() : undefined;
    obj.chain = message.chain === '' ? undefined : message.chain;
    obj.actorAddress = message.actorAddress === '' ? undefined : message.actorAddress;
    obj.ownerAddress = message.ownerAddress === '' ? undefined : message.ownerAddress;
    obj.expire_epoch = message.expireEpoch === '' ? undefined : message.expireEpoch;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitSyncActionSignerAminoMsg): MsgSubmitSyncActionSigner {
    return MsgSubmitSyncActionSigner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitSyncActionSignerProtoMsg): MsgSubmitSyncActionSigner {
    return MsgSubmitSyncActionSigner.decode(message.value);
  },
  toProto(message: MsgSubmitSyncActionSigner): Uint8Array {
    return MsgSubmitSyncActionSigner.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitSyncActionSigner): MsgSubmitSyncActionSignerProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSigner',
      value: MsgSubmitSyncActionSigner.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitSyncActionSignerResponse(): MsgSubmitSyncActionSignerResponse {
  return {
    verifyRequestID: Long.UZERO,
    expireAt: ''
  };
}
export const MsgSubmitSyncActionSignerResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSignerResponse',
  encode(message: MsgSubmitSyncActionSignerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.verifyRequestID.isZero()) {
      writer.uint32(8).uint64(message.verifyRequestID);
    }
    if (message.expireAt !== '') {
      writer.uint32(18).string(message.expireAt);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitSyncActionSignerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitSyncActionSignerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.verifyRequestID = reader.uint64() as Long;
        break;
      case 2:
        message.expireAt = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitSyncActionSignerResponse>): MsgSubmitSyncActionSignerResponse {
    const message = createBaseMsgSubmitSyncActionSignerResponse();
    message.verifyRequestID = object.verifyRequestID !== undefined && object.verifyRequestID !== null ? Long.fromValue(object.verifyRequestID) : Long.UZERO;
    message.expireAt = object.expireAt ?? '';
    return message;
  },
  fromAmino(object: MsgSubmitSyncActionSignerResponseAmino): MsgSubmitSyncActionSignerResponse {
    const message = createBaseMsgSubmitSyncActionSignerResponse();
    if (object.verifyRequestID !== undefined && object.verifyRequestID !== null) {
      message.verifyRequestID = Long.fromString(object.verifyRequestID);
    }
    if (object.expireAt !== undefined && object.expireAt !== null) {
      message.expireAt = object.expireAt;
    }
    return message;
  },
  toAmino(message: MsgSubmitSyncActionSignerResponse): MsgSubmitSyncActionSignerResponseAmino {
    const obj: any = {};
    obj.verifyRequestID = !message.verifyRequestID.isZero() ? message.verifyRequestID?.toString() : undefined;
    obj.expireAt = message.expireAt === '' ? undefined : message.expireAt;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitSyncActionSignerResponseAminoMsg): MsgSubmitSyncActionSignerResponse {
    return MsgSubmitSyncActionSignerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitSyncActionSignerResponseProtoMsg): MsgSubmitSyncActionSignerResponse {
    return MsgSubmitSyncActionSignerResponse.decode(message.value);
  },
  toProto(message: MsgSubmitSyncActionSignerResponse): Uint8Array {
    return MsgSubmitSyncActionSignerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitSyncActionSignerResponse): MsgSubmitSyncActionSignerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MsgSubmitSyncActionSignerResponse',
      value: MsgSubmitSyncActionSignerResponse.encode(message).finish()
    };
  }
};