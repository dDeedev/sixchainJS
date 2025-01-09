//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Timestamp } from '../google/protobuf/timestamp';
import { base64FromBytes,bytesFromBase64, fromTimestamp, Long, toTimestamp } from '../helpers';
import { RequestStatus } from './request';
export interface OriginContractParam {
  chain: string;
  contractAddress: string;
  contractOwner: string;
  requestExpire: Date;
}
export interface OriginContractParamProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.OriginContractParam';
  value: Uint8Array;
}
export interface OriginContractParamAmino {
  chain?: string;
  contract_address?: string;
  contract_owner?: string;
  request_expire?: string;
}
export interface OriginContractParamAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.OriginContractParam';
  value: OriginContractParamAmino;
}
export interface OriginContractParamSDKType {
  chain: string;
  contract_address: string;
  contract_owner: string;
  request_expire: Date;
}
export interface CollectionOwnerRequest {
  id: Long;
  nftSchemaCode: string;
  signer: string;
  requiredConfirm: Long;
  status: RequestStatus;
  currentConfirm: Long;
  confirmers: string[];
  createdAt: Date;
  validUntil: Date;
  contractInfo: OriginContractInfo[];
  expiredHeight: Long;
}
export interface CollectionOwnerRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.CollectionOwnerRequest';
  value: Uint8Array;
}
export interface CollectionOwnerRequestAmino {
  id?: string;
  nftSchemaCode?: string;
  signer?: string;
  required_confirm?: string;
  status?: RequestStatus;
  current_confirm?: string;
  confirmers?: string[];
  created_at?: string;
  valid_until?: string;
  contract_info?: OriginContractInfoAmino[];
  expired_height?: string;
}
export interface CollectionOwnerRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.CollectionOwnerRequest';
  value: CollectionOwnerRequestAmino;
}
export interface CollectionOwnerRequestSDKType {
  id: Long;
  nftSchemaCode: string;
  signer: string;
  required_confirm: Long;
  status: RequestStatus;
  current_confirm: Long;
  confirmers: string[];
  created_at: Date;
  valid_until: Date;
  contract_info: OriginContractInfoSDKType[];
  expired_height: Long;
}
export interface OriginContractInfo {
  contractOriginDataInfo?: OriginContractParam;
  hash: Uint8Array;
  confirmers: string[];
}
export interface OriginContractInfoProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.OriginContractInfo';
  value: Uint8Array;
}
export interface OriginContractInfoAmino {
  contractOriginDataInfo?: OriginContractParamAmino;
  hash?: string;
  confirmers?: string[];
}
export interface OriginContractInfoAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.OriginContractInfo';
  value: OriginContractInfoAmino;
}
export interface OriginContractInfoSDKType {
  contractOriginDataInfo?: OriginContractParamSDKType;
  hash: Uint8Array;
  confirmers: string[];
}
function createBaseOriginContractParam(): OriginContractParam {
  return {
    chain: '',
    contractAddress: '',
    contractOwner: '',
    requestExpire: new Date()
  };
}
export const OriginContractParam = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.OriginContractParam',
  encode(message: OriginContractParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== '') {
      writer.uint32(10).string(message.chain);
    }
    if (message.contractAddress !== '') {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.contractOwner !== '') {
      writer.uint32(26).string(message.contractOwner);
    }
    if (message.requestExpire !== undefined) {
      Timestamp.encode(toTimestamp(message.requestExpire), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OriginContractParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginContractParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.chain = reader.string();
        break;
      case 2:
        message.contractAddress = reader.string();
        break;
      case 3:
        message.contractOwner = reader.string();
        break;
      case 4:
        message.requestExpire = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OriginContractParam>): OriginContractParam {
    const message = createBaseOriginContractParam();
    message.chain = object.chain ?? '';
    message.contractAddress = object.contractAddress ?? '';
    message.contractOwner = object.contractOwner ?? '';
    message.requestExpire = object.requestExpire ?? undefined;
    return message;
  },
  fromAmino(object: OriginContractParamAmino): OriginContractParam {
    const message = createBaseOriginContractParam();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.contract_owner !== undefined && object.contract_owner !== null) {
      message.contractOwner = object.contract_owner;
    }
    if (object.request_expire !== undefined && object.request_expire !== null) {
      message.requestExpire = fromTimestamp(Timestamp.fromAmino(object.request_expire));
    }
    return message;
  },
  toAmino(message: OriginContractParam): OriginContractParamAmino {
    const obj: any = {};
    obj.chain = message.chain === '' ? undefined : message.chain;
    obj.contract_address = message.contractAddress === '' ? undefined : message.contractAddress;
    obj.contract_owner = message.contractOwner === '' ? undefined : message.contractOwner;
    obj.request_expire = message.requestExpire ? Timestamp.toAmino(toTimestamp(message.requestExpire)) : undefined;
    return obj;
  },
  fromAminoMsg(object: OriginContractParamAminoMsg): OriginContractParam {
    return OriginContractParam.fromAmino(object.value);
  },
  fromProtoMsg(message: OriginContractParamProtoMsg): OriginContractParam {
    return OriginContractParam.decode(message.value);
  },
  toProto(message: OriginContractParam): Uint8Array {
    return OriginContractParam.encode(message).finish();
  },
  toProtoMsg(message: OriginContractParam): OriginContractParamProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.OriginContractParam',
      value: OriginContractParam.encode(message).finish()
    };
  }
};
function createBaseCollectionOwnerRequest(): CollectionOwnerRequest {
  return {
    id: Long.UZERO,
    nftSchemaCode: '',
    signer: '',
    requiredConfirm: Long.UZERO,
    status: 0,
    currentConfirm: Long.UZERO,
    confirmers: [],
    createdAt: new Date(),
    validUntil: new Date(),
    contractInfo: [],
    expiredHeight: Long.ZERO
  };
}
export const CollectionOwnerRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.CollectionOwnerRequest',
  encode(message: CollectionOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.signer !== '') {
      writer.uint32(26).string(message.signer);
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
    for (const v of message.contractInfo) {
      OriginContractInfo.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (!message.expiredHeight.isZero()) {
      writer.uint32(88).int64(message.expiredHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CollectionOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionOwnerRequest();
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
        message.signer = reader.string();
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
        message.contractInfo.push(OriginContractInfo.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<CollectionOwnerRequest>): CollectionOwnerRequest {
    const message = createBaseCollectionOwnerRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.signer = object.signer ?? '';
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? Long.fromValue(object.requiredConfirm) : Long.UZERO;
    message.status = object.status ?? 0;
    message.currentConfirm = object.currentConfirm !== undefined && object.currentConfirm !== null ? Long.fromValue(object.currentConfirm) : Long.UZERO;
    message.confirmers = object.confirmers?.map(e => e) || [];
    message.createdAt = object.createdAt ?? undefined;
    message.validUntil = object.validUntil ?? undefined;
    message.contractInfo = object.contractInfo?.map(e => OriginContractInfo.fromPartial(e)) || [];
    message.expiredHeight = object.expiredHeight !== undefined && object.expiredHeight !== null ? Long.fromValue(object.expiredHeight) : Long.ZERO;
    return message;
  },
  fromAmino(object: CollectionOwnerRequestAmino): CollectionOwnerRequest {
    const message = createBaseCollectionOwnerRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
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
    message.contractInfo = object.contract_info?.map(e => OriginContractInfo.fromAmino(e)) || [];
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expiredHeight = Long.fromString(object.expired_height);
    }
    return message;
  },
  toAmino(message: CollectionOwnerRequest): CollectionOwnerRequestAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? message.id?.toString() : undefined;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.signer = message.signer === '' ? undefined : message.signer;
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
    if (message.contractInfo) {
      obj.contract_info = message.contractInfo.map(e => e ? OriginContractInfo.toAmino(e) : undefined);
    } else {
      obj.contract_info = message.contractInfo;
    }
    obj.expired_height = !message.expiredHeight.isZero() ? message.expiredHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CollectionOwnerRequestAminoMsg): CollectionOwnerRequest {
    return CollectionOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CollectionOwnerRequestProtoMsg): CollectionOwnerRequest {
    return CollectionOwnerRequest.decode(message.value);
  },
  toProto(message: CollectionOwnerRequest): Uint8Array {
    return CollectionOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: CollectionOwnerRequest): CollectionOwnerRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.CollectionOwnerRequest',
      value: CollectionOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseOriginContractInfo(): OriginContractInfo {
  return {
    contractOriginDataInfo: undefined,
    hash: new Uint8Array(),
    confirmers: []
  };
}
export const OriginContractInfo = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.OriginContractInfo',
  encode(message: OriginContractInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractOriginDataInfo !== undefined) {
      OriginContractParam.encode(message.contractOriginDataInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    for (const v of message.confirmers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OriginContractInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginContractInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.contractOriginDataInfo = OriginContractParam.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<OriginContractInfo>): OriginContractInfo {
    const message = createBaseOriginContractInfo();
    message.contractOriginDataInfo = object.contractOriginDataInfo !== undefined && object.contractOriginDataInfo !== null ? OriginContractParam.fromPartial(object.contractOriginDataInfo) : undefined;
    message.hash = object.hash ?? new Uint8Array();
    message.confirmers = object.confirmers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: OriginContractInfoAmino): OriginContractInfo {
    const message = createBaseOriginContractInfo();
    if (object.contractOriginDataInfo !== undefined && object.contractOriginDataInfo !== null) {
      message.contractOriginDataInfo = OriginContractParam.fromAmino(object.contractOriginDataInfo);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    message.confirmers = object.confirmers?.map(e => e) || [];
    return message;
  },
  toAmino(message: OriginContractInfo): OriginContractInfoAmino {
    const obj: any = {};
    obj.contractOriginDataInfo = message.contractOriginDataInfo ? OriginContractParam.toAmino(message.contractOriginDataInfo) : undefined;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    if (message.confirmers) {
      obj.confirmers = message.confirmers.map(e => e);
    } else {
      obj.confirmers = message.confirmers;
    }
    return obj;
  },
  fromAminoMsg(object: OriginContractInfoAminoMsg): OriginContractInfo {
    return OriginContractInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: OriginContractInfoProtoMsg): OriginContractInfo {
    return OriginContractInfo.decode(message.value);
  },
  toProto(message: OriginContractInfo): Uint8Array {
    return OriginContractInfo.encode(message).finish();
  },
  toProtoMsg(message: OriginContractInfo): OriginContractInfoProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.OriginContractInfo',
      value: OriginContractInfo.encode(message).finish()
    };
  }
};