//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface ExecutorOfSchema {
  nftSchemaCode: string;
  executorAddress: string[];
}
export interface ExecutorOfSchemaProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ExecutorOfSchema';
  value: Uint8Array;
}
export interface ExecutorOfSchemaAmino {
  nftSchemaCode?: string;
  executorAddress?: string[];
}
export interface ExecutorOfSchemaAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.ExecutorOfSchema';
  value: ExecutorOfSchemaAmino;
}
export interface ExecutorOfSchemaSDKType {
  nftSchemaCode: string;
  executorAddress: string[];
}
function createBaseExecutorOfSchema(): ExecutorOfSchema {
  return {
    nftSchemaCode: '',
    executorAddress: []
  };
}
export const ExecutorOfSchema = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ExecutorOfSchema',
  encode(message: ExecutorOfSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.executorAddress) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutorOfSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutorOfSchema();
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
  fromPartial(object: Partial<ExecutorOfSchema>): ExecutorOfSchema {
    const message = createBaseExecutorOfSchema();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.executorAddress = object.executorAddress?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ExecutorOfSchemaAmino): ExecutorOfSchema {
    const message = createBaseExecutorOfSchema();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.executorAddress = object.executorAddress?.map(e => e) || [];
    return message;
  },
  toAmino(message: ExecutorOfSchema): ExecutorOfSchemaAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    if (message.executorAddress) {
      obj.executorAddress = message.executorAddress.map(e => e);
    } else {
      obj.executorAddress = message.executorAddress;
    }
    return obj;
  },
  fromAminoMsg(object: ExecutorOfSchemaAminoMsg): ExecutorOfSchema {
    return ExecutorOfSchema.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecutorOfSchemaProtoMsg): ExecutorOfSchema {
    return ExecutorOfSchema.decode(message.value);
  },
  toProto(message: ExecutorOfSchema): Uint8Array {
    return ExecutorOfSchema.encode(message).finish();
  },
  toProtoMsg(message: ExecutorOfSchema): ExecutorOfSchemaProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ExecutorOfSchema',
      value: ExecutorOfSchema.encode(message).finish()
    };
  }
};