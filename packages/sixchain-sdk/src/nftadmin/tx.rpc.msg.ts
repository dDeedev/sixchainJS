//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Rpc } from '../helpers';
import { MsgGrantPermission, MsgGrantPermissionResponse, MsgRevokePermission, MsgRevokePermissionResponse } from './tx';
/** Msg defines the Msg service. */
export interface Msg {
  grantPermission(request: MsgGrantPermission): Promise<MsgGrantPermissionResponse>;
  revokePermission(request: MsgRevokePermission): Promise<MsgRevokePermissionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grantPermission = this.grantPermission.bind(this);
    this.revokePermission = this.revokePermission.bind(this);
  }
  grantPermission(request: MsgGrantPermission): Promise<MsgGrantPermissionResponse> {
    const data = MsgGrantPermission.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftadmin.Msg', 'GrantPermission', data);
    return promise.then(data => MsgGrantPermissionResponse.decode(new _m0.Reader(data)));
  }
  revokePermission(request: MsgRevokePermission): Promise<MsgRevokePermissionResponse> {
    const data = MsgRevokePermission.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftadmin.Msg', 'RevokePermission', data);
    return promise.then(data => MsgRevokePermissionResponse.decode(new _m0.Reader(data)));
  }
}