//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { NftAttributeValue, NftAttributeValueAmino, NftAttributeValueSDKType } from './nft_attribute_value';
export enum OwnerAddressType {
  ORIGIN_ADDRESS = 0,
  INTERNAL_ADDRESS = 1,
  UNRECOGNIZED = -1,
}
export const OwnerAddressTypeSDKType = OwnerAddressType;
export const OwnerAddressTypeAmino = OwnerAddressType;
export function ownerAddressTypeFromJSON(object: any): OwnerAddressType {
  switch (object) {
  case 0:
  case 'ORIGIN_ADDRESS':
    return OwnerAddressType.ORIGIN_ADDRESS;
  case 1:
  case 'INTERNAL_ADDRESS':
    return OwnerAddressType.INTERNAL_ADDRESS;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return OwnerAddressType.UNRECOGNIZED;
  }
}
export function ownerAddressTypeToJSON(object: OwnerAddressType): string {
  switch (object) {
  case OwnerAddressType.ORIGIN_ADDRESS:
    return 'ORIGIN_ADDRESS';
  case OwnerAddressType.INTERNAL_ADDRESS:
    return 'INTERNAL_ADDRESS';
  case OwnerAddressType.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
export interface NftData {
  nftSchemaCode: string;
  tokenId: string;
  tokenOwner: string;
  ownerAddressType: OwnerAddressType;
  originImage: string;
  onchainImage: string;
  tokenUri: string;
  originAttributes: NftAttributeValue[];
  onchainAttributes: NftAttributeValue[];
}
export interface NftDataProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NftData';
  value: Uint8Array;
}
export interface NftDataAmino {
  nft_schema_code?: string;
  token_id?: string;
  token_owner?: string;
  owner_address_type?: OwnerAddressType;
  origin_image?: string;
  onchain_image?: string;
  token_uri?: string;
  origin_attributes?: NftAttributeValueAmino[];
  onchain_attributes?: NftAttributeValueAmino[];
}
export interface NftDataAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.NftData';
  value: NftDataAmino;
}
export interface NftDataSDKType {
  nft_schema_code: string;
  token_id: string;
  token_owner: string;
  owner_address_type: OwnerAddressType;
  origin_image: string;
  onchain_image: string;
  token_uri: string;
  origin_attributes: NftAttributeValueSDKType[];
  onchain_attributes: NftAttributeValueSDKType[];
}
function createBaseNftData(): NftData {
  return {
    nftSchemaCode: '',
    tokenId: '',
    tokenOwner: '',
    ownerAddressType: 0,
    originImage: '',
    onchainImage: '',
    tokenUri: '',
    originAttributes: [],
    onchainAttributes: []
  };
}
export const NftData = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NftData',
  encode(message: NftData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.tokenOwner !== '') {
      writer.uint32(26).string(message.tokenOwner);
    }
    if (message.ownerAddressType !== 0) {
      writer.uint32(32).int32(message.ownerAddressType);
    }
    if (message.originImage !== '') {
      writer.uint32(42).string(message.originImage);
    }
    if (message.onchainImage !== '') {
      writer.uint32(50).string(message.onchainImage);
    }
    if (message.tokenUri !== '') {
      writer.uint32(58).string(message.tokenUri);
    }
    for (const v of message.originAttributes) {
      NftAttributeValue.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.onchainAttributes) {
      NftAttributeValue.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NftData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.tokenId = reader.string();
        break;
      case 3:
        message.tokenOwner = reader.string();
        break;
      case 4:
        message.ownerAddressType = reader.int32() as any;
        break;
      case 5:
        message.originImage = reader.string();
        break;
      case 6:
        message.onchainImage = reader.string();
        break;
      case 7:
        message.tokenUri = reader.string();
        break;
      case 8:
        message.originAttributes.push(NftAttributeValue.decode(reader, reader.uint32()));
        break;
      case 9:
        message.onchainAttributes.push(NftAttributeValue.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NftData>): NftData {
    const message = createBaseNftData();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    message.tokenOwner = object.tokenOwner ?? '';
    message.ownerAddressType = object.ownerAddressType ?? 0;
    message.originImage = object.originImage ?? '';
    message.onchainImage = object.onchainImage ?? '';
    message.tokenUri = object.tokenUri ?? '';
    message.originAttributes = object.originAttributes?.map(e => NftAttributeValue.fromPartial(e)) || [];
    message.onchainAttributes = object.onchainAttributes?.map(e => NftAttributeValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: NftDataAmino): NftData {
    const message = createBaseNftData();
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.token_owner !== undefined && object.token_owner !== null) {
      message.tokenOwner = object.token_owner;
    }
    if (object.owner_address_type !== undefined && object.owner_address_type !== null) {
      message.ownerAddressType = object.owner_address_type;
    }
    if (object.origin_image !== undefined && object.origin_image !== null) {
      message.originImage = object.origin_image;
    }
    if (object.onchain_image !== undefined && object.onchain_image !== null) {
      message.onchainImage = object.onchain_image;
    }
    if (object.token_uri !== undefined && object.token_uri !== null) {
      message.tokenUri = object.token_uri;
    }
    message.originAttributes = object.origin_attributes?.map(e => NftAttributeValue.fromAmino(e)) || [];
    message.onchainAttributes = object.onchain_attributes?.map(e => NftAttributeValue.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: NftData): NftDataAmino {
    const obj: any = {};
    obj.nft_schema_code = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.token_id = message.tokenId === '' ? undefined : message.tokenId;
    obj.token_owner = message.tokenOwner === '' ? undefined : message.tokenOwner;
    obj.owner_address_type = message.ownerAddressType === 0 ? undefined : message.ownerAddressType;
    obj.origin_image = message.originImage === '' ? undefined : message.originImage;
    obj.onchain_image = message.onchainImage === '' ? undefined : message.onchainImage;
    obj.token_uri = message.tokenUri === '' ? undefined : message.tokenUri;
    if (message.originAttributes) {
      obj.origin_attributes = message.originAttributes.map(e => e ? NftAttributeValue.toAmino(e) : undefined);
    } else {
      obj.origin_attributes = message.originAttributes;
    }
    if (message.onchainAttributes) {
      obj.onchain_attributes = message.onchainAttributes.map(e => e ? NftAttributeValue.toAmino(e) : undefined);
    } else {
      obj.onchain_attributes = message.onchainAttributes;
    }
    return obj;
  },
  fromAminoMsg(object: NftDataAminoMsg): NftData {
    return NftData.fromAmino(object.value);
  },
  fromProtoMsg(message: NftDataProtoMsg): NftData {
    return NftData.decode(message.value);
  },
  toProto(message: NftData): Uint8Array {
    return NftData.encode(message).finish();
  },
  toProtoMsg(message: NftData): NftDataProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NftData',
      value: NftData.encode(message).finish()
    };
  }
};