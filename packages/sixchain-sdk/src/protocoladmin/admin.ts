//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface Admin {
  group: string;
  admin: string;
}
export interface AdminProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.Admin';
  value: Uint8Array;
}
export interface AdminAmino {
  group?: string;
  admin?: string;
}
export interface AdminAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.Admin';
  value: AdminAmino;
}
export interface AdminSDKType {
  group: string;
  admin: string;
}
function createBaseAdmin(): Admin {
  return {
    group: '',
    admin: ''
  };
}
export const Admin = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.Admin',
  encode(message: Admin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== '') {
      writer.uint32(10).string(message.group);
    }
    if (message.admin !== '') {
      writer.uint32(18).string(message.admin);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Admin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdmin();
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
  fromPartial(object: Partial<Admin>): Admin {
    const message = createBaseAdmin();
    message.group = object.group ?? '';
    message.admin = object.admin ?? '';
    return message;
  },
  fromAmino(object: AdminAmino): Admin {
    const message = createBaseAdmin();
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    return message;
  },
  toAmino(message: Admin): AdminAmino {
    const obj: any = {};
    obj.group = message.group === '' ? undefined : message.group;
    obj.admin = message.admin === '' ? undefined : message.admin;
    return obj;
  },
  fromAminoMsg(object: AdminAminoMsg): Admin {
    return Admin.fromAmino(object.value);
  },
  fromProtoMsg(message: AdminProtoMsg): Admin {
    return Admin.decode(message.value);
  },
  toProto(message: Admin): Uint8Array {
    return Admin.encode(message).finish();
  },
  toProtoMsg(message: Admin): AdminProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.Admin',
      value: Admin.encode(message).finish()
    };
  }
};