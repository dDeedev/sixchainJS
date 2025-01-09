//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from '../cosmos/base/query/v1beta1/pagination';
import { Admin, AdminAmino, AdminSDKType } from './admin';
import { Group, GroupAmino, GroupSDKType } from './group';
import { Params, ParamsAmino, ParamsSDKType } from './params';
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryParamsRequest';
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.QueryParamsRequest';
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
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryParamsResponse';
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.QueryParamsResponse';
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetGroupRequest {
  name: string;
}
export interface QueryGetGroupRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetGroupRequest';
  value: Uint8Array;
}
export interface QueryGetGroupRequestAmino {
  name?: string;
}
export interface QueryGetGroupRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetGroupRequest';
  value: QueryGetGroupRequestAmino;
}
export interface QueryGetGroupRequestSDKType {
  name: string;
}
export interface QueryGetGroupResponse {
  group: Group;
}
export interface QueryGetGroupResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetGroupResponse';
  value: Uint8Array;
}
export interface QueryGetGroupResponseAmino {
  group?: GroupAmino;
}
export interface QueryGetGroupResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetGroupResponse';
  value: QueryGetGroupResponseAmino;
}
export interface QueryGetGroupResponseSDKType {
  group: GroupSDKType;
}
export interface QueryAllGroupRequest {
  pagination?: PageRequest;
}
export interface QueryAllGroupRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllGroupRequest';
  value: Uint8Array;
}
export interface QueryAllGroupRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllGroupRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllGroupRequest';
  value: QueryAllGroupRequestAmino;
}
export interface QueryAllGroupRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllGroupResponse {
  group: Group[];
  pagination?: PageResponse;
}
export interface QueryAllGroupResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllGroupResponse';
  value: Uint8Array;
}
export interface QueryAllGroupResponseAmino {
  group?: GroupAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllGroupResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllGroupResponse';
  value: QueryAllGroupResponseAmino;
}
export interface QueryAllGroupResponseSDKType {
  group: GroupSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetAdminRequest {
  group: string;
  admin: string;
}
export interface QueryGetAdminRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetAdminRequest';
  value: Uint8Array;
}
export interface QueryGetAdminRequestAmino {
  group?: string;
  admin?: string;
}
export interface QueryGetAdminRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetAdminRequest';
  value: QueryGetAdminRequestAmino;
}
export interface QueryGetAdminRequestSDKType {
  group: string;
  admin: string;
}
export interface QueryGetAdminResponse {
  admin: Admin;
}
export interface QueryGetAdminResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetAdminResponse';
  value: Uint8Array;
}
export interface QueryGetAdminResponseAmino {
  admin?: AdminAmino;
}
export interface QueryGetAdminResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetAdminResponse';
  value: QueryGetAdminResponseAmino;
}
export interface QueryGetAdminResponseSDKType {
  admin: AdminSDKType;
}
export interface QueryAllAdminRequest {
  pagination?: PageRequest;
}
export interface QueryAllAdminRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllAdminRequest';
  value: Uint8Array;
}
export interface QueryAllAdminRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllAdminRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllAdminRequest';
  value: QueryAllAdminRequestAmino;
}
export interface QueryAllAdminRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAdminResponse {
  admin: Admin[];
  pagination?: PageResponse;
}
export interface QueryAllAdminResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllAdminResponse';
  value: Uint8Array;
}
export interface QueryAllAdminResponseAmino {
  admin?: AdminAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllAdminResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllAdminResponse';
  value: QueryAllAdminResponseAmino;
}
export interface QueryAllAdminResponseSDKType {
  admin: AdminSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryListAdminOfGroupRequest {
  group: string;
  pagination?: PageRequest;
}
export interface QueryListAdminOfGroupRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryListAdminOfGroupRequest';
  value: Uint8Array;
}
export interface QueryListAdminOfGroupRequestAmino {
  group?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListAdminOfGroupRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.QueryListAdminOfGroupRequest';
  value: QueryListAdminOfGroupRequestAmino;
}
export interface QueryListAdminOfGroupRequestSDKType {
  group: string;
  pagination?: PageRequestSDKType;
}
export interface QueryListAdminOfGroupResponse {
  admin: string[];
  pagination?: PageResponse;
}
export interface QueryListAdminOfGroupResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryListAdminOfGroupResponse';
  value: Uint8Array;
}
export interface QueryListAdminOfGroupResponseAmino {
  admin?: string[];
  pagination?: PageResponseAmino;
}
export interface QueryListAdminOfGroupResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.QueryListAdminOfGroupResponse';
  value: QueryListAdminOfGroupResponseAmino;
}
export interface QueryListAdminOfGroupResponseSDKType {
  admin: string[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryParamsRequest',
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
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryParamsRequest',
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
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryParamsResponse',
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
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryParamsResponse',
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetGroupRequest(): QueryGetGroupRequest {
  return {
    name: ''
  };
}
export const QueryGetGroupRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetGroupRequest',
  encode(message: QueryGetGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGroupRequest();
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
  fromPartial(object: Partial<QueryGetGroupRequest>): QueryGetGroupRequest {
    const message = createBaseQueryGetGroupRequest();
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: QueryGetGroupRequestAmino): QueryGetGroupRequest {
    const message = createBaseQueryGetGroupRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetGroupRequest): QueryGetGroupRequestAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetGroupRequestAminoMsg): QueryGetGroupRequest {
    return QueryGetGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGroupRequestProtoMsg): QueryGetGroupRequest {
    return QueryGetGroupRequest.decode(message.value);
  },
  toProto(message: QueryGetGroupRequest): Uint8Array {
    return QueryGetGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGroupRequest): QueryGetGroupRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetGroupRequest',
      value: QueryGetGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetGroupResponse(): QueryGetGroupResponse {
  return {
    group: Group.fromPartial({})
  };
}
export const QueryGetGroupResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetGroupResponse',
  encode(message: QueryGetGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.group = Group.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetGroupResponse>): QueryGetGroupResponse {
    const message = createBaseQueryGetGroupResponse();
    message.group = object.group !== undefined && object.group !== null ? Group.fromPartial(object.group) : undefined;
    return message;
  },
  fromAmino(object: QueryGetGroupResponseAmino): QueryGetGroupResponse {
    const message = createBaseQueryGetGroupResponse();
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromAmino(object.group);
    }
    return message;
  },
  toAmino(message: QueryGetGroupResponse): QueryGetGroupResponseAmino {
    const obj: any = {};
    obj.group = message.group ? Group.toAmino(message.group) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetGroupResponseAminoMsg): QueryGetGroupResponse {
    return QueryGetGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGroupResponseProtoMsg): QueryGetGroupResponse {
    return QueryGetGroupResponse.decode(message.value);
  },
  toProto(message: QueryGetGroupResponse): Uint8Array {
    return QueryGetGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGroupResponse): QueryGetGroupResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetGroupResponse',
      value: QueryGetGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllGroupRequest(): QueryAllGroupRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllGroupRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllGroupRequest',
  encode(message: QueryAllGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGroupRequest();
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
  fromPartial(object: Partial<QueryAllGroupRequest>): QueryAllGroupRequest {
    const message = createBaseQueryAllGroupRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGroupRequestAmino): QueryAllGroupRequest {
    const message = createBaseQueryAllGroupRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGroupRequest): QueryAllGroupRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGroupRequestAminoMsg): QueryAllGroupRequest {
    return QueryAllGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGroupRequestProtoMsg): QueryAllGroupRequest {
    return QueryAllGroupRequest.decode(message.value);
  },
  toProto(message: QueryAllGroupRequest): Uint8Array {
    return QueryAllGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGroupRequest): QueryAllGroupRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllGroupRequest',
      value: QueryAllGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllGroupResponse(): QueryAllGroupResponse {
  return {
    group: [],
    pagination: undefined
  };
}
export const QueryAllGroupResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllGroupResponse',
  encode(message: QueryAllGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.group) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.group.push(Group.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllGroupResponse>): QueryAllGroupResponse {
    const message = createBaseQueryAllGroupResponse();
    message.group = object.group?.map(e => Group.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGroupResponseAmino): QueryAllGroupResponse {
    const message = createBaseQueryAllGroupResponse();
    message.group = object.group?.map(e => Group.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGroupResponse): QueryAllGroupResponseAmino {
    const obj: any = {};
    if (message.group) {
      obj.group = message.group.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.group = message.group;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGroupResponseAminoMsg): QueryAllGroupResponse {
    return QueryAllGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGroupResponseProtoMsg): QueryAllGroupResponse {
    return QueryAllGroupResponse.decode(message.value);
  },
  toProto(message: QueryAllGroupResponse): Uint8Array {
    return QueryAllGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGroupResponse): QueryAllGroupResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllGroupResponse',
      value: QueryAllGroupResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetAdminRequest(): QueryGetAdminRequest {
  return {
    group: '',
    admin: ''
  };
}
export const QueryGetAdminRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetAdminRequest',
  encode(message: QueryGetAdminRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== '') {
      writer.uint32(10).string(message.group);
    }
    if (message.admin !== '') {
      writer.uint32(18).string(message.admin);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAdminRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.group = reader.string();
        break;
      case 2:
        message.admin = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAdminRequest>): QueryGetAdminRequest {
    const message = createBaseQueryGetAdminRequest();
    message.group = object.group ?? '';
    message.admin = object.admin ?? '';
    return message;
  },
  fromAmino(object: QueryGetAdminRequestAmino): QueryGetAdminRequest {
    const message = createBaseQueryGetAdminRequest();
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    return message;
  },
  toAmino(message: QueryGetAdminRequest): QueryGetAdminRequestAmino {
    const obj: any = {};
    obj.group = message.group === '' ? undefined : message.group;
    obj.admin = message.admin === '' ? undefined : message.admin;
    return obj;
  },
  fromAminoMsg(object: QueryGetAdminRequestAminoMsg): QueryGetAdminRequest {
    return QueryGetAdminRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAdminRequestProtoMsg): QueryGetAdminRequest {
    return QueryGetAdminRequest.decode(message.value);
  },
  toProto(message: QueryGetAdminRequest): Uint8Array {
    return QueryGetAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAdminRequest): QueryGetAdminRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetAdminRequest',
      value: QueryGetAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAdminResponse(): QueryGetAdminResponse {
  return {
    admin: Admin.fromPartial({})
  };
}
export const QueryGetAdminResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetAdminResponse',
  encode(message: QueryGetAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== undefined) {
      Admin.encode(message.admin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.admin = Admin.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAdminResponse>): QueryGetAdminResponse {
    const message = createBaseQueryGetAdminResponse();
    message.admin = object.admin !== undefined && object.admin !== null ? Admin.fromPartial(object.admin) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAdminResponseAmino): QueryGetAdminResponse {
    const message = createBaseQueryGetAdminResponse();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = Admin.fromAmino(object.admin);
    }
    return message;
  },
  toAmino(message: QueryGetAdminResponse): QueryGetAdminResponseAmino {
    const obj: any = {};
    obj.admin = message.admin ? Admin.toAmino(message.admin) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAdminResponseAminoMsg): QueryGetAdminResponse {
    return QueryGetAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAdminResponseProtoMsg): QueryGetAdminResponse {
    return QueryGetAdminResponse.decode(message.value);
  },
  toProto(message: QueryGetAdminResponse): Uint8Array {
    return QueryGetAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAdminResponse): QueryGetAdminResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryGetAdminResponse',
      value: QueryGetAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAdminRequest(): QueryAllAdminRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllAdminRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllAdminRequest',
  encode(message: QueryAllAdminRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAdminRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAdminRequest();
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
  fromPartial(object: Partial<QueryAllAdminRequest>): QueryAllAdminRequest {
    const message = createBaseQueryAllAdminRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAdminRequestAmino): QueryAllAdminRequest {
    const message = createBaseQueryAllAdminRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAdminRequest): QueryAllAdminRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAdminRequestAminoMsg): QueryAllAdminRequest {
    return QueryAllAdminRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAdminRequestProtoMsg): QueryAllAdminRequest {
    return QueryAllAdminRequest.decode(message.value);
  },
  toProto(message: QueryAllAdminRequest): Uint8Array {
    return QueryAllAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAdminRequest): QueryAllAdminRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllAdminRequest',
      value: QueryAllAdminRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAdminResponse(): QueryAllAdminResponse {
  return {
    admin: [],
    pagination: undefined
  };
}
export const QueryAllAdminResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllAdminResponse',
  encode(message: QueryAllAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.admin) {
      Admin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.admin.push(Admin.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryAllAdminResponse>): QueryAllAdminResponse {
    const message = createBaseQueryAllAdminResponse();
    message.admin = object.admin?.map(e => Admin.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAdminResponseAmino): QueryAllAdminResponse {
    const message = createBaseQueryAllAdminResponse();
    message.admin = object.admin?.map(e => Admin.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAdminResponse): QueryAllAdminResponseAmino {
    const obj: any = {};
    if (message.admin) {
      obj.admin = message.admin.map(e => e ? Admin.toAmino(e) : undefined);
    } else {
      obj.admin = message.admin;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAdminResponseAminoMsg): QueryAllAdminResponse {
    return QueryAllAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAdminResponseProtoMsg): QueryAllAdminResponse {
    return QueryAllAdminResponse.decode(message.value);
  },
  toProto(message: QueryAllAdminResponse): Uint8Array {
    return QueryAllAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAdminResponse): QueryAllAdminResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryAllAdminResponse',
      value: QueryAllAdminResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListAdminOfGroupRequest(): QueryListAdminOfGroupRequest {
  return {
    group: '',
    pagination: undefined
  };
}
export const QueryListAdminOfGroupRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryListAdminOfGroupRequest',
  encode(message: QueryListAdminOfGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== '') {
      writer.uint32(10).string(message.group);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListAdminOfGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListAdminOfGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.group = reader.string();
        break;
      case 2:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryListAdminOfGroupRequest>): QueryListAdminOfGroupRequest {
    const message = createBaseQueryListAdminOfGroupRequest();
    message.group = object.group ?? '';
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListAdminOfGroupRequestAmino): QueryListAdminOfGroupRequest {
    const message = createBaseQueryListAdminOfGroupRequest();
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListAdminOfGroupRequest): QueryListAdminOfGroupRequestAmino {
    const obj: any = {};
    obj.group = message.group === '' ? undefined : message.group;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListAdminOfGroupRequestAminoMsg): QueryListAdminOfGroupRequest {
    return QueryListAdminOfGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListAdminOfGroupRequestProtoMsg): QueryListAdminOfGroupRequest {
    return QueryListAdminOfGroupRequest.decode(message.value);
  },
  toProto(message: QueryListAdminOfGroupRequest): Uint8Array {
    return QueryListAdminOfGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListAdminOfGroupRequest): QueryListAdminOfGroupRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryListAdminOfGroupRequest',
      value: QueryListAdminOfGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListAdminOfGroupResponse(): QueryListAdminOfGroupResponse {
  return {
    admin: [],
    pagination: undefined
  };
}
export const QueryListAdminOfGroupResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryListAdminOfGroupResponse',
  encode(message: QueryListAdminOfGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.admin) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListAdminOfGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListAdminOfGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.admin.push(reader.string());
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
  fromPartial(object: Partial<QueryListAdminOfGroupResponse>): QueryListAdminOfGroupResponse {
    const message = createBaseQueryListAdminOfGroupResponse();
    message.admin = object.admin?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListAdminOfGroupResponseAmino): QueryListAdminOfGroupResponse {
    const message = createBaseQueryListAdminOfGroupResponse();
    message.admin = object.admin?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListAdminOfGroupResponse): QueryListAdminOfGroupResponseAmino {
    const obj: any = {};
    if (message.admin) {
      obj.admin = message.admin.map(e => e);
    } else {
      obj.admin = message.admin;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListAdminOfGroupResponseAminoMsg): QueryListAdminOfGroupResponse {
    return QueryListAdminOfGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListAdminOfGroupResponseProtoMsg): QueryListAdminOfGroupResponse {
    return QueryListAdminOfGroupResponse.decode(message.value);
  },
  toProto(message: QueryListAdminOfGroupResponse): Uint8Array {
    return QueryListAdminOfGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListAdminOfGroupResponse): QueryListAdminOfGroupResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.QueryListAdminOfGroupResponse',
      value: QueryListAdminOfGroupResponse.encode(message).finish()
    };
  }
};