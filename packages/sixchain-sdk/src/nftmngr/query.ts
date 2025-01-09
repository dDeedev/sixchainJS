//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from '../cosmos/base/query/v1beta1/pagination';
import { ActionByRefId, ActionByRefIdAmino, ActionByRefIdSDKType } from './action_by_ref_id';
import { ActionExecutor, ActionExecutorAmino, ActionExecutorSDKType } from './action_executor';
import { ActionOfSchema, ActionOfSchemaAmino, ActionOfSchemaSDKType } from './action_of_schema';
import { DisableVirtualSchema, DisableVirtualSchemaAmino, DisableVirtualSchemaSDKType } from './disable_virtual_schema';
import { ExecutorOfSchema, ExecutorOfSchemaAmino, ExecutorOfSchemaSDKType } from './executor_of_schema';
import { MetadataCreator, MetadataCreatorAmino, MetadataCreatorSDKType } from './metadata_creator';
import { NftData, NftDataAmino, NftDataSDKType } from './nft_data';
import { NFTFeeBalance, NFTFeeBalanceAmino, NFTFeeBalanceSDKType } from './nft_fee_balance';
import { NFTFeeConfig, NFTFeeConfigAmino, NFTFeeConfigSDKType } from './nft_fee_config';
import { NFTSchema, NFTSchemaAmino, NFTSchemaSDKType } from './nft_schema';
import { NFTSchemaByContract, NFTSchemaByContractAmino, NFTSchemaByContractSDKType } from './nft_schema_by_contract';
import { Organization, OrganizationAmino, OrganizationSDKType } from './organization';
import { Params, ParamsAmino, ParamsSDKType } from './params';
import { SchemaAttribute, SchemaAttributeAmino, SchemaAttributeSDKType } from './schema_attribute';
import { VirtualAction, VirtualActionAmino, VirtualActionSDKType } from './virtual_action';
import { ActiveVirtualSchemaProposal, ActiveVirtualSchemaProposalAmino, ActiveVirtualSchemaProposalSDKType, InactiveVirtualSchemaProposal, InactiveVirtualSchemaProposalAmino, InactiveVirtualSchemaProposalSDKType,VirtualSchema, VirtualSchemaAmino, VirtualSchemaProposal, VirtualSchemaProposalAmino, VirtualSchemaProposalSDKType, VirtualSchemaSDKType } from './virtual_schema';
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryParamsRequest';
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryParamsRequest';
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryParamsResponse';
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryParamsResponse';
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetNFTSchemaRequest {
  code: string;
}
export interface QueryGetNFTSchemaRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaRequest';
  value: Uint8Array;
}
export interface QueryGetNFTSchemaRequestAmino {
  code?: string;
}
export interface QueryGetNFTSchemaRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaRequest';
  value: QueryGetNFTSchemaRequestAmino;
}
export interface QueryGetNFTSchemaRequestSDKType {
  code: string;
}
export interface QueryGetNFTSchemaResponse {
  nFTSchema: NFTSchema;
}
export interface QueryGetNFTSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaResponse';
  value: Uint8Array;
}
export interface QueryGetNFTSchemaResponseAmino {
  nFTSchema?: NFTSchemaAmino;
}
export interface QueryGetNFTSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaResponse';
  value: QueryGetNFTSchemaResponseAmino;
}
export interface QueryGetNFTSchemaResponseSDKType {
  nFTSchema: NFTSchemaSDKType;
}
export interface QueryAllNFTSchemaRequest {
  pagination?: PageRequest;
}
export interface QueryAllNFTSchemaRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaRequest';
  value: Uint8Array;
}
export interface QueryAllNFTSchemaRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllNFTSchemaRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaRequest';
  value: QueryAllNFTSchemaRequestAmino;
}
export interface QueryAllNFTSchemaRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllNFTSchemaResponse {
  nFTSchema: NFTSchema[];
  pagination?: PageResponse;
}
export interface QueryAllNFTSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaResponse';
  value: Uint8Array;
}
export interface QueryAllNFTSchemaResponseAmino {
  nFTSchema?: NFTSchemaAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllNFTSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaResponse';
  value: QueryAllNFTSchemaResponseAmino;
}
export interface QueryAllNFTSchemaResponseSDKType {
  nFTSchema: NFTSchemaSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetNftDataRequest {
  nftSchemaCode: string;
  tokenId: string;
  withGlobal: boolean;
}
export interface QueryGetNftDataRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftDataRequest';
  value: Uint8Array;
}
export interface QueryGetNftDataRequestAmino {
  nftSchemaCode?: string;
  tokenId?: string;
  withGlobal?: boolean;
}
export interface QueryGetNftDataRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftDataRequest';
  value: QueryGetNftDataRequestAmino;
}
export interface QueryGetNftDataRequestSDKType {
  nftSchemaCode: string;
  tokenId: string;
  withGlobal: boolean;
}
export interface QueryGetNftDataResponse {
  nftData: NftData;
}
export interface QueryGetNftDataResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftDataResponse';
  value: Uint8Array;
}
export interface QueryGetNftDataResponseAmino {
  nftData?: NftDataAmino;
}
export interface QueryGetNftDataResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftDataResponse';
  value: QueryGetNftDataResponseAmino;
}
export interface QueryGetNftDataResponseSDKType {
  nftData: NftDataSDKType;
}
export interface QueryAllNftDataRequest {
  withGlobal: boolean;
  pagination?: PageRequest;
}
export interface QueryAllNftDataRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNftDataRequest';
  value: Uint8Array;
}
export interface QueryAllNftDataRequestAmino {
  withGlobal?: boolean;
  pagination?: PageRequestAmino;
}
export interface QueryAllNftDataRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNftDataRequest';
  value: QueryAllNftDataRequestAmino;
}
export interface QueryAllNftDataRequestSDKType {
  withGlobal: boolean;
  pagination?: PageRequestSDKType;
}
export interface QueryAllNftDataResponse {
  nftData: NftData[];
  pagination?: PageResponse;
}
export interface QueryAllNftDataResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNftDataResponse';
  value: Uint8Array;
}
export interface QueryAllNftDataResponseAmino {
  nftData?: NftDataAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllNftDataResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNftDataResponse';
  value: QueryAllNftDataResponseAmino;
}
export interface QueryAllNftDataResponseSDKType {
  nftData: NftDataSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetActionByRefIdRequest {
  refId: string;
}
export interface QueryGetActionByRefIdRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionByRefIdRequest';
  value: Uint8Array;
}
export interface QueryGetActionByRefIdRequestAmino {
  refId?: string;
}
export interface QueryGetActionByRefIdRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionByRefIdRequest';
  value: QueryGetActionByRefIdRequestAmino;
}
export interface QueryGetActionByRefIdRequestSDKType {
  refId: string;
}
export interface QueryGetActionByRefIdResponse {
  actionByRefId: ActionByRefId;
}
export interface QueryGetActionByRefIdResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionByRefIdResponse';
  value: Uint8Array;
}
export interface QueryGetActionByRefIdResponseAmino {
  actionByRefId?: ActionByRefIdAmino;
}
export interface QueryGetActionByRefIdResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionByRefIdResponse';
  value: QueryGetActionByRefIdResponseAmino;
}
export interface QueryGetActionByRefIdResponseSDKType {
  actionByRefId: ActionByRefIdSDKType;
}
export interface QueryAllActionByRefIdRequest {
  pagination?: PageRequest;
}
export interface QueryAllActionByRefIdRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionByRefIdRequest';
  value: Uint8Array;
}
export interface QueryAllActionByRefIdRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllActionByRefIdRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionByRefIdRequest';
  value: QueryAllActionByRefIdRequestAmino;
}
export interface QueryAllActionByRefIdRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllActionByRefIdResponse {
  actionByRefId: ActionByRefId[];
  pagination?: PageResponse;
}
export interface QueryAllActionByRefIdResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionByRefIdResponse';
  value: Uint8Array;
}
export interface QueryAllActionByRefIdResponseAmino {
  actionByRefId?: ActionByRefIdAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllActionByRefIdResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionByRefIdResponse';
  value: QueryAllActionByRefIdResponseAmino;
}
export interface QueryAllActionByRefIdResponseSDKType {
  actionByRefId: ActionByRefIdSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetOrganizationRequest {
  name: string;
}
export interface QueryGetOrganizationRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetOrganizationRequest';
  value: Uint8Array;
}
export interface QueryGetOrganizationRequestAmino {
  name?: string;
}
export interface QueryGetOrganizationRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetOrganizationRequest';
  value: QueryGetOrganizationRequestAmino;
}
export interface QueryGetOrganizationRequestSDKType {
  name: string;
}
export interface QueryGetOrganizationResponse {
  organization: Organization;
}
export interface QueryGetOrganizationResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetOrganizationResponse';
  value: Uint8Array;
}
export interface QueryGetOrganizationResponseAmino {
  organization?: OrganizationAmino;
}
export interface QueryGetOrganizationResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetOrganizationResponse';
  value: QueryGetOrganizationResponseAmino;
}
export interface QueryGetOrganizationResponseSDKType {
  organization: OrganizationSDKType;
}
export interface QueryAllOrganizationRequest {
  pagination?: PageRequest;
}
export interface QueryAllOrganizationRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllOrganizationRequest';
  value: Uint8Array;
}
export interface QueryAllOrganizationRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllOrganizationRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllOrganizationRequest';
  value: QueryAllOrganizationRequestAmino;
}
export interface QueryAllOrganizationRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllOrganizationResponse {
  organization: Organization[];
  pagination?: PageResponse;
}
export interface QueryAllOrganizationResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllOrganizationResponse';
  value: Uint8Array;
}
export interface QueryAllOrganizationResponseAmino {
  organization?: OrganizationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllOrganizationResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllOrganizationResponse';
  value: QueryAllOrganizationResponseAmino;
}
export interface QueryAllOrganizationResponseSDKType {
  organization: OrganizationSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetNftCollectionRequest {
  nftSchemaCode: string;
  pagination?: PageRequest;
}
export interface QueryGetNftCollectionRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftCollectionRequest';
  value: Uint8Array;
}
export interface QueryGetNftCollectionRequestAmino {
  nftSchemaCode?: string;
  pagination?: PageRequestAmino;
}
export interface QueryGetNftCollectionRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftCollectionRequest';
  value: QueryGetNftCollectionRequestAmino;
}
export interface QueryGetNftCollectionRequestSDKType {
  nftSchemaCode: string;
  pagination?: PageRequestSDKType;
}
export interface QueryGetNftCollectionResponse {
  nftCollection?: NftData[];
  pagination?: PageResponse;
}
export interface QueryGetNftCollectionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftCollectionResponse';
  value: Uint8Array;
}
export interface QueryGetNftCollectionResponseAmino {
  nftCollection?: NftDataAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryGetNftCollectionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftCollectionResponse';
  value: QueryGetNftCollectionResponseAmino;
}
export interface QueryGetNftCollectionResponseSDKType {
  nftCollection?: NftDataSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetNFTSchemaByContractRequest {
  originContractAddress: string;
}
export interface QueryGetNFTSchemaByContractRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaByContractRequest';
  value: Uint8Array;
}
export interface QueryGetNFTSchemaByContractRequestAmino {
  originContractAddress?: string;
}
export interface QueryGetNFTSchemaByContractRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaByContractRequest';
  value: QueryGetNFTSchemaByContractRequestAmino;
}
export interface QueryGetNFTSchemaByContractRequestSDKType {
  originContractAddress: string;
}
export interface QueryGetNFTSchemaByContractResponse {
  nFTSchemaByContract: NFTSchemaByContract;
}
export interface QueryGetNFTSchemaByContractResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaByContractResponse';
  value: Uint8Array;
}
export interface QueryGetNFTSchemaByContractResponseAmino {
  nFTSchemaByContract?: NFTSchemaByContractAmino;
}
export interface QueryGetNFTSchemaByContractResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaByContractResponse';
  value: QueryGetNFTSchemaByContractResponseAmino;
}
export interface QueryGetNFTSchemaByContractResponseSDKType {
  nFTSchemaByContract: NFTSchemaByContractSDKType;
}
export interface QueryAllNFTSchemaByContractRequest {
  pagination?: PageRequest;
}
export interface QueryAllNFTSchemaByContractRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaByContractRequest';
  value: Uint8Array;
}
export interface QueryAllNFTSchemaByContractRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllNFTSchemaByContractRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaByContractRequest';
  value: QueryAllNFTSchemaByContractRequestAmino;
}
export interface QueryAllNFTSchemaByContractRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllNFTSchemaByContractResponse {
  nFTSchemaByContract: NFTSchemaByContract[];
  pagination?: PageResponse;
}
export interface QueryAllNFTSchemaByContractResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaByContractResponse';
  value: Uint8Array;
}
export interface QueryAllNFTSchemaByContractResponseAmino {
  nFTSchemaByContract?: NFTSchemaByContractAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllNFTSchemaByContractResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaByContractResponse';
  value: QueryAllNFTSchemaByContractResponseAmino;
}
export interface QueryAllNFTSchemaByContractResponseSDKType {
  nFTSchemaByContract: NFTSchemaByContractSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetNFTFeeConfigRequest {}
export interface QueryGetNFTFeeConfigRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeConfigRequest';
  value: Uint8Array;
}
export interface QueryGetNFTFeeConfigRequestAmino {}
export interface QueryGetNFTFeeConfigRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeConfigRequest';
  value: QueryGetNFTFeeConfigRequestAmino;
}
export interface QueryGetNFTFeeConfigRequestSDKType {}
export interface QueryGetNFTFeeConfigResponse {
  nFTFeeConfig: NFTFeeConfig;
}
export interface QueryGetNFTFeeConfigResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeConfigResponse';
  value: Uint8Array;
}
export interface QueryGetNFTFeeConfigResponseAmino {
  NFTFeeConfig?: NFTFeeConfigAmino;
}
export interface QueryGetNFTFeeConfigResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeConfigResponse';
  value: QueryGetNFTFeeConfigResponseAmino;
}
export interface QueryGetNFTFeeConfigResponseSDKType {
  NFTFeeConfig: NFTFeeConfigSDKType;
}
export interface QueryGetNFTFeeBalanceRequest {}
export interface QueryGetNFTFeeBalanceRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeBalanceRequest';
  value: Uint8Array;
}
export interface QueryGetNFTFeeBalanceRequestAmino {}
export interface QueryGetNFTFeeBalanceRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeBalanceRequest';
  value: QueryGetNFTFeeBalanceRequestAmino;
}
export interface QueryGetNFTFeeBalanceRequestSDKType {}
export interface QueryGetNFTFeeBalanceResponse {
  nFTFeeBalance: NFTFeeBalance;
}
export interface QueryGetNFTFeeBalanceResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeBalanceResponse';
  value: Uint8Array;
}
export interface QueryGetNFTFeeBalanceResponseAmino {
  NFTFeeBalance?: NFTFeeBalanceAmino;
}
export interface QueryGetNFTFeeBalanceResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeBalanceResponse';
  value: QueryGetNFTFeeBalanceResponseAmino;
}
export interface QueryGetNFTFeeBalanceResponseSDKType {
  NFTFeeBalance: NFTFeeBalanceSDKType;
}
export interface QueryGetMetadataCreatorRequest {
  nftSchemaCode: string;
}
export interface QueryGetMetadataCreatorRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetMetadataCreatorRequest';
  value: Uint8Array;
}
export interface QueryGetMetadataCreatorRequestAmino {
  nftSchemaCode?: string;
}
export interface QueryGetMetadataCreatorRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetMetadataCreatorRequest';
  value: QueryGetMetadataCreatorRequestAmino;
}
export interface QueryGetMetadataCreatorRequestSDKType {
  nftSchemaCode: string;
}
export interface QueryGetMetadataCreatorResponse {
  metadataCreator: MetadataCreator;
}
export interface QueryGetMetadataCreatorResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetMetadataCreatorResponse';
  value: Uint8Array;
}
export interface QueryGetMetadataCreatorResponseAmino {
  metadataCreator?: MetadataCreatorAmino;
}
export interface QueryGetMetadataCreatorResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetMetadataCreatorResponse';
  value: QueryGetMetadataCreatorResponseAmino;
}
export interface QueryGetMetadataCreatorResponseSDKType {
  metadataCreator: MetadataCreatorSDKType;
}
export interface QueryAllMetadataCreatorRequest {
  pagination?: PageRequest;
}
export interface QueryAllMetadataCreatorRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllMetadataCreatorRequest';
  value: Uint8Array;
}
export interface QueryAllMetadataCreatorRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMetadataCreatorRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllMetadataCreatorRequest';
  value: QueryAllMetadataCreatorRequestAmino;
}
export interface QueryAllMetadataCreatorRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllMetadataCreatorResponse {
  metadataCreator: MetadataCreator[];
  pagination?: PageResponse;
}
export interface QueryAllMetadataCreatorResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllMetadataCreatorResponse';
  value: Uint8Array;
}
export interface QueryAllMetadataCreatorResponseAmino {
  metadataCreator?: MetadataCreatorAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMetadataCreatorResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllMetadataCreatorResponse';
  value: QueryAllMetadataCreatorResponseAmino;
}
export interface QueryAllMetadataCreatorResponseSDKType {
  metadataCreator: MetadataCreatorSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetActionExecutorRequest {
  nftSchemaCode: string;
  executorAddress: string;
}
export interface QueryGetActionExecutorRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionExecutorRequest';
  value: Uint8Array;
}
export interface QueryGetActionExecutorRequestAmino {
  nftSchemaCode?: string;
  executorAddress?: string;
}
export interface QueryGetActionExecutorRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionExecutorRequest';
  value: QueryGetActionExecutorRequestAmino;
}
export interface QueryGetActionExecutorRequestSDKType {
  nftSchemaCode: string;
  executorAddress: string;
}
export interface QueryGetActionExecutorResponse {
  actionExecutor: ActionExecutor;
}
export interface QueryGetActionExecutorResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionExecutorResponse';
  value: Uint8Array;
}
export interface QueryGetActionExecutorResponseAmino {
  actionExecutor?: ActionExecutorAmino;
}
export interface QueryGetActionExecutorResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionExecutorResponse';
  value: QueryGetActionExecutorResponseAmino;
}
export interface QueryGetActionExecutorResponseSDKType {
  actionExecutor: ActionExecutorSDKType;
}
export interface QueryAllActionExecutorRequest {
  pagination?: PageRequest;
}
export interface QueryAllActionExecutorRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionExecutorRequest';
  value: Uint8Array;
}
export interface QueryAllActionExecutorRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllActionExecutorRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionExecutorRequest';
  value: QueryAllActionExecutorRequestAmino;
}
export interface QueryAllActionExecutorRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllActionExecutorResponse {
  actionExecutor: ActionExecutor[];
  pagination?: PageResponse;
}
export interface QueryAllActionExecutorResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionExecutorResponse';
  value: Uint8Array;
}
export interface QueryAllActionExecutorResponseAmino {
  actionExecutor?: ActionExecutorAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllActionExecutorResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionExecutorResponse';
  value: QueryAllActionExecutorResponseAmino;
}
export interface QueryAllActionExecutorResponseSDKType {
  actionExecutor: ActionExecutorSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetSchemaAttributeRequest {
  nftSchemaCode: string;
  name: string;
}
export interface QueryGetSchemaAttributeRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetSchemaAttributeRequest';
  value: Uint8Array;
}
export interface QueryGetSchemaAttributeRequestAmino {
  nftSchemaCode?: string;
  name?: string;
}
export interface QueryGetSchemaAttributeRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetSchemaAttributeRequest';
  value: QueryGetSchemaAttributeRequestAmino;
}
export interface QueryGetSchemaAttributeRequestSDKType {
  nftSchemaCode: string;
  name: string;
}
export interface QueryGetSchemaAttributeResponse {
  schemaAttribute: SchemaAttribute;
}
export interface QueryGetSchemaAttributeResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetSchemaAttributeResponse';
  value: Uint8Array;
}
export interface QueryGetSchemaAttributeResponseAmino {
  schemaAttribute?: SchemaAttributeAmino;
}
export interface QueryGetSchemaAttributeResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetSchemaAttributeResponse';
  value: QueryGetSchemaAttributeResponseAmino;
}
export interface QueryGetSchemaAttributeResponseSDKType {
  schemaAttribute: SchemaAttributeSDKType;
}
export interface QueryAllSchemaAttributeRequest {
  pagination?: PageRequest;
}
export interface QueryAllSchemaAttributeRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllSchemaAttributeRequest';
  value: Uint8Array;
}
export interface QueryAllSchemaAttributeRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllSchemaAttributeRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllSchemaAttributeRequest';
  value: QueryAllSchemaAttributeRequestAmino;
}
export interface QueryAllSchemaAttributeRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllSchemaAttributeResponse {
  schemaAttribute: SchemaAttribute[];
  pagination?: PageResponse;
}
export interface QueryAllSchemaAttributeResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllSchemaAttributeResponse';
  value: Uint8Array;
}
export interface QueryAllSchemaAttributeResponseAmino {
  schemaAttribute?: SchemaAttributeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllSchemaAttributeResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllSchemaAttributeResponse';
  value: QueryAllSchemaAttributeResponseAmino;
}
export interface QueryAllSchemaAttributeResponseSDKType {
  schemaAttribute: SchemaAttributeSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryListAttributeBySchemaRequest {
  nftSchemaCode: string;
}
export interface QueryListAttributeBySchemaRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryListAttributeBySchemaRequest';
  value: Uint8Array;
}
export interface QueryListAttributeBySchemaRequestAmino {
  nftSchemaCode?: string;
}
export interface QueryListAttributeBySchemaRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryListAttributeBySchemaRequest';
  value: QueryListAttributeBySchemaRequestAmino;
}
export interface QueryListAttributeBySchemaRequestSDKType {
  nftSchemaCode: string;
}
export interface QueryListAttributeBySchemaResponse {
  schemaAttribute: SchemaAttribute[];
}
export interface QueryListAttributeBySchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryListAttributeBySchemaResponse';
  value: Uint8Array;
}
export interface QueryListAttributeBySchemaResponseAmino {
  schemaAttribute?: SchemaAttributeAmino[];
}
export interface QueryListAttributeBySchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryListAttributeBySchemaResponse';
  value: QueryListAttributeBySchemaResponseAmino;
}
export interface QueryListAttributeBySchemaResponseSDKType {
  schemaAttribute: SchemaAttributeSDKType[];
}
export interface QueryGetActionOfSchemaRequest {
  nftSchemaCode: string;
  name: string;
}
export interface QueryGetActionOfSchemaRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionOfSchemaRequest';
  value: Uint8Array;
}
export interface QueryGetActionOfSchemaRequestAmino {
  nftSchemaCode?: string;
  name?: string;
}
export interface QueryGetActionOfSchemaRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionOfSchemaRequest';
  value: QueryGetActionOfSchemaRequestAmino;
}
export interface QueryGetActionOfSchemaRequestSDKType {
  nftSchemaCode: string;
  name: string;
}
export interface QueryGetActionOfSchemaResponse {
  actionOfSchema: ActionOfSchema;
}
export interface QueryGetActionOfSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionOfSchemaResponse';
  value: Uint8Array;
}
export interface QueryGetActionOfSchemaResponseAmino {
  actionOfSchema?: ActionOfSchemaAmino;
}
export interface QueryGetActionOfSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionOfSchemaResponse';
  value: QueryGetActionOfSchemaResponseAmino;
}
export interface QueryGetActionOfSchemaResponseSDKType {
  actionOfSchema: ActionOfSchemaSDKType;
}
export interface QueryAllActionOfSchemaRequest {
  pagination?: PageRequest;
}
export interface QueryAllActionOfSchemaRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionOfSchemaRequest';
  value: Uint8Array;
}
export interface QueryAllActionOfSchemaRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllActionOfSchemaRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionOfSchemaRequest';
  value: QueryAllActionOfSchemaRequestAmino;
}
export interface QueryAllActionOfSchemaRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllActionOfSchemaResponse {
  actionOfSchema: ActionOfSchema[];
  pagination?: PageResponse;
}
export interface QueryAllActionOfSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionOfSchemaResponse';
  value: Uint8Array;
}
export interface QueryAllActionOfSchemaResponseAmino {
  actionOfSchema?: ActionOfSchemaAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllActionOfSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionOfSchemaResponse';
  value: QueryAllActionOfSchemaResponseAmino;
}
export interface QueryAllActionOfSchemaResponseSDKType {
  actionOfSchema: ActionOfSchemaSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetExecutorOfSchemaRequest {
  nftSchemaCode: string;
}
export interface QueryGetExecutorOfSchemaRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetExecutorOfSchemaRequest';
  value: Uint8Array;
}
export interface QueryGetExecutorOfSchemaRequestAmino {
  nftSchemaCode?: string;
}
export interface QueryGetExecutorOfSchemaRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetExecutorOfSchemaRequest';
  value: QueryGetExecutorOfSchemaRequestAmino;
}
export interface QueryGetExecutorOfSchemaRequestSDKType {
  nftSchemaCode: string;
}
export interface QueryGetExecutorOfSchemaResponse {
  executorOfSchema: ExecutorOfSchema;
}
export interface QueryGetExecutorOfSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetExecutorOfSchemaResponse';
  value: Uint8Array;
}
export interface QueryGetExecutorOfSchemaResponseAmino {
  executorOfSchema?: ExecutorOfSchemaAmino;
}
export interface QueryGetExecutorOfSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetExecutorOfSchemaResponse';
  value: QueryGetExecutorOfSchemaResponseAmino;
}
export interface QueryGetExecutorOfSchemaResponseSDKType {
  executorOfSchema: ExecutorOfSchemaSDKType;
}
export interface QueryAllExecutorOfSchemaRequest {
  pagination?: PageRequest;
}
export interface QueryAllExecutorOfSchemaRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllExecutorOfSchemaRequest';
  value: Uint8Array;
}
export interface QueryAllExecutorOfSchemaRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllExecutorOfSchemaRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllExecutorOfSchemaRequest';
  value: QueryAllExecutorOfSchemaRequestAmino;
}
export interface QueryAllExecutorOfSchemaRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllExecutorOfSchemaResponse {
  executorOfSchema: ExecutorOfSchema[];
  pagination?: PageResponse;
}
export interface QueryAllExecutorOfSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllExecutorOfSchemaResponse';
  value: Uint8Array;
}
export interface QueryAllExecutorOfSchemaResponseAmino {
  executorOfSchema?: ExecutorOfSchemaAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllExecutorOfSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllExecutorOfSchemaResponse';
  value: QueryAllExecutorOfSchemaResponseAmino;
}
export interface QueryAllExecutorOfSchemaResponseSDKType {
  executorOfSchema: ExecutorOfSchemaSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetVirtualActionRequest {
  nftSchemaCode: string;
  name: string;
}
export interface QueryGetVirtualActionRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualActionRequest';
  value: Uint8Array;
}
export interface QueryGetVirtualActionRequestAmino {
  nftSchemaCode?: string;
  name?: string;
}
export interface QueryGetVirtualActionRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualActionRequest';
  value: QueryGetVirtualActionRequestAmino;
}
export interface QueryGetVirtualActionRequestSDKType {
  nftSchemaCode: string;
  name: string;
}
export interface QueryGetVirtualActionResponse {
  virtualAction: VirtualAction;
}
export interface QueryGetVirtualActionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualActionResponse';
  value: Uint8Array;
}
export interface QueryGetVirtualActionResponseAmino {
  virtualAction?: VirtualActionAmino;
}
export interface QueryGetVirtualActionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualActionResponse';
  value: QueryGetVirtualActionResponseAmino;
}
export interface QueryGetVirtualActionResponseSDKType {
  virtualAction: VirtualActionSDKType;
}
export interface QueryAllVirtualActionRequest {
  pagination?: PageRequest;
}
export interface QueryAllVirtualActionRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualActionRequest';
  value: Uint8Array;
}
export interface QueryAllVirtualActionRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllVirtualActionRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualActionRequest';
  value: QueryAllVirtualActionRequestAmino;
}
export interface QueryAllVirtualActionRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllVirtualActionResponse {
  virtualAction: VirtualAction[];
  pagination?: PageResponse;
}
export interface QueryAllVirtualActionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualActionResponse';
  value: Uint8Array;
}
export interface QueryAllVirtualActionResponseAmino {
  virtualAction?: VirtualActionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllVirtualActionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualActionResponse';
  value: QueryAllVirtualActionResponseAmino;
}
export interface QueryAllVirtualActionResponseSDKType {
  virtualAction: VirtualActionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetVirtualSchemaRequest {
  nftSchemaCode: string;
}
export interface QueryGetVirtualSchemaRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaRequest';
  value: Uint8Array;
}
export interface QueryGetVirtualSchemaRequestAmino {
  nftSchemaCode?: string;
}
export interface QueryGetVirtualSchemaRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaRequest';
  value: QueryGetVirtualSchemaRequestAmino;
}
export interface QueryGetVirtualSchemaRequestSDKType {
  nftSchemaCode: string;
}
export interface QueryGetVirtualSchemaResponse {
  virtualSchema: VirtualSchema;
}
export interface QueryGetVirtualSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaResponse';
  value: Uint8Array;
}
export interface QueryGetVirtualSchemaResponseAmino {
  virtualSchema?: VirtualSchemaAmino;
}
export interface QueryGetVirtualSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaResponse';
  value: QueryGetVirtualSchemaResponseAmino;
}
export interface QueryGetVirtualSchemaResponseSDKType {
  virtualSchema: VirtualSchemaSDKType;
}
export interface QueryAllVirtualSchemaRequest {
  pagination?: PageRequest;
}
export interface QueryAllVirtualSchemaRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaRequest';
  value: Uint8Array;
}
export interface QueryAllVirtualSchemaRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllVirtualSchemaRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaRequest';
  value: QueryAllVirtualSchemaRequestAmino;
}
export interface QueryAllVirtualSchemaRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllVirtualSchemaResponse {
  virtualSchema: VirtualSchema[];
  pagination?: PageResponse;
}
export interface QueryAllVirtualSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaResponse';
  value: Uint8Array;
}
export interface QueryAllVirtualSchemaResponseAmino {
  virtualSchema?: VirtualSchemaAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllVirtualSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaResponse';
  value: QueryAllVirtualSchemaResponseAmino;
}
export interface QueryAllVirtualSchemaResponseSDKType {
  virtualSchema: VirtualSchemaSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetDisableVirtualSchemaRequest {
  index: string;
}
export interface QueryGetDisableVirtualSchemaRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetDisableVirtualSchemaRequest';
  value: Uint8Array;
}
export interface QueryGetDisableVirtualSchemaRequestAmino {
  index?: string;
}
export interface QueryGetDisableVirtualSchemaRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetDisableVirtualSchemaRequest';
  value: QueryGetDisableVirtualSchemaRequestAmino;
}
export interface QueryGetDisableVirtualSchemaRequestSDKType {
  index: string;
}
export interface QueryGetDisableVirtualSchemaResponse {
  disableVirtualSchema: DisableVirtualSchema;
}
export interface QueryGetDisableVirtualSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetDisableVirtualSchemaResponse';
  value: Uint8Array;
}
export interface QueryGetDisableVirtualSchemaResponseAmino {
  disableVirtualSchema?: DisableVirtualSchemaAmino;
}
export interface QueryGetDisableVirtualSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetDisableVirtualSchemaResponse';
  value: QueryGetDisableVirtualSchemaResponseAmino;
}
export interface QueryGetDisableVirtualSchemaResponseSDKType {
  disableVirtualSchema: DisableVirtualSchemaSDKType;
}
export interface QueryAllDisableVirtualSchemaRequest {
  pagination?: PageRequest;
}
export interface QueryAllDisableVirtualSchemaRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllDisableVirtualSchemaRequest';
  value: Uint8Array;
}
export interface QueryAllDisableVirtualSchemaRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDisableVirtualSchemaRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllDisableVirtualSchemaRequest';
  value: QueryAllDisableVirtualSchemaRequestAmino;
}
export interface QueryAllDisableVirtualSchemaRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllDisableVirtualSchemaResponse {
  disableVirtualSchema: DisableVirtualSchema[];
  pagination?: PageResponse;
}
export interface QueryAllDisableVirtualSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllDisableVirtualSchemaResponse';
  value: Uint8Array;
}
export interface QueryAllDisableVirtualSchemaResponseAmino {
  disableVirtualSchema?: DisableVirtualSchemaAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDisableVirtualSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllDisableVirtualSchemaResponse';
  value: QueryAllDisableVirtualSchemaResponseAmino;
}
export interface QueryAllDisableVirtualSchemaResponseSDKType {
  disableVirtualSchema: DisableVirtualSchemaSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetVirtualSchemaProposalRequest {
  index: string;
}
export interface QueryGetVirtualSchemaProposalRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaProposalRequest';
  value: Uint8Array;
}
export interface QueryGetVirtualSchemaProposalRequestAmino {
  index?: string;
}
export interface QueryGetVirtualSchemaProposalRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaProposalRequest';
  value: QueryGetVirtualSchemaProposalRequestAmino;
}
export interface QueryGetVirtualSchemaProposalRequestSDKType {
  index: string;
}
export interface QueryGetVirtualSchemaProposalResponse {
  virtualSchemaProposal: VirtualSchemaProposal;
}
export interface QueryGetVirtualSchemaProposalResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaProposalResponse';
  value: Uint8Array;
}
export interface QueryGetVirtualSchemaProposalResponseAmino {
  virtualSchemaProposal?: VirtualSchemaProposalAmino;
}
export interface QueryGetVirtualSchemaProposalResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaProposalResponse';
  value: QueryGetVirtualSchemaProposalResponseAmino;
}
export interface QueryGetVirtualSchemaProposalResponseSDKType {
  virtualSchemaProposal: VirtualSchemaProposalSDKType;
}
export interface QueryAllVirtualSchemaProposalRequest {
  pagination?: PageRequest;
}
export interface QueryAllVirtualSchemaProposalRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaProposalRequest';
  value: Uint8Array;
}
export interface QueryAllVirtualSchemaProposalRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllVirtualSchemaProposalRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaProposalRequest';
  value: QueryAllVirtualSchemaProposalRequestAmino;
}
export interface QueryAllVirtualSchemaProposalRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllVirtualSchemaProposalResponse {
  virtualSchemaProposal: VirtualSchemaProposal[];
  pagination?: PageResponse;
}
export interface QueryAllVirtualSchemaProposalResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaProposalResponse';
  value: Uint8Array;
}
export interface QueryAllVirtualSchemaProposalResponseAmino {
  virtualSchemaProposal?: VirtualSchemaProposalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllVirtualSchemaProposalResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaProposalResponse';
  value: QueryAllVirtualSchemaProposalResponseAmino;
}
export interface QueryAllVirtualSchemaProposalResponseSDKType {
  virtualSchemaProposal: VirtualSchemaProposalSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetActiveVirtualSchemaProposalRequest {
  index: string;
}
export interface QueryGetActiveVirtualSchemaProposalRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActiveVirtualSchemaProposalRequest';
  value: Uint8Array;
}
export interface QueryGetActiveVirtualSchemaProposalRequestAmino {
  index?: string;
}
export interface QueryGetActiveVirtualSchemaProposalRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActiveVirtualSchemaProposalRequest';
  value: QueryGetActiveVirtualSchemaProposalRequestAmino;
}
export interface QueryGetActiveVirtualSchemaProposalRequestSDKType {
  index: string;
}
export interface QueryGetActiveVirtualSchemaProposalResponse {
  activeVirtualSchemaProposal: ActiveVirtualSchemaProposal;
}
export interface QueryGetActiveVirtualSchemaProposalResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActiveVirtualSchemaProposalResponse';
  value: Uint8Array;
}
export interface QueryGetActiveVirtualSchemaProposalResponseAmino {
  activeVirtualSchemaProposal?: ActiveVirtualSchemaProposalAmino;
}
export interface QueryGetActiveVirtualSchemaProposalResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActiveVirtualSchemaProposalResponse';
  value: QueryGetActiveVirtualSchemaProposalResponseAmino;
}
export interface QueryGetActiveVirtualSchemaProposalResponseSDKType {
  activeVirtualSchemaProposal: ActiveVirtualSchemaProposalSDKType;
}
export interface QueryAllActiveVirtualSchemaProposalRequest {
  pagination?: PageRequest;
}
export interface QueryAllActiveVirtualSchemaProposalRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActiveVirtualSchemaProposalRequest';
  value: Uint8Array;
}
export interface QueryAllActiveVirtualSchemaProposalRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllActiveVirtualSchemaProposalRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActiveVirtualSchemaProposalRequest';
  value: QueryAllActiveVirtualSchemaProposalRequestAmino;
}
export interface QueryAllActiveVirtualSchemaProposalRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllActiveVirtualSchemaProposalResponse {
  activeVirtualSchemaProposal: ActiveVirtualSchemaProposal[];
  pagination?: PageResponse;
}
export interface QueryAllActiveVirtualSchemaProposalResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActiveVirtualSchemaProposalResponse';
  value: Uint8Array;
}
export interface QueryAllActiveVirtualSchemaProposalResponseAmino {
  activeVirtualSchemaProposal?: ActiveVirtualSchemaProposalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllActiveVirtualSchemaProposalResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActiveVirtualSchemaProposalResponse';
  value: QueryAllActiveVirtualSchemaProposalResponseAmino;
}
export interface QueryAllActiveVirtualSchemaProposalResponseSDKType {
  activeVirtualSchemaProposal: ActiveVirtualSchemaProposalSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetInactiveVirtualSchemaProposalRequest {
  index: string;
}
export interface QueryGetInactiveVirtualSchemaProposalRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetInactiveVirtualSchemaProposalRequest';
  value: Uint8Array;
}
export interface QueryGetInactiveVirtualSchemaProposalRequestAmino {
  index?: string;
}
export interface QueryGetInactiveVirtualSchemaProposalRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetInactiveVirtualSchemaProposalRequest';
  value: QueryGetInactiveVirtualSchemaProposalRequestAmino;
}
export interface QueryGetInactiveVirtualSchemaProposalRequestSDKType {
  index: string;
}
export interface QueryGetInactiveVirtualSchemaProposalResponse {
  inactiveVirtualSchemaProposal: InactiveVirtualSchemaProposal;
}
export interface QueryGetInactiveVirtualSchemaProposalResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetInactiveVirtualSchemaProposalResponse';
  value: Uint8Array;
}
export interface QueryGetInactiveVirtualSchemaProposalResponseAmino {
  inactiveVirtualSchemaProposal?: InactiveVirtualSchemaProposalAmino;
}
export interface QueryGetInactiveVirtualSchemaProposalResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryGetInactiveVirtualSchemaProposalResponse';
  value: QueryGetInactiveVirtualSchemaProposalResponseAmino;
}
export interface QueryGetInactiveVirtualSchemaProposalResponseSDKType {
  inactiveVirtualSchemaProposal: InactiveVirtualSchemaProposalSDKType;
}
export interface QueryAllInactiveVirtualSchemaProposalRequest {
  pagination?: PageRequest;
}
export interface QueryAllInactiveVirtualSchemaProposalRequestProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllInactiveVirtualSchemaProposalRequest';
  value: Uint8Array;
}
export interface QueryAllInactiveVirtualSchemaProposalRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllInactiveVirtualSchemaProposalRequestAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllInactiveVirtualSchemaProposalRequest';
  value: QueryAllInactiveVirtualSchemaProposalRequestAmino;
}
export interface QueryAllInactiveVirtualSchemaProposalRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllInactiveVirtualSchemaProposalResponse {
  inactiveVirtualSchemaProposal: InactiveVirtualSchemaProposal[];
  pagination?: PageResponse;
}
export interface QueryAllInactiveVirtualSchemaProposalResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllInactiveVirtualSchemaProposalResponse';
  value: Uint8Array;
}
export interface QueryAllInactiveVirtualSchemaProposalResponseAmino {
  inactiveVirtualSchemaProposal?: InactiveVirtualSchemaProposalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllInactiveVirtualSchemaProposalResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.QueryAllInactiveVirtualSchemaProposalResponse';
  value: QueryAllInactiveVirtualSchemaProposalResponseAmino;
}
export interface QueryAllInactiveVirtualSchemaProposalResponseSDKType {
  inactiveVirtualSchemaProposal: InactiveVirtualSchemaProposalSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryParamsRequest',
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryParamsRequest',
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryParamsResponse',
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.params = Params.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryParamsResponse',
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTSchemaRequest(): QueryGetNFTSchemaRequest {
  return {
    code: ''
  };
}
export const QueryGetNFTSchemaRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaRequest',
  encode(message: QueryGetNFTSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.code = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNFTSchemaRequest>): QueryGetNFTSchemaRequest {
    const message = createBaseQueryGetNFTSchemaRequest();
    message.code = object.code ?? '';
    return message;
  },
  fromAmino(object: QueryGetNFTSchemaRequestAmino): QueryGetNFTSchemaRequest {
    const message = createBaseQueryGetNFTSchemaRequest();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    return message;
  },
  toAmino(message: QueryGetNFTSchemaRequest): QueryGetNFTSchemaRequestAmino {
    const obj: any = {};
    obj.code = message.code === '' ? undefined : message.code;
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTSchemaRequestAminoMsg): QueryGetNFTSchemaRequest {
    return QueryGetNFTSchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTSchemaRequestProtoMsg): QueryGetNFTSchemaRequest {
    return QueryGetNFTSchemaRequest.decode(message.value);
  },
  toProto(message: QueryGetNFTSchemaRequest): Uint8Array {
    return QueryGetNFTSchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTSchemaRequest): QueryGetNFTSchemaRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaRequest',
      value: QueryGetNFTSchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTSchemaResponse(): QueryGetNFTSchemaResponse {
  return {
    nFTSchema: NFTSchema.fromPartial({})
  };
}
export const QueryGetNFTSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaResponse',
  encode(message: QueryGetNFTSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nFTSchema !== undefined) {
      NFTSchema.encode(message.nFTSchema, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nFTSchema = NFTSchema.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNFTSchemaResponse>): QueryGetNFTSchemaResponse {
    const message = createBaseQueryGetNFTSchemaResponse();
    message.nFTSchema = object.nFTSchema !== undefined && object.nFTSchema !== null ? NFTSchema.fromPartial(object.nFTSchema) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNFTSchemaResponseAmino): QueryGetNFTSchemaResponse {
    const message = createBaseQueryGetNFTSchemaResponse();
    if (object.nFTSchema !== undefined && object.nFTSchema !== null) {
      message.nFTSchema = NFTSchema.fromAmino(object.nFTSchema);
    }
    return message;
  },
  toAmino(message: QueryGetNFTSchemaResponse): QueryGetNFTSchemaResponseAmino {
    const obj: any = {};
    obj.nFTSchema = message.nFTSchema ? NFTSchema.toAmino(message.nFTSchema) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTSchemaResponseAminoMsg): QueryGetNFTSchemaResponse {
    return QueryGetNFTSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTSchemaResponseProtoMsg): QueryGetNFTSchemaResponse {
    return QueryGetNFTSchemaResponse.decode(message.value);
  },
  toProto(message: QueryGetNFTSchemaResponse): Uint8Array {
    return QueryGetNFTSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTSchemaResponse): QueryGetNFTSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaResponse',
      value: QueryGetNFTSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllNFTSchemaRequest(): QueryAllNFTSchemaRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllNFTSchemaRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaRequest',
  encode(message: QueryAllNFTSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNFTSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNFTSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllNFTSchemaRequest>): QueryAllNFTSchemaRequest {
    const message = createBaseQueryAllNFTSchemaRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllNFTSchemaRequestAmino): QueryAllNFTSchemaRequest {
    const message = createBaseQueryAllNFTSchemaRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllNFTSchemaRequest): QueryAllNFTSchemaRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllNFTSchemaRequestAminoMsg): QueryAllNFTSchemaRequest {
    return QueryAllNFTSchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNFTSchemaRequestProtoMsg): QueryAllNFTSchemaRequest {
    return QueryAllNFTSchemaRequest.decode(message.value);
  },
  toProto(message: QueryAllNFTSchemaRequest): Uint8Array {
    return QueryAllNFTSchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNFTSchemaRequest): QueryAllNFTSchemaRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaRequest',
      value: QueryAllNFTSchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllNFTSchemaResponse(): QueryAllNFTSchemaResponse {
  return {
    nFTSchema: [],
    pagination: undefined
  };
}
export const QueryAllNFTSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaResponse',
  encode(message: QueryAllNFTSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nFTSchema) {
      NFTSchema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNFTSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNFTSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nFTSchema.push(NFTSchema.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllNFTSchemaResponse>): QueryAllNFTSchemaResponse {
    const message = createBaseQueryAllNFTSchemaResponse();
    message.nFTSchema = object.nFTSchema?.map(e => NFTSchema.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllNFTSchemaResponseAmino): QueryAllNFTSchemaResponse {
    const message = createBaseQueryAllNFTSchemaResponse();
    message.nFTSchema = object.nFTSchema?.map(e => NFTSchema.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllNFTSchemaResponse): QueryAllNFTSchemaResponseAmino {
    const obj: any = {};
    if (message.nFTSchema) {
      obj.nFTSchema = message.nFTSchema.map(e => e ? NFTSchema.toAmino(e) : undefined);
    } else {
      obj.nFTSchema = message.nFTSchema;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllNFTSchemaResponseAminoMsg): QueryAllNFTSchemaResponse {
    return QueryAllNFTSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNFTSchemaResponseProtoMsg): QueryAllNFTSchemaResponse {
    return QueryAllNFTSchemaResponse.decode(message.value);
  },
  toProto(message: QueryAllNFTSchemaResponse): Uint8Array {
    return QueryAllNFTSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNFTSchemaResponse): QueryAllNFTSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaResponse',
      value: QueryAllNFTSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNftDataRequest(): QueryGetNftDataRequest {
  return {
    nftSchemaCode: '',
    tokenId: '',
    withGlobal: false
  };
}
export const QueryGetNftDataRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftDataRequest',
  encode(message: QueryGetNftDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.withGlobal === true) {
      writer.uint32(24).bool(message.withGlobal);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.tokenId = reader.string();
        break;
      case 3:
        message.withGlobal = reader.bool();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNftDataRequest>): QueryGetNftDataRequest {
    const message = createBaseQueryGetNftDataRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    message.withGlobal = object.withGlobal ?? false;
    return message;
  },
  fromAmino(object: QueryGetNftDataRequestAmino): QueryGetNftDataRequest {
    const message = createBaseQueryGetNftDataRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    if (object.withGlobal !== undefined && object.withGlobal !== null) {
      message.withGlobal = object.withGlobal;
    }
    return message;
  },
  toAmino(message: QueryGetNftDataRequest): QueryGetNftDataRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === '' ? undefined : message.tokenId;
    obj.withGlobal = message.withGlobal === false ? undefined : message.withGlobal;
    return obj;
  },
  fromAminoMsg(object: QueryGetNftDataRequestAminoMsg): QueryGetNftDataRequest {
    return QueryGetNftDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNftDataRequestProtoMsg): QueryGetNftDataRequest {
    return QueryGetNftDataRequest.decode(message.value);
  },
  toProto(message: QueryGetNftDataRequest): Uint8Array {
    return QueryGetNftDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNftDataRequest): QueryGetNftDataRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftDataRequest',
      value: QueryGetNftDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNftDataResponse(): QueryGetNftDataResponse {
  return {
    nftData: NftData.fromPartial({})
  };
}
export const QueryGetNftDataResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftDataResponse',
  encode(message: QueryGetNftDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftData !== undefined) {
      NftData.encode(message.nftData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftData = NftData.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNftDataResponse>): QueryGetNftDataResponse {
    const message = createBaseQueryGetNftDataResponse();
    message.nftData = object.nftData !== undefined && object.nftData !== null ? NftData.fromPartial(object.nftData) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNftDataResponseAmino): QueryGetNftDataResponse {
    const message = createBaseQueryGetNftDataResponse();
    if (object.nftData !== undefined && object.nftData !== null) {
      message.nftData = NftData.fromAmino(object.nftData);
    }
    return message;
  },
  toAmino(message: QueryGetNftDataResponse): QueryGetNftDataResponseAmino {
    const obj: any = {};
    obj.nftData = message.nftData ? NftData.toAmino(message.nftData) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNftDataResponseAminoMsg): QueryGetNftDataResponse {
    return QueryGetNftDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNftDataResponseProtoMsg): QueryGetNftDataResponse {
    return QueryGetNftDataResponse.decode(message.value);
  },
  toProto(message: QueryGetNftDataResponse): Uint8Array {
    return QueryGetNftDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNftDataResponse): QueryGetNftDataResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftDataResponse',
      value: QueryGetNftDataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllNftDataRequest(): QueryAllNftDataRequest {
  return {
    withGlobal: false,
    pagination: undefined
  };
}
export const QueryAllNftDataRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNftDataRequest',
  encode(message: QueryAllNftDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withGlobal === true) {
      writer.uint32(8).bool(message.withGlobal);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNftDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNftDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.withGlobal = reader.bool();
        break;
      case 2:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllNftDataRequest>): QueryAllNftDataRequest {
    const message = createBaseQueryAllNftDataRequest();
    message.withGlobal = object.withGlobal ?? false;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllNftDataRequestAmino): QueryAllNftDataRequest {
    const message = createBaseQueryAllNftDataRequest();
    if (object.withGlobal !== undefined && object.withGlobal !== null) {
      message.withGlobal = object.withGlobal;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllNftDataRequest): QueryAllNftDataRequestAmino {
    const obj: any = {};
    obj.withGlobal = message.withGlobal === false ? undefined : message.withGlobal;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllNftDataRequestAminoMsg): QueryAllNftDataRequest {
    return QueryAllNftDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNftDataRequestProtoMsg): QueryAllNftDataRequest {
    return QueryAllNftDataRequest.decode(message.value);
  },
  toProto(message: QueryAllNftDataRequest): Uint8Array {
    return QueryAllNftDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNftDataRequest): QueryAllNftDataRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNftDataRequest',
      value: QueryAllNftDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllNftDataResponse(): QueryAllNftDataResponse {
  return {
    nftData: [],
    pagination: undefined
  };
}
export const QueryAllNftDataResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNftDataResponse',
  encode(message: QueryAllNftDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nftData) {
      NftData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNftDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNftDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftData.push(NftData.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllNftDataResponse>): QueryAllNftDataResponse {
    const message = createBaseQueryAllNftDataResponse();
    message.nftData = object.nftData?.map(e => NftData.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllNftDataResponseAmino): QueryAllNftDataResponse {
    const message = createBaseQueryAllNftDataResponse();
    message.nftData = object.nftData?.map(e => NftData.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllNftDataResponse): QueryAllNftDataResponseAmino {
    const obj: any = {};
    if (message.nftData) {
      obj.nftData = message.nftData.map(e => e ? NftData.toAmino(e) : undefined);
    } else {
      obj.nftData = message.nftData;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllNftDataResponseAminoMsg): QueryAllNftDataResponse {
    return QueryAllNftDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNftDataResponseProtoMsg): QueryAllNftDataResponse {
    return QueryAllNftDataResponse.decode(message.value);
  },
  toProto(message: QueryAllNftDataResponse): Uint8Array {
    return QueryAllNftDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNftDataResponse): QueryAllNftDataResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNftDataResponse',
      value: QueryAllNftDataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionByRefIdRequest(): QueryGetActionByRefIdRequest {
  return {
    refId: ''
  };
}
export const QueryGetActionByRefIdRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionByRefIdRequest',
  encode(message: QueryGetActionByRefIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refId !== '') {
      writer.uint32(10).string(message.refId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionByRefIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionByRefIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.refId = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionByRefIdRequest>): QueryGetActionByRefIdRequest {
    const message = createBaseQueryGetActionByRefIdRequest();
    message.refId = object.refId ?? '';
    return message;
  },
  fromAmino(object: QueryGetActionByRefIdRequestAmino): QueryGetActionByRefIdRequest {
    const message = createBaseQueryGetActionByRefIdRequest();
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = object.refId;
    }
    return message;
  },
  toAmino(message: QueryGetActionByRefIdRequest): QueryGetActionByRefIdRequestAmino {
    const obj: any = {};
    obj.refId = message.refId === '' ? undefined : message.refId;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionByRefIdRequestAminoMsg): QueryGetActionByRefIdRequest {
    return QueryGetActionByRefIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionByRefIdRequestProtoMsg): QueryGetActionByRefIdRequest {
    return QueryGetActionByRefIdRequest.decode(message.value);
  },
  toProto(message: QueryGetActionByRefIdRequest): Uint8Array {
    return QueryGetActionByRefIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionByRefIdRequest): QueryGetActionByRefIdRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionByRefIdRequest',
      value: QueryGetActionByRefIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionByRefIdResponse(): QueryGetActionByRefIdResponse {
  return {
    actionByRefId: ActionByRefId.fromPartial({})
  };
}
export const QueryGetActionByRefIdResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionByRefIdResponse',
  encode(message: QueryGetActionByRefIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionByRefId !== undefined) {
      ActionByRefId.encode(message.actionByRefId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionByRefIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionByRefIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionByRefId = ActionByRefId.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionByRefIdResponse>): QueryGetActionByRefIdResponse {
    const message = createBaseQueryGetActionByRefIdResponse();
    message.actionByRefId = object.actionByRefId !== undefined && object.actionByRefId !== null ? ActionByRefId.fromPartial(object.actionByRefId) : undefined;
    return message;
  },
  fromAmino(object: QueryGetActionByRefIdResponseAmino): QueryGetActionByRefIdResponse {
    const message = createBaseQueryGetActionByRefIdResponse();
    if (object.actionByRefId !== undefined && object.actionByRefId !== null) {
      message.actionByRefId = ActionByRefId.fromAmino(object.actionByRefId);
    }
    return message;
  },
  toAmino(message: QueryGetActionByRefIdResponse): QueryGetActionByRefIdResponseAmino {
    const obj: any = {};
    obj.actionByRefId = message.actionByRefId ? ActionByRefId.toAmino(message.actionByRefId) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionByRefIdResponseAminoMsg): QueryGetActionByRefIdResponse {
    return QueryGetActionByRefIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionByRefIdResponseProtoMsg): QueryGetActionByRefIdResponse {
    return QueryGetActionByRefIdResponse.decode(message.value);
  },
  toProto(message: QueryGetActionByRefIdResponse): Uint8Array {
    return QueryGetActionByRefIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionByRefIdResponse): QueryGetActionByRefIdResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionByRefIdResponse',
      value: QueryGetActionByRefIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionByRefIdRequest(): QueryAllActionByRefIdRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllActionByRefIdRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionByRefIdRequest',
  encode(message: QueryAllActionByRefIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActionByRefIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionByRefIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActionByRefIdRequest>): QueryAllActionByRefIdRequest {
    const message = createBaseQueryAllActionByRefIdRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionByRefIdRequestAmino): QueryAllActionByRefIdRequest {
    const message = createBaseQueryAllActionByRefIdRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionByRefIdRequest): QueryAllActionByRefIdRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionByRefIdRequestAminoMsg): QueryAllActionByRefIdRequest {
    return QueryAllActionByRefIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionByRefIdRequestProtoMsg): QueryAllActionByRefIdRequest {
    return QueryAllActionByRefIdRequest.decode(message.value);
  },
  toProto(message: QueryAllActionByRefIdRequest): Uint8Array {
    return QueryAllActionByRefIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionByRefIdRequest): QueryAllActionByRefIdRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionByRefIdRequest',
      value: QueryAllActionByRefIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionByRefIdResponse(): QueryAllActionByRefIdResponse {
  return {
    actionByRefId: [],
    pagination: undefined
  };
}
export const QueryAllActionByRefIdResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionByRefIdResponse',
  encode(message: QueryAllActionByRefIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actionByRefId) {
      ActionByRefId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActionByRefIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionByRefIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionByRefId.push(ActionByRefId.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActionByRefIdResponse>): QueryAllActionByRefIdResponse {
    const message = createBaseQueryAllActionByRefIdResponse();
    message.actionByRefId = object.actionByRefId?.map(e => ActionByRefId.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionByRefIdResponseAmino): QueryAllActionByRefIdResponse {
    const message = createBaseQueryAllActionByRefIdResponse();
    message.actionByRefId = object.actionByRefId?.map(e => ActionByRefId.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionByRefIdResponse): QueryAllActionByRefIdResponseAmino {
    const obj: any = {};
    if (message.actionByRefId) {
      obj.actionByRefId = message.actionByRefId.map(e => e ? ActionByRefId.toAmino(e) : undefined);
    } else {
      obj.actionByRefId = message.actionByRefId;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionByRefIdResponseAminoMsg): QueryAllActionByRefIdResponse {
    return QueryAllActionByRefIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionByRefIdResponseProtoMsg): QueryAllActionByRefIdResponse {
    return QueryAllActionByRefIdResponse.decode(message.value);
  },
  toProto(message: QueryAllActionByRefIdResponse): Uint8Array {
    return QueryAllActionByRefIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionByRefIdResponse): QueryAllActionByRefIdResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionByRefIdResponse',
      value: QueryAllActionByRefIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrganizationRequest(): QueryGetOrganizationRequest {
  return {
    name: ''
  };
}
export const QueryGetOrganizationRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetOrganizationRequest',
  encode(message: QueryGetOrganizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrganizationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrganizationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.name = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetOrganizationRequest>): QueryGetOrganizationRequest {
    const message = createBaseQueryGetOrganizationRequest();
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: QueryGetOrganizationRequestAmino): QueryGetOrganizationRequest {
    const message = createBaseQueryGetOrganizationRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetOrganizationRequest): QueryGetOrganizationRequestAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrganizationRequestAminoMsg): QueryGetOrganizationRequest {
    return QueryGetOrganizationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrganizationRequestProtoMsg): QueryGetOrganizationRequest {
    return QueryGetOrganizationRequest.decode(message.value);
  },
  toProto(message: QueryGetOrganizationRequest): Uint8Array {
    return QueryGetOrganizationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrganizationRequest): QueryGetOrganizationRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetOrganizationRequest',
      value: QueryGetOrganizationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrganizationResponse(): QueryGetOrganizationResponse {
  return {
    organization: Organization.fromPartial({})
  };
}
export const QueryGetOrganizationResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetOrganizationResponse',
  encode(message: QueryGetOrganizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organization !== undefined) {
      Organization.encode(message.organization, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrganizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrganizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.organization = Organization.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetOrganizationResponse>): QueryGetOrganizationResponse {
    const message = createBaseQueryGetOrganizationResponse();
    message.organization = object.organization !== undefined && object.organization !== null ? Organization.fromPartial(object.organization) : undefined;
    return message;
  },
  fromAmino(object: QueryGetOrganizationResponseAmino): QueryGetOrganizationResponse {
    const message = createBaseQueryGetOrganizationResponse();
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromAmino(object.organization);
    }
    return message;
  },
  toAmino(message: QueryGetOrganizationResponse): QueryGetOrganizationResponseAmino {
    const obj: any = {};
    obj.organization = message.organization ? Organization.toAmino(message.organization) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrganizationResponseAminoMsg): QueryGetOrganizationResponse {
    return QueryGetOrganizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrganizationResponseProtoMsg): QueryGetOrganizationResponse {
    return QueryGetOrganizationResponse.decode(message.value);
  },
  toProto(message: QueryGetOrganizationResponse): Uint8Array {
    return QueryGetOrganizationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrganizationResponse): QueryGetOrganizationResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetOrganizationResponse',
      value: QueryGetOrganizationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllOrganizationRequest(): QueryAllOrganizationRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllOrganizationRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllOrganizationRequest',
  encode(message: QueryAllOrganizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrganizationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrganizationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllOrganizationRequest>): QueryAllOrganizationRequest {
    const message = createBaseQueryAllOrganizationRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOrganizationRequestAmino): QueryAllOrganizationRequest {
    const message = createBaseQueryAllOrganizationRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllOrganizationRequest): QueryAllOrganizationRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOrganizationRequestAminoMsg): QueryAllOrganizationRequest {
    return QueryAllOrganizationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOrganizationRequestProtoMsg): QueryAllOrganizationRequest {
    return QueryAllOrganizationRequest.decode(message.value);
  },
  toProto(message: QueryAllOrganizationRequest): Uint8Array {
    return QueryAllOrganizationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOrganizationRequest): QueryAllOrganizationRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllOrganizationRequest',
      value: QueryAllOrganizationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllOrganizationResponse(): QueryAllOrganizationResponse {
  return {
    organization: [],
    pagination: undefined
  };
}
export const QueryAllOrganizationResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllOrganizationResponse',
  encode(message: QueryAllOrganizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.organization) {
      Organization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrganizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrganizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.organization.push(Organization.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllOrganizationResponse>): QueryAllOrganizationResponse {
    const message = createBaseQueryAllOrganizationResponse();
    message.organization = object.organization?.map(e => Organization.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOrganizationResponseAmino): QueryAllOrganizationResponse {
    const message = createBaseQueryAllOrganizationResponse();
    message.organization = object.organization?.map(e => Organization.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllOrganizationResponse): QueryAllOrganizationResponseAmino {
    const obj: any = {};
    if (message.organization) {
      obj.organization = message.organization.map(e => e ? Organization.toAmino(e) : undefined);
    } else {
      obj.organization = message.organization;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOrganizationResponseAminoMsg): QueryAllOrganizationResponse {
    return QueryAllOrganizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOrganizationResponseProtoMsg): QueryAllOrganizationResponse {
    return QueryAllOrganizationResponse.decode(message.value);
  },
  toProto(message: QueryAllOrganizationResponse): Uint8Array {
    return QueryAllOrganizationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOrganizationResponse): QueryAllOrganizationResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllOrganizationResponse',
      value: QueryAllOrganizationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNftCollectionRequest(): QueryGetNftCollectionRequest {
  return {
    nftSchemaCode: '',
    pagination: undefined
  };
}
export const QueryGetNftCollectionRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftCollectionRequest',
  encode(message: QueryGetNftCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNftCollectionRequest>): QueryGetNftCollectionRequest {
    const message = createBaseQueryGetNftCollectionRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNftCollectionRequestAmino): QueryGetNftCollectionRequest {
    const message = createBaseQueryGetNftCollectionRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetNftCollectionRequest): QueryGetNftCollectionRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNftCollectionRequestAminoMsg): QueryGetNftCollectionRequest {
    return QueryGetNftCollectionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNftCollectionRequestProtoMsg): QueryGetNftCollectionRequest {
    return QueryGetNftCollectionRequest.decode(message.value);
  },
  toProto(message: QueryGetNftCollectionRequest): Uint8Array {
    return QueryGetNftCollectionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNftCollectionRequest): QueryGetNftCollectionRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftCollectionRequest',
      value: QueryGetNftCollectionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNftCollectionResponse(): QueryGetNftCollectionResponse {
  return {
    nftCollection: [],
    pagination: undefined
  };
}
export const QueryGetNftCollectionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftCollectionResponse',
  encode(message: QueryGetNftCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nftCollection) {
      NftData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftCollection.push(NftData.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNftCollectionResponse>): QueryGetNftCollectionResponse {
    const message = createBaseQueryGetNftCollectionResponse();
    message.nftCollection = object.nftCollection?.map(e => NftData.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNftCollectionResponseAmino): QueryGetNftCollectionResponse {
    const message = createBaseQueryGetNftCollectionResponse();
    message.nftCollection = object.nftCollection?.map(e => NftData.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetNftCollectionResponse): QueryGetNftCollectionResponseAmino {
    const obj: any = {};
    if (message.nftCollection) {
      obj.nftCollection = message.nftCollection.map(e => e ? NftData.toAmino(e) : undefined);
    } else {
      obj.nftCollection = message.nftCollection;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNftCollectionResponseAminoMsg): QueryGetNftCollectionResponse {
    return QueryGetNftCollectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNftCollectionResponseProtoMsg): QueryGetNftCollectionResponse {
    return QueryGetNftCollectionResponse.decode(message.value);
  },
  toProto(message: QueryGetNftCollectionResponse): Uint8Array {
    return QueryGetNftCollectionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNftCollectionResponse): QueryGetNftCollectionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNftCollectionResponse',
      value: QueryGetNftCollectionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTSchemaByContractRequest(): QueryGetNFTSchemaByContractRequest {
  return {
    originContractAddress: ''
  };
}
export const QueryGetNFTSchemaByContractRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaByContractRequest',
  encode(message: QueryGetNFTSchemaByContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originContractAddress !== '') {
      writer.uint32(10).string(message.originContractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTSchemaByContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTSchemaByContractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.originContractAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNFTSchemaByContractRequest>): QueryGetNFTSchemaByContractRequest {
    const message = createBaseQueryGetNFTSchemaByContractRequest();
    message.originContractAddress = object.originContractAddress ?? '';
    return message;
  },
  fromAmino(object: QueryGetNFTSchemaByContractRequestAmino): QueryGetNFTSchemaByContractRequest {
    const message = createBaseQueryGetNFTSchemaByContractRequest();
    if (object.originContractAddress !== undefined && object.originContractAddress !== null) {
      message.originContractAddress = object.originContractAddress;
    }
    return message;
  },
  toAmino(message: QueryGetNFTSchemaByContractRequest): QueryGetNFTSchemaByContractRequestAmino {
    const obj: any = {};
    obj.originContractAddress = message.originContractAddress === '' ? undefined : message.originContractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTSchemaByContractRequestAminoMsg): QueryGetNFTSchemaByContractRequest {
    return QueryGetNFTSchemaByContractRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTSchemaByContractRequestProtoMsg): QueryGetNFTSchemaByContractRequest {
    return QueryGetNFTSchemaByContractRequest.decode(message.value);
  },
  toProto(message: QueryGetNFTSchemaByContractRequest): Uint8Array {
    return QueryGetNFTSchemaByContractRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTSchemaByContractRequest): QueryGetNFTSchemaByContractRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaByContractRequest',
      value: QueryGetNFTSchemaByContractRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTSchemaByContractResponse(): QueryGetNFTSchemaByContractResponse {
  return {
    nFTSchemaByContract: NFTSchemaByContract.fromPartial({})
  };
}
export const QueryGetNFTSchemaByContractResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaByContractResponse',
  encode(message: QueryGetNFTSchemaByContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nFTSchemaByContract !== undefined) {
      NFTSchemaByContract.encode(message.nFTSchemaByContract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTSchemaByContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTSchemaByContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nFTSchemaByContract = NFTSchemaByContract.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNFTSchemaByContractResponse>): QueryGetNFTSchemaByContractResponse {
    const message = createBaseQueryGetNFTSchemaByContractResponse();
    message.nFTSchemaByContract = object.nFTSchemaByContract !== undefined && object.nFTSchemaByContract !== null ? NFTSchemaByContract.fromPartial(object.nFTSchemaByContract) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNFTSchemaByContractResponseAmino): QueryGetNFTSchemaByContractResponse {
    const message = createBaseQueryGetNFTSchemaByContractResponse();
    if (object.nFTSchemaByContract !== undefined && object.nFTSchemaByContract !== null) {
      message.nFTSchemaByContract = NFTSchemaByContract.fromAmino(object.nFTSchemaByContract);
    }
    return message;
  },
  toAmino(message: QueryGetNFTSchemaByContractResponse): QueryGetNFTSchemaByContractResponseAmino {
    const obj: any = {};
    obj.nFTSchemaByContract = message.nFTSchemaByContract ? NFTSchemaByContract.toAmino(message.nFTSchemaByContract) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTSchemaByContractResponseAminoMsg): QueryGetNFTSchemaByContractResponse {
    return QueryGetNFTSchemaByContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTSchemaByContractResponseProtoMsg): QueryGetNFTSchemaByContractResponse {
    return QueryGetNFTSchemaByContractResponse.decode(message.value);
  },
  toProto(message: QueryGetNFTSchemaByContractResponse): Uint8Array {
    return QueryGetNFTSchemaByContractResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTSchemaByContractResponse): QueryGetNFTSchemaByContractResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTSchemaByContractResponse',
      value: QueryGetNFTSchemaByContractResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllNFTSchemaByContractRequest(): QueryAllNFTSchemaByContractRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllNFTSchemaByContractRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaByContractRequest',
  encode(message: QueryAllNFTSchemaByContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNFTSchemaByContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNFTSchemaByContractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllNFTSchemaByContractRequest>): QueryAllNFTSchemaByContractRequest {
    const message = createBaseQueryAllNFTSchemaByContractRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllNFTSchemaByContractRequestAmino): QueryAllNFTSchemaByContractRequest {
    const message = createBaseQueryAllNFTSchemaByContractRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllNFTSchemaByContractRequest): QueryAllNFTSchemaByContractRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllNFTSchemaByContractRequestAminoMsg): QueryAllNFTSchemaByContractRequest {
    return QueryAllNFTSchemaByContractRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNFTSchemaByContractRequestProtoMsg): QueryAllNFTSchemaByContractRequest {
    return QueryAllNFTSchemaByContractRequest.decode(message.value);
  },
  toProto(message: QueryAllNFTSchemaByContractRequest): Uint8Array {
    return QueryAllNFTSchemaByContractRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNFTSchemaByContractRequest): QueryAllNFTSchemaByContractRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaByContractRequest',
      value: QueryAllNFTSchemaByContractRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllNFTSchemaByContractResponse(): QueryAllNFTSchemaByContractResponse {
  return {
    nFTSchemaByContract: [],
    pagination: undefined
  };
}
export const QueryAllNFTSchemaByContractResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaByContractResponse',
  encode(message: QueryAllNFTSchemaByContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nFTSchemaByContract) {
      NFTSchemaByContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNFTSchemaByContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNFTSchemaByContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nFTSchemaByContract.push(NFTSchemaByContract.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllNFTSchemaByContractResponse>): QueryAllNFTSchemaByContractResponse {
    const message = createBaseQueryAllNFTSchemaByContractResponse();
    message.nFTSchemaByContract = object.nFTSchemaByContract?.map(e => NFTSchemaByContract.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllNFTSchemaByContractResponseAmino): QueryAllNFTSchemaByContractResponse {
    const message = createBaseQueryAllNFTSchemaByContractResponse();
    message.nFTSchemaByContract = object.nFTSchemaByContract?.map(e => NFTSchemaByContract.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllNFTSchemaByContractResponse): QueryAllNFTSchemaByContractResponseAmino {
    const obj: any = {};
    if (message.nFTSchemaByContract) {
      obj.nFTSchemaByContract = message.nFTSchemaByContract.map(e => e ? NFTSchemaByContract.toAmino(e) : undefined);
    } else {
      obj.nFTSchemaByContract = message.nFTSchemaByContract;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllNFTSchemaByContractResponseAminoMsg): QueryAllNFTSchemaByContractResponse {
    return QueryAllNFTSchemaByContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNFTSchemaByContractResponseProtoMsg): QueryAllNFTSchemaByContractResponse {
    return QueryAllNFTSchemaByContractResponse.decode(message.value);
  },
  toProto(message: QueryAllNFTSchemaByContractResponse): Uint8Array {
    return QueryAllNFTSchemaByContractResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNFTSchemaByContractResponse): QueryAllNFTSchemaByContractResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllNFTSchemaByContractResponse',
      value: QueryAllNFTSchemaByContractResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTFeeConfigRequest(): QueryGetNFTFeeConfigRequest {
  return {};
}
export const QueryGetNFTFeeConfigRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeConfigRequest',
  encode(_: QueryGetNFTFeeConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTFeeConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTFeeConfigRequest();
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
  fromPartial(_: Partial<QueryGetNFTFeeConfigRequest>): QueryGetNFTFeeConfigRequest {
    const message = createBaseQueryGetNFTFeeConfigRequest();
    return message;
  },
  fromAmino(_: QueryGetNFTFeeConfigRequestAmino): QueryGetNFTFeeConfigRequest {
    const message = createBaseQueryGetNFTFeeConfigRequest();
    return message;
  },
  toAmino(_: QueryGetNFTFeeConfigRequest): QueryGetNFTFeeConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTFeeConfigRequestAminoMsg): QueryGetNFTFeeConfigRequest {
    return QueryGetNFTFeeConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTFeeConfigRequestProtoMsg): QueryGetNFTFeeConfigRequest {
    return QueryGetNFTFeeConfigRequest.decode(message.value);
  },
  toProto(message: QueryGetNFTFeeConfigRequest): Uint8Array {
    return QueryGetNFTFeeConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTFeeConfigRequest): QueryGetNFTFeeConfigRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeConfigRequest',
      value: QueryGetNFTFeeConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTFeeConfigResponse(): QueryGetNFTFeeConfigResponse {
  return {
    nFTFeeConfig: NFTFeeConfig.fromPartial({})
  };
}
export const QueryGetNFTFeeConfigResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeConfigResponse',
  encode(message: QueryGetNFTFeeConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nFTFeeConfig !== undefined) {
      NFTFeeConfig.encode(message.nFTFeeConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTFeeConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTFeeConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nFTFeeConfig = NFTFeeConfig.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNFTFeeConfigResponse>): QueryGetNFTFeeConfigResponse {
    const message = createBaseQueryGetNFTFeeConfigResponse();
    message.nFTFeeConfig = object.nFTFeeConfig !== undefined && object.nFTFeeConfig !== null ? NFTFeeConfig.fromPartial(object.nFTFeeConfig) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNFTFeeConfigResponseAmino): QueryGetNFTFeeConfigResponse {
    const message = createBaseQueryGetNFTFeeConfigResponse();
    if (object.NFTFeeConfig !== undefined && object.NFTFeeConfig !== null) {
      message.nFTFeeConfig = NFTFeeConfig.fromAmino(object.NFTFeeConfig);
    }
    return message;
  },
  toAmino(message: QueryGetNFTFeeConfigResponse): QueryGetNFTFeeConfigResponseAmino {
    const obj: any = {};
    obj.NFTFeeConfig = message.nFTFeeConfig ? NFTFeeConfig.toAmino(message.nFTFeeConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTFeeConfigResponseAminoMsg): QueryGetNFTFeeConfigResponse {
    return QueryGetNFTFeeConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTFeeConfigResponseProtoMsg): QueryGetNFTFeeConfigResponse {
    return QueryGetNFTFeeConfigResponse.decode(message.value);
  },
  toProto(message: QueryGetNFTFeeConfigResponse): Uint8Array {
    return QueryGetNFTFeeConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTFeeConfigResponse): QueryGetNFTFeeConfigResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeConfigResponse',
      value: QueryGetNFTFeeConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTFeeBalanceRequest(): QueryGetNFTFeeBalanceRequest {
  return {};
}
export const QueryGetNFTFeeBalanceRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeBalanceRequest',
  encode(_: QueryGetNFTFeeBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTFeeBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTFeeBalanceRequest();
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
  fromPartial(_: Partial<QueryGetNFTFeeBalanceRequest>): QueryGetNFTFeeBalanceRequest {
    const message = createBaseQueryGetNFTFeeBalanceRequest();
    return message;
  },
  fromAmino(_: QueryGetNFTFeeBalanceRequestAmino): QueryGetNFTFeeBalanceRequest {
    const message = createBaseQueryGetNFTFeeBalanceRequest();
    return message;
  },
  toAmino(_: QueryGetNFTFeeBalanceRequest): QueryGetNFTFeeBalanceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTFeeBalanceRequestAminoMsg): QueryGetNFTFeeBalanceRequest {
    return QueryGetNFTFeeBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTFeeBalanceRequestProtoMsg): QueryGetNFTFeeBalanceRequest {
    return QueryGetNFTFeeBalanceRequest.decode(message.value);
  },
  toProto(message: QueryGetNFTFeeBalanceRequest): Uint8Array {
    return QueryGetNFTFeeBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTFeeBalanceRequest): QueryGetNFTFeeBalanceRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeBalanceRequest',
      value: QueryGetNFTFeeBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNFTFeeBalanceResponse(): QueryGetNFTFeeBalanceResponse {
  return {
    nFTFeeBalance: NFTFeeBalance.fromPartial({})
  };
}
export const QueryGetNFTFeeBalanceResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeBalanceResponse',
  encode(message: QueryGetNFTFeeBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nFTFeeBalance !== undefined) {
      NFTFeeBalance.encode(message.nFTFeeBalance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNFTFeeBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNFTFeeBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nFTFeeBalance = NFTFeeBalance.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetNFTFeeBalanceResponse>): QueryGetNFTFeeBalanceResponse {
    const message = createBaseQueryGetNFTFeeBalanceResponse();
    message.nFTFeeBalance = object.nFTFeeBalance !== undefined && object.nFTFeeBalance !== null ? NFTFeeBalance.fromPartial(object.nFTFeeBalance) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNFTFeeBalanceResponseAmino): QueryGetNFTFeeBalanceResponse {
    const message = createBaseQueryGetNFTFeeBalanceResponse();
    if (object.NFTFeeBalance !== undefined && object.NFTFeeBalance !== null) {
      message.nFTFeeBalance = NFTFeeBalance.fromAmino(object.NFTFeeBalance);
    }
    return message;
  },
  toAmino(message: QueryGetNFTFeeBalanceResponse): QueryGetNFTFeeBalanceResponseAmino {
    const obj: any = {};
    obj.NFTFeeBalance = message.nFTFeeBalance ? NFTFeeBalance.toAmino(message.nFTFeeBalance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNFTFeeBalanceResponseAminoMsg): QueryGetNFTFeeBalanceResponse {
    return QueryGetNFTFeeBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNFTFeeBalanceResponseProtoMsg): QueryGetNFTFeeBalanceResponse {
    return QueryGetNFTFeeBalanceResponse.decode(message.value);
  },
  toProto(message: QueryGetNFTFeeBalanceResponse): Uint8Array {
    return QueryGetNFTFeeBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNFTFeeBalanceResponse): QueryGetNFTFeeBalanceResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetNFTFeeBalanceResponse',
      value: QueryGetNFTFeeBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMetadataCreatorRequest(): QueryGetMetadataCreatorRequest {
  return {
    nftSchemaCode: ''
  };
}
export const QueryGetMetadataCreatorRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetMetadataCreatorRequest',
  encode(message: QueryGetMetadataCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMetadataCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMetadataCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetMetadataCreatorRequest>): QueryGetMetadataCreatorRequest {
    const message = createBaseQueryGetMetadataCreatorRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    return message;
  },
  fromAmino(object: QueryGetMetadataCreatorRequestAmino): QueryGetMetadataCreatorRequest {
    const message = createBaseQueryGetMetadataCreatorRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    return message;
  },
  toAmino(message: QueryGetMetadataCreatorRequest): QueryGetMetadataCreatorRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    return obj;
  },
  fromAminoMsg(object: QueryGetMetadataCreatorRequestAminoMsg): QueryGetMetadataCreatorRequest {
    return QueryGetMetadataCreatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMetadataCreatorRequestProtoMsg): QueryGetMetadataCreatorRequest {
    return QueryGetMetadataCreatorRequest.decode(message.value);
  },
  toProto(message: QueryGetMetadataCreatorRequest): Uint8Array {
    return QueryGetMetadataCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMetadataCreatorRequest): QueryGetMetadataCreatorRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetMetadataCreatorRequest',
      value: QueryGetMetadataCreatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMetadataCreatorResponse(): QueryGetMetadataCreatorResponse {
  return {
    metadataCreator: MetadataCreator.fromPartial({})
  };
}
export const QueryGetMetadataCreatorResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetMetadataCreatorResponse',
  encode(message: QueryGetMetadataCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadataCreator !== undefined) {
      MetadataCreator.encode(message.metadataCreator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMetadataCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMetadataCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.metadataCreator = MetadataCreator.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetMetadataCreatorResponse>): QueryGetMetadataCreatorResponse {
    const message = createBaseQueryGetMetadataCreatorResponse();
    message.metadataCreator = object.metadataCreator !== undefined && object.metadataCreator !== null ? MetadataCreator.fromPartial(object.metadataCreator) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMetadataCreatorResponseAmino): QueryGetMetadataCreatorResponse {
    const message = createBaseQueryGetMetadataCreatorResponse();
    if (object.metadataCreator !== undefined && object.metadataCreator !== null) {
      message.metadataCreator = MetadataCreator.fromAmino(object.metadataCreator);
    }
    return message;
  },
  toAmino(message: QueryGetMetadataCreatorResponse): QueryGetMetadataCreatorResponseAmino {
    const obj: any = {};
    obj.metadataCreator = message.metadataCreator ? MetadataCreator.toAmino(message.metadataCreator) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMetadataCreatorResponseAminoMsg): QueryGetMetadataCreatorResponse {
    return QueryGetMetadataCreatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMetadataCreatorResponseProtoMsg): QueryGetMetadataCreatorResponse {
    return QueryGetMetadataCreatorResponse.decode(message.value);
  },
  toProto(message: QueryGetMetadataCreatorResponse): Uint8Array {
    return QueryGetMetadataCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMetadataCreatorResponse): QueryGetMetadataCreatorResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetMetadataCreatorResponse',
      value: QueryGetMetadataCreatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMetadataCreatorRequest(): QueryAllMetadataCreatorRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllMetadataCreatorRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllMetadataCreatorRequest',
  encode(message: QueryAllMetadataCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMetadataCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMetadataCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllMetadataCreatorRequest>): QueryAllMetadataCreatorRequest {
    const message = createBaseQueryAllMetadataCreatorRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMetadataCreatorRequestAmino): QueryAllMetadataCreatorRequest {
    const message = createBaseQueryAllMetadataCreatorRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMetadataCreatorRequest): QueryAllMetadataCreatorRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMetadataCreatorRequestAminoMsg): QueryAllMetadataCreatorRequest {
    return QueryAllMetadataCreatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMetadataCreatorRequestProtoMsg): QueryAllMetadataCreatorRequest {
    return QueryAllMetadataCreatorRequest.decode(message.value);
  },
  toProto(message: QueryAllMetadataCreatorRequest): Uint8Array {
    return QueryAllMetadataCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMetadataCreatorRequest): QueryAllMetadataCreatorRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllMetadataCreatorRequest',
      value: QueryAllMetadataCreatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMetadataCreatorResponse(): QueryAllMetadataCreatorResponse {
  return {
    metadataCreator: [],
    pagination: undefined
  };
}
export const QueryAllMetadataCreatorResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllMetadataCreatorResponse',
  encode(message: QueryAllMetadataCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.metadataCreator) {
      MetadataCreator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMetadataCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMetadataCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.metadataCreator.push(MetadataCreator.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllMetadataCreatorResponse>): QueryAllMetadataCreatorResponse {
    const message = createBaseQueryAllMetadataCreatorResponse();
    message.metadataCreator = object.metadataCreator?.map(e => MetadataCreator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMetadataCreatorResponseAmino): QueryAllMetadataCreatorResponse {
    const message = createBaseQueryAllMetadataCreatorResponse();
    message.metadataCreator = object.metadataCreator?.map(e => MetadataCreator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMetadataCreatorResponse): QueryAllMetadataCreatorResponseAmino {
    const obj: any = {};
    if (message.metadataCreator) {
      obj.metadataCreator = message.metadataCreator.map(e => e ? MetadataCreator.toAmino(e) : undefined);
    } else {
      obj.metadataCreator = message.metadataCreator;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMetadataCreatorResponseAminoMsg): QueryAllMetadataCreatorResponse {
    return QueryAllMetadataCreatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMetadataCreatorResponseProtoMsg): QueryAllMetadataCreatorResponse {
    return QueryAllMetadataCreatorResponse.decode(message.value);
  },
  toProto(message: QueryAllMetadataCreatorResponse): Uint8Array {
    return QueryAllMetadataCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMetadataCreatorResponse): QueryAllMetadataCreatorResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllMetadataCreatorResponse',
      value: QueryAllMetadataCreatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionExecutorRequest(): QueryGetActionExecutorRequest {
  return {
    nftSchemaCode: '',
    executorAddress: ''
  };
}
export const QueryGetActionExecutorRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionExecutorRequest',
  encode(message: QueryGetActionExecutorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== '') {
      writer.uint32(18).string(message.executorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionExecutorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionExecutorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.executorAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionExecutorRequest>): QueryGetActionExecutorRequest {
    const message = createBaseQueryGetActionExecutorRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.executorAddress = object.executorAddress ?? '';
    return message;
  },
  fromAmino(object: QueryGetActionExecutorRequestAmino): QueryGetActionExecutorRequest {
    const message = createBaseQueryGetActionExecutorRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.executorAddress !== undefined && object.executorAddress !== null) {
      message.executorAddress = object.executorAddress;
    }
    return message;
  },
  toAmino(message: QueryGetActionExecutorRequest): QueryGetActionExecutorRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.executorAddress = message.executorAddress === '' ? undefined : message.executorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionExecutorRequestAminoMsg): QueryGetActionExecutorRequest {
    return QueryGetActionExecutorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionExecutorRequestProtoMsg): QueryGetActionExecutorRequest {
    return QueryGetActionExecutorRequest.decode(message.value);
  },
  toProto(message: QueryGetActionExecutorRequest): Uint8Array {
    return QueryGetActionExecutorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionExecutorRequest): QueryGetActionExecutorRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionExecutorRequest',
      value: QueryGetActionExecutorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionExecutorResponse(): QueryGetActionExecutorResponse {
  return {
    actionExecutor: ActionExecutor.fromPartial({})
  };
}
export const QueryGetActionExecutorResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionExecutorResponse',
  encode(message: QueryGetActionExecutorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionExecutor !== undefined) {
      ActionExecutor.encode(message.actionExecutor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionExecutorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionExecutorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionExecutor = ActionExecutor.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionExecutorResponse>): QueryGetActionExecutorResponse {
    const message = createBaseQueryGetActionExecutorResponse();
    message.actionExecutor = object.actionExecutor !== undefined && object.actionExecutor !== null ? ActionExecutor.fromPartial(object.actionExecutor) : undefined;
    return message;
  },
  fromAmino(object: QueryGetActionExecutorResponseAmino): QueryGetActionExecutorResponse {
    const message = createBaseQueryGetActionExecutorResponse();
    if (object.actionExecutor !== undefined && object.actionExecutor !== null) {
      message.actionExecutor = ActionExecutor.fromAmino(object.actionExecutor);
    }
    return message;
  },
  toAmino(message: QueryGetActionExecutorResponse): QueryGetActionExecutorResponseAmino {
    const obj: any = {};
    obj.actionExecutor = message.actionExecutor ? ActionExecutor.toAmino(message.actionExecutor) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionExecutorResponseAminoMsg): QueryGetActionExecutorResponse {
    return QueryGetActionExecutorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionExecutorResponseProtoMsg): QueryGetActionExecutorResponse {
    return QueryGetActionExecutorResponse.decode(message.value);
  },
  toProto(message: QueryGetActionExecutorResponse): Uint8Array {
    return QueryGetActionExecutorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionExecutorResponse): QueryGetActionExecutorResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionExecutorResponse',
      value: QueryGetActionExecutorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionExecutorRequest(): QueryAllActionExecutorRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllActionExecutorRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionExecutorRequest',
  encode(message: QueryAllActionExecutorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActionExecutorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionExecutorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActionExecutorRequest>): QueryAllActionExecutorRequest {
    const message = createBaseQueryAllActionExecutorRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionExecutorRequestAmino): QueryAllActionExecutorRequest {
    const message = createBaseQueryAllActionExecutorRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionExecutorRequest): QueryAllActionExecutorRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionExecutorRequestAminoMsg): QueryAllActionExecutorRequest {
    return QueryAllActionExecutorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionExecutorRequestProtoMsg): QueryAllActionExecutorRequest {
    return QueryAllActionExecutorRequest.decode(message.value);
  },
  toProto(message: QueryAllActionExecutorRequest): Uint8Array {
    return QueryAllActionExecutorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionExecutorRequest): QueryAllActionExecutorRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionExecutorRequest',
      value: QueryAllActionExecutorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionExecutorResponse(): QueryAllActionExecutorResponse {
  return {
    actionExecutor: [],
    pagination: undefined
  };
}
export const QueryAllActionExecutorResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionExecutorResponse',
  encode(message: QueryAllActionExecutorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actionExecutor) {
      ActionExecutor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActionExecutorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionExecutorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionExecutor.push(ActionExecutor.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActionExecutorResponse>): QueryAllActionExecutorResponse {
    const message = createBaseQueryAllActionExecutorResponse();
    message.actionExecutor = object.actionExecutor?.map(e => ActionExecutor.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionExecutorResponseAmino): QueryAllActionExecutorResponse {
    const message = createBaseQueryAllActionExecutorResponse();
    message.actionExecutor = object.actionExecutor?.map(e => ActionExecutor.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionExecutorResponse): QueryAllActionExecutorResponseAmino {
    const obj: any = {};
    if (message.actionExecutor) {
      obj.actionExecutor = message.actionExecutor.map(e => e ? ActionExecutor.toAmino(e) : undefined);
    } else {
      obj.actionExecutor = message.actionExecutor;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionExecutorResponseAminoMsg): QueryAllActionExecutorResponse {
    return QueryAllActionExecutorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionExecutorResponseProtoMsg): QueryAllActionExecutorResponse {
    return QueryAllActionExecutorResponse.decode(message.value);
  },
  toProto(message: QueryAllActionExecutorResponse): Uint8Array {
    return QueryAllActionExecutorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionExecutorResponse): QueryAllActionExecutorResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionExecutorResponse',
      value: QueryAllActionExecutorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSchemaAttributeRequest(): QueryGetSchemaAttributeRequest {
  return {
    nftSchemaCode: '',
    name: ''
  };
}
export const QueryGetSchemaAttributeRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetSchemaAttributeRequest',
  encode(message: QueryGetSchemaAttributeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSchemaAttributeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSchemaAttributeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetSchemaAttributeRequest>): QueryGetSchemaAttributeRequest {
    const message = createBaseQueryGetSchemaAttributeRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: QueryGetSchemaAttributeRequestAmino): QueryGetSchemaAttributeRequest {
    const message = createBaseQueryGetSchemaAttributeRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetSchemaAttributeRequest): QueryGetSchemaAttributeRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetSchemaAttributeRequestAminoMsg): QueryGetSchemaAttributeRequest {
    return QueryGetSchemaAttributeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSchemaAttributeRequestProtoMsg): QueryGetSchemaAttributeRequest {
    return QueryGetSchemaAttributeRequest.decode(message.value);
  },
  toProto(message: QueryGetSchemaAttributeRequest): Uint8Array {
    return QueryGetSchemaAttributeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSchemaAttributeRequest): QueryGetSchemaAttributeRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetSchemaAttributeRequest',
      value: QueryGetSchemaAttributeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSchemaAttributeResponse(): QueryGetSchemaAttributeResponse {
  return {
    schemaAttribute: SchemaAttribute.fromPartial({})
  };
}
export const QueryGetSchemaAttributeResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetSchemaAttributeResponse',
  encode(message: QueryGetSchemaAttributeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaAttribute !== undefined) {
      SchemaAttribute.encode(message.schemaAttribute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSchemaAttributeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSchemaAttributeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.schemaAttribute = SchemaAttribute.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetSchemaAttributeResponse>): QueryGetSchemaAttributeResponse {
    const message = createBaseQueryGetSchemaAttributeResponse();
    message.schemaAttribute = object.schemaAttribute !== undefined && object.schemaAttribute !== null ? SchemaAttribute.fromPartial(object.schemaAttribute) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSchemaAttributeResponseAmino): QueryGetSchemaAttributeResponse {
    const message = createBaseQueryGetSchemaAttributeResponse();
    if (object.schemaAttribute !== undefined && object.schemaAttribute !== null) {
      message.schemaAttribute = SchemaAttribute.fromAmino(object.schemaAttribute);
    }
    return message;
  },
  toAmino(message: QueryGetSchemaAttributeResponse): QueryGetSchemaAttributeResponseAmino {
    const obj: any = {};
    obj.schemaAttribute = message.schemaAttribute ? SchemaAttribute.toAmino(message.schemaAttribute) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSchemaAttributeResponseAminoMsg): QueryGetSchemaAttributeResponse {
    return QueryGetSchemaAttributeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSchemaAttributeResponseProtoMsg): QueryGetSchemaAttributeResponse {
    return QueryGetSchemaAttributeResponse.decode(message.value);
  },
  toProto(message: QueryGetSchemaAttributeResponse): Uint8Array {
    return QueryGetSchemaAttributeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSchemaAttributeResponse): QueryGetSchemaAttributeResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetSchemaAttributeResponse',
      value: QueryGetSchemaAttributeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSchemaAttributeRequest(): QueryAllSchemaAttributeRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllSchemaAttributeRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllSchemaAttributeRequest',
  encode(message: QueryAllSchemaAttributeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSchemaAttributeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSchemaAttributeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllSchemaAttributeRequest>): QueryAllSchemaAttributeRequest {
    const message = createBaseQueryAllSchemaAttributeRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSchemaAttributeRequestAmino): QueryAllSchemaAttributeRequest {
    const message = createBaseQueryAllSchemaAttributeRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSchemaAttributeRequest): QueryAllSchemaAttributeRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSchemaAttributeRequestAminoMsg): QueryAllSchemaAttributeRequest {
    return QueryAllSchemaAttributeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSchemaAttributeRequestProtoMsg): QueryAllSchemaAttributeRequest {
    return QueryAllSchemaAttributeRequest.decode(message.value);
  },
  toProto(message: QueryAllSchemaAttributeRequest): Uint8Array {
    return QueryAllSchemaAttributeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSchemaAttributeRequest): QueryAllSchemaAttributeRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllSchemaAttributeRequest',
      value: QueryAllSchemaAttributeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSchemaAttributeResponse(): QueryAllSchemaAttributeResponse {
  return {
    schemaAttribute: [],
    pagination: undefined
  };
}
export const QueryAllSchemaAttributeResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllSchemaAttributeResponse',
  encode(message: QueryAllSchemaAttributeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.schemaAttribute) {
      SchemaAttribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSchemaAttributeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSchemaAttributeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.schemaAttribute.push(SchemaAttribute.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllSchemaAttributeResponse>): QueryAllSchemaAttributeResponse {
    const message = createBaseQueryAllSchemaAttributeResponse();
    message.schemaAttribute = object.schemaAttribute?.map(e => SchemaAttribute.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSchemaAttributeResponseAmino): QueryAllSchemaAttributeResponse {
    const message = createBaseQueryAllSchemaAttributeResponse();
    message.schemaAttribute = object.schemaAttribute?.map(e => SchemaAttribute.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSchemaAttributeResponse): QueryAllSchemaAttributeResponseAmino {
    const obj: any = {};
    if (message.schemaAttribute) {
      obj.schemaAttribute = message.schemaAttribute.map(e => e ? SchemaAttribute.toAmino(e) : undefined);
    } else {
      obj.schemaAttribute = message.schemaAttribute;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSchemaAttributeResponseAminoMsg): QueryAllSchemaAttributeResponse {
    return QueryAllSchemaAttributeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSchemaAttributeResponseProtoMsg): QueryAllSchemaAttributeResponse {
    return QueryAllSchemaAttributeResponse.decode(message.value);
  },
  toProto(message: QueryAllSchemaAttributeResponse): Uint8Array {
    return QueryAllSchemaAttributeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSchemaAttributeResponse): QueryAllSchemaAttributeResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllSchemaAttributeResponse',
      value: QueryAllSchemaAttributeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListAttributeBySchemaRequest(): QueryListAttributeBySchemaRequest {
  return {
    nftSchemaCode: ''
  };
}
export const QueryListAttributeBySchemaRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryListAttributeBySchemaRequest',
  encode(message: QueryListAttributeBySchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListAttributeBySchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListAttributeBySchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryListAttributeBySchemaRequest>): QueryListAttributeBySchemaRequest {
    const message = createBaseQueryListAttributeBySchemaRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    return message;
  },
  fromAmino(object: QueryListAttributeBySchemaRequestAmino): QueryListAttributeBySchemaRequest {
    const message = createBaseQueryListAttributeBySchemaRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    return message;
  },
  toAmino(message: QueryListAttributeBySchemaRequest): QueryListAttributeBySchemaRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    return obj;
  },
  fromAminoMsg(object: QueryListAttributeBySchemaRequestAminoMsg): QueryListAttributeBySchemaRequest {
    return QueryListAttributeBySchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListAttributeBySchemaRequestProtoMsg): QueryListAttributeBySchemaRequest {
    return QueryListAttributeBySchemaRequest.decode(message.value);
  },
  toProto(message: QueryListAttributeBySchemaRequest): Uint8Array {
    return QueryListAttributeBySchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListAttributeBySchemaRequest): QueryListAttributeBySchemaRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryListAttributeBySchemaRequest',
      value: QueryListAttributeBySchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListAttributeBySchemaResponse(): QueryListAttributeBySchemaResponse {
  return {
    schemaAttribute: []
  };
}
export const QueryListAttributeBySchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryListAttributeBySchemaResponse',
  encode(message: QueryListAttributeBySchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.schemaAttribute) {
      SchemaAttribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListAttributeBySchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListAttributeBySchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.schemaAttribute.push(SchemaAttribute.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryListAttributeBySchemaResponse>): QueryListAttributeBySchemaResponse {
    const message = createBaseQueryListAttributeBySchemaResponse();
    message.schemaAttribute = object.schemaAttribute?.map(e => SchemaAttribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryListAttributeBySchemaResponseAmino): QueryListAttributeBySchemaResponse {
    const message = createBaseQueryListAttributeBySchemaResponse();
    message.schemaAttribute = object.schemaAttribute?.map(e => SchemaAttribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryListAttributeBySchemaResponse): QueryListAttributeBySchemaResponseAmino {
    const obj: any = {};
    if (message.schemaAttribute) {
      obj.schemaAttribute = message.schemaAttribute.map(e => e ? SchemaAttribute.toAmino(e) : undefined);
    } else {
      obj.schemaAttribute = message.schemaAttribute;
    }
    return obj;
  },
  fromAminoMsg(object: QueryListAttributeBySchemaResponseAminoMsg): QueryListAttributeBySchemaResponse {
    return QueryListAttributeBySchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListAttributeBySchemaResponseProtoMsg): QueryListAttributeBySchemaResponse {
    return QueryListAttributeBySchemaResponse.decode(message.value);
  },
  toProto(message: QueryListAttributeBySchemaResponse): Uint8Array {
    return QueryListAttributeBySchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListAttributeBySchemaResponse): QueryListAttributeBySchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryListAttributeBySchemaResponse',
      value: QueryListAttributeBySchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionOfSchemaRequest(): QueryGetActionOfSchemaRequest {
  return {
    nftSchemaCode: '',
    name: ''
  };
}
export const QueryGetActionOfSchemaRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionOfSchemaRequest',
  encode(message: QueryGetActionOfSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionOfSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionOfSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionOfSchemaRequest>): QueryGetActionOfSchemaRequest {
    const message = createBaseQueryGetActionOfSchemaRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: QueryGetActionOfSchemaRequestAmino): QueryGetActionOfSchemaRequest {
    const message = createBaseQueryGetActionOfSchemaRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetActionOfSchemaRequest): QueryGetActionOfSchemaRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionOfSchemaRequestAminoMsg): QueryGetActionOfSchemaRequest {
    return QueryGetActionOfSchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionOfSchemaRequestProtoMsg): QueryGetActionOfSchemaRequest {
    return QueryGetActionOfSchemaRequest.decode(message.value);
  },
  toProto(message: QueryGetActionOfSchemaRequest): Uint8Array {
    return QueryGetActionOfSchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionOfSchemaRequest): QueryGetActionOfSchemaRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionOfSchemaRequest',
      value: QueryGetActionOfSchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetActionOfSchemaResponse(): QueryGetActionOfSchemaResponse {
  return {
    actionOfSchema: ActionOfSchema.fromPartial({})
  };
}
export const QueryGetActionOfSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionOfSchemaResponse',
  encode(message: QueryGetActionOfSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionOfSchema !== undefined) {
      ActionOfSchema.encode(message.actionOfSchema, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActionOfSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionOfSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionOfSchema = ActionOfSchema.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActionOfSchemaResponse>): QueryGetActionOfSchemaResponse {
    const message = createBaseQueryGetActionOfSchemaResponse();
    message.actionOfSchema = object.actionOfSchema !== undefined && object.actionOfSchema !== null ? ActionOfSchema.fromPartial(object.actionOfSchema) : undefined;
    return message;
  },
  fromAmino(object: QueryGetActionOfSchemaResponseAmino): QueryGetActionOfSchemaResponse {
    const message = createBaseQueryGetActionOfSchemaResponse();
    if (object.actionOfSchema !== undefined && object.actionOfSchema !== null) {
      message.actionOfSchema = ActionOfSchema.fromAmino(object.actionOfSchema);
    }
    return message;
  },
  toAmino(message: QueryGetActionOfSchemaResponse): QueryGetActionOfSchemaResponseAmino {
    const obj: any = {};
    obj.actionOfSchema = message.actionOfSchema ? ActionOfSchema.toAmino(message.actionOfSchema) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionOfSchemaResponseAminoMsg): QueryGetActionOfSchemaResponse {
    return QueryGetActionOfSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionOfSchemaResponseProtoMsg): QueryGetActionOfSchemaResponse {
    return QueryGetActionOfSchemaResponse.decode(message.value);
  },
  toProto(message: QueryGetActionOfSchemaResponse): Uint8Array {
    return QueryGetActionOfSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionOfSchemaResponse): QueryGetActionOfSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActionOfSchemaResponse',
      value: QueryGetActionOfSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionOfSchemaRequest(): QueryAllActionOfSchemaRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllActionOfSchemaRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionOfSchemaRequest',
  encode(message: QueryAllActionOfSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActionOfSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionOfSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActionOfSchemaRequest>): QueryAllActionOfSchemaRequest {
    const message = createBaseQueryAllActionOfSchemaRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionOfSchemaRequestAmino): QueryAllActionOfSchemaRequest {
    const message = createBaseQueryAllActionOfSchemaRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionOfSchemaRequest): QueryAllActionOfSchemaRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionOfSchemaRequestAminoMsg): QueryAllActionOfSchemaRequest {
    return QueryAllActionOfSchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionOfSchemaRequestProtoMsg): QueryAllActionOfSchemaRequest {
    return QueryAllActionOfSchemaRequest.decode(message.value);
  },
  toProto(message: QueryAllActionOfSchemaRequest): Uint8Array {
    return QueryAllActionOfSchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionOfSchemaRequest): QueryAllActionOfSchemaRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionOfSchemaRequest',
      value: QueryAllActionOfSchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllActionOfSchemaResponse(): QueryAllActionOfSchemaResponse {
  return {
    actionOfSchema: [],
    pagination: undefined
  };
}
export const QueryAllActionOfSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionOfSchemaResponse',
  encode(message: QueryAllActionOfSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actionOfSchema) {
      ActionOfSchema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActionOfSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActionOfSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.actionOfSchema.push(ActionOfSchema.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActionOfSchemaResponse>): QueryAllActionOfSchemaResponse {
    const message = createBaseQueryAllActionOfSchemaResponse();
    message.actionOfSchema = object.actionOfSchema?.map(e => ActionOfSchema.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActionOfSchemaResponseAmino): QueryAllActionOfSchemaResponse {
    const message = createBaseQueryAllActionOfSchemaResponse();
    message.actionOfSchema = object.actionOfSchema?.map(e => ActionOfSchema.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActionOfSchemaResponse): QueryAllActionOfSchemaResponseAmino {
    const obj: any = {};
    if (message.actionOfSchema) {
      obj.actionOfSchema = message.actionOfSchema.map(e => e ? ActionOfSchema.toAmino(e) : undefined);
    } else {
      obj.actionOfSchema = message.actionOfSchema;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActionOfSchemaResponseAminoMsg): QueryAllActionOfSchemaResponse {
    return QueryAllActionOfSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActionOfSchemaResponseProtoMsg): QueryAllActionOfSchemaResponse {
    return QueryAllActionOfSchemaResponse.decode(message.value);
  },
  toProto(message: QueryAllActionOfSchemaResponse): Uint8Array {
    return QueryAllActionOfSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActionOfSchemaResponse): QueryAllActionOfSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActionOfSchemaResponse',
      value: QueryAllActionOfSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetExecutorOfSchemaRequest(): QueryGetExecutorOfSchemaRequest {
  return {
    nftSchemaCode: ''
  };
}
export const QueryGetExecutorOfSchemaRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetExecutorOfSchemaRequest',
  encode(message: QueryGetExecutorOfSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutorOfSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutorOfSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetExecutorOfSchemaRequest>): QueryGetExecutorOfSchemaRequest {
    const message = createBaseQueryGetExecutorOfSchemaRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    return message;
  },
  fromAmino(object: QueryGetExecutorOfSchemaRequestAmino): QueryGetExecutorOfSchemaRequest {
    const message = createBaseQueryGetExecutorOfSchemaRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    return message;
  },
  toAmino(message: QueryGetExecutorOfSchemaRequest): QueryGetExecutorOfSchemaRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    return obj;
  },
  fromAminoMsg(object: QueryGetExecutorOfSchemaRequestAminoMsg): QueryGetExecutorOfSchemaRequest {
    return QueryGetExecutorOfSchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetExecutorOfSchemaRequestProtoMsg): QueryGetExecutorOfSchemaRequest {
    return QueryGetExecutorOfSchemaRequest.decode(message.value);
  },
  toProto(message: QueryGetExecutorOfSchemaRequest): Uint8Array {
    return QueryGetExecutorOfSchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetExecutorOfSchemaRequest): QueryGetExecutorOfSchemaRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetExecutorOfSchemaRequest',
      value: QueryGetExecutorOfSchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetExecutorOfSchemaResponse(): QueryGetExecutorOfSchemaResponse {
  return {
    executorOfSchema: ExecutorOfSchema.fromPartial({})
  };
}
export const QueryGetExecutorOfSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetExecutorOfSchemaResponse',
  encode(message: QueryGetExecutorOfSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.executorOfSchema !== undefined) {
      ExecutorOfSchema.encode(message.executorOfSchema, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutorOfSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutorOfSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.executorOfSchema = ExecutorOfSchema.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetExecutorOfSchemaResponse>): QueryGetExecutorOfSchemaResponse {
    const message = createBaseQueryGetExecutorOfSchemaResponse();
    message.executorOfSchema = object.executorOfSchema !== undefined && object.executorOfSchema !== null ? ExecutorOfSchema.fromPartial(object.executorOfSchema) : undefined;
    return message;
  },
  fromAmino(object: QueryGetExecutorOfSchemaResponseAmino): QueryGetExecutorOfSchemaResponse {
    const message = createBaseQueryGetExecutorOfSchemaResponse();
    if (object.executorOfSchema !== undefined && object.executorOfSchema !== null) {
      message.executorOfSchema = ExecutorOfSchema.fromAmino(object.executorOfSchema);
    }
    return message;
  },
  toAmino(message: QueryGetExecutorOfSchemaResponse): QueryGetExecutorOfSchemaResponseAmino {
    const obj: any = {};
    obj.executorOfSchema = message.executorOfSchema ? ExecutorOfSchema.toAmino(message.executorOfSchema) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetExecutorOfSchemaResponseAminoMsg): QueryGetExecutorOfSchemaResponse {
    return QueryGetExecutorOfSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetExecutorOfSchemaResponseProtoMsg): QueryGetExecutorOfSchemaResponse {
    return QueryGetExecutorOfSchemaResponse.decode(message.value);
  },
  toProto(message: QueryGetExecutorOfSchemaResponse): Uint8Array {
    return QueryGetExecutorOfSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetExecutorOfSchemaResponse): QueryGetExecutorOfSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetExecutorOfSchemaResponse',
      value: QueryGetExecutorOfSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllExecutorOfSchemaRequest(): QueryAllExecutorOfSchemaRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllExecutorOfSchemaRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllExecutorOfSchemaRequest',
  encode(message: QueryAllExecutorOfSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExecutorOfSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExecutorOfSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllExecutorOfSchemaRequest>): QueryAllExecutorOfSchemaRequest {
    const message = createBaseQueryAllExecutorOfSchemaRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllExecutorOfSchemaRequestAmino): QueryAllExecutorOfSchemaRequest {
    const message = createBaseQueryAllExecutorOfSchemaRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllExecutorOfSchemaRequest): QueryAllExecutorOfSchemaRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllExecutorOfSchemaRequestAminoMsg): QueryAllExecutorOfSchemaRequest {
    return QueryAllExecutorOfSchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllExecutorOfSchemaRequestProtoMsg): QueryAllExecutorOfSchemaRequest {
    return QueryAllExecutorOfSchemaRequest.decode(message.value);
  },
  toProto(message: QueryAllExecutorOfSchemaRequest): Uint8Array {
    return QueryAllExecutorOfSchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllExecutorOfSchemaRequest): QueryAllExecutorOfSchemaRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllExecutorOfSchemaRequest',
      value: QueryAllExecutorOfSchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllExecutorOfSchemaResponse(): QueryAllExecutorOfSchemaResponse {
  return {
    executorOfSchema: [],
    pagination: undefined
  };
}
export const QueryAllExecutorOfSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllExecutorOfSchemaResponse',
  encode(message: QueryAllExecutorOfSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.executorOfSchema) {
      ExecutorOfSchema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExecutorOfSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExecutorOfSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.executorOfSchema.push(ExecutorOfSchema.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllExecutorOfSchemaResponse>): QueryAllExecutorOfSchemaResponse {
    const message = createBaseQueryAllExecutorOfSchemaResponse();
    message.executorOfSchema = object.executorOfSchema?.map(e => ExecutorOfSchema.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllExecutorOfSchemaResponseAmino): QueryAllExecutorOfSchemaResponse {
    const message = createBaseQueryAllExecutorOfSchemaResponse();
    message.executorOfSchema = object.executorOfSchema?.map(e => ExecutorOfSchema.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllExecutorOfSchemaResponse): QueryAllExecutorOfSchemaResponseAmino {
    const obj: any = {};
    if (message.executorOfSchema) {
      obj.executorOfSchema = message.executorOfSchema.map(e => e ? ExecutorOfSchema.toAmino(e) : undefined);
    } else {
      obj.executorOfSchema = message.executorOfSchema;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllExecutorOfSchemaResponseAminoMsg): QueryAllExecutorOfSchemaResponse {
    return QueryAllExecutorOfSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllExecutorOfSchemaResponseProtoMsg): QueryAllExecutorOfSchemaResponse {
    return QueryAllExecutorOfSchemaResponse.decode(message.value);
  },
  toProto(message: QueryAllExecutorOfSchemaResponse): Uint8Array {
    return QueryAllExecutorOfSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllExecutorOfSchemaResponse): QueryAllExecutorOfSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllExecutorOfSchemaResponse',
      value: QueryAllExecutorOfSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetVirtualActionRequest(): QueryGetVirtualActionRequest {
  return {
    nftSchemaCode: '',
    name: ''
  };
}
export const QueryGetVirtualActionRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualActionRequest',
  encode(message: QueryGetVirtualActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVirtualActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVirtualActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetVirtualActionRequest>): QueryGetVirtualActionRequest {
    const message = createBaseQueryGetVirtualActionRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: QueryGetVirtualActionRequestAmino): QueryGetVirtualActionRequest {
    const message = createBaseQueryGetVirtualActionRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetVirtualActionRequest): QueryGetVirtualActionRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetVirtualActionRequestAminoMsg): QueryGetVirtualActionRequest {
    return QueryGetVirtualActionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVirtualActionRequestProtoMsg): QueryGetVirtualActionRequest {
    return QueryGetVirtualActionRequest.decode(message.value);
  },
  toProto(message: QueryGetVirtualActionRequest): Uint8Array {
    return QueryGetVirtualActionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVirtualActionRequest): QueryGetVirtualActionRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualActionRequest',
      value: QueryGetVirtualActionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetVirtualActionResponse(): QueryGetVirtualActionResponse {
  return {
    virtualAction: VirtualAction.fromPartial({})
  };
}
export const QueryGetVirtualActionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualActionResponse',
  encode(message: QueryGetVirtualActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.virtualAction !== undefined) {
      VirtualAction.encode(message.virtualAction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVirtualActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVirtualActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.virtualAction = VirtualAction.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetVirtualActionResponse>): QueryGetVirtualActionResponse {
    const message = createBaseQueryGetVirtualActionResponse();
    message.virtualAction = object.virtualAction !== undefined && object.virtualAction !== null ? VirtualAction.fromPartial(object.virtualAction) : undefined;
    return message;
  },
  fromAmino(object: QueryGetVirtualActionResponseAmino): QueryGetVirtualActionResponse {
    const message = createBaseQueryGetVirtualActionResponse();
    if (object.virtualAction !== undefined && object.virtualAction !== null) {
      message.virtualAction = VirtualAction.fromAmino(object.virtualAction);
    }
    return message;
  },
  toAmino(message: QueryGetVirtualActionResponse): QueryGetVirtualActionResponseAmino {
    const obj: any = {};
    obj.virtualAction = message.virtualAction ? VirtualAction.toAmino(message.virtualAction) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetVirtualActionResponseAminoMsg): QueryGetVirtualActionResponse {
    return QueryGetVirtualActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVirtualActionResponseProtoMsg): QueryGetVirtualActionResponse {
    return QueryGetVirtualActionResponse.decode(message.value);
  },
  toProto(message: QueryGetVirtualActionResponse): Uint8Array {
    return QueryGetVirtualActionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVirtualActionResponse): QueryGetVirtualActionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualActionResponse',
      value: QueryGetVirtualActionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllVirtualActionRequest(): QueryAllVirtualActionRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllVirtualActionRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualActionRequest',
  encode(message: QueryAllVirtualActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVirtualActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVirtualActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllVirtualActionRequest>): QueryAllVirtualActionRequest {
    const message = createBaseQueryAllVirtualActionRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVirtualActionRequestAmino): QueryAllVirtualActionRequest {
    const message = createBaseQueryAllVirtualActionRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVirtualActionRequest): QueryAllVirtualActionRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVirtualActionRequestAminoMsg): QueryAllVirtualActionRequest {
    return QueryAllVirtualActionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVirtualActionRequestProtoMsg): QueryAllVirtualActionRequest {
    return QueryAllVirtualActionRequest.decode(message.value);
  },
  toProto(message: QueryAllVirtualActionRequest): Uint8Array {
    return QueryAllVirtualActionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVirtualActionRequest): QueryAllVirtualActionRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualActionRequest',
      value: QueryAllVirtualActionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllVirtualActionResponse(): QueryAllVirtualActionResponse {
  return {
    virtualAction: [],
    pagination: undefined
  };
}
export const QueryAllVirtualActionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualActionResponse',
  encode(message: QueryAllVirtualActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.virtualAction) {
      VirtualAction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVirtualActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVirtualActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.virtualAction.push(VirtualAction.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllVirtualActionResponse>): QueryAllVirtualActionResponse {
    const message = createBaseQueryAllVirtualActionResponse();
    message.virtualAction = object.virtualAction?.map(e => VirtualAction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVirtualActionResponseAmino): QueryAllVirtualActionResponse {
    const message = createBaseQueryAllVirtualActionResponse();
    message.virtualAction = object.virtualAction?.map(e => VirtualAction.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVirtualActionResponse): QueryAllVirtualActionResponseAmino {
    const obj: any = {};
    if (message.virtualAction) {
      obj.virtualAction = message.virtualAction.map(e => e ? VirtualAction.toAmino(e) : undefined);
    } else {
      obj.virtualAction = message.virtualAction;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVirtualActionResponseAminoMsg): QueryAllVirtualActionResponse {
    return QueryAllVirtualActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVirtualActionResponseProtoMsg): QueryAllVirtualActionResponse {
    return QueryAllVirtualActionResponse.decode(message.value);
  },
  toProto(message: QueryAllVirtualActionResponse): Uint8Array {
    return QueryAllVirtualActionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVirtualActionResponse): QueryAllVirtualActionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualActionResponse',
      value: QueryAllVirtualActionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetVirtualSchemaRequest(): QueryGetVirtualSchemaRequest {
  return {
    nftSchemaCode: ''
  };
}
export const QueryGetVirtualSchemaRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaRequest',
  encode(message: QueryGetVirtualSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVirtualSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVirtualSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetVirtualSchemaRequest>): QueryGetVirtualSchemaRequest {
    const message = createBaseQueryGetVirtualSchemaRequest();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    return message;
  },
  fromAmino(object: QueryGetVirtualSchemaRequestAmino): QueryGetVirtualSchemaRequest {
    const message = createBaseQueryGetVirtualSchemaRequest();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    return message;
  },
  toAmino(message: QueryGetVirtualSchemaRequest): QueryGetVirtualSchemaRequestAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    return obj;
  },
  fromAminoMsg(object: QueryGetVirtualSchemaRequestAminoMsg): QueryGetVirtualSchemaRequest {
    return QueryGetVirtualSchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVirtualSchemaRequestProtoMsg): QueryGetVirtualSchemaRequest {
    return QueryGetVirtualSchemaRequest.decode(message.value);
  },
  toProto(message: QueryGetVirtualSchemaRequest): Uint8Array {
    return QueryGetVirtualSchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVirtualSchemaRequest): QueryGetVirtualSchemaRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaRequest',
      value: QueryGetVirtualSchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetVirtualSchemaResponse(): QueryGetVirtualSchemaResponse {
  return {
    virtualSchema: VirtualSchema.fromPartial({})
  };
}
export const QueryGetVirtualSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaResponse',
  encode(message: QueryGetVirtualSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.virtualSchema !== undefined) {
      VirtualSchema.encode(message.virtualSchema, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVirtualSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVirtualSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.virtualSchema = VirtualSchema.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetVirtualSchemaResponse>): QueryGetVirtualSchemaResponse {
    const message = createBaseQueryGetVirtualSchemaResponse();
    message.virtualSchema = object.virtualSchema !== undefined && object.virtualSchema !== null ? VirtualSchema.fromPartial(object.virtualSchema) : undefined;
    return message;
  },
  fromAmino(object: QueryGetVirtualSchemaResponseAmino): QueryGetVirtualSchemaResponse {
    const message = createBaseQueryGetVirtualSchemaResponse();
    if (object.virtualSchema !== undefined && object.virtualSchema !== null) {
      message.virtualSchema = VirtualSchema.fromAmino(object.virtualSchema);
    }
    return message;
  },
  toAmino(message: QueryGetVirtualSchemaResponse): QueryGetVirtualSchemaResponseAmino {
    const obj: any = {};
    obj.virtualSchema = message.virtualSchema ? VirtualSchema.toAmino(message.virtualSchema) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetVirtualSchemaResponseAminoMsg): QueryGetVirtualSchemaResponse {
    return QueryGetVirtualSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVirtualSchemaResponseProtoMsg): QueryGetVirtualSchemaResponse {
    return QueryGetVirtualSchemaResponse.decode(message.value);
  },
  toProto(message: QueryGetVirtualSchemaResponse): Uint8Array {
    return QueryGetVirtualSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVirtualSchemaResponse): QueryGetVirtualSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaResponse',
      value: QueryGetVirtualSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllVirtualSchemaRequest(): QueryAllVirtualSchemaRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllVirtualSchemaRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaRequest',
  encode(message: QueryAllVirtualSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVirtualSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVirtualSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllVirtualSchemaRequest>): QueryAllVirtualSchemaRequest {
    const message = createBaseQueryAllVirtualSchemaRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVirtualSchemaRequestAmino): QueryAllVirtualSchemaRequest {
    const message = createBaseQueryAllVirtualSchemaRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVirtualSchemaRequest): QueryAllVirtualSchemaRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVirtualSchemaRequestAminoMsg): QueryAllVirtualSchemaRequest {
    return QueryAllVirtualSchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVirtualSchemaRequestProtoMsg): QueryAllVirtualSchemaRequest {
    return QueryAllVirtualSchemaRequest.decode(message.value);
  },
  toProto(message: QueryAllVirtualSchemaRequest): Uint8Array {
    return QueryAllVirtualSchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVirtualSchemaRequest): QueryAllVirtualSchemaRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaRequest',
      value: QueryAllVirtualSchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllVirtualSchemaResponse(): QueryAllVirtualSchemaResponse {
  return {
    virtualSchema: [],
    pagination: undefined
  };
}
export const QueryAllVirtualSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaResponse',
  encode(message: QueryAllVirtualSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.virtualSchema) {
      VirtualSchema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVirtualSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVirtualSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.virtualSchema.push(VirtualSchema.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllVirtualSchemaResponse>): QueryAllVirtualSchemaResponse {
    const message = createBaseQueryAllVirtualSchemaResponse();
    message.virtualSchema = object.virtualSchema?.map(e => VirtualSchema.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVirtualSchemaResponseAmino): QueryAllVirtualSchemaResponse {
    const message = createBaseQueryAllVirtualSchemaResponse();
    message.virtualSchema = object.virtualSchema?.map(e => VirtualSchema.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVirtualSchemaResponse): QueryAllVirtualSchemaResponseAmino {
    const obj: any = {};
    if (message.virtualSchema) {
      obj.virtualSchema = message.virtualSchema.map(e => e ? VirtualSchema.toAmino(e) : undefined);
    } else {
      obj.virtualSchema = message.virtualSchema;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVirtualSchemaResponseAminoMsg): QueryAllVirtualSchemaResponse {
    return QueryAllVirtualSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVirtualSchemaResponseProtoMsg): QueryAllVirtualSchemaResponse {
    return QueryAllVirtualSchemaResponse.decode(message.value);
  },
  toProto(message: QueryAllVirtualSchemaResponse): Uint8Array {
    return QueryAllVirtualSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVirtualSchemaResponse): QueryAllVirtualSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaResponse',
      value: QueryAllVirtualSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDisableVirtualSchemaRequest(): QueryGetDisableVirtualSchemaRequest {
  return {
    index: ''
  };
}
export const QueryGetDisableVirtualSchemaRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetDisableVirtualSchemaRequest',
  encode(message: QueryGetDisableVirtualSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDisableVirtualSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDisableVirtualSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.index = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetDisableVirtualSchemaRequest>): QueryGetDisableVirtualSchemaRequest {
    const message = createBaseQueryGetDisableVirtualSchemaRequest();
    message.index = object.index ?? '';
    return message;
  },
  fromAmino(object: QueryGetDisableVirtualSchemaRequestAmino): QueryGetDisableVirtualSchemaRequest {
    const message = createBaseQueryGetDisableVirtualSchemaRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: QueryGetDisableVirtualSchemaRequest): QueryGetDisableVirtualSchemaRequestAmino {
    const obj: any = {};
    obj.index = message.index === '' ? undefined : message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetDisableVirtualSchemaRequestAminoMsg): QueryGetDisableVirtualSchemaRequest {
    return QueryGetDisableVirtualSchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDisableVirtualSchemaRequestProtoMsg): QueryGetDisableVirtualSchemaRequest {
    return QueryGetDisableVirtualSchemaRequest.decode(message.value);
  },
  toProto(message: QueryGetDisableVirtualSchemaRequest): Uint8Array {
    return QueryGetDisableVirtualSchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDisableVirtualSchemaRequest): QueryGetDisableVirtualSchemaRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetDisableVirtualSchemaRequest',
      value: QueryGetDisableVirtualSchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDisableVirtualSchemaResponse(): QueryGetDisableVirtualSchemaResponse {
  return {
    disableVirtualSchema: DisableVirtualSchema.fromPartial({})
  };
}
export const QueryGetDisableVirtualSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetDisableVirtualSchemaResponse',
  encode(message: QueryGetDisableVirtualSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.disableVirtualSchema !== undefined) {
      DisableVirtualSchema.encode(message.disableVirtualSchema, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDisableVirtualSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDisableVirtualSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.disableVirtualSchema = DisableVirtualSchema.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetDisableVirtualSchemaResponse>): QueryGetDisableVirtualSchemaResponse {
    const message = createBaseQueryGetDisableVirtualSchemaResponse();
    message.disableVirtualSchema = object.disableVirtualSchema !== undefined && object.disableVirtualSchema !== null ? DisableVirtualSchema.fromPartial(object.disableVirtualSchema) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDisableVirtualSchemaResponseAmino): QueryGetDisableVirtualSchemaResponse {
    const message = createBaseQueryGetDisableVirtualSchemaResponse();
    if (object.disableVirtualSchema !== undefined && object.disableVirtualSchema !== null) {
      message.disableVirtualSchema = DisableVirtualSchema.fromAmino(object.disableVirtualSchema);
    }
    return message;
  },
  toAmino(message: QueryGetDisableVirtualSchemaResponse): QueryGetDisableVirtualSchemaResponseAmino {
    const obj: any = {};
    obj.disableVirtualSchema = message.disableVirtualSchema ? DisableVirtualSchema.toAmino(message.disableVirtualSchema) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDisableVirtualSchemaResponseAminoMsg): QueryGetDisableVirtualSchemaResponse {
    return QueryGetDisableVirtualSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDisableVirtualSchemaResponseProtoMsg): QueryGetDisableVirtualSchemaResponse {
    return QueryGetDisableVirtualSchemaResponse.decode(message.value);
  },
  toProto(message: QueryGetDisableVirtualSchemaResponse): Uint8Array {
    return QueryGetDisableVirtualSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDisableVirtualSchemaResponse): QueryGetDisableVirtualSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetDisableVirtualSchemaResponse',
      value: QueryGetDisableVirtualSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDisableVirtualSchemaRequest(): QueryAllDisableVirtualSchemaRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllDisableVirtualSchemaRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllDisableVirtualSchemaRequest',
  encode(message: QueryAllDisableVirtualSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDisableVirtualSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDisableVirtualSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllDisableVirtualSchemaRequest>): QueryAllDisableVirtualSchemaRequest {
    const message = createBaseQueryAllDisableVirtualSchemaRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDisableVirtualSchemaRequestAmino): QueryAllDisableVirtualSchemaRequest {
    const message = createBaseQueryAllDisableVirtualSchemaRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDisableVirtualSchemaRequest): QueryAllDisableVirtualSchemaRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDisableVirtualSchemaRequestAminoMsg): QueryAllDisableVirtualSchemaRequest {
    return QueryAllDisableVirtualSchemaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDisableVirtualSchemaRequestProtoMsg): QueryAllDisableVirtualSchemaRequest {
    return QueryAllDisableVirtualSchemaRequest.decode(message.value);
  },
  toProto(message: QueryAllDisableVirtualSchemaRequest): Uint8Array {
    return QueryAllDisableVirtualSchemaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDisableVirtualSchemaRequest): QueryAllDisableVirtualSchemaRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllDisableVirtualSchemaRequest',
      value: QueryAllDisableVirtualSchemaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDisableVirtualSchemaResponse(): QueryAllDisableVirtualSchemaResponse {
  return {
    disableVirtualSchema: [],
    pagination: undefined
  };
}
export const QueryAllDisableVirtualSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllDisableVirtualSchemaResponse',
  encode(message: QueryAllDisableVirtualSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.disableVirtualSchema) {
      DisableVirtualSchema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDisableVirtualSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDisableVirtualSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.disableVirtualSchema.push(DisableVirtualSchema.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllDisableVirtualSchemaResponse>): QueryAllDisableVirtualSchemaResponse {
    const message = createBaseQueryAllDisableVirtualSchemaResponse();
    message.disableVirtualSchema = object.disableVirtualSchema?.map(e => DisableVirtualSchema.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDisableVirtualSchemaResponseAmino): QueryAllDisableVirtualSchemaResponse {
    const message = createBaseQueryAllDisableVirtualSchemaResponse();
    message.disableVirtualSchema = object.disableVirtualSchema?.map(e => DisableVirtualSchema.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDisableVirtualSchemaResponse): QueryAllDisableVirtualSchemaResponseAmino {
    const obj: any = {};
    if (message.disableVirtualSchema) {
      obj.disableVirtualSchema = message.disableVirtualSchema.map(e => e ? DisableVirtualSchema.toAmino(e) : undefined);
    } else {
      obj.disableVirtualSchema = message.disableVirtualSchema;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDisableVirtualSchemaResponseAminoMsg): QueryAllDisableVirtualSchemaResponse {
    return QueryAllDisableVirtualSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDisableVirtualSchemaResponseProtoMsg): QueryAllDisableVirtualSchemaResponse {
    return QueryAllDisableVirtualSchemaResponse.decode(message.value);
  },
  toProto(message: QueryAllDisableVirtualSchemaResponse): Uint8Array {
    return QueryAllDisableVirtualSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDisableVirtualSchemaResponse): QueryAllDisableVirtualSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllDisableVirtualSchemaResponse',
      value: QueryAllDisableVirtualSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetVirtualSchemaProposalRequest(): QueryGetVirtualSchemaProposalRequest {
  return {
    index: ''
  };
}
export const QueryGetVirtualSchemaProposalRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaProposalRequest',
  encode(message: QueryGetVirtualSchemaProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVirtualSchemaProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVirtualSchemaProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.index = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetVirtualSchemaProposalRequest>): QueryGetVirtualSchemaProposalRequest {
    const message = createBaseQueryGetVirtualSchemaProposalRequest();
    message.index = object.index ?? '';
    return message;
  },
  fromAmino(object: QueryGetVirtualSchemaProposalRequestAmino): QueryGetVirtualSchemaProposalRequest {
    const message = createBaseQueryGetVirtualSchemaProposalRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: QueryGetVirtualSchemaProposalRequest): QueryGetVirtualSchemaProposalRequestAmino {
    const obj: any = {};
    obj.index = message.index === '' ? undefined : message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetVirtualSchemaProposalRequestAminoMsg): QueryGetVirtualSchemaProposalRequest {
    return QueryGetVirtualSchemaProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVirtualSchemaProposalRequestProtoMsg): QueryGetVirtualSchemaProposalRequest {
    return QueryGetVirtualSchemaProposalRequest.decode(message.value);
  },
  toProto(message: QueryGetVirtualSchemaProposalRequest): Uint8Array {
    return QueryGetVirtualSchemaProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVirtualSchemaProposalRequest): QueryGetVirtualSchemaProposalRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaProposalRequest',
      value: QueryGetVirtualSchemaProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetVirtualSchemaProposalResponse(): QueryGetVirtualSchemaProposalResponse {
  return {
    virtualSchemaProposal: VirtualSchemaProposal.fromPartial({})
  };
}
export const QueryGetVirtualSchemaProposalResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaProposalResponse',
  encode(message: QueryGetVirtualSchemaProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.virtualSchemaProposal !== undefined) {
      VirtualSchemaProposal.encode(message.virtualSchemaProposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVirtualSchemaProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVirtualSchemaProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.virtualSchemaProposal = VirtualSchemaProposal.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetVirtualSchemaProposalResponse>): QueryGetVirtualSchemaProposalResponse {
    const message = createBaseQueryGetVirtualSchemaProposalResponse();
    message.virtualSchemaProposal = object.virtualSchemaProposal !== undefined && object.virtualSchemaProposal !== null ? VirtualSchemaProposal.fromPartial(object.virtualSchemaProposal) : undefined;
    return message;
  },
  fromAmino(object: QueryGetVirtualSchemaProposalResponseAmino): QueryGetVirtualSchemaProposalResponse {
    const message = createBaseQueryGetVirtualSchemaProposalResponse();
    if (object.virtualSchemaProposal !== undefined && object.virtualSchemaProposal !== null) {
      message.virtualSchemaProposal = VirtualSchemaProposal.fromAmino(object.virtualSchemaProposal);
    }
    return message;
  },
  toAmino(message: QueryGetVirtualSchemaProposalResponse): QueryGetVirtualSchemaProposalResponseAmino {
    const obj: any = {};
    obj.virtualSchemaProposal = message.virtualSchemaProposal ? VirtualSchemaProposal.toAmino(message.virtualSchemaProposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetVirtualSchemaProposalResponseAminoMsg): QueryGetVirtualSchemaProposalResponse {
    return QueryGetVirtualSchemaProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVirtualSchemaProposalResponseProtoMsg): QueryGetVirtualSchemaProposalResponse {
    return QueryGetVirtualSchemaProposalResponse.decode(message.value);
  },
  toProto(message: QueryGetVirtualSchemaProposalResponse): Uint8Array {
    return QueryGetVirtualSchemaProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVirtualSchemaProposalResponse): QueryGetVirtualSchemaProposalResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetVirtualSchemaProposalResponse',
      value: QueryGetVirtualSchemaProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllVirtualSchemaProposalRequest(): QueryAllVirtualSchemaProposalRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllVirtualSchemaProposalRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaProposalRequest',
  encode(message: QueryAllVirtualSchemaProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVirtualSchemaProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVirtualSchemaProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllVirtualSchemaProposalRequest>): QueryAllVirtualSchemaProposalRequest {
    const message = createBaseQueryAllVirtualSchemaProposalRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVirtualSchemaProposalRequestAmino): QueryAllVirtualSchemaProposalRequest {
    const message = createBaseQueryAllVirtualSchemaProposalRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVirtualSchemaProposalRequest): QueryAllVirtualSchemaProposalRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVirtualSchemaProposalRequestAminoMsg): QueryAllVirtualSchemaProposalRequest {
    return QueryAllVirtualSchemaProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVirtualSchemaProposalRequestProtoMsg): QueryAllVirtualSchemaProposalRequest {
    return QueryAllVirtualSchemaProposalRequest.decode(message.value);
  },
  toProto(message: QueryAllVirtualSchemaProposalRequest): Uint8Array {
    return QueryAllVirtualSchemaProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVirtualSchemaProposalRequest): QueryAllVirtualSchemaProposalRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaProposalRequest',
      value: QueryAllVirtualSchemaProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllVirtualSchemaProposalResponse(): QueryAllVirtualSchemaProposalResponse {
  return {
    virtualSchemaProposal: [],
    pagination: undefined
  };
}
export const QueryAllVirtualSchemaProposalResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaProposalResponse',
  encode(message: QueryAllVirtualSchemaProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.virtualSchemaProposal) {
      VirtualSchemaProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVirtualSchemaProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVirtualSchemaProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.virtualSchemaProposal.push(VirtualSchemaProposal.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllVirtualSchemaProposalResponse>): QueryAllVirtualSchemaProposalResponse {
    const message = createBaseQueryAllVirtualSchemaProposalResponse();
    message.virtualSchemaProposal = object.virtualSchemaProposal?.map(e => VirtualSchemaProposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVirtualSchemaProposalResponseAmino): QueryAllVirtualSchemaProposalResponse {
    const message = createBaseQueryAllVirtualSchemaProposalResponse();
    message.virtualSchemaProposal = object.virtualSchemaProposal?.map(e => VirtualSchemaProposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVirtualSchemaProposalResponse): QueryAllVirtualSchemaProposalResponseAmino {
    const obj: any = {};
    if (message.virtualSchemaProposal) {
      obj.virtualSchemaProposal = message.virtualSchemaProposal.map(e => e ? VirtualSchemaProposal.toAmino(e) : undefined);
    } else {
      obj.virtualSchemaProposal = message.virtualSchemaProposal;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVirtualSchemaProposalResponseAminoMsg): QueryAllVirtualSchemaProposalResponse {
    return QueryAllVirtualSchemaProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVirtualSchemaProposalResponseProtoMsg): QueryAllVirtualSchemaProposalResponse {
    return QueryAllVirtualSchemaProposalResponse.decode(message.value);
  },
  toProto(message: QueryAllVirtualSchemaProposalResponse): Uint8Array {
    return QueryAllVirtualSchemaProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVirtualSchemaProposalResponse): QueryAllVirtualSchemaProposalResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllVirtualSchemaProposalResponse',
      value: QueryAllVirtualSchemaProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetActiveVirtualSchemaProposalRequest(): QueryGetActiveVirtualSchemaProposalRequest {
  return {
    index: ''
  };
}
export const QueryGetActiveVirtualSchemaProposalRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActiveVirtualSchemaProposalRequest',
  encode(message: QueryGetActiveVirtualSchemaProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActiveVirtualSchemaProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActiveVirtualSchemaProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.index = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActiveVirtualSchemaProposalRequest>): QueryGetActiveVirtualSchemaProposalRequest {
    const message = createBaseQueryGetActiveVirtualSchemaProposalRequest();
    message.index = object.index ?? '';
    return message;
  },
  fromAmino(object: QueryGetActiveVirtualSchemaProposalRequestAmino): QueryGetActiveVirtualSchemaProposalRequest {
    const message = createBaseQueryGetActiveVirtualSchemaProposalRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: QueryGetActiveVirtualSchemaProposalRequest): QueryGetActiveVirtualSchemaProposalRequestAmino {
    const obj: any = {};
    obj.index = message.index === '' ? undefined : message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetActiveVirtualSchemaProposalRequestAminoMsg): QueryGetActiveVirtualSchemaProposalRequest {
    return QueryGetActiveVirtualSchemaProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActiveVirtualSchemaProposalRequestProtoMsg): QueryGetActiveVirtualSchemaProposalRequest {
    return QueryGetActiveVirtualSchemaProposalRequest.decode(message.value);
  },
  toProto(message: QueryGetActiveVirtualSchemaProposalRequest): Uint8Array {
    return QueryGetActiveVirtualSchemaProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActiveVirtualSchemaProposalRequest): QueryGetActiveVirtualSchemaProposalRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActiveVirtualSchemaProposalRequest',
      value: QueryGetActiveVirtualSchemaProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetActiveVirtualSchemaProposalResponse(): QueryGetActiveVirtualSchemaProposalResponse {
  return {
    activeVirtualSchemaProposal: ActiveVirtualSchemaProposal.fromPartial({})
  };
}
export const QueryGetActiveVirtualSchemaProposalResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActiveVirtualSchemaProposalResponse',
  encode(message: QueryGetActiveVirtualSchemaProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activeVirtualSchemaProposal !== undefined) {
      ActiveVirtualSchemaProposal.encode(message.activeVirtualSchemaProposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetActiveVirtualSchemaProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActiveVirtualSchemaProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.activeVirtualSchemaProposal = ActiveVirtualSchemaProposal.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetActiveVirtualSchemaProposalResponse>): QueryGetActiveVirtualSchemaProposalResponse {
    const message = createBaseQueryGetActiveVirtualSchemaProposalResponse();
    message.activeVirtualSchemaProposal = object.activeVirtualSchemaProposal !== undefined && object.activeVirtualSchemaProposal !== null ? ActiveVirtualSchemaProposal.fromPartial(object.activeVirtualSchemaProposal) : undefined;
    return message;
  },
  fromAmino(object: QueryGetActiveVirtualSchemaProposalResponseAmino): QueryGetActiveVirtualSchemaProposalResponse {
    const message = createBaseQueryGetActiveVirtualSchemaProposalResponse();
    if (object.activeVirtualSchemaProposal !== undefined && object.activeVirtualSchemaProposal !== null) {
      message.activeVirtualSchemaProposal = ActiveVirtualSchemaProposal.fromAmino(object.activeVirtualSchemaProposal);
    }
    return message;
  },
  toAmino(message: QueryGetActiveVirtualSchemaProposalResponse): QueryGetActiveVirtualSchemaProposalResponseAmino {
    const obj: any = {};
    obj.activeVirtualSchemaProposal = message.activeVirtualSchemaProposal ? ActiveVirtualSchemaProposal.toAmino(message.activeVirtualSchemaProposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetActiveVirtualSchemaProposalResponseAminoMsg): QueryGetActiveVirtualSchemaProposalResponse {
    return QueryGetActiveVirtualSchemaProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActiveVirtualSchemaProposalResponseProtoMsg): QueryGetActiveVirtualSchemaProposalResponse {
    return QueryGetActiveVirtualSchemaProposalResponse.decode(message.value);
  },
  toProto(message: QueryGetActiveVirtualSchemaProposalResponse): Uint8Array {
    return QueryGetActiveVirtualSchemaProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActiveVirtualSchemaProposalResponse): QueryGetActiveVirtualSchemaProposalResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetActiveVirtualSchemaProposalResponse',
      value: QueryGetActiveVirtualSchemaProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllActiveVirtualSchemaProposalRequest(): QueryAllActiveVirtualSchemaProposalRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllActiveVirtualSchemaProposalRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActiveVirtualSchemaProposalRequest',
  encode(message: QueryAllActiveVirtualSchemaProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActiveVirtualSchemaProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActiveVirtualSchemaProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActiveVirtualSchemaProposalRequest>): QueryAllActiveVirtualSchemaProposalRequest {
    const message = createBaseQueryAllActiveVirtualSchemaProposalRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActiveVirtualSchemaProposalRequestAmino): QueryAllActiveVirtualSchemaProposalRequest {
    const message = createBaseQueryAllActiveVirtualSchemaProposalRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActiveVirtualSchemaProposalRequest): QueryAllActiveVirtualSchemaProposalRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActiveVirtualSchemaProposalRequestAminoMsg): QueryAllActiveVirtualSchemaProposalRequest {
    return QueryAllActiveVirtualSchemaProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActiveVirtualSchemaProposalRequestProtoMsg): QueryAllActiveVirtualSchemaProposalRequest {
    return QueryAllActiveVirtualSchemaProposalRequest.decode(message.value);
  },
  toProto(message: QueryAllActiveVirtualSchemaProposalRequest): Uint8Array {
    return QueryAllActiveVirtualSchemaProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActiveVirtualSchemaProposalRequest): QueryAllActiveVirtualSchemaProposalRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActiveVirtualSchemaProposalRequest',
      value: QueryAllActiveVirtualSchemaProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllActiveVirtualSchemaProposalResponse(): QueryAllActiveVirtualSchemaProposalResponse {
  return {
    activeVirtualSchemaProposal: [],
    pagination: undefined
  };
}
export const QueryAllActiveVirtualSchemaProposalResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActiveVirtualSchemaProposalResponse',
  encode(message: QueryAllActiveVirtualSchemaProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.activeVirtualSchemaProposal) {
      ActiveVirtualSchemaProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllActiveVirtualSchemaProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllActiveVirtualSchemaProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.activeVirtualSchemaProposal.push(ActiveVirtualSchemaProposal.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllActiveVirtualSchemaProposalResponse>): QueryAllActiveVirtualSchemaProposalResponse {
    const message = createBaseQueryAllActiveVirtualSchemaProposalResponse();
    message.activeVirtualSchemaProposal = object.activeVirtualSchemaProposal?.map(e => ActiveVirtualSchemaProposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllActiveVirtualSchemaProposalResponseAmino): QueryAllActiveVirtualSchemaProposalResponse {
    const message = createBaseQueryAllActiveVirtualSchemaProposalResponse();
    message.activeVirtualSchemaProposal = object.activeVirtualSchemaProposal?.map(e => ActiveVirtualSchemaProposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllActiveVirtualSchemaProposalResponse): QueryAllActiveVirtualSchemaProposalResponseAmino {
    const obj: any = {};
    if (message.activeVirtualSchemaProposal) {
      obj.activeVirtualSchemaProposal = message.activeVirtualSchemaProposal.map(e => e ? ActiveVirtualSchemaProposal.toAmino(e) : undefined);
    } else {
      obj.activeVirtualSchemaProposal = message.activeVirtualSchemaProposal;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllActiveVirtualSchemaProposalResponseAminoMsg): QueryAllActiveVirtualSchemaProposalResponse {
    return QueryAllActiveVirtualSchemaProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllActiveVirtualSchemaProposalResponseProtoMsg): QueryAllActiveVirtualSchemaProposalResponse {
    return QueryAllActiveVirtualSchemaProposalResponse.decode(message.value);
  },
  toProto(message: QueryAllActiveVirtualSchemaProposalResponse): Uint8Array {
    return QueryAllActiveVirtualSchemaProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllActiveVirtualSchemaProposalResponse): QueryAllActiveVirtualSchemaProposalResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllActiveVirtualSchemaProposalResponse',
      value: QueryAllActiveVirtualSchemaProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetInactiveVirtualSchemaProposalRequest(): QueryGetInactiveVirtualSchemaProposalRequest {
  return {
    index: ''
  };
}
export const QueryGetInactiveVirtualSchemaProposalRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetInactiveVirtualSchemaProposalRequest',
  encode(message: QueryGetInactiveVirtualSchemaProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInactiveVirtualSchemaProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInactiveVirtualSchemaProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.index = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetInactiveVirtualSchemaProposalRequest>): QueryGetInactiveVirtualSchemaProposalRequest {
    const message = createBaseQueryGetInactiveVirtualSchemaProposalRequest();
    message.index = object.index ?? '';
    return message;
  },
  fromAmino(object: QueryGetInactiveVirtualSchemaProposalRequestAmino): QueryGetInactiveVirtualSchemaProposalRequest {
    const message = createBaseQueryGetInactiveVirtualSchemaProposalRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: QueryGetInactiveVirtualSchemaProposalRequest): QueryGetInactiveVirtualSchemaProposalRequestAmino {
    const obj: any = {};
    obj.index = message.index === '' ? undefined : message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetInactiveVirtualSchemaProposalRequestAminoMsg): QueryGetInactiveVirtualSchemaProposalRequest {
    return QueryGetInactiveVirtualSchemaProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetInactiveVirtualSchemaProposalRequestProtoMsg): QueryGetInactiveVirtualSchemaProposalRequest {
    return QueryGetInactiveVirtualSchemaProposalRequest.decode(message.value);
  },
  toProto(message: QueryGetInactiveVirtualSchemaProposalRequest): Uint8Array {
    return QueryGetInactiveVirtualSchemaProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetInactiveVirtualSchemaProposalRequest): QueryGetInactiveVirtualSchemaProposalRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetInactiveVirtualSchemaProposalRequest',
      value: QueryGetInactiveVirtualSchemaProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetInactiveVirtualSchemaProposalResponse(): QueryGetInactiveVirtualSchemaProposalResponse {
  return {
    inactiveVirtualSchemaProposal: InactiveVirtualSchemaProposal.fromPartial({})
  };
}
export const QueryGetInactiveVirtualSchemaProposalResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetInactiveVirtualSchemaProposalResponse',
  encode(message: QueryGetInactiveVirtualSchemaProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inactiveVirtualSchemaProposal !== undefined) {
      InactiveVirtualSchemaProposal.encode(message.inactiveVirtualSchemaProposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInactiveVirtualSchemaProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInactiveVirtualSchemaProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.inactiveVirtualSchemaProposal = InactiveVirtualSchemaProposal.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetInactiveVirtualSchemaProposalResponse>): QueryGetInactiveVirtualSchemaProposalResponse {
    const message = createBaseQueryGetInactiveVirtualSchemaProposalResponse();
    message.inactiveVirtualSchemaProposal = object.inactiveVirtualSchemaProposal !== undefined && object.inactiveVirtualSchemaProposal !== null ? InactiveVirtualSchemaProposal.fromPartial(object.inactiveVirtualSchemaProposal) : undefined;
    return message;
  },
  fromAmino(object: QueryGetInactiveVirtualSchemaProposalResponseAmino): QueryGetInactiveVirtualSchemaProposalResponse {
    const message = createBaseQueryGetInactiveVirtualSchemaProposalResponse();
    if (object.inactiveVirtualSchemaProposal !== undefined && object.inactiveVirtualSchemaProposal !== null) {
      message.inactiveVirtualSchemaProposal = InactiveVirtualSchemaProposal.fromAmino(object.inactiveVirtualSchemaProposal);
    }
    return message;
  },
  toAmino(message: QueryGetInactiveVirtualSchemaProposalResponse): QueryGetInactiveVirtualSchemaProposalResponseAmino {
    const obj: any = {};
    obj.inactiveVirtualSchemaProposal = message.inactiveVirtualSchemaProposal ? InactiveVirtualSchemaProposal.toAmino(message.inactiveVirtualSchemaProposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetInactiveVirtualSchemaProposalResponseAminoMsg): QueryGetInactiveVirtualSchemaProposalResponse {
    return QueryGetInactiveVirtualSchemaProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetInactiveVirtualSchemaProposalResponseProtoMsg): QueryGetInactiveVirtualSchemaProposalResponse {
    return QueryGetInactiveVirtualSchemaProposalResponse.decode(message.value);
  },
  toProto(message: QueryGetInactiveVirtualSchemaProposalResponse): Uint8Array {
    return QueryGetInactiveVirtualSchemaProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetInactiveVirtualSchemaProposalResponse): QueryGetInactiveVirtualSchemaProposalResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryGetInactiveVirtualSchemaProposalResponse',
      value: QueryGetInactiveVirtualSchemaProposalResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllInactiveVirtualSchemaProposalRequest(): QueryAllInactiveVirtualSchemaProposalRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllInactiveVirtualSchemaProposalRequest = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllInactiveVirtualSchemaProposalRequest',
  encode(message: QueryAllInactiveVirtualSchemaProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInactiveVirtualSchemaProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInactiveVirtualSchemaProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.pagination = PageRequest.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllInactiveVirtualSchemaProposalRequest>): QueryAllInactiveVirtualSchemaProposalRequest {
    const message = createBaseQueryAllInactiveVirtualSchemaProposalRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllInactiveVirtualSchemaProposalRequestAmino): QueryAllInactiveVirtualSchemaProposalRequest {
    const message = createBaseQueryAllInactiveVirtualSchemaProposalRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllInactiveVirtualSchemaProposalRequest): QueryAllInactiveVirtualSchemaProposalRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllInactiveVirtualSchemaProposalRequestAminoMsg): QueryAllInactiveVirtualSchemaProposalRequest {
    return QueryAllInactiveVirtualSchemaProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllInactiveVirtualSchemaProposalRequestProtoMsg): QueryAllInactiveVirtualSchemaProposalRequest {
    return QueryAllInactiveVirtualSchemaProposalRequest.decode(message.value);
  },
  toProto(message: QueryAllInactiveVirtualSchemaProposalRequest): Uint8Array {
    return QueryAllInactiveVirtualSchemaProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllInactiveVirtualSchemaProposalRequest): QueryAllInactiveVirtualSchemaProposalRequestProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllInactiveVirtualSchemaProposalRequest',
      value: QueryAllInactiveVirtualSchemaProposalRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllInactiveVirtualSchemaProposalResponse(): QueryAllInactiveVirtualSchemaProposalResponse {
  return {
    inactiveVirtualSchemaProposal: [],
    pagination: undefined
  };
}
export const QueryAllInactiveVirtualSchemaProposalResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllInactiveVirtualSchemaProposalResponse',
  encode(message: QueryAllInactiveVirtualSchemaProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inactiveVirtualSchemaProposal) {
      InactiveVirtualSchemaProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllInactiveVirtualSchemaProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInactiveVirtualSchemaProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.inactiveVirtualSchemaProposal.push(InactiveVirtualSchemaProposal.decode(reader, reader.uint32()));
        break;
      case 2:
        message.pagination = PageResponse.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllInactiveVirtualSchemaProposalResponse>): QueryAllInactiveVirtualSchemaProposalResponse {
    const message = createBaseQueryAllInactiveVirtualSchemaProposalResponse();
    message.inactiveVirtualSchemaProposal = object.inactiveVirtualSchemaProposal?.map(e => InactiveVirtualSchemaProposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllInactiveVirtualSchemaProposalResponseAmino): QueryAllInactiveVirtualSchemaProposalResponse {
    const message = createBaseQueryAllInactiveVirtualSchemaProposalResponse();
    message.inactiveVirtualSchemaProposal = object.inactiveVirtualSchemaProposal?.map(e => InactiveVirtualSchemaProposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllInactiveVirtualSchemaProposalResponse): QueryAllInactiveVirtualSchemaProposalResponseAmino {
    const obj: any = {};
    if (message.inactiveVirtualSchemaProposal) {
      obj.inactiveVirtualSchemaProposal = message.inactiveVirtualSchemaProposal.map(e => e ? InactiveVirtualSchemaProposal.toAmino(e) : undefined);
    } else {
      obj.inactiveVirtualSchemaProposal = message.inactiveVirtualSchemaProposal;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllInactiveVirtualSchemaProposalResponseAminoMsg): QueryAllInactiveVirtualSchemaProposalResponse {
    return QueryAllInactiveVirtualSchemaProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllInactiveVirtualSchemaProposalResponseProtoMsg): QueryAllInactiveVirtualSchemaProposalResponse {
    return QueryAllInactiveVirtualSchemaProposalResponse.decode(message.value);
  },
  toProto(message: QueryAllInactiveVirtualSchemaProposalResponse): Uint8Array {
    return QueryAllInactiveVirtualSchemaProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllInactiveVirtualSchemaProposalResponse): QueryAllInactiveVirtualSchemaProposalResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.QueryAllInactiveVirtualSchemaProposalResponse',
      value: QueryAllInactiveVirtualSchemaProposalResponse.encode(message).finish()
    };
  }
};