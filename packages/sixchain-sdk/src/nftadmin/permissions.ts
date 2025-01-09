//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface AddressList {
  addresses: string[];
}
export interface AddressListProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.AddressList';
  value: Uint8Array;
}
export interface AddressListAmino {
  addresses?: string[];
}
export interface AddressListAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftadmin.AddressList';
  value: AddressListAmino;
}
export interface AddressListSDKType {
  addresses: string[];
}
export interface Permission {
  name: string;
  addresses?: AddressList;
}
export interface PermissionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.Permission';
  value: Uint8Array;
}
export interface PermissionAmino {
  name?: string;
  addresses?: AddressListAmino;
}
export interface PermissionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftadmin.Permission';
  value: PermissionAmino;
}
export interface PermissionSDKType {
  name: string;
  addresses?: AddressListSDKType;
}
export interface Permissions {
  permissions: Permission[];
}
export interface PermissionsProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.Permissions';
  value: Uint8Array;
}
export interface PermissionsAmino {
  permissions?: PermissionAmino[];
}
export interface PermissionsAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftadmin.Permissions';
  value: PermissionsAmino;
}
export interface PermissionsSDKType {
  permissions: PermissionSDKType[];
}
function createBaseAddressList(): AddressList {
  return {
    addresses: []
  };
}
export const AddressList = {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.AddressList',
  encode(message: AddressList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddressList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.addresses.push(reader.string());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddressList>): AddressList {
    const message = createBaseAddressList();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AddressListAmino): AddressList {
    const message = createBaseAddressList();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: AddressList): AddressListAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: AddressListAminoMsg): AddressList {
    return AddressList.fromAmino(object.value);
  },
  fromProtoMsg(message: AddressListProtoMsg): AddressList {
    return AddressList.decode(message.value);
  },
  toProto(message: AddressList): Uint8Array {
    return AddressList.encode(message).finish();
  },
  toProtoMsg(message: AddressList): AddressListProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftadmin.AddressList',
      value: AddressList.encode(message).finish()
    };
  }
};
function createBasePermission(): Permission {
  return {
    name: '',
    addresses: undefined
  };
}
export const Permission = {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.Permission',
  encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.addresses !== undefined) {
      AddressList.encode(message.addresses, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.name = reader.string();
        break;
      case 2:
        message.addresses = AddressList.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Permission>): Permission {
    const message = createBasePermission();
    message.name = object.name ?? '';
    message.addresses = object.addresses !== undefined && object.addresses !== null ? AddressList.fromPartial(object.addresses) : undefined;
    return message;
  },
  fromAmino(object: PermissionAmino): Permission {
    const message = createBasePermission();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      message.addresses = AddressList.fromAmino(object.addresses);
    }
    return message;
  },
  toAmino(message: Permission): PermissionAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    obj.addresses = message.addresses ? AddressList.toAmino(message.addresses) : undefined;
    return obj;
  },
  fromAminoMsg(object: PermissionAminoMsg): Permission {
    return Permission.fromAmino(object.value);
  },
  fromProtoMsg(message: PermissionProtoMsg): Permission {
    return Permission.decode(message.value);
  },
  toProto(message: Permission): Uint8Array {
    return Permission.encode(message).finish();
  },
  toProtoMsg(message: Permission): PermissionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftadmin.Permission',
      value: Permission.encode(message).finish()
    };
  }
};
function createBasePermissions(): Permissions {
  return {
    permissions: []
  };
}
export const Permissions = {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.Permissions',
  encode(message: Permissions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Permissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.permissions.push(Permission.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Permissions>): Permissions {
    const message = createBasePermissions();
    message.permissions = object.permissions?.map(e => Permission.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PermissionsAmino): Permissions {
    const message = createBasePermissions();
    message.permissions = object.permissions?.map(e => Permission.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Permissions): PermissionsAmino {
    const obj: any = {};
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e ? Permission.toAmino(e) : undefined);
    } else {
      obj.permissions = message.permissions;
    }
    return obj;
  },
  fromAminoMsg(object: PermissionsAminoMsg): Permissions {
    return Permissions.fromAmino(object.value);
  },
  fromProtoMsg(message: PermissionsProtoMsg): Permissions {
    return Permissions.decode(message.value);
  },
  toProto(message: Permissions): Uint8Array {
    return Permissions.encode(message).finish();
  },
  toProtoMsg(message: Permissions): PermissionsProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftadmin.Permissions',
      value: Permissions.encode(message).finish()
    };
  }
};