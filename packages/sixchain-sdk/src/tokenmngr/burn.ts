//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Coin, CoinAmino, CoinSDKType } from '../cosmos/base/v1beta1/coin';
import { Long } from '../helpers';
export interface Burn {
  id: Long;
  creator: string;
  amount: Coin;
}
export interface BurnProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Burn';
  value: Uint8Array;
}
export interface BurnAmino {
  id?: string;
  creator?: string;
  amount?: CoinAmino;
}
export interface BurnAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.Burn';
  value: BurnAmino;
}
export interface BurnSDKType {
  id: Long;
  creator: string;
  amount: CoinSDKType;
}
function createBaseBurn(): Burn {
  return {
    id: Long.UZERO,
    creator: '',
    amount: Coin.fromPartial({})
  };
}
export const Burn = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Burn',
  encode(message: Burn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== '') {
      writer.uint32(18).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Burn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.uint64() as Long;
        break;
      case 2:
        message.creator = reader.string();
        break;
      case 3:
        message.amount = Coin.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Burn>): Burn {
    const message = createBaseBurn();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.creator = object.creator ?? '';
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: BurnAmino): Burn {
    const message = createBaseBurn();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: Burn): BurnAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? message.id?.toString() : undefined;
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: BurnAminoMsg): Burn {
    return Burn.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnProtoMsg): Burn {
    return Burn.decode(message.value);
  },
  toProto(message: Burn): Uint8Array {
    return Burn.encode(message).finish();
  },
  toProtoMsg(message: Burn): BurnProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Burn',
      value: Burn.encode(message).finish()
    };
  }
};