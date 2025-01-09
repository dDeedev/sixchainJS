//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export enum FeeDistributionMethod {
  BURN = 0,
  REWARD_POOL = 1,
  TRANSFER = 2,
  UNRECOGNIZED = -1,
}
export const FeeDistributionMethodSDKType = FeeDistributionMethod;
export const FeeDistributionMethodAmino = FeeDistributionMethod;
export function feeDistributionMethodFromJSON(object: any): FeeDistributionMethod {
  switch (object) {
  case 0:
  case 'BURN':
    return FeeDistributionMethod.BURN;
  case 1:
  case 'REWARD_POOL':
    return FeeDistributionMethod.REWARD_POOL;
  case 2:
  case 'TRANSFER':
    return FeeDistributionMethod.TRANSFER;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return FeeDistributionMethod.UNRECOGNIZED;
  }
}
export function feeDistributionMethodToJSON(object: FeeDistributionMethod): string {
  switch (object) {
  case FeeDistributionMethod.BURN:
    return 'BURN';
  case FeeDistributionMethod.REWARD_POOL:
    return 'REWARD_POOL';
  case FeeDistributionMethod.TRANSFER:
    return 'TRANSFER';
  case FeeDistributionMethod.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
export interface FeeDistribution {
  method: FeeDistributionMethod;
  portion: number;
}
export interface FeeDistributionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.FeeDistribution';
  value: Uint8Array;
}
export interface FeeDistributionAmino {
  method?: FeeDistributionMethod;
  portion?: number;
}
export interface FeeDistributionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.FeeDistribution';
  value: FeeDistributionAmino;
}
export interface FeeDistributionSDKType {
  method: FeeDistributionMethod;
  portion: number;
}
export interface FeeConfig {
  feeAmount: string;
  feeDistributions: FeeDistribution[];
}
export interface FeeConfigProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.FeeConfig';
  value: Uint8Array;
}
export interface FeeConfigAmino {
  fee_amount?: string;
  fee_distributions?: FeeDistributionAmino[];
}
export interface FeeConfigAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.FeeConfig';
  value: FeeConfigAmino;
}
export interface FeeConfigSDKType {
  fee_amount: string;
  fee_distributions: FeeDistributionSDKType[];
}
export interface NFTFeeConfig {
  schemaFee?: FeeConfig;
}
export interface NFTFeeConfigProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTFeeConfig';
  value: Uint8Array;
}
export interface NFTFeeConfigAmino {
  schema_fee?: FeeConfigAmino;
}
export interface NFTFeeConfigAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.NFTFeeConfig';
  value: NFTFeeConfigAmino;
}
export interface NFTFeeConfigSDKType {
  schema_fee?: FeeConfigSDKType;
}
function createBaseFeeDistribution(): FeeDistribution {
  return {
    method: 0,
    portion: 0
  };
}
export const FeeDistribution = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.FeeDistribution',
  encode(message: FeeDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.method !== 0) {
      writer.uint32(8).int32(message.method);
    }
    if (message.portion !== 0) {
      writer.uint32(21).float(message.portion);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FeeDistribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.method = reader.int32() as any;
        break;
      case 2:
        message.portion = reader.float();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FeeDistribution>): FeeDistribution {
    const message = createBaseFeeDistribution();
    message.method = object.method ?? 0;
    message.portion = object.portion ?? 0;
    return message;
  },
  fromAmino(object: FeeDistributionAmino): FeeDistribution {
    const message = createBaseFeeDistribution();
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method;
    }
    if (object.portion !== undefined && object.portion !== null) {
      message.portion = object.portion;
    }
    return message;
  },
  toAmino(message: FeeDistribution): FeeDistributionAmino {
    const obj: any = {};
    obj.method = message.method === 0 ? undefined : message.method;
    obj.portion = message.portion === 0 ? undefined : message.portion;
    return obj;
  },
  fromAminoMsg(object: FeeDistributionAminoMsg): FeeDistribution {
    return FeeDistribution.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDistributionProtoMsg): FeeDistribution {
    return FeeDistribution.decode(message.value);
  },
  toProto(message: FeeDistribution): Uint8Array {
    return FeeDistribution.encode(message).finish();
  },
  toProtoMsg(message: FeeDistribution): FeeDistributionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.FeeDistribution',
      value: FeeDistribution.encode(message).finish()
    };
  }
};
function createBaseFeeConfig(): FeeConfig {
  return {
    feeAmount: '',
    feeDistributions: []
  };
}
export const FeeConfig = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.FeeConfig',
  encode(message: FeeConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeAmount !== '') {
      writer.uint32(10).string(message.feeAmount);
    }
    for (const v of message.feeDistributions) {
      FeeDistribution.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FeeConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.feeAmount = reader.string();
        break;
      case 2:
        message.feeDistributions.push(FeeDistribution.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FeeConfig>): FeeConfig {
    const message = createBaseFeeConfig();
    message.feeAmount = object.feeAmount ?? '';
    message.feeDistributions = object.feeDistributions?.map(e => FeeDistribution.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FeeConfigAmino): FeeConfig {
    const message = createBaseFeeConfig();
    if (object.fee_amount !== undefined && object.fee_amount !== null) {
      message.feeAmount = object.fee_amount;
    }
    message.feeDistributions = object.fee_distributions?.map(e => FeeDistribution.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FeeConfig): FeeConfigAmino {
    const obj: any = {};
    obj.fee_amount = message.feeAmount === '' ? undefined : message.feeAmount;
    if (message.feeDistributions) {
      obj.fee_distributions = message.feeDistributions.map(e => e ? FeeDistribution.toAmino(e) : undefined);
    } else {
      obj.fee_distributions = message.feeDistributions;
    }
    return obj;
  },
  fromAminoMsg(object: FeeConfigAminoMsg): FeeConfig {
    return FeeConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeConfigProtoMsg): FeeConfig {
    return FeeConfig.decode(message.value);
  },
  toProto(message: FeeConfig): Uint8Array {
    return FeeConfig.encode(message).finish();
  },
  toProtoMsg(message: FeeConfig): FeeConfigProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.FeeConfig',
      value: FeeConfig.encode(message).finish()
    };
  }
};
function createBaseNFTFeeConfig(): NFTFeeConfig {
  return {
    schemaFee: undefined
  };
}
export const NFTFeeConfig = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTFeeConfig',
  encode(message: NFTFeeConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaFee !== undefined) {
      FeeConfig.encode(message.schemaFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NFTFeeConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTFeeConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.schemaFee = FeeConfig.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NFTFeeConfig>): NFTFeeConfig {
    const message = createBaseNFTFeeConfig();
    message.schemaFee = object.schemaFee !== undefined && object.schemaFee !== null ? FeeConfig.fromPartial(object.schemaFee) : undefined;
    return message;
  },
  fromAmino(object: NFTFeeConfigAmino): NFTFeeConfig {
    const message = createBaseNFTFeeConfig();
    if (object.schema_fee !== undefined && object.schema_fee !== null) {
      message.schemaFee = FeeConfig.fromAmino(object.schema_fee);
    }
    return message;
  },
  toAmino(message: NFTFeeConfig): NFTFeeConfigAmino {
    const obj: any = {};
    obj.schema_fee = message.schemaFee ? FeeConfig.toAmino(message.schemaFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: NFTFeeConfigAminoMsg): NFTFeeConfig {
    return NFTFeeConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: NFTFeeConfigProtoMsg): NFTFeeConfig {
    return NFTFeeConfig.decode(message.value);
  },
  toProto(message: NFTFeeConfig): Uint8Array {
    return NFTFeeConfig.encode(message).finish();
  },
  toProtoMsg(message: NFTFeeConfig): NFTFeeConfigProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTFeeConfig',
      value: NFTFeeConfig.encode(message).finish()
    };
  }
};