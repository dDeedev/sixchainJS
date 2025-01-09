//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface MsgGrantPermission {
  creator: string;
  name: string;
  grantee: string;
}
export interface MsgGrantPermissionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.MsgGrantPermission';
  value: Uint8Array;
}
export interface MsgGrantPermissionAmino {
  creator?: string;
  name?: string;
  grantee?: string;
}
export interface MsgGrantPermissionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftadmin.MsgGrantPermission';
  value: MsgGrantPermissionAmino;
}
export interface MsgGrantPermissionSDKType {
  creator: string;
  name: string;
  grantee: string;
}
export interface MsgGrantPermissionResponse {
  grantee: string;
}
export interface MsgGrantPermissionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.MsgGrantPermissionResponse';
  value: Uint8Array;
}
export interface MsgGrantPermissionResponseAmino {
  grantee?: string;
}
export interface MsgGrantPermissionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftadmin.MsgGrantPermissionResponse';
  value: MsgGrantPermissionResponseAmino;
}
export interface MsgGrantPermissionResponseSDKType {
  grantee: string;
}
export interface MsgRevokePermission {
  creator: string;
  name: string;
  revokee: string;
}
export interface MsgRevokePermissionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.MsgRevokePermission';
  value: Uint8Array;
}
export interface MsgRevokePermissionAmino {
  creator?: string;
  name?: string;
  revokee?: string;
}
export interface MsgRevokePermissionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftadmin.MsgRevokePermission';
  value: MsgRevokePermissionAmino;
}
export interface MsgRevokePermissionSDKType {
  creator: string;
  name: string;
  revokee: string;
}
export interface MsgRevokePermissionResponse {
  revokee: string;
}
export interface MsgRevokePermissionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.MsgRevokePermissionResponse';
  value: Uint8Array;
}
export interface MsgRevokePermissionResponseAmino {
  revokee?: string;
}
export interface MsgRevokePermissionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftadmin.MsgRevokePermissionResponse';
  value: MsgRevokePermissionResponseAmino;
}
export interface MsgRevokePermissionResponseSDKType {
  revokee: string;
}
function createBaseMsgGrantPermission(): MsgGrantPermission {
  return {
    creator: '',
    name: '',
    grantee: ''
  };
}
export const MsgGrantPermission = {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.MsgGrantPermission',
  encode(message: MsgGrantPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.grantee !== '') {
      writer.uint32(26).string(message.grantee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantPermission();
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
        message.grantee = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGrantPermission>): MsgGrantPermission {
    const message = createBaseMsgGrantPermission();
    message.creator = object.creator ?? '';
    message.name = object.name ?? '';
    message.grantee = object.grantee ?? '';
    return message;
  },
  fromAmino(object: MsgGrantPermissionAmino): MsgGrantPermission {
    const message = createBaseMsgGrantPermission();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: MsgGrantPermission): MsgGrantPermissionAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.name = message.name === '' ? undefined : message.name;
    obj.grantee = message.grantee === '' ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgGrantPermissionAminoMsg): MsgGrantPermission {
    return MsgGrantPermission.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGrantPermissionProtoMsg): MsgGrantPermission {
    return MsgGrantPermission.decode(message.value);
  },
  toProto(message: MsgGrantPermission): Uint8Array {
    return MsgGrantPermission.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantPermission): MsgGrantPermissionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftadmin.MsgGrantPermission',
      value: MsgGrantPermission.encode(message).finish()
    };
  }
};
function createBaseMsgGrantPermissionResponse(): MsgGrantPermissionResponse {
  return {
    grantee: ''
  };
}
export const MsgGrantPermissionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.MsgGrantPermissionResponse',
  encode(message: MsgGrantPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantee !== '') {
      writer.uint32(10).string(message.grantee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantPermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.grantee = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGrantPermissionResponse>): MsgGrantPermissionResponse {
    const message = createBaseMsgGrantPermissionResponse();
    message.grantee = object.grantee ?? '';
    return message;
  },
  fromAmino(object: MsgGrantPermissionResponseAmino): MsgGrantPermissionResponse {
    const message = createBaseMsgGrantPermissionResponse();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: MsgGrantPermissionResponse): MsgGrantPermissionResponseAmino {
    const obj: any = {};
    obj.grantee = message.grantee === '' ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgGrantPermissionResponseAminoMsg): MsgGrantPermissionResponse {
    return MsgGrantPermissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGrantPermissionResponseProtoMsg): MsgGrantPermissionResponse {
    return MsgGrantPermissionResponse.decode(message.value);
  },
  toProto(message: MsgGrantPermissionResponse): Uint8Array {
    return MsgGrantPermissionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantPermissionResponse): MsgGrantPermissionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftadmin.MsgGrantPermissionResponse',
      value: MsgGrantPermissionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokePermission(): MsgRevokePermission {
  return {
    creator: '',
    name: '',
    revokee: ''
  };
}
export const MsgRevokePermission = {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.MsgRevokePermission',
  encode(message: MsgRevokePermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.revokee !== '') {
      writer.uint32(26).string(message.revokee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokePermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokePermission();
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
        message.revokee = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRevokePermission>): MsgRevokePermission {
    const message = createBaseMsgRevokePermission();
    message.creator = object.creator ?? '';
    message.name = object.name ?? '';
    message.revokee = object.revokee ?? '';
    return message;
  },
  fromAmino(object: MsgRevokePermissionAmino): MsgRevokePermission {
    const message = createBaseMsgRevokePermission();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.revokee !== undefined && object.revokee !== null) {
      message.revokee = object.revokee;
    }
    return message;
  },
  toAmino(message: MsgRevokePermission): MsgRevokePermissionAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.name = message.name === '' ? undefined : message.name;
    obj.revokee = message.revokee === '' ? undefined : message.revokee;
    return obj;
  },
  fromAminoMsg(object: MsgRevokePermissionAminoMsg): MsgRevokePermission {
    return MsgRevokePermission.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokePermissionProtoMsg): MsgRevokePermission {
    return MsgRevokePermission.decode(message.value);
  },
  toProto(message: MsgRevokePermission): Uint8Array {
    return MsgRevokePermission.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokePermission): MsgRevokePermissionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftadmin.MsgRevokePermission',
      value: MsgRevokePermission.encode(message).finish()
    };
  }
};
function createBaseMsgRevokePermissionResponse(): MsgRevokePermissionResponse {
  return {
    revokee: ''
  };
}
export const MsgRevokePermissionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.MsgRevokePermissionResponse',
  encode(message: MsgRevokePermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokee !== '') {
      writer.uint32(10).string(message.revokee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokePermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokePermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.revokee = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRevokePermissionResponse>): MsgRevokePermissionResponse {
    const message = createBaseMsgRevokePermissionResponse();
    message.revokee = object.revokee ?? '';
    return message;
  },
  fromAmino(object: MsgRevokePermissionResponseAmino): MsgRevokePermissionResponse {
    const message = createBaseMsgRevokePermissionResponse();
    if (object.revokee !== undefined && object.revokee !== null) {
      message.revokee = object.revokee;
    }
    return message;
  },
  toAmino(message: MsgRevokePermissionResponse): MsgRevokePermissionResponseAmino {
    const obj: any = {};
    obj.revokee = message.revokee === '' ? undefined : message.revokee;
    return obj;
  },
  fromAminoMsg(object: MsgRevokePermissionResponseAminoMsg): MsgRevokePermissionResponse {
    return MsgRevokePermissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokePermissionResponseProtoMsg): MsgRevokePermissionResponse {
    return MsgRevokePermissionResponse.decode(message.value);
  },
  toProto(message: MsgRevokePermissionResponse): Uint8Array {
    return MsgRevokePermissionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokePermissionResponse): MsgRevokePermissionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftadmin.MsgRevokePermissionResponse',
      value: MsgRevokePermissionResponse.encode(message).finish()
    };
  }
};