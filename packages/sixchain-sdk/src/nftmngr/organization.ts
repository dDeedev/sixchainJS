//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface Organization {
  name: string;
  owner: string;
}
export interface OrganizationProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.Organization';
  value: Uint8Array;
}
export interface OrganizationAmino {
  name?: string;
  owner?: string;
}
export interface OrganizationAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.Organization';
  value: OrganizationAmino;
}
export interface OrganizationSDKType {
  name: string;
  owner: string;
}
function createBaseOrganization(): Organization {
  return {
    name: '',
    owner: ''
  };
}
export const Organization = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.Organization',
  encode(message: Organization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.owner !== '') {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Organization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganization();
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
  fromPartial(object: Partial<Organization>): Organization {
    const message = createBaseOrganization();
    message.name = object.name ?? '';
    message.owner = object.owner ?? '';
    return message;
  },
  fromAmino(object: OrganizationAmino): Organization {
    const message = createBaseOrganization();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: Organization): OrganizationAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    obj.owner = message.owner === '' ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: OrganizationAminoMsg): Organization {
    return Organization.fromAmino(object.value);
  },
  fromProtoMsg(message: OrganizationProtoMsg): Organization {
    return Organization.decode(message.value);
  },
  toProto(message: Organization): Uint8Array {
    return Organization.encode(message).finish();
  },
  toProtoMsg(message: Organization): OrganizationProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.Organization',
      value: Organization.encode(message).finish()
    };
  }
};