//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Authorization, AuthorizationAmino, AuthorizationSDKType } from './authorization';
import { Params, ParamsAmino, ParamsSDKType } from './params';
/** GenesisState defines the nftadmin module's genesis state. */
export interface GenesisState {
  params: Params;
  authorization?: Authorization;
}
export interface GenesisStateProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.GenesisState';
  value: Uint8Array;
}
/** GenesisState defines the nftadmin module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  authorization?: AuthorizationAmino;
}
export interface GenesisStateAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftadmin.GenesisState';
  value: GenesisStateAmino;
}
/** GenesisState defines the nftadmin module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  authorization?: AuthorizationSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    authorization: undefined
  };
}
export const GenesisState = {
  typeUrl: '/thesixnetwork.sixprotocol.nftadmin.GenesisState',
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.authorization !== undefined) {
      Authorization.encode(message.authorization, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.params = Params.decode(reader, reader.uint32());
        break;
      case 2:
        message.authorization = Authorization.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.authorization = object.authorization !== undefined && object.authorization !== null ? Authorization.fromPartial(object.authorization) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = Authorization.fromAmino(object.authorization);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.authorization = message.authorization ? Authorization.toAmino(message.authorization) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftadmin.GenesisState',
      value: GenesisState.encode(message).finish()
    };
  }
};