//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Duration, DurationAmino, DurationSDKType } from '../google/protobuf/duration';
/** Params defines the parameters for the module. */
export interface Params {
  mintRequestActiveDuration: Duration;
  actionRequestActiveDuration: Duration;
  verifyRequestActiveDuration: Duration;
  actionSignerActiveDuration: Duration;
  syncActionSignerActiveDuration: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.Params';
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  mint_request_active_duration?: DurationAmino;
  action_request_active_duration?: DurationAmino;
  verify_request_active_duration?: DurationAmino;
  action_signer_active_duration?: DurationAmino;
  sync_action_signer_active_duration?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.Params';
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  mint_request_active_duration: DurationSDKType;
  action_request_active_duration: DurationSDKType;
  verify_request_active_duration: DurationSDKType;
  action_signer_active_duration: DurationSDKType;
  sync_action_signer_active_duration: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    mintRequestActiveDuration: Duration.fromPartial({}),
    actionRequestActiveDuration: Duration.fromPartial({}),
    verifyRequestActiveDuration: Duration.fromPartial({}),
    actionSignerActiveDuration: Duration.fromPartial({}),
    syncActionSignerActiveDuration: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.Params',
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintRequestActiveDuration !== undefined) {
      Duration.encode(message.mintRequestActiveDuration, writer.uint32(10).fork()).ldelim();
    }
    if (message.actionRequestActiveDuration !== undefined) {
      Duration.encode(message.actionRequestActiveDuration, writer.uint32(18).fork()).ldelim();
    }
    if (message.verifyRequestActiveDuration !== undefined) {
      Duration.encode(message.verifyRequestActiveDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.actionSignerActiveDuration !== undefined) {
      Duration.encode(message.actionSignerActiveDuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.syncActionSignerActiveDuration !== undefined) {
      Duration.encode(message.syncActionSignerActiveDuration, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.mintRequestActiveDuration = Duration.decode(reader, reader.uint32());
        break;
      case 2:
        message.actionRequestActiveDuration = Duration.decode(reader, reader.uint32());
        break;
      case 3:
        message.verifyRequestActiveDuration = Duration.decode(reader, reader.uint32());
        break;
      case 4:
        message.actionSignerActiveDuration = Duration.decode(reader, reader.uint32());
        break;
      case 5:
        message.syncActionSignerActiveDuration = Duration.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.mintRequestActiveDuration = object.mintRequestActiveDuration !== undefined && object.mintRequestActiveDuration !== null ? Duration.fromPartial(object.mintRequestActiveDuration) : undefined;
    message.actionRequestActiveDuration = object.actionRequestActiveDuration !== undefined && object.actionRequestActiveDuration !== null ? Duration.fromPartial(object.actionRequestActiveDuration) : undefined;
    message.verifyRequestActiveDuration = object.verifyRequestActiveDuration !== undefined && object.verifyRequestActiveDuration !== null ? Duration.fromPartial(object.verifyRequestActiveDuration) : undefined;
    message.actionSignerActiveDuration = object.actionSignerActiveDuration !== undefined && object.actionSignerActiveDuration !== null ? Duration.fromPartial(object.actionSignerActiveDuration) : undefined;
    message.syncActionSignerActiveDuration = object.syncActionSignerActiveDuration !== undefined && object.syncActionSignerActiveDuration !== null ? Duration.fromPartial(object.syncActionSignerActiveDuration) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.mint_request_active_duration !== undefined && object.mint_request_active_duration !== null) {
      message.mintRequestActiveDuration = Duration.fromAmino(object.mint_request_active_duration);
    }
    if (object.action_request_active_duration !== undefined && object.action_request_active_duration !== null) {
      message.actionRequestActiveDuration = Duration.fromAmino(object.action_request_active_duration);
    }
    if (object.verify_request_active_duration !== undefined && object.verify_request_active_duration !== null) {
      message.verifyRequestActiveDuration = Duration.fromAmino(object.verify_request_active_duration);
    }
    if (object.action_signer_active_duration !== undefined && object.action_signer_active_duration !== null) {
      message.actionSignerActiveDuration = Duration.fromAmino(object.action_signer_active_duration);
    }
    if (object.sync_action_signer_active_duration !== undefined && object.sync_action_signer_active_duration !== null) {
      message.syncActionSignerActiveDuration = Duration.fromAmino(object.sync_action_signer_active_duration);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_request_active_duration = message.mintRequestActiveDuration ? Duration.toAmino(message.mintRequestActiveDuration) : undefined;
    obj.action_request_active_duration = message.actionRequestActiveDuration ? Duration.toAmino(message.actionRequestActiveDuration) : undefined;
    obj.verify_request_active_duration = message.verifyRequestActiveDuration ? Duration.toAmino(message.verifyRequestActiveDuration) : undefined;
    obj.action_signer_active_duration = message.actionSignerActiveDuration ? Duration.toAmino(message.actionSignerActiveDuration) : undefined;
    obj.sync_action_signer_active_duration = message.syncActionSignerActiveDuration ? Duration.toAmino(message.syncActionSignerActiveDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.Params',
      value: Params.encode(message).finish()
    };
  }
};