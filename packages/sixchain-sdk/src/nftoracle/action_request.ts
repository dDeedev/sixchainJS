//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Timestamp } from '../google/protobuf/timestamp';
import { fromTimestamp,Long, toTimestamp } from '../helpers';
import { DataHash, DataHashAmino, DataHashSDKType,RequestStatus } from './request';
export interface ActionParameter {
  name: string;
  value: string;
}
export interface ActionParameterProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionParameter';
  value: Uint8Array;
}
export interface ActionParameterAmino {
  name?: string;
  value?: string;
}
export interface ActionParameterAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.ActionParameter';
  value: ActionParameterAmino;
}
export interface ActionParameterSDKType {
  name: string;
  value: string;
}
export interface ActionOracleParam {
  nftSchemaCode: string;
  tokenId: string;
  action: string;
  params: ActionParameter[];
  refId: string;
  expiredAt: Date;
  onBehalfOf: string;
}
export interface ActionOracleParamProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionOracleParam';
  value: Uint8Array;
}
export interface ActionOracleParamAmino {
  nft_schema_code?: string;
  token_id?: string;
  action?: string;
  params?: ActionParameterAmino[];
  ref_id?: string;
  expired_at?: string;
  on_behalf_of?: string;
}
export interface ActionOracleParamAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.ActionOracleParam';
  value: ActionOracleParamAmino;
}
export interface ActionOracleParamSDKType {
  nft_schema_code: string;
  token_id: string;
  action: string;
  params: ActionParameterSDKType[];
  ref_id: string;
  expired_at: Date;
  on_behalf_of: string;
}
export interface ActionOracleRequest {
  id: Long;
  nftSchemaCode: string;
  tokenId: string;
  action: string;
  params: ActionParameter[];
  caller: string;
  refId: string;
  requiredConfirm: Long;
  status: RequestStatus;
  currentConfirm: Long;
  confirmers: string[];
  createdAt: Date;
  validUntil: Date;
  dataHashes: DataHash[];
  expiredHeight: Long;
  executionErrorMessage: string;
}
export interface ActionOracleRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionOracleRequest';
  value: Uint8Array;
}
export interface ActionOracleRequestAmino {
  id?: string;
  nft_schema_code?: string;
  token_id?: string;
  action?: string;
  params?: ActionParameterAmino[];
  caller?: string;
  ref_id?: string;
  required_confirm?: string;
  status?: RequestStatus;
  current_confirm?: string;
  confirmers?: string[];
  created_at?: string;
  valid_until?: string;
  data_hashes?: DataHashAmino[];
  expired_height?: string;
  execution_error_message?: string;
}
export interface ActionOracleRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.ActionOracleRequest';
  value: ActionOracleRequestAmino;
}
export interface ActionOracleRequestSDKType {
  id: Long;
  nft_schema_code: string;
  token_id: string;
  action: string;
  params: ActionParameterSDKType[];
  caller: string;
  ref_id: string;
  required_confirm: Long;
  status: RequestStatus;
  current_confirm: Long;
  confirmers: string[];
  created_at: Date;
  valid_until: Date;
  data_hashes: DataHashSDKType[];
  expired_height: Long;
  execution_error_message: string;
}
function createBaseActionParameter(): ActionParameter {
  return {
    name: '',
    value: ''
  };
}
export const ActionParameter = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionParameter',
  encode(message: ActionParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.name = reader.string();
        break;
      case 2:
        message.value = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionParameter>): ActionParameter {
    const message = createBaseActionParameter();
    message.name = object.name ?? '';
    message.value = object.value ?? '';
    return message;
  },
  fromAmino(object: ActionParameterAmino): ActionParameter {
    const message = createBaseActionParameter();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: ActionParameter): ActionParameterAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    obj.value = message.value === '' ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: ActionParameterAminoMsg): ActionParameter {
    return ActionParameter.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionParameterProtoMsg): ActionParameter {
    return ActionParameter.decode(message.value);
  },
  toProto(message: ActionParameter): Uint8Array {
    return ActionParameter.encode(message).finish();
  },
  toProtoMsg(message: ActionParameter): ActionParameterProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionParameter',
      value: ActionParameter.encode(message).finish()
    };
  }
};
function createBaseActionOracleParam(): ActionOracleParam {
  return {
    nftSchemaCode: '',
    tokenId: '',
    action: '',
    params: [],
    refId: '',
    expiredAt: new Date(),
    onBehalfOf: ''
  };
}
export const ActionOracleParam = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionOracleParam',
  encode(message: ActionOracleParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.action !== '') {
      writer.uint32(26).string(message.action);
    }
    for (const v of message.params) {
      ActionParameter.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.refId !== '') {
      writer.uint32(42).string(message.refId);
    }
    if (message.expiredAt !== undefined) {
      Timestamp.encode(toTimestamp(message.expiredAt), writer.uint32(50).fork()).ldelim();
    }
    if (message.onBehalfOf !== '') {
      writer.uint32(58).string(message.onBehalfOf);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionOracleParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionOracleParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.tokenId = reader.string();
        break;
      case 3:
        message.action = reader.string();
        break;
      case 4:
        message.params.push(ActionParameter.decode(reader, reader.uint32()));
        break;
      case 5:
        message.refId = reader.string();
        break;
      case 6:
        message.expiredAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 7:
        message.onBehalfOf = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionOracleParam>): ActionOracleParam {
    const message = createBaseActionOracleParam();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    message.action = object.action ?? '';
    message.params = object.params?.map(e => ActionParameter.fromPartial(e)) || [];
    message.refId = object.refId ?? '';
    message.expiredAt = object.expiredAt ?? undefined;
    message.onBehalfOf = object.onBehalfOf ?? '';
    return message;
  },
  fromAmino(object: ActionOracleParamAmino): ActionOracleParam {
    const message = createBaseActionOracleParam();
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    message.params = object.params?.map(e => ActionParameter.fromAmino(e)) || [];
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.refId = object.ref_id;
    }
    if (object.expired_at !== undefined && object.expired_at !== null) {
      message.expiredAt = fromTimestamp(Timestamp.fromAmino(object.expired_at));
    }
    if (object.on_behalf_of !== undefined && object.on_behalf_of !== null) {
      message.onBehalfOf = object.on_behalf_of;
    }
    return message;
  },
  toAmino(message: ActionOracleParam): ActionOracleParamAmino {
    const obj: any = {};
    obj.nft_schema_code = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.token_id = message.tokenId === '' ? undefined : message.tokenId;
    obj.action = message.action === '' ? undefined : message.action;
    if (message.params) {
      obj.params = message.params.map(e => e ? ActionParameter.toAmino(e) : undefined);
    } else {
      obj.params = message.params;
    }
    obj.ref_id = message.refId === '' ? undefined : message.refId;
    obj.expired_at = message.expiredAt ? Timestamp.toAmino(toTimestamp(message.expiredAt)) : undefined;
    obj.on_behalf_of = message.onBehalfOf === '' ? undefined : message.onBehalfOf;
    return obj;
  },
  fromAminoMsg(object: ActionOracleParamAminoMsg): ActionOracleParam {
    return ActionOracleParam.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionOracleParamProtoMsg): ActionOracleParam {
    return ActionOracleParam.decode(message.value);
  },
  toProto(message: ActionOracleParam): Uint8Array {
    return ActionOracleParam.encode(message).finish();
  },
  toProtoMsg(message: ActionOracleParam): ActionOracleParamProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionOracleParam',
      value: ActionOracleParam.encode(message).finish()
    };
  }
};
function createBaseActionOracleRequest(): ActionOracleRequest {
  return {
    id: Long.UZERO,
    nftSchemaCode: '',
    tokenId: '',
    action: '',
    params: [],
    caller: '',
    refId: '',
    requiredConfirm: Long.UZERO,
    status: 0,
    currentConfirm: Long.UZERO,
    confirmers: [],
    createdAt: new Date(),
    validUntil: new Date(),
    dataHashes: [],
    expiredHeight: Long.ZERO,
    executionErrorMessage: ''
  };
}
export const ActionOracleRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionOracleRequest',
  encode(message: ActionOracleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.action !== '') {
      writer.uint32(34).string(message.action);
    }
    for (const v of message.params) {
      ActionParameter.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.caller !== '') {
      writer.uint32(50).string(message.caller);
    }
    if (message.refId !== '') {
      writer.uint32(58).string(message.refId);
    }
    if (!message.requiredConfirm.isZero()) {
      writer.uint32(64).uint64(message.requiredConfirm);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (!message.currentConfirm.isZero()) {
      writer.uint32(80).uint64(message.currentConfirm);
    }
    for (const v of message.confirmers) {
      writer.uint32(90).string(v!);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(98).fork()).ldelim();
    }
    if (message.validUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.validUntil), writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.dataHashes) {
      DataHash.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (!message.expiredHeight.isZero()) {
      writer.uint32(120).int64(message.expiredHeight);
    }
    if (message.executionErrorMessage !== '') {
      writer.uint32(130).string(message.executionErrorMessage);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionOracleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionOracleRequest();
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
        message.action = reader.string();
        break;
      case 5:
        message.params.push(ActionParameter.decode(reader, reader.uint32()));
        break;
      case 6:
        message.caller = reader.string();
        break;
      case 7:
        message.refId = reader.string();
        break;
      case 8:
        message.requiredConfirm = reader.uint64() as Long;
        break;
      case 9:
        message.status = reader.int32() as any;
        break;
      case 10:
        message.currentConfirm = reader.uint64() as Long;
        break;
      case 11:
        message.confirmers.push(reader.string());
        break;
      case 12:
        message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 13:
        message.validUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 14:
        message.dataHashes.push(DataHash.decode(reader, reader.uint32()));
        break;
      case 15:
        message.expiredHeight = reader.int64() as Long;
        break;
      case 16:
        message.executionErrorMessage = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionOracleRequest>): ActionOracleRequest {
    const message = createBaseActionOracleRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    message.action = object.action ?? '';
    message.params = object.params?.map(e => ActionParameter.fromPartial(e)) || [];
    message.caller = object.caller ?? '';
    message.refId = object.refId ?? '';
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? Long.fromValue(object.requiredConfirm) : Long.UZERO;
    message.status = object.status ?? 0;
    message.currentConfirm = object.currentConfirm !== undefined && object.currentConfirm !== null ? Long.fromValue(object.currentConfirm) : Long.UZERO;
    message.confirmers = object.confirmers?.map(e => e) || [];
    message.createdAt = object.createdAt ?? undefined;
    message.validUntil = object.validUntil ?? undefined;
    message.dataHashes = object.dataHashes?.map(e => DataHash.fromPartial(e)) || [];
    message.expiredHeight = object.expiredHeight !== undefined && object.expiredHeight !== null ? Long.fromValue(object.expiredHeight) : Long.ZERO;
    message.executionErrorMessage = object.executionErrorMessage ?? '';
    return message;
  },
  fromAmino(object: ActionOracleRequestAmino): ActionOracleRequest {
    const message = createBaseActionOracleRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    message.params = object.params?.map(e => ActionParameter.fromAmino(e)) || [];
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = object.caller;
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.refId = object.ref_id;
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
    if (object.execution_error_message !== undefined && object.execution_error_message !== null) {
      message.executionErrorMessage = object.execution_error_message;
    }
    return message;
  },
  toAmino(message: ActionOracleRequest): ActionOracleRequestAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? message.id?.toString() : undefined;
    obj.nft_schema_code = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.token_id = message.tokenId === '' ? undefined : message.tokenId;
    obj.action = message.action === '' ? undefined : message.action;
    if (message.params) {
      obj.params = message.params.map(e => e ? ActionParameter.toAmino(e) : undefined);
    } else {
      obj.params = message.params;
    }
    obj.caller = message.caller === '' ? undefined : message.caller;
    obj.ref_id = message.refId === '' ? undefined : message.refId;
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
    obj.execution_error_message = message.executionErrorMessage === '' ? undefined : message.executionErrorMessage;
    return obj;
  },
  fromAminoMsg(object: ActionOracleRequestAminoMsg): ActionOracleRequest {
    return ActionOracleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionOracleRequestProtoMsg): ActionOracleRequest {
    return ActionOracleRequest.decode(message.value);
  },
  toProto(message: ActionOracleRequest): Uint8Array {
    return ActionOracleRequest.encode(message).finish();
  },
  toProtoMsg(message: ActionOracleRequest): ActionOracleRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionOracleRequest',
      value: ActionOracleRequest.encode(message).finish()
    };
  }
};