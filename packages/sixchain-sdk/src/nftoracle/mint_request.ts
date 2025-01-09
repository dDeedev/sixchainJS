//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Timestamp } from '../google/protobuf/timestamp';
import { fromTimestamp,Long, toTimestamp } from '../helpers';
import { DataHash, DataHashAmino, DataHashSDKType,RequestStatus } from './request';
export interface MintRequest {
  id: Long;
  nftSchemaCode: string;
  tokenId: string;
  requiredConfirm: Long;
  status: RequestStatus;
  currentConfirm: Long;
  confirmers: string[];
  /** NftOriginData nft_origin_data = 8; */
  createdAt: Date;
  validUntil: Date;
  dataHashes: DataHash[];
  expiredHeight: Long;
}
export interface MintRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MintRequest';
  value: Uint8Array;
}
export interface MintRequestAmino {
  id?: string;
  nft_schema_code?: string;
  token_id?: string;
  required_confirm?: string;
  status?: RequestStatus;
  current_confirm?: string;
  confirmers?: string[];
  /** NftOriginData nft_origin_data = 8; */
  created_at?: string;
  valid_until?: string;
  data_hashes?: DataHashAmino[];
  expired_height?: string;
}
export interface MintRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.MintRequest';
  value: MintRequestAmino;
}
export interface MintRequestSDKType {
  id: Long;
  nft_schema_code: string;
  token_id: string;
  required_confirm: Long;
  status: RequestStatus;
  current_confirm: Long;
  confirmers: string[];
  created_at: Date;
  valid_until: Date;
  data_hashes: DataHashSDKType[];
  expired_height: Long;
}
function createBaseMintRequest(): MintRequest {
  return {
    id: Long.UZERO,
    nftSchemaCode: '',
    tokenId: '',
    requiredConfirm: Long.UZERO,
    status: 0,
    currentConfirm: Long.UZERO,
    confirmers: [],
    createdAt: new Date(),
    validUntil: new Date(),
    dataHashes: [],
    expiredHeight: Long.ZERO
  };
}
export const MintRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MintRequest',
  encode(message: MintRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (!message.currentConfirm.isZero()) {
      writer.uint32(48).uint64(message.currentConfirm);
    }
    for (const v of message.confirmers) {
      writer.uint32(58).string(v!);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
    }
    if (message.validUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.validUntil), writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.dataHashes) {
      DataHash.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (!message.expiredHeight.isZero()) {
      writer.uint32(88).int64(message.expiredHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MintRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintRequest();
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
      case 4:
        message.requiredConfirm = reader.uint64() as Long;
        break;
      case 5:
        message.status = reader.int32() as any;
        break;
      case 6:
        message.currentConfirm = reader.uint64() as Long;
        break;
      case 7:
        message.confirmers.push(reader.string());
        break;
      case 8:
        message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 9:
        message.validUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 10:
        message.dataHashes.push(DataHash.decode(reader, reader.uint32()));
        break;
      case 11:
        message.expiredHeight = reader.int64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MintRequest>): MintRequest {
    const message = createBaseMintRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? Long.fromValue(object.requiredConfirm) : Long.UZERO;
    message.status = object.status ?? 0;
    message.currentConfirm = object.currentConfirm !== undefined && object.currentConfirm !== null ? Long.fromValue(object.currentConfirm) : Long.UZERO;
    message.confirmers = object.confirmers?.map(e => e) || [];
    message.createdAt = object.createdAt ?? undefined;
    message.validUntil = object.validUntil ?? undefined;
    message.dataHashes = object.dataHashes?.map(e => DataHash.fromPartial(e)) || [];
    message.expiredHeight = object.expiredHeight !== undefined && object.expiredHeight !== null ? Long.fromValue(object.expiredHeight) : Long.ZERO;
    return message;
  },
  fromAmino(object: MintRequestAmino): MintRequest {
    const message = createBaseMintRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.required_confirm !== undefined && object.required_confirm !== null) {
      message.requiredConfirm = Long.fromString(object.required_confirm);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.current_confirm !== undefined && object.current_confirm !== null) {
      message.currentConfirm = Long.fromString(object.current_confirm);
    }
    message.confirmers = object.confirmers?.map(e => e) || [];
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    if (object.valid_until !== undefined && object.valid_until !== null) {
      message.validUntil = fromTimestamp(Timestamp.fromAmino(object.valid_until));
    }
    message.dataHashes = object.data_hashes?.map(e => DataHash.fromAmino(e)) || [];
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expiredHeight = Long.fromString(object.expired_height);
    }
    return message;
  },
  toAmino(message: MintRequest): MintRequestAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? message.id?.toString() : undefined;
    obj.nft_schema_code = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.token_id = message.tokenId === '' ? undefined : message.tokenId;
    obj.required_confirm = !message.requiredConfirm.isZero() ? message.requiredConfirm?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.current_confirm = !message.currentConfirm.isZero() ? message.currentConfirm?.toString() : undefined;
    if (message.confirmers) {
      obj.confirmers = message.confirmers.map(e => e);
    } else {
      obj.confirmers = message.confirmers;
    }
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.valid_until = message.validUntil ? Timestamp.toAmino(toTimestamp(message.validUntil)) : undefined;
    if (message.dataHashes) {
      obj.data_hashes = message.dataHashes.map(e => e ? DataHash.toAmino(e) : undefined);
    } else {
      obj.data_hashes = message.dataHashes;
    }
    obj.expired_height = !message.expiredHeight.isZero() ? message.expiredHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MintRequestAminoMsg): MintRequest {
    return MintRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MintRequestProtoMsg): MintRequest {
    return MintRequest.decode(message.value);
  },
  toProto(message: MintRequest): Uint8Array {
    return MintRequest.encode(message).finish();
  },
  toProtoMsg(message: MintRequest): MintRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.MintRequest',
      value: MintRequest.encode(message).finish()
    };
  }
};