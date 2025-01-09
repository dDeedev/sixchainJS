//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Long } from '../helpers';
import { NftData, NftDataAmino, NftDataSDKType } from './nft_data';
export interface NftCollection {
  nftSchemaCode: string;
  total: Long;
  nftDatas: NftData[];
}
export interface NftCollectionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NftCollection';
  value: Uint8Array;
}
export interface NftCollectionAmino {
  nftSchemaCode?: string;
  total?: string;
  nftDatas?: NftDataAmino[];
}
export interface NftCollectionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.NftCollection';
  value: NftCollectionAmino;
}
export interface NftCollectionSDKType {
  nftSchemaCode: string;
  total: Long;
  nftDatas: NftDataSDKType[];
}
function createBaseNftCollection(): NftCollection {
  return {
    nftSchemaCode: '',
    total: Long.UZERO,
    nftDatas: []
  };
}
export const NftCollection = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NftCollection',
  encode(message: NftCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (!message.total.isZero()) {
      writer.uint32(16).uint64(message.total);
    }
    for (const v of message.nftDatas) {
      NftData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NftCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.total = reader.uint64() as Long;
        break;
      case 3:
        message.nftDatas.push(NftData.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NftCollection>): NftCollection {
    const message = createBaseNftCollection();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.UZERO;
    message.nftDatas = object.nftDatas?.map(e => NftData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: NftCollectionAmino): NftCollection {
    const message = createBaseNftCollection();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = Long.fromString(object.total);
    }
    message.nftDatas = object.nftDatas?.map(e => NftData.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: NftCollection): NftCollectionAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.total = !message.total.isZero() ? message.total?.toString() : undefined;
    if (message.nftDatas) {
      obj.nftDatas = message.nftDatas.map(e => e ? NftData.toAmino(e) : undefined);
    } else {
      obj.nftDatas = message.nftDatas;
    }
    return obj;
  },
  fromAminoMsg(object: NftCollectionAminoMsg): NftCollection {
    return NftCollection.fromAmino(object.value);
  },
  fromProtoMsg(message: NftCollectionProtoMsg): NftCollection {
    return NftCollection.decode(message.value);
  },
  toProto(message: NftCollection): Uint8Array {
    return NftCollection.encode(message).finish();
  },
  toProtoMsg(message: NftCollection): NftCollectionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NftCollection',
      value: NftCollection.encode(message).finish()
    };
  }
};