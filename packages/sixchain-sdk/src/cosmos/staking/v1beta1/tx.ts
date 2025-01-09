//@ts-nocheck
import { Pubkey } from '@cosmjs/amino';
import { Decimal } from '@cosmjs/math';
import { decodePubkey,encodePubkey } from '@cosmjs/proto-signing';
import * as _m0 from 'protobufjs/minimal';

import { Any, AnyAmino, AnyProtoMsg, AnySDKType } from '../../../google/protobuf/any';
import { Timestamp } from '../../../google/protobuf/timestamp';
import { fromTimestamp,toTimestamp } from '../../../helpers';
import { Coin, CoinAmino, CoinSDKType } from '../../base/v1beta1/coin';
import { CommissionRates, CommissionRatesAmino, CommissionRatesSDKType,Description, DescriptionAmino, DescriptionSDKType } from './staking';
import { WhitelistDelegator, WhitelistDelegatorAmino, WhitelistDelegatorSDKType } from './whitelist';
/** MsgSetValidatorApproval */
export interface MsgSetValidatorApproval {
  approverAddress: string;
  newApproverAddress: string;
  enabled: boolean;
}
export interface MsgSetValidatorApprovalProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgSetValidatorApproval';
  value: Uint8Array;
}
/** MsgSetValidatorApproval */
export interface MsgSetValidatorApprovalAmino {
  approver_address?: string;
  new_approver_address?: string;
  enabled?: boolean;
}
export interface MsgSetValidatorApprovalAminoMsg {
  type: 'cosmos-sdk/MsgSetValidatorApproval';
  value: MsgSetValidatorApprovalAmino;
}
/** MsgSetValidatorApproval */
export interface MsgSetValidatorApprovalSDKType {
  approver_address: string;
  new_approver_address: string;
  enabled: boolean;
}
/** MsgSetValidatorApprovalResponse */
export interface MsgSetValidatorApprovalResponse {}
export interface MsgSetValidatorApprovalResponseProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgSetValidatorApprovalResponse';
  value: Uint8Array;
}
/** MsgSetValidatorApprovalResponse */
export interface MsgSetValidatorApprovalResponseAmino {}
export interface MsgSetValidatorApprovalResponseAminoMsg {
  type: 'cosmos-sdk/MsgSetValidatorApprovalResponse';
  value: MsgSetValidatorApprovalResponseAmino;
}
/** MsgSetValidatorApprovalResponse */
export interface MsgSetValidatorApprovalResponseSDKType {}
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
  description: Description;
  commission: CommissionRates;
  minSelfDelegation: string;
  minDelegation: string;
  delegationIncrement: string;
  maxLicense: string;
  licenseMode: boolean;
  enableRedelegation: boolean;
  delegatorAddress: string;
  validatorAddress: string;
  approverAddress: string;
  pubkey?: Any | undefined;
  value: Coin;
  specialMode: boolean;
}
export interface MsgCreateValidatorProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator';
  value: Uint8Array;
}
export type MsgCreateValidatorEncoded = Omit<MsgCreateValidator, 'pubkey'> & {
  pubkey?: AnyProtoMsg | undefined;
};
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidatorAmino {
  description?: DescriptionAmino;
  commission?: CommissionRatesAmino;
  min_self_delegation?: string;
  min_delegation?: string;
  delegation_increment?: string;
  max_license?: string;
  license_mode?: boolean;
  enable_redelegation?: boolean;
  delegator_address?: string;
  validator_address?: string;
  approver_address?: string;
  pubkey?: AnyAmino;
  value?: CoinAmino;
  special_mode?: boolean;
}
export interface MsgCreateValidatorAminoMsg {
  type: 'cosmos-sdk/MsgCreateValidator';
  value: MsgCreateValidatorAmino;
}
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidatorSDKType {
  description: DescriptionSDKType;
  commission: CommissionRatesSDKType;
  min_self_delegation: string;
  min_delegation: string;
  delegation_increment: string;
  max_license: string;
  license_mode: boolean;
  enable_redelegation: boolean;
  delegator_address: string;
  validator_address: string;
  approver_address: string;
  pubkey?: AnySDKType | undefined;
  value: CoinSDKType;
  special_mode: boolean;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {}
export interface MsgCreateValidatorResponseProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidatorResponse';
  value: Uint8Array;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseAmino {}
export interface MsgCreateValidatorResponseAminoMsg {
  type: 'cosmos-sdk/MsgCreateValidatorResponse';
  value: MsgCreateValidatorResponseAmino;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseSDKType {}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
  description: Description;
  validatorAddress: string;
  /**
   * We pass a reference to the new commission rate and min self delegation as
   * it's not mandatory to update. If not updated, the deserialized rate will be
   * zero with no way to distinguish if an update was intended.
   * REF: #2373
   */
  commissionRate: string;
  minSelfDelegation: string;
  maxLicense: string;
  licenseMode: boolean;
  specialMode: boolean;
}
export interface MsgEditValidatorProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator';
  value: Uint8Array;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidatorAmino {
  description?: DescriptionAmino;
  validator_address?: string;
  /**
   * We pass a reference to the new commission rate and min self delegation as
   * it's not mandatory to update. If not updated, the deserialized rate will be
   * zero with no way to distinguish if an update was intended.
   * REF: #2373
   */
  commission_rate?: string;
  min_self_delegation?: string;
  max_license?: string;
  license_mode?: boolean;
  special_mode?: boolean;
}
export interface MsgEditValidatorAminoMsg {
  type: 'cosmos-sdk/MsgEditValidator';
  value: MsgEditValidatorAmino;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidatorSDKType {
  description: DescriptionSDKType;
  validator_address: string;
  commission_rate: string;
  min_self_delegation: string;
  max_license: string;
  license_mode: boolean;
  special_mode: boolean;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {}
export interface MsgEditValidatorResponseProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgEditValidatorResponse';
  value: Uint8Array;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseAmino {}
export interface MsgEditValidatorResponseAminoMsg {
  type: 'cosmos-sdk/MsgEditValidatorResponse';
  value: MsgEditValidatorResponseAmino;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseSDKType {}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount: Coin;
}
export interface MsgDelegateProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgDelegate';
  value: Uint8Array;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegateAmino {
  delegator_address?: string;
  validator_address?: string;
  amount?: CoinAmino;
}
export interface MsgDelegateAminoMsg {
  type: 'cosmos-sdk/MsgDelegate';
  value: MsgDelegateAmino;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {}
export interface MsgDelegateResponseProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgDelegateResponse';
  value: Uint8Array;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponseAmino {}
export interface MsgDelegateResponseAminoMsg {
  type: 'cosmos-sdk/MsgDelegateResponse';
  value: MsgDelegateResponseAmino;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponseSDKType {}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegate {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  amount: Coin;
}
export interface MsgBeginRedelegateProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate';
  value: Uint8Array;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegateAmino {
  delegator_address?: string;
  validator_src_address?: string;
  validator_dst_address?: string;
  amount?: CoinAmino;
}
export interface MsgBeginRedelegateAminoMsg {
  type: 'cosmos-sdk/MsgBeginRedelegate';
  value: MsgBeginRedelegateAmino;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegateSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  amount: CoinSDKType;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponse {
  completionTime: Date;
}
export interface MsgBeginRedelegateResponseProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegateResponse';
  value: Uint8Array;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponseAmino {
  completion_time?: string;
}
export interface MsgBeginRedelegateResponseAminoMsg {
  type: 'cosmos-sdk/MsgBeginRedelegateResponse';
  value: MsgBeginRedelegateResponseAmino;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponseSDKType {
  completion_time: Date;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount: Coin;
}
export interface MsgUndelegateProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate';
  value: Uint8Array;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegateAmino {
  delegator_address?: string;
  validator_address?: string;
  amount?: CoinAmino;
}
export interface MsgUndelegateAminoMsg {
  type: 'cosmos-sdk/MsgUndelegate';
  value: MsgUndelegateAmino;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
  completionTime: Date;
}
export interface MsgUndelegateResponseProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgUndelegateResponse';
  value: Uint8Array;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponseAmino {
  completion_time?: string;
}
export interface MsgUndelegateResponseAminoMsg {
  type: 'cosmos-sdk/MsgUndelegateResponse';
  value: MsgUndelegateResponseAmino;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponseSDKType {
  completion_time: Date;
}
/** MsgCreateWhitelistDelegator defines the Msg/MsgCreateWhitelistDelegator response type. */
export interface MsgCreateWhitelistDelegator {
  creator: string;
  validatorAddress: string;
  delegatorAddress: string;
}
export interface MsgCreateWhitelistDelegatorProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgCreateWhitelistDelegator';
  value: Uint8Array;
}
/** MsgCreateWhitelistDelegator defines the Msg/MsgCreateWhitelistDelegator response type. */
export interface MsgCreateWhitelistDelegatorAmino {
  creator?: string;
  validator_address?: string;
  delegator_address?: string;
}
export interface MsgCreateWhitelistDelegatorAminoMsg {
  type: 'cosmos-sdk/MsgCreateWhitelistDelegator';
  value: MsgCreateWhitelistDelegatorAmino;
}
/** MsgCreateWhitelistDelegator defines the Msg/MsgCreateWhitelistDelegator response type. */
export interface MsgCreateWhitelistDelegatorSDKType {
  creator: string;
  validator_address: string;
  delegator_address: string;
}
/** MsgDeleteWhitelistDelegator defines the Msg/MsgCreateWhitelistDelegator response type. */
export interface MsgDeleteWhitelistDelegator {
  creator: string;
  validatorAddress: string;
  delegatorAddress: string;
}
export interface MsgDeleteWhitelistDelegatorProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgDeleteWhitelistDelegator';
  value: Uint8Array;
}
/** MsgDeleteWhitelistDelegator defines the Msg/MsgCreateWhitelistDelegator response type. */
export interface MsgDeleteWhitelistDelegatorAmino {
  creator?: string;
  validator_address?: string;
  delegator_address?: string;
}
export interface MsgDeleteWhitelistDelegatorAminoMsg {
  type: 'cosmos-sdk/MsgDeleteWhitelistDelegator';
  value: MsgDeleteWhitelistDelegatorAmino;
}
/** MsgDeleteWhitelistDelegator defines the Msg/MsgCreateWhitelistDelegator response type. */
export interface MsgDeleteWhitelistDelegatorSDKType {
  creator: string;
  validator_address: string;
  delegator_address: string;
}
/** MsgCreateWhitelistdelegatorResponse defines the Msg/MsgListCreateWhitelistDelegator response type. */
export interface MsgCreateWhitelistdelegatorResponse {
  whitelistDelegator?: WhitelistDelegator;
}
export interface MsgCreateWhitelistdelegatorResponseProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgCreateWhitelistdelegatorResponse';
  value: Uint8Array;
}
/** MsgCreateWhitelistdelegatorResponse defines the Msg/MsgListCreateWhitelistDelegator response type. */
export interface MsgCreateWhitelistdelegatorResponseAmino {
  whitelist_delegator?: WhitelistDelegatorAmino;
}
export interface MsgCreateWhitelistdelegatorResponseAminoMsg {
  type: 'cosmos-sdk/MsgCreateWhitelistdelegatorResponse';
  value: MsgCreateWhitelistdelegatorResponseAmino;
}
/** MsgCreateWhitelistdelegatorResponse defines the Msg/MsgListCreateWhitelistDelegator response type. */
export interface MsgCreateWhitelistdelegatorResponseSDKType {
  whitelist_delegator?: WhitelistDelegatorSDKType;
}
/** MsgCreateWhitelistdelegatorResponse defines the Msg/MsgListDeleteWhitelistDelegator response type. */
export interface MsgDeleteWhitelistdelegatorResponse {
  whitelistDelegator?: WhitelistDelegator;
}
export interface MsgDeleteWhitelistdelegatorResponseProtoMsg {
  typeUrl: '/cosmos.staking.v1beta1.MsgDeleteWhitelistdelegatorResponse';
  value: Uint8Array;
}
/** MsgCreateWhitelistdelegatorResponse defines the Msg/MsgListDeleteWhitelistDelegator response type. */
export interface MsgDeleteWhitelistdelegatorResponseAmino {
  whitelist_delegator?: WhitelistDelegatorAmino;
}
export interface MsgDeleteWhitelistdelegatorResponseAminoMsg {
  type: 'cosmos-sdk/MsgDeleteWhitelistdelegatorResponse';
  value: MsgDeleteWhitelistdelegatorResponseAmino;
}
/** MsgCreateWhitelistdelegatorResponse defines the Msg/MsgListDeleteWhitelistDelegator response type. */
export interface MsgDeleteWhitelistdelegatorResponseSDKType {
  whitelist_delegator?: WhitelistDelegatorSDKType;
}
function createBaseMsgSetValidatorApproval(): MsgSetValidatorApproval {
  return {
    approverAddress: '',
    newApproverAddress: '',
    enabled: false
  };
}
export const MsgSetValidatorApproval = {
  typeUrl: '/cosmos.staking.v1beta1.MsgSetValidatorApproval',
  encode(message: MsgSetValidatorApproval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.approverAddress !== '') {
      writer.uint32(10).string(message.approverAddress);
    }
    if (message.newApproverAddress !== '') {
      writer.uint32(18).string(message.newApproverAddress);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetValidatorApproval {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorApproval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.approverAddress = reader.string();
        break;
      case 2:
        message.newApproverAddress = reader.string();
        break;
      case 3:
        message.enabled = reader.bool();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetValidatorApproval>): MsgSetValidatorApproval {
    const message = createBaseMsgSetValidatorApproval();
    message.approverAddress = object.approverAddress ?? '';
    message.newApproverAddress = object.newApproverAddress ?? '';
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object: MsgSetValidatorApprovalAmino): MsgSetValidatorApproval {
    const message = createBaseMsgSetValidatorApproval();
    if (object.approver_address !== undefined && object.approver_address !== null) {
      message.approverAddress = object.approver_address;
    }
    if (object.new_approver_address !== undefined && object.new_approver_address !== null) {
      message.newApproverAddress = object.new_approver_address;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: MsgSetValidatorApproval): MsgSetValidatorApprovalAmino {
    const obj: any = {};
    obj.approver_address = message.approverAddress === '' ? undefined : message.approverAddress;
    obj.new_approver_address = message.newApproverAddress === '' ? undefined : message.newApproverAddress;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    return obj;
  },
  fromAminoMsg(object: MsgSetValidatorApprovalAminoMsg): MsgSetValidatorApproval {
    return MsgSetValidatorApproval.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetValidatorApproval): MsgSetValidatorApprovalAminoMsg {
    return {
      type: 'cosmos-sdk/MsgSetValidatorApproval',
      value: MsgSetValidatorApproval.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetValidatorApprovalProtoMsg): MsgSetValidatorApproval {
    return MsgSetValidatorApproval.decode(message.value);
  },
  toProto(message: MsgSetValidatorApproval): Uint8Array {
    return MsgSetValidatorApproval.encode(message).finish();
  },
  toProtoMsg(message: MsgSetValidatorApproval): MsgSetValidatorApprovalProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgSetValidatorApproval',
      value: MsgSetValidatorApproval.encode(message).finish()
    };
  }
};
function createBaseMsgSetValidatorApprovalResponse(): MsgSetValidatorApprovalResponse {
  return {};
}
export const MsgSetValidatorApprovalResponse = {
  typeUrl: '/cosmos.staking.v1beta1.MsgSetValidatorApprovalResponse',
  encode(_: MsgSetValidatorApprovalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetValidatorApprovalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorApprovalResponse();
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
  fromPartial(_: Partial<MsgSetValidatorApprovalResponse>): MsgSetValidatorApprovalResponse {
    const message = createBaseMsgSetValidatorApprovalResponse();
    return message;
  },
  fromAmino(_: MsgSetValidatorApprovalResponseAmino): MsgSetValidatorApprovalResponse {
    const message = createBaseMsgSetValidatorApprovalResponse();
    return message;
  },
  toAmino(_: MsgSetValidatorApprovalResponse): MsgSetValidatorApprovalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetValidatorApprovalResponseAminoMsg): MsgSetValidatorApprovalResponse {
    return MsgSetValidatorApprovalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetValidatorApprovalResponse): MsgSetValidatorApprovalResponseAminoMsg {
    return {
      type: 'cosmos-sdk/MsgSetValidatorApprovalResponse',
      value: MsgSetValidatorApprovalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetValidatorApprovalResponseProtoMsg): MsgSetValidatorApprovalResponse {
    return MsgSetValidatorApprovalResponse.decode(message.value);
  },
  toProto(message: MsgSetValidatorApprovalResponse): Uint8Array {
    return MsgSetValidatorApprovalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetValidatorApprovalResponse): MsgSetValidatorApprovalResponseProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgSetValidatorApprovalResponse',
      value: MsgSetValidatorApprovalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateValidator(): MsgCreateValidator {
  return {
    description: Description.fromPartial({}),
    commission: CommissionRates.fromPartial({}),
    minSelfDelegation: '',
    minDelegation: '',
    delegationIncrement: '',
    maxLicense: '',
    licenseMode: false,
    enableRedelegation: false,
    delegatorAddress: '',
    validatorAddress: '',
    approverAddress: '',
    pubkey: undefined,
    value: Coin.fromPartial({}),
    specialMode: false
  };
}
export const MsgCreateValidator = {
  typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
  encode(message: MsgCreateValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
    }
    if (message.minSelfDelegation !== '') {
      writer.uint32(26).string(message.minSelfDelegation);
    }
    if (message.minDelegation !== '') {
      writer.uint32(34).string(message.minDelegation);
    }
    if (message.delegationIncrement !== '') {
      writer.uint32(42).string(message.delegationIncrement);
    }
    if (message.maxLicense !== '') {
      writer.uint32(50).string(message.maxLicense);
    }
    if (message.licenseMode === true) {
      writer.uint32(56).bool(message.licenseMode);
    }
    if (message.enableRedelegation === true) {
      writer.uint32(64).bool(message.enableRedelegation);
    }
    if (message.delegatorAddress !== '') {
      writer.uint32(74).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== '') {
      writer.uint32(82).string(message.validatorAddress);
    }
    if (message.approverAddress !== '') {
      writer.uint32(90).string(message.approverAddress);
    }
    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey as Any, writer.uint32(98).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(106).fork()).ldelim();
    }
    if (message.specialMode === true) {
      writer.uint32(112).bool(message.specialMode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.description = Description.decode(reader, reader.uint32());
        break;
      case 2:
        message.commission = CommissionRates.decode(reader, reader.uint32());
        break;
      case 3:
        message.minSelfDelegation = reader.string();
        break;
      case 4:
        message.minDelegation = reader.string();
        break;
      case 5:
        message.delegationIncrement = reader.string();
        break;
      case 6:
        message.maxLicense = reader.string();
        break;
      case 7:
        message.licenseMode = reader.bool();
        break;
      case 8:
        message.enableRedelegation = reader.bool();
        break;
      case 9:
        message.delegatorAddress = reader.string();
        break;
      case 10:
        message.validatorAddress = reader.string();
        break;
      case 11:
        message.approverAddress = reader.string();
        break;
      case 12:
        message.pubkey = Cosmos_cryptoPubKey_InterfaceDecoder(reader) as Any;
        break;
      case 13:
        message.value = Coin.decode(reader, reader.uint32());
        break;
      case 14:
        message.specialMode = reader.bool();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateValidator>): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
    message.minSelfDelegation = object.minSelfDelegation ?? '';
    message.minDelegation = object.minDelegation ?? '';
    message.delegationIncrement = object.delegationIncrement ?? '';
    message.maxLicense = object.maxLicense ?? '';
    message.licenseMode = object.licenseMode ?? false;
    message.enableRedelegation = object.enableRedelegation ?? false;
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    message.approverAddress = object.approverAddress ?? '';
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    message.specialMode = object.specialMode ?? false;
    return message;
  },
  fromAmino(object: MsgCreateValidatorAmino): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = CommissionRates.fromAmino(object.commission);
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    if (object.min_delegation !== undefined && object.min_delegation !== null) {
      message.minDelegation = object.min_delegation;
    }
    if (object.delegation_increment !== undefined && object.delegation_increment !== null) {
      message.delegationIncrement = object.delegation_increment;
    }
    if (object.max_license !== undefined && object.max_license !== null) {
      message.maxLicense = object.max_license;
    }
    if (object.license_mode !== undefined && object.license_mode !== null) {
      message.licenseMode = object.license_mode;
    }
    if (object.enable_redelegation !== undefined && object.enable_redelegation !== null) {
      message.enableRedelegation = object.enable_redelegation;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.approver_address !== undefined && object.approver_address !== null) {
      message.approverAddress = object.approver_address;
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = encodePubkey(object.pubkey);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromAmino(object.value);
    }
    if (object.special_mode !== undefined && object.special_mode !== null) {
      message.specialMode = object.special_mode;
    }
    return message;
  },
  toAmino(message: MsgCreateValidator): MsgCreateValidatorAmino {
    const obj: any = {};
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.commission = message.commission ? CommissionRates.toAmino(message.commission) : undefined;
    obj.min_self_delegation = message.minSelfDelegation === '' ? undefined : message.minSelfDelegation;
    obj.min_delegation = message.minDelegation === '' ? undefined : message.minDelegation;
    obj.delegation_increment = message.delegationIncrement === '' ? undefined : message.delegationIncrement;
    obj.max_license = message.maxLicense === '' ? undefined : message.maxLicense;
    obj.license_mode = message.licenseMode === false ? undefined : message.licenseMode;
    obj.enable_redelegation = message.enableRedelegation === false ? undefined : message.enableRedelegation;
    obj.delegator_address = message.delegatorAddress === '' ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === '' ? undefined : message.validatorAddress;
    obj.approver_address = message.approverAddress === '' ? undefined : message.approverAddress;
    obj.pubkey = message.pubkey ? decodePubkey(message.pubkey) : undefined;
    obj.value = message.value ? Coin.toAmino(message.value) : undefined;
    obj.special_mode = message.specialMode === false ? undefined : message.specialMode;
    return obj;
  },
  fromAminoMsg(object: MsgCreateValidatorAminoMsg): MsgCreateValidator {
    return MsgCreateValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateValidator): MsgCreateValidatorAminoMsg {
    return {
      type: 'cosmos-sdk/MsgCreateValidator',
      value: MsgCreateValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateValidatorProtoMsg): MsgCreateValidator {
    return MsgCreateValidator.decode(message.value);
  },
  toProto(message: MsgCreateValidator): Uint8Array {
    return MsgCreateValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateValidator): MsgCreateValidatorProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
      value: MsgCreateValidator.encode(message).finish()
    };
  }
};
function createBaseMsgCreateValidatorResponse(): MsgCreateValidatorResponse {
  return {};
}
export const MsgCreateValidatorResponse = {
  typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidatorResponse',
  encode(_: MsgCreateValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorResponse();
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
  fromPartial(_: Partial<MsgCreateValidatorResponse>): MsgCreateValidatorResponse {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
  fromAmino(_: MsgCreateValidatorResponseAmino): MsgCreateValidatorResponse {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
  toAmino(_: MsgCreateValidatorResponse): MsgCreateValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateValidatorResponseAminoMsg): MsgCreateValidatorResponse {
    return MsgCreateValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseAminoMsg {
    return {
      type: 'cosmos-sdk/MsgCreateValidatorResponse',
      value: MsgCreateValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateValidatorResponseProtoMsg): MsgCreateValidatorResponse {
    return MsgCreateValidatorResponse.decode(message.value);
  },
  toProto(message: MsgCreateValidatorResponse): Uint8Array {
    return MsgCreateValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidatorResponse',
      value: MsgCreateValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditValidator(): MsgEditValidator {
  return {
    description: Description.fromPartial({}),
    validatorAddress: '',
    commissionRate: '',
    minSelfDelegation: '',
    maxLicense: '',
    licenseMode: false,
    specialMode: false
  };
}
export const MsgEditValidator = {
  typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
  encode(message: MsgEditValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorAddress !== '') {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.commissionRate !== '') {
      writer.uint32(26).string(Decimal.fromUserInput(message.commissionRate, 18).atomics);
    }
    if (message.minSelfDelegation !== '') {
      writer.uint32(34).string(message.minSelfDelegation);
    }
    if (message.maxLicense !== '') {
      writer.uint32(42).string(message.maxLicense);
    }
    if (message.licenseMode === true) {
      writer.uint32(48).bool(message.licenseMode);
    }
    if (message.specialMode === true) {
      writer.uint32(56).bool(message.specialMode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.description = Description.decode(reader, reader.uint32());
        break;
      case 2:
        message.validatorAddress = reader.string();
        break;
      case 3:
        message.commissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
        break;
      case 4:
        message.minSelfDelegation = reader.string();
        break;
      case 5:
        message.maxLicense = reader.string();
        break;
      case 6:
        message.licenseMode = reader.bool();
        break;
      case 7:
        message.specialMode = reader.bool();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEditValidator>): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.validatorAddress = object.validatorAddress ?? '';
    message.commissionRate = object.commissionRate ?? '';
    message.minSelfDelegation = object.minSelfDelegation ?? '';
    message.maxLicense = object.maxLicense ?? '';
    message.licenseMode = object.licenseMode ?? false;
    message.specialMode = object.specialMode ?? false;
    return message;
  },
  fromAmino(object: MsgEditValidatorAmino): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.commission_rate !== undefined && object.commission_rate !== null) {
      message.commissionRate = object.commission_rate;
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    if (object.max_license !== undefined && object.max_license !== null) {
      message.maxLicense = object.max_license;
    }
    if (object.license_mode !== undefined && object.license_mode !== null) {
      message.licenseMode = object.license_mode;
    }
    if (object.special_mode !== undefined && object.special_mode !== null) {
      message.specialMode = object.special_mode;
    }
    return message;
  },
  toAmino(message: MsgEditValidator): MsgEditValidatorAmino {
    const obj: any = {};
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.validator_address = message.validatorAddress === '' ? undefined : message.validatorAddress;
    obj.commission_rate = message.commissionRate === '' ? undefined : message.commissionRate;
    obj.min_self_delegation = message.minSelfDelegation === '' ? undefined : message.minSelfDelegation;
    obj.max_license = message.maxLicense === '' ? undefined : message.maxLicense;
    obj.license_mode = message.licenseMode === false ? undefined : message.licenseMode;
    obj.special_mode = message.specialMode === false ? undefined : message.specialMode;
    return obj;
  },
  fromAminoMsg(object: MsgEditValidatorAminoMsg): MsgEditValidator {
    return MsgEditValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditValidator): MsgEditValidatorAminoMsg {
    return {
      type: 'cosmos-sdk/MsgEditValidator',
      value: MsgEditValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditValidatorProtoMsg): MsgEditValidator {
    return MsgEditValidator.decode(message.value);
  },
  toProto(message: MsgEditValidator): Uint8Array {
    return MsgEditValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgEditValidator): MsgEditValidatorProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
      value: MsgEditValidator.encode(message).finish()
    };
  }
};
function createBaseMsgEditValidatorResponse(): MsgEditValidatorResponse {
  return {};
}
export const MsgEditValidatorResponse = {
  typeUrl: '/cosmos.staking.v1beta1.MsgEditValidatorResponse',
  encode(_: MsgEditValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidatorResponse();
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
  fromPartial(_: Partial<MsgEditValidatorResponse>): MsgEditValidatorResponse {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
  fromAmino(_: MsgEditValidatorResponseAmino): MsgEditValidatorResponse {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
  toAmino(_: MsgEditValidatorResponse): MsgEditValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditValidatorResponseAminoMsg): MsgEditValidatorResponse {
    return MsgEditValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseAminoMsg {
    return {
      type: 'cosmos-sdk/MsgEditValidatorResponse',
      value: MsgEditValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditValidatorResponseProtoMsg): MsgEditValidatorResponse {
    return MsgEditValidatorResponse.decode(message.value);
  },
  toProto(message: MsgEditValidatorResponse): Uint8Array {
    return MsgEditValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgEditValidatorResponse',
      value: MsgEditValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegate(): MsgDelegate {
  return {
    delegatorAddress: '',
    validatorAddress: '',
    amount: Coin.fromPartial({})
  };
}
export const MsgDelegate = {
  typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
  encode(message: MsgDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== '') {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.delegatorAddress = reader.string();
        break;
      case 2:
        message.validatorAddress = reader.string();
        break;
      case 3:
        message.amount = Coin.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDelegate>): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgDelegateAmino): MsgDelegate {
    const message = createBaseMsgDelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgDelegate): MsgDelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === '' ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === '' ? undefined : message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateAminoMsg): MsgDelegate {
    return MsgDelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegate): MsgDelegateAminoMsg {
    return {
      type: 'cosmos-sdk/MsgDelegate',
      value: MsgDelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateProtoMsg): MsgDelegate {
    return MsgDelegate.decode(message.value);
  },
  toProto(message: MsgDelegate): Uint8Array {
    return MsgDelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegate): MsgDelegateProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
      value: MsgDelegate.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}
export const MsgDelegateResponse = {
  typeUrl: '/cosmos.staking.v1beta1.MsgDelegateResponse',
  encode(_: MsgDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();
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
  fromPartial(_: Partial<MsgDelegateResponse>): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
  fromAmino(_: MsgDelegateResponseAmino): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
  toAmino(_: MsgDelegateResponse): MsgDelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateResponseAminoMsg): MsgDelegateResponse {
    return MsgDelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateResponse): MsgDelegateResponseAminoMsg {
    return {
      type: 'cosmos-sdk/MsgDelegateResponse',
      value: MsgDelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateResponseProtoMsg): MsgDelegateResponse {
    return MsgDelegateResponse.decode(message.value);
  },
  toProto(message: MsgDelegateResponse): Uint8Array {
    return MsgDelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateResponse): MsgDelegateResponseProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgDelegateResponse',
      value: MsgDelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBeginRedelegate(): MsgBeginRedelegate {
  return {
    delegatorAddress: '',
    validatorSrcAddress: '',
    validatorDstAddress: '',
    amount: Coin.fromPartial({})
  };
}
export const MsgBeginRedelegate = {
  typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
  encode(message: MsgBeginRedelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== '') {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== '') {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.delegatorAddress = reader.string();
        break;
      case 2:
        message.validatorSrcAddress = reader.string();
        break;
      case 3:
        message.validatorDstAddress = reader.string();
        break;
      case 4:
        message.amount = Coin.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBeginRedelegate>): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorSrcAddress = object.validatorSrcAddress ?? '';
    message.validatorDstAddress = object.validatorDstAddress ?? '';
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgBeginRedelegateAmino): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
      message.validatorSrcAddress = object.validator_src_address;
    }
    if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
      message.validatorDstAddress = object.validator_dst_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgBeginRedelegate): MsgBeginRedelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === '' ? undefined : message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress === '' ? undefined : message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress === '' ? undefined : message.validatorDstAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBeginRedelegateAminoMsg): MsgBeginRedelegate {
    return MsgBeginRedelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateAminoMsg {
    return {
      type: 'cosmos-sdk/MsgBeginRedelegate',
      value: MsgBeginRedelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginRedelegateProtoMsg): MsgBeginRedelegate {
    return MsgBeginRedelegate.decode(message.value);
  },
  toProto(message: MsgBeginRedelegate): Uint8Array {
    return MsgBeginRedelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
      value: MsgBeginRedelegate.encode(message).finish()
    };
  }
};
function createBaseMsgBeginRedelegateResponse(): MsgBeginRedelegateResponse {
  return {
    completionTime: new Date()
  };
}
export const MsgBeginRedelegateResponse = {
  typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegateResponse',
  encode(message: MsgBeginRedelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBeginRedelegateResponse>): MsgBeginRedelegateResponse {
    const message = createBaseMsgBeginRedelegateResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
  fromAmino(object: MsgBeginRedelegateResponseAmino): MsgBeginRedelegateResponse {
    const message = createBaseMsgBeginRedelegateResponse();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(toTimestamp(message.completionTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBeginRedelegateResponseAminoMsg): MsgBeginRedelegateResponse {
    return MsgBeginRedelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAminoMsg {
    return {
      type: 'cosmos-sdk/MsgBeginRedelegateResponse',
      value: MsgBeginRedelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginRedelegateResponseProtoMsg): MsgBeginRedelegateResponse {
    return MsgBeginRedelegateResponse.decode(message.value);
  },
  toProto(message: MsgBeginRedelegateResponse): Uint8Array {
    return MsgBeginRedelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegateResponse',
      value: MsgBeginRedelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    delegatorAddress: '',
    validatorAddress: '',
    amount: Coin.fromPartial({})
  };
}
export const MsgUndelegate = {
  typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
  encode(message: MsgUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== '') {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.delegatorAddress = reader.string();
        break;
      case 2:
        message.validatorAddress = reader.string();
        break;
      case 3:
        message.amount = Coin.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndelegate>): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgUndelegateAmino): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgUndelegate): MsgUndelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === '' ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === '' ? undefined : message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateAminoMsg): MsgUndelegate {
    return MsgUndelegate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegate): MsgUndelegateAminoMsg {
    return {
      type: 'cosmos-sdk/MsgUndelegate',
      value: MsgUndelegate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateProtoMsg): MsgUndelegate {
    return MsgUndelegate.decode(message.value);
  },
  toProto(message: MsgUndelegate): Uint8Array {
    return MsgUndelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegate): MsgUndelegateProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
      value: MsgUndelegate.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {
    completionTime: new Date()
  };
}
export const MsgUndelegateResponse = {
  typeUrl: '/cosmos.staking.v1beta1.MsgUndelegateResponse',
  encode(message: MsgUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndelegateResponse>): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
  fromAmino(object: MsgUndelegateResponseAmino): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message: MsgUndelegateResponse): MsgUndelegateResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(toTimestamp(message.completionTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateResponseAminoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseAminoMsg {
    return {
      type: 'cosmos-sdk/MsgUndelegateResponse',
      value: MsgUndelegateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateResponseProtoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateResponse): Uint8Array {
    return MsgUndelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgUndelegateResponse',
      value: MsgUndelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateWhitelistDelegator(): MsgCreateWhitelistDelegator {
  return {
    creator: '',
    validatorAddress: '',
    delegatorAddress: ''
  };
}
export const MsgCreateWhitelistDelegator = {
  typeUrl: '/cosmos.staking.v1beta1.MsgCreateWhitelistDelegator',
  encode(message: MsgCreateWhitelistDelegator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.validatorAddress !== '') {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.delegatorAddress !== '') {
      writer.uint32(26).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWhitelistDelegator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWhitelistDelegator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.validatorAddress = reader.string();
        break;
      case 3:
        message.delegatorAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateWhitelistDelegator>): MsgCreateWhitelistDelegator {
    const message = createBaseMsgCreateWhitelistDelegator();
    message.creator = object.creator ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    message.delegatorAddress = object.delegatorAddress ?? '';
    return message;
  },
  fromAmino(object: MsgCreateWhitelistDelegatorAmino): MsgCreateWhitelistDelegator {
    const message = createBaseMsgCreateWhitelistDelegator();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: MsgCreateWhitelistDelegator): MsgCreateWhitelistDelegatorAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.validator_address = message.validatorAddress === '' ? undefined : message.validatorAddress;
    obj.delegator_address = message.delegatorAddress === '' ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCreateWhitelistDelegatorAminoMsg): MsgCreateWhitelistDelegator {
    return MsgCreateWhitelistDelegator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateWhitelistDelegator): MsgCreateWhitelistDelegatorAminoMsg {
    return {
      type: 'cosmos-sdk/MsgCreateWhitelistDelegator',
      value: MsgCreateWhitelistDelegator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateWhitelistDelegatorProtoMsg): MsgCreateWhitelistDelegator {
    return MsgCreateWhitelistDelegator.decode(message.value);
  },
  toProto(message: MsgCreateWhitelistDelegator): Uint8Array {
    return MsgCreateWhitelistDelegator.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateWhitelistDelegator): MsgCreateWhitelistDelegatorProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgCreateWhitelistDelegator',
      value: MsgCreateWhitelistDelegator.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteWhitelistDelegator(): MsgDeleteWhitelistDelegator {
  return {
    creator: '',
    validatorAddress: '',
    delegatorAddress: ''
  };
}
export const MsgDeleteWhitelistDelegator = {
  typeUrl: '/cosmos.staking.v1beta1.MsgDeleteWhitelistDelegator',
  encode(message: MsgDeleteWhitelistDelegator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.validatorAddress !== '') {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.delegatorAddress !== '') {
      writer.uint32(26).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteWhitelistDelegator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteWhitelistDelegator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.validatorAddress = reader.string();
        break;
      case 3:
        message.delegatorAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteWhitelistDelegator>): MsgDeleteWhitelistDelegator {
    const message = createBaseMsgDeleteWhitelistDelegator();
    message.creator = object.creator ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    message.delegatorAddress = object.delegatorAddress ?? '';
    return message;
  },
  fromAmino(object: MsgDeleteWhitelistDelegatorAmino): MsgDeleteWhitelistDelegator {
    const message = createBaseMsgDeleteWhitelistDelegator();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: MsgDeleteWhitelistDelegator): MsgDeleteWhitelistDelegatorAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.validator_address = message.validatorAddress === '' ? undefined : message.validatorAddress;
    obj.delegator_address = message.delegatorAddress === '' ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteWhitelistDelegatorAminoMsg): MsgDeleteWhitelistDelegator {
    return MsgDeleteWhitelistDelegator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteWhitelistDelegator): MsgDeleteWhitelistDelegatorAminoMsg {
    return {
      type: 'cosmos-sdk/MsgDeleteWhitelistDelegator',
      value: MsgDeleteWhitelistDelegator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteWhitelistDelegatorProtoMsg): MsgDeleteWhitelistDelegator {
    return MsgDeleteWhitelistDelegator.decode(message.value);
  },
  toProto(message: MsgDeleteWhitelistDelegator): Uint8Array {
    return MsgDeleteWhitelistDelegator.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteWhitelistDelegator): MsgDeleteWhitelistDelegatorProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgDeleteWhitelistDelegator',
      value: MsgDeleteWhitelistDelegator.encode(message).finish()
    };
  }
};
function createBaseMsgCreateWhitelistdelegatorResponse(): MsgCreateWhitelistdelegatorResponse {
  return {
    whitelistDelegator: undefined
  };
}
export const MsgCreateWhitelistdelegatorResponse = {
  typeUrl: '/cosmos.staking.v1beta1.MsgCreateWhitelistdelegatorResponse',
  encode(message: MsgCreateWhitelistdelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whitelistDelegator !== undefined) {
      WhitelistDelegator.encode(message.whitelistDelegator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWhitelistdelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWhitelistdelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.whitelistDelegator = WhitelistDelegator.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateWhitelistdelegatorResponse>): MsgCreateWhitelistdelegatorResponse {
    const message = createBaseMsgCreateWhitelistdelegatorResponse();
    message.whitelistDelegator = object.whitelistDelegator !== undefined && object.whitelistDelegator !== null ? WhitelistDelegator.fromPartial(object.whitelistDelegator) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateWhitelistdelegatorResponseAmino): MsgCreateWhitelistdelegatorResponse {
    const message = createBaseMsgCreateWhitelistdelegatorResponse();
    if (object.whitelist_delegator !== undefined && object.whitelist_delegator !== null) {
      message.whitelistDelegator = WhitelistDelegator.fromAmino(object.whitelist_delegator);
    }
    return message;
  },
  toAmino(message: MsgCreateWhitelistdelegatorResponse): MsgCreateWhitelistdelegatorResponseAmino {
    const obj: any = {};
    obj.whitelist_delegator = message.whitelistDelegator ? WhitelistDelegator.toAmino(message.whitelistDelegator) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateWhitelistdelegatorResponseAminoMsg): MsgCreateWhitelistdelegatorResponse {
    return MsgCreateWhitelistdelegatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateWhitelistdelegatorResponse): MsgCreateWhitelistdelegatorResponseAminoMsg {
    return {
      type: 'cosmos-sdk/MsgCreateWhitelistdelegatorResponse',
      value: MsgCreateWhitelistdelegatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateWhitelistdelegatorResponseProtoMsg): MsgCreateWhitelistdelegatorResponse {
    return MsgCreateWhitelistdelegatorResponse.decode(message.value);
  },
  toProto(message: MsgCreateWhitelistdelegatorResponse): Uint8Array {
    return MsgCreateWhitelistdelegatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateWhitelistdelegatorResponse): MsgCreateWhitelistdelegatorResponseProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgCreateWhitelistdelegatorResponse',
      value: MsgCreateWhitelistdelegatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteWhitelistdelegatorResponse(): MsgDeleteWhitelistdelegatorResponse {
  return {
    whitelistDelegator: undefined
  };
}
export const MsgDeleteWhitelistdelegatorResponse = {
  typeUrl: '/cosmos.staking.v1beta1.MsgDeleteWhitelistdelegatorResponse',
  encode(message: MsgDeleteWhitelistdelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whitelistDelegator !== undefined) {
      WhitelistDelegator.encode(message.whitelistDelegator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteWhitelistdelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteWhitelistdelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.whitelistDelegator = WhitelistDelegator.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteWhitelistdelegatorResponse>): MsgDeleteWhitelistdelegatorResponse {
    const message = createBaseMsgDeleteWhitelistdelegatorResponse();
    message.whitelistDelegator = object.whitelistDelegator !== undefined && object.whitelistDelegator !== null ? WhitelistDelegator.fromPartial(object.whitelistDelegator) : undefined;
    return message;
  },
  fromAmino(object: MsgDeleteWhitelistdelegatorResponseAmino): MsgDeleteWhitelistdelegatorResponse {
    const message = createBaseMsgDeleteWhitelistdelegatorResponse();
    if (object.whitelist_delegator !== undefined && object.whitelist_delegator !== null) {
      message.whitelistDelegator = WhitelistDelegator.fromAmino(object.whitelist_delegator);
    }
    return message;
  },
  toAmino(message: MsgDeleteWhitelistdelegatorResponse): MsgDeleteWhitelistdelegatorResponseAmino {
    const obj: any = {};
    obj.whitelist_delegator = message.whitelistDelegator ? WhitelistDelegator.toAmino(message.whitelistDelegator) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteWhitelistdelegatorResponseAminoMsg): MsgDeleteWhitelistdelegatorResponse {
    return MsgDeleteWhitelistdelegatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteWhitelistdelegatorResponse): MsgDeleteWhitelistdelegatorResponseAminoMsg {
    return {
      type: 'cosmos-sdk/MsgDeleteWhitelistdelegatorResponse',
      value: MsgDeleteWhitelistdelegatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteWhitelistdelegatorResponseProtoMsg): MsgDeleteWhitelistdelegatorResponse {
    return MsgDeleteWhitelistdelegatorResponse.decode(message.value);
  },
  toProto(message: MsgDeleteWhitelistdelegatorResponse): Uint8Array {
    return MsgDeleteWhitelistdelegatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteWhitelistdelegatorResponse): MsgDeleteWhitelistdelegatorResponseProtoMsg {
    return {
      typeUrl: '/cosmos.staking.v1beta1.MsgDeleteWhitelistdelegatorResponse',
      value: MsgDeleteWhitelistdelegatorResponse.encode(message).finish()
    };
  }
};
export const Cosmos_cryptoPubKey_InterfaceDecoder = (input: _m0.Reader | Uint8Array): Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
  default:
    return data;
  }
};
export const Cosmos_cryptoPubKey_FromAmino = (content: AnyAmino): Any => {
  return encodePubkey(content);
};
export const Cosmos_cryptoPubKey_ToAmino = (content: Any): Pubkey | null => {
  return decodePubkey(content);
};