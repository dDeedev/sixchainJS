//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { OpenseaDisplayOption, OpenseaDisplayOptionAmino, OpenseaDisplayOptionSDKType } from './opensea_display_option';
export interface DisplayOption {
  boolTrueValue: string;
  boolFalseValue: string;
  opensea?: OpenseaDisplayOption;
}
export interface DisplayOptionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.DisplayOption';
  value: Uint8Array;
}
export interface DisplayOptionAmino {
  bool_true_value?: string;
  bool_false_value?: string;
  opensea?: OpenseaDisplayOptionAmino;
}
export interface DisplayOptionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.DisplayOption';
  value: DisplayOptionAmino;
}
export interface DisplayOptionSDKType {
  bool_true_value: string;
  bool_false_value: string;
  opensea?: OpenseaDisplayOptionSDKType;
}
function createBaseDisplayOption(): DisplayOption {
  return {
    boolTrueValue: '',
    boolFalseValue: '',
    opensea: undefined
  };
}
export const DisplayOption = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.DisplayOption',
  encode(message: DisplayOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boolTrueValue !== '') {
      writer.uint32(10).string(message.boolTrueValue);
    }
    if (message.boolFalseValue !== '') {
      writer.uint32(18).string(message.boolFalseValue);
    }
    if (message.opensea !== undefined) {
      OpenseaDisplayOption.encode(message.opensea, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DisplayOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisplayOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.boolTrueValue = reader.string();
        break;
      case 2:
        message.boolFalseValue = reader.string();
        break;
      case 3:
        message.opensea = OpenseaDisplayOption.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DisplayOption>): DisplayOption {
    const message = createBaseDisplayOption();
    message.boolTrueValue = object.boolTrueValue ?? '';
    message.boolFalseValue = object.boolFalseValue ?? '';
    message.opensea = object.opensea !== undefined && object.opensea !== null ? OpenseaDisplayOption.fromPartial(object.opensea) : undefined;
    return message;
  },
  fromAmino(object: DisplayOptionAmino): DisplayOption {
    const message = createBaseDisplayOption();
    if (object.bool_true_value !== undefined && object.bool_true_value !== null) {
      message.boolTrueValue = object.bool_true_value;
    }
    if (object.bool_false_value !== undefined && object.bool_false_value !== null) {
      message.boolFalseValue = object.bool_false_value;
    }
    if (object.opensea !== undefined && object.opensea !== null) {
      message.opensea = OpenseaDisplayOption.fromAmino(object.opensea);
    }
    return message;
  },
  toAmino(message: DisplayOption): DisplayOptionAmino {
    const obj: any = {};
    obj.bool_true_value = message.boolTrueValue === '' ? undefined : message.boolTrueValue;
    obj.bool_false_value = message.boolFalseValue === '' ? undefined : message.boolFalseValue;
    obj.opensea = message.opensea ? OpenseaDisplayOption.toAmino(message.opensea) : undefined;
    return obj;
  },
  fromAminoMsg(object: DisplayOptionAminoMsg): DisplayOption {
    return DisplayOption.fromAmino(object.value);
  },
  fromProtoMsg(message: DisplayOptionProtoMsg): DisplayOption {
    return DisplayOption.decode(message.value);
  },
  toProto(message: DisplayOption): Uint8Array {
    return DisplayOption.encode(message).finish();
  },
  toProtoMsg(message: DisplayOption): DisplayOptionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.DisplayOption',
      value: DisplayOption.encode(message).finish()
    };
  }
};