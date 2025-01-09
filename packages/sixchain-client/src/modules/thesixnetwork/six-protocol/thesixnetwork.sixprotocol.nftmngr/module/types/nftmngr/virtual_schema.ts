/* eslint-disable */
import { Timestamp } from "../google/protobuf/timestamp";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixprotocol.nftmngr";

export enum RegistryStatus {
  PENDING = 0,
  REJECT = 1,
  ACCEPT = 2,
  UNRECOGNIZED = -1,
}

export function registryStatusFromJSON(object: any): RegistryStatus {
  switch (object) {
    case 0:
    case "PENDING":
      return RegistryStatus.PENDING;
    case 1:
    case "REJECT":
      return RegistryStatus.REJECT;
    case 2:
    case "ACCEPT":
      return RegistryStatus.ACCEPT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RegistryStatus.UNRECOGNIZED;
  }
}

export function registryStatusToJSON(object: RegistryStatus): string {
  switch (object) {
    case RegistryStatus.PENDING:
      return "PENDING";
    case RegistryStatus.REJECT:
      return "REJECT";
    case RegistryStatus.ACCEPT:
      return "ACCEPT";
    default:
      return "UNKNOWN";
  }
}

export interface VirtualSchemaProposal {
  id: string;
  virtualSchemaCode: string;
  registry: VirtualSchemaRegistry[];
  submitTime: Date | undefined;
  votinStartTime: Date | undefined;
  votingEndTime: Date | undefined;
}

export interface VirtualSchema {
  virtualNftSchemaCode: string;
  registry: VirtualSchemaRegistry[];
  enable: boolean;
  /** link wih virtual action. We will not put in here to reduce redundance info */
  expiredAtBlock: string;
}

export interface VirtualSchemaRegistry {
  nftSchemaCode: string;
  sharedAttributes: string[];
  status: RegistryStatus;
}

export interface VirtualSchemaRegistryRequest {
  nftSchemaCode: string;
  sharedAttributes: string[];
}

export interface ActiveVirtualSchemaProposal {
  id: string;
}

export interface InactiveVirtualSchemaProposal {
  id: string;
}

const baseVirtualSchemaProposal: object = { id: "", virtualSchemaCode: "" };

export const VirtualSchemaProposal = {
  encode(
    message: VirtualSchemaProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.virtualSchemaCode !== "") {
      writer.uint32(18).string(message.virtualSchemaCode);
    }
    for (const v of message.registry) {
      VirtualSchemaRegistry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.submitTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.votinStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.votinStartTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.votingEndTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VirtualSchemaProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVirtualSchemaProposal } as VirtualSchemaProposal;
    message.registry = [];
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
          message.registry.push(
            VirtualSchemaRegistry.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.submitTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.votinStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.votingEndTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VirtualSchemaProposal {
    const message = { ...baseVirtualSchemaProposal } as VirtualSchemaProposal;
    message.registry = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.virtualSchemaCode !== undefined &&
      object.virtualSchemaCode !== null
    ) {
      message.virtualSchemaCode = String(object.virtualSchemaCode);
    } else {
      message.virtualSchemaCode = "";
    }
    if (object.registry !== undefined && object.registry !== null) {
      for (const e of object.registry) {
        message.registry.push(VirtualSchemaRegistry.fromJSON(e));
      }
    }
    if (object.submitTime !== undefined && object.submitTime !== null) {
      message.submitTime = fromJsonTimestamp(object.submitTime);
    } else {
      message.submitTime = undefined;
    }
    if (object.votinStartTime !== undefined && object.votinStartTime !== null) {
      message.votinStartTime = fromJsonTimestamp(object.votinStartTime);
    } else {
      message.votinStartTime = undefined;
    }
    if (object.votingEndTime !== undefined && object.votingEndTime !== null) {
      message.votingEndTime = fromJsonTimestamp(object.votingEndTime);
    } else {
      message.votingEndTime = undefined;
    }
    return message;
  },

  toJSON(message: VirtualSchemaProposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.virtualSchemaCode !== undefined &&
      (obj.virtualSchemaCode = message.virtualSchemaCode);
    if (message.registry) {
      obj.registry = message.registry.map((e) =>
        e ? VirtualSchemaRegistry.toJSON(e) : undefined
      );
    } else {
      obj.registry = [];
    }
    message.submitTime !== undefined &&
      (obj.submitTime =
        message.submitTime !== undefined
          ? message.submitTime.toISOString()
          : null);
    message.votinStartTime !== undefined &&
      (obj.votinStartTime =
        message.votinStartTime !== undefined
          ? message.votinStartTime.toISOString()
          : null);
    message.votingEndTime !== undefined &&
      (obj.votingEndTime =
        message.votingEndTime !== undefined
          ? message.votingEndTime.toISOString()
          : null);
    return obj;
  },

  fromPartial(
    object: DeepPartial<VirtualSchemaProposal>
  ): VirtualSchemaProposal {
    const message = { ...baseVirtualSchemaProposal } as VirtualSchemaProposal;
    message.registry = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.virtualSchemaCode !== undefined &&
      object.virtualSchemaCode !== null
    ) {
      message.virtualSchemaCode = object.virtualSchemaCode;
    } else {
      message.virtualSchemaCode = "";
    }
    if (object.registry !== undefined && object.registry !== null) {
      for (const e of object.registry) {
        message.registry.push(VirtualSchemaRegistry.fromPartial(e));
      }
    }
    if (object.submitTime !== undefined && object.submitTime !== null) {
      message.submitTime = object.submitTime;
    } else {
      message.submitTime = undefined;
    }
    if (object.votinStartTime !== undefined && object.votinStartTime !== null) {
      message.votinStartTime = object.votinStartTime;
    } else {
      message.votinStartTime = undefined;
    }
    if (object.votingEndTime !== undefined && object.votingEndTime !== null) {
      message.votingEndTime = object.votingEndTime;
    } else {
      message.votingEndTime = undefined;
    }
    return message;
  },
};

const baseVirtualSchema: object = {
  virtualNftSchemaCode: "",
  enable: false,
  expiredAtBlock: "",
};

export const VirtualSchema = {
  encode(message: VirtualSchema, writer: Writer = Writer.create()): Writer {
    if (message.virtualNftSchemaCode !== "") {
      writer.uint32(10).string(message.virtualNftSchemaCode);
    }
    for (const v of message.registry) {
      VirtualSchemaRegistry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.enable === true) {
      writer.uint32(24).bool(message.enable);
    }
    if (message.expiredAtBlock !== "") {
      writer.uint32(34).string(message.expiredAtBlock);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VirtualSchema {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVirtualSchema } as VirtualSchema;
    message.registry = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.virtualNftSchemaCode = reader.string();
          break;
        case 2:
          message.registry.push(
            VirtualSchemaRegistry.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): VirtualSchema {
    const message = { ...baseVirtualSchema } as VirtualSchema;
    message.registry = [];
    if (
      object.virtualNftSchemaCode !== undefined &&
      object.virtualNftSchemaCode !== null
    ) {
      message.virtualNftSchemaCode = String(object.virtualNftSchemaCode);
    } else {
      message.virtualNftSchemaCode = "";
    }
    if (object.registry !== undefined && object.registry !== null) {
      for (const e of object.registry) {
        message.registry.push(VirtualSchemaRegistry.fromJSON(e));
      }
    }
    if (object.enable !== undefined && object.enable !== null) {
      message.enable = Boolean(object.enable);
    } else {
      message.enable = false;
    }
    if (object.expiredAtBlock !== undefined && object.expiredAtBlock !== null) {
      message.expiredAtBlock = String(object.expiredAtBlock);
    } else {
      message.expiredAtBlock = "";
    }
    return message;
  },

  toJSON(message: VirtualSchema): unknown {
    const obj: any = {};
    message.virtualNftSchemaCode !== undefined &&
      (obj.virtualNftSchemaCode = message.virtualNftSchemaCode);
    if (message.registry) {
      obj.registry = message.registry.map((e) =>
        e ? VirtualSchemaRegistry.toJSON(e) : undefined
      );
    } else {
      obj.registry = [];
    }
    message.enable !== undefined && (obj.enable = message.enable);
    message.expiredAtBlock !== undefined &&
      (obj.expiredAtBlock = message.expiredAtBlock);
    return obj;
  },

  fromPartial(object: DeepPartial<VirtualSchema>): VirtualSchema {
    const message = { ...baseVirtualSchema } as VirtualSchema;
    message.registry = [];
    if (
      object.virtualNftSchemaCode !== undefined &&
      object.virtualNftSchemaCode !== null
    ) {
      message.virtualNftSchemaCode = object.virtualNftSchemaCode;
    } else {
      message.virtualNftSchemaCode = "";
    }
    if (object.registry !== undefined && object.registry !== null) {
      for (const e of object.registry) {
        message.registry.push(VirtualSchemaRegistry.fromPartial(e));
      }
    }
    if (object.enable !== undefined && object.enable !== null) {
      message.enable = object.enable;
    } else {
      message.enable = false;
    }
    if (object.expiredAtBlock !== undefined && object.expiredAtBlock !== null) {
      message.expiredAtBlock = object.expiredAtBlock;
    } else {
      message.expiredAtBlock = "";
    }
    return message;
  },
};

const baseVirtualSchemaRegistry: object = {
  nftSchemaCode: "",
  sharedAttributes: "",
  status: 0,
};

export const VirtualSchemaRegistry = {
  encode(
    message: VirtualSchemaRegistry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
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

  decode(input: Reader | Uint8Array, length?: number): VirtualSchemaRegistry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVirtualSchemaRegistry } as VirtualSchemaRegistry;
    message.sharedAttributes = [];
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

  fromJSON(object: any): VirtualSchemaRegistry {
    const message = { ...baseVirtualSchemaRegistry } as VirtualSchemaRegistry;
    message.sharedAttributes = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.sharedAttributes !== undefined &&
      object.sharedAttributes !== null
    ) {
      for (const e of object.sharedAttributes) {
        message.sharedAttributes.push(String(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = registryStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    return message;
  },

  toJSON(message: VirtualSchemaRegistry): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    if (message.sharedAttributes) {
      obj.sharedAttributes = message.sharedAttributes.map((e) => e);
    } else {
      obj.sharedAttributes = [];
    }
    message.status !== undefined &&
      (obj.status = registryStatusToJSON(message.status));
    return obj;
  },

  fromPartial(
    object: DeepPartial<VirtualSchemaRegistry>
  ): VirtualSchemaRegistry {
    const message = { ...baseVirtualSchemaRegistry } as VirtualSchemaRegistry;
    message.sharedAttributes = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.sharedAttributes !== undefined &&
      object.sharedAttributes !== null
    ) {
      for (const e of object.sharedAttributes) {
        message.sharedAttributes.push(e);
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    return message;
  },
};

const baseVirtualSchemaRegistryRequest: object = {
  nftSchemaCode: "",
  sharedAttributes: "",
};

export const VirtualSchemaRegistryRequest = {
  encode(
    message: VirtualSchemaRegistryRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.sharedAttributes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): VirtualSchemaRegistryRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVirtualSchemaRegistryRequest,
    } as VirtualSchemaRegistryRequest;
    message.sharedAttributes = [];
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

  fromJSON(object: any): VirtualSchemaRegistryRequest {
    const message = {
      ...baseVirtualSchemaRegistryRequest,
    } as VirtualSchemaRegistryRequest;
    message.sharedAttributes = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.sharedAttributes !== undefined &&
      object.sharedAttributes !== null
    ) {
      for (const e of object.sharedAttributes) {
        message.sharedAttributes.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: VirtualSchemaRegistryRequest): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    if (message.sharedAttributes) {
      obj.sharedAttributes = message.sharedAttributes.map((e) => e);
    } else {
      obj.sharedAttributes = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<VirtualSchemaRegistryRequest>
  ): VirtualSchemaRegistryRequest {
    const message = {
      ...baseVirtualSchemaRegistryRequest,
    } as VirtualSchemaRegistryRequest;
    message.sharedAttributes = [];
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (
      object.sharedAttributes !== undefined &&
      object.sharedAttributes !== null
    ) {
      for (const e of object.sharedAttributes) {
        message.sharedAttributes.push(e);
      }
    }
    return message;
  },
};

const baseActiveVirtualSchemaProposal: object = { id: "" };

export const ActiveVirtualSchemaProposal = {
  encode(
    message: ActiveVirtualSchemaProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ActiveVirtualSchemaProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseActiveVirtualSchemaProposal,
    } as ActiveVirtualSchemaProposal;
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

  fromJSON(object: any): ActiveVirtualSchemaProposal {
    const message = {
      ...baseActiveVirtualSchemaProposal,
    } as ActiveVirtualSchemaProposal;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: ActiveVirtualSchemaProposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ActiveVirtualSchemaProposal>
  ): ActiveVirtualSchemaProposal {
    const message = {
      ...baseActiveVirtualSchemaProposal,
    } as ActiveVirtualSchemaProposal;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseInactiveVirtualSchemaProposal: object = { id: "" };

export const InactiveVirtualSchemaProposal = {
  encode(
    message: InactiveVirtualSchemaProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): InactiveVirtualSchemaProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInactiveVirtualSchemaProposal,
    } as InactiveVirtualSchemaProposal;
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

  fromJSON(object: any): InactiveVirtualSchemaProposal {
    const message = {
      ...baseInactiveVirtualSchemaProposal,
    } as InactiveVirtualSchemaProposal;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: InactiveVirtualSchemaProposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<InactiveVirtualSchemaProposal>
  ): InactiveVirtualSchemaProposal {
    const message = {
      ...baseInactiveVirtualSchemaProposal,
    } as InactiveVirtualSchemaProposal;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}
