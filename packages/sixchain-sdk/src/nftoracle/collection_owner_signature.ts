//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface CollectionOwnerSignature {
  signature: string;
  message: string;
}
export interface CollectionOwnerSignatureProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.CollectionOwnerSignature';
  value: Uint8Array;
}
export interface CollectionOwnerSignatureAmino {
  signature?: string;
  message?: string;
}
export interface CollectionOwnerSignatureAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.CollectionOwnerSignature';
  value: CollectionOwnerSignatureAmino;
}
export interface CollectionOwnerSignatureSDKType {
  signature: string;
  message: string;
}
function createBaseCollectionOwnerSignature(): CollectionOwnerSignature {
  return {
    signature: '',
    message: ''
  };
}
export const CollectionOwnerSignature = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.CollectionOwnerSignature',
  encode(message: CollectionOwnerSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature !== '') {
      writer.uint32(10).string(message.signature);
    }
    if (message.message !== '') {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CollectionOwnerSignature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionOwnerSignature();
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
  fromPartial(object: Partial<CollectionOwnerSignature>): CollectionOwnerSignature {
    const message = createBaseCollectionOwnerSignature();
    message.signature = object.signature ?? '';
    message.message = object.message ?? '';
    return message;
  },
  fromAmino(object: CollectionOwnerSignatureAmino): CollectionOwnerSignature {
    const message = createBaseCollectionOwnerSignature();
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: CollectionOwnerSignature): CollectionOwnerSignatureAmino {
    const obj: any = {};
    obj.signature = message.signature === '' ? undefined : message.signature;
    obj.message = message.message === '' ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: CollectionOwnerSignatureAminoMsg): CollectionOwnerSignature {
    return CollectionOwnerSignature.fromAmino(object.value);
  },
  fromProtoMsg(message: CollectionOwnerSignatureProtoMsg): CollectionOwnerSignature {
    return CollectionOwnerSignature.decode(message.value);
  },
  toProto(message: CollectionOwnerSignature): Uint8Array {
    return CollectionOwnerSignature.encode(message).finish();
  },
  toProtoMsg(message: CollectionOwnerSignature): CollectionOwnerSignatureProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.CollectionOwnerSignature',
      value: CollectionOwnerSignature.encode(message).finish()
    };
  }
};