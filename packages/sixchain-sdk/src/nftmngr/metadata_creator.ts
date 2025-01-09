//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface MapTokenToMinter {
  tokenId: string;
  minter: string;
}
export interface MapTokenToMinterProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MapTokenToMinter';
  value: Uint8Array;
}
export interface MapTokenToMinterAmino {
  token_id?: string;
  minter?: string;
}
export interface MapTokenToMinterAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MapTokenToMinter';
  value: MapTokenToMinterAmino;
}
export interface MapTokenToMinterSDKType {
  token_id: string;
  minter: string;
}
export interface MetadataCreator {
  nftSchemaCode: string;
  metadataMintedBy: MapTokenToMinter[];
}
export interface MetadataCreatorProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MetadataCreator';
  value: Uint8Array;
}
export interface MetadataCreatorAmino {
  nftSchemaCode?: string;
  metadataMintedBy?: MapTokenToMinterAmino[];
}
export interface MetadataCreatorAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MetadataCreator';
  value: MetadataCreatorAmino;
}
export interface MetadataCreatorSDKType {
  nftSchemaCode: string;
  metadataMintedBy: MapTokenToMinterSDKType[];
}
function createBaseMapTokenToMinter(): MapTokenToMinter {
  return {
    tokenId: '',
    minter: ''
  };
}
export const MapTokenToMinter = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MapTokenToMinter',
  encode(message: MapTokenToMinter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== '') {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.minter !== '') {
      writer.uint32(18).string(message.minter);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MapTokenToMinter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapTokenToMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.tokenId = reader.string();
        break;
      case 2:
        message.minter = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MapTokenToMinter>): MapTokenToMinter {
    const message = createBaseMapTokenToMinter();
    message.tokenId = object.tokenId ?? '';
    message.minter = object.minter ?? '';
    return message;
  },
  fromAmino(object: MapTokenToMinterAmino): MapTokenToMinter {
    const message = createBaseMapTokenToMinter();
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    return message;
  },
  toAmino(message: MapTokenToMinter): MapTokenToMinterAmino {
    const obj: any = {};
    obj.token_id = message.tokenId === '' ? undefined : message.tokenId;
    obj.minter = message.minter === '' ? undefined : message.minter;
    return obj;
  },
  fromAminoMsg(object: MapTokenToMinterAminoMsg): MapTokenToMinter {
    return MapTokenToMinter.fromAmino(object.value);
  },
  fromProtoMsg(message: MapTokenToMinterProtoMsg): MapTokenToMinter {
    return MapTokenToMinter.decode(message.value);
  },
  toProto(message: MapTokenToMinter): Uint8Array {
    return MapTokenToMinter.encode(message).finish();
  },
  toProtoMsg(message: MapTokenToMinter): MapTokenToMinterProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MapTokenToMinter',
      value: MapTokenToMinter.encode(message).finish()
    };
  }
};
function createBaseMetadataCreator(): MetadataCreator {
  return {
    nftSchemaCode: '',
    metadataMintedBy: []
  };
}
export const MetadataCreator = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MetadataCreator',
  encode(message: MetadataCreator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.metadataMintedBy) {
      MapTokenToMinter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MetadataCreator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataCreator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.metadataMintedBy.push(MapTokenToMinter.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MetadataCreator>): MetadataCreator {
    const message = createBaseMetadataCreator();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.metadataMintedBy = object.metadataMintedBy?.map(e => MapTokenToMinter.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MetadataCreatorAmino): MetadataCreator {
    const message = createBaseMetadataCreator();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.metadataMintedBy = object.metadataMintedBy?.map(e => MapTokenToMinter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MetadataCreator): MetadataCreatorAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    if (message.metadataMintedBy) {
      obj.metadataMintedBy = message.metadataMintedBy.map(e => e ? MapTokenToMinter.toAmino(e) : undefined);
    } else {
      obj.metadataMintedBy = message.metadataMintedBy;
    }
    return obj;
  },
  fromAminoMsg(object: MetadataCreatorAminoMsg): MetadataCreator {
    return MetadataCreator.fromAmino(object.value);
  },
  fromProtoMsg(message: MetadataCreatorProtoMsg): MetadataCreator {
    return MetadataCreator.decode(message.value);
  },
  toProto(message: MetadataCreator): Uint8Array {
    return MetadataCreator.encode(message).finish();
  },
  toProtoMsg(message: MetadataCreator): MetadataCreatorProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MetadataCreator',
      value: MetadataCreator.encode(message).finish()
    };
  }
};