//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Action, ActionAmino, ActionSDKType } from './action';
import { AttributeDefinition, AttributeDefinitionAmino, AttributeDefinitionSDKType } from './attribute_definition';
export interface FlagStatus {
  statusName: string;
  statusValue: boolean;
}
export interface FlagStatusProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.FlagStatus';
  value: Uint8Array;
}
export interface FlagStatusAmino {
  status_name?: string;
  status_value?: boolean;
}
export interface FlagStatusAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.FlagStatus';
  value: FlagStatusAmino;
}
export interface FlagStatusSDKType {
  status_name: string;
  status_value: boolean;
}
export interface OnChainData {
  nftAttributes: AttributeDefinition[];
  tokenAttributes: AttributeDefinition[];
  actions: Action[];
  status: FlagStatus[];
}
export interface OnChainDataProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.OnChainData';
  value: Uint8Array;
}
export interface OnChainDataAmino {
  nft_attributes?: AttributeDefinitionAmino[];
  token_attributes?: AttributeDefinitionAmino[];
  actions?: ActionAmino[];
  status?: FlagStatusAmino[];
}
export interface OnChainDataAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.OnChainData';
  value: OnChainDataAmino;
}
export interface OnChainDataSDKType {
  nft_attributes: AttributeDefinitionSDKType[];
  token_attributes: AttributeDefinitionSDKType[];
  actions: ActionSDKType[];
  status: FlagStatusSDKType[];
}
function createBaseFlagStatus(): FlagStatus {
  return {
    statusName: '',
    statusValue: false
  };
}
export const FlagStatus = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.FlagStatus',
  encode(message: FlagStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusName !== '') {
      writer.uint32(10).string(message.statusName);
    }
    if (message.statusValue === true) {
      writer.uint32(16).bool(message.statusValue);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FlagStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlagStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.statusName = reader.string();
        break;
      case 2:
        message.statusValue = reader.bool();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FlagStatus>): FlagStatus {
    const message = createBaseFlagStatus();
    message.statusName = object.statusName ?? '';
    message.statusValue = object.statusValue ?? false;
    return message;
  },
  fromAmino(object: FlagStatusAmino): FlagStatus {
    const message = createBaseFlagStatus();
    if (object.status_name !== undefined && object.status_name !== null) {
      message.statusName = object.status_name;
    }
    if (object.status_value !== undefined && object.status_value !== null) {
      message.statusValue = object.status_value;
    }
    return message;
  },
  toAmino(message: FlagStatus): FlagStatusAmino {
    const obj: any = {};
    obj.status_name = message.statusName === '' ? undefined : message.statusName;
    obj.status_value = message.statusValue === false ? undefined : message.statusValue;
    return obj;
  },
  fromAminoMsg(object: FlagStatusAminoMsg): FlagStatus {
    return FlagStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: FlagStatusProtoMsg): FlagStatus {
    return FlagStatus.decode(message.value);
  },
  toProto(message: FlagStatus): Uint8Array {
    return FlagStatus.encode(message).finish();
  },
  toProtoMsg(message: FlagStatus): FlagStatusProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.FlagStatus',
      value: FlagStatus.encode(message).finish()
    };
  }
};
function createBaseOnChainData(): OnChainData {
  return {
    nftAttributes: [],
    tokenAttributes: [],
    actions: [],
    status: []
  };
}
export const OnChainData = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.OnChainData',
  encode(message: OnChainData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nftAttributes) {
      AttributeDefinition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenAttributes) {
      AttributeDefinition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.status) {
      FlagStatus.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OnChainData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOnChainData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftAttributes.push(AttributeDefinition.decode(reader, reader.uint32()));
        break;
      case 2:
        message.tokenAttributes.push(AttributeDefinition.decode(reader, reader.uint32()));
        break;
      case 3:
        message.actions.push(Action.decode(reader, reader.uint32()));
        break;
      case 4:
        message.status.push(FlagStatus.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OnChainData>): OnChainData {
    const message = createBaseOnChainData();
    message.nftAttributes = object.nftAttributes?.map(e => AttributeDefinition.fromPartial(e)) || [];
    message.tokenAttributes = object.tokenAttributes?.map(e => AttributeDefinition.fromPartial(e)) || [];
    message.actions = object.actions?.map(e => Action.fromPartial(e)) || [];
    message.status = object.status?.map(e => FlagStatus.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OnChainDataAmino): OnChainData {
    const message = createBaseOnChainData();
    message.nftAttributes = object.nft_attributes?.map(e => AttributeDefinition.fromAmino(e)) || [];
    message.tokenAttributes = object.token_attributes?.map(e => AttributeDefinition.fromAmino(e)) || [];
    message.actions = object.actions?.map(e => Action.fromAmino(e)) || [];
    message.status = object.status?.map(e => FlagStatus.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OnChainData): OnChainDataAmino {
    const obj: any = {};
    if (message.nftAttributes) {
      obj.nft_attributes = message.nftAttributes.map(e => e ? AttributeDefinition.toAmino(e) : undefined);
    } else {
      obj.nft_attributes = message.nftAttributes;
    }
    if (message.tokenAttributes) {
      obj.token_attributes = message.tokenAttributes.map(e => e ? AttributeDefinition.toAmino(e) : undefined);
    } else {
      obj.token_attributes = message.tokenAttributes;
    }
    if (message.actions) {
      obj.actions = message.actions.map(e => e ? Action.toAmino(e) : undefined);
    } else {
      obj.actions = message.actions;
    }
    if (message.status) {
      obj.status = message.status.map(e => e ? FlagStatus.toAmino(e) : undefined);
    } else {
      obj.status = message.status;
    }
    return obj;
  },
  fromAminoMsg(object: OnChainDataAminoMsg): OnChainData {
    return OnChainData.fromAmino(object.value);
  },
  fromProtoMsg(message: OnChainDataProtoMsg): OnChainData {
    return OnChainData.decode(message.value);
  },
  toProto(message: OnChainData): Uint8Array {
    return OnChainData.encode(message).finish();
  },
  toProtoMsg(message: OnChainData): OnChainDataProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.OnChainData',
      value: OnChainData.encode(message).finish()
    };
  }
};