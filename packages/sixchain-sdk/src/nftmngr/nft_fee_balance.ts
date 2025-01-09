//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface NFTFeeBalance {
  /** map<int32, string> fee_balances = 1; */
  feeBalances: string[];
}
export interface NFTFeeBalanceProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTFeeBalance';
  value: Uint8Array;
}
export interface NFTFeeBalanceAmino {
  /** map<int32, string> fee_balances = 1; */
  fee_balances?: string[];
}
export interface NFTFeeBalanceAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.NFTFeeBalance';
  value: NFTFeeBalanceAmino;
}
export interface NFTFeeBalanceSDKType {
  fee_balances: string[];
}
function createBaseNFTFeeBalance(): NFTFeeBalance {
  return {
    feeBalances: []
  };
}
export const NFTFeeBalance = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTFeeBalance',
  encode(message: NFTFeeBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeBalances) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NFTFeeBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTFeeBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.feeBalances.push(reader.string());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<NFTFeeBalance>): NFTFeeBalance {
    const message = createBaseNFTFeeBalance();
    message.feeBalances = object.feeBalances?.map(e => e) || [];
    return message;
  },
  fromAmino(object: NFTFeeBalanceAmino): NFTFeeBalance {
    const message = createBaseNFTFeeBalance();
    message.feeBalances = object.fee_balances?.map(e => e) || [];
    return message;
  },
  toAmino(message: NFTFeeBalance): NFTFeeBalanceAmino {
    const obj: any = {};
    if (message.feeBalances) {
      obj.fee_balances = message.feeBalances.map(e => e);
    } else {
      obj.fee_balances = message.feeBalances;
    }
    return obj;
  },
  fromAminoMsg(object: NFTFeeBalanceAminoMsg): NFTFeeBalance {
    return NFTFeeBalance.fromAmino(object.value);
  },
  fromProtoMsg(message: NFTFeeBalanceProtoMsg): NFTFeeBalance {
    return NFTFeeBalance.decode(message.value);
  },
  toProto(message: NFTFeeBalance): Uint8Array {
    return NFTFeeBalance.encode(message).finish();
  },
  toProtoMsg(message: NFTFeeBalance): NFTFeeBalanceProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.NFTFeeBalance',
      value: NFTFeeBalance.encode(message).finish()
    };
  }
};