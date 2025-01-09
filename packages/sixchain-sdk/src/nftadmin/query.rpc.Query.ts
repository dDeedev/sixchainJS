//@ts-nocheck
import { createProtobufRpcClient,QueryClient } from '@cosmjs/stargate';
import * as _m0 from 'protobufjs/minimal';

import { Rpc } from '../helpers';
import { QueryGetAuthorizationRequest, QueryGetAuthorizationResponse,QueryParamsRequest, QueryParamsResponse } from './query';
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Authorization by index. */
  authorization(request?: QueryGetAuthorizationRequest): Promise<QueryGetAuthorizationResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.authorization = this.authorization.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftadmin.Query', 'Params', data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  authorization(request: QueryGetAuthorizationRequest = {}): Promise<QueryGetAuthorizationResponse> {
    const data = QueryGetAuthorizationRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftadmin.Query', 'Authorization', data);
    return promise.then(data => QueryGetAuthorizationResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    authorization(request?: QueryGetAuthorizationRequest): Promise<QueryGetAuthorizationResponse> {
      return queryService.authorization(request);
    }
  };
};