//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { base64FromBytes,bytesFromBase64 } from '../helpers';
import { Trait, TraitAmino, TraitSDKType } from './opensea';
export enum RequestStatus {
  PENDING = 0,
  SUCCESS_WITH_CONSENSUS = 1,
  FAILED_WITHOUT_CONSENSUS = 2,
  EXPIRED = 3,
  FAILED_ON_EXECUTION = 4,
  FAILED_REJECT_BY_CONSENSUS = 5,
  UNRECOGNIZED = -1,
}
export const RequestStatusSDKType = RequestStatus;
export const RequestStatusAmino = RequestStatus;
export function requestStatusFromJSON(object: any): RequestStatus {
  switch (object) {
  case 0:
  case 'PENDING':
    return RequestStatus.PENDING;
  case 1:
  case 'SUCCESS_WITH_CONSENSUS':
    return RequestStatus.SUCCESS_WITH_CONSENSUS;
  case 2:
  case 'FAILED_WITHOUT_CONSENSUS':
    return RequestStatus.FAILED_WITHOUT_CONSENSUS;
  case 3:
  case 'EXPIRED':
    return RequestStatus.EXPIRED;
  case 4:
  case 'FAILED_ON_EXECUTION':
    return RequestStatus.FAILED_ON_EXECUTION;
  case 5:
  case 'FAILED_REJECT_BY_CONSENSUS':
    return RequestStatus.FAILED_REJECT_BY_CONSENSUS;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return RequestStatus.UNRECOGNIZED;
  }
}
export function requestStatusToJSON(object: RequestStatus): string {
  switch (object) {
  case RequestStatus.PENDING:
    return 'PENDING';
  case RequestStatus.SUCCESS_WITH_CONSENSUS:
    return 'SUCCESS_WITH_CONSENSUS';
  case RequestStatus.FAILED_WITHOUT_CONSENSUS:
    return 'FAILED_WITHOUT_CONSENSUS';
  case RequestStatus.EXPIRED:
    return 'EXPIRED';
  case RequestStatus.FAILED_ON_EXECUTION:
    return 'FAILED_ON_EXECUTION';
  case RequestStatus.FAILED_REJECT_BY_CONSENSUS:
    return 'FAILED_REJECT_BY_CONSENSUS';
  case RequestStatus.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
export interface NftOriginData {
  image: string;
  holderAddress: string;
  traits: Trait[];
}
export interface NftOriginDataProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.NftOriginData';
  value: Uint8Array;
}
export interface NftOriginDataAmino {
  image?: string;
  holder_address?: string;
  traits?: TraitAmino[];
}
export interface NftOriginDataAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.NftOriginData';
  value: NftOriginDataAmino;
}
export interface NftOriginDataSDKType {
  image: string;
  holder_address: string;
  traits: TraitSDKType[];
}
export interface DataHash {
  originData?: NftOriginData;
  hash: Uint8Array;
  confirmers: string[];
}
export interface DataHashProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.DataHash';
  value: Uint8Array;
}
export interface DataHashAmino {
  origin_data?: NftOriginDataAmino;
  hash?: string;
  confirmers?: string[];
}
export interface DataHashAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.DataHash';
  value: DataHashAmino;
}
export interface DataHashSDKType {
  origin_data?: NftOriginDataSDKType;
  hash: Uint8Array;
  confirmers: string[];
}
function createBaseNftOriginData(): NftOriginData {
  return {
    image: '',
    holderAddress: '',
    traits: []
  };
}
export const NftOriginData = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.NftOriginData',
  encode(message: NftOriginData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.image !== '') {
      writer.uint32(10).string(message.image);
    }
    if (message.holderAddress !== '') {
      writer.uint32(18).string(message.holderAddress);
    }
    for (const v of message.traits) {
      Trait.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NftOriginData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftOriginData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.image = reader.string();
        break;
      case 2:
        message.holderAddress = reader.string();
        break;
      case 3:
        message.traits.push(Trait.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NftOriginData>): NftOriginData {
    const message = createBaseNftOriginData();
    message.image = object.image ?? '';
    message.holderAddress = object.holderAddress ?? '';
    message.traits = object.traits?.map(e => Trait.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: NftOriginDataAmino): NftOriginData {
    const message = createBaseNftOriginData();
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    }
    if (object.holder_address !== undefined && object.holder_address !== null) {
      message.holderAddress = object.holder_address;
    }
    message.traits = object.traits?.map(e => Trait.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: NftOriginData): NftOriginDataAmino {
    const obj: any = {};
    obj.image = message.image === '' ? undefined : message.image;
    obj.holder_address = message.holderAddress === '' ? undefined : message.holderAddress;
    if (message.traits) {
      obj.traits = message.traits.map(e => e ? Trait.toAmino(e) : undefined);
    } else {
      obj.traits = message.traits;
    }
    return obj;
  },
  fromAminoMsg(object: NftOriginDataAminoMsg): NftOriginData {
    return NftOriginData.fromAmino(object.value);
  },
  fromProtoMsg(message: NftOriginDataProtoMsg): NftOriginData {
    return NftOriginData.decode(message.value);
  },
  toProto(message: NftOriginData): Uint8Array {
    return NftOriginData.encode(message).finish();
  },
  toProtoMsg(message: NftOriginData): NftOriginDataProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.NftOriginData',
      value: NftOriginData.encode(message).finish()
    };
  }
};
function createBaseDataHash(): DataHash {
  return {
    originData: undefined,
    hash: new Uint8Array(),
    confirmers: []
  };
}
export const DataHash = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.DataHash',
  encode(message: DataHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originData !== undefined) {
      NftOriginData.encode(message.originData, writer.uint32(10).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    for (const v of message.confirmers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DataHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.originData = NftOriginData.decode(reader, reader.uint32());
        break;
      case 2:
        message.hash = reader.bytes();
        break;
      case 3:
        message.confirmers.push(reader.string());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DataHash>): DataHash {
    const message = createBaseDataHash();
    message.originData = object.originData !== undefined && object.originData !== null ? NftOriginData.fromPartial(object.originData) : undefined;
    message.hash = object.hash ?? new Uint8Array();
    message.confirmers = object.confirmers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DataHashAmino): DataHash {
    const message = createBaseDataHash();
    if (object.origin_data !== undefined && object.origin_data !== null) {
      message.originData = NftOriginData.fromAmino(object.origin_data);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    message.confirmers = object.confirmers?.map(e => e) || [];
    return message;
  },
  toAmino(message: DataHash): DataHashAmino {
    const obj: any = {};
    obj.origin_data = message.originData ? NftOriginData.toAmino(message.originData) : undefined;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    if (message.confirmers) {
      obj.confirmers = message.confirmers.map(e => e);
    } else {
      obj.confirmers = message.confirmers;
    }
    return obj;
  },
  fromAminoMsg(object: DataHashAminoMsg): DataHash {
    return DataHash.fromAmino(object.value);
  },
  fromProtoMsg(message: DataHashProtoMsg): DataHash {
    return DataHash.decode(message.value);
  },
  toProto(message: DataHash): Uint8Array {
    return DataHash.encode(message).finish();
  },
  toProtoMsg(message: DataHash): DataHashProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.DataHash',
      value: DataHash.encode(message).finish()
    };
  }
};