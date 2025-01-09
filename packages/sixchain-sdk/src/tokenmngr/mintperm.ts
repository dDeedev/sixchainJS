//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface Mintperm {
  token: string;
  address: string;
  creator: string;
}
export interface MintpermProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Mintperm';
  value: Uint8Array;
}
export interface MintpermAmino {
  token?: string;
  address?: string;
  creator?: string;
}
export interface MintpermAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.Mintperm';
  value: MintpermAmino;
}
export interface MintpermSDKType {
  token: string;
  address: string;
  creator: string;
}
function createBaseMintperm(): Mintperm {
  return {
    token: '',
    address: '',
    creator: ''
  };
}
export const Mintperm = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Mintperm',
  encode(message: Mintperm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== '') {
      writer.uint32(10).string(message.token);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    if (message.creator !== '') {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Mintperm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintperm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.token = reader.string();
        break;
      case 2:
        message.address = reader.string();
        break;
      case 3:
        message.creator = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Mintperm>): Mintperm {
    const message = createBaseMintperm();
    message.token = object.token ?? '';
    message.address = object.address ?? '';
    message.creator = object.creator ?? '';
    return message;
  },
  fromAmino(object: MintpermAmino): Mintperm {
    const message = createBaseMintperm();
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: Mintperm): MintpermAmino {
    const obj: any = {};
    obj.token = message.token === '' ? undefined : message.token;
    obj.address = message.address === '' ? undefined : message.address;
    obj.creator = message.creator === '' ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MintpermAminoMsg): Mintperm {
    return Mintperm.fromAmino(object.value);
  },
  fromProtoMsg(message: MintpermProtoMsg): Mintperm {
    return Mintperm.decode(message.value);
  },
  toProto(message: Mintperm): Uint8Array {
    return Mintperm.encode(message).finish();
  },
  toProtoMsg(message: Mintperm): MintpermProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Mintperm',
      value: Mintperm.encode(message).finish()
    };
  }
};