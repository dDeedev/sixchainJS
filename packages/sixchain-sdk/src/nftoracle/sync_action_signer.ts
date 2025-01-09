//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Timestamp } from '../google/protobuf/timestamp';
import { base64FromBytes,bytesFromBase64, fromTimestamp, Long, toTimestamp } from '../helpers';
import { RequestStatus } from './request';
export interface SyncActionSigner {
  id: Long;
  chain: string;
  actorAddress: string;
  ownerAddress: string;
  /** will use as creator when message is success */
  caller: string;
  requiredConfirm: Long;
  status: RequestStatus;
  currentConfirm: Long;
  confirmers: string[];
  createdAt: Date;
  validUntil: Date;
  dataHashes: ContractInfoHash[];
  expiredHeight: Long;
  executionErrorMessage: string;
}
export interface SyncActionSignerProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.SyncActionSigner';
  value: Uint8Array;
}
export interface SyncActionSignerAmino {
  id?: string;
  chain?: string;
  actor_address?: string;
  owner_address?: string;
  /** will use as creator when message is success */
  caller?: string;
  required_confirm?: string;
  status?: RequestStatus;
  current_confirm?: string;
  confirmers?: string[];
  created_at?: string;
  valid_until?: string;
  data_hashes?: ContractInfoHashAmino[];
  expired_height?: string;
  execution_error_message?: string;
}
export interface SyncActionSignerAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.SyncActionSigner';
  value: SyncActionSignerAmino;
}
export interface SyncActionSignerSDKType {
  id: Long;
  chain: string;
  actor_address: string;
  owner_address: string;
  caller: string;
  required_confirm: Long;
  status: RequestStatus;
  current_confirm: Long;
  confirmers: string[];
  created_at: Date;
  valid_until: Date;
  data_hashes: ContractInfoHashSDKType[];
  expired_height: Long;
  execution_error_message: string;
}
export interface ParameterSyncSignerByOracle {
  chain: string;
  /** get from smart contract */
  ownerAddress: string;
  /** get from smart contract */
  actorAddress: string;
  /** get from smart contract */
  expireEpoch: string;
}
export interface ParameterSyncSignerByOracleProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ParameterSyncSignerByOracle';
  value: Uint8Array;
}
export interface ParameterSyncSignerByOracleAmino {
  chain?: string;
  /** get from smart contract */
  owner_address?: string;
  /** get from smart contract */
  actor_address?: string;
  /** get from smart contract */
  expire_epoch?: string;
}
export interface ParameterSyncSignerByOracleAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.ParameterSyncSignerByOracle';
  value: ParameterSyncSignerByOracleAmino;
}
export interface ParameterSyncSignerByOracleSDKType {
  chain: string;
  owner_address: string;
  actor_address: string;
  expire_epoch: string;
}
export interface ContractInfoHash {
  contractParam?: ParameterSyncSignerByOracle;
  hash: Uint8Array;
  confirmers: string[];
}
export interface ContractInfoHashProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ContractInfoHash';
  value: Uint8Array;
}
export interface ContractInfoHashAmino {
  contract_param?: ParameterSyncSignerByOracleAmino;
  hash?: string;
  confirmers?: string[];
}
export interface ContractInfoHashAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.ContractInfoHash';
  value: ContractInfoHashAmino;
}
export interface ContractInfoHashSDKType {
  contract_param?: ParameterSyncSignerByOracleSDKType;
  hash: Uint8Array;
  confirmers: string[];
}
function createBaseSyncActionSigner(): SyncActionSigner {
  return {
    id: Long.UZERO,
    chain: '',
    actorAddress: '',
    ownerAddress: '',
    caller: '',
    requiredConfirm: Long.UZERO,
    status: 0,
    currentConfirm: Long.UZERO,
    confirmers: [],
    createdAt: new Date(),
    validUntil: new Date(),
    dataHashes: [],
    expiredHeight: Long.ZERO,
    executionErrorMessage: ''
  };
}
export const SyncActionSigner = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.SyncActionSigner',
  encode(message: SyncActionSigner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.chain !== '') {
      writer.uint32(18).string(message.chain);
    }
    if (message.actorAddress !== '') {
      writer.uint32(26).string(message.actorAddress);
    }
    if (message.ownerAddress !== '') {
      writer.uint32(34).string(message.ownerAddress);
    }
    if (message.caller !== '') {
      writer.uint32(42).string(message.caller);
    }
    if (!message.requiredConfirm.isZero()) {
      writer.uint32(48).uint64(message.requiredConfirm);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (!message.currentConfirm.isZero()) {
      writer.uint32(64).uint64(message.currentConfirm);
    }
    for (const v of message.confirmers) {
      writer.uint32(74).string(v!);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
    }
    if (message.validUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.validUntil), writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.dataHashes) {
      ContractInfoHash.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (!message.expiredHeight.isZero()) {
      writer.uint32(104).int64(message.expiredHeight);
    }
    if (message.executionErrorMessage !== '') {
      writer.uint32(114).string(message.executionErrorMessage);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SyncActionSigner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncActionSigner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.uint64() as Long;
        break;
      case 2:
        message.chain = reader.string();
        break;
      case 3:
        message.actorAddress = reader.string();
        break;
      case 4:
        message.ownerAddress = reader.string();
        break;
      case 5:
        message.caller = reader.string();
        break;
      case 6:
        message.requiredConfirm = reader.uint64() as Long;
        break;
      case 7:
        message.status = reader.int32() as any;
        break;
      case 8:
        message.currentConfirm = reader.uint64() as Long;
        break;
      case 9:
        message.confirmers.push(reader.string());
        break;
      case 10:
        message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 11:
        message.validUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      case 12:
        message.dataHashes.push(ContractInfoHash.decode(reader, reader.uint32()));
        break;
      case 13:
        message.expiredHeight = reader.int64() as Long;
        break;
      case 14:
        message.executionErrorMessage = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SyncActionSigner>): SyncActionSigner {
    const message = createBaseSyncActionSigner();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.chain = object.chain ?? '';
    message.actorAddress = object.actorAddress ?? '';
    message.ownerAddress = object.ownerAddress ?? '';
    message.caller = object.caller ?? '';
    message.requiredConfirm = object.requiredConfirm !== undefined && object.requiredConfirm !== null ? Long.fromValue(object.requiredConfirm) : Long.UZERO;
    message.status = object.status ?? 0;
    message.currentConfirm = object.currentConfirm !== undefined && object.currentConfirm !== null ? Long.fromValue(object.currentConfirm) : Long.UZERO;
    message.confirmers = object.confirmers?.map(e => e) || [];
    message.createdAt = object.createdAt ?? undefined;
    message.validUntil = object.validUntil ?? undefined;
    message.dataHashes = object.dataHashes?.map(e => ContractInfoHash.fromPartial(e)) || [];
    message.expiredHeight = object.expiredHeight !== undefined && object.expiredHeight !== null ? Long.fromValue(object.expiredHeight) : Long.ZERO;
    message.executionErrorMessage = object.executionErrorMessage ?? '';
    return message;
  },
  fromAmino(object: SyncActionSignerAmino): SyncActionSigner {
    const message = createBaseSyncActionSigner();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.actor_address !== undefined && object.actor_address !== null) {
      message.actorAddress = object.actor_address;
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.caller !== undefined && object.caller !== null) {
      message.caller = object.caller;
    }
    if (object.required_confirm !== undefined && object.required_confirm !== null) {
      message.requiredConfirm = Long.fromString(object.required_confirm);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.current_confirm !== undefined && object.current_confirm !== null) {
      message.currentConfirm = Long.fromString(object.current_confirm);
    }
    message.confirmers = object.confirmers?.map(e => e) || [];
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    if (object.valid_until !== undefined && object.valid_until !== null) {
      message.validUntil = fromTimestamp(Timestamp.fromAmino(object.valid_until));
    }
    message.dataHashes = object.data_hashes?.map(e => ContractInfoHash.fromAmino(e)) || [];
    if (object.expired_height !== undefined && object.expired_height !== null) {
      message.expiredHeight = Long.fromString(object.expired_height);
    }
    if (object.execution_error_message !== undefined && object.execution_error_message !== null) {
      message.executionErrorMessage = object.execution_error_message;
    }
    return message;
  },
  toAmino(message: SyncActionSigner): SyncActionSignerAmino {
    const obj: any = {};
    obj.id = !message.id.isZero() ? message.id?.toString() : undefined;
    obj.chain = message.chain === '' ? undefined : message.chain;
    obj.actor_address = message.actorAddress === '' ? undefined : message.actorAddress;
    obj.owner_address = message.ownerAddress === '' ? undefined : message.ownerAddress;
    obj.caller = message.caller === '' ? undefined : message.caller;
    obj.required_confirm = !message.requiredConfirm.isZero() ? message.requiredConfirm?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.current_confirm = !message.currentConfirm.isZero() ? message.currentConfirm?.toString() : undefined;
    if (message.confirmers) {
      obj.confirmers = message.confirmers.map(e => e);
    } else {
      obj.confirmers = message.confirmers;
    }
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.valid_until = message.validUntil ? Timestamp.toAmino(toTimestamp(message.validUntil)) : undefined;
    if (message.dataHashes) {
      obj.data_hashes = message.dataHashes.map(e => e ? ContractInfoHash.toAmino(e) : undefined);
    } else {
      obj.data_hashes = message.dataHashes;
    }
    obj.expired_height = !message.expiredHeight.isZero() ? message.expiredHeight?.toString() : undefined;
    obj.execution_error_message = message.executionErrorMessage === '' ? undefined : message.executionErrorMessage;
    return obj;
  },
  fromAminoMsg(object: SyncActionSignerAminoMsg): SyncActionSigner {
    return SyncActionSigner.fromAmino(object.value);
  },
  fromProtoMsg(message: SyncActionSignerProtoMsg): SyncActionSigner {
    return SyncActionSigner.decode(message.value);
  },
  toProto(message: SyncActionSigner): Uint8Array {
    return SyncActionSigner.encode(message).finish();
  },
  toProtoMsg(message: SyncActionSigner): SyncActionSignerProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.SyncActionSigner',
      value: SyncActionSigner.encode(message).finish()
    };
  }
};
function createBaseParameterSyncSignerByOracle(): ParameterSyncSignerByOracle {
  return {
    chain: '',
    ownerAddress: '',
    actorAddress: '',
    expireEpoch: ''
  };
}
export const ParameterSyncSignerByOracle = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ParameterSyncSignerByOracle',
  encode(message: ParameterSyncSignerByOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== '') {
      writer.uint32(10).string(message.chain);
    }
    if (message.ownerAddress !== '') {
      writer.uint32(18).string(message.ownerAddress);
    }
    if (message.actorAddress !== '') {
      writer.uint32(26).string(message.actorAddress);
    }
    if (message.expireEpoch !== '') {
      writer.uint32(34).string(message.expireEpoch);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ParameterSyncSignerByOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameterSyncSignerByOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.chain = reader.string();
        break;
      case 2:
        message.ownerAddress = reader.string();
        break;
      case 3:
        message.actorAddress = reader.string();
        break;
      case 4:
        message.expireEpoch = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ParameterSyncSignerByOracle>): ParameterSyncSignerByOracle {
    const message = createBaseParameterSyncSignerByOracle();
    message.chain = object.chain ?? '';
    message.ownerAddress = object.ownerAddress ?? '';
    message.actorAddress = object.actorAddress ?? '';
    message.expireEpoch = object.expireEpoch ?? '';
    return message;
  },
  fromAmino(object: ParameterSyncSignerByOracleAmino): ParameterSyncSignerByOracle {
    const message = createBaseParameterSyncSignerByOracle();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.actor_address !== undefined && object.actor_address !== null) {
      message.actorAddress = object.actor_address;
    }
    if (object.expire_epoch !== undefined && object.expire_epoch !== null) {
      message.expireEpoch = object.expire_epoch;
    }
    return message;
  },
  toAmino(message: ParameterSyncSignerByOracle): ParameterSyncSignerByOracleAmino {
    const obj: any = {};
    obj.chain = message.chain === '' ? undefined : message.chain;
    obj.owner_address = message.ownerAddress === '' ? undefined : message.ownerAddress;
    obj.actor_address = message.actorAddress === '' ? undefined : message.actorAddress;
    obj.expire_epoch = message.expireEpoch === '' ? undefined : message.expireEpoch;
    return obj;
  },
  fromAminoMsg(object: ParameterSyncSignerByOracleAminoMsg): ParameterSyncSignerByOracle {
    return ParameterSyncSignerByOracle.fromAmino(object.value);
  },
  fromProtoMsg(message: ParameterSyncSignerByOracleProtoMsg): ParameterSyncSignerByOracle {
    return ParameterSyncSignerByOracle.decode(message.value);
  },
  toProto(message: ParameterSyncSignerByOracle): Uint8Array {
    return ParameterSyncSignerByOracle.encode(message).finish();
  },
  toProtoMsg(message: ParameterSyncSignerByOracle): ParameterSyncSignerByOracleProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ParameterSyncSignerByOracle',
      value: ParameterSyncSignerByOracle.encode(message).finish()
    };
  }
};
function createBaseContractInfoHash(): ContractInfoHash {
  return {
    contractParam: undefined,
    hash: new Uint8Array(),
    confirmers: []
  };
}
export const ContractInfoHash = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ContractInfoHash',
  encode(message: ContractInfoHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractParam !== undefined) {
      ParameterSyncSignerByOracle.encode(message.contractParam, writer.uint32(10).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    for (const v of message.confirmers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfoHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfoHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.contractParam = ParameterSyncSignerByOracle.decode(reader, reader.uint32());
        break;
      case 2:
        message.hash = reader.bytes();
        break;
      case 3:
        message.confirmers.push(reader.string());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ContractInfoHash>): ContractInfoHash {
    const message = createBaseContractInfoHash();
    message.contractParam = object.contractParam !== undefined && object.contractParam !== null ? ParameterSyncSignerByOracle.fromPartial(object.contractParam) : undefined;
    message.hash = object.hash ?? new Uint8Array();
    message.confirmers = object.confirmers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ContractInfoHashAmino): ContractInfoHash {
    const message = createBaseContractInfoHash();
    if (object.contract_param !== undefined && object.contract_param !== null) {
      message.contractParam = ParameterSyncSignerByOracle.fromAmino(object.contract_param);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    message.confirmers = object.confirmers?.map(e => e) || [];
    return message;
  },
  toAmino(message: ContractInfoHash): ContractInfoHashAmino {
    const obj: any = {};
    obj.contract_param = message.contractParam ? ParameterSyncSignerByOracle.toAmino(message.contractParam) : undefined;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    if (message.confirmers) {
      obj.confirmers = message.confirmers.map(e => e);
    } else {
      obj.confirmers = message.confirmers;
    }
    return obj;
  },
  fromAminoMsg(object: ContractInfoHashAminoMsg): ContractInfoHash {
    return ContractInfoHash.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractInfoHashProtoMsg): ContractInfoHash {
    return ContractInfoHash.decode(message.value);
  },
  toProto(message: ContractInfoHash): Uint8Array {
    return ContractInfoHash.encode(message).finish();
  },
  toProtoMsg(message: ContractInfoHash): ContractInfoHashProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.ContractInfoHash',
      value: ContractInfoHash.encode(message).finish()
    };
  }
};