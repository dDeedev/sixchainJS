//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { RegistryStatus } from './virtual_schema';
export interface DisableVirtualSchema {
  id: string;
  virtualNftSchemaCode: string;
  proposalExpiredBlock: string;
}
export interface DisableVirtualSchemaProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.DisableVirtualSchema';
  value: Uint8Array;
}
export interface DisableVirtualSchemaAmino {
  id?: string;
  virtualNftSchemaCode?: string;
  proposalExpiredBlock?: string;
}
export interface DisableVirtualSchemaAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.DisableVirtualSchema';
  value: DisableVirtualSchemaAmino;
}
export interface DisableVirtualSchemaSDKType {
  id: string;
  virtualNftSchemaCode: string;
  proposalExpiredBlock: string;
}
export interface VirtualSchemaDisableRequest {
  id: string;
  virtualNftSchemaCode: string;
  registry: VirtualSchemaDisableRegistry[];
  proposalExpiredBlock: string;
  creator: string;
}
export interface VirtualSchemaDisableRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaDisableRequest';
  value: Uint8Array;
}
export interface VirtualSchemaDisableRequestAmino {
  id?: string;
  virtualNftSchemaCode?: string;
  registry?: VirtualSchemaDisableRegistryAmino[];
  proposalExpiredBlock?: string;
  creator?: string;
}
export interface VirtualSchemaDisableRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaDisableRequest';
  value: VirtualSchemaDisableRequestAmino;
}
export interface VirtualSchemaDisableRequestSDKType {
  id: string;
  virtualNftSchemaCode: string;
  registry: VirtualSchemaDisableRegistrySDKType[];
  proposalExpiredBlock: string;
  creator: string;
}
export interface VirtualSchemaDisableRegistry {
  nftSchemaCode: string;
  status: RegistryStatus;
}
export interface VirtualSchemaDisableRegistryProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaDisableRegistry';
  value: Uint8Array;
}
export interface VirtualSchemaDisableRegistryAmino {
  nftSchemaCode?: string;
  status?: RegistryStatus;
}
export interface VirtualSchemaDisableRegistryAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaDisableRegistry';
  value: VirtualSchemaDisableRegistryAmino;
}
export interface VirtualSchemaDisableRegistrySDKType {
  nftSchemaCode: string;
  status: RegistryStatus;
}
function createBaseDisableVirtualSchema(): DisableVirtualSchema {
  return {
    id: '',
    virtualNftSchemaCode: '',
    proposalExpiredBlock: ''
  };
}
export const DisableVirtualSchema = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.DisableVirtualSchema',
  encode(message: DisableVirtualSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.virtualNftSchemaCode !== '') {
      writer.uint32(18).string(message.virtualNftSchemaCode);
    }
    if (message.proposalExpiredBlock !== '') {
      writer.uint32(26).string(message.proposalExpiredBlock);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DisableVirtualSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisableVirtualSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.string();
        break;
      case 2:
        message.virtualNftSchemaCode = reader.string();
        break;
      case 3:
        message.proposalExpiredBlock = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DisableVirtualSchema>): DisableVirtualSchema {
    const message = createBaseDisableVirtualSchema();
    message.id = object.id ?? '';
    message.virtualNftSchemaCode = object.virtualNftSchemaCode ?? '';
    message.proposalExpiredBlock = object.proposalExpiredBlock ?? '';
    return message;
  },
  fromAmino(object: DisableVirtualSchemaAmino): DisableVirtualSchema {
    const message = createBaseDisableVirtualSchema();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.virtualNftSchemaCode !== undefined && object.virtualNftSchemaCode !== null) {
      message.virtualNftSchemaCode = object.virtualNftSchemaCode;
    }
    if (object.proposalExpiredBlock !== undefined && object.proposalExpiredBlock !== null) {
      message.proposalExpiredBlock = object.proposalExpiredBlock;
    }
    return message;
  },
  toAmino(message: DisableVirtualSchema): DisableVirtualSchemaAmino {
    const obj: any = {};
    obj.id = message.id === '' ? undefined : message.id;
    obj.virtualNftSchemaCode = message.virtualNftSchemaCode === '' ? undefined : message.virtualNftSchemaCode;
    obj.proposalExpiredBlock = message.proposalExpiredBlock === '' ? undefined : message.proposalExpiredBlock;
    return obj;
  },
  fromAminoMsg(object: DisableVirtualSchemaAminoMsg): DisableVirtualSchema {
    return DisableVirtualSchema.fromAmino(object.value);
  },
  fromProtoMsg(message: DisableVirtualSchemaProtoMsg): DisableVirtualSchema {
    return DisableVirtualSchema.decode(message.value);
  },
  toProto(message: DisableVirtualSchema): Uint8Array {
    return DisableVirtualSchema.encode(message).finish();
  },
  toProtoMsg(message: DisableVirtualSchema): DisableVirtualSchemaProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.DisableVirtualSchema',
      value: DisableVirtualSchema.encode(message).finish()
    };
  }
};
function createBaseVirtualSchemaDisableRequest(): VirtualSchemaDisableRequest {
  return {
    id: '',
    virtualNftSchemaCode: '',
    registry: [],
    proposalExpiredBlock: '',
    creator: ''
  };
}
export const VirtualSchemaDisableRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaDisableRequest',
  encode(message: VirtualSchemaDisableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.virtualNftSchemaCode !== '') {
      writer.uint32(18).string(message.virtualNftSchemaCode);
    }
    for (const v of message.registry) {
      VirtualSchemaDisableRegistry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.proposalExpiredBlock !== '') {
      writer.uint32(34).string(message.proposalExpiredBlock);
    }
    if (message.creator !== '') {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualSchemaDisableRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualSchemaDisableRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.string();
        break;
      case 2:
        message.virtualNftSchemaCode = reader.string();
        break;
      case 3:
        message.registry.push(VirtualSchemaDisableRegistry.decode(reader, reader.uint32()));
        break;
      case 4:
        message.proposalExpiredBlock = reader.string();
        break;
      case 5:
        message.creator = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VirtualSchemaDisableRequest>): VirtualSchemaDisableRequest {
    const message = createBaseVirtualSchemaDisableRequest();
    message.id = object.id ?? '';
    message.virtualNftSchemaCode = object.virtualNftSchemaCode ?? '';
    message.registry = object.registry?.map(e => VirtualSchemaDisableRegistry.fromPartial(e)) || [];
    message.proposalExpiredBlock = object.proposalExpiredBlock ?? '';
    message.creator = object.creator ?? '';
    return message;
  },
  fromAmino(object: VirtualSchemaDisableRequestAmino): VirtualSchemaDisableRequest {
    const message = createBaseVirtualSchemaDisableRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.virtualNftSchemaCode !== undefined && object.virtualNftSchemaCode !== null) {
      message.virtualNftSchemaCode = object.virtualNftSchemaCode;
    }
    message.registry = object.registry?.map(e => VirtualSchemaDisableRegistry.fromAmino(e)) || [];
    if (object.proposalExpiredBlock !== undefined && object.proposalExpiredBlock !== null) {
      message.proposalExpiredBlock = object.proposalExpiredBlock;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: VirtualSchemaDisableRequest): VirtualSchemaDisableRequestAmino {
    const obj: any = {};
    obj.id = message.id === '' ? undefined : message.id;
    obj.virtualNftSchemaCode = message.virtualNftSchemaCode === '' ? undefined : message.virtualNftSchemaCode;
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? VirtualSchemaDisableRegistry.toAmino(e) : undefined);
    } else {
      obj.registry = message.registry;
    }
    obj.proposalExpiredBlock = message.proposalExpiredBlock === '' ? undefined : message.proposalExpiredBlock;
    obj.creator = message.creator === '' ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: VirtualSchemaDisableRequestAminoMsg): VirtualSchemaDisableRequest {
    return VirtualSchemaDisableRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: VirtualSchemaDisableRequestProtoMsg): VirtualSchemaDisableRequest {
    return VirtualSchemaDisableRequest.decode(message.value);
  },
  toProto(message: VirtualSchemaDisableRequest): Uint8Array {
    return VirtualSchemaDisableRequest.encode(message).finish();
  },
  toProtoMsg(message: VirtualSchemaDisableRequest): VirtualSchemaDisableRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaDisableRequest',
      value: VirtualSchemaDisableRequest.encode(message).finish()
    };
  }
};
function createBaseVirtualSchemaDisableRegistry(): VirtualSchemaDisableRegistry {
  return {
    nftSchemaCode: '',
    status: 0
  };
}
export const VirtualSchemaDisableRegistry = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaDisableRegistry',
  encode(message: VirtualSchemaDisableRegistry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualSchemaDisableRegistry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualSchemaDisableRegistry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.status = reader.int32() as any;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VirtualSchemaDisableRegistry>): VirtualSchemaDisableRegistry {
    const message = createBaseVirtualSchemaDisableRegistry();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: VirtualSchemaDisableRegistryAmino): VirtualSchemaDisableRegistry {
    const message = createBaseVirtualSchemaDisableRegistry();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: VirtualSchemaDisableRegistry): VirtualSchemaDisableRegistryAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: VirtualSchemaDisableRegistryAminoMsg): VirtualSchemaDisableRegistry {
    return VirtualSchemaDisableRegistry.fromAmino(object.value);
  },
  fromProtoMsg(message: VirtualSchemaDisableRegistryProtoMsg): VirtualSchemaDisableRegistry {
    return VirtualSchemaDisableRegistry.decode(message.value);
  },
  toProto(message: VirtualSchemaDisableRegistry): Uint8Array {
    return VirtualSchemaDisableRegistry.encode(message).finish();
  },
  toProtoMsg(message: VirtualSchemaDisableRegistry): VirtualSchemaDisableRegistryProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaDisableRegistry',
      value: VirtualSchemaDisableRegistry.encode(message).finish()
    };
  }
};