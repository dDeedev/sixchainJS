//@ts-nocheck
import { createProtobufRpcClient,QueryClient } from '@cosmjs/stargate';
import * as _m0 from 'protobufjs/minimal';

import { Rpc } from '../helpers';
import { QueryAllActionRequestRequest, QueryAllActionRequestResponse, QueryAllActionSignerConfigRequest, QueryAllActionSignerConfigResponse, QueryAllActionSignerRequest, QueryAllActionSignerResponse, QueryAllCollectionOwnerRequestRequest, QueryAllCollectionOwnerRequestResponse, QueryAllMintRequestRequest, QueryAllMintRequestResponse, QueryAllSyncActionSignerRequest, QueryAllSyncActionSignerResponse,QueryGetActionRequestRequest, QueryGetActionRequestResponse, QueryGetActionSignerConfigRequest, QueryGetActionSignerConfigResponse, QueryGetActionSignerRequest, QueryGetActionSignerResponse, QueryGetBindedSignerRequest, QueryGetBindedSignerResponse, QueryGetCollectionOwnerRequestRequest, QueryGetCollectionOwnerRequestResponse, QueryGetMintRequestRequest, QueryGetMintRequestResponse, QueryGetOracleConfigRequest, QueryGetOracleConfigResponse, QueryGetSyncActionSignerRequest, QueryGetSyncActionSignerResponse, QueryParamsRequest, QueryParamsResponse } from './query';
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a MintRequest by id. */
  mintRequest(request: QueryGetMintRequestRequest): Promise<QueryGetMintRequestResponse>;
  /** Queries a list of MintRequest items. */
  mintRequestAll(request?: QueryAllMintRequestRequest): Promise<QueryAllMintRequestResponse>;
  /** Queries a ActionRequest by id. */
  actionOracleRequest(request: QueryGetActionRequestRequest): Promise<QueryGetActionRequestResponse>;
  /** Queries a list of ActionRequest items. */
  actionRequestAll(request?: QueryAllActionRequestRequest): Promise<QueryAllActionRequestResponse>;
  /** Queries a CollectionOwnerRequest by id. */
  collectionOwnerRequest(request: QueryGetCollectionOwnerRequestRequest): Promise<QueryGetCollectionOwnerRequestResponse>;
  /** Queries a list of CollectionOwnerRequest items. */
  collectionOwnerRequestAll(request?: QueryAllCollectionOwnerRequestRequest): Promise<QueryAllCollectionOwnerRequestResponse>;
  /** Queries a OracleConfig by index. */
  oracleConfig(request?: QueryGetOracleConfigRequest): Promise<QueryGetOracleConfigResponse>;
  /** Queries a ActionSigner by index. */
  actionSigner(request: QueryGetActionSignerRequest): Promise<QueryGetActionSignerResponse>;
  /** Queries a list of ActionSigner items. */
  actionSignerAll(request?: QueryAllActionSignerRequest): Promise<QueryAllActionSignerResponse>;
  /** Queries a BindedSigner by index. */
  bindedSigner(request: QueryGetBindedSignerRequest): Promise<QueryGetBindedSignerResponse>;
  /** Queries a ActionSignerConfig by index. */
  actionSignerConfig(request: QueryGetActionSignerConfigRequest): Promise<QueryGetActionSignerConfigResponse>;
  /** Queries a list of ActionSignerConfig items. */
  actionSignerConfigAll(request?: QueryAllActionSignerConfigRequest): Promise<QueryAllActionSignerConfigResponse>;
  /** Queries a SyncActionSigner by id. */
  syncActionSigner(request: QueryGetSyncActionSignerRequest): Promise<QueryGetSyncActionSignerResponse>;
  /** Queries a list of SyncActionSigner items. */
  syncActionSignerAll(request?: QueryAllSyncActionSignerRequest): Promise<QueryAllSyncActionSignerResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.mintRequest = this.mintRequest.bind(this);
    this.mintRequestAll = this.mintRequestAll.bind(this);
    this.actionOracleRequest = this.actionOracleRequest.bind(this);
    this.actionRequestAll = this.actionRequestAll.bind(this);
    this.collectionOwnerRequest = this.collectionOwnerRequest.bind(this);
    this.collectionOwnerRequestAll = this.collectionOwnerRequestAll.bind(this);
    this.oracleConfig = this.oracleConfig.bind(this);
    this.actionSigner = this.actionSigner.bind(this);
    this.actionSignerAll = this.actionSignerAll.bind(this);
    this.bindedSigner = this.bindedSigner.bind(this);
    this.actionSignerConfig = this.actionSignerConfig.bind(this);
    this.actionSignerConfigAll = this.actionSignerConfigAll.bind(this);
    this.syncActionSigner = this.syncActionSigner.bind(this);
    this.syncActionSignerAll = this.syncActionSignerAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'Params', data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  mintRequest(request: QueryGetMintRequestRequest): Promise<QueryGetMintRequestResponse> {
    const data = QueryGetMintRequestRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'MintRequest', data);
    return promise.then(data => QueryGetMintRequestResponse.decode(new _m0.Reader(data)));
  }
  mintRequestAll(request: QueryAllMintRequestRequest = {
    pagination: undefined
  }): Promise<QueryAllMintRequestResponse> {
    const data = QueryAllMintRequestRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'MintRequestAll', data);
    return promise.then(data => QueryAllMintRequestResponse.decode(new _m0.Reader(data)));
  }
  actionOracleRequest(request: QueryGetActionRequestRequest): Promise<QueryGetActionRequestResponse> {
    const data = QueryGetActionRequestRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'ActionOracleRequest', data);
    return promise.then(data => QueryGetActionRequestResponse.decode(new _m0.Reader(data)));
  }
  actionRequestAll(request: QueryAllActionRequestRequest = {
    pagination: undefined
  }): Promise<QueryAllActionRequestResponse> {
    const data = QueryAllActionRequestRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'ActionRequestAll', data);
    return promise.then(data => QueryAllActionRequestResponse.decode(new _m0.Reader(data)));
  }
  collectionOwnerRequest(request: QueryGetCollectionOwnerRequestRequest): Promise<QueryGetCollectionOwnerRequestResponse> {
    const data = QueryGetCollectionOwnerRequestRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'CollectionOwnerRequest', data);
    return promise.then(data => QueryGetCollectionOwnerRequestResponse.decode(new _m0.Reader(data)));
  }
  collectionOwnerRequestAll(request: QueryAllCollectionOwnerRequestRequest = {
    pagination: undefined
  }): Promise<QueryAllCollectionOwnerRequestResponse> {
    const data = QueryAllCollectionOwnerRequestRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'CollectionOwnerRequestAll', data);
    return promise.then(data => QueryAllCollectionOwnerRequestResponse.decode(new _m0.Reader(data)));
  }
  oracleConfig(request: QueryGetOracleConfigRequest = {}): Promise<QueryGetOracleConfigResponse> {
    const data = QueryGetOracleConfigRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'OracleConfig', data);
    return promise.then(data => QueryGetOracleConfigResponse.decode(new _m0.Reader(data)));
  }
  actionSigner(request: QueryGetActionSignerRequest): Promise<QueryGetActionSignerResponse> {
    const data = QueryGetActionSignerRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'ActionSigner', data);
    return promise.then(data => QueryGetActionSignerResponse.decode(new _m0.Reader(data)));
  }
  actionSignerAll(request: QueryAllActionSignerRequest = {
    pagination: undefined
  }): Promise<QueryAllActionSignerResponse> {
    const data = QueryAllActionSignerRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'ActionSignerAll', data);
    return promise.then(data => QueryAllActionSignerResponse.decode(new _m0.Reader(data)));
  }
  bindedSigner(request: QueryGetBindedSignerRequest): Promise<QueryGetBindedSignerResponse> {
    const data = QueryGetBindedSignerRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'BindedSigner', data);
    return promise.then(data => QueryGetBindedSignerResponse.decode(new _m0.Reader(data)));
  }
  actionSignerConfig(request: QueryGetActionSignerConfigRequest): Promise<QueryGetActionSignerConfigResponse> {
    const data = QueryGetActionSignerConfigRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'ActionSignerConfig', data);
    return promise.then(data => QueryGetActionSignerConfigResponse.decode(new _m0.Reader(data)));
  }
  actionSignerConfigAll(request: QueryAllActionSignerConfigRequest = {
    pagination: undefined
  }): Promise<QueryAllActionSignerConfigResponse> {
    const data = QueryAllActionSignerConfigRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'ActionSignerConfigAll', data);
    return promise.then(data => QueryAllActionSignerConfigResponse.decode(new _m0.Reader(data)));
  }
  syncActionSigner(request: QueryGetSyncActionSignerRequest): Promise<QueryGetSyncActionSignerResponse> {
    const data = QueryGetSyncActionSignerRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'SyncActionSigner', data);
    return promise.then(data => QueryGetSyncActionSignerResponse.decode(new _m0.Reader(data)));
  }
  syncActionSignerAll(request: QueryAllSyncActionSignerRequest = {
    pagination: undefined
  }): Promise<QueryAllSyncActionSignerResponse> {
    const data = QueryAllSyncActionSignerRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftoracle.Query', 'SyncActionSignerAll', data);
    return promise.then(data => QueryAllSyncActionSignerResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    mintRequest(request: QueryGetMintRequestRequest): Promise<QueryGetMintRequestResponse> {
      return queryService.mintRequest(request);
    },
    mintRequestAll(request?: QueryAllMintRequestRequest): Promise<QueryAllMintRequestResponse> {
      return queryService.mintRequestAll(request);
    },
    actionOracleRequest(request: QueryGetActionRequestRequest): Promise<QueryGetActionRequestResponse> {
      return queryService.actionOracleRequest(request);
    },
    actionRequestAll(request?: QueryAllActionRequestRequest): Promise<QueryAllActionRequestResponse> {
      return queryService.actionRequestAll(request);
    },
    collectionOwnerRequest(request: QueryGetCollectionOwnerRequestRequest): Promise<QueryGetCollectionOwnerRequestResponse> {
      return queryService.collectionOwnerRequest(request);
    },
    collectionOwnerRequestAll(request?: QueryAllCollectionOwnerRequestRequest): Promise<QueryAllCollectionOwnerRequestResponse> {
      return queryService.collectionOwnerRequestAll(request);
    },
    oracleConfig(request?: QueryGetOracleConfigRequest): Promise<QueryGetOracleConfigResponse> {
      return queryService.oracleConfig(request);
    },
    actionSigner(request: QueryGetActionSignerRequest): Promise<QueryGetActionSignerResponse> {
      return queryService.actionSigner(request);
    },
    actionSignerAll(request?: QueryAllActionSignerRequest): Promise<QueryAllActionSignerResponse> {
      return queryService.actionSignerAll(request);
    },
    bindedSigner(request: QueryGetBindedSignerRequest): Promise<QueryGetBindedSignerResponse> {
      return queryService.bindedSigner(request);
    },
    actionSignerConfig(request: QueryGetActionSignerConfigRequest): Promise<QueryGetActionSignerConfigResponse> {
      return queryService.actionSignerConfig(request);
    },
    actionSignerConfigAll(request?: QueryAllActionSignerConfigRequest): Promise<QueryAllActionSignerConfigResponse> {
      return queryService.actionSignerConfigAll(request);
    },
    syncActionSigner(request: QueryGetSyncActionSignerRequest): Promise<QueryGetSyncActionSignerResponse> {
      return queryService.syncActionSigner(request);
    },
    syncActionSignerAll(request?: QueryAllSyncActionSignerRequest): Promise<QueryAllSyncActionSignerResponse> {
      return queryService.syncActionSignerAll(request);
    }
  };
};