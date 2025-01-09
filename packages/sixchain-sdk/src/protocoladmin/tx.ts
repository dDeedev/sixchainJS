//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface MsgCreateGroup {
  creator: string;
  name: string;
}
export interface MsgCreateGroupProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroup';
  value: Uint8Array;
}
export interface MsgCreateGroupAmino {
  creator?: string;
  name?: string;
}
export interface MsgCreateGroupAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroup';
  value: MsgCreateGroupAmino;
}
export interface MsgCreateGroupSDKType {
  creator: string;
  name: string;
}
export interface MsgCreateGroupResponse {}
export interface MsgCreateGroupResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroupResponse';
  value: Uint8Array;
}
export interface MsgCreateGroupResponseAmino {}
export interface MsgCreateGroupResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroupResponse';
  value: MsgCreateGroupResponseAmino;
}
export interface MsgCreateGroupResponseSDKType {}
export interface MsgUpdateGroup {
  creator: string;
  name: string;
}
export interface MsgUpdateGroupProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroup';
  value: Uint8Array;
}
export interface MsgUpdateGroupAmino {
  creator?: string;
  name?: string;
}
export interface MsgUpdateGroupAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroup';
  value: MsgUpdateGroupAmino;
}
export interface MsgUpdateGroupSDKType {
  creator: string;
  name: string;
}
export interface MsgUpdateGroupResponse {}
export interface MsgUpdateGroupResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroupResponse';
  value: Uint8Array;
}
export interface MsgUpdateGroupResponseAmino {}
export interface MsgUpdateGroupResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroupResponse';
  value: MsgUpdateGroupResponseAmino;
}
export interface MsgUpdateGroupResponseSDKType {}
export interface MsgDeleteGroup {
  creator: string;
  name: string;
}
export interface MsgDeleteGroupProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroup';
  value: Uint8Array;
}
export interface MsgDeleteGroupAmino {
  creator?: string;
  name?: string;
}
export interface MsgDeleteGroupAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroup';
  value: MsgDeleteGroupAmino;
}
export interface MsgDeleteGroupSDKType {
  creator: string;
  name: string;
}
export interface MsgDeleteGroupResponse {}
export interface MsgDeleteGroupResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroupResponse';
  value: Uint8Array;
}
export interface MsgDeleteGroupResponseAmino {}
export interface MsgDeleteGroupResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroupResponse';
  value: MsgDeleteGroupResponseAmino;
}
export interface MsgDeleteGroupResponseSDKType {}
export interface MsgAddAdminToGroup {
  creator: string;
  name: string;
  address: string;
}
export interface MsgAddAdminToGroupProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroup';
  value: Uint8Array;
}
export interface MsgAddAdminToGroupAmino {
  creator?: string;
  name?: string;
  address?: string;
}
export interface MsgAddAdminToGroupAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroup';
  value: MsgAddAdminToGroupAmino;
}
export interface MsgAddAdminToGroupSDKType {
  creator: string;
  name: string;
  address: string;
}
export interface MsgAddAdminToGroupResponse {}
export interface MsgAddAdminToGroupResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroupResponse';
  value: Uint8Array;
}
export interface MsgAddAdminToGroupResponseAmino {}
export interface MsgAddAdminToGroupResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroupResponse';
  value: MsgAddAdminToGroupResponseAmino;
}
export interface MsgAddAdminToGroupResponseSDKType {}
export interface MsgRemoveAdminFromGroup {
  creator: string;
  name: string;
  address: string;
}
export interface MsgRemoveAdminFromGroupProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroup';
  value: Uint8Array;
}
export interface MsgRemoveAdminFromGroupAmino {
  creator?: string;
  name?: string;
  address?: string;
}
export interface MsgRemoveAdminFromGroupAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroup';
  value: MsgRemoveAdminFromGroupAmino;
}
export interface MsgRemoveAdminFromGroupSDKType {
  creator: string;
  name: string;
  address: string;
}
export interface MsgRemoveAdminFromGroupResponse {}
export interface MsgRemoveAdminFromGroupResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroupResponse';
  value: Uint8Array;
}
export interface MsgRemoveAdminFromGroupResponseAmino {}
export interface MsgRemoveAdminFromGroupResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroupResponse';
  value: MsgRemoveAdminFromGroupResponseAmino;
}
export interface MsgRemoveAdminFromGroupResponseSDKType {}
function createBaseMsgCreateGroup(): MsgCreateGroup {
  return {
    creator: '',
    name: ''
  };
}
export const MsgCreateGroup = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroup',
  encode(message: MsgCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateGroup>): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.creator = object.creator ?? '';
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: MsgCreateGroupAmino): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgCreateGroup): MsgCreateGroupAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupAminoMsg): MsgCreateGroup {
    return MsgCreateGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGroupProtoMsg): MsgCreateGroup {
    return MsgCreateGroup.decode(message.value);
  },
  toProto(message: MsgCreateGroup): Uint8Array {
    return MsgCreateGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroup): MsgCreateGroupProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroup',
      value: MsgCreateGroup.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {};
}
export const MsgCreateGroupResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroupResponse',
  encode(_: MsgCreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
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
  fromPartial(_: Partial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    return message;
  },
  fromAmino(_: MsgCreateGroupResponseAmino): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    return message;
  },
  toAmino(_: MsgCreateGroupResponse): MsgCreateGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupResponseAminoMsg): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGroupResponseProtoMsg): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupResponse): Uint8Array {
    return MsgCreateGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgCreateGroupResponse',
      value: MsgCreateGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroup(): MsgUpdateGroup {
  return {
    creator: '',
    name: ''
  };
}
export const MsgUpdateGroup = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroup',
  encode(message: MsgUpdateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateGroup>): MsgUpdateGroup {
    const message = createBaseMsgUpdateGroup();
    message.creator = object.creator ?? '';
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: MsgUpdateGroupAmino): MsgUpdateGroup {
    const message = createBaseMsgUpdateGroup();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgUpdateGroup): MsgUpdateGroupAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAminoMsg): MsgUpdateGroup {
    return MsgUpdateGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupProtoMsg): MsgUpdateGroup {
    return MsgUpdateGroup.decode(message.value);
  },
  toProto(message: MsgUpdateGroup): Uint8Array {
    return MsgUpdateGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroup): MsgUpdateGroupProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroup',
      value: MsgUpdateGroup.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupResponse(): MsgUpdateGroupResponse {
  return {};
}
export const MsgUpdateGroupResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroupResponse',
  encode(_: MsgUpdateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupResponse();
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
  fromPartial(_: Partial<MsgUpdateGroupResponse>): MsgUpdateGroupResponse {
    const message = createBaseMsgUpdateGroupResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupResponseAmino): MsgUpdateGroupResponse {
    const message = createBaseMsgUpdateGroupResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupResponse): MsgUpdateGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupResponseAminoMsg): MsgUpdateGroupResponse {
    return MsgUpdateGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupResponseProtoMsg): MsgUpdateGroupResponse {
    return MsgUpdateGroupResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupResponse): Uint8Array {
    return MsgUpdateGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupResponse): MsgUpdateGroupResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgUpdateGroupResponse',
      value: MsgUpdateGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteGroup(): MsgDeleteGroup {
  return {
    creator: '',
    name: ''
  };
}
export const MsgDeleteGroup = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroup',
  encode(message: MsgDeleteGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteGroup>): MsgDeleteGroup {
    const message = createBaseMsgDeleteGroup();
    message.creator = object.creator ?? '';
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: MsgDeleteGroupAmino): MsgDeleteGroup {
    const message = createBaseMsgDeleteGroup();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgDeleteGroup): MsgDeleteGroupAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteGroupAminoMsg): MsgDeleteGroup {
    return MsgDeleteGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteGroupProtoMsg): MsgDeleteGroup {
    return MsgDeleteGroup.decode(message.value);
  },
  toProto(message: MsgDeleteGroup): Uint8Array {
    return MsgDeleteGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteGroup): MsgDeleteGroupProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroup',
      value: MsgDeleteGroup.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteGroupResponse(): MsgDeleteGroupResponse {
  return {};
}
export const MsgDeleteGroupResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroupResponse',
  encode(_: MsgDeleteGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteGroupResponse();
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
  fromPartial(_: Partial<MsgDeleteGroupResponse>): MsgDeleteGroupResponse {
    const message = createBaseMsgDeleteGroupResponse();
    return message;
  },
  fromAmino(_: MsgDeleteGroupResponseAmino): MsgDeleteGroupResponse {
    const message = createBaseMsgDeleteGroupResponse();
    return message;
  },
  toAmino(_: MsgDeleteGroupResponse): MsgDeleteGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteGroupResponseAminoMsg): MsgDeleteGroupResponse {
    return MsgDeleteGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteGroupResponseProtoMsg): MsgDeleteGroupResponse {
    return MsgDeleteGroupResponse.decode(message.value);
  },
  toProto(message: MsgDeleteGroupResponse): Uint8Array {
    return MsgDeleteGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteGroupResponse): MsgDeleteGroupResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgDeleteGroupResponse',
      value: MsgDeleteGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddAdminToGroup(): MsgAddAdminToGroup {
  return {
    creator: '',
    name: '',
    address: ''
  };
}
export const MsgAddAdminToGroup = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroup',
  encode(message: MsgAddAdminToGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.address !== '') {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAdminToGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAdminToGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      case 3:
        message.address = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddAdminToGroup>): MsgAddAdminToGroup {
    const message = createBaseMsgAddAdminToGroup();
    message.creator = object.creator ?? '';
    message.name = object.name ?? '';
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: MsgAddAdminToGroupAmino): MsgAddAdminToGroup {
    const message = createBaseMsgAddAdminToGroup();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgAddAdminToGroup): MsgAddAdminToGroupAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.name = message.name === '' ? undefined : message.name;
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgAddAdminToGroupAminoMsg): MsgAddAdminToGroup {
    return MsgAddAdminToGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAdminToGroupProtoMsg): MsgAddAdminToGroup {
    return MsgAddAdminToGroup.decode(message.value);
  },
  toProto(message: MsgAddAdminToGroup): Uint8Array {
    return MsgAddAdminToGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAdminToGroup): MsgAddAdminToGroupProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroup',
      value: MsgAddAdminToGroup.encode(message).finish()
    };
  }
};
function createBaseMsgAddAdminToGroupResponse(): MsgAddAdminToGroupResponse {
  return {};
}
export const MsgAddAdminToGroupResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroupResponse',
  encode(_: MsgAddAdminToGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAdminToGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAdminToGroupResponse();
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
  fromPartial(_: Partial<MsgAddAdminToGroupResponse>): MsgAddAdminToGroupResponse {
    const message = createBaseMsgAddAdminToGroupResponse();
    return message;
  },
  fromAmino(_: MsgAddAdminToGroupResponseAmino): MsgAddAdminToGroupResponse {
    const message = createBaseMsgAddAdminToGroupResponse();
    return message;
  },
  toAmino(_: MsgAddAdminToGroupResponse): MsgAddAdminToGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddAdminToGroupResponseAminoMsg): MsgAddAdminToGroupResponse {
    return MsgAddAdminToGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAdminToGroupResponseProtoMsg): MsgAddAdminToGroupResponse {
    return MsgAddAdminToGroupResponse.decode(message.value);
  },
  toProto(message: MsgAddAdminToGroupResponse): Uint8Array {
    return MsgAddAdminToGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAdminToGroupResponse): MsgAddAdminToGroupResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgAddAdminToGroupResponse',
      value: MsgAddAdminToGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveAdminFromGroup(): MsgRemoveAdminFromGroup {
  return {
    creator: '',
    name: '',
    address: ''
  };
}
export const MsgRemoveAdminFromGroup = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroup',
  encode(message: MsgRemoveAdminFromGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.address !== '') {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAdminFromGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAdminFromGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      case 3:
        message.address = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveAdminFromGroup>): MsgRemoveAdminFromGroup {
    const message = createBaseMsgRemoveAdminFromGroup();
    message.creator = object.creator ?? '';
    message.name = object.name ?? '';
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: MsgRemoveAdminFromGroupAmino): MsgRemoveAdminFromGroup {
    const message = createBaseMsgRemoveAdminFromGroup();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgRemoveAdminFromGroup): MsgRemoveAdminFromGroupAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.name = message.name === '' ? undefined : message.name;
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAdminFromGroupAminoMsg): MsgRemoveAdminFromGroup {
    return MsgRemoveAdminFromGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveAdminFromGroupProtoMsg): MsgRemoveAdminFromGroup {
    return MsgRemoveAdminFromGroup.decode(message.value);
  },
  toProto(message: MsgRemoveAdminFromGroup): Uint8Array {
    return MsgRemoveAdminFromGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAdminFromGroup): MsgRemoveAdminFromGroupProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroup',
      value: MsgRemoveAdminFromGroup.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveAdminFromGroupResponse(): MsgRemoveAdminFromGroupResponse {
  return {};
}
export const MsgRemoveAdminFromGroupResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroupResponse',
  encode(_: MsgRemoveAdminFromGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAdminFromGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAdminFromGroupResponse();
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
  fromPartial(_: Partial<MsgRemoveAdminFromGroupResponse>): MsgRemoveAdminFromGroupResponse {
    const message = createBaseMsgRemoveAdminFromGroupResponse();
    return message;
  },
  fromAmino(_: MsgRemoveAdminFromGroupResponseAmino): MsgRemoveAdminFromGroupResponse {
    const message = createBaseMsgRemoveAdminFromGroupResponse();
    return message;
  },
  toAmino(_: MsgRemoveAdminFromGroupResponse): MsgRemoveAdminFromGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAdminFromGroupResponseAminoMsg): MsgRemoveAdminFromGroupResponse {
    return MsgRemoveAdminFromGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveAdminFromGroupResponseProtoMsg): MsgRemoveAdminFromGroupResponse {
    return MsgRemoveAdminFromGroupResponse.decode(message.value);
  },
  toProto(message: MsgRemoveAdminFromGroupResponse): Uint8Array {
    return MsgRemoveAdminFromGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAdminFromGroupResponse): MsgRemoveAdminFromGroupResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.MsgRemoveAdminFromGroupResponse',
      value: MsgRemoveAdminFromGroupResponse.encode(message).finish()
    };
  }
};