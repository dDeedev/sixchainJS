//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from '../cosmos/base/query/v1beta1/pagination';
import { Burn, BurnAmino, BurnSDKType } from './burn';
import { Mintperm, MintpermAmino, MintpermSDKType } from './mintperm';
import { Options, OptionsAmino, OptionsSDKType } from './options';
import { Params, ParamsAmino, ParamsSDKType } from './params';
import { Token, TokenAmino, TokenSDKType } from './token';
import { TokenBurn, TokenBurnAmino, TokenBurnSDKType } from './token_burn';
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryParamsRequest';
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryParamsRequest';
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryParamsResponse';
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryParamsResponse';
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetTokenRequest {
  name: string;
}
export interface QueryGetTokenRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenRequest';
  value: Uint8Array;
}
export interface QueryGetTokenRequestAmino {
  name?: string;
}
export interface QueryGetTokenRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenRequest';
  value: QueryGetTokenRequestAmino;
}
export interface QueryGetTokenRequestSDKType {
  name: string;
}
export interface QueryGetTokenResponse {
  token: Token;
}
export interface QueryGetTokenResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenResponse';
  value: Uint8Array;
}
export interface QueryGetTokenResponseAmino {
  token?: TokenAmino;
}
export interface QueryGetTokenResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenResponse';
  value: QueryGetTokenResponseAmino;
}
export interface QueryGetTokenResponseSDKType {
  token: TokenSDKType;
}
export interface QueryAllTokenRequest {
  pagination?: PageRequest;
}
export interface QueryAllTokenRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenRequest';
  value: Uint8Array;
}
export interface QueryAllTokenRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTokenRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenRequest';
  value: QueryAllTokenRequestAmino;
}
export interface QueryAllTokenRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllTokenResponse {
  token: Token[];
  pagination?: PageResponse;
}
export interface QueryAllTokenResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenResponse';
  value: Uint8Array;
}
export interface QueryAllTokenResponseAmino {
  token?: TokenAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTokenResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenResponse';
  value: QueryAllTokenResponseAmino;
}
export interface QueryAllTokenResponseSDKType {
  token: TokenSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetMintpermRequest {
  token: string;
  address: string;
}
export interface QueryGetMintpermRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetMintpermRequest';
  value: Uint8Array;
}
export interface QueryGetMintpermRequestAmino {
  token?: string;
  address?: string;
}
export interface QueryGetMintpermRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetMintpermRequest';
  value: QueryGetMintpermRequestAmino;
}
export interface QueryGetMintpermRequestSDKType {
  token: string;
  address: string;
}
export interface QueryGetMintpermResponse {
  mintperm: Mintperm;
}
export interface QueryGetMintpermResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetMintpermResponse';
  value: Uint8Array;
}
export interface QueryGetMintpermResponseAmino {
  mintperm?: MintpermAmino;
}
export interface QueryGetMintpermResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetMintpermResponse';
  value: QueryGetMintpermResponseAmino;
}
export interface QueryGetMintpermResponseSDKType {
  mintperm: MintpermSDKType;
}
export interface QueryAllMintpermRequest {
  pagination?: PageRequest;
}
export interface QueryAllMintpermRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllMintpermRequest';
  value: Uint8Array;
}
export interface QueryAllMintpermRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMintpermRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllMintpermRequest';
  value: QueryAllMintpermRequestAmino;
}
export interface QueryAllMintpermRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllMintpermResponse {
  mintperm: Mintperm[];
  pagination?: PageResponse;
}
export interface QueryAllMintpermResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllMintpermResponse';
  value: Uint8Array;
}
export interface QueryAllMintpermResponseAmino {
  mintperm?: MintpermAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMintpermResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllMintpermResponse';
  value: QueryAllMintpermResponseAmino;
}
export interface QueryAllMintpermResponseSDKType {
  mintperm: MintpermSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetOptionsRequest {}
export interface QueryGetOptionsRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetOptionsRequest';
  value: Uint8Array;
}
export interface QueryGetOptionsRequestAmino {}
export interface QueryGetOptionsRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetOptionsRequest';
  value: QueryGetOptionsRequestAmino;
}
export interface QueryGetOptionsRequestSDKType {}
export interface QueryGetOptionsResponse {
  options: Options;
}
export interface QueryGetOptionsResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetOptionsResponse';
  value: Uint8Array;
}
export interface QueryGetOptionsResponseAmino {
  Options?: OptionsAmino;
}
export interface QueryGetOptionsResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetOptionsResponse';
  value: QueryGetOptionsResponseAmino;
}
export interface QueryGetOptionsResponseSDKType {
  Options: OptionsSDKType;
}
export interface QueryBurnsRequest {
  pagination?: PageRequest;
}
export interface QueryBurnsRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryBurnsRequest';
  value: Uint8Array;
}
export interface QueryBurnsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryBurnsRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryBurnsRequest';
  value: QueryBurnsRequestAmino;
}
export interface QueryBurnsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryBurnsResponse {
  /** Returning a list of posts */
  burn: Burn[];
  /** Adding pagination to response */
  pagination?: PageResponse;
}
export interface QueryBurnsResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryBurnsResponse';
  value: Uint8Array;
}
export interface QueryBurnsResponseAmino {
  /** Returning a list of posts */
  Burn?: BurnAmino[];
  /** Adding pagination to response */
  pagination?: PageResponseAmino;
}
export interface QueryBurnsResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryBurnsResponse';
  value: QueryBurnsResponseAmino;
}
export interface QueryBurnsResponseSDKType {
  Burn: BurnSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetTokenBurnRequest {
  token: string;
}
export interface QueryGetTokenBurnRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenBurnRequest';
  value: Uint8Array;
}
export interface QueryGetTokenBurnRequestAmino {
  token?: string;
}
export interface QueryGetTokenBurnRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenBurnRequest';
  value: QueryGetTokenBurnRequestAmino;
}
export interface QueryGetTokenBurnRequestSDKType {
  token: string;
}
export interface QueryGetTokenBurnResponse {
  tokenBurn: TokenBurn;
}
export interface QueryGetTokenBurnResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenBurnResponse';
  value: Uint8Array;
}
export interface QueryGetTokenBurnResponseAmino {
  tokenBurn?: TokenBurnAmino;
}
export interface QueryGetTokenBurnResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenBurnResponse';
  value: QueryGetTokenBurnResponseAmino;
}
export interface QueryGetTokenBurnResponseSDKType {
  tokenBurn: TokenBurnSDKType;
}
export interface QueryAllTokenBurnRequest {
  pagination?: PageRequest;
}
export interface QueryAllTokenBurnRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenBurnRequest';
  value: Uint8Array;
}
export interface QueryAllTokenBurnRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTokenBurnRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenBurnRequest';
  value: QueryAllTokenBurnRequestAmino;
}
export interface QueryAllTokenBurnRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllTokenBurnResponse {
  tokenBurn: TokenBurn[];
  pagination?: PageResponse;
}
export interface QueryAllTokenBurnResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenBurnResponse';
  value: Uint8Array;
}
export interface QueryAllTokenBurnResponseAmino {
  tokenBurn?: TokenBurnAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTokenBurnResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenBurnResponse';
  value: QueryAllTokenBurnResponseAmino;
}
export interface QueryAllTokenBurnResponseSDKType {
  tokenBurn: TokenBurnSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryParamsRequest',
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryParamsRequest',
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryParamsResponse',
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.params = Params.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryParamsResponse',
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTokenRequest(): QueryGetTokenRequest {
  return {
    name: ''
  };
}
export const QueryGetTokenRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenRequest',
  encode(message: QueryGetTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.name = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetTokenRequest>): QueryGetTokenRequest {
    const message = createBaseQueryGetTokenRequest();
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: QueryGetTokenRequestAmino): QueryGetTokenRequest {
    const message = createBaseQueryGetTokenRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetTokenRequest): QueryGetTokenRequestAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetTokenRequestAminoMsg): QueryGetTokenRequest {
    return QueryGetTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTokenRequestProtoMsg): QueryGetTokenRequest {
    return QueryGetTokenRequest.decode(message.value);
  },
  toProto(message: QueryGetTokenRequest): Uint8Array {
    return QueryGetTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTokenRequest): QueryGetTokenRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenRequest',
      value: QueryGetTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTokenResponse(): QueryGetTokenResponse {
  return {
    token: Token.fromPartial({})
  };
}
export const QueryGetTokenResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenResponse',
  encode(message: QueryGetTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.token = Token.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetTokenResponse>): QueryGetTokenResponse {
    const message = createBaseQueryGetTokenResponse();
    message.token = object.token !== undefined && object.token !== null ? Token.fromPartial(object.token) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTokenResponseAmino): QueryGetTokenResponse {
    const message = createBaseQueryGetTokenResponse();
    if (object.token !== undefined && object.token !== null) {
      message.token = Token.fromAmino(object.token);
    }
    return message;
  },
  toAmino(message: QueryGetTokenResponse): QueryGetTokenResponseAmino {
    const obj: any = {};
    obj.token = message.token ? Token.toAmino(message.token) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTokenResponseAminoMsg): QueryGetTokenResponse {
    return QueryGetTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTokenResponseProtoMsg): QueryGetTokenResponse {
    return QueryGetTokenResponse.decode(message.value);
  },
  toProto(message: QueryGetTokenResponse): Uint8Array {
    return QueryGetTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTokenResponse): QueryGetTokenResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenResponse',
      value: QueryGetTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTokenRequest(): QueryAllTokenRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllTokenRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenRequest',
  encode(message: QueryAllTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllTokenRequest>): QueryAllTokenRequest {
    const message = createBaseQueryAllTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenRequestAmino): QueryAllTokenRequest {
    const message = createBaseQueryAllTokenRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenRequest): QueryAllTokenRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenRequestAminoMsg): QueryAllTokenRequest {
    return QueryAllTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTokenRequestProtoMsg): QueryAllTokenRequest {
    return QueryAllTokenRequest.decode(message.value);
  },
  toProto(message: QueryAllTokenRequest): Uint8Array {
    return QueryAllTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenRequest): QueryAllTokenRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenRequest',
      value: QueryAllTokenRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTokenResponse(): QueryAllTokenResponse {
  return {
    token: [],
    pagination: undefined
  };
}
export const QueryAllTokenResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenResponse',
  encode(message: QueryAllTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.token) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.token.push(Token.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllTokenResponse>): QueryAllTokenResponse {
    const message = createBaseQueryAllTokenResponse();
    message.token = object.token?.map(e => Token.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenResponseAmino): QueryAllTokenResponse {
    const message = createBaseQueryAllTokenResponse();
    message.token = object.token?.map(e => Token.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenResponse): QueryAllTokenResponseAmino {
    const obj: any = {};
    if (message.token) {
      obj.token = message.token.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.token = message.token;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenResponseAminoMsg): QueryAllTokenResponse {
    return QueryAllTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTokenResponseProtoMsg): QueryAllTokenResponse {
    return QueryAllTokenResponse.decode(message.value);
  },
  toProto(message: QueryAllTokenResponse): Uint8Array {
    return QueryAllTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenResponse): QueryAllTokenResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenResponse',
      value: QueryAllTokenResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMintpermRequest(): QueryGetMintpermRequest {
  return {
    token: '',
    address: ''
  };
}
export const QueryGetMintpermRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetMintpermRequest',
  encode(message: QueryGetMintpermRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== '') {
      writer.uint32(10).string(message.token);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMintpermRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMintpermRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.token = reader.string();
        break;
      case 2:
        message.address = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetMintpermRequest>): QueryGetMintpermRequest {
    const message = createBaseQueryGetMintpermRequest();
    message.token = object.token ?? '';
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: QueryGetMintpermRequestAmino): QueryGetMintpermRequest {
    const message = createBaseQueryGetMintpermRequest();
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGetMintpermRequest): QueryGetMintpermRequestAmino {
    const obj: any = {};
    obj.token = message.token === '' ? undefined : message.token;
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetMintpermRequestAminoMsg): QueryGetMintpermRequest {
    return QueryGetMintpermRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMintpermRequestProtoMsg): QueryGetMintpermRequest {
    return QueryGetMintpermRequest.decode(message.value);
  },
  toProto(message: QueryGetMintpermRequest): Uint8Array {
    return QueryGetMintpermRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMintpermRequest): QueryGetMintpermRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetMintpermRequest',
      value: QueryGetMintpermRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMintpermResponse(): QueryGetMintpermResponse {
  return {
    mintperm: Mintperm.fromPartial({})
  };
}
export const QueryGetMintpermResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetMintpermResponse',
  encode(message: QueryGetMintpermResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintperm !== undefined) {
      Mintperm.encode(message.mintperm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMintpermResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMintpermResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.mintperm = Mintperm.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetMintpermResponse>): QueryGetMintpermResponse {
    const message = createBaseQueryGetMintpermResponse();
    message.mintperm = object.mintperm !== undefined && object.mintperm !== null ? Mintperm.fromPartial(object.mintperm) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMintpermResponseAmino): QueryGetMintpermResponse {
    const message = createBaseQueryGetMintpermResponse();
    if (object.mintperm !== undefined && object.mintperm !== null) {
      message.mintperm = Mintperm.fromAmino(object.mintperm);
    }
    return message;
  },
  toAmino(message: QueryGetMintpermResponse): QueryGetMintpermResponseAmino {
    const obj: any = {};
    obj.mintperm = message.mintperm ? Mintperm.toAmino(message.mintperm) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMintpermResponseAminoMsg): QueryGetMintpermResponse {
    return QueryGetMintpermResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMintpermResponseProtoMsg): QueryGetMintpermResponse {
    return QueryGetMintpermResponse.decode(message.value);
  },
  toProto(message: QueryGetMintpermResponse): Uint8Array {
    return QueryGetMintpermResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMintpermResponse): QueryGetMintpermResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetMintpermResponse',
      value: QueryGetMintpermResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMintpermRequest(): QueryAllMintpermRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllMintpermRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllMintpermRequest',
  encode(message: QueryAllMintpermRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMintpermRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMintpermRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllMintpermRequest>): QueryAllMintpermRequest {
    const message = createBaseQueryAllMintpermRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMintpermRequestAmino): QueryAllMintpermRequest {
    const message = createBaseQueryAllMintpermRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMintpermRequest): QueryAllMintpermRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMintpermRequestAminoMsg): QueryAllMintpermRequest {
    return QueryAllMintpermRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMintpermRequestProtoMsg): QueryAllMintpermRequest {
    return QueryAllMintpermRequest.decode(message.value);
  },
  toProto(message: QueryAllMintpermRequest): Uint8Array {
    return QueryAllMintpermRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMintpermRequest): QueryAllMintpermRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllMintpermRequest',
      value: QueryAllMintpermRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMintpermResponse(): QueryAllMintpermResponse {
  return {
    mintperm: [],
    pagination: undefined
  };
}
export const QueryAllMintpermResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllMintpermResponse',
  encode(message: QueryAllMintpermResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mintperm) {
      Mintperm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMintpermResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMintpermResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.mintperm.push(Mintperm.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllMintpermResponse>): QueryAllMintpermResponse {
    const message = createBaseQueryAllMintpermResponse();
    message.mintperm = object.mintperm?.map(e => Mintperm.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMintpermResponseAmino): QueryAllMintpermResponse {
    const message = createBaseQueryAllMintpermResponse();
    message.mintperm = object.mintperm?.map(e => Mintperm.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMintpermResponse): QueryAllMintpermResponseAmino {
    const obj: any = {};
    if (message.mintperm) {
      obj.mintperm = message.mintperm.map(e => e ? Mintperm.toAmino(e) : undefined);
    } else {
      obj.mintperm = message.mintperm;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMintpermResponseAminoMsg): QueryAllMintpermResponse {
    return QueryAllMintpermResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMintpermResponseProtoMsg): QueryAllMintpermResponse {
    return QueryAllMintpermResponse.decode(message.value);
  },
  toProto(message: QueryAllMintpermResponse): Uint8Array {
    return QueryAllMintpermResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMintpermResponse): QueryAllMintpermResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllMintpermResponse',
      value: QueryAllMintpermResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetOptionsRequest(): QueryGetOptionsRequest {
  return {};
}
export const QueryGetOptionsRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetOptionsRequest',
  encode(_: QueryGetOptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOptionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOptionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryGetOptionsRequest>): QueryGetOptionsRequest {
    const message = createBaseQueryGetOptionsRequest();
    return message;
  },
  fromAmino(_: QueryGetOptionsRequestAmino): QueryGetOptionsRequest {
    const message = createBaseQueryGetOptionsRequest();
    return message;
  },
  toAmino(_: QueryGetOptionsRequest): QueryGetOptionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetOptionsRequestAminoMsg): QueryGetOptionsRequest {
    return QueryGetOptionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOptionsRequestProtoMsg): QueryGetOptionsRequest {
    return QueryGetOptionsRequest.decode(message.value);
  },
  toProto(message: QueryGetOptionsRequest): Uint8Array {
    return QueryGetOptionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOptionsRequest): QueryGetOptionsRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetOptionsRequest',
      value: QueryGetOptionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOptionsResponse(): QueryGetOptionsResponse {
  return {
    options: Options.fromPartial({})
  };
}
export const QueryGetOptionsResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetOptionsResponse',
  encode(message: QueryGetOptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.options = Options.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetOptionsResponse>): QueryGetOptionsResponse {
    const message = createBaseQueryGetOptionsResponse();
    message.options = object.options !== undefined && object.options !== null ? Options.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object: QueryGetOptionsResponseAmino): QueryGetOptionsResponse {
    const message = createBaseQueryGetOptionsResponse();
    if (object.Options !== undefined && object.Options !== null) {
      message.options = Options.fromAmino(object.Options);
    }
    return message;
  },
  toAmino(message: QueryGetOptionsResponse): QueryGetOptionsResponseAmino {
    const obj: any = {};
    obj.Options = message.options ? Options.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOptionsResponseAminoMsg): QueryGetOptionsResponse {
    return QueryGetOptionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOptionsResponseProtoMsg): QueryGetOptionsResponse {
    return QueryGetOptionsResponse.decode(message.value);
  },
  toProto(message: QueryGetOptionsResponse): Uint8Array {
    return QueryGetOptionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOptionsResponse): QueryGetOptionsResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetOptionsResponse',
      value: QueryGetOptionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBurnsRequest(): QueryBurnsRequest {
  return {
    pagination: undefined
  };
}
export const QueryBurnsRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryBurnsRequest',
  encode(message: QueryBurnsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurnsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBurnsRequest>): QueryBurnsRequest {
    const message = createBaseQueryBurnsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBurnsRequestAmino): QueryBurnsRequest {
    const message = createBaseQueryBurnsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBurnsRequest): QueryBurnsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBurnsRequestAminoMsg): QueryBurnsRequest {
    return QueryBurnsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBurnsRequestProtoMsg): QueryBurnsRequest {
    return QueryBurnsRequest.decode(message.value);
  },
  toProto(message: QueryBurnsRequest): Uint8Array {
    return QueryBurnsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBurnsRequest): QueryBurnsRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryBurnsRequest',
      value: QueryBurnsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBurnsResponse(): QueryBurnsResponse {
  return {
    burn: [],
    pagination: undefined
  };
}
export const QueryBurnsResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryBurnsResponse',
  encode(message: QueryBurnsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.burn) {
      Burn.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurnsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.burn.push(Burn.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBurnsResponse>): QueryBurnsResponse {
    const message = createBaseQueryBurnsResponse();
    message.burn = object.burn?.map(e => Burn.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBurnsResponseAmino): QueryBurnsResponse {
    const message = createBaseQueryBurnsResponse();
    message.burn = object.Burn?.map(e => Burn.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBurnsResponse): QueryBurnsResponseAmino {
    const obj: any = {};
    if (message.burn) {
      obj.Burn = message.burn.map(e => e ? Burn.toAmino(e) : undefined);
    } else {
      obj.Burn = message.burn;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBurnsResponseAminoMsg): QueryBurnsResponse {
    return QueryBurnsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBurnsResponseProtoMsg): QueryBurnsResponse {
    return QueryBurnsResponse.decode(message.value);
  },
  toProto(message: QueryBurnsResponse): Uint8Array {
    return QueryBurnsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBurnsResponse): QueryBurnsResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryBurnsResponse',
      value: QueryBurnsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTokenBurnRequest(): QueryGetTokenBurnRequest {
  return {
    token: ''
  };
}
export const QueryGetTokenBurnRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenBurnRequest',
  encode(message: QueryGetTokenBurnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== '') {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTokenBurnRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenBurnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.token = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetTokenBurnRequest>): QueryGetTokenBurnRequest {
    const message = createBaseQueryGetTokenBurnRequest();
    message.token = object.token ?? '';
    return message;
  },
  fromAmino(object: QueryGetTokenBurnRequestAmino): QueryGetTokenBurnRequest {
    const message = createBaseQueryGetTokenBurnRequest();
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    return message;
  },
  toAmino(message: QueryGetTokenBurnRequest): QueryGetTokenBurnRequestAmino {
    const obj: any = {};
    obj.token = message.token === '' ? undefined : message.token;
    return obj;
  },
  fromAminoMsg(object: QueryGetTokenBurnRequestAminoMsg): QueryGetTokenBurnRequest {
    return QueryGetTokenBurnRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTokenBurnRequestProtoMsg): QueryGetTokenBurnRequest {
    return QueryGetTokenBurnRequest.decode(message.value);
  },
  toProto(message: QueryGetTokenBurnRequest): Uint8Array {
    return QueryGetTokenBurnRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTokenBurnRequest): QueryGetTokenBurnRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenBurnRequest',
      value: QueryGetTokenBurnRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTokenBurnResponse(): QueryGetTokenBurnResponse {
  return {
    tokenBurn: TokenBurn.fromPartial({})
  };
}
export const QueryGetTokenBurnResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenBurnResponse',
  encode(message: QueryGetTokenBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenBurn !== undefined) {
      TokenBurn.encode(message.tokenBurn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTokenBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.tokenBurn = TokenBurn.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetTokenBurnResponse>): QueryGetTokenBurnResponse {
    const message = createBaseQueryGetTokenBurnResponse();
    message.tokenBurn = object.tokenBurn !== undefined && object.tokenBurn !== null ? TokenBurn.fromPartial(object.tokenBurn) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTokenBurnResponseAmino): QueryGetTokenBurnResponse {
    const message = createBaseQueryGetTokenBurnResponse();
    if (object.tokenBurn !== undefined && object.tokenBurn !== null) {
      message.tokenBurn = TokenBurn.fromAmino(object.tokenBurn);
    }
    return message;
  },
  toAmino(message: QueryGetTokenBurnResponse): QueryGetTokenBurnResponseAmino {
    const obj: any = {};
    obj.tokenBurn = message.tokenBurn ? TokenBurn.toAmino(message.tokenBurn) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTokenBurnResponseAminoMsg): QueryGetTokenBurnResponse {
    return QueryGetTokenBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTokenBurnResponseProtoMsg): QueryGetTokenBurnResponse {
    return QueryGetTokenBurnResponse.decode(message.value);
  },
  toProto(message: QueryGetTokenBurnResponse): Uint8Array {
    return QueryGetTokenBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTokenBurnResponse): QueryGetTokenBurnResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryGetTokenBurnResponse',
      value: QueryGetTokenBurnResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTokenBurnRequest(): QueryAllTokenBurnRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllTokenBurnRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenBurnRequest',
  encode(message: QueryAllTokenBurnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenBurnRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenBurnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllTokenBurnRequest>): QueryAllTokenBurnRequest {
    const message = createBaseQueryAllTokenBurnRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenBurnRequestAmino): QueryAllTokenBurnRequest {
    const message = createBaseQueryAllTokenBurnRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenBurnRequest): QueryAllTokenBurnRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenBurnRequestAminoMsg): QueryAllTokenBurnRequest {
    return QueryAllTokenBurnRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTokenBurnRequestProtoMsg): QueryAllTokenBurnRequest {
    return QueryAllTokenBurnRequest.decode(message.value);
  },
  toProto(message: QueryAllTokenBurnRequest): Uint8Array {
    return QueryAllTokenBurnRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenBurnRequest): QueryAllTokenBurnRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenBurnRequest',
      value: QueryAllTokenBurnRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTokenBurnResponse(): QueryAllTokenBurnResponse {
  return {
    tokenBurn: [],
    pagination: undefined
  };
}
export const QueryAllTokenBurnResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenBurnResponse',
  encode(message: QueryAllTokenBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokenBurn) {
      TokenBurn.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.tokenBurn.push(TokenBurn.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllTokenBurnResponse>): QueryAllTokenBurnResponse {
    const message = createBaseQueryAllTokenBurnResponse();
    message.tokenBurn = object.tokenBurn?.map(e => TokenBurn.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenBurnResponseAmino): QueryAllTokenBurnResponse {
    const message = createBaseQueryAllTokenBurnResponse();
    message.tokenBurn = object.tokenBurn?.map(e => TokenBurn.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenBurnResponse): QueryAllTokenBurnResponseAmino {
    const obj: any = {};
    if (message.tokenBurn) {
      obj.tokenBurn = message.tokenBurn.map(e => e ? TokenBurn.toAmino(e) : undefined);
    } else {
      obj.tokenBurn = message.tokenBurn;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenBurnResponseAminoMsg): QueryAllTokenBurnResponse {
    return QueryAllTokenBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTokenBurnResponseProtoMsg): QueryAllTokenBurnResponse {
    return QueryAllTokenBurnResponse.decode(message.value);
  },
  toProto(message: QueryAllTokenBurnResponse): Uint8Array {
    return QueryAllTokenBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenBurnResponse): QueryAllTokenBurnResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.QueryAllTokenBurnResponse',
      value: QueryAllTokenBurnResponse.encode(message).finish()
    };
  }
};