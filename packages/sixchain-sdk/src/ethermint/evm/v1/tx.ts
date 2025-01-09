//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Any, AnyAmino, AnySDKType } from '../../../google/protobuf/any';
import { base64FromBytes,bytesFromBase64, Long } from '../../../helpers';
import { AccessTuple, AccessTupleAmino, AccessTupleSDKType, Log, LogAmino, LogSDKType } from './evm';
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTx {
  /** inner transaction data */
  data?: Any;
  /** encoded storage size of the transaction */
  size: number;
  /** transaction hash in hex format */
  hash: string;
  /**
   * ethereum signer address in hex format. This address value is checked
   * against the address derived from the signature (V, R, S) using the
   * secp256k1 elliptic curve
   */
  from: string;
}
export interface MsgEthereumTxProtoMsg {
  typeUrl: '/ethermint.evm.v1.MsgEthereumTx';
  value: Uint8Array;
}
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTxAmino {
  /** inner transaction data */
  data?: AnyAmino;
  /** encoded storage size of the transaction */
  size: number;
  /** transaction hash in hex format */
  hash?: string;
  /**
   * ethereum signer address in hex format. This address value is checked
   * against the address derived from the signature (V, R, S) using the
   * secp256k1 elliptic curve
   */
  from?: string;
}
export interface MsgEthereumTxAminoMsg {
  type: '/ethermint.evm.v1.MsgEthereumTx';
  value: MsgEthereumTxAmino;
}
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTxSDKType {
  data?: AnySDKType;
  size: number;
  hash: string;
  from: string;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTx {
  $typeUrl?: '/ethermint.evm.v1.LegacyTx';
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: Long;
  /** gas price defines the value for each gas unit */
  gasPrice: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: Long;
  /** hex formatted address of the recipient */
  to: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value: string;
  /** input defines the data payload bytes of the transaction. */
  data: Uint8Array;
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}
export interface LegacyTxProtoMsg {
  typeUrl: '/ethermint.evm.v1.LegacyTx';
  value: Uint8Array;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTxAmino {
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce?: string;
  /** gas price defines the value for each gas unit */
  gas_price?: string;
  /** gas defines the gas limit defined for the transaction. */
  gas?: string;
  /** hex formatted address of the recipient */
  to?: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value?: string;
  /** input defines the data payload bytes of the transaction. */
  data?: string;
  /** v defines the signature value */
  v?: string;
  /** r defines the signature value */
  r?: string;
  /** s define the signature value */
  s?: string;
}
export interface LegacyTxAminoMsg {
  type: '/ethermint.evm.v1.LegacyTx';
  value: LegacyTxAmino;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTxSDKType {
  $typeUrl?: '/ethermint.evm.v1.LegacyTx';
  nonce: Long;
  gas_price: string;
  gas: Long;
  to: string;
  value: string;
  data: Uint8Array;
  v: Uint8Array;
  r: Uint8Array;
  s: Uint8Array;
}
/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTx {
  $typeUrl?: '/ethermint.evm.v1.AccessListTx';
  /** destination EVM chain ID */
  chainId: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: Long;
  /** gas price defines the value for each gas unit */
  gasPrice: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: Long;
  /** hex formatted address of the recipient */
  to: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value: string;
  /** input defines the data payload bytes of the transaction. */
  data: Uint8Array;
  accesses: AccessTuple[];
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}
export interface AccessListTxProtoMsg {
  typeUrl: '/ethermint.evm.v1.AccessListTx';
  value: Uint8Array;
}
/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTxAmino {
  /** destination EVM chain ID */
  chain_id: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce?: string;
  /** gas price defines the value for each gas unit */
  gas_price?: string;
  /** gas defines the gas limit defined for the transaction. */
  gas?: string;
  /** hex formatted address of the recipient */
  to?: string;
  /** value defines the unsigned integer value of the transaction amount. */
  value?: string;
  /** input defines the data payload bytes of the transaction. */
  data?: string;
  accesses: AccessTupleAmino[];
  /** v defines the signature value */
  v?: string;
  /** r defines the signature value */
  r?: string;
  /** s define the signature value */
  s?: string;
}
export interface AccessListTxAminoMsg {
  type: '/ethermint.evm.v1.AccessListTx';
  value: AccessListTxAmino;
}
/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTxSDKType {
  $typeUrl?: '/ethermint.evm.v1.AccessListTx';
  chain_id: string;
  nonce: Long;
  gas_price: string;
  gas: Long;
  to: string;
  value: string;
  data: Uint8Array;
  accesses: AccessTupleSDKType[];
  v: Uint8Array;
  r: Uint8Array;
  s: Uint8Array;
}
/** DynamicFeeTx is the data of EIP-1559 dinamic fee transactions. */
export interface DynamicFeeTx {
  $typeUrl?: '/ethermint.evm.v1.DynamicFeeTx';
  /** destination EVM chain ID */
  chainId: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce: Long;
  /** gas tip cap defines the max value for the gas tip */
  gasTipCap: string;
  /** gas fee cap defines the max value for the gas fee */
  gasFeeCap: string;
  /** gas defines the gas limit defined for the transaction. */
  gas: Long;
  /** hex formatted address of the recipient */
  to: string;
  /** value defines the the transaction amount. */
  value: string;
  /** input defines the data payload bytes of the transaction. */
  data: Uint8Array;
  accesses: AccessTuple[];
  /** v defines the signature value */
  v: Uint8Array;
  /** r defines the signature value */
  r: Uint8Array;
  /** s define the signature value */
  s: Uint8Array;
}
export interface DynamicFeeTxProtoMsg {
  typeUrl: '/ethermint.evm.v1.DynamicFeeTx';
  value: Uint8Array;
}
/** DynamicFeeTx is the data of EIP-1559 dinamic fee transactions. */
export interface DynamicFeeTxAmino {
  /** destination EVM chain ID */
  chain_id: string;
  /** nonce corresponds to the account nonce (transaction sequence). */
  nonce?: string;
  /** gas tip cap defines the max value for the gas tip */
  gas_tip_cap?: string;
  /** gas fee cap defines the max value for the gas fee */
  gas_fee_cap?: string;
  /** gas defines the gas limit defined for the transaction. */
  gas?: string;
  /** hex formatted address of the recipient */
  to?: string;
  /** value defines the the transaction amount. */
  value?: string;
  /** input defines the data payload bytes of the transaction. */
  data?: string;
  accesses: AccessTupleAmino[];
  /** v defines the signature value */
  v?: string;
  /** r defines the signature value */
  r?: string;
  /** s define the signature value */
  s?: string;
}
export interface DynamicFeeTxAminoMsg {
  type: '/ethermint.evm.v1.DynamicFeeTx';
  value: DynamicFeeTxAmino;
}
/** DynamicFeeTx is the data of EIP-1559 dinamic fee transactions. */
export interface DynamicFeeTxSDKType {
  $typeUrl?: '/ethermint.evm.v1.DynamicFeeTx';
  chain_id: string;
  nonce: Long;
  gas_tip_cap: string;
  gas_fee_cap: string;
  gas: Long;
  to: string;
  value: string;
  data: Uint8Array;
  accesses: AccessTupleSDKType[];
  v: Uint8Array;
  r: Uint8Array;
  s: Uint8Array;
}
export interface ExtensionOptionsEthereumTx {}
export interface ExtensionOptionsEthereumTxProtoMsg {
  typeUrl: '/ethermint.evm.v1.ExtensionOptionsEthereumTx';
  value: Uint8Array;
}
export interface ExtensionOptionsEthereumTxAmino {}
export interface ExtensionOptionsEthereumTxAminoMsg {
  type: '/ethermint.evm.v1.ExtensionOptionsEthereumTx';
  value: ExtensionOptionsEthereumTxAmino;
}
export interface ExtensionOptionsEthereumTxSDKType {}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponse {
  /**
   * ethereum transaction hash in hex format. This hash differs from the
   * Tendermint sha256 hash of the transaction bytes. See
   * https://github.com/tendermint/tendermint/issues/6539 for reference
   */
  hash: string;
  /**
   * logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  logs: Log[];
  /**
   * returned data from evm function (result or data supplied with revert
   * opcode)
   */
  ret: Uint8Array;
  /** vm error is the error returned by vm execution */
  vmError: string;
  /** gas consumed by the transaction */
  gasUsed: Long;
}
export interface MsgEthereumTxResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.MsgEthereumTxResponse';
  value: Uint8Array;
}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponseAmino {
  /**
   * ethereum transaction hash in hex format. This hash differs from the
   * Tendermint sha256 hash of the transaction bytes. See
   * https://github.com/tendermint/tendermint/issues/6539 for reference
   */
  hash?: string;
  /**
   * logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  logs?: LogAmino[];
  /**
   * returned data from evm function (result or data supplied with revert
   * opcode)
   */
  ret?: string;
  /** vm error is the error returned by vm execution */
  vm_error?: string;
  /** gas consumed by the transaction */
  gas_used?: string;
}
export interface MsgEthereumTxResponseAminoMsg {
  type: '/ethermint.evm.v1.MsgEthereumTxResponse';
  value: MsgEthereumTxResponseAmino;
}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponseSDKType {
  hash: string;
  logs: LogSDKType[];
  ret: Uint8Array;
  vm_error: string;
  gas_used: Long;
}
function createBaseMsgEthereumTx(): MsgEthereumTx {
  return {
    data: undefined,
    size: 0,
    hash: '',
    from: ''
  };
}
export const MsgEthereumTx = {
  typeUrl: '/ethermint.evm.v1.MsgEthereumTx',
  encode(message: MsgEthereumTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(17).double(message.size);
    }
    if (message.hash !== '') {
      writer.uint32(26).string(message.hash);
    }
    if (message.from !== '') {
      writer.uint32(34).string(message.from);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEthereumTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEthereumTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.data = Any.decode(reader, reader.uint32());
        break;
      case 2:
        message.size = reader.double();
        break;
      case 3:
        message.hash = reader.string();
        break;
      case 4:
        message.from = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEthereumTx>): MsgEthereumTx {
    const message = createBaseMsgEthereumTx();
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    message.size = object.size ?? 0;
    message.hash = object.hash ?? '';
    message.from = object.from ?? '';
    return message;
  },
  fromAmino(object: MsgEthereumTxAmino): MsgEthereumTx {
    const message = createBaseMsgEthereumTx();
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromAmino(object.data);
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = object.size;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    return message;
  },
  toAmino(message: MsgEthereumTx): MsgEthereumTxAmino {
    const obj: any = {};
    obj.data = message.data ? Any.toAmino(message.data) : undefined;
    obj.size = message.size ?? 0;
    obj.hash = message.hash === '' ? undefined : message.hash;
    obj.from = message.from === '' ? undefined : message.from;
    return obj;
  },
  fromAminoMsg(object: MsgEthereumTxAminoMsg): MsgEthereumTx {
    return MsgEthereumTx.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEthereumTxProtoMsg): MsgEthereumTx {
    return MsgEthereumTx.decode(message.value);
  },
  toProto(message: MsgEthereumTx): Uint8Array {
    return MsgEthereumTx.encode(message).finish();
  },
  toProtoMsg(message: MsgEthereumTx): MsgEthereumTxProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.MsgEthereumTx',
      value: MsgEthereumTx.encode(message).finish()
    };
  }
};
function createBaseLegacyTx(): LegacyTx {
  return {
    $typeUrl: '/ethermint.evm.v1.LegacyTx',
    nonce: Long.UZERO,
    gasPrice: '',
    gas: Long.UZERO,
    to: '',
    value: '',
    data: new Uint8Array(),
    v: new Uint8Array(),
    r: new Uint8Array(),
    s: new Uint8Array()
  };
}
export const LegacyTx = {
  typeUrl: '/ethermint.evm.v1.LegacyTx',
  encode(message: LegacyTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.gasPrice !== '') {
      writer.uint32(18).string(message.gasPrice);
    }
    if (!message.gas.isZero()) {
      writer.uint32(24).uint64(message.gas);
    }
    if (message.to !== '') {
      writer.uint32(34).string(message.to);
    }
    if (message.value !== '') {
      writer.uint32(42).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    if (message.v.length !== 0) {
      writer.uint32(58).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(66).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(74).bytes(message.s);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nonce = reader.uint64() as Long;
        break;
      case 2:
        message.gasPrice = reader.string();
        break;
      case 3:
        message.gas = reader.uint64() as Long;
        break;
      case 4:
        message.to = reader.string();
        break;
      case 5:
        message.value = reader.string();
        break;
      case 6:
        message.data = reader.bytes();
        break;
      case 7:
        message.v = reader.bytes();
        break;
      case 8:
        message.r = reader.bytes();
        break;
      case 9:
        message.s = reader.bytes();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LegacyTx>): LegacyTx {
    const message = createBaseLegacyTx();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.gasPrice = object.gasPrice ?? '';
    message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
    message.to = object.to ?? '';
    message.value = object.value ?? '';
    message.data = object.data ?? new Uint8Array();
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    return message;
  },
  fromAmino(object: LegacyTxAmino): LegacyTx {
    const message = createBaseLegacyTx();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Long.fromString(object.nonce);
    }
    if (object.gas_price !== undefined && object.gas_price !== null) {
      message.gasPrice = object.gas_price;
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = Long.fromString(object.gas);
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.v !== undefined && object.v !== null) {
      message.v = bytesFromBase64(object.v);
    }
    if (object.r !== undefined && object.r !== null) {
      message.r = bytesFromBase64(object.r);
    }
    if (object.s !== undefined && object.s !== null) {
      message.s = bytesFromBase64(object.s);
    }
    return message;
  },
  toAmino(message: LegacyTx): LegacyTxAmino {
    const obj: any = {};
    obj.nonce = !message.nonce.isZero() ? message.nonce?.toString() : undefined;
    obj.gas_price = message.gasPrice === '' ? undefined : message.gasPrice;
    obj.gas = !message.gas.isZero() ? message.gas?.toString() : undefined;
    obj.to = message.to === '' ? undefined : message.to;
    obj.value = message.value === '' ? undefined : message.value;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.v = message.v ? base64FromBytes(message.v) : undefined;
    obj.r = message.r ? base64FromBytes(message.r) : undefined;
    obj.s = message.s ? base64FromBytes(message.s) : undefined;
    return obj;
  },
  fromAminoMsg(object: LegacyTxAminoMsg): LegacyTx {
    return LegacyTx.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyTxProtoMsg): LegacyTx {
    return LegacyTx.decode(message.value);
  },
  toProto(message: LegacyTx): Uint8Array {
    return LegacyTx.encode(message).finish();
  },
  toProtoMsg(message: LegacyTx): LegacyTxProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.LegacyTx',
      value: LegacyTx.encode(message).finish()
    };
  }
};
function createBaseAccessListTx(): AccessListTx {
  return {
    $typeUrl: '/ethermint.evm.v1.AccessListTx',
    chainId: '',
    nonce: Long.UZERO,
    gasPrice: '',
    gas: Long.UZERO,
    to: '',
    value: '',
    data: new Uint8Array(),
    accesses: [],
    v: new Uint8Array(),
    r: new Uint8Array(),
    s: new Uint8Array()
  };
}
export const AccessListTx = {
  typeUrl: '/ethermint.evm.v1.AccessListTx',
  encode(message: AccessListTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== '') {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.gasPrice !== '') {
      writer.uint32(26).string(message.gasPrice);
    }
    if (!message.gas.isZero()) {
      writer.uint32(32).uint64(message.gas);
    }
    if (message.to !== '') {
      writer.uint32(42).string(message.to);
    }
    if (message.value !== '') {
      writer.uint32(50).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(58).bytes(message.data);
    }
    for (const v of message.accesses) {
      AccessTuple.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.v.length !== 0) {
      writer.uint32(74).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(82).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(90).bytes(message.s);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AccessListTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessListTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.chainId = reader.string();
        break;
      case 2:
        message.nonce = reader.uint64() as Long;
        break;
      case 3:
        message.gasPrice = reader.string();
        break;
      case 4:
        message.gas = reader.uint64() as Long;
        break;
      case 5:
        message.to = reader.string();
        break;
      case 6:
        message.value = reader.string();
        break;
      case 7:
        message.data = reader.bytes();
        break;
      case 8:
        message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
        break;
      case 9:
        message.v = reader.bytes();
        break;
      case 10:
        message.r = reader.bytes();
        break;
      case 11:
        message.s = reader.bytes();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AccessListTx>): AccessListTx {
    const message = createBaseAccessListTx();
    message.chainId = object.chainId ?? '';
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.gasPrice = object.gasPrice ?? '';
    message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
    message.to = object.to ?? '';
    message.value = object.value ?? '';
    message.data = object.data ?? new Uint8Array();
    message.accesses = object.accesses?.map(e => AccessTuple.fromPartial(e)) || [];
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AccessListTxAmino): AccessListTx {
    const message = createBaseAccessListTx();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Long.fromString(object.nonce);
    }
    if (object.gas_price !== undefined && object.gas_price !== null) {
      message.gasPrice = object.gas_price;
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = Long.fromString(object.gas);
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    message.accesses = object.accesses?.map(e => AccessTuple.fromAmino(e)) || [];
    if (object.v !== undefined && object.v !== null) {
      message.v = bytesFromBase64(object.v);
    }
    if (object.r !== undefined && object.r !== null) {
      message.r = bytesFromBase64(object.r);
    }
    if (object.s !== undefined && object.s !== null) {
      message.s = bytesFromBase64(object.s);
    }
    return message;
  },
  toAmino(message: AccessListTx): AccessListTxAmino {
    const obj: any = {};
    obj.chain_id = message.chainId ?? '';
    obj.nonce = !message.nonce.isZero() ? message.nonce?.toString() : undefined;
    obj.gas_price = message.gasPrice === '' ? undefined : message.gasPrice;
    obj.gas = !message.gas.isZero() ? message.gas?.toString() : undefined;
    obj.to = message.to === '' ? undefined : message.to;
    obj.value = message.value === '' ? undefined : message.value;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    if (message.accesses) {
      obj.accesses = message.accesses.map(e => e ? AccessTuple.toAmino(e) : undefined);
    } else {
      obj.accesses = message.accesses;
    }
    obj.v = message.v ? base64FromBytes(message.v) : undefined;
    obj.r = message.r ? base64FromBytes(message.r) : undefined;
    obj.s = message.s ? base64FromBytes(message.s) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccessListTxAminoMsg): AccessListTx {
    return AccessListTx.fromAmino(object.value);
  },
  fromProtoMsg(message: AccessListTxProtoMsg): AccessListTx {
    return AccessListTx.decode(message.value);
  },
  toProto(message: AccessListTx): Uint8Array {
    return AccessListTx.encode(message).finish();
  },
  toProtoMsg(message: AccessListTx): AccessListTxProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.AccessListTx',
      value: AccessListTx.encode(message).finish()
    };
  }
};
function createBaseDynamicFeeTx(): DynamicFeeTx {
  return {
    $typeUrl: '/ethermint.evm.v1.DynamicFeeTx',
    chainId: '',
    nonce: Long.UZERO,
    gasTipCap: '',
    gasFeeCap: '',
    gas: Long.UZERO,
    to: '',
    value: '',
    data: new Uint8Array(),
    accesses: [],
    v: new Uint8Array(),
    r: new Uint8Array(),
    s: new Uint8Array()
  };
}
export const DynamicFeeTx = {
  typeUrl: '/ethermint.evm.v1.DynamicFeeTx',
  encode(message: DynamicFeeTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== '') {
      writer.uint32(10).string(message.chainId);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.gasTipCap !== '') {
      writer.uint32(26).string(message.gasTipCap);
    }
    if (message.gasFeeCap !== '') {
      writer.uint32(34).string(message.gasFeeCap);
    }
    if (!message.gas.isZero()) {
      writer.uint32(40).uint64(message.gas);
    }
    if (message.to !== '') {
      writer.uint32(50).string(message.to);
    }
    if (message.value !== '') {
      writer.uint32(58).string(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(66).bytes(message.data);
    }
    for (const v of message.accesses) {
      AccessTuple.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.v.length !== 0) {
      writer.uint32(82).bytes(message.v);
    }
    if (message.r.length !== 0) {
      writer.uint32(90).bytes(message.r);
    }
    if (message.s.length !== 0) {
      writer.uint32(98).bytes(message.s);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicFeeTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicFeeTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.chainId = reader.string();
        break;
      case 2:
        message.nonce = reader.uint64() as Long;
        break;
      case 3:
        message.gasTipCap = reader.string();
        break;
      case 4:
        message.gasFeeCap = reader.string();
        break;
      case 5:
        message.gas = reader.uint64() as Long;
        break;
      case 6:
        message.to = reader.string();
        break;
      case 7:
        message.value = reader.string();
        break;
      case 8:
        message.data = reader.bytes();
        break;
      case 9:
        message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
        break;
      case 10:
        message.v = reader.bytes();
        break;
      case 11:
        message.r = reader.bytes();
        break;
      case 12:
        message.s = reader.bytes();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DynamicFeeTx>): DynamicFeeTx {
    const message = createBaseDynamicFeeTx();
    message.chainId = object.chainId ?? '';
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.gasTipCap = object.gasTipCap ?? '';
    message.gasFeeCap = object.gasFeeCap ?? '';
    message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
    message.to = object.to ?? '';
    message.value = object.value ?? '';
    message.data = object.data ?? new Uint8Array();
    message.accesses = object.accesses?.map(e => AccessTuple.fromPartial(e)) || [];
    message.v = object.v ?? new Uint8Array();
    message.r = object.r ?? new Uint8Array();
    message.s = object.s ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DynamicFeeTxAmino): DynamicFeeTx {
    const message = createBaseDynamicFeeTx();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Long.fromString(object.nonce);
    }
    if (object.gas_tip_cap !== undefined && object.gas_tip_cap !== null) {
      message.gasTipCap = object.gas_tip_cap;
    }
    if (object.gas_fee_cap !== undefined && object.gas_fee_cap !== null) {
      message.gasFeeCap = object.gas_fee_cap;
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = Long.fromString(object.gas);
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    message.accesses = object.accesses?.map(e => AccessTuple.fromAmino(e)) || [];
    if (object.v !== undefined && object.v !== null) {
      message.v = bytesFromBase64(object.v);
    }
    if (object.r !== undefined && object.r !== null) {
      message.r = bytesFromBase64(object.r);
    }
    if (object.s !== undefined && object.s !== null) {
      message.s = bytesFromBase64(object.s);
    }
    return message;
  },
  toAmino(message: DynamicFeeTx): DynamicFeeTxAmino {
    const obj: any = {};
    obj.chain_id = message.chainId ?? '';
    obj.nonce = !message.nonce.isZero() ? message.nonce?.toString() : undefined;
    obj.gas_tip_cap = message.gasTipCap === '' ? undefined : message.gasTipCap;
    obj.gas_fee_cap = message.gasFeeCap === '' ? undefined : message.gasFeeCap;
    obj.gas = !message.gas.isZero() ? message.gas?.toString() : undefined;
    obj.to = message.to === '' ? undefined : message.to;
    obj.value = message.value === '' ? undefined : message.value;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    if (message.accesses) {
      obj.accesses = message.accesses.map(e => e ? AccessTuple.toAmino(e) : undefined);
    } else {
      obj.accesses = message.accesses;
    }
    obj.v = message.v ? base64FromBytes(message.v) : undefined;
    obj.r = message.r ? base64FromBytes(message.r) : undefined;
    obj.s = message.s ? base64FromBytes(message.s) : undefined;
    return obj;
  },
  fromAminoMsg(object: DynamicFeeTxAminoMsg): DynamicFeeTx {
    return DynamicFeeTx.fromAmino(object.value);
  },
  fromProtoMsg(message: DynamicFeeTxProtoMsg): DynamicFeeTx {
    return DynamicFeeTx.decode(message.value);
  },
  toProto(message: DynamicFeeTx): Uint8Array {
    return DynamicFeeTx.encode(message).finish();
  },
  toProtoMsg(message: DynamicFeeTx): DynamicFeeTxProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.DynamicFeeTx',
      value: DynamicFeeTx.encode(message).finish()
    };
  }
};
function createBaseExtensionOptionsEthereumTx(): ExtensionOptionsEthereumTx {
  return {};
}
export const ExtensionOptionsEthereumTx = {
  typeUrl: '/ethermint.evm.v1.ExtensionOptionsEthereumTx',
  encode(_: ExtensionOptionsEthereumTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionsEthereumTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionsEthereumTx();
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
  fromPartial(_: Partial<ExtensionOptionsEthereumTx>): ExtensionOptionsEthereumTx {
    const message = createBaseExtensionOptionsEthereumTx();
    return message;
  },
  fromAmino(_: ExtensionOptionsEthereumTxAmino): ExtensionOptionsEthereumTx {
    const message = createBaseExtensionOptionsEthereumTx();
    return message;
  },
  toAmino(_: ExtensionOptionsEthereumTx): ExtensionOptionsEthereumTxAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ExtensionOptionsEthereumTxAminoMsg): ExtensionOptionsEthereumTx {
    return ExtensionOptionsEthereumTx.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtensionOptionsEthereumTxProtoMsg): ExtensionOptionsEthereumTx {
    return ExtensionOptionsEthereumTx.decode(message.value);
  },
  toProto(message: ExtensionOptionsEthereumTx): Uint8Array {
    return ExtensionOptionsEthereumTx.encode(message).finish();
  },
  toProtoMsg(message: ExtensionOptionsEthereumTx): ExtensionOptionsEthereumTxProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.ExtensionOptionsEthereumTx',
      value: ExtensionOptionsEthereumTx.encode(message).finish()
    };
  }
};
function createBaseMsgEthereumTxResponse(): MsgEthereumTxResponse {
  return {
    hash: '',
    logs: [],
    ret: new Uint8Array(),
    vmError: '',
    gasUsed: Long.UZERO
  };
}
export const MsgEthereumTxResponse = {
  typeUrl: '/ethermint.evm.v1.MsgEthereumTxResponse',
  encode(message: MsgEthereumTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== '') {
      writer.uint32(10).string(message.hash);
    }
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.ret.length !== 0) {
      writer.uint32(26).bytes(message.ret);
    }
    if (message.vmError !== '') {
      writer.uint32(34).string(message.vmError);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(40).uint64(message.gasUsed);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEthereumTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEthereumTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.hash = reader.string();
        break;
      case 2:
        message.logs.push(Log.decode(reader, reader.uint32()));
        break;
      case 3:
        message.ret = reader.bytes();
        break;
      case 4:
        message.vmError = reader.string();
        break;
      case 5:
        message.gasUsed = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEthereumTxResponse>): MsgEthereumTxResponse {
    const message = createBaseMsgEthereumTxResponse();
    message.hash = object.hash ?? '';
    message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
    message.ret = object.ret ?? new Uint8Array();
    message.vmError = object.vmError ?? '';
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgEthereumTxResponseAmino): MsgEthereumTxResponse {
    const message = createBaseMsgEthereumTxResponse();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    message.logs = object.logs?.map(e => Log.fromAmino(e)) || [];
    if (object.ret !== undefined && object.ret !== null) {
      message.ret = bytesFromBase64(object.ret);
    }
    if (object.vm_error !== undefined && object.vm_error !== null) {
      message.vmError = object.vm_error;
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = Long.fromString(object.gas_used);
    }
    return message;
  },
  toAmino(message: MsgEthereumTxResponse): MsgEthereumTxResponseAmino {
    const obj: any = {};
    obj.hash = message.hash === '' ? undefined : message.hash;
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? Log.toAmino(e) : undefined);
    } else {
      obj.logs = message.logs;
    }
    obj.ret = message.ret ? base64FromBytes(message.ret) : undefined;
    obj.vm_error = message.vmError === '' ? undefined : message.vmError;
    obj.gas_used = !message.gasUsed.isZero() ? message.gasUsed?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEthereumTxResponseAminoMsg): MsgEthereumTxResponse {
    return MsgEthereumTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEthereumTxResponseProtoMsg): MsgEthereumTxResponse {
    return MsgEthereumTxResponse.decode(message.value);
  },
  toProto(message: MsgEthereumTxResponse): Uint8Array {
    return MsgEthereumTxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEthereumTxResponse): MsgEthereumTxResponseProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.MsgEthereumTxResponse',
      value: MsgEthereumTxResponse.encode(message).finish()
    };
  }
};