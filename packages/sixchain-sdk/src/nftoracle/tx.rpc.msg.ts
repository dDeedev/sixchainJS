//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Rpc } from '../helpers';
import { MsgCreateActionRequest, MsgCreateActionRequestResponse, MsgCreateActionSigner, MsgCreateActionSignerConfig, MsgCreateActionSignerConfigResponse, MsgCreateActionSignerResponse, MsgCreateMintRequest, MsgCreateMintRequestResponse, MsgCreateSyncActionSigner, MsgCreateSyncActionSignerResponse, MsgCreateVerifyCollectionOwnerRequest, MsgCreateVerifyCollectionOwnerRequestResponse, MsgDeleteActionSigner, MsgDeleteActionSignerConfig, MsgDeleteActionSignerConfigResponse, MsgDeleteActionSignerResponse, MsgSetMinimumConfirmation, MsgSetMinimumConfirmationResponse, MsgSubmitActionResponse, MsgSubmitActionResponseResponse, MsgSubmitMintResponse, MsgSubmitMintResponseResponse, MsgSubmitSyncActionSigner, MsgSubmitSyncActionSignerResponse,MsgSubmitVerifyCollectionOwner, MsgSubmitVerifyCollectionOwnerResponse, MsgUpdateActionSigner, MsgUpdateActionSignerConfig, MsgUpdateActionSignerConfigResponse, MsgUpdateActionSignerResponse } from './tx';
/** Msg defines the Msg service. */
export interface Msg {
  createMintRequest(request: MsgCreateMintRequest): Promise<MsgCreateMintRequestResponse>;
  submitMintResponse(request: MsgSubmitMintResponse): Promise<MsgSubmitMintResponseResponse>;
  createActionRequest(request: MsgCreateActionRequest): Promise<MsgCreateActionRequestResponse>;
  submitActionResponse(request: MsgSubmitActionResponse): Promise<MsgSubmitActionResponseResponse>;
  createVerifyCollectionOwnerRequest(request: MsgCreateVerifyCollectionOwnerRequest): Promise<MsgCreateVerifyCollectionOwnerRequestResponse>;
  submitVerifyCollectionOwner(request: MsgSubmitVerifyCollectionOwner): Promise<MsgSubmitVerifyCollectionOwnerResponse>;
  setMinimumConfirmation(request: MsgSetMinimumConfirmation): Promise<MsgSetMinimumConfirmationResponse>;
  createActionSigner(request: MsgCreateActionSigner): Promise<MsgCreateActionSignerResponse>;
  updateActionSigner(request: MsgUpdateActionSigner): Promise<MsgUpdateActionSignerResponse>;
  deleteActionSigner(request: MsgDeleteActionSigner): Promise<MsgDeleteActionSignerResponse>;
  createActionSignerConfig(request: MsgCreateActionSignerConfig): Promise<MsgCreateActionSignerConfigResponse>;
  updateActionSignerConfig(request: MsgUpdateActionSignerConfig): Promise<MsgUpdateActionSignerConfigResponse>;
  deleteActionSignerConfig(request: MsgDeleteActionSignerConfig): Promise<MsgDeleteActionSignerConfigResponse>;
  createSyncActionSigner(request: MsgCreateSyncActionSigner): Promise<MsgCreateSyncActionSignerResponse>;
  submitSyncActionSigner(request: MsgSubmitSyncActionSigner): Promise<MsgSubmitSyncActionSignerResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createMintRequest = this.createMintRequest.bind(this);
    this.submitMintResponse = this.submitMintResponse.bind(this);
    this.createActionRequest = this.createActionRequest.bind(this);
    this.submitActionResponse = this.submitActionResponse.bind(this);
    this.createVerifyCollectionOwnerRequest = this.createVerifyCollectionOwnerRequest.bind(this);
    this.submitVerifyCollectionOwner = this.submitVerifyCollectionOwner.bind(this);
    this.setMinimumConfirmation = this.setMinimumConfirmation.bind(this);
    this.createActionSigner = this.createActionSigner.bind(this);
    this.updateActionSigner = this.updateActionSigner.bind(this);
    this.deleteActionSigner = this.deleteActionSigner.bind(this);
    this.createActionSignerConfig = this.createActionSignerConfig.bind(this);
    this.updateActionSignerConfig = this.updateActionSignerConfig.bind(this);
    this.deleteActionSignerConfig = this.deleteActionSignerConfig.bind(this);
    this.createSyncActionSigner = this.createSyncActionSigner.bind(this);
    this.submitSyncActionSigner = this.submitSyncActionSigner.bind(this);
  }
  createMintRequest(request: MsgCreateMintRequest): Promise<MsgCreateMintRequestResponse> {
    const data = MsgCreateMintRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'CreateMintRequest', data);
    return promise.then(data => MsgCreateMintRequestResponse.decode(new _m0.Reader(data)));
  }
  submitMintResponse(request: MsgSubmitMintResponse): Promise<MsgSubmitMintResponseResponse> {
    const data = MsgSubmitMintResponse.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'SubmitMintResponse', data);
    return promise.then(data => MsgSubmitMintResponseResponse.decode(new _m0.Reader(data)));
  }
  createActionRequest(request: MsgCreateActionRequest): Promise<MsgCreateActionRequestResponse> {
    const data = MsgCreateActionRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'CreateActionRequest', data);
    return promise.then(data => MsgCreateActionRequestResponse.decode(new _m0.Reader(data)));
  }
  submitActionResponse(request: MsgSubmitActionResponse): Promise<MsgSubmitActionResponseResponse> {
    const data = MsgSubmitActionResponse.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'SubmitActionResponse', data);
    return promise.then(data => MsgSubmitActionResponseResponse.decode(new _m0.Reader(data)));
  }
  createVerifyCollectionOwnerRequest(request: MsgCreateVerifyCollectionOwnerRequest): Promise<MsgCreateVerifyCollectionOwnerRequestResponse> {
    const data = MsgCreateVerifyCollectionOwnerRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'CreateVerifyCollectionOwnerRequest', data);
    return promise.then(data => MsgCreateVerifyCollectionOwnerRequestResponse.decode(new _m0.Reader(data)));
  }
  submitVerifyCollectionOwner(request: MsgSubmitVerifyCollectionOwner): Promise<MsgSubmitVerifyCollectionOwnerResponse> {
    const data = MsgSubmitVerifyCollectionOwner.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'SubmitVerifyCollectionOwner', data);
    return promise.then(data => MsgSubmitVerifyCollectionOwnerResponse.decode(new _m0.Reader(data)));
  }
  setMinimumConfirmation(request: MsgSetMinimumConfirmation): Promise<MsgSetMinimumConfirmationResponse> {
    const data = MsgSetMinimumConfirmation.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'SetMinimumConfirmation', data);
    return promise.then(data => MsgSetMinimumConfirmationResponse.decode(new _m0.Reader(data)));
  }
  createActionSigner(request: MsgCreateActionSigner): Promise<MsgCreateActionSignerResponse> {
    const data = MsgCreateActionSigner.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'CreateActionSigner', data);
    return promise.then(data => MsgCreateActionSignerResponse.decode(new _m0.Reader(data)));
  }
  updateActionSigner(request: MsgUpdateActionSigner): Promise<MsgUpdateActionSignerResponse> {
    const data = MsgUpdateActionSigner.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'UpdateActionSigner', data);
    return promise.then(data => MsgUpdateActionSignerResponse.decode(new _m0.Reader(data)));
  }
  deleteActionSigner(request: MsgDeleteActionSigner): Promise<MsgDeleteActionSignerResponse> {
    const data = MsgDeleteActionSigner.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'DeleteActionSigner', data);
    return promise.then(data => MsgDeleteActionSignerResponse.decode(new _m0.Reader(data)));
  }
  createActionSignerConfig(request: MsgCreateActionSignerConfig): Promise<MsgCreateActionSignerConfigResponse> {
    const data = MsgCreateActionSignerConfig.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'CreateActionSignerConfig', data);
    return promise.then(data => MsgCreateActionSignerConfigResponse.decode(new _m0.Reader(data)));
  }
  updateActionSignerConfig(request: MsgUpdateActionSignerConfig): Promise<MsgUpdateActionSignerConfigResponse> {
    const data = MsgUpdateActionSignerConfig.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'UpdateActionSignerConfig', data);
    return promise.then(data => MsgUpdateActionSignerConfigResponse.decode(new _m0.Reader(data)));
  }
  deleteActionSignerConfig(request: MsgDeleteActionSignerConfig): Promise<MsgDeleteActionSignerConfigResponse> {
    const data = MsgDeleteActionSignerConfig.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'DeleteActionSignerConfig', data);
    return promise.then(data => MsgDeleteActionSignerConfigResponse.decode(new _m0.Reader(data)));
  }
  createSyncActionSigner(request: MsgCreateSyncActionSigner): Promise<MsgCreateSyncActionSignerResponse> {
    const data = MsgCreateSyncActionSigner.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'CreateSyncActionSigner', data);
    return promise.then(data => MsgCreateSyncActionSignerResponse.decode(new _m0.Reader(data)));
  }
  submitSyncActionSigner(request: MsgSubmitSyncActionSigner): Promise<MsgSubmitSyncActionSignerResponse> {
    const data = MsgSubmitSyncActionSigner.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Msg', 'SubmitSyncActionSigner', data);
    return promise.then(data => MsgSubmitSyncActionSignerResponse.decode(new _m0.Reader(data)));
  }
}