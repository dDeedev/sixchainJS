//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Long } from '../helpers';
export interface NftAttributeValue {
  name: string;
  numberAttributeValue?: NumberAttributeValue;
  stringAttributeValue?: StringAttributeValue;
  booleanAttributeValue?: BooleanAttributeValue;
  floatAttributeValue?: FloatAttributeValue;
  hiddenToMarketplace: boolean;
}
export interface NftAttributeValueProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NftAttributeValue';
  value: Uint8Array;
}
export interface NftAttributeValueAmino {
  name?: string;
  number_attribute_value?: NumberAttributeValueAmino;
  string_attribute_value?: StringAttributeValueAmino;
  boolean_attribute_value?: BooleanAttributeValueAmino;
  float_attribute_value?: FloatAttributeValueAmino;
  hidden_to_marketplace?: boolean;
}
export interface NftAttributeValueAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.NftAttributeValue';
  value: NftAttributeValueAmino;
}
export interface NftAttributeValueSDKType {
  name: string;
  number_attribute_value?: NumberAttributeValueSDKType;
  string_attribute_value?: StringAttributeValueSDKType;
  boolean_attribute_value?: BooleanAttributeValueSDKType;
  float_attribute_value?: FloatAttributeValueSDKType;
  hidden_to_marketplace: boolean;
}
export interface NumberAttributeValue {
  value: Long;
}
export interface NumberAttributeValueProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NumberAttributeValue';
  value: Uint8Array;
}
export interface NumberAttributeValueAmino {
  value?: string;
}
export interface NumberAttributeValueAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.NumberAttributeValue';
  value: NumberAttributeValueAmino;
}
export interface NumberAttributeValueSDKType {
  value: Long;
}
export interface StringAttributeValue {
  value: string;
}
export interface StringAttributeValueProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.StringAttributeValue';
  value: Uint8Array;
}
export interface StringAttributeValueAmino {
  value?: string;
}
export interface StringAttributeValueAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.StringAttributeValue';
  value: StringAttributeValueAmino;
}
export interface StringAttributeValueSDKType {
  value: string;
}
export interface BooleanAttributeValue {
  value: boolean;
}
export interface BooleanAttributeValueProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.BooleanAttributeValue';
  value: Uint8Array;
}
export interface BooleanAttributeValueAmino {
  value?: boolean;
}
export interface BooleanAttributeValueAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.BooleanAttributeValue';
  value: BooleanAttributeValueAmino;
}
export interface BooleanAttributeValueSDKType {
  value: boolean;
}
export interface FloatAttributeValue {
  value: number;
}
export interface FloatAttributeValueProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.FloatAttributeValue';
  value: Uint8Array;
}
export interface FloatAttributeValueAmino {
  value?: number;
}
export interface FloatAttributeValueAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.FloatAttributeValue';
  value: FloatAttributeValueAmino;
}
export interface FloatAttributeValueSDKType {
  value: number;
}
function createBaseNftAttributeValue(): NftAttributeValue {
  return {
    name: '',
    numberAttributeValue: undefined,
    stringAttributeValue: undefined,
    booleanAttributeValue: undefined,
    floatAttributeValue: undefined,
    hiddenToMarketplace: false
  };
}
export const NftAttributeValue = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NftAttributeValue',
  encode(message: NftAttributeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.numberAttributeValue !== undefined) {
      NumberAttributeValue.encode(message.numberAttributeValue, writer.uint32(18).fork()).ldelim();
    }
    if (message.stringAttributeValue !== undefined) {
      StringAttributeValue.encode(message.stringAttributeValue, writer.uint32(26).fork()).ldelim();
    }
    if (message.booleanAttributeValue !== undefined) {
      BooleanAttributeValue.encode(message.booleanAttributeValue, writer.uint32(34).fork()).ldelim();
    }
    if (message.floatAttributeValue !== undefined) {
      FloatAttributeValue.encode(message.floatAttributeValue, writer.uint32(42).fork()).ldelim();
    }
    if (message.hiddenToMarketplace === true) {
      writer.uint32(48).bool(message.hiddenToMarketplace);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NftAttributeValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftAttributeValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.name = reader.string();
        break;
      case 2:
        message.numberAttributeValue = NumberAttributeValue.decode(reader, reader.uint32());
        break;
      case 3:
        message.stringAttributeValue = StringAttributeValue.decode(reader, reader.uint32());
        break;
      case 4:
        message.booleanAttributeValue = BooleanAttributeValue.decode(reader, reader.uint32());
        break;
      case 5:
        message.floatAttributeValue = FloatAttributeValue.decode(reader, reader.uint32());
        break;
      case 6:
        message.hiddenToMarketplace = reader.bool();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NftAttributeValue>): NftAttributeValue {
    const message = createBaseNftAttributeValue();
    message.name = object.name ?? '';
    message.numberAttributeValue = object.numberAttributeValue !== undefined && object.numberAttributeValue !== null ? NumberAttributeValue.fromPartial(object.numberAttributeValue) : undefined;
    message.stringAttributeValue = object.stringAttributeValue !== undefined && object.stringAttributeValue !== null ? StringAttributeValue.fromPartial(object.stringAttributeValue) : undefined;
    message.booleanAttributeValue = object.booleanAttributeValue !== undefined && object.booleanAttributeValue !== null ? BooleanAttributeValue.fromPartial(object.booleanAttributeValue) : undefined;
    message.floatAttributeValue = object.floatAttributeValue !== undefined && object.floatAttributeValue !== null ? FloatAttributeValue.fromPartial(object.floatAttributeValue) : undefined;
    message.hiddenToMarketplace = object.hiddenToMarketplace ?? false;
    return message;
  },
  fromAmino(object: NftAttributeValueAmino): NftAttributeValue {
    const message = createBaseNftAttributeValue();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.number_attribute_value !== undefined && object.number_attribute_value !== null) {
      message.numberAttributeValue = NumberAttributeValue.fromAmino(object.number_attribute_value);
    }
    if (object.string_attribute_value !== undefined && object.string_attribute_value !== null) {
      message.stringAttributeValue = StringAttributeValue.fromAmino(object.string_attribute_value);
    }
    if (object.boolean_attribute_value !== undefined && object.boolean_attribute_value !== null) {
      message.booleanAttributeValue = BooleanAttributeValue.fromAmino(object.boolean_attribute_value);
    }
    if (object.float_attribute_value !== undefined && object.float_attribute_value !== null) {
      message.floatAttributeValue = FloatAttributeValue.fromAmino(object.float_attribute_value);
    }
    if (object.hidden_to_marketplace !== undefined && object.hidden_to_marketplace !== null) {
      message.hiddenToMarketplace = object.hidden_to_marketplace;
    }
    return message;
  },
  toAmino(message: NftAttributeValue): NftAttributeValueAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    obj.number_attribute_value = message.numberAttributeValue ? NumberAttributeValue.toAmino(message.numberAttributeValue) : undefined;
    obj.string_attribute_value = message.stringAttributeValue ? StringAttributeValue.toAmino(message.stringAttributeValue) : undefined;
    obj.boolean_attribute_value = message.booleanAttributeValue ? BooleanAttributeValue.toAmino(message.booleanAttributeValue) : undefined;
    obj.float_attribute_value = message.floatAttributeValue ? FloatAttributeValue.toAmino(message.floatAttributeValue) : undefined;
    obj.hidden_to_marketplace = message.hiddenToMarketplace === false ? undefined : message.hiddenToMarketplace;
    return obj;
  },
  fromAminoMsg(object: NftAttributeValueAminoMsg): NftAttributeValue {
    return NftAttributeValue.fromAmino(object.value);
  },
  fromProtoMsg(message: NftAttributeValueProtoMsg): NftAttributeValue {
    return NftAttributeValue.decode(message.value);
  },
  toProto(message: NftAttributeValue): Uint8Array {
    return NftAttributeValue.encode(message).finish();
  },
  toProtoMsg(message: NftAttributeValue): NftAttributeValueProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NftAttributeValue',
      value: NftAttributeValue.encode(message).finish()
    };
  }
};
function createBaseNumberAttributeValue(): NumberAttributeValue {
  return {
    value: Long.UZERO
  };
}
export const NumberAttributeValue = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NumberAttributeValue',
  encode(message: NumberAttributeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NumberAttributeValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumberAttributeValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.value = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NumberAttributeValue>): NumberAttributeValue {
    const message = createBaseNumberAttributeValue();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  },
  fromAmino(object: NumberAttributeValueAmino): NumberAttributeValue {
    const message = createBaseNumberAttributeValue();
    if (object.value !== undefined && object.value !== null) {
      message.value = Long.fromString(object.value);
    }
    return message;
  },
  toAmino(message: NumberAttributeValue): NumberAttributeValueAmino {
    const obj: any = {};
    obj.value = !message.value.isZero() ? message.value?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NumberAttributeValueAminoMsg): NumberAttributeValue {
    return NumberAttributeValue.fromAmino(object.value);
  },
  fromProtoMsg(message: NumberAttributeValueProtoMsg): NumberAttributeValue {
    return NumberAttributeValue.decode(message.value);
  },
  toProto(message: NumberAttributeValue): Uint8Array {
    return NumberAttributeValue.encode(message).finish();
  },
  toProtoMsg(message: NumberAttributeValue): NumberAttributeValueProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NumberAttributeValue',
      value: NumberAttributeValue.encode(message).finish()
    };
  }
};
function createBaseStringAttributeValue(): StringAttributeValue {
  return {
    value: ''
  };
}
export const StringAttributeValue = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.StringAttributeValue',
  encode(message: StringAttributeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== '') {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StringAttributeValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringAttributeValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.value = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StringAttributeValue>): StringAttributeValue {
    const message = createBaseStringAttributeValue();
    message.value = object.value ?? '';
    return message;
  },
  fromAmino(object: StringAttributeValueAmino): StringAttributeValue {
    const message = createBaseStringAttributeValue();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: StringAttributeValue): StringAttributeValueAmino {
    const obj: any = {};
    obj.value = message.value === '' ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: StringAttributeValueAminoMsg): StringAttributeValue {
    return StringAttributeValue.fromAmino(object.value);
  },
  fromProtoMsg(message: StringAttributeValueProtoMsg): StringAttributeValue {
    return StringAttributeValue.decode(message.value);
  },
  toProto(message: StringAttributeValue): Uint8Array {
    return StringAttributeValue.encode(message).finish();
  },
  toProtoMsg(message: StringAttributeValue): StringAttributeValueProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.StringAttributeValue',
      value: StringAttributeValue.encode(message).finish()
    };
  }
};
function createBaseBooleanAttributeValue(): BooleanAttributeValue {
  return {
    value: false
  };
}
export const BooleanAttributeValue = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.BooleanAttributeValue',
  encode(message: BooleanAttributeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BooleanAttributeValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBooleanAttributeValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.value = reader.bool();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BooleanAttributeValue>): BooleanAttributeValue {
    const message = createBaseBooleanAttributeValue();
    message.value = object.value ?? false;
    return message;
  },
  fromAmino(object: BooleanAttributeValueAmino): BooleanAttributeValue {
    const message = createBaseBooleanAttributeValue();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: BooleanAttributeValue): BooleanAttributeValueAmino {
    const obj: any = {};
    obj.value = message.value === false ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: BooleanAttributeValueAminoMsg): BooleanAttributeValue {
    return BooleanAttributeValue.fromAmino(object.value);
  },
  fromProtoMsg(message: BooleanAttributeValueProtoMsg): BooleanAttributeValue {
    return BooleanAttributeValue.decode(message.value);
  },
  toProto(message: BooleanAttributeValue): Uint8Array {
    return BooleanAttributeValue.encode(message).finish();
  },
  toProtoMsg(message: BooleanAttributeValue): BooleanAttributeValueProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.BooleanAttributeValue',
      value: BooleanAttributeValue.encode(message).finish()
    };
  }
};
function createBaseFloatAttributeValue(): FloatAttributeValue {
  return {
    value: 0
  };
}
export const FloatAttributeValue = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.FloatAttributeValue',
  encode(message: FloatAttributeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FloatAttributeValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatAttributeValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.value = reader.double();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FloatAttributeValue>): FloatAttributeValue {
    const message = createBaseFloatAttributeValue();
    message.value = object.value ?? 0;
    return message;
  },
  fromAmino(object: FloatAttributeValueAmino): FloatAttributeValue {
    const message = createBaseFloatAttributeValue();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: FloatAttributeValue): FloatAttributeValueAmino {
    const obj: any = {};
    obj.value = message.value === 0 ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: FloatAttributeValueAminoMsg): FloatAttributeValue {
    return FloatAttributeValue.fromAmino(object.value);
  },
  fromProtoMsg(message: FloatAttributeValueProtoMsg): FloatAttributeValue {
    return FloatAttributeValue.decode(message.value);
  },
  toProto(message: FloatAttributeValue): Uint8Array {
    return FloatAttributeValue.encode(message).finish();
  },
  toProtoMsg(message: FloatAttributeValue): FloatAttributeValueProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.FloatAttributeValue',
      value: FloatAttributeValue.encode(message).finish()
    };
  }
};