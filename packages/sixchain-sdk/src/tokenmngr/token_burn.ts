//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Coin, CoinAmino, CoinSDKType } from '../cosmos/base/v1beta1/coin';
export interface TokenBurn {
  amount: Coin;
}
export interface TokenBurnProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.TokenBurn';
  value: Uint8Array;
}
export interface TokenBurnAmino {
  amount?: CoinAmino;
}
export interface TokenBurnAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.TokenBurn';
  value: TokenBurnAmino;
}
export interface TokenBurnSDKType {
  amount: CoinSDKType;
}
function createBaseTokenBurn(): TokenBurn {
  return {
    amount: Coin.fromPartial({})
  };
}
export const TokenBurn = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.TokenBurn',
  encode(message: TokenBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.amount = Coin.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TokenBurn>): TokenBurn {
    const message = createBaseTokenBurn();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: TokenBurnAmino): TokenBurn {
    const message = createBaseTokenBurn();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: TokenBurn): TokenBurnAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenBurnAminoMsg): TokenBurn {
    return TokenBurn.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenBurnProtoMsg): TokenBurn {
    return TokenBurn.decode(message.value);
  },
  toProto(message: TokenBurn): Uint8Array {
    return TokenBurn.encode(message).finish();
  },
  toProtoMsg(message: TokenBurn): TokenBurnProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.TokenBurn',
      value: TokenBurn.encode(message).finish()
    };
  }
};