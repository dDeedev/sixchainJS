//@ts-nocheck
import { createProtobufRpcClient,QueryClient } from '@cosmjs/stargate';
import * as _m0 from 'protobufjs/minimal';

import { Rpc } from '../helpers';
import { QueryAllActionByRefIdRequest, QueryAllActionByRefIdResponse, QueryAllActionExecutorRequest, QueryAllActionExecutorResponse, QueryAllActionOfSchemaRequest, QueryAllActionOfSchemaResponse, QueryAllDisableVirtualSchemaRequest, QueryAllDisableVirtualSchemaResponse, QueryAllExecutorOfSchemaRequest, QueryAllExecutorOfSchemaResponse, QueryAllMetadataCreatorRequest, QueryAllMetadataCreatorResponse, QueryAllNftDataRequest, QueryAllNftDataResponse, QueryAllNFTSchemaByContractRequest, QueryAllNFTSchemaByContractResponse, QueryAllNFTSchemaRequest, QueryAllNFTSchemaResponse, QueryAllOrganizationRequest, QueryAllOrganizationResponse, QueryAllSchemaAttributeRequest, QueryAllSchemaAttributeResponse, QueryAllVirtualActionRequest, QueryAllVirtualActionResponse, QueryAllVirtualSchemaProposalRequest, QueryAllVirtualSchemaProposalResponse,QueryAllVirtualSchemaRequest, QueryAllVirtualSchemaResponse, QueryGetActionByRefIdRequest, QueryGetActionByRefIdResponse, QueryGetActionExecutorRequest, QueryGetActionExecutorResponse, QueryGetActionOfSchemaRequest, QueryGetActionOfSchemaResponse, QueryGetDisableVirtualSchemaRequest, QueryGetDisableVirtualSchemaResponse, QueryGetExecutorOfSchemaRequest, QueryGetExecutorOfSchemaResponse, QueryGetMetadataCreatorRequest, QueryGetMetadataCreatorResponse, QueryGetNftCollectionRequest, QueryGetNftCollectionResponse, QueryGetNftDataRequest, QueryGetNftDataResponse, QueryGetNFTFeeBalanceRequest, QueryGetNFTFeeBalanceResponse, QueryGetNFTFeeConfigRequest, QueryGetNFTFeeConfigResponse, QueryGetNFTSchemaByContractRequest, QueryGetNFTSchemaByContractResponse, QueryGetNFTSchemaRequest, QueryGetNFTSchemaResponse, QueryGetOrganizationRequest, QueryGetOrganizationResponse, QueryGetSchemaAttributeRequest, QueryGetSchemaAttributeResponse, QueryGetVirtualActionRequest, QueryGetVirtualActionResponse, QueryGetVirtualSchemaProposalRequest, QueryGetVirtualSchemaProposalResponse, QueryGetVirtualSchemaRequest, QueryGetVirtualSchemaResponse, QueryListAttributeBySchemaRequest, QueryListAttributeBySchemaResponse, QueryParamsRequest, QueryParamsResponse } from './query';
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a NFTSchema by index. */
  nFTSchema(request: QueryGetNFTSchemaRequest): Promise<QueryGetNFTSchemaResponse>;
  /** Queries a list of NFTSchema items. */
  nFTSchemaAll(request?: QueryAllNFTSchemaRequest): Promise<QueryAllNFTSchemaResponse>;
  /** Queries a NftData by index. */
  nftData(request: QueryGetNftDataRequest): Promise<QueryGetNftDataResponse>;
  /** Queries a list of NftData items. */
  nftDataAll(request: QueryAllNftDataRequest): Promise<QueryAllNftDataResponse>;
  /** Queries a ActionByRefId by index. */
  actionByRefId(request: QueryGetActionByRefIdRequest): Promise<QueryGetActionByRefIdResponse>;
  /** Queries a list of ActionByRefId items. */
  actionByRefIdAll(request?: QueryAllActionByRefIdRequest): Promise<QueryAllActionByRefIdResponse>;
  /** Queries a Organization by index. */
  organization(request: QueryGetOrganizationRequest): Promise<QueryGetOrganizationResponse>;
  /** Queries a list of Organization items. */
  organizationAll(request?: QueryAllOrganizationRequest): Promise<QueryAllOrganizationResponse>;
  /** Queries a NftCollection by index. */
  nftCollection(request: QueryGetNftCollectionRequest): Promise<QueryGetNftCollectionResponse>;
  /** Queries a NFTSchemaByContract by index. */
  nFTSchemaByContract(request: QueryGetNFTSchemaByContractRequest): Promise<QueryGetNFTSchemaByContractResponse>;
  /** Queries a list of NFTSchemaByContract items. */
  nFTSchemaByContractAll(request?: QueryAllNFTSchemaByContractRequest): Promise<QueryAllNFTSchemaByContractResponse>;
  /** Queries a NFTFeeConfig by index. */
  nFTFeeConfig(request?: QueryGetNFTFeeConfigRequest): Promise<QueryGetNFTFeeConfigResponse>;
  /** Queries a NFTFeeBalance by index. */
  nFTFeeBalance(request?: QueryGetNFTFeeBalanceRequest): Promise<QueryGetNFTFeeBalanceResponse>;
  /** Queries a MetadataCreator by index. */
  metadataCreator(request: QueryGetMetadataCreatorRequest): Promise<QueryGetMetadataCreatorResponse>;
  /** Queries a list of MetadataCreator items. */
  metadataCreatorAll(request?: QueryAllMetadataCreatorRequest): Promise<QueryAllMetadataCreatorResponse>;
  /** Queries a ActionExecutor by index. */
  actionExecutor(request: QueryGetActionExecutorRequest): Promise<QueryGetActionExecutorResponse>;
  /** Queries a list of ActionExecutor items. */
  actionExecutorAll(request?: QueryAllActionExecutorRequest): Promise<QueryAllActionExecutorResponse>;
  /** Queries a SchemaAttribute by index. */
  schemaAttribute(request: QueryGetSchemaAttributeRequest): Promise<QueryGetSchemaAttributeResponse>;
  /** Queries a list of SchemaAttribute items. */
  schemaAttributeAll(request?: QueryAllSchemaAttributeRequest): Promise<QueryAllSchemaAttributeResponse>;
  /** Queries a list of ListAttributeBySchema items. */
  listAttributeBySchema(request: QueryListAttributeBySchemaRequest): Promise<QueryListAttributeBySchemaResponse>;
  /** Queries a ActionOfSchema by index. */
  actionOfSchema(request: QueryGetActionOfSchemaRequest): Promise<QueryGetActionOfSchemaResponse>;
  /** Queries a list of ActionOfSchema items. */
  actionOfSchemaAll(request?: QueryAllActionOfSchemaRequest): Promise<QueryAllActionOfSchemaResponse>;
  /** Queries a ExecutorOfSchema by index. */
  executorOfSchema(request: QueryGetExecutorOfSchemaRequest): Promise<QueryGetExecutorOfSchemaResponse>;
  /** Queries a list of ExecutorOfSchema items. */
  executorOfSchemaAll(request?: QueryAllExecutorOfSchemaRequest): Promise<QueryAllExecutorOfSchemaResponse>;
  /** Queries a Virtual by index */
  virtualAction(request: QueryGetVirtualActionRequest): Promise<QueryGetVirtualActionResponse>;
  /** Queries a list of Virtual items. */
  virtualActionAll(request?: QueryAllVirtualActionRequest): Promise<QueryAllVirtualActionResponse>;
  /** Queries a VirtualSchema by index. */
  virtualSchema(request: QueryGetVirtualSchemaRequest): Promise<QueryGetVirtualSchemaResponse>;
  /** Queries a list of VirtualSchema items. */
  virtualSchemaAll(request?: QueryAllVirtualSchemaRequest): Promise<QueryAllVirtualSchemaResponse>;
  /** Queries a DisableVirtualSchema by index. */
  disableVirtualSchema(request: QueryGetDisableVirtualSchemaRequest): Promise<QueryGetDisableVirtualSchemaResponse>;
  /** Queries a list of DisableVirtualSchema items. */
  disableVirtualSchemaAll(request?: QueryAllDisableVirtualSchemaRequest): Promise<QueryAllDisableVirtualSchemaResponse>;
  /** Queries a VirtualSchemaProposal by index. */
  virtualSchemaProposal(request: QueryGetVirtualSchemaProposalRequest): Promise<QueryGetVirtualSchemaProposalResponse>;
  /** Queries a list of VirtualSchemaProposal items. */
  virtualSchemaProposalAll(request?: QueryAllVirtualSchemaProposalRequest): Promise<QueryAllVirtualSchemaProposalResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.nFTSchema = this.nFTSchema.bind(this);
    this.nFTSchemaAll = this.nFTSchemaAll.bind(this);
    this.nftData = this.nftData.bind(this);
    this.nftDataAll = this.nftDataAll.bind(this);
    this.actionByRefId = this.actionByRefId.bind(this);
    this.actionByRefIdAll = this.actionByRefIdAll.bind(this);
    this.organization = this.organization.bind(this);
    this.organizationAll = this.organizationAll.bind(this);
    this.nftCollection = this.nftCollection.bind(this);
    this.nFTSchemaByContract = this.nFTSchemaByContract.bind(this);
    this.nFTSchemaByContractAll = this.nFTSchemaByContractAll.bind(this);
    this.nFTFeeConfig = this.nFTFeeConfig.bind(this);
    this.nFTFeeBalance = this.nFTFeeBalance.bind(this);
    this.metadataCreator = this.metadataCreator.bind(this);
    this.metadataCreatorAll = this.metadataCreatorAll.bind(this);
    this.actionExecutor = this.actionExecutor.bind(this);
    this.actionExecutorAll = this.actionExecutorAll.bind(this);
    this.schemaAttribute = this.schemaAttribute.bind(this);
    this.schemaAttributeAll = this.schemaAttributeAll.bind(this);
    this.listAttributeBySchema = this.listAttributeBySchema.bind(this);
    this.actionOfSchema = this.actionOfSchema.bind(this);
    this.actionOfSchemaAll = this.actionOfSchemaAll.bind(this);
    this.executorOfSchema = this.executorOfSchema.bind(this);
    this.executorOfSchemaAll = this.executorOfSchemaAll.bind(this);
    this.virtualAction = this.virtualAction.bind(this);
    this.virtualActionAll = this.virtualActionAll.bind(this);
    this.virtualSchema = this.virtualSchema.bind(this);
    this.virtualSchemaAll = this.virtualSchemaAll.bind(this);
    this.disableVirtualSchema = this.disableVirtualSchema.bind(this);
    this.disableVirtualSchemaAll = this.disableVirtualSchemaAll.bind(this);
    this.virtualSchemaProposal = this.virtualSchemaProposal.bind(this);
    this.virtualSchemaProposalAll = this.virtualSchemaProposalAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'Params', data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  nFTSchema(request: QueryGetNFTSchemaRequest): Promise<QueryGetNFTSchemaResponse> {
    const data = QueryGetNFTSchemaRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'NFTSchema', data);
    return promise.then(data => QueryGetNFTSchemaResponse.decode(new _m0.Reader(data)));
  }
  nFTSchemaAll(request: QueryAllNFTSchemaRequest = {
    pagination: undefined
  }): Promise<QueryAllNFTSchemaResponse> {
    const data = QueryAllNFTSchemaRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'NFTSchemaAll', data);
    return promise.then(data => QueryAllNFTSchemaResponse.decode(new _m0.Reader(data)));
  }
  nftData(request: QueryGetNftDataRequest): Promise<QueryGetNftDataResponse> {
    const data = QueryGetNftDataRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'NftData', data);
    return promise.then(data => QueryGetNftDataResponse.decode(new _m0.Reader(data)));
  }
  nftDataAll(request: QueryAllNftDataRequest): Promise<QueryAllNftDataResponse> {
    const data = QueryAllNftDataRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'NftDataAll', data);
    return promise.then(data => QueryAllNftDataResponse.decode(new _m0.Reader(data)));
  }
  actionByRefId(request: QueryGetActionByRefIdRequest): Promise<QueryGetActionByRefIdResponse> {
    const data = QueryGetActionByRefIdRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'ActionByRefId', data);
    return promise.then(data => QueryGetActionByRefIdResponse.decode(new _m0.Reader(data)));
  }
  actionByRefIdAll(request: QueryAllActionByRefIdRequest = {
    pagination: undefined
  }): Promise<QueryAllActionByRefIdResponse> {
    const data = QueryAllActionByRefIdRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'ActionByRefIdAll', data);
    return promise.then(data => QueryAllActionByRefIdResponse.decode(new _m0.Reader(data)));
  }
  organization(request: QueryGetOrganizationRequest): Promise<QueryGetOrganizationResponse> {
    const data = QueryGetOrganizationRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'Organization', data);
    return promise.then(data => QueryGetOrganizationResponse.decode(new _m0.Reader(data)));
  }
  organizationAll(request: QueryAllOrganizationRequest = {
    pagination: undefined
  }): Promise<QueryAllOrganizationResponse> {
    const data = QueryAllOrganizationRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'OrganizationAll', data);
    return promise.then(data => QueryAllOrganizationResponse.decode(new _m0.Reader(data)));
  }
  nftCollection(request: QueryGetNftCollectionRequest): Promise<QueryGetNftCollectionResponse> {
    const data = QueryGetNftCollectionRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'NftCollection', data);
    return promise.then(data => QueryGetNftCollectionResponse.decode(new _m0.Reader(data)));
  }
  nFTSchemaByContract(request: QueryGetNFTSchemaByContractRequest): Promise<QueryGetNFTSchemaByContractResponse> {
    const data = QueryGetNFTSchemaByContractRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'NFTSchemaByContract', data);
    return promise.then(data => QueryGetNFTSchemaByContractResponse.decode(new _m0.Reader(data)));
  }
  nFTSchemaByContractAll(request: QueryAllNFTSchemaByContractRequest = {
    pagination: undefined
  }): Promise<QueryAllNFTSchemaByContractResponse> {
    const data = QueryAllNFTSchemaByContractRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'NFTSchemaByContractAll', data);
    return promise.then(data => QueryAllNFTSchemaByContractResponse.decode(new _m0.Reader(data)));
  }
  nFTFeeConfig(request: QueryGetNFTFeeConfigRequest = {}): Promise<QueryGetNFTFeeConfigResponse> {
    const data = QueryGetNFTFeeConfigRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'NFTFeeConfig', data);
    return promise.then(data => QueryGetNFTFeeConfigResponse.decode(new _m0.Reader(data)));
  }
  nFTFeeBalance(request: QueryGetNFTFeeBalanceRequest = {}): Promise<QueryGetNFTFeeBalanceResponse> {
    const data = QueryGetNFTFeeBalanceRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'NFTFeeBalance', data);
    return promise.then(data => QueryGetNFTFeeBalanceResponse.decode(new _m0.Reader(data)));
  }
  metadataCreator(request: QueryGetMetadataCreatorRequest): Promise<QueryGetMetadataCreatorResponse> {
    const data = QueryGetMetadataCreatorRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'MetadataCreator', data);
    return promise.then(data => QueryGetMetadataCreatorResponse.decode(new _m0.Reader(data)));
  }
  metadataCreatorAll(request: QueryAllMetadataCreatorRequest = {
    pagination: undefined
  }): Promise<QueryAllMetadataCreatorResponse> {
    const data = QueryAllMetadataCreatorRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'MetadataCreatorAll', data);
    return promise.then(data => QueryAllMetadataCreatorResponse.decode(new _m0.Reader(data)));
  }
  actionExecutor(request: QueryGetActionExecutorRequest): Promise<QueryGetActionExecutorResponse> {
    const data = QueryGetActionExecutorRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'ActionExecutor', data);
    return promise.then(data => QueryGetActionExecutorResponse.decode(new _m0.Reader(data)));
  }
  actionExecutorAll(request: QueryAllActionExecutorRequest = {
    pagination: undefined
  }): Promise<QueryAllActionExecutorResponse> {
    const data = QueryAllActionExecutorRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'ActionExecutorAll', data);
    return promise.then(data => QueryAllActionExecutorResponse.decode(new _m0.Reader(data)));
  }
  schemaAttribute(request: QueryGetSchemaAttributeRequest): Promise<QueryGetSchemaAttributeResponse> {
    const data = QueryGetSchemaAttributeRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'SchemaAttribute', data);
    return promise.then(data => QueryGetSchemaAttributeResponse.decode(new _m0.Reader(data)));
  }
  schemaAttributeAll(request: QueryAllSchemaAttributeRequest = {
    pagination: undefined
  }): Promise<QueryAllSchemaAttributeResponse> {
    const data = QueryAllSchemaAttributeRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'SchemaAttributeAll', data);
    return promise.then(data => QueryAllSchemaAttributeResponse.decode(new _m0.Reader(data)));
  }
  listAttributeBySchema(request: QueryListAttributeBySchemaRequest): Promise<QueryListAttributeBySchemaResponse> {
    const data = QueryListAttributeBySchemaRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'ListAttributeBySchema', data);
    return promise.then(data => QueryListAttributeBySchemaResponse.decode(new _m0.Reader(data)));
  }
  actionOfSchema(request: QueryGetActionOfSchemaRequest): Promise<QueryGetActionOfSchemaResponse> {
    const data = QueryGetActionOfSchemaRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'ActionOfSchema', data);
    return promise.then(data => QueryGetActionOfSchemaResponse.decode(new _m0.Reader(data)));
  }
  actionOfSchemaAll(request: QueryAllActionOfSchemaRequest = {
    pagination: undefined
  }): Promise<QueryAllActionOfSchemaResponse> {
    const data = QueryAllActionOfSchemaRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'ActionOfSchemaAll', data);
    return promise.then(data => QueryAllActionOfSchemaResponse.decode(new _m0.Reader(data)));
  }
  executorOfSchema(request: QueryGetExecutorOfSchemaRequest): Promise<QueryGetExecutorOfSchemaResponse> {
    const data = QueryGetExecutorOfSchemaRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'ExecutorOfSchema', data);
    return promise.then(data => QueryGetExecutorOfSchemaResponse.decode(new _m0.Reader(data)));
  }
  executorOfSchemaAll(request: QueryAllExecutorOfSchemaRequest = {
    pagination: undefined
  }): Promise<QueryAllExecutorOfSchemaResponse> {
    const data = QueryAllExecutorOfSchemaRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'ExecutorOfSchemaAll', data);
    return promise.then(data => QueryAllExecutorOfSchemaResponse.decode(new _m0.Reader(data)));
  }
  virtualAction(request: QueryGetVirtualActionRequest): Promise<QueryGetVirtualActionResponse> {
    const data = QueryGetVirtualActionRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'VirtualAction', data);
    return promise.then(data => QueryGetVirtualActionResponse.decode(new _m0.Reader(data)));
  }
  virtualActionAll(request: QueryAllVirtualActionRequest = {
    pagination: undefined
  }): Promise<QueryAllVirtualActionResponse> {
    const data = QueryAllVirtualActionRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'VirtualActionAll', data);
    return promise.then(data => QueryAllVirtualActionResponse.decode(new _m0.Reader(data)));
  }
  virtualSchema(request: QueryGetVirtualSchemaRequest): Promise<QueryGetVirtualSchemaResponse> {
    const data = QueryGetVirtualSchemaRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'VirtualSchema', data);
    return promise.then(data => QueryGetVirtualSchemaResponse.decode(new _m0.Reader(data)));
  }
  virtualSchemaAll(request: QueryAllVirtualSchemaRequest = {
    pagination: undefined
  }): Promise<QueryAllVirtualSchemaResponse> {
    const data = QueryAllVirtualSchemaRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'VirtualSchemaAll', data);
    return promise.then(data => QueryAllVirtualSchemaResponse.decode(new _m0.Reader(data)));
  }
  disableVirtualSchema(request: QueryGetDisableVirtualSchemaRequest): Promise<QueryGetDisableVirtualSchemaResponse> {
    const data = QueryGetDisableVirtualSchemaRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'DisableVirtualSchema', data);
    return promise.then(data => QueryGetDisableVirtualSchemaResponse.decode(new _m0.Reader(data)));
  }
  disableVirtualSchemaAll(request: QueryAllDisableVirtualSchemaRequest = {
    pagination: undefined
  }): Promise<QueryAllDisableVirtualSchemaResponse> {
    const data = QueryAllDisableVirtualSchemaRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'DisableVirtualSchemaAll', data);
    return promise.then(data => QueryAllDisableVirtualSchemaResponse.decode(new _m0.Reader(data)));
  }
  virtualSchemaProposal(request: QueryGetVirtualSchemaProposalRequest): Promise<QueryGetVirtualSchemaProposalResponse> {
    const data = QueryGetVirtualSchemaProposalRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'VirtualSchemaProposal', data);
    return promise.then(data => QueryGetVirtualSchemaProposalResponse.decode(new _m0.Reader(data)));
  }
  virtualSchemaProposalAll(request: QueryAllVirtualSchemaProposalRequest = {
    pagination: undefined
  }): Promise<QueryAllVirtualSchemaProposalResponse> {
    const data = QueryAllVirtualSchemaProposalRequest.encode(request).finish();
    const promise = this.rpc.request('thesixnetwork.sixprotocol.nftmngr.Query', 'VirtualSchemaProposalAll', data);
    return promise.then(data => QueryAllVirtualSchemaProposalResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    nFTSchema(request: QueryGetNFTSchemaRequest): Promise<QueryGetNFTSchemaResponse> {
      return queryService.nFTSchema(request);
    },
    nFTSchemaAll(request?: QueryAllNFTSchemaRequest): Promise<QueryAllNFTSchemaResponse> {
      return queryService.nFTSchemaAll(request);
    },
    nftData(request: QueryGetNftDataRequest): Promise<QueryGetNftDataResponse> {
      return queryService.nftData(request);
    },
    nftDataAll(request: QueryAllNftDataRequest): Promise<QueryAllNftDataResponse> {
      return queryService.nftDataAll(request);
    },
    actionByRefId(request: QueryGetActionByRefIdRequest): Promise<QueryGetActionByRefIdResponse> {
      return queryService.actionByRefId(request);
    },
    actionByRefIdAll(request?: QueryAllActionByRefIdRequest): Promise<QueryAllActionByRefIdResponse> {
      return queryService.actionByRefIdAll(request);
    },
    organization(request: QueryGetOrganizationRequest): Promise<QueryGetOrganizationResponse> {
      return queryService.organization(request);
    },
    organizationAll(request?: QueryAllOrganizationRequest): Promise<QueryAllOrganizationResponse> {
      return queryService.organizationAll(request);
    },
    nftCollection(request: QueryGetNftCollectionRequest): Promise<QueryGetNftCollectionResponse> {
      return queryService.nftCollection(request);
    },
    nFTSchemaByContract(request: QueryGetNFTSchemaByContractRequest): Promise<QueryGetNFTSchemaByContractResponse> {
      return queryService.nFTSchemaByContract(request);
    },
    nFTSchemaByContractAll(request?: QueryAllNFTSchemaByContractRequest): Promise<QueryAllNFTSchemaByContractResponse> {
      return queryService.nFTSchemaByContractAll(request);
    },
    nFTFeeConfig(request?: QueryGetNFTFeeConfigRequest): Promise<QueryGetNFTFeeConfigResponse> {
      return queryService.nFTFeeConfig(request);
    },
    nFTFeeBalance(request?: QueryGetNFTFeeBalanceRequest): Promise<QueryGetNFTFeeBalanceResponse> {
      return queryService.nFTFeeBalance(request);
    },
    metadataCreator(request: QueryGetMetadataCreatorRequest): Promise<QueryGetMetadataCreatorResponse> {
      return queryService.metadataCreator(request);
    },
    metadataCreatorAll(request?: QueryAllMetadataCreatorRequest): Promise<QueryAllMetadataCreatorResponse> {
      return queryService.metadataCreatorAll(request);
    },
    actionExecutor(request: QueryGetActionExecutorRequest): Promise<QueryGetActionExecutorResponse> {
      return queryService.actionExecutor(request);
    },
    actionExecutorAll(request?: QueryAllActionExecutorRequest): Promise<QueryAllActionExecutorResponse> {
      return queryService.actionExecutorAll(request);
    },
    schemaAttribute(request: QueryGetSchemaAttributeRequest): Promise<QueryGetSchemaAttributeResponse> {
      return queryService.schemaAttribute(request);
    },
    schemaAttributeAll(request?: QueryAllSchemaAttributeRequest): Promise<QueryAllSchemaAttributeResponse> {
      return queryService.schemaAttributeAll(request);
    },
    listAttributeBySchema(request: QueryListAttributeBySchemaRequest): Promise<QueryListAttributeBySchemaResponse> {
      return queryService.listAttributeBySchema(request);
    },
    actionOfSchema(request: QueryGetActionOfSchemaRequest): Promise<QueryGetActionOfSchemaResponse> {
      return queryService.actionOfSchema(request);
    },
    actionOfSchemaAll(request?: QueryAllActionOfSchemaRequest): Promise<QueryAllActionOfSchemaResponse> {
      return queryService.actionOfSchemaAll(request);
    },
    executorOfSchema(request: QueryGetExecutorOfSchemaRequest): Promise<QueryGetExecutorOfSchemaResponse> {
      return queryService.executorOfSchema(request);
    },
    executorOfSchemaAll(request?: QueryAllExecutorOfSchemaRequest): Promise<QueryAllExecutorOfSchemaResponse> {
      return queryService.executorOfSchemaAll(request);
    },
    virtualAction(request: QueryGetVirtualActionRequest): Promise<QueryGetVirtualActionResponse> {
      return queryService.virtualAction(request);
    },
    virtualActionAll(request?: QueryAllVirtualActionRequest): Promise<QueryAllVirtualActionResponse> {
      return queryService.virtualActionAll(request);
    },
    virtualSchema(request: QueryGetVirtualSchemaRequest): Promise<QueryGetVirtualSchemaResponse> {
      return queryService.virtualSchema(request);
    },
    virtualSchemaAll(request?: QueryAllVirtualSchemaRequest): Promise<QueryAllVirtualSchemaResponse> {
      return queryService.virtualSchemaAll(request);
    },
    disableVirtualSchema(request: QueryGetDisableVirtualSchemaRequest): Promise<QueryGetDisableVirtualSchemaResponse> {
      return queryService.disableVirtualSchema(request);
    },
    disableVirtualSchemaAll(request?: QueryAllDisableVirtualSchemaRequest): Promise<QueryAllDisableVirtualSchemaResponse> {
      return queryService.disableVirtualSchemaAll(request);
    },
    virtualSchemaProposal(request: QueryGetVirtualSchemaProposalRequest): Promise<QueryGetVirtualSchemaProposalResponse> {
      return queryService.virtualSchemaProposal(request);
    },
    virtualSchemaProposalAll(request?: QueryAllVirtualSchemaProposalRequest): Promise<QueryAllVirtualSchemaProposalResponse> {
      return queryService.virtualSchemaProposalAll(request);
    }
  };
};