//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Long } from '../helpers';
import { ActionOracleRequest, ActionOracleRequestAmino, ActionOracleRequestSDKType } from './action_request';
import { ActionSigner, ActionSignerAmino, ActionSignerSDKType } from './action_signer';
import { ActionSignerConfig, ActionSignerConfigAmino, ActionSignerConfigSDKType } from './action_signer_config';
import { BindedSigner, BindedSignerAmino, BindedSignerSDKType } from './binded_signer';
import { CollectionOwnerRequest, CollectionOwnerRequestAmino, CollectionOwnerRequestSDKType } from './collection_owner_request';
import { MintRequest, MintRequestAmino, MintRequestSDKType } from './mint_request';
import { OracleConfig, OracleConfigAmino, OracleConfigSDKType } from './oracle_config';
import { Params, ParamsAmino, ParamsSDKType } from './params';
import { SyncActionSigner, SyncActionSignerAmino, SyncActionSignerSDKType } from './sync_action_signer';
/** GenesisState defines the nftoracle module's genesis state. */
export interface GenesisState {
  params: Params;
  mintRequestList: MintRequest[];
  mintRequestCount: Long;
  actionRequestList: ActionOracleRequest[];
  actionRequestCount: Long;
  collectionOwnerRequestList: CollectionOwnerRequest[];
  collectionOwnerRequestCount: Long;
  oracleConfig?: OracleConfig;
  actionSignerList: ActionSigner[];
  bindedSignerList: BindedSigner[];
  actionSignerConfigList: ActionSignerConfig[];
  syncActionSignerList: SyncActionSigner[];
  syncActionSignerCount: Long;
}
export interface GenesisStateProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.GenesisState';
  value: Uint8Array;
}
/** GenesisState defines the nftoracle module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  mintRequestList?: MintRequestAmino[];
  mintRequestCount?: string;
  actionRequestList?: ActionOracleRequestAmino[];
  actionRequestCount?: string;
  collectionOwnerRequestList?: CollectionOwnerRequestAmino[];
  collectionOwnerRequestCount?: string;
  oracle_config?: OracleConfigAmino;
  actionSignerList?: ActionSignerAmino[];
  bindedSignerList?: BindedSignerAmino[];
  actionSignerConfigList?: ActionSignerConfigAmino[];
  syncActionSignerList?: SyncActionSignerAmino[];
  syncActionSignerCount?: string;
}
export interface GenesisStateAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.GenesisState';
  value: GenesisStateAmino;
}
/** GenesisState defines the nftoracle module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  mintRequestList: MintRequestSDKType[];
  mintRequestCount: Long;
  actionRequestList: ActionOracleRequestSDKType[];
  actionRequestCount: Long;
  collectionOwnerRequestList: CollectionOwnerRequestSDKType[];
  collectionOwnerRequestCount: Long;
  oracle_config?: OracleConfigSDKType;
  actionSignerList: ActionSignerSDKType[];
  bindedSignerList: BindedSignerSDKType[];
  actionSignerConfigList: ActionSignerConfigSDKType[];
  syncActionSignerList: SyncActionSignerSDKType[];
  syncActionSignerCount: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    mintRequestList: [],
    mintRequestCount: Long.UZERO,
    actionRequestList: [],
    actionRequestCount: Long.UZERO,
    collectionOwnerRequestList: [],
    collectionOwnerRequestCount: Long.UZERO,
    oracleConfig: undefined,
    actionSignerList: [],
    bindedSignerList: [],
    actionSignerConfigList: [],
    syncActionSignerList: [],
    syncActionSignerCount: Long.UZERO
  };
}
export const GenesisState = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.GenesisState',
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.mintRequestList) {
      MintRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.mintRequestCount.isZero()) {
      writer.uint32(24).uint64(message.mintRequestCount);
    }
    for (const v of message.actionRequestList) {
      ActionOracleRequest.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.actionRequestCount.isZero()) {
      writer.uint32(40).uint64(message.actionRequestCount);
    }
    for (const v of message.collectionOwnerRequestList) {
      CollectionOwnerRequest.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (!message.collectionOwnerRequestCount.isZero()) {
      writer.uint32(56).uint64(message.collectionOwnerRequestCount);
    }
    if (message.oracleConfig !== undefined) {
      OracleConfig.encode(message.oracleConfig, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.actionSignerList) {
      ActionSigner.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.bindedSignerList) {
      BindedSigner.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.actionSignerConfigList) {
      ActionSignerConfig.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.syncActionSignerList) {
      SyncActionSigner.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (!message.syncActionSignerCount.isZero()) {
      writer.uint32(120).uint64(message.syncActionSignerCount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.params = Params.decode(reader, reader.uint32());
        break;
      case 2:
        message.mintRequestList.push(MintRequest.decode(reader, reader.uint32()));
        break;
      case 3:
        message.mintRequestCount = reader.uint64() as Long;
        break;
      case 4:
        message.actionRequestList.push(ActionOracleRequest.decode(reader, reader.uint32()));
        break;
      case 5:
        message.actionRequestCount = reader.uint64() as Long;
        break;
      case 6:
        message.collectionOwnerRequestList.push(CollectionOwnerRequest.decode(reader, reader.uint32()));
        break;
      case 7:
        message.collectionOwnerRequestCount = reader.uint64() as Long;
        break;
      case 8:
        message.oracleConfig = OracleConfig.decode(reader, reader.uint32());
        break;
      case 9:
        message.actionSignerList.push(ActionSigner.decode(reader, reader.uint32()));
        break;
      case 10:
        message.bindedSignerList.push(BindedSigner.decode(reader, reader.uint32()));
        break;
      case 13:
        message.actionSignerConfigList.push(ActionSignerConfig.decode(reader, reader.uint32()));
        break;
      case 14:
        message.syncActionSignerList.push(SyncActionSigner.decode(reader, reader.uint32()));
        break;
      case 15:
        message.syncActionSignerCount = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.mintRequestList = object.mintRequestList?.map(e => MintRequest.fromPartial(e)) || [];
    message.mintRequestCount = object.mintRequestCount !== undefined && object.mintRequestCount !== null ? Long.fromValue(object.mintRequestCount) : Long.UZERO;
    message.actionRequestList = object.actionRequestList?.map(e => ActionOracleRequest.fromPartial(e)) || [];
    message.actionRequestCount = object.actionRequestCount !== undefined && object.actionRequestCount !== null ? Long.fromValue(object.actionRequestCount) : Long.UZERO;
    message.collectionOwnerRequestList = object.collectionOwnerRequestList?.map(e => CollectionOwnerRequest.fromPartial(e)) || [];
    message.collectionOwnerRequestCount = object.collectionOwnerRequestCount !== undefined && object.collectionOwnerRequestCount !== null ? Long.fromValue(object.collectionOwnerRequestCount) : Long.UZERO;
    message.oracleConfig = object.oracleConfig !== undefined && object.oracleConfig !== null ? OracleConfig.fromPartial(object.oracleConfig) : undefined;
    message.actionSignerList = object.actionSignerList?.map(e => ActionSigner.fromPartial(e)) || [];
    message.bindedSignerList = object.bindedSignerList?.map(e => BindedSigner.fromPartial(e)) || [];
    message.actionSignerConfigList = object.actionSignerConfigList?.map(e => ActionSignerConfig.fromPartial(e)) || [];
    message.syncActionSignerList = object.syncActionSignerList?.map(e => SyncActionSigner.fromPartial(e)) || [];
    message.syncActionSignerCount = object.syncActionSignerCount !== undefined && object.syncActionSignerCount !== null ? Long.fromValue(object.syncActionSignerCount) : Long.UZERO;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.mintRequestList = object.mintRequestList?.map(e => MintRequest.fromAmino(e)) || [];
    if (object.mintRequestCount !== undefined && object.mintRequestCount !== null) {
      message.mintRequestCount = Long.fromString(object.mintRequestCount);
    }
    message.actionRequestList = object.actionRequestList?.map(e => ActionOracleRequest.fromAmino(e)) || [];
    if (object.actionRequestCount !== undefined && object.actionRequestCount !== null) {
      message.actionRequestCount = Long.fromString(object.actionRequestCount);
    }
    message.collectionOwnerRequestList = object.collectionOwnerRequestList?.map(e => CollectionOwnerRequest.fromAmino(e)) || [];
    if (object.collectionOwnerRequestCount !== undefined && object.collectionOwnerRequestCount !== null) {
      message.collectionOwnerRequestCount = Long.fromString(object.collectionOwnerRequestCount);
    }
    if (object.oracle_config !== undefined && object.oracle_config !== null) {
      message.oracleConfig = OracleConfig.fromAmino(object.oracle_config);
    }
    message.actionSignerList = object.actionSignerList?.map(e => ActionSigner.fromAmino(e)) || [];
    message.bindedSignerList = object.bindedSignerList?.map(e => BindedSigner.fromAmino(e)) || [];
    message.actionSignerConfigList = object.actionSignerConfigList?.map(e => ActionSignerConfig.fromAmino(e)) || [];
    message.syncActionSignerList = object.syncActionSignerList?.map(e => SyncActionSigner.fromAmino(e)) || [];
    if (object.syncActionSignerCount !== undefined && object.syncActionSignerCount !== null) {
      message.syncActionSignerCount = Long.fromString(object.syncActionSignerCount);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.mintRequestList) {
      obj.mintRequestList = message.mintRequestList.map(e => e ? MintRequest.toAmino(e) : undefined);
    } else {
      obj.mintRequestList = message.mintRequestList;
    }
    obj.mintRequestCount = !message.mintRequestCount.isZero() ? message.mintRequestCount?.toString() : undefined;
    if (message.actionRequestList) {
      obj.actionRequestList = message.actionRequestList.map(e => e ? ActionOracleRequest.toAmino(e) : undefined);
    } else {
      obj.actionRequestList = message.actionRequestList;
    }
    obj.actionRequestCount = !message.actionRequestCount.isZero() ? message.actionRequestCount?.toString() : undefined;
    if (message.collectionOwnerRequestList) {
      obj.collectionOwnerRequestList = message.collectionOwnerRequestList.map(e => e ? CollectionOwnerRequest.toAmino(e) : undefined);
    } else {
      obj.collectionOwnerRequestList = message.collectionOwnerRequestList;
    }
    obj.collectionOwnerRequestCount = !message.collectionOwnerRequestCount.isZero() ? message.collectionOwnerRequestCount?.toString() : undefined;
    obj.oracle_config = message.oracleConfig ? OracleConfig.toAmino(message.oracleConfig) : undefined;
    if (message.actionSignerList) {
      obj.actionSignerList = message.actionSignerList.map(e => e ? ActionSigner.toAmino(e) : undefined);
    } else {
      obj.actionSignerList = message.actionSignerList;
    }
    if (message.bindedSignerList) {
      obj.bindedSignerList = message.bindedSignerList.map(e => e ? BindedSigner.toAmino(e) : undefined);
    } else {
      obj.bindedSignerList = message.bindedSignerList;
    }
    if (message.actionSignerConfigList) {
      obj.actionSignerConfigList = message.actionSignerConfigList.map(e => e ? ActionSignerConfig.toAmino(e) : undefined);
    } else {
      obj.actionSignerConfigList = message.actionSignerConfigList;
    }
    if (message.syncActionSignerList) {
      obj.syncActionSignerList = message.syncActionSignerList.map(e => e ? SyncActionSigner.toAmino(e) : undefined);
    } else {
      obj.syncActionSignerList = message.syncActionSignerList;
    }
    obj.syncActionSignerCount = !message.syncActionSignerCount.isZero() ? message.syncActionSignerCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.GenesisState',
      value: GenesisState.encode(message).finish()
    };
  }
};