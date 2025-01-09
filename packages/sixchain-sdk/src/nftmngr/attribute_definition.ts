//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Long } from '../helpers';
import { DisplayOption, DisplayOptionAmino, DisplayOptionSDKType } from './display_option';
import { BooleanAttributeValue, BooleanAttributeValueAmino, BooleanAttributeValueSDKType, FloatAttributeValue, FloatAttributeValueAmino, FloatAttributeValueSDKType,NumberAttributeValue, NumberAttributeValueAmino, NumberAttributeValueSDKType, StringAttributeValue, StringAttributeValueAmino, StringAttributeValueSDKType } from './nft_attribute_value';
export interface DefaultMintValue {
  numberAttributeValue?: NumberAttributeValue;
  stringAttributeValue?: StringAttributeValue;
  booleanAttributeValue?: BooleanAttributeValue;
  floatAttributeValue?: FloatAttributeValue;
}
export interface DefaultMintValueProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.DefaultMintValue';
  value: Uint8Array;
}
export interface DefaultMintValueAmino {
  number_attribute_value?: NumberAttributeValueAmino;
  string_attribute_value?: StringAttributeValueAmino;
  boolean_attribute_value?: BooleanAttributeValueAmino;
  float_attribute_value?: FloatAttributeValueAmino;
}
export interface DefaultMintValueAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.DefaultMintValue';
  value: DefaultMintValueAmino;
}
export interface DefaultMintValueSDKType {
  number_attribute_value?: NumberAttributeValueSDKType;
  string_attribute_value?: StringAttributeValueSDKType;
  boolean_attribute_value?: BooleanAttributeValueSDKType;
  float_attribute_value?: FloatAttributeValueSDKType;
}
export interface AttributeDefinition {
  name: string;
  dataType: string;
  required: boolean;
  displayValueField: string;
  displayOption?: DisplayOption;
  defaultMintValue?: DefaultMintValue;
  /** flag that allows action to override hidden */
  hiddenOveride: boolean;
  hiddenToMarketplace: boolean;
  index: Long;
}
export interface AttributeDefinitionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.AttributeDefinition';
  value: Uint8Array;
}
export interface AttributeDefinitionAmino {
  name?: string;
  data_type?: string;
  required?: boolean;
  display_value_field?: string;
  display_option?: DisplayOptionAmino;
  default_mint_value?: DefaultMintValueAmino;
  /** flag that allows action to override hidden */
  hidden_overide?: boolean;
  hidden_to_marketplace?: boolean;
  index?: string;
}
export interface AttributeDefinitionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.AttributeDefinition';
  value: AttributeDefinitionAmino;
}
export interface AttributeDefinitionSDKType {
  name: string;
  data_type: string;
  required: boolean;
  display_value_field: string;
  display_option?: DisplayOptionSDKType;
  default_mint_value?: DefaultMintValueSDKType;
  hidden_overide: boolean;
  hidden_to_marketplace: boolean;
  index: Long;
}
function createBaseDefaultMintValue(): DefaultMintValue {
  return {
    numberAttributeValue: undefined,
    stringAttributeValue: undefined,
    booleanAttributeValue: undefined,
    floatAttributeValue: undefined
  };
}
export const DefaultMintValue = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.DefaultMintValue',
  encode(message: DefaultMintValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): DefaultMintValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultMintValue();
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
  fromPartial(object: Partial<DefaultMintValue>): DefaultMintValue {
    const message = createBaseDefaultMintValue();
    message.numberAttributeValue = object.numberAttributeValue !== undefined && object.numberAttributeValue !== null ? NumberAttributeValue.fromPartial(object.numberAttributeValue) : undefined;
    message.stringAttributeValue = object.stringAttributeValue !== undefined && object.stringAttributeValue !== null ? StringAttributeValue.fromPartial(object.stringAttributeValue) : undefined;
    message.booleanAttributeValue = object.booleanAttributeValue !== undefined && object.booleanAttributeValue !== null ? BooleanAttributeValue.fromPartial(object.booleanAttributeValue) : undefined;
    message.floatAttributeValue = object.floatAttributeValue !== undefined && object.floatAttributeValue !== null ? FloatAttributeValue.fromPartial(object.floatAttributeValue) : undefined;
    return message;
  },
  fromAmino(object: DefaultMintValueAmino): DefaultMintValue {
    const message = createBaseDefaultMintValue();
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
  toAmino(message: DefaultMintValue): DefaultMintValueAmino {
    const obj: any = {};
    obj.number_attribute_value = message.numberAttributeValue ? NumberAttributeValue.toAmino(message.numberAttributeValue) : undefined;
    obj.string_attribute_value = message.stringAttributeValue ? StringAttributeValue.toAmino(message.stringAttributeValue) : undefined;
    obj.boolean_attribute_value = message.booleanAttributeValue ? BooleanAttributeValue.toAmino(message.booleanAttributeValue) : undefined;
    obj.float_attribute_value = message.floatAttributeValue ? FloatAttributeValue.toAmino(message.floatAttributeValue) : undefined;
    return obj;
  },
  fromAminoMsg(object: DefaultMintValueAminoMsg): DefaultMintValue {
    return DefaultMintValue.fromAmino(object.value);
  },
  fromProtoMsg(message: DefaultMintValueProtoMsg): DefaultMintValue {
    return DefaultMintValue.decode(message.value);
  },
  toProto(message: DefaultMintValue): Uint8Array {
    return DefaultMintValue.encode(message).finish();
  },
  toProtoMsg(message: DefaultMintValue): DefaultMintValueProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.DefaultMintValue',
      value: DefaultMintValue.encode(message).finish()
    };
  }
};
function createBaseAttributeDefinition(): AttributeDefinition {
  return {
    name: '',
    dataType: '',
    required: false,
    displayValueField: '',
    displayOption: undefined,
    defaultMintValue: undefined,
    hiddenOveride: false,
    hiddenToMarketplace: false,
    index: Long.UZERO
  };
}
export const AttributeDefinition = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.AttributeDefinition',
  encode(message: AttributeDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.dataType !== '') {
      writer.uint32(18).string(message.dataType);
    }
    if (message.required === true) {
      writer.uint32(24).bool(message.required);
    }
    if (message.displayValueField !== '') {
      writer.uint32(34).string(message.displayValueField);
    }
    if (message.displayOption !== undefined) {
      DisplayOption.encode(message.displayOption, writer.uint32(42).fork()).ldelim();
    }
    if (message.defaultMintValue !== undefined) {
      DefaultMintValue.encode(message.defaultMintValue, writer.uint32(50).fork()).ldelim();
    }
    if (message.hiddenOveride === true) {
      writer.uint32(56).bool(message.hiddenOveride);
    }
    if (message.hiddenToMarketplace === true) {
      writer.uint32(64).bool(message.hiddenToMarketplace);
    }
    if (!message.index.isZero()) {
      writer.uint32(72).uint64(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeDefinition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.name = reader.string();
        break;
      case 2:
        message.dataType = reader.string();
        break;
      case 3:
        message.required = reader.bool();
        break;
      case 4:
        message.displayValueField = reader.string();
        break;
      case 5:
        message.displayOption = DisplayOption.decode(reader, reader.uint32());
        break;
      case 6:
        message.defaultMintValue = DefaultMintValue.decode(reader, reader.uint32());
        break;
      case 7:
        message.hiddenOveride = reader.bool();
        break;
      case 8:
        message.hiddenToMarketplace = reader.bool();
        break;
      case 9:
        message.index = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AttributeDefinition>): AttributeDefinition {
    const message = createBaseAttributeDefinition();
    message.name = object.name ?? '';
    message.dataType = object.dataType ?? '';
    message.required = object.required ?? false;
    message.displayValueField = object.displayValueField ?? '';
    message.displayOption = object.displayOption !== undefined && object.displayOption !== null ? DisplayOption.fromPartial(object.displayOption) : undefined;
    message.defaultMintValue = object.defaultMintValue !== undefined && object.defaultMintValue !== null ? DefaultMintValue.fromPartial(object.defaultMintValue) : undefined;
    message.hiddenOveride = object.hiddenOveride ?? false;
    message.hiddenToMarketplace = object.hiddenToMarketplace ?? false;
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    return message;
  },
  fromAmino(object: AttributeDefinitionAmino): AttributeDefinition {
    const message = createBaseAttributeDefinition();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.data_type !== undefined && object.data_type !== null) {
      message.dataType = object.data_type;
    }
    if (object.required !== undefined && object.required !== null) {
      message.required = object.required;
    }
    if (object.display_value_field !== undefined && object.display_value_field !== null) {
      message.displayValueField = object.display_value_field;
    }
    if (object.display_option !== undefined && object.display_option !== null) {
      message.displayOption = DisplayOption.fromAmino(object.display_option);
    }
    if (object.default_mint_value !== undefined && object.default_mint_value !== null) {
      message.defaultMintValue = DefaultMintValue.fromAmino(object.default_mint_value);
    }
    if (object.hidden_overide !== undefined && object.hidden_overide !== null) {
      message.hiddenOveride = object.hidden_overide;
    }
    if (object.hidden_to_marketplace !== undefined && object.hidden_to_marketplace !== null) {
      message.hiddenToMarketplace = object.hidden_to_marketplace;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = Long.fromString(object.index);
    }
    return message;
  },
  toAmino(message: AttributeDefinition): AttributeDefinitionAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    obj.data_type = message.dataType === '' ? undefined : message.dataType;
    obj.required = message.required === false ? undefined : message.required;
    obj.display_value_field = message.displayValueField === '' ? undefined : message.displayValueField;
    obj.display_option = message.displayOption ? DisplayOption.toAmino(message.displayOption) : undefined;
    obj.default_mint_value = message.defaultMintValue ? DefaultMintValue.toAmino(message.defaultMintValue) : undefined;
    obj.hidden_overide = message.hiddenOveride === false ? undefined : message.hiddenOveride;
    obj.hidden_to_marketplace = message.hiddenToMarketplace === false ? undefined : message.hiddenToMarketplace;
    obj.index = !message.index.isZero() ? message.index?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AttributeDefinitionAminoMsg): AttributeDefinition {
    return AttributeDefinition.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeDefinitionProtoMsg): AttributeDefinition {
    return AttributeDefinition.decode(message.value);
  },
  toProto(message: AttributeDefinition): Uint8Array {
    return AttributeDefinition.encode(message).finish();
  },
  toProtoMsg(message: AttributeDefinition): AttributeDefinitionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.AttributeDefinition',
      value: AttributeDefinition.encode(message).finish()
    };
  }
};