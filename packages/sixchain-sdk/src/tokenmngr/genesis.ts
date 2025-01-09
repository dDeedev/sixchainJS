//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Mintperm, MintpermAmino, MintpermSDKType } from './mintperm';
import { Options, OptionsAmino, OptionsSDKType } from './options';
import { Params, ParamsAmino, ParamsSDKType } from './params';
import { Token, TokenAmino, TokenSDKType } from './token';
import { TokenBurn, TokenBurnAmino, TokenBurnSDKType } from './token_burn';
/** GenesisState defines the tokenmngr module's genesis state. */
export interface GenesisState {
  params: Params;
  portId: string;
  tokenList: Token[];
  mintpermList: Mintperm[];
  options?: Options;
  tokenBurnList: TokenBurn[];
}
export interface GenesisStateProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.GenesisState';
  value: Uint8Array;
}
/** GenesisState defines the tokenmngr module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  port_id?: string;
  tokenList?: TokenAmino[];
  mintpermList?: MintpermAmino[];
  options?: OptionsAmino;
  tokenBurnList?: TokenBurnAmino[];
}
export interface GenesisStateAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.GenesisState';
  value: GenesisStateAmino;
}
/** GenesisState defines the tokenmngr module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  port_id: string;
  tokenList: TokenSDKType[];
  mintpermList: MintpermSDKType[];
  options?: OptionsSDKType;
  tokenBurnList: TokenBurnSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    portId: '',
    tokenList: [],
    mintpermList: [],
    options: undefined,
    tokenBurnList: []
  };
}
export const GenesisState = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.GenesisState',
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== '') {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.tokenList) {
      Token.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.mintpermList) {
      Mintperm.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.tokenBurnList) {
      TokenBurn.encode(v!, writer.uint32(58).fork()).ldelim();
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
        message.portId = reader.string();
        break;
      case 3:
        message.tokenList.push(Token.decode(reader, reader.uint32()));
        break;
      case 4:
        message.mintpermList.push(Mintperm.decode(reader, reader.uint32()));
        break;
      case 6:
        message.options = Options.decode(reader, reader.uint32());
        break;
      case 7:
        message.tokenBurnList.push(TokenBurn.decode(reader, reader.uint32()));
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
    message.portId = object.portId ?? '';
    message.tokenList = object.tokenList?.map(e => Token.fromPartial(e)) || [];
    message.mintpermList = object.mintpermList?.map(e => Mintperm.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? Options.fromPartial(object.options) : undefined;
    message.tokenBurnList = object.tokenBurnList?.map(e => TokenBurn.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    message.tokenList = object.tokenList?.map(e => Token.fromAmino(e)) || [];
    message.mintpermList = object.mintpermList?.map(e => Mintperm.fromAmino(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromAmino(object.options);
    }
    message.tokenBurnList = object.tokenBurnList?.map(e => TokenBurn.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.port_id = message.portId === '' ? undefined : message.portId;
    if (message.tokenList) {
      obj.tokenList = message.tokenList.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.tokenList = message.tokenList;
    }
    if (message.mintpermList) {
      obj.mintpermList = message.mintpermList.map(e => e ? Mintperm.toAmino(e) : undefined);
    } else {
      obj.mintpermList = message.mintpermList;
    }
    obj.options = message.options ? Options.toAmino(message.options) : undefined;
    if (message.tokenBurnList) {
      obj.tokenBurnList = message.tokenBurnList.map(e => e ? TokenBurn.toAmino(e) : undefined);
    } else {
      obj.tokenBurnList = message.tokenBurnList;
    }
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
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.GenesisState',
      value: GenesisState.encode(message).finish()
    };
  }
};