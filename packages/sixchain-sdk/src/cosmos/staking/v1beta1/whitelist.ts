//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
/** list of special delegator */
export interface WhitelistDelegator {
  validatorAddress: string;
  delegatorAddress: string[];
}
export interface WhitelistDelegatorProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.WhitelistDelegator';
  value: Uint8Array;
}
/** list of special delegator */
export interface WhitelistDelegatorAmino {
  validator_address?: string;
  delegator_address?: string[];
}
export interface WhitelistDelegatorAminoMsg {
  type: 'cosmos-sdk/WhitelistDelegator';
  value: WhitelistDelegatorAmino;
}
/** list of special delegator */
export interface WhitelistDelegatorSDKType {
  validator_address: string;
  delegator_address: string[];
}
function createBaseWhitelistDelegator(): WhitelistDelegator {
  return {
    validatorAddress: '',
    delegatorAddress: []
  };
}
export const WhitelistDelegator = {
  typeUrl: '/cosmos.staking.v1beta1.WhitelistDelegator',
  encode(message: WhitelistDelegator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== '') {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.delegatorAddress) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistDelegator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistDelegator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.validatorAddress = reader.string();
        break;
      case 2:
        message.delegatorAddress.push(reader.string());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WhitelistDelegator>): WhitelistDelegator {
    const message = createBaseWhitelistDelegator();
    message.validatorAddress = object.validatorAddress ?? '';
    message.delegatorAddress = object.delegatorAddress?.map(e => e) || [];
    return message;
  },
  fromAmino(object: WhitelistDelegatorAmino): WhitelistDelegator {
    const message = createBaseWhitelistDelegator();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    message.delegatorAddress = object.delegator_address?.map(e => e) || [];
    return message;
  },
  toAmino(message: WhitelistDelegator): WhitelistDelegatorAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === '' ? undefined : message.validatorAddress;
    if (message.delegatorAddress) {
      obj.delegator_address = message.delegatorAddress.map(e => e);
    } else {
      obj.delegator_address = message.delegatorAddress;
    }
    return obj;
  },
  fromAminoMsg(object: WhitelistDelegatorAminoMsg): WhitelistDelegator {
    return WhitelistDelegator.fromAmino(object.value);
  },
  toAminoMsg(message: WhitelistDelegator): WhitelistDelegatorAminoMsg {
    return {
      type: 'cosmos-sdk/WhitelistDelegator',
      value: WhitelistDelegator.toAmino(message)
    };
  },
  fromProtoMsg(message: WhitelistDelegatorProtoMsg): WhitelistDelegator {
    return WhitelistDelegator.decode(message.value);
  },
  toProto(message: WhitelistDelegator): Uint8Array {
    return WhitelistDelegator.encode(message).finish();
  },
  toProtoMsg(message: WhitelistDelegator): WhitelistDelegatorProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.WhitelistDelegator',
      value: WhitelistDelegator.encode(message).finish()
    };
  }
};