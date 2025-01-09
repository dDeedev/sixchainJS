//@ts-nocheck
import { createProtobufRpcClient,QueryClient } from '@cosmjs/stargate';
import * as _m0 from 'protobufjs/minimal';

import { Rpc } from '../helpers';
import { QueryAllAdminRequest, QueryAllAdminResponse, QueryAllGroupRequest, QueryAllGroupResponse, QueryGetAdminRequest, QueryGetAdminResponse, QueryGetGroupRequest, QueryGetGroupResponse, QueryListAdminOfGroupRequest, QueryListAdminOfGroupResponse,QueryParamsRequest, QueryParamsResponse } from './query';
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Group by index. */
  group(request: QueryGetGroupRequest): Promise<QueryGetGroupResponse>;
  /** Queries a list of Group items. */
  groupAll(request?: QueryAllGroupRequest): Promise<QueryAllGroupResponse>;
  /** Queries a Admin by index. */
  admin(request: QueryGetAdminRequest): Promise<QueryGetAdminResponse>;
  /** Queries a list of Admin items. */
  adminAll(request?: QueryAllAdminRequest): Promise<QueryAllAdminResponse>;
  /** Queries a list of ListAdminOfGroup items. */
  listAdminOfGroup(request: QueryListAdminOfGroupRequest): Promise<QueryListAdminOfGroupResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.group = this.group.bind(this);
    this.groupAll = this.groupAll.bind(this);
    this.admin = this.admin.bind(this);
    this.adminAll = this.adminAll.bind(this);
    this.listAdminOfGroup = this.listAdminOfGroup.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.protocoladmin.Query', 'Params', data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  group(request: QueryGetGroupRequest): Promise<QueryGetGroupResponse> {
    const data = QueryGetGroupRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.protocoladmin.Query', 'Group', data);
    return promise.then(data => QueryGetGroupResponse.decode(new _m0.Reader(data)));
  }
  groupAll(request: QueryAllGroupRequest = {
    pagination: undefined
  }): Promise<QueryAllGroupResponse> {
    const data = QueryAllGroupRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.protocoladmin.Query', 'GroupAll', data);
    return promise.then(data => QueryAllGroupResponse.decode(new _m0.Reader(data)));
  }
  admin(request: QueryGetAdminRequest): Promise<QueryGetAdminResponse> {
    const data = QueryGetAdminRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.protocoladmin.Query', 'Admin', data);
    return promise.then(data => QueryGetAdminResponse.decode(new _m0.Reader(data)));
  }
  adminAll(request: QueryAllAdminRequest = {
    pagination: undefined
  }): Promise<QueryAllAdminResponse> {
    const data = QueryAllAdminRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.protocoladmin.Query', 'AdminAll', data);
    return promise.then(data => QueryAllAdminResponse.decode(new _m0.Reader(data)));
  }
  listAdminOfGroup(request: QueryListAdminOfGroupRequest): Promise<QueryListAdminOfGroupResponse> {
    const data = QueryListAdminOfGroupRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.protocoladmin.Query', 'ListAdminOfGroup', data);
    return promise.then(data => QueryListAdminOfGroupResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    group(request: QueryGetGroupRequest): Promise<QueryGetGroupResponse> {
      return queryService.group(request);
    },
    groupAll(request?: QueryAllGroupRequest): Promise<QueryAllGroupResponse> {
      return queryService.groupAll(request);
    },
    admin(request: QueryGetAdminRequest): Promise<QueryGetAdminResponse> {
      return queryService.admin(request);
    },
    adminAll(request?: QueryAllAdminRequest): Promise<QueryAllAdminResponse> {
      return queryService.adminAll(request);
    },
    listAdminOfGroup(request: QueryListAdminOfGroupRequest): Promise<QueryListAdminOfGroupResponse> {
      return queryService.listAdminOfGroup(request);
    }
  };
};