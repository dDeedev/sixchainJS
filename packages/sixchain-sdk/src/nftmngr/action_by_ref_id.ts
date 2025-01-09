//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface ActionByRefId {
  refId: string;
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  action: string;
}
export interface ActionByRefIdProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionByRefId';
  value: Uint8Array;
}
export interface ActionByRefIdAmino {
  refId?: string;
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string;
  action?: string;
}
export interface ActionByRefIdAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.ActionByRefId';
  value: ActionByRefIdAmino;
}
export interface ActionByRefIdSDKType {
  refId: string;
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  action: string;
}
function createBaseActionByRefId(): ActionByRefId {
  return {
    refId: '',
    creator: '',
    nftSchemaCode: '',
    tokenId: '',
    action: ''
  };
}
export const ActionByRefId = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionByRefId',
  encode(message: ActionByRefId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refId !== '') {
      writer.uint32(10).string(message.refId);
    }
    if (message.creator !== '') {
      writer.uint32(18).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(26).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(34).string(message.tokenId);
    }
    if (message.action !== '') {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionByRefId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionByRefId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.refId = reader.string();
        break;
      case 2:
        message.creator = reader.string();
        break;
      case 3:
        message.nftSchemaCode = reader.string();
        break;
      case 4:
        message.tokenId = reader.string();
        break;
      case 5:
        message.action = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionByRefId>): ActionByRefId {
    const message = createBaseActionByRefId();
    message.refId = object.refId ?? '';
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    message.action = object.action ?? '';
    return message;
  },
  fromAmino(object: ActionByRefIdAmino): ActionByRefId {
    const message = createBaseActionByRefId();
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = object.refId;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    return message;
  },
  toAmino(message: ActionByRefId): ActionByRefIdAmino {
    const obj: any = {};
    obj.refId = message.refId === '' ? undefined : message.refId;
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === '' ? undefined : message.tokenId;
    obj.action = message.action === '' ? undefined : message.action;
    return obj;
  },
  fromAminoMsg(object: ActionByRefIdAminoMsg): ActionByRefId {
    return ActionByRefId.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionByRefIdProtoMsg): ActionByRefId {
    return ActionByRefId.decode(message.value);
  },
  toProto(message: ActionByRefId): Uint8Array {
    return ActionByRefId.encode(message).finish();
  },
  toProtoMsg(message: ActionByRefId): ActionByRefIdProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionByRefId',
      value: ActionByRefId.encode(message).finish()
    };
  }
};