//@ts-nocheck
import { createProtobufRpcClient,QueryClient } from '@cosmjs/stargate';
import * as _m0 from 'protobufjs/minimal';

import { Rpc } from '../helpers';
import { QueryAllMintpermRequest, QueryAllMintpermResponse, QueryAllTokenBurnRequest, QueryAllTokenBurnResponse,QueryAllTokenRequest, QueryAllTokenResponse, QueryBurnsRequest, QueryBurnsResponse, QueryGetMintpermRequest, QueryGetMintpermResponse, QueryGetOptionsRequest, QueryGetOptionsResponse, QueryGetTokenBurnRequest, QueryGetTokenBurnResponse, QueryGetTokenRequest, QueryGetTokenResponse, QueryParamsRequest, QueryParamsResponse } from './query';
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Token by index. */
  token(request: QueryGetTokenRequest): Promise<QueryGetTokenResponse>;
  /** Queries a list of Token items. */
  tokenAll(request?: QueryAllTokenRequest): Promise<QueryAllTokenResponse>;
  /** Queries a Mintperm by index. */
  mintperm(request: QueryGetMintpermRequest): Promise<QueryGetMintpermResponse>;
  /** Queries a list of Mintperm items. */
  mintpermAll(request?: QueryAllMintpermRequest): Promise<QueryAllMintpermResponse>;
  /** Queries a Options by index. */
  options(request?: QueryGetOptionsRequest): Promise<QueryGetOptionsResponse>;
  /** Queries a list of Burns items. */
  burns(request?: QueryBurnsRequest): Promise<QueryBurnsResponse>;
  /** Queries a TokenBurn by index. */
  tokenBurn(request: QueryGetTokenBurnRequest): Promise<QueryGetTokenBurnResponse>;
  /** Queries a list of TokenBurn items. */
  tokenBurnAll(request?: QueryAllTokenBurnRequest): Promise<QueryAllTokenBurnResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.token = this.token.bind(this);
    this.tokenAll = this.tokenAll.bind(this);
    this.mintperm = this.mintperm.bind(this);
    this.mintpermAll = this.mintpermAll.bind(this);
    this.options = this.options.bind(this);
    this.burns = this.burns.bind(this);
    this.tokenBurn = this.tokenBurn.bind(this);
    this.tokenBurnAll = this.tokenBurnAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.tokenmngr.Query', 'Params', data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  token(request: QueryGetTokenRequest): Promise<QueryGetTokenResponse> {
    const data = QueryGetTokenRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.tokenmngr.Query', 'Token', data);
    return promise.then(data => QueryGetTokenResponse.decode(new _m0.Reader(data)));
  }
  tokenAll(request: QueryAllTokenRequest = {
    pagination: undefined
  }): Promise<QueryAllTokenResponse> {
    const data = QueryAllTokenRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.tokenmngr.Query', 'TokenAll', data);
    return promise.then(data => QueryAllTokenResponse.decode(new _m0.Reader(data)));
  }
  mintperm(request: QueryGetMintpermRequest): Promise<QueryGetMintpermResponse> {
    const data = QueryGetMintpermRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.tokenmngr.Query', 'Mintperm', data);
    return promise.then(data => QueryGetMintpermResponse.decode(new _m0.Reader(data)));
  }
  mintpermAll(request: QueryAllMintpermRequest = {
    pagination: undefined
  }): Promise<QueryAllMintpermResponse> {
    const data = QueryAllMintpermRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.tokenmngr.Query', 'MintpermAll', data);
    return promise.then(data => QueryAllMintpermResponse.decode(new _m0.Reader(data)));
  }
  options(request: QueryGetOptionsRequest = {}): Promise<QueryGetOptionsResponse> {
    const data = QueryGetOptionsRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.tokenmngr.Query', 'Options', data);
    return promise.then(data => QueryGetOptionsResponse.decode(new _m0.Reader(data)));
  }
  burns(request: QueryBurnsRequest = {
    pagination: undefined
  }): Promise<QueryBurnsResponse> {
    const data = QueryBurnsRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.tokenmngr.Query', 'Burns', data);
    return promise.then(data => QueryBurnsResponse.decode(new _m0.Reader(data)));
  }
  tokenBurn(request: QueryGetTokenBurnRequest): Promise<QueryGetTokenBurnResponse> {
    const data = QueryGetTokenBurnRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.tokenmngr.Query', 'TokenBurn', data);
    return promise.then(data => QueryGetTokenBurnResponse.decode(new _m0.Reader(data)));
  }
  tokenBurnAll(request: QueryAllTokenBurnRequest = {
    pagination: undefined
  }): Promise<QueryAllTokenBurnResponse> {
    const data = QueryAllTokenBurnRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.tokenmngr.Query', 'TokenBurnAll', data);
    return promise.then(data => QueryAllTokenBurnResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    token(request: QueryGetTokenRequest): Promise<QueryGetTokenResponse> {
      return queryService.token(request);
    },
    tokenAll(request?: QueryAllTokenRequest): Promise<QueryAllTokenResponse> {
      return queryService.tokenAll(request);
    },
    mintperm(request: QueryGetMintpermRequest): Promise<QueryGetMintpermResponse> {
      return queryService.mintperm(request);
    },
    mintpermAll(request?: QueryAllMintpermRequest): Promise<QueryAllMintpermResponse> {
      return queryService.mintpermAll(request);
    },
    options(request?: QueryGetOptionsRequest): Promise<QueryGetOptionsResponse> {
      return queryService.options(request);
    },
    burns(request?: QueryBurnsRequest): Promise<QueryBurnsResponse> {
      return queryService.burns(request);
    },
    tokenBurn(request: QueryGetTokenBurnRequest): Promise<QueryGetTokenBurnResponse> {
      return queryService.tokenBurn(request);
    },
    tokenBurnAll(request?: QueryAllTokenBurnRequest): Promise<QueryAllTokenBurnResponse> {
      return queryService.tokenBurnAll(request);
    }
  };
};