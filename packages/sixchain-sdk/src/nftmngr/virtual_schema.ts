//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Timestamp } from '../google/protobuf/timestamp';
import { fromTimestamp,toTimestamp } from '../helpers';
export enum RegistryStatus {
  PENDING = 0,
  REJECT = 1,
  ACCEPT = 2,
  UNRECOGNIZED = -1,
}
export const RegistryStatusSDKType = RegistryStatus;
export const RegistryStatusAmino = RegistryStatus;
export function registryStatusFromJSON(object: any): RegistryStatus {
  switch (object) {
  case 0:
  case 'PENDING':
    return RegistryStatus.PENDING;
  case 1:
  case 'REJECT':
    return RegistryStatus.REJECT;
  case 2:
  case 'ACCEPT':
    return RegistryStatus.ACCEPT;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return RegistryStatus.UNRECOGNIZED;
  }
}
export function registryStatusToJSON(object: RegistryStatus): string {
  switch (object) {
  case RegistryStatus.PENDING:
    return 'PENDING';
  case RegistryStatus.REJECT:
    return 'REJECT';
  case RegistryStatus.ACCEPT:
    return 'ACCEPT';
  case RegistryStatus.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
export interface VirtualSchemaProposal {
  id: string;
  virtualSchemaCode: string;
  registry: VirtualSchemaRegistry[];
  submitTime: Date;
  votinStartTime: Date;
  votingEndTime: Date;
}
export interface VirtualSchemaProposalProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaProposal';
  value: Uint8Array;
}
export interface VirtualSchemaProposalAmino {
  id?: string;
  virtualSchemaCode?: string;
  registry?: VirtualSchemaRegistryAmino[];
  submitTime?: string;
  votinStartTime?: string;
  votingEndTime?: string;
}
export interface VirtualSchemaProposalAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaProposal';
  value: VirtualSchemaProposalAmino;
}
export interface VirtualSchemaProposalSDKType {
  id: string;
  virtualSchemaCode: string;
  registry: VirtualSchemaRegistrySDKType[];
  submitTime: Date;
  votinStartTime: Date;
  votingEndTime: Date;
}
export interface VirtualSchema {
  virtualNftSchemaCode: string;
  registry: VirtualSchemaRegistry[];
  enable: boolean;
  expiredAtBlock: string;
}
export interface VirtualSchemaProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchema';
  value: Uint8Array;
}
export interface VirtualSchemaAmino {
  virtualNftSchemaCode?: string;
  registry?: VirtualSchemaRegistryAmino[];
  enable?: boolean;
  expiredAtBlock?: string;
}
export interface VirtualSchemaAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchema';
  value: VirtualSchemaAmino;
}
export interface VirtualSchemaSDKType {
  virtualNftSchemaCode: string;
  registry: VirtualSchemaRegistrySDKType[];
  enable: boolean;
  expiredAtBlock: string;
}
export interface VirtualSchemaRegistry {
  nftSchemaCode: string;
  sharedAttributes: string[];
  status: RegistryStatus;
}
export interface VirtualSchemaRegistryProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistry';
  value: Uint8Array;
}
export interface VirtualSchemaRegistryAmino {
  nftSchemaCode?: string;
  sharedAttributes?: string[];
  status?: RegistryStatus;
}
export interface VirtualSchemaRegistryAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistry';
  value: VirtualSchemaRegistryAmino;
}
export interface VirtualSchemaRegistrySDKType {
  nftSchemaCode: string;
  sharedAttributes: string[];
  status: RegistryStatus;
}
export interface VirtualSchemaRegistryRequest {
  nftSchemaCode: string;
  sharedAttributes: string[];
}
export interface VirtualSchemaRegistryRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistryRequest';
  value: Uint8Array;
}
export interface VirtualSchemaRegistryRequestAmino {
  nftSchemaCode?: string;
  sharedAttributes?: string[];
}
export interface VirtualSchemaRegistryRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistryRequest';
  value: VirtualSchemaRegistryRequestAmino;
}
export interface VirtualSchemaRegistryRequestSDKType {
  nftSchemaCode: string;
  sharedAttributes: string[];
}
export interface ActiveVirtualSchemaProposal {
  id: string;
}
export interface ActiveVirtualSchemaProposalProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActiveVirtualSchemaProposal';
  value: Uint8Array;
}
export interface ActiveVirtualSchemaProposalAmino {
  id?: string;
}
export interface ActiveVirtualSchemaProposalAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.ActiveVirtualSchemaProposal';
  value: ActiveVirtualSchemaProposalAmino;
}
export interface ActiveVirtualSchemaProposalSDKType {
  id: string;
}
export interface InactiveVirtualSchemaProposal {
  id: string;
}
export interface InactiveVirtualSchemaProposalProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.InactiveVirtualSchemaProposal';
  value: Uint8Array;
}
export interface InactiveVirtualSchemaProposalAmino {
  id?: string;
}
export interface InactiveVirtualSchemaProposalAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.InactiveVirtualSchemaProposal';
  value: InactiveVirtualSchemaProposalAmino;
}
export interface InactiveVirtualSchemaProposalSDKType {
  id: string;
}
function createBaseVirtualSchemaProposal(): VirtualSchemaProposal {
  return {
    id: '',
    virtualSchemaCode: '',
    registry: [],
    submitTime: new Date(),
    votinStartTime: new Date(),
    votingEndTime: new Date()
  };
}
export const VirtualSchemaProposal = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaProposal',
  encode(message: VirtualSchemaProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.virtualSchemaCode !== '') {
      writer.uint32(18).string(message.virtualSchemaCode);
    }
    for (const v of message.registry) {
      VirtualSchemaRegistry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.votinStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.votinStartTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.votingEndTime), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualSchemaProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualSchemaProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.string();
        break;
      case 2:
        message.virtualSchemaCode = reader.string();
        break;
      case 3:
        message.registry.push(VirtualSchemaRegistry.decode(reader, reader.uint32()));
        break;
      case 4:
        message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 5:
        message.votinStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 6:
        message.votingEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VirtualSchemaProposal>): VirtualSchemaProposal {
    const message = createBaseVirtualSchemaProposal();
    message.id = object.id ?? '';
    message.virtualSchemaCode = object.virtualSchemaCode ?? '';
    message.registry = object.registry?.map(e => VirtualSchemaRegistry.fromPartial(e)) || [];
    message.submitTime = object.submitTime ?? undefined;
    message.votinStartTime = object.votinStartTime ?? undefined;
    message.votingEndTime = object.votingEndTime ?? undefined;
    return message;
  },
  fromAmino(object: VirtualSchemaProposalAmino): VirtualSchemaProposal {
    const message = createBaseVirtualSchemaProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.virtualSchemaCode !== undefined && object.virtualSchemaCode !== null) {
      message.virtualSchemaCode = object.virtualSchemaCode;
    }
    message.registry = object.registry?.map(e => VirtualSchemaRegistry.fromAmino(e)) || [];
    if (object.submitTime !== undefined && object.submitTime !== null) {
      message.submitTime = fromTimestamp(Timestamp.fromAmino(object.submitTime));
    }
    if (object.votinStartTime !== undefined && object.votinStartTime !== null) {
      message.votinStartTime = fromTimestamp(Timestamp.fromAmino(object.votinStartTime));
    }
    if (object.votingEndTime !== undefined && object.votingEndTime !== null) {
      message.votingEndTime = fromTimestamp(Timestamp.fromAmino(object.votingEndTime));
    }
    return message;
  },
  toAmino(message: VirtualSchemaProposal): VirtualSchemaProposalAmino {
    const obj: any = {};
    obj.id = message.id === '' ? undefined : message.id;
    obj.virtualSchemaCode = message.virtualSchemaCode === '' ? undefined : message.virtualSchemaCode;
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? VirtualSchemaRegistry.toAmino(e) : undefined);
    } else {
      obj.registry = message.registry;
    }
    obj.submitTime = message.submitTime ? Timestamp.toAmino(toTimestamp(message.submitTime)) : undefined;
    obj.votinStartTime = message.votinStartTime ? Timestamp.toAmino(toTimestamp(message.votinStartTime)) : undefined;
    obj.votingEndTime = message.votingEndTime ? Timestamp.toAmino(toTimestamp(message.votingEndTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: VirtualSchemaProposalAminoMsg): VirtualSchemaProposal {
    return VirtualSchemaProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: VirtualSchemaProposalProtoMsg): VirtualSchemaProposal {
    return VirtualSchemaProposal.decode(message.value);
  },
  toProto(message: VirtualSchemaProposal): Uint8Array {
    return VirtualSchemaProposal.encode(message).finish();
  },
  toProtoMsg(message: VirtualSchemaProposal): VirtualSchemaProposalProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaProposal',
      value: VirtualSchemaProposal.encode(message).finish()
    };
  }
};
function createBaseVirtualSchema(): VirtualSchema {
  return {
    virtualNftSchemaCode: '',
    registry: [],
    enable: false,
    expiredAtBlock: ''
  };
}
export const VirtualSchema = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchema',
  encode(message: VirtualSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.virtualNftSchemaCode !== '') {
      writer.uint32(10).string(message.virtualNftSchemaCode);
    }
    for (const v of message.registry) {
      VirtualSchemaRegistry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.enable === true) {
      writer.uint32(24).bool(message.enable);
    }
    if (message.expiredAtBlock !== '') {
      writer.uint32(34).string(message.expiredAtBlock);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.virtualNftSchemaCode = reader.string();
        break;
      case 2:
        message.registry.push(VirtualSchemaRegistry.decode(reader, reader.uint32()));
        break;
      case 3:
        message.enable = reader.bool();
        break;
      case 4:
        message.expiredAtBlock = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VirtualSchema>): VirtualSchema {
    const message = createBaseVirtualSchema();
    message.virtualNftSchemaCode = object.virtualNftSchemaCode ?? '';
    message.registry = object.registry?.map(e => VirtualSchemaRegistry.fromPartial(e)) || [];
    message.enable = object.enable ?? false;
    message.expiredAtBlock = object.expiredAtBlock ?? '';
    return message;
  },
  fromAmino(object: VirtualSchemaAmino): VirtualSchema {
    const message = createBaseVirtualSchema();
    if (object.virtualNftSchemaCode !== undefined && object.virtualNftSchemaCode !== null) {
      message.virtualNftSchemaCode = object.virtualNftSchemaCode;
    }
    message.registry = object.registry?.map(e => VirtualSchemaRegistry.fromAmino(e)) || [];
    if (object.enable !== undefined && object.enable !== null) {
      message.enable = object.enable;
    }
    if (object.expiredAtBlock !== undefined && object.expiredAtBlock !== null) {
      message.expiredAtBlock = object.expiredAtBlock;
    }
    return message;
  },
  toAmino(message: VirtualSchema): VirtualSchemaAmino {
    const obj: any = {};
    obj.virtualNftSchemaCode = message.virtualNftSchemaCode === '' ? undefined : message.virtualNftSchemaCode;
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? VirtualSchemaRegistry.toAmino(e) : undefined);
    } else {
      obj.registry = message.registry;
    }
    obj.enable = message.enable === false ? undefined : message.enable;
    obj.expiredAtBlock = message.expiredAtBlock === '' ? undefined : message.expiredAtBlock;
    return obj;
  },
  fromAminoMsg(object: VirtualSchemaAminoMsg): VirtualSchema {
    return VirtualSchema.fromAmino(object.value);
  },
  fromProtoMsg(message: VirtualSchemaProtoMsg): VirtualSchema {
    return VirtualSchema.decode(message.value);
  },
  toProto(message: VirtualSchema): Uint8Array {
    return VirtualSchema.encode(message).finish();
  },
  toProtoMsg(message: VirtualSchema): VirtualSchemaProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchema',
      value: VirtualSchema.encode(message).finish()
    };
  }
};
function createBaseVirtualSchemaRegistry(): VirtualSchemaRegistry {
  return {
    nftSchemaCode: '',
    sharedAttributes: [],
    status: 0
  };
}
export const VirtualSchemaRegistry = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistry',
  encode(message: VirtualSchemaRegistry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.sharedAttributes) {
      writer.uint32(18).string(v!);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualSchemaRegistry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualSchemaRegistry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.sharedAttributes.push(reader.string());
        break;
      case 3:
        message.status = reader.int32() as any;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VirtualSchemaRegistry>): VirtualSchemaRegistry {
    const message = createBaseVirtualSchemaRegistry();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.sharedAttributes = object.sharedAttributes?.map(e => e) || [];
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: VirtualSchemaRegistryAmino): VirtualSchemaRegistry {
    const message = createBaseVirtualSchemaRegistry();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.sharedAttributes = object.sharedAttributes?.map(e => e) || [];
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: VirtualSchemaRegistry): VirtualSchemaRegistryAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    if (message.sharedAttributes) {
      obj.sharedAttributes = message.sharedAttributes.map(e => e);
    } else {
      obj.sharedAttributes = message.sharedAttributes;
    }
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: VirtualSchemaRegistryAminoMsg): VirtualSchemaRegistry {
    return VirtualSchemaRegistry.fromAmino(object.value);
  },
  fromProtoMsg(message: VirtualSchemaRegistryProtoMsg): VirtualSchemaRegistry {
    return VirtualSchemaRegistry.decode(message.value);
  },
  toProto(message: VirtualSchemaRegistry): Uint8Array {
    return VirtualSchemaRegistry.encode(message).finish();
  },
  toProtoMsg(message: VirtualSchemaRegistry): VirtualSchemaRegistryProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistry',
      value: VirtualSchemaRegistry.encode(message).finish()
    };
  }
};
function createBaseVirtualSchemaRegistryRequest(): VirtualSchemaRegistryRequest {
  return {
    nftSchemaCode: '',
    sharedAttributes: []
  };
}
export const VirtualSchemaRegistryRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistryRequest',
  encode(message: VirtualSchemaRegistryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.sharedAttributes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualSchemaRegistryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualSchemaRegistryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.sharedAttributes.push(reader.string());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VirtualSchemaRegistryRequest>): VirtualSchemaRegistryRequest {
    const message = createBaseVirtualSchemaRegistryRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.sharedAttributes = object.sharedAttributes?.map(e => e) || [];
    return message;
  },
  fromAmino(object: VirtualSchemaRegistryRequestAmino): VirtualSchemaRegistryRequest {
    const message = createBaseVirtualSchemaRegistryRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.sharedAttributes = object.sharedAttributes?.map(e => e) || [];
    return message;
  },
  toAmino(message: VirtualSchemaRegistryRequest): VirtualSchemaRegistryRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    if (message.sharedAttributes) {
      obj.sharedAttributes = message.sharedAttributes.map(e => e);
    } else {
      obj.sharedAttributes = message.sharedAttributes;
    }
    return obj;
  },
  fromAminoMsg(object: VirtualSchemaRegistryRequestAminoMsg): VirtualSchemaRegistryRequest {
    return VirtualSchemaRegistryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: VirtualSchemaRegistryRequestProtoMsg): VirtualSchemaRegistryRequest {
    return VirtualSchemaRegistryRequest.decode(message.value);
  },
  toProto(message: VirtualSchemaRegistryRequest): Uint8Array {
    return VirtualSchemaRegistryRequest.encode(message).finish();
  },
  toProtoMsg(message: VirtualSchemaRegistryRequest): VirtualSchemaRegistryRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.VirtualSchemaRegistryRequest',
      value: VirtualSchemaRegistryRequest.encode(message).finish()
    };
  }
};
function createBaseActiveVirtualSchemaProposal(): ActiveVirtualSchemaProposal {
  return {
    id: ''
  };
}
export const ActiveVirtualSchemaProposal = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActiveVirtualSchemaProposal',
  encode(message: ActiveVirtualSchemaProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveVirtualSchemaProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveVirtualSchemaProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActiveVirtualSchemaProposal>): ActiveVirtualSchemaProposal {
    const message = createBaseActiveVirtualSchemaProposal();
    message.id = object.id ?? '';
    return message;
  },
  fromAmino(object: ActiveVirtualSchemaProposalAmino): ActiveVirtualSchemaProposal {
    const message = createBaseActiveVirtualSchemaProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: ActiveVirtualSchemaProposal): ActiveVirtualSchemaProposalAmino {
    const obj: any = {};
    obj.id = message.id === '' ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: ActiveVirtualSchemaProposalAminoMsg): ActiveVirtualSchemaProposal {
    return ActiveVirtualSchemaProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ActiveVirtualSchemaProposalProtoMsg): ActiveVirtualSchemaProposal {
    return ActiveVirtualSchemaProposal.decode(message.value);
  },
  toProto(message: ActiveVirtualSchemaProposal): Uint8Array {
    return ActiveVirtualSchemaProposal.encode(message).finish();
  },
  toProtoMsg(message: ActiveVirtualSchemaProposal): ActiveVirtualSchemaProposalProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActiveVirtualSchemaProposal',
      value: ActiveVirtualSchemaProposal.encode(message).finish()
    };
  }
};
function createBaseInactiveVirtualSchemaProposal(): InactiveVirtualSchemaProposal {
  return {
    id: ''
  };
}
export const InactiveVirtualSchemaProposal = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.InactiveVirtualSchemaProposal',
  encode(message: InactiveVirtualSchemaProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): InactiveVirtualSchemaProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInactiveVirtualSchemaProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InactiveVirtualSchemaProposal>): InactiveVirtualSchemaProposal {
    const message = createBaseInactiveVirtualSchemaProposal();
    message.id = object.id ?? '';
    return message;
  },
  fromAmino(object: InactiveVirtualSchemaProposalAmino): InactiveVirtualSchemaProposal {
    const message = createBaseInactiveVirtualSchemaProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: InactiveVirtualSchemaProposal): InactiveVirtualSchemaProposalAmino {
    const obj: any = {};
    obj.id = message.id === '' ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: InactiveVirtualSchemaProposalAminoMsg): InactiveVirtualSchemaProposal {
    return InactiveVirtualSchemaProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: InactiveVirtualSchemaProposalProtoMsg): InactiveVirtualSchemaProposal {
    return InactiveVirtualSchemaProposal.decode(message.value);
  },
  toProto(message: InactiveVirtualSchemaProposal): Uint8Array {
    return InactiveVirtualSchemaProposal.encode(message).finish();
  },
  toProtoMsg(message: InactiveVirtualSchemaProposal): InactiveVirtualSchemaProposalProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.InactiveVirtualSchemaProposal',
      value: InactiveVirtualSchemaProposal.encode(message).finish()
    };
  }
};