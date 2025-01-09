//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface ProtocoladminPacketData {
  noData?: NoData;
}
export interface ProtocoladminPacketDataProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.ProtocoladminPacketData';
  value: Uint8Array;
}
export interface ProtocoladminPacketDataAmino {
  noData?: NoDataAmino;
}
export interface ProtocoladminPacketDataAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.ProtocoladminPacketData';
  value: ProtocoladminPacketDataAmino;
}
export interface ProtocoladminPacketDataSDKType {
  noData?: NoDataSDKType;
}
export interface NoData {}
export interface NoDataProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.NoData';
  value: Uint8Array;
}
export interface NoDataAmino {}
export interface NoDataAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.NoData';
  value: NoDataAmino;
}
export interface NoDataSDKType {}
function createBaseProtocoladminPacketData(): ProtocoladminPacketData {
  return {
    noData: undefined
  };
}
export const ProtocoladminPacketData = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.ProtocoladminPacketData',
  encode(message: ProtocoladminPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocoladminPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocoladminPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.noData = NoData.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProtocoladminPacketData>): ProtocoladminPacketData {
    const message = createBaseProtocoladminPacketData();
    message.noData = object.noData !== undefined && object.noData !== null ? NoData.fromPartial(object.noData) : undefined;
    return message;
  },
  fromAmino(object: ProtocoladminPacketDataAmino): ProtocoladminPacketData {
    const message = createBaseProtocoladminPacketData();
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromAmino(object.noData);
    }
    return message;
  },
  toAmino(message: ProtocoladminPacketData): ProtocoladminPacketDataAmino {
    const obj: any = {};
    obj.noData = message.noData ? NoData.toAmino(message.noData) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProtocoladminPacketDataAminoMsg): ProtocoladminPacketData {
    return ProtocoladminPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message: ProtocoladminPacketDataProtoMsg): ProtocoladminPacketData {
    return ProtocoladminPacketData.decode(message.value);
  },
  toProto(message: ProtocoladminPacketData): Uint8Array {
    return ProtocoladminPacketData.encode(message).finish();
  },
  toProtoMsg(message: ProtocoladminPacketData): ProtocoladminPacketDataProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.ProtocoladminPacketData',
      value: ProtocoladminPacketData.encode(message).finish()
    };
  }
};
function createBaseNoData(): NoData {
  return {};
}
export const NoData = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.NoData',
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  },
  fromAmino(_: NoDataAmino): NoData {
    const message = createBaseNoData();
    return message;
  },
  toAmino(_: NoData): NoDataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: NoDataAminoMsg): NoData {
    return NoData.fromAmino(object.value);
  },
  fromProtoMsg(message: NoDataProtoMsg): NoData {
    return NoData.decode(message.value);
  },
  toProto(message: NoData): Uint8Array {
    return NoData.encode(message).finish();
  },
  toProtoMsg(message: NoData): NoDataProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.NoData',
      value: NoData.encode(message).finish()
    };
  }
};