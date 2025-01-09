//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Long } from '../helpers';
export interface OpenseaDisplayOption {
  displayType: string;
  traitType: string;
  maxValue: Long;
}
export interface OpenseaDisplayOptionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.OpenseaDisplayOption';
  value: Uint8Array;
}
export interface OpenseaDisplayOptionAmino {
  display_type?: string;
  trait_type?: string;
  max_value?: string;
}
export interface OpenseaDisplayOptionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.OpenseaDisplayOption';
  value: OpenseaDisplayOptionAmino;
}
export interface OpenseaDisplayOptionSDKType {
  display_type: string;
  trait_type: string;
  max_value: Long;
}
function createBaseOpenseaDisplayOption(): OpenseaDisplayOption {
  return {
    displayType: '',
    traitType: '',
    maxValue: Long.UZERO
  };
}
export const OpenseaDisplayOption = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.OpenseaDisplayOption',
  encode(message: OpenseaDisplayOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.displayType !== '') {
      writer.uint32(10).string(message.displayType);
    }
    if (message.traitType !== '') {
      writer.uint32(18).string(message.traitType);
    }
    if (!message.maxValue.isZero()) {
      writer.uint32(24).uint64(message.maxValue);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OpenseaDisplayOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenseaDisplayOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.displayType = reader.string();
        break;
      case 2:
        message.traitType = reader.string();
        break;
      case 3:
        message.maxValue = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OpenseaDisplayOption>): OpenseaDisplayOption {
    const message = createBaseOpenseaDisplayOption();
    message.displayType = object.displayType ?? '';
    message.traitType = object.traitType ?? '';
    message.maxValue = object.maxValue !== undefined && object.maxValue !== null ? Long.fromValue(object.maxValue) : Long.UZERO;
    return message;
  },
  fromAmino(object: OpenseaDisplayOptionAmino): OpenseaDisplayOption {
    const message = createBaseOpenseaDisplayOption();
    if (object.display_type !== undefined && object.display_type !== null) {
      message.displayType = object.display_type;
    }
    if (object.trait_type !== undefined && object.trait_type !== null) {
      message.traitType = object.trait_type;
    }
    if (object.max_value !== undefined && object.max_value !== null) {
      message.maxValue = Long.fromString(object.max_value);
    }
    return message;
  },
  toAmino(message: OpenseaDisplayOption): OpenseaDisplayOptionAmino {
    const obj: any = {};
    obj.display_type = message.displayType === '' ? undefined : message.displayType;
    obj.trait_type = message.traitType === '' ? undefined : message.traitType;
    obj.max_value = !message.maxValue.isZero() ? message.maxValue?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OpenseaDisplayOptionAminoMsg): OpenseaDisplayOption {
    return OpenseaDisplayOption.fromAmino(object.value);
  },
  fromProtoMsg(message: OpenseaDisplayOptionProtoMsg): OpenseaDisplayOption {
    return OpenseaDisplayOption.decode(message.value);
  },
  toProto(message: OpenseaDisplayOption): Uint8Array {
    return OpenseaDisplayOption.encode(message).finish();
  },
  toProtoMsg(message: OpenseaDisplayOption): OpenseaDisplayOptionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.OpenseaDisplayOption',
      value: OpenseaDisplayOption.encode(message).finish()
    };
  }
};