//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { SchemaAttribute, SchemaAttributeAmino, SchemaAttributeSDKType } from './schema_attribute';
export interface AttributeOfSchema {
  nftSchemaCode: string;
  schemaAttributes: SchemaAttribute[];
}
export interface AttributeOfSchemaProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.AttributeOfSchema';
  value: Uint8Array;
}
export interface AttributeOfSchemaAmino {
  nftSchemaCode?: string;
  schemaAttributes?: SchemaAttributeAmino[];
}
export interface AttributeOfSchemaAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.AttributeOfSchema';
  value: AttributeOfSchemaAmino;
}
export interface AttributeOfSchemaSDKType {
  nftSchemaCode: string;
  schemaAttributes: SchemaAttributeSDKType[];
}
function createBaseAttributeOfSchema(): AttributeOfSchema {
  return {
    nftSchemaCode: '',
    schemaAttributes: []
  };
}
export const AttributeOfSchema = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.AttributeOfSchema',
  encode(message: AttributeOfSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.schemaAttributes) {
      SchemaAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeOfSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeOfSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.schemaAttributes.push(SchemaAttribute.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AttributeOfSchema>): AttributeOfSchema {
    const message = createBaseAttributeOfSchema();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.schemaAttributes = object.schemaAttributes?.map(e => SchemaAttribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AttributeOfSchemaAmino): AttributeOfSchema {
    const message = createBaseAttributeOfSchema();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.schemaAttributes = object.schemaAttributes?.map(e => SchemaAttribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AttributeOfSchema): AttributeOfSchemaAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    if (message.schemaAttributes) {
      obj.schemaAttributes = message.schemaAttributes.map(e => e ? SchemaAttribute.toAmino(e) : undefined);
    } else {
      obj.schemaAttributes = message.schemaAttributes;
    }
    return obj;
  },
  fromAminoMsg(object: AttributeOfSchemaAminoMsg): AttributeOfSchema {
    return AttributeOfSchema.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeOfSchemaProtoMsg): AttributeOfSchema {
    return AttributeOfSchema.decode(message.value);
  },
  toProto(message: AttributeOfSchema): Uint8Array {
    return AttributeOfSchema.encode(message).finish();
  },
  toProtoMsg(message: AttributeOfSchema): AttributeOfSchemaProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.AttributeOfSchema',
      value: AttributeOfSchema.encode(message).finish()
    };
  }
};