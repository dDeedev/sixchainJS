//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Permissions, PermissionsAmino, PermissionsSDKType } from './permissions';
export interface Authorization {
  rootAdmin: string;
  permissions?: Permissions;
}
export interface AuthorizationProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.Authorization';
  value: Uint8Array;
}
export interface AuthorizationAmino {
  root_admin?: string;
  permissions?: PermissionsAmino;
}
export interface AuthorizationAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftadmin.Authorization';
  value: AuthorizationAmino;
}
export interface AuthorizationSDKType {
  root_admin: string;
  permissions?: PermissionsSDKType;
}
function createBaseAuthorization(): Authorization {
  return {
    rootAdmin: '',
    permissions: undefined
  };
}
export const Authorization = {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.Authorization',
  encode(message: Authorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rootAdmin !== '') {
      writer.uint32(10).string(message.rootAdmin);
    }
    if (message.permissions !== undefined) {
      Permissions.encode(message.permissions, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Authorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.rootAdmin = reader.string();
        break;
      case 2:
        message.permissions = Permissions.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Authorization>): Authorization {
    const message = createBaseAuthorization();
    message.rootAdmin = object.rootAdmin ?? '';
    message.permissions = object.permissions !== undefined && object.permissions !== null ? Permissions.fromPartial(object.permissions) : undefined;
    return message;
  },
  fromAmino(object: AuthorizationAmino): Authorization {
    const message = createBaseAuthorization();
    if (object.root_admin !== undefined && object.root_admin !== null) {
      message.rootAdmin = object.root_admin;
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = Permissions.fromAmino(object.permissions);
    }
    return message;
  },
  toAmino(message: Authorization): AuthorizationAmino {
    const obj: any = {};
    obj.root_admin = message.rootAdmin === '' ? undefined : message.rootAdmin;
    obj.permissions = message.permissions ? Permissions.toAmino(message.permissions) : undefined;
    return obj;
  },
  fromAminoMsg(object: AuthorizationAminoMsg): Authorization {
    return Authorization.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthorizationProtoMsg): Authorization {
    return Authorization.decode(message.value);
  },
  toProto(message: Authorization): Uint8Array {
    return Authorization.encode(message).finish();
  },
  toProtoMsg(message: Authorization): AuthorizationProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftadmin.Authorization',
      value: Authorization.encode(message).finish()
    };
  }
};