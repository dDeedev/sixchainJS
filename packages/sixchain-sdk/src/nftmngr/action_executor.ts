//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface ActionExecutor {
  nftSchemaCode: string;
  executorAddress: string;
  creator: string;
}
export interface ActionExecutorProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionExecutor';
  value: Uint8Array;
}
export interface ActionExecutorAmino {
  nftSchemaCode?: string;
  executorAddress?: string;
  creator?: string;
}
export interface ActionExecutorAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.ActionExecutor';
  value: ActionExecutorAmino;
}
export interface ActionExecutorSDKType {
  nftSchemaCode: string;
  executorAddress: string;
  creator: string;
}
export interface ActionExecutorBySchema {
  nftSchemaCode: string;
  executorAddress: string[];
}
export interface ActionExecutorBySchemaProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionExecutorBySchema';
  value: Uint8Array;
}
export interface ActionExecutorBySchemaAmino {
  nftSchemaCode?: string;
  executorAddress?: string[];
}
export interface ActionExecutorBySchemaAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.ActionExecutorBySchema';
  value: ActionExecutorBySchemaAmino;
}
export interface ActionExecutorBySchemaSDKType {
  nftSchemaCode: string;
  executorAddress: string[];
}
function createBaseActionExecutor(): ActionExecutor {
  return {
    nftSchemaCode: '',
    executorAddress: '',
    creator: ''
  };
}
export const ActionExecutor = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionExecutor',
  encode(message: ActionExecutor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== '') {
      writer.uint32(18).string(message.executorAddress);
    }
    if (message.creator !== '') {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionExecutor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionExecutor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.executorAddress = reader.string();
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
  fromPartial(object: Partial<ActionExecutor>): ActionExecutor {
    const message = createBaseActionExecutor();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.executorAddress = object.executorAddress ?? '';
    message.creator = object.creator ?? '';
    return message;
  },
  fromAmino(object: ActionExecutorAmino): ActionExecutor {
    const message = createBaseActionExecutor();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.executorAddress !== undefined && object.executorAddress !== null) {
      message.executorAddress = object.executorAddress;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: ActionExecutor): ActionExecutorAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.executorAddress = message.executorAddress === '' ? undefined : message.executorAddress;
    obj.creator = message.creator === '' ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: ActionExecutorAminoMsg): ActionExecutor {
    return ActionExecutor.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionExecutorProtoMsg): ActionExecutor {
    return ActionExecutor.decode(message.value);
  },
  toProto(message: ActionExecutor): Uint8Array {
    return ActionExecutor.encode(message).finish();
  },
  toProtoMsg(message: ActionExecutor): ActionExecutorProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionExecutor',
      value: ActionExecutor.encode(message).finish()
    };
  }
};
function createBaseActionExecutorBySchema(): ActionExecutorBySchema {
  return {
    nftSchemaCode: '',
    executorAddress: []
  };
}
export const ActionExecutorBySchema = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionExecutorBySchema',
  encode(message: ActionExecutorBySchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.executorAddress) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionExecutorBySchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionExecutorBySchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.executorAddress.push(reader.string());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionExecutorBySchema>): ActionExecutorBySchema {
    const message = createBaseActionExecutorBySchema();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.executorAddress = object.executorAddress?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ActionExecutorBySchemaAmino): ActionExecutorBySchema {
    const message = createBaseActionExecutorBySchema();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.executorAddress = object.executorAddress?.map(e => e) || [];
    return message;
  },
  toAmino(message: ActionExecutorBySchema): ActionExecutorBySchemaAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    if (message.executorAddress) {
      obj.executorAddress = message.executorAddress.map(e => e);
    } else {
      obj.executorAddress = message.executorAddress;
    }
    return obj;
  },
  fromAminoMsg(object: ActionExecutorBySchemaAminoMsg): ActionExecutorBySchema {
    return ActionExecutorBySchema.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionExecutorBySchemaProtoMsg): ActionExecutorBySchema {
    return ActionExecutorBySchema.decode(message.value);
  },
  toProto(message: ActionExecutorBySchema): Uint8Array {
    return ActionExecutorBySchema.encode(message).finish();
  },
  toProtoMsg(message: ActionExecutorBySchema): ActionExecutorBySchemaProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionExecutorBySchema',
      value: ActionExecutorBySchema.encode(message).finish()
    };
  }
};