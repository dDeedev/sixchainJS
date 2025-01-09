/* eslint-disable */
import {
  RegistryStatus,
  registryStatusFromJSON,
  registryStatusToJSON,
} from "../nftmngr/virtual_schema";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixprotocol.nftmngr";

export interface DisableVirtualSchema {
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

export interface VirtualSchemaDisableRegistry {
  nftSchemaCode: string;
  status: RegistryStatus;
}

const baseDisableVirtualSchema: object = {
  id: "",
  virtualNftSchemaCode: "",
  proposalExpiredBlock: "",
};

export const DisableVirtualSchema = {
  encode(
    message: DisableVirtualSchema,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.virtualNftSchemaCode !== "") {
      writer.uint32(18).string(message.virtualNftSchemaCode);
    }
    if (message.proposalExpiredBlock !== "") {
      writer.uint32(26).string(message.proposalExpiredBlock);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DisableVirtualSchema {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDisableVirtualSchema } as DisableVirtualSchema;
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

  fromJSON(object: any): DisableVirtualSchema {
    const message = { ...baseDisableVirtualSchema } as DisableVirtualSchema;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.virtualNftSchemaCode !== undefined &&
      object.virtualNftSchemaCode !== null
    ) {
      message.virtualNftSchemaCode = String(object.virtualNftSchemaCode);
    } else {
      message.virtualNftSchemaCode = "";
    }
    if (
      object.proposalExpiredBlock !== undefined &&
      object.proposalExpiredBlock !== null
    ) {
      message.proposalExpiredBlock = String(object.proposalExpiredBlock);
    } else {
      message.proposalExpiredBlock = "";
    }
    return message;
  },

  toJSON(message: DisableVirtualSchema): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.virtualNftSchemaCode !== undefined &&
      (obj.virtualNftSchemaCode = message.virtualNftSchemaCode);
    message.proposalExpiredBlock !== undefined &&
      (obj.proposalExpiredBlock = message.proposalExpiredBlock);
    return obj;
  },

  fromPartial(object: DeepPartial<DisableVirtualSchema>): DisableVirtualSchema {
    const message = { ...baseDisableVirtualSchema } as DisableVirtualSchema;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.virtualNftSchemaCode !== undefined &&
      object.virtualNftSchemaCode !== null
    ) {
      message.virtualNftSchemaCode = object.virtualNftSchemaCode;
    } else {
      message.virtualNftSchemaCode = "";
    }
    if (
      object.proposalExpiredBlock !== undefined &&
      object.proposalExpiredBlock !== null
    ) {
      message.proposalExpiredBlock = object.proposalExpiredBlock;
    } else {
      message.proposalExpiredBlock = "";
    }
    return message;
  },
};

const baseVirtualSchemaDisableRequest: object = {
  id: "",
  virtualNftSchemaCode: "",
  proposalExpiredBlock: "",
  creator: "",
};

export const VirtualSchemaDisableRequest = {
  encode(
    message: VirtualSchemaDisableRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.virtualNftSchemaCode !== "") {
      writer.uint32(18).string(message.virtualNftSchemaCode);
    }
    for (const v of message.registry) {
      VirtualSchemaDisableRegistry.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.proposalExpiredBlock !== "") {
      writer.uint32(34).string(message.proposalExpiredBlock);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): VirtualSchemaDisableRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVirtualSchemaDisableRequest,
    } as VirtualSchemaDisableRequest;
    message.registry = [];
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
          message.registry.push(
            VirtualSchemaDisableRegistry.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): VirtualSchemaDisableRequest {
    const message = {
      ...baseVirtualSchemaDisableRequest,
    } as VirtualSchemaDisableRequest;
    message.registry = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
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
        message.registry.push(VirtualSchemaDisableRegistry.fromJSON(e));
      }
    }
    if (
      object.proposalExpiredBlock !== undefined &&
      object.proposalExpiredBlock !== null
    ) {
      message.proposalExpiredBlock = String(object.proposalExpiredBlock);
    } else {
      message.proposalExpiredBlock = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: VirtualSchemaDisableRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.virtualNftSchemaCode !== undefined &&
      (obj.virtualNftSchemaCode = message.virtualNftSchemaCode);
    if (message.registry) {
      obj.registry = message.registry.map((e) =>
        e ? VirtualSchemaDisableRegistry.toJSON(e) : undefined
      );
    } else {
      obj.registry = [];
    }
    message.proposalExpiredBlock !== undefined &&
      (obj.proposalExpiredBlock = message.proposalExpiredBlock);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<VirtualSchemaDisableRequest>
  ): VirtualSchemaDisableRequest {
    const message = {
      ...baseVirtualSchemaDisableRequest,
    } as VirtualSchemaDisableRequest;
    message.registry = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
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
        message.registry.push(VirtualSchemaDisableRegistry.fromPartial(e));
      }
    }
    if (
      object.proposalExpiredBlock !== undefined &&
      object.proposalExpiredBlock !== null
    ) {
      message.proposalExpiredBlock = object.proposalExpiredBlock;
    } else {
      message.proposalExpiredBlock = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseVirtualSchemaDisableRegistry: object = {
  nftSchemaCode: "",
  status: 0,
};

export const VirtualSchemaDisableRegistry = {
  encode(
    message: VirtualSchemaDisableRegistry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nftSchemaCode !== "") {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): VirtualSchemaDisableRegistry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVirtualSchemaDisableRegistry,
    } as VirtualSchemaDisableRegistry;
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

  fromJSON(object: any): VirtualSchemaDisableRegistry {
    const message = {
      ...baseVirtualSchemaDisableRegistry,
    } as VirtualSchemaDisableRegistry;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = String(object.nftSchemaCode);
    } else {
      message.nftSchemaCode = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = registryStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    return message;
  },

  toJSON(message: VirtualSchemaDisableRegistry): unknown {
    const obj: any = {};
    message.nftSchemaCode !== undefined &&
      (obj.nftSchemaCode = message.nftSchemaCode);
    message.status !== undefined &&
      (obj.status = registryStatusToJSON(message.status));
    return obj;
  },

  fromPartial(
    object: DeepPartial<VirtualSchemaDisableRegistry>
  ): VirtualSchemaDisableRegistry {
    const message = {
      ...baseVirtualSchemaDisableRegistry,
    } as VirtualSchemaDisableRegistry;
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    } else {
      message.nftSchemaCode = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
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
