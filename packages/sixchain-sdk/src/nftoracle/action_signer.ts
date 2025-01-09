//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Timestamp } from '../google/protobuf/timestamp';
import { fromTimestamp,toTimestamp } from '../helpers';
export enum CreationFlow {
  ORACLE = 0,
  INTERNAL_OWNER = 1,
  UNRECOGNIZED = -1,
}
export const CreationFlowSDKType = CreationFlow;
export const CreationFlowAmino = CreationFlow;
export function creationFlowFromJSON(object: any): CreationFlow {
  switch (object) {
  case 0:
  case 'ORACLE':
    return CreationFlow.ORACLE;
  case 1:
  case 'INTERNAL_OWNER':
    return CreationFlow.INTERNAL_OWNER;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return CreationFlow.UNRECOGNIZED;
  }
}
export function creationFlowToJSON(object: CreationFlow): string {
  switch (object) {
  case CreationFlow.ORACLE:
    return 'ORACLE';
  case CreationFlow.INTERNAL_OWNER:
    return 'INTERNAL_OWNER';
  case CreationFlow.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
export interface ActionSigner {
  actorAddress: string;
  ownerAddress: string;
  createdAt: Date;
  expiredAt: Date;
  creator: string;
  creationFlow: CreationFlow;
}
export interface ActionSignerProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionSigner';
  value: Uint8Array;
}
export interface ActionSignerAmino {
  actor_address?: string;
  owner_address?: string;
  created_at?: string;
  expired_at?: string;
  creator?: string;
  creation_flow?: CreationFlow;
}
export interface ActionSignerAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.ActionSigner';
  value: ActionSignerAmino;
}
export interface ActionSignerSDKType {
  actor_address: string;
  owner_address: string;
  created_at: Date;
  expired_at: Date;
  creator: string;
  creation_flow: CreationFlow;
}
export interface SetSignerSignature {
  signature: string;
  message: string;
}
export interface SetSignerSignatureProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.SetSignerSignature';
  value: Uint8Array;
}
export interface SetSignerSignatureAmino {
  signature?: string;
  message?: string;
}
export interface SetSignerSignatureAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.SetSignerSignature';
  value: SetSignerSignatureAmino;
}
export interface SetSignerSignatureSDKType {
  signature: string;
  message: string;
}
export interface SetSignerParams {
  ownerAddress: string;
  actorAddress: string;
  expiredAt: Date;
}
export interface SetSignerParamsProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.SetSignerParams';
  value: Uint8Array;
}
export interface SetSignerParamsAmino {
  owner_address?: string;
  actor_address?: string;
  expired_at?: string;
}
export interface SetSignerParamsAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.SetSignerParams';
  value: SetSignerParamsAmino;
}
export interface SetSignerParamsSDKType {
  owner_address: string;
  actor_address: string;
  expired_at: Date;
}
function createBaseActionSigner(): ActionSigner {
  return {
    actorAddress: '',
    ownerAddress: '',
    createdAt: new Date(),
    expiredAt: new Date(),
    creator: '',
    creationFlow: 0
  };
}
export const ActionSigner = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionSigner',
  encode(message: ActionSigner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actorAddress !== '') {
      writer.uint32(10).string(message.actorAddress);
    }
    if (message.ownerAddress !== '') {
      writer.uint32(18).string(message.ownerAddress);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.expiredAt !== undefined) {
      Timestamp.encode(toTimestamp(message.expiredAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.creator !== '') {
      writer.uint32(42).string(message.creator);
    }
    if (message.creationFlow !== 0) {
      writer.uint32(48).int32(message.creationFlow);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionSigner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSigner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actorAddress = reader.string();
        break;
      case 2:
        message.ownerAddress = reader.string();
        break;
      case 3:
        message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 4:
        message.expiredAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 5:
        message.creator = reader.string();
        break;
      case 6:
        message.creationFlow = reader.int32() as any;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionSigner>): ActionSigner {
    const message = createBaseActionSigner();
    message.actorAddress = object.actorAddress ?? '';
    message.ownerAddress = object.ownerAddress ?? '';
    message.createdAt = object.createdAt ?? undefined;
    message.expiredAt = object.expiredAt ?? undefined;
    message.creator = object.creator ?? '';
    message.creationFlow = object.creationFlow ?? 0;
    return message;
  },
  fromAmino(object: ActionSignerAmino): ActionSigner {
    const message = createBaseActionSigner();
    if (object.actor_address !== undefined && object.actor_address !== null) {
      message.actorAddress = object.actor_address;
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expiredAt = fromTimestamp(Timestamp.fromAmino(object.expired_at));
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.creation_flow !== undefined && object.creation_flow !== null) {
      message.creationFlow = object.creation_flow;
    }
    return message;
  },
  toAmino(message: ActionSigner): ActionSignerAmino {
    const obj: any = {};
    obj.actor_address = message.actorAddress === '' ? undefined : message.actorAddress;
    obj.owner_address = message.ownerAddress === '' ? undefined : message.ownerAddress;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.expired_at = message.expiredAt ? Timestamp.toAmino(toTimestamp(message.expiredAt)) : undefined;
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.creation_flow = message.creationFlow === 0 ? undefined : message.creationFlow;
    return obj;
  },
  fromAminoMsg(object: ActionSignerAminoMsg): ActionSigner {
    return ActionSigner.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionSignerProtoMsg): ActionSigner {
    return ActionSigner.decode(message.value);
  },
  toProto(message: ActionSigner): Uint8Array {
    return ActionSigner.encode(message).finish();
  },
  toProtoMsg(message: ActionSigner): ActionSignerProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionSigner',
      value: ActionSigner.encode(message).finish()
    };
  }
};
function createBaseSetSignerSignature(): SetSignerSignature {
  return {
    signature: '',
    message: ''
  };
}
export const SetSignerSignature = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.SetSignerSignature',
  encode(message: SetSignerSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature !== '') {
      writer.uint32(10).string(message.signature);
    }
    if (message.message !== '') {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SetSignerSignature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetSignerSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.signature = reader.string();
        break;
      case 2:
        message.message = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SetSignerSignature>): SetSignerSignature {
    const message = createBaseSetSignerSignature();
    message.signature = object.signature ?? '';
    message.message = object.message ?? '';
    return message;
  },
  fromAmino(object: SetSignerSignatureAmino): SetSignerSignature {
    const message = createBaseSetSignerSignature();
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: SetSignerSignature): SetSignerSignatureAmino {
    const obj: any = {};
    obj.signature = message.signature === '' ? undefined : message.signature;
    obj.message = message.message === '' ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: SetSignerSignatureAminoMsg): SetSignerSignature {
    return SetSignerSignature.fromAmino(object.value);
  },
  fromProtoMsg(message: SetSignerSignatureProtoMsg): SetSignerSignature {
    return SetSignerSignature.decode(message.value);
  },
  toProto(message: SetSignerSignature): Uint8Array {
    return SetSignerSignature.encode(message).finish();
  },
  toProtoMsg(message: SetSignerSignature): SetSignerSignatureProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.SetSignerSignature',
      value: SetSignerSignature.encode(message).finish()
    };
  }
};
function createBaseSetSignerParams(): SetSignerParams {
  return {
    ownerAddress: '',
    actorAddress: '',
    expiredAt: new Date()
  };
}
export const SetSignerParams = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.SetSignerParams',
  encode(message: SetSignerParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddress !== '') {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.actorAddress !== '') {
      writer.uint32(18).string(message.actorAddress);
    }
    if (message.expiredAt !== undefined) {
      Timestamp.encode(toTimestamp(message.expiredAt), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SetSignerParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetSignerParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.ownerAddress = reader.string();
        break;
      case 2:
        message.actorAddress = reader.string();
        break;
      case 3:
        message.expiredAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SetSignerParams>): SetSignerParams {
    const message = createBaseSetSignerParams();
    message.ownerAddress = object.ownerAddress ?? '';
    message.actorAddress = object.actorAddress ?? '';
    message.expiredAt = object.expiredAt ?? undefined;
    return message;
  },
  fromAmino(object: SetSignerParamsAmino): SetSignerParams {
    const message = createBaseSetSignerParams();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.actor_address !== undefined && object.actor_address !== null) {
      message.actorAddress = object.actor_address;
    }
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expiredAt = fromTimestamp(Timestamp.fromAmino(object.expired_at));
    }
    return message;
  },
  toAmino(message: SetSignerParams): SetSignerParamsAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === '' ? undefined : message.ownerAddress;
    obj.actor_address = message.actorAddress === '' ? undefined : message.actorAddress;
    obj.expired_at = message.expiredAt ? Timestamp.toAmino(toTimestamp(message.expiredAt)) : undefined;
    return obj;
  },
  fromAminoMsg(object: SetSignerParamsAminoMsg): SetSignerParams {
    return SetSignerParams.fromAmino(object.value);
  },
  fromProtoMsg(message: SetSignerParamsProtoMsg): SetSignerParams {
    return SetSignerParams.decode(message.value);
  },
  toProto(message: SetSignerParams): Uint8Array {
    return SetSignerParams.encode(message).finish();
  },
  toProtoMsg(message: SetSignerParams): SetSignerParamsProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.SetSignerParams',
      value: SetSignerParams.encode(message).finish()
    };
  }
};