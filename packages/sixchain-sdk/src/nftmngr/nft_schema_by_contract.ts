//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface NFTSchemaByContract {
  originContractAddress: string;
  schemaCodes: string[];
}
export interface NFTSchemaByContractProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTSchemaByContract';
  value: Uint8Array;
}
export interface NFTSchemaByContractAmino {
  originContractAddress?: string;
  schemaCodes?: string[];
}
export interface NFTSchemaByContractAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.NFTSchemaByContract';
  value: NFTSchemaByContractAmino;
}
export interface NFTSchemaByContractSDKType {
  originContractAddress: string;
  schemaCodes: string[];
}
function createBaseNFTSchemaByContract(): NFTSchemaByContract {
  return {
    originContractAddress: '',
    schemaCodes: []
  };
}
export const NFTSchemaByContract = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTSchemaByContract',
  encode(message: NFTSchemaByContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originContractAddress !== '') {
      writer.uint32(10).string(message.originContractAddress);
    }
    for (const v of message.schemaCodes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NFTSchemaByContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTSchemaByContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.originContractAddress = reader.string();
        break;
      case 2:
        message.schemaCodes.push(reader.string());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NFTSchemaByContract>): NFTSchemaByContract {
    const message = createBaseNFTSchemaByContract();
    message.originContractAddress = object.originContractAddress ?? '';
    message.schemaCodes = object.schemaCodes?.map(e => e) || [];
    return message;
  },
  fromAmino(object: NFTSchemaByContractAmino): NFTSchemaByContract {
    const message = createBaseNFTSchemaByContract();
    if (object.originContractAddress !== undefined && object.originContractAddress !== null) {
      message.originContractAddress = object.originContractAddress;
    }
    message.schemaCodes = object.schemaCodes?.map(e => e) || [];
    return message;
  },
  toAmino(message: NFTSchemaByContract): NFTSchemaByContractAmino {
    const obj: any = {};
    obj.originContractAddress = message.originContractAddress === '' ? undefined : message.originContractAddress;
    if (message.schemaCodes) {
      obj.schemaCodes = message.schemaCodes.map(e => e);
    } else {
      obj.schemaCodes = message.schemaCodes;
    }
    return obj;
  },
  fromAminoMsg(object: NFTSchemaByContractAminoMsg): NFTSchemaByContract {
    return NFTSchemaByContract.fromAmino(object.value);
  },
  fromProtoMsg(message: NFTSchemaByContractProtoMsg): NFTSchemaByContract {
    return NFTSchemaByContract.decode(message.value);
  },
  toProto(message: NFTSchemaByContract): Uint8Array {
    return NFTSchemaByContract.encode(message).finish();
  },
  toProtoMsg(message: NFTSchemaByContract): NFTSchemaByContractProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTSchemaByContract',
      value: NFTSchemaByContract.encode(message).finish()
    };
  }
};