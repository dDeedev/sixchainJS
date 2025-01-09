//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Rpc } from '../../../helpers';
import { MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgCreateValidator, MsgCreateValidatorResponse, MsgCreateWhitelistDelegator, MsgCreateWhitelistdelegatorResponse, MsgDelegate, MsgDelegateResponse, MsgDeleteWhitelistDelegator, MsgDeleteWhitelistdelegatorResponse,MsgEditValidator, MsgEditValidatorResponse, MsgSetValidatorApproval, MsgSetValidatorApprovalResponse, MsgUndelegate, MsgUndelegateResponse } from './tx';
/** Msg defines the staking Msg service. */
export interface Msg {
  /** Set who allow to create validator */
  setValidatorApproval(request: MsgSetValidatorApproval): Promise<MsgSetValidatorApprovalResponse>;
  /** CreateValidator defines a method for creating a new validator. */
  createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
  /** EditValidator defines a method for editing an existing validator. */
  editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  /** create white list for special delegator */
  createWhitelistdelegator(request: MsgCreateWhitelistDelegator): Promise<MsgCreateWhitelistdelegatorResponse>;
  /** delete white list for special delegator */
  deleteWhitelistdelegator(request: MsgDeleteWhitelistDelegator): Promise<MsgDeleteWhitelistdelegatorResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setValidatorApproval = this.setValidatorApproval.bind(this);
    this.createValidator = this.createValidator.bind(this);
    this.editValidator = this.editValidator.bind(this);
    this.delegate = this.delegate.bind(this);
    this.beginRedelegate = this.beginRedelegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
    this.createWhitelistdelegator = this.createWhitelistdelegator.bind(this);
    this.deleteWhitelistdelegator = this.deleteWhitelistdelegator.bind(this);
  }
  setValidatorApproval(request: MsgSetValidatorApproval): Promise<MsgSetValidatorApprovalResponse> {
    const data = MsgSetValidatorApproval.encode(request).finish();
    const promise = this.rpc.request('cosmos.staking.v1beta1.Msg', 'SetValidatorApproval', data);
    return promise.then(data => MsgSetValidatorApprovalResponse.decode(new _m0.Reader(data)));
  }
  createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse> {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request('cosmos.staking.v1beta1.Msg', 'CreateValidator', data);
    return promise.then(data => MsgCreateValidatorResponse.decode(new _m0.Reader(data)));
  }
  editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse> {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request('cosmos.staking.v1beta1.Msg', 'EditValidator', data);
    return promise.then(data => MsgEditValidatorResponse.decode(new _m0.Reader(data)));
  }
  delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request('cosmos.staking.v1beta1.Msg', 'Delegate', data);
    return promise.then(data => MsgDelegateResponse.decode(new _m0.Reader(data)));
  }
  beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse> {
    const data = MsgBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request('cosmos.staking.v1beta1.Msg', 'BeginRedelegate', data);
    return promise.then(data => MsgBeginRedelegateResponse.decode(new _m0.Reader(data)));
  }
  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request('cosmos.staking.v1beta1.Msg', 'Undelegate', data);
    return promise.then(data => MsgUndelegateResponse.decode(new _m0.Reader(data)));
  }
  createWhitelistdelegator(request: MsgCreateWhitelistDelegator): Promise<MsgCreateWhitelistdelegatorResponse> {
    const data = MsgCreateWhitelistDelegator.encode(request).finish();
    const promise = this.rpc.request('cosmos.staking.v1beta1.Msg', 'CreateWhitelistdelegator', data);
    return promise.then(data => MsgCreateWhitelistdelegatorResponse.decode(new _m0.Reader(data)));
  }
  deleteWhitelistdelegator(request: MsgDeleteWhitelistDelegator): Promise<MsgDeleteWhitelistdelegatorResponse> {
    const data = MsgDeleteWhitelistDelegator.encode(request).finish();
    const promise = this.rpc.request('cosmos.staking.v1beta1.Msg', 'DeleteWhitelistdelegator', data);
    return promise.then(data => MsgDeleteWhitelistdelegatorResponse.decode(new _m0.Reader(data)));
  }
}