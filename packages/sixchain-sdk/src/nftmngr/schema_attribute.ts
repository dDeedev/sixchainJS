//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { BooleanAttributeValue, BooleanAttributeValueAmino, BooleanAttributeValueSDKType, FloatAttributeValue, FloatAttributeValueAmino, FloatAttributeValueSDKType,NumberAttributeValue, NumberAttributeValueAmino, NumberAttributeValueSDKType, StringAttributeValue, StringAttributeValueAmino, StringAttributeValueSDKType } from './nft_attribute_value';
export interface SchemaAttribute {
  nftSchemaCode: string;
  name: string;
  dataType: string;
  currentValue?: SchemaAttributeValue;
  creator: string;
}
export interface SchemaAttributeProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.SchemaAttribute';
  value: Uint8Array;
}
export interface SchemaAttributeAmino {
  nftSchemaCode?: string;
  name?: string;
  data_type?: string;
  current_value?: SchemaAttributeValueAmino;
  creator?: string;
}
export interface SchemaAttributeAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.SchemaAttribute';
  value: SchemaAttributeAmino;
}
export interface SchemaAttributeSDKType {
  nftSchemaCode: string;
  name: string;
  data_type: string;
  current_value?: SchemaAttributeValueSDKType;
  creator: string;
}
export interface SchemaAttributeValue {
  numberAttributeValue?: NumberAttributeValue;
  stringAttributeValue?: StringAttributeValue;
  booleanAttributeValue?: BooleanAttributeValue;
  floatAttributeValue?: FloatAttributeValue;
}
export interface SchemaAttributeValueProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.SchemaAttributeValue';
  value: Uint8Array;
}
export interface SchemaAttributeValueAmino {
  number_attribute_value?: NumberAttributeValueAmino;
  string_attribute_value?: StringAttributeValueAmino;
  boolean_attribute_value?: BooleanAttributeValueAmino;
  float_attribute_value?: FloatAttributeValueAmino;
}
export interface SchemaAttributeValueAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.SchemaAttributeValue';
  value: SchemaAttributeValueAmino;
}
export interface SchemaAttributeValueSDKType {
  number_attribute_value?: NumberAttributeValueSDKType;
  string_attribute_value?: StringAttributeValueSDKType;
  boolean_attribute_value?: BooleanAttributeValueSDKType;
  float_attribute_value?: FloatAttributeValueSDKType;
}
function createBaseSchemaAttribute(): SchemaAttribute {
  return {
    nftSchemaCode: '',
    name: '',
    dataType: '',
    currentValue: undefined,
    creator: ''
  };
}
export const SchemaAttribute = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.SchemaAttribute',
  encode(message: SchemaAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.dataType !== '') {
      writer.uint32(26).string(message.dataType);
    }
    if (message.currentValue !== undefined) {
      SchemaAttributeValue.encode(message.currentValue, writer.uint32(34).fork()).ldelim();
    }
    if (message.creator !== '') {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      case 3:
        message.dataType = reader.string();
        break;
      case 4:
        message.currentValue = SchemaAttributeValue.decode(reader, reader.uint32());
        break;
      case 5:
        message.creator = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SchemaAttribute>): SchemaAttribute {
    const message = createBaseSchemaAttribute();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.name = object.name ?? '';
    message.dataType = object.dataType ?? '';
    message.currentValue = object.currentValue !== undefined && object.currentValue !== null ? SchemaAttributeValue.fromPartial(object.currentValue) : undefined;
    message.creator = object.creator ?? '';
    return message;
  },
  fromAmino(object: SchemaAttributeAmino): SchemaAttribute {
    const message = createBaseSchemaAttribute();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.data_type !== undefined && object.data_type !== null) {
      message.dataType = object.data_type;
    }
    if (object.current_value !== undefined && object.current_value !== null) {
      message.currentValue = SchemaAttributeValue.fromAmino(object.current_value);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: SchemaAttribute): SchemaAttributeAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.name = message.name === '' ? undefined : message.name;
    obj.data_type = message.dataType === '' ? undefined : message.dataType;
    obj.current_value = message.currentValue ? SchemaAttributeValue.toAmino(message.currentValue) : undefined;
    obj.creator = message.creator === '' ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: SchemaAttributeAminoMsg): SchemaAttribute {
    return SchemaAttribute.fromAmino(object.value);
  },
  fromProtoMsg(message: SchemaAttributeProtoMsg): SchemaAttribute {
    return SchemaAttribute.decode(message.value);
  },
  toProto(message: SchemaAttribute): Uint8Array {
    return SchemaAttribute.encode(message).finish();
  },
  toProtoMsg(message: SchemaAttribute): SchemaAttributeProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.SchemaAttribute',
      value: SchemaAttribute.encode(message).finish()
    };
  }
};
function createBaseSchemaAttributeValue(): SchemaAttributeValue {
  return {
    numberAttributeValue: undefined,
    stringAttributeValue: undefined,
    booleanAttributeValue: undefined,
    floatAttributeValue: undefined
  };
}
export const SchemaAttributeValue = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.SchemaAttributeValue',
  encode(message: SchemaAttributeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numberAttributeValue !== undefined) {
      NumberAttributeValue.encode(message.numberAttributeValue, writer.uint32(10).fork()).ldelim();
    }
    if (message.stringAttributeValue !== undefined) {
      StringAttributeValue.encode(message.stringAttributeValue, writer.uint32(18).fork()).ldelim();
    }
    if (message.booleanAttributeValue !== undefined) {
      BooleanAttributeValue.encode(message.booleanAttributeValue, writer.uint32(26).fork()).ldelim();
    }
    if (message.floatAttributeValue !== undefined) {
      FloatAttributeValue.encode(message.floatAttributeValue, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaAttributeValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaAttributeValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.numberAttributeValue = NumberAttributeValue.decode(reader, reader.uint32());
        break;
      case 2:
        message.stringAttributeValue = StringAttributeValue.decode(reader, reader.uint32());
        break;
      case 3:
        message.booleanAttributeValue = BooleanAttributeValue.decode(reader, reader.uint32());
        break;
      case 4:
        message.floatAttributeValue = FloatAttributeValue.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SchemaAttributeValue>): SchemaAttributeValue {
    const message = createBaseSchemaAttributeValue();
    message.numberAttributeValue = object.numberAttributeValue !== undefined && object.numberAttributeValue !== null ? NumberAttributeValue.fromPartial(object.numberAttributeValue) : undefined;
    message.stringAttributeValue = object.stringAttributeValue !== undefined && object.stringAttributeValue !== null ? StringAttributeValue.fromPartial(object.stringAttributeValue) : undefined;
    message.booleanAttributeValue = object.booleanAttributeValue !== undefined && object.booleanAttributeValue !== null ? BooleanAttributeValue.fromPartial(object.booleanAttributeValue) : undefined;
    message.floatAttributeValue = object.floatAttributeValue !== undefined && object.floatAttributeValue !== null ? FloatAttributeValue.fromPartial(object.floatAttributeValue) : undefined;
    return message;
  },
  fromAmino(object: SchemaAttributeValueAmino): SchemaAttributeValue {
    const message = createBaseSchemaAttributeValue();
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
    return message;
  },
  toAmino(message: SchemaAttributeValue): SchemaAttributeValueAmino {
    const obj: any = {};
    obj.number_attribute_value = message.numberAttributeValue ? NumberAttributeValue.toAmino(message.numberAttributeValue) : undefined;
    obj.string_attribute_value = message.stringAttributeValue ? StringAttributeValue.toAmino(message.stringAttributeValue) : undefined;
    obj.boolean_attribute_value = message.booleanAttributeValue ? BooleanAttributeValue.toAmino(message.booleanAttributeValue) : undefined;
    obj.float_attribute_value = message.floatAttributeValue ? FloatAttributeValue.toAmino(message.floatAttributeValue) : undefined;
    return obj;
  },
  fromAminoMsg(object: SchemaAttributeValueAminoMsg): SchemaAttributeValue {
    return SchemaAttributeValue.fromAmino(object.value);
  },
  fromProtoMsg(message: SchemaAttributeValueProtoMsg): SchemaAttributeValue {
    return SchemaAttributeValue.decode(message.value);
  },
  toProto(message: SchemaAttributeValue): Uint8Array {
    return SchemaAttributeValue.encode(message).finish();
  },
  toProtoMsg(message: SchemaAttributeValue): SchemaAttributeValueProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.SchemaAttributeValue',
      value: SchemaAttributeValue.encode(message).finish()
    };
  }
};