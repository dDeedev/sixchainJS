//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { OnChainData, OnChainDataAmino, OnChainDataSDKType } from './on_chain_data';
import { OriginData, OriginDataAmino, OriginDataSDKType } from './origin_data';
export interface NFTSchema {
  code: string;
  name: string;
  owner: string;
  description: string;
  originData?: OriginData;
  onchainData?: OnChainData;
  isVerified: boolean;
  mintAuthorization: string;
}
export interface NFTSchemaProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTSchema';
  value: Uint8Array;
}
export interface NFTSchemaAmino {
  code?: string;
  name?: string;
  owner?: string;
  description?: string;
  origin_data?: OriginDataAmino;
  onchain_data?: OnChainDataAmino;
  isVerified?: boolean;
  mint_authorization?: string;
}
export interface NFTSchemaAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.NFTSchema';
  value: NFTSchemaAmino;
}
export interface NFTSchemaSDKType {
  code: string;
  name: string;
  owner: string;
  description: string;
  origin_data?: OriginDataSDKType;
  onchain_data?: OnChainDataSDKType;
  isVerified: boolean;
  mint_authorization: string;
}
export interface NFTSchemaINPUT {
  code: string;
  name: string;
  owner: string;
  description: string;
  systemActioners: string[];
  originData?: OriginData;
  onchainData?: OnChainData;
  isVerified: boolean;
  mintAuthorization: string;
}
export interface NFTSchemaINPUTProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTSchemaINPUT';
  value: Uint8Array;
}
export interface NFTSchemaINPUTAmino {
  code?: string;
  name?: string;
  owner?: string;
  description?: string;
  system_actioners?: string[];
  origin_data?: OriginDataAmino;
  onchain_data?: OnChainDataAmino;
  isVerified?: boolean;
  mint_authorization?: string;
}
export interface NFTSchemaINPUTAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.NFTSchemaINPUT';
  value: NFTSchemaINPUTAmino;
}
export interface NFTSchemaINPUTSDKType {
  code: string;
  name: string;
  owner: string;
  description: string;
  system_actioners: string[];
  origin_data?: OriginDataSDKType;
  onchain_data?: OnChainDataSDKType;
  isVerified: boolean;
  mint_authorization: string;
}
function createBaseNFTSchema(): NFTSchema {
  return {
    code: '',
    name: '',
    owner: '',
    description: '',
    originData: undefined,
    onchainData: undefined,
    isVerified: false,
    mintAuthorization: ''
  };
}
export const NFTSchema = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTSchema',
  encode(message: NFTSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== '') {
      writer.uint32(26).string(message.owner);
    }
    if (message.description !== '') {
      writer.uint32(34).string(message.description);
    }
    if (message.originData !== undefined) {
      OriginData.encode(message.originData, writer.uint32(42).fork()).ldelim();
    }
    if (message.onchainData !== undefined) {
      OnChainData.encode(message.onchainData, writer.uint32(50).fork()).ldelim();
    }
    if (message.isVerified === true) {
      writer.uint32(56).bool(message.isVerified);
    }
    if (message.mintAuthorization !== '') {
      writer.uint32(66).string(message.mintAuthorization);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NFTSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.code = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      case 3:
        message.owner = reader.string();
        break;
      case 4:
        message.description = reader.string();
        break;
      case 5:
        message.originData = OriginData.decode(reader, reader.uint32());
        break;
      case 6:
        message.onchainData = OnChainData.decode(reader, reader.uint32());
        break;
      case 7:
        message.isVerified = reader.bool();
        break;
      case 8:
        message.mintAuthorization = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NFTSchema>): NFTSchema {
    const message = createBaseNFTSchema();
    message.code = object.code ?? '';
    message.name = object.name ?? '';
    message.owner = object.owner ?? '';
    message.description = object.description ?? '';
    message.originData = object.originData !== undefined && object.originData !== null ? OriginData.fromPartial(object.originData) : undefined;
    message.onchainData = object.onchainData !== undefined && object.onchainData !== null ? OnChainData.fromPartial(object.onchainData) : undefined;
    message.isVerified = object.isVerified ?? false;
    message.mintAuthorization = object.mintAuthorization ?? '';
    return message;
  },
  fromAmino(object: NFTSchemaAmino): NFTSchema {
    const message = createBaseNFTSchema();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.origin_data !== undefined && object.origin_data !== null) {
      message.originData = OriginData.fromAmino(object.origin_data);
    }
    if (object.onchain_data !== undefined && object.onchain_data !== null) {
      message.onchainData = OnChainData.fromAmino(object.onchain_data);
    }
    if (object.isVerified !== undefined && object.isVerified !== null) {
      message.isVerified = object.isVerified;
    }
    if (object.mint_authorization !== undefined && object.mint_authorization !== null) {
      message.mintAuthorization = object.mint_authorization;
    }
    return message;
  },
  toAmino(message: NFTSchema): NFTSchemaAmino {
    const obj: any = {};
    obj.code = message.code === '' ? undefined : message.code;
    obj.name = message.name === '' ? undefined : message.name;
    obj.owner = message.owner === '' ? undefined : message.owner;
    obj.description = message.description === '' ? undefined : message.description;
    obj.origin_data = message.originData ? OriginData.toAmino(message.originData) : undefined;
    obj.onchain_data = message.onchainData ? OnChainData.toAmino(message.onchainData) : undefined;
    obj.isVerified = message.isVerified === false ? undefined : message.isVerified;
    obj.mint_authorization = message.mintAuthorization === '' ? undefined : message.mintAuthorization;
    return obj;
  },
  fromAminoMsg(object: NFTSchemaAminoMsg): NFTSchema {
    return NFTSchema.fromAmino(object.value);
  },
  fromProtoMsg(message: NFTSchemaProtoMsg): NFTSchema {
    return NFTSchema.decode(message.value);
  },
  toProto(message: NFTSchema): Uint8Array {
    return NFTSchema.encode(message).finish();
  },
  toProtoMsg(message: NFTSchema): NFTSchemaProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTSchema',
      value: NFTSchema.encode(message).finish()
    };
  }
};
function createBaseNFTSchemaINPUT(): NFTSchemaINPUT {
  return {
    code: '',
    name: '',
    owner: '',
    description: '',
    systemActioners: [],
    originData: undefined,
    onchainData: undefined,
    isVerified: false,
    mintAuthorization: ''
  };
}
export const NFTSchemaINPUT = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTSchemaINPUT',
  encode(message: NFTSchemaINPUT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== '') {
      writer.uint32(26).string(message.owner);
    }
    if (message.description !== '') {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.systemActioners) {
      writer.uint32(42).string(v!);
    }
    if (message.originData !== undefined) {
      OriginData.encode(message.originData, writer.uint32(50).fork()).ldelim();
    }
    if (message.onchainData !== undefined) {
      OnChainData.encode(message.onchainData, writer.uint32(58).fork()).ldelim();
    }
    if (message.isVerified === true) {
      writer.uint32(64).bool(message.isVerified);
    }
    if (message.mintAuthorization !== '') {
      writer.uint32(74).string(message.mintAuthorization);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NFTSchemaINPUT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTSchemaINPUT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.code = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      case 3:
        message.owner = reader.string();
        break;
      case 4:
        message.description = reader.string();
        break;
      case 5:
        message.systemActioners.push(reader.string());
        break;
      case 6:
        message.originData = OriginData.decode(reader, reader.uint32());
        break;
      case 7:
        message.onchainData = OnChainData.decode(reader, reader.uint32());
        break;
      case 8:
        message.isVerified = reader.bool();
        break;
      case 9:
        message.mintAuthorization = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NFTSchemaINPUT>): NFTSchemaINPUT {
    const message = createBaseNFTSchemaINPUT();
    message.code = object.code ?? '';
    message.name = object.name ?? '';
    message.owner = object.owner ?? '';
    message.description = object.description ?? '';
    message.systemActioners = object.systemActioners?.map(e => e) || [];
    message.originData = object.originData !== undefined && object.originData !== null ? OriginData.fromPartial(object.originData) : undefined;
    message.onchainData = object.onchainData !== undefined && object.onchainData !== null ? OnChainData.fromPartial(object.onchainData) : undefined;
    message.isVerified = object.isVerified ?? false;
    message.mintAuthorization = object.mintAuthorization ?? '';
    return message;
  },
  fromAmino(object: NFTSchemaINPUTAmino): NFTSchemaINPUT {
    const message = createBaseNFTSchemaINPUT();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.systemActioners = object.system_actioners?.map(e => e) || [];
    if (object.origin_data !== undefined && object.origin_data !== null) {
      message.originData = OriginData.fromAmino(object.origin_data);
    }
    if (object.onchain_data !== undefined && object.onchain_data !== null) {
      message.onchainData = OnChainData.fromAmino(object.onchain_data);
    }
    if (object.isVerified !== undefined && object.isVerified !== null) {
      message.isVerified = object.isVerified;
    }
    if (object.mint_authorization !== undefined && object.mint_authorization !== null) {
      message.mintAuthorization = object.mint_authorization;
    }
    return message;
  },
  toAmino(message: NFTSchemaINPUT): NFTSchemaINPUTAmino {
    const obj: any = {};
    obj.code = message.code === '' ? undefined : message.code;
    obj.name = message.name === '' ? undefined : message.name;
    obj.owner = message.owner === '' ? undefined : message.owner;
    obj.description = message.description === '' ? undefined : message.description;
    if (message.systemActioners) {
      obj.system_actioners = message.systemActioners.map(e => e);
    } else {
      obj.system_actioners = message.systemActioners;
    }
    obj.origin_data = message.originData ? OriginData.toAmino(message.originData) : undefined;
    obj.onchain_data = message.onchainData ? OnChainData.toAmino(message.onchainData) : undefined;
    obj.isVerified = message.isVerified === false ? undefined : message.isVerified;
    obj.mint_authorization = message.mintAuthorization === '' ? undefined : message.mintAuthorization;
    return obj;
  },
  fromAminoMsg(object: NFTSchemaINPUTAminoMsg): NFTSchemaINPUT {
    return NFTSchemaINPUT.fromAmino(object.value);
  },
  fromProtoMsg(message: NFTSchemaINPUTProtoMsg): NFTSchemaINPUT {
    return NFTSchemaINPUT.decode(message.value);
  },
  toProto(message: NFTSchemaINPUT): Uint8Array {
    return NFTSchemaINPUT.encode(message).finish();
  },
  toProtoMsg(message: NFTSchemaINPUT): NFTSchemaINPUTProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTSchemaINPUT',
      value: NFTSchemaINPUT.encode(message).finish()
    };
  }
};