//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { AttributeDefinition, AttributeDefinitionAmino, AttributeDefinitionSDKType } from './attribute_definition';
export enum AttributeOverriding {
  ORIGIN = 0,
  CHAIN = 1,
  UNRECOGNIZED = -1,
}
export const AttributeOverridingSDKType = AttributeOverriding;
export const AttributeOverridingAmino = AttributeOverriding;
export function attributeOverridingFromJSON(object: any): AttributeOverriding {
  switch (object) {
  case 0:
  case 'ORIGIN':
    return AttributeOverriding.ORIGIN;
  case 1:
  case 'CHAIN':
    return AttributeOverriding.CHAIN;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return AttributeOverriding.UNRECOGNIZED;
  }
}
export function attributeOverridingToJSON(object: AttributeOverriding): string {
  switch (object) {
  case AttributeOverriding.ORIGIN:
    return 'ORIGIN';
  case AttributeOverriding.CHAIN:
    return 'CHAIN';
  case AttributeOverriding.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
export enum URIRetrievalMethod {
  BASE = 0,
  TOKEN = 1,
  UNRECOGNIZED = -1,
}
export const URIRetrievalMethodSDKType = URIRetrievalMethod;
export const URIRetrievalMethodAmino = URIRetrievalMethod;
export function uRIRetrievalMethodFromJSON(object: any): URIRetrievalMethod {
  switch (object) {
  case 0:
  case 'BASE':
    return URIRetrievalMethod.BASE;
  case 1:
  case 'TOKEN':
    return URIRetrievalMethod.TOKEN;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return URIRetrievalMethod.UNRECOGNIZED;
  }
}
export function uRIRetrievalMethodToJSON(object: URIRetrievalMethod): string {
  switch (object) {
  case URIRetrievalMethod.BASE:
    return 'BASE';
  case URIRetrievalMethod.TOKEN:
    return 'TOKEN';
  case URIRetrievalMethod.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
export interface OriginData {
  originChain: string;
  originContractAddress: string;
  originBaseUri: string;
  attributeOverriding: AttributeOverriding;
  metadataFormat: string;
  originAttributes: AttributeDefinition[];
  uriRetrievalMethod: URIRetrievalMethod;
}
export interface OriginDataProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.OriginData';
  value: Uint8Array;
}
export interface OriginDataAmino {
  origin_chain?: string;
  origin_contract_address?: string;
  origin_base_uri?: string;
  attribute_overriding?: AttributeOverriding;
  metadata_format?: string;
  origin_attributes?: AttributeDefinitionAmino[];
  uri_retrieval_method?: URIRetrievalMethod;
}
export interface OriginDataAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.OriginData';
  value: OriginDataAmino;
}
export interface OriginDataSDKType {
  origin_chain: string;
  origin_contract_address: string;
  origin_base_uri: string;
  attribute_overriding: AttributeOverriding;
  metadata_format: string;
  origin_attributes: AttributeDefinitionSDKType[];
  uri_retrieval_method: URIRetrievalMethod;
}
function createBaseOriginData(): OriginData {
  return {
    originChain: '',
    originContractAddress: '',
    originBaseUri: '',
    attributeOverriding: 0,
    metadataFormat: '',
    originAttributes: [],
    uriRetrievalMethod: 0
  };
}
export const OriginData = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.OriginData',
  encode(message: OriginData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originChain !== '') {
      writer.uint32(10).string(message.originChain);
    }
    if (message.originContractAddress !== '') {
      writer.uint32(18).string(message.originContractAddress);
    }
    if (message.originBaseUri !== '') {
      writer.uint32(26).string(message.originBaseUri);
    }
    if (message.attributeOverriding !== 0) {
      writer.uint32(32).int32(message.attributeOverriding);
    }
    if (message.metadataFormat !== '') {
      writer.uint32(42).string(message.metadataFormat);
    }
    for (const v of message.originAttributes) {
      AttributeDefinition.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.uriRetrievalMethod !== 0) {
      writer.uint32(56).int32(message.uriRetrievalMethod);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OriginData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.originChain = reader.string();
        break;
      case 2:
        message.originContractAddress = reader.string();
        break;
      case 3:
        message.originBaseUri = reader.string();
        break;
      case 4:
        message.attributeOverriding = reader.int32() as any;
        break;
      case 5:
        message.metadataFormat = reader.string();
        break;
      case 6:
        message.originAttributes.push(AttributeDefinition.decode(reader, reader.uint32()));
        break;
      case 7:
        message.uriRetrievalMethod = reader.int32() as any;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OriginData>): OriginData {
    const message = createBaseOriginData();
    message.originChain = object.originChain ?? '';
    message.originContractAddress = object.originContractAddress ?? '';
    message.originBaseUri = object.originBaseUri ?? '';
    message.attributeOverriding = object.attributeOverriding ?? 0;
    message.metadataFormat = object.metadataFormat ?? '';
    message.originAttributes = object.originAttributes?.map(e => AttributeDefinition.fromPartial(e)) || [];
    message.uriRetrievalMethod = object.uriRetrievalMethod ?? 0;
    return message;
  },
  fromAmino(object: OriginDataAmino): OriginData {
    const message = createBaseOriginData();
    if (object.origin_chain !== undefined && object.origin_chain !== null) {
      message.originChain = object.origin_chain;
    }
    if (object.origin_contract_address !== undefined && object.origin_contract_address !== null) {
      message.originContractAddress = object.origin_contract_address;
    }
    if (object.origin_base_uri !== undefined && object.origin_base_uri !== null) {
      message.originBaseUri = object.origin_base_uri;
    }
    if (object.attribute_overriding !== undefined && object.attribute_overriding !== null) {
      message.attributeOverriding = object.attribute_overriding;
    }
    if (object.metadata_format !== undefined && object.metadata_format !== null) {
      message.metadataFormat = object.metadata_format;
    }
    message.originAttributes = object.origin_attributes?.map(e => AttributeDefinition.fromAmino(e)) || [];
    if (object.uri_retrieval_method !== undefined && object.uri_retrieval_method !== null) {
      message.uriRetrievalMethod = object.uri_retrieval_method;
    }
    return message;
  },
  toAmino(message: OriginData): OriginDataAmino {
    const obj: any = {};
    obj.origin_chain = message.originChain === '' ? undefined : message.originChain;
    obj.origin_contract_address = message.originContractAddress === '' ? undefined : message.originContractAddress;
    obj.origin_base_uri = message.originBaseUri === '' ? undefined : message.originBaseUri;
    obj.attribute_overriding = message.attributeOverriding === 0 ? undefined : message.attributeOverriding;
    obj.metadata_format = message.metadataFormat === '' ? undefined : message.metadataFormat;
    if (message.originAttributes) {
      obj.origin_attributes = message.originAttributes.map(e => e ? AttributeDefinition.toAmino(e) : undefined);
    } else {
      obj.origin_attributes = message.originAttributes;
    }
    obj.uri_retrieval_method = message.uriRetrievalMethod === 0 ? undefined : message.uriRetrievalMethod;
    return obj;
  },
  fromAminoMsg(object: OriginDataAminoMsg): OriginData {
    return OriginData.fromAmino(object.value);
  },
  fromProtoMsg(message: OriginDataProtoMsg): OriginData {
    return OriginData.decode(message.value);
  },
  toProto(message: OriginData): Uint8Array {
    return OriginData.encode(message).finish();
  },
  toProtoMsg(message: OriginData): OriginDataProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.OriginData',
      value: OriginData.encode(message).finish()
    };
  }
};