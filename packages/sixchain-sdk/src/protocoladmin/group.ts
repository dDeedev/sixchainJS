//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface Group {
  name: string;
  owner: string;
}
export interface GroupProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.Group';
  value: Uint8Array;
}
export interface GroupAmino {
  name?: string;
  owner?: string;
}
export interface GroupAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.Group';
  value: GroupAmino;
}
export interface GroupSDKType {
  name: string;
  owner: string;
}
function createBaseGroup(): Group {
  return {
    name: '',
    owner: ''
  };
}
export const Group = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.Group',
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.owner !== '') {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Group {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.name = reader.string();
        break;
      case 2:
        message.owner = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Group>): Group {
    const message = createBaseGroup();
    message.name = object.name ?? '';
    message.owner = object.owner ?? '';
    return message;
  },
  fromAmino(object: GroupAmino): Group {
    const message = createBaseGroup();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: Group): GroupAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    obj.owner = message.owner === '' ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: GroupAminoMsg): Group {
    return Group.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupProtoMsg): Group {
    return Group.decode(message.value);
  },
  toProto(message: Group): Uint8Array {
    return Group.encode(message).finish();
  },
  toProtoMsg(message: Group): GroupProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.Group',
      value: Group.encode(message).finish()
    };
  }
};