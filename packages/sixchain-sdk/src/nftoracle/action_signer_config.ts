//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface ActionSignerConfig {
  chain: string;
  contractAddress: string;
  creator: string;
}
export interface ActionSignerConfigProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionSignerConfig';
  value: Uint8Array;
}
export interface ActionSignerConfigAmino {
  chain?: string;
  contractAddress?: string;
  creator?: string;
}
export interface ActionSignerConfigAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.ActionSignerConfig';
  value: ActionSignerConfigAmino;
}
export interface ActionSignerConfigSDKType {
  chain: string;
  contractAddress: string;
  creator: string;
}
function createBaseActionSignerConfig(): ActionSignerConfig {
  return {
    chain: '',
    contractAddress: '',
    creator: ''
  };
}
export const ActionSignerConfig = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionSignerConfig',
  encode(message: ActionSignerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== '') {
      writer.uint32(10).string(message.chain);
    }
    if (message.contractAddress !== '') {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.creator !== '') {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionSignerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSignerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.chain = reader.string();
        break;
      case 2:
        message.contractAddress = reader.string();
        break;
      case 3:
        message.creator = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionSignerConfig>): ActionSignerConfig {
    const message = createBaseActionSignerConfig();
    message.chain = object.chain ?? '';
    message.contractAddress = object.contractAddress ?? '';
    message.creator = object.creator ?? '';
    return message;
  },
  fromAmino(object: ActionSignerConfigAmino): ActionSignerConfig {
    const message = createBaseActionSignerConfig();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.contractAddress !== undefined && object.contractAddress !== null) {
      message.contractAddress = object.contractAddress;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: ActionSignerConfig): ActionSignerConfigAmino {
    const obj: any = {};
    obj.chain = message.chain === '' ? undefined : message.chain;
    obj.contractAddress = message.contractAddress === '' ? undefined : message.contractAddress;
    obj.creator = message.creator === '' ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: ActionSignerConfigAminoMsg): ActionSignerConfig {
    return ActionSignerConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionSignerConfigProtoMsg): ActionSignerConfig {
    return ActionSignerConfig.decode(message.value);
  },
  toProto(message: ActionSignerConfig): Uint8Array {
    return ActionSignerConfig.encode(message).finish();
  },
  toProtoMsg(message: ActionSignerConfig): ActionSignerConfigProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ActionSignerConfig',
      value: ActionSignerConfig.encode(message).finish()
    };
  }
};