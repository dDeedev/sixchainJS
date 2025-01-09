//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from '../../../cosmos/base/query/v1beta1/pagination';
import { Timestamp } from '../../../google/protobuf/timestamp';
import { base64FromBytes, bytesFromBase64, fromTimestamp,Long, toTimestamp } from '../../../helpers';
import { Log, LogAmino, LogSDKType, Params, ParamsAmino, ParamsSDKType,TraceConfig, TraceConfigAmino, TraceConfigSDKType } from './evm';
import { MsgEthereumTx, MsgEthereumTxAmino, MsgEthereumTxSDKType } from './tx';
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}
export interface QueryAccountRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryAccountRequest';
  value: Uint8Array;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestAmino {
  /** address is the ethereum hex address to query the account for. */
  address?: string;
}
export interface QueryAccountRequestAminoMsg {
  type: '/ethermint.evm.v1.QueryAccountRequest';
  value: QueryAccountRequestAmino;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestSDKType {
  address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
  /** code hash is the hex-formatted code bytes from the EOA. */
  codeHash: string;
  /** nonce is the account's sequence number. */
  nonce: Long;
}
export interface QueryAccountResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryAccountResponse';
  value: Uint8Array;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseAmino {
  /** balance is the balance of the EVM denomination. */
  balance?: string;
  /** code hash is the hex-formatted code bytes from the EOA. */
  code_hash?: string;
  /** nonce is the account's sequence number. */
  nonce?: string;
}
export interface QueryAccountResponseAminoMsg {
  type: '/ethermint.evm.v1.QueryAccountResponse';
  value: QueryAccountResponseAmino;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseSDKType {
  balance: string;
  code_hash: string;
  nonce: Long;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}
export interface QueryCosmosAccountRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryCosmosAccountRequest';
  value: Uint8Array;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequestAmino {
  /** address is the ethereum hex address to query the account for. */
  address?: string;
}
export interface QueryCosmosAccountRequestAminoMsg {
  type: '/ethermint.evm.v1.QueryCosmosAccountRequest';
  value: QueryCosmosAccountRequestAmino;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequestSDKType {
  address: string;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponse {
  /** cosmos_address is the cosmos address of the account. */
  cosmosAddress: string;
  /** sequence is the account's sequence number. */
  sequence: Long;
  /** account_number is the account numbert */
  accountNumber: Long;
}
export interface QueryCosmosAccountResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryCosmosAccountResponse';
  value: Uint8Array;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponseAmino {
  /** cosmos_address is the cosmos address of the account. */
  cosmos_address?: string;
  /** sequence is the account's sequence number. */
  sequence?: string;
  /** account_number is the account numbert */
  account_number?: string;
}
export interface QueryCosmosAccountResponseAminoMsg {
  type: '/ethermint.evm.v1.QueryCosmosAccountResponse';
  value: QueryCosmosAccountResponseAmino;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponseSDKType {
  cosmos_address: string;
  sequence: Long;
  account_number: Long;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequest {
  /** cons_address is the validator cons address to query the account for. */
  consAddress: string;
}
export interface QueryValidatorAccountRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryValidatorAccountRequest';
  value: Uint8Array;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequestAmino {
  /** cons_address is the validator cons address to query the account for. */
  cons_address?: string;
}
export interface QueryValidatorAccountRequestAminoMsg {
  type: '/ethermint.evm.v1.QueryValidatorAccountRequest';
  value: QueryValidatorAccountRequestAmino;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequestSDKType {
  cons_address: string;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponse {
  /** account_address is the cosmos address of the account in bech32 format. */
  accountAddress: string;
  /** sequence is the account's sequence number. */
  sequence: Long;
  /** account_number is the account number */
  accountNumber: Long;
}
export interface QueryValidatorAccountResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryValidatorAccountResponse';
  value: Uint8Array;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponseAmino {
  /** account_address is the cosmos address of the account in bech32 format. */
  account_address?: string;
  /** sequence is the account's sequence number. */
  sequence?: string;
  /** account_number is the account number */
  account_number?: string;
}
export interface QueryValidatorAccountResponseAminoMsg {
  type: '/ethermint.evm.v1.QueryValidatorAccountResponse';
  value: QueryValidatorAccountResponseAmino;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponseSDKType {
  account_address: string;
  sequence: Long;
  account_number: Long;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  /** address is the ethereum hex address to query the balance for. */
  address: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryBalanceRequest';
  value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestAmino {
  /** address is the ethereum hex address to query the balance for. */
  address?: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: '/ethermint.evm.v1.QueryBalanceRequest';
  value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestSDKType {
  address: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryBalanceResponse';
  value: Uint8Array;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseAmino {
  /** balance is the balance of the EVM denomination. */
  balance?: string;
}
export interface QueryBalanceResponseAminoMsg {
  type: '/ethermint.evm.v1.QueryBalanceResponse';
  value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseSDKType {
  balance: string;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequest {
  /** address is the ethereum hex address to query the storage state for. */
  address: string;
  /** key defines the key of the storage state */
  key: string;
}
export interface QueryStorageRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryStorageRequest';
  value: Uint8Array;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequestAmino {
  /** address is the ethereum hex address to query the storage state for. */
  address?: string;
  /** key defines the key of the storage state */
  key?: string;
}
export interface QueryStorageRequestAminoMsg {
  type: '/ethermint.evm.v1.QueryStorageRequest';
  value: QueryStorageRequestAmino;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequestSDKType {
  address: string;
  key: string;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponse {
  /** key defines the storage state value hash associated with the given key. */
  value: string;
}
export interface QueryStorageResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryStorageResponse';
  value: Uint8Array;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponseAmino {
  /** key defines the storage state value hash associated with the given key. */
  value?: string;
}
export interface QueryStorageResponseAminoMsg {
  type: '/ethermint.evm.v1.QueryStorageResponse';
  value: QueryStorageResponseAmino;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponseSDKType {
  value: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
  /** address is the ethereum hex address to query the code for. */
  address: string;
}
export interface QueryCodeRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryCodeRequest';
  value: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestAmino {
  /** address is the ethereum hex address to query the code for. */
  address?: string;
}
export interface QueryCodeRequestAminoMsg {
  type: '/ethermint.evm.v1.QueryCodeRequest';
  value: QueryCodeRequestAmino;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestSDKType {
  address: string;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponse {
  /** code represents the code bytes from an ethereum address. */
  code: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryCodeResponse';
  value: Uint8Array;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponseAmino {
  /** code represents the code bytes from an ethereum address. */
  code?: string;
}
export interface QueryCodeResponseAminoMsg {
  type: '/ethermint.evm.v1.QueryCodeResponse';
  value: QueryCodeResponseAmino;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponseSDKType {
  code: Uint8Array;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequest {
  /** hash is the ethereum transaction hex hash to query the logs for. */
  hash: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryTxLogsRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryTxLogsRequest';
  value: Uint8Array;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequestAmino {
  /** hash is the ethereum transaction hex hash to query the logs for. */
  hash?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryTxLogsRequestAminoMsg {
  type: '/ethermint.evm.v1.QueryTxLogsRequest';
  value: QueryTxLogsRequestAmino;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequestSDKType {
  hash: string;
  pagination?: PageRequestSDKType;
}
/** QueryTxLogs is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponse {
  /** logs represents the ethereum logs generated from the given transaction. */
  logs: Log[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryTxLogsResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryTxLogsResponse';
  value: Uint8Array;
}
/** QueryTxLogs is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponseAmino {
  /** logs represents the ethereum logs generated from the given transaction. */
  logs?: LogAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryTxLogsResponseAminoMsg {
  type: '/ethermint.evm.v1.QueryTxLogsResponse';
  value: QueryTxLogsResponseAmino;
}
/** QueryTxLogs is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponseSDKType {
  logs: LogSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryParamsRequest';
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: '/ethermint.evm.v1.QueryParamsRequest';
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
  /** params define the evm module parameters. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryParamsResponse';
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponseAmino {
  /** params define the evm module parameters. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: '/ethermint.evm.v1.QueryParamsResponse';
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequest {
  /** same json format as the json rpc api. */
  args: Uint8Array;
  /** the default gas cap to be used */
  gasCap: Long;
}
export interface EthCallRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.EthCallRequest';
  value: Uint8Array;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequestAmino {
  /** same json format as the json rpc api. */
  args?: string;
  /** the default gas cap to be used */
  gas_cap?: string;
}
export interface EthCallRequestAminoMsg {
  type: '/ethermint.evm.v1.EthCallRequest';
  value: EthCallRequestAmino;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequestSDKType {
  args: Uint8Array;
  gas_cap: Long;
}
export interface EthCallWithOverrideRequest {
  /** same json format as the json rpc api. */
  args: Uint8Array;
  /** the default gas cap to be used */
  gasCap: Long;
  overrides?: StateOverride;
}
export interface EthCallWithOverrideRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.EthCallWithOverrideRequest';
  value: Uint8Array;
}
export interface EthCallWithOverrideRequestAmino {
  /** same json format as the json rpc api. */
  args?: string;
  /** the default gas cap to be used */
  gas_cap?: string;
  overrides?: StateOverrideAmino;
}
export interface EthCallWithOverrideRequestAminoMsg {
  type: '/ethermint.evm.v1.EthCallWithOverrideRequest';
  value: EthCallWithOverrideRequestAmino;
}
export interface EthCallWithOverrideRequestSDKType {
  args: Uint8Array;
  gas_cap: Long;
  overrides?: StateOverrideSDKType;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponse {
  /** the estimated gas */
  gas: Long;
}
export interface EstimateGasResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.EstimateGasResponse';
  value: Uint8Array;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponseAmino {
  /** the estimated gas */
  gas?: string;
}
export interface EstimateGasResponseAminoMsg {
  type: '/ethermint.evm.v1.EstimateGasResponse';
  value: EstimateGasResponseAmino;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponseSDKType {
  gas: Long;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequest {
  /** msgEthereumTx for the requested transaction */
  msg?: MsgEthereumTx;
  /** TraceConfig holds extra parameters to trace functions. */
  traceConfig?: TraceConfig;
  /**
   * the predecessor transactions included in the same block
   * need to be replayed first to get correct context for tracing.
   */
  predecessors: MsgEthereumTx[];
  /** block number of requested transaction */
  blockNumber: Long;
  /** block hex hash of requested transaction */
  blockHash: string;
  /** block time of requested transaction */
  blockTime: Date;
}
export interface QueryTraceTxRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryTraceTxRequest';
  value: Uint8Array;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequestAmino {
  /** msgEthereumTx for the requested transaction */
  msg?: MsgEthereumTxAmino;
  /** TraceConfig holds extra parameters to trace functions. */
  trace_config?: TraceConfigAmino;
  /**
   * the predecessor transactions included in the same block
   * need to be replayed first to get correct context for tracing.
   */
  predecessors?: MsgEthereumTxAmino[];
  /** block number of requested transaction */
  block_number?: string;
  /** block hex hash of requested transaction */
  block_hash?: string;
  /** block time of requested transaction */
  block_time?: string;
}
export interface QueryTraceTxRequestAminoMsg {
  type: '/ethermint.evm.v1.QueryTraceTxRequest';
  value: QueryTraceTxRequestAmino;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequestSDKType {
  msg?: MsgEthereumTxSDKType;
  trace_config?: TraceConfigSDKType;
  predecessors: MsgEthereumTxSDKType[];
  block_number: Long;
  block_hash: string;
  block_time: Date;
}
export interface QueryTraceCallRequest {
  /** same json format as the json rpc api. */
  args: Uint8Array;
  /** the default gas cap to be used */
  gasCap: Long;
  /** TraceConfig holds extra parameters to trace functions. */
  config?: TraceCallConfig;
}
export interface QueryTraceCallRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryTraceCallRequest';
  value: Uint8Array;
}
export interface QueryTraceCallRequestAmino {
  /** same json format as the json rpc api. */
  args?: string;
  /** the default gas cap to be used */
  gas_cap?: string;
  /** TraceConfig holds extra parameters to trace functions. */
  config?: TraceCallConfigAmino;
}
export interface QueryTraceCallRequestAminoMsg {
  type: '/ethermint.evm.v1.QueryTraceCallRequest';
  value: QueryTraceCallRequestAmino;
}
export interface QueryTraceCallRequestSDKType {
  args: Uint8Array;
  gas_cap: Long;
  config?: TraceCallConfigSDKType;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponse {
  /** response serialized in bytes */
  data: Uint8Array;
}
export interface QueryTraceTxResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryTraceTxResponse';
  value: Uint8Array;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponseAmino {
  /** response serialized in bytes */
  data?: string;
}
export interface QueryTraceTxResponseAminoMsg {
  type: '/ethermint.evm.v1.QueryTraceTxResponse';
  value: QueryTraceTxResponseAmino;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponseSDKType {
  data: Uint8Array;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequest {
  /** txs messages in the block */
  txs: MsgEthereumTx[];
  /** TraceConfig holds extra parameters to trace functions. */
  traceConfig?: TraceConfig;
  /** block number */
  blockNumber: Long;
  /** block hex hash */
  blockHash: string;
  /** block time */
  blockTime: Date;
}
export interface QueryTraceBlockRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryTraceBlockRequest';
  value: Uint8Array;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequestAmino {
  /** txs messages in the block */
  txs?: MsgEthereumTxAmino[];
  /** TraceConfig holds extra parameters to trace functions. */
  trace_config?: TraceConfigAmino;
  /** block number */
  block_number?: string;
  /** block hex hash */
  block_hash?: string;
  /** block time */
  block_time?: string;
}
export interface QueryTraceBlockRequestAminoMsg {
  type: '/ethermint.evm.v1.QueryTraceBlockRequest';
  value: QueryTraceBlockRequestAmino;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequestSDKType {
  txs: MsgEthereumTxSDKType[];
  trace_config?: TraceConfigSDKType;
  block_number: Long;
  block_hash: string;
  block_time: Date;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponse {
  data: Uint8Array;
}
export interface QueryTraceBlockResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryTraceBlockResponse';
  value: Uint8Array;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponseAmino {
  data?: string;
}
export interface QueryTraceBlockResponseAminoMsg {
  type: '/ethermint.evm.v1.QueryTraceBlockResponse';
  value: QueryTraceBlockResponseAmino;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponseSDKType {
  data: Uint8Array;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {}
export interface QueryBaseFeeRequestProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryBaseFeeRequest';
  value: Uint8Array;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequestAmino {}
export interface QueryBaseFeeRequestAminoMsg {
  type: '/ethermint.evm.v1.QueryBaseFeeRequest';
  value: QueryBaseFeeRequestAmino;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequestSDKType {}
/** BaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
  baseFee: string;
}
export interface QueryBaseFeeResponseProtoMsg {
  typeUrl: '/ethermint.evm.v1.QueryBaseFeeResponse';
  value: Uint8Array;
}
/** BaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponseAmino {
  base_fee?: string;
}
export interface QueryBaseFeeResponseAminoMsg {
  type: '/ethermint.evm.v1.QueryBaseFeeResponse';
  value: QueryBaseFeeResponseAmino;
}
/** BaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponseSDKType {
  base_fee: string;
}
export interface OverrideAccount_StateEntry {
  key: string;
  value: string;
}
export interface OverrideAccount_StateEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface OverrideAccount_StateEntryAmino {
  key?: string;
  value?: string;
}
export interface OverrideAccount_StateEntryAminoMsg {
  type: string;
  value: OverrideAccount_StateEntryAmino;
}
export interface OverrideAccount_StateEntrySDKType {
  key: string;
  value: string;
}
export interface OverrideAccount_StateDiffEntry {
  key: string;
  value: string;
}
export interface OverrideAccount_StateDiffEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface OverrideAccount_StateDiffEntryAmino {
  key?: string;
  value?: string;
}
export interface OverrideAccount_StateDiffEntryAminoMsg {
  type: string;
  value: OverrideAccount_StateDiffEntryAmino;
}
export interface OverrideAccount_StateDiffEntrySDKType {
  key: string;
  value: string;
}
export interface OverrideAccount {
  /** Nonce of the account */
  nonce: Long;
  /** Smart contract code of the account */
  code: Uint8Array;
  /** Balance of the account, as a string for compatibility with big numbers */
  balance: string;
  /** State of the account (key-value pairs of hashes) */
  state: {
    [key: string]: string;
  };
  /** State diff of the account (key-value pairs of hashes) */
  stateDiff: {
    [key: string]: string;
  };
}
export interface OverrideAccountProtoMsg {
  typeUrl: '/ethermint.evm.v1.OverrideAccount';
  value: Uint8Array;
}
export interface OverrideAccountAmino {
  /** Nonce of the account */
  nonce?: string;
  /** Smart contract code of the account */
  code?: string;
  /** Balance of the account, as a string for compatibility with big numbers */
  balance?: string;
  /** State of the account (key-value pairs of hashes) */
  state?: {
    [key: string]: string;
  };
  /** State diff of the account (key-value pairs of hashes) */
  state_diff?: {
    [key: string]: string;
  };
}
export interface OverrideAccountAminoMsg {
  type: '/ethermint.evm.v1.OverrideAccount';
  value: OverrideAccountAmino;
}
export interface OverrideAccountSDKType {
  nonce: Long;
  code: Uint8Array;
  balance: string;
  state: {
    [key: string]: string;
  };
  state_diff: {
    [key: string]: string;
  };
}
export interface StateOverride_AccountsEntry {
  key: string;
  value?: OverrideAccount;
}
export interface StateOverride_AccountsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface StateOverride_AccountsEntryAmino {
  key?: string;
  value?: OverrideAccountAmino;
}
export interface StateOverride_AccountsEntryAminoMsg {
  type: string;
  value: StateOverride_AccountsEntryAmino;
}
export interface StateOverride_AccountsEntrySDKType {
  key: string;
  value?: OverrideAccountSDKType;
}
/** StateOverride is a map of addresses to OverrideAccount. */
export interface StateOverride {
  /** Mapping of addresses to OverrideAccount */
  accounts: {
    [key: string]: OverrideAccount;
  };
}
export interface StateOverrideProtoMsg {
  typeUrl: '/ethermint.evm.v1.StateOverride';
  value: Uint8Array;
}
/** StateOverride is a map of addresses to OverrideAccount. */
export interface StateOverrideAmino {
  /** Mapping of addresses to OverrideAccount */
  accounts?: {
    [key: string]: OverrideAccountAmino;
  };
}
export interface StateOverrideAminoMsg {
  type: '/ethermint.evm.v1.StateOverride';
  value: StateOverrideAmino;
}
/** StateOverride is a map of addresses to OverrideAccount. */
export interface StateOverrideSDKType {
  accounts: {
    [key: string]: OverrideAccountSDKType;
  };
}
export interface BlockOverrides {
  number: string;
  defficulty: string;
  time: Long;
  gasLimit: Long;
  coinbase: string;
  random: string;
  baseFee: string;
  blobBaseFee: string;
}
export interface BlockOverridesProtoMsg {
  typeUrl: '/ethermint.evm.v1.BlockOverrides';
  value: Uint8Array;
}
export interface BlockOverridesAmino {
  number?: string;
  defficulty?: string;
  time?: string;
  gas_limit?: string;
  coinbase?: string;
  random?: string;
  base_fee?: string;
  blob_base_fee?: string;
}
export interface BlockOverridesAminoMsg {
  type: '/ethermint.evm.v1.BlockOverrides';
  value: BlockOverridesAmino;
}
export interface BlockOverridesSDKType {
  number: string;
  defficulty: string;
  time: Long;
  gas_limit: Long;
  coinbase: string;
  random: string;
  base_fee: string;
  blob_base_fee: string;
}
export interface TraceCallConfig {
  traceConfig?: TraceConfig;
  stateOverrides?: StateOverride;
  blockOverrieds?: BlockOverrides;
}
export interface TraceCallConfigProtoMsg {
  typeUrl: '/ethermint.evm.v1.TraceCallConfig';
  value: Uint8Array;
}
export interface TraceCallConfigAmino {
  trace_config?: TraceConfigAmino;
  state_overrides?: StateOverrideAmino;
  block_overrieds?: BlockOverridesAmino;
}
export interface TraceCallConfigAminoMsg {
  type: '/ethermint.evm.v1.TraceCallConfig';
  value: TraceCallConfigAmino;
}
export interface TraceCallConfigSDKType {
  trace_config?: TraceConfigSDKType;
  state_overrides?: StateOverrideSDKType;
  block_overrieds?: BlockOverridesSDKType;
}
function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: ''
  };
}
export const QueryAccountRequest = {
  typeUrl: '/ethermint.evm.v1.QueryAccountRequest',
  encode(message: QueryAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.address = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountRequest): QueryAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest {
    return QueryAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest {
    return QueryAccountRequest.decode(message.value);
  },
  toProto(message: QueryAccountRequest): Uint8Array {
    return QueryAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryAccountRequest',
      value: QueryAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    balance: '',
    codeHash: '',
    nonce: Long.UZERO
  };
}
export const QueryAccountResponse = {
  typeUrl: '/ethermint.evm.v1.QueryAccountResponse',
  encode(message: QueryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== '') {
      writer.uint32(10).string(message.balance);
    }
    if (message.codeHash !== '') {
      writer.uint32(18).string(message.codeHash);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.balance = reader.string();
        break;
      case 2:
        message.codeHash = reader.string();
        break;
      case 3:
        message.nonce = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.balance = object.balance ?? '';
    message.codeHash = object.codeHash ?? '';
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryAccountResponseAmino): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.codeHash = object.code_hash;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Long.fromString(object.nonce);
    }
    return message;
  },
  toAmino(message: QueryAccountResponse): QueryAccountResponseAmino {
    const obj: any = {};
    obj.balance = message.balance === '' ? undefined : message.balance;
    obj.code_hash = message.codeHash === '' ? undefined : message.codeHash;
    obj.nonce = !message.nonce.isZero() ? message.nonce?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountResponseAminoMsg): QueryAccountResponse {
    return QueryAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountResponseProtoMsg): QueryAccountResponse {
    return QueryAccountResponse.decode(message.value);
  },
  toProto(message: QueryAccountResponse): Uint8Array {
    return QueryAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountResponse): QueryAccountResponseProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryAccountResponse',
      value: QueryAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCosmosAccountRequest(): QueryCosmosAccountRequest {
  return {
    address: ''
  };
}
export const QueryCosmosAccountRequest = {
  typeUrl: '/ethermint.evm.v1.QueryCosmosAccountRequest',
  encode(message: QueryCosmosAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCosmosAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCosmosAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.address = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCosmosAccountRequest>): QueryCosmosAccountRequest {
    const message = createBaseQueryCosmosAccountRequest();
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: QueryCosmosAccountRequestAmino): QueryCosmosAccountRequest {
    const message = createBaseQueryCosmosAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCosmosAccountRequest): QueryCosmosAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryCosmosAccountRequestAminoMsg): QueryCosmosAccountRequest {
    return QueryCosmosAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCosmosAccountRequestProtoMsg): QueryCosmosAccountRequest {
    return QueryCosmosAccountRequest.decode(message.value);
  },
  toProto(message: QueryCosmosAccountRequest): Uint8Array {
    return QueryCosmosAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCosmosAccountRequest): QueryCosmosAccountRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryCosmosAccountRequest',
      value: QueryCosmosAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCosmosAccountResponse(): QueryCosmosAccountResponse {
  return {
    cosmosAddress: '',
    sequence: Long.UZERO,
    accountNumber: Long.UZERO
  };
}
export const QueryCosmosAccountResponse = {
  typeUrl: '/ethermint.evm.v1.QueryCosmosAccountResponse',
  encode(message: QueryCosmosAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmosAddress !== '') {
      writer.uint32(10).string(message.cosmosAddress);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCosmosAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCosmosAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.cosmosAddress = reader.string();
        break;
      case 2:
        message.sequence = reader.uint64() as Long;
        break;
      case 3:
        message.accountNumber = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCosmosAccountResponse>): QueryCosmosAccountResponse {
    const message = createBaseQueryCosmosAccountResponse();
    message.cosmosAddress = object.cosmosAddress ?? '';
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryCosmosAccountResponseAmino): QueryCosmosAccountResponse {
    const message = createBaseQueryCosmosAccountResponse();
    if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
      message.cosmosAddress = object.cosmos_address;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.accountNumber = Long.fromString(object.account_number);
    }
    return message;
  },
  toAmino(message: QueryCosmosAccountResponse): QueryCosmosAccountResponseAmino {
    const obj: any = {};
    obj.cosmos_address = message.cosmosAddress === '' ? undefined : message.cosmosAddress;
    obj.sequence = !message.sequence.isZero() ? message.sequence?.toString() : undefined;
    obj.account_number = !message.accountNumber.isZero() ? message.accountNumber?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCosmosAccountResponseAminoMsg): QueryCosmosAccountResponse {
    return QueryCosmosAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCosmosAccountResponseProtoMsg): QueryCosmosAccountResponse {
    return QueryCosmosAccountResponse.decode(message.value);
  },
  toProto(message: QueryCosmosAccountResponse): Uint8Array {
    return QueryCosmosAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCosmosAccountResponse): QueryCosmosAccountResponseProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryCosmosAccountResponse',
      value: QueryCosmosAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorAccountRequest(): QueryValidatorAccountRequest {
  return {
    consAddress: ''
  };
}
export const QueryValidatorAccountRequest = {
  typeUrl: '/ethermint.evm.v1.QueryValidatorAccountRequest',
  encode(message: QueryValidatorAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consAddress !== '') {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.consAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorAccountRequest>): QueryValidatorAccountRequest {
    const message = createBaseQueryValidatorAccountRequest();
    message.consAddress = object.consAddress ?? '';
    return message;
  },
  fromAmino(object: QueryValidatorAccountRequestAmino): QueryValidatorAccountRequest {
    const message = createBaseQueryValidatorAccountRequest();
    if (object.cons_address !== undefined && object.cons_address !== null) {
      message.consAddress = object.cons_address;
    }
    return message;
  },
  toAmino(message: QueryValidatorAccountRequest): QueryValidatorAccountRequestAmino {
    const obj: any = {};
    obj.cons_address = message.consAddress === '' ? undefined : message.consAddress;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorAccountRequestAminoMsg): QueryValidatorAccountRequest {
    return QueryValidatorAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorAccountRequestProtoMsg): QueryValidatorAccountRequest {
    return QueryValidatorAccountRequest.decode(message.value);
  },
  toProto(message: QueryValidatorAccountRequest): Uint8Array {
    return QueryValidatorAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorAccountRequest): QueryValidatorAccountRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryValidatorAccountRequest',
      value: QueryValidatorAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorAccountResponse(): QueryValidatorAccountResponse {
  return {
    accountAddress: '',
    sequence: Long.UZERO,
    accountNumber: Long.UZERO
  };
}
export const QueryValidatorAccountResponse = {
  typeUrl: '/ethermint.evm.v1.QueryValidatorAccountResponse',
  encode(message: QueryValidatorAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== '') {
      writer.uint32(10).string(message.accountAddress);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.accountAddress = reader.string();
        break;
      case 2:
        message.sequence = reader.uint64() as Long;
        break;
      case 3:
        message.accountNumber = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorAccountResponse>): QueryValidatorAccountResponse {
    const message = createBaseQueryValidatorAccountResponse();
    message.accountAddress = object.accountAddress ?? '';
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryValidatorAccountResponseAmino): QueryValidatorAccountResponse {
    const message = createBaseQueryValidatorAccountResponse();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.accountNumber = Long.fromString(object.account_number);
    }
    return message;
  },
  toAmino(message: QueryValidatorAccountResponse): QueryValidatorAccountResponseAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress === '' ? undefined : message.accountAddress;
    obj.sequence = !message.sequence.isZero() ? message.sequence?.toString() : undefined;
    obj.account_number = !message.accountNumber.isZero() ? message.accountNumber?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorAccountResponseAminoMsg): QueryValidatorAccountResponse {
    return QueryValidatorAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorAccountResponseProtoMsg): QueryValidatorAccountResponse {
    return QueryValidatorAccountResponse.decode(message.value);
  },
  toProto(message: QueryValidatorAccountResponse): Uint8Array {
    return QueryValidatorAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorAccountResponse): QueryValidatorAccountResponseProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryValidatorAccountResponse',
      value: QueryValidatorAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    address: ''
  };
}
export const QueryBalanceRequest = {
  typeUrl: '/ethermint.evm.v1.QueryBalanceRequest',
  encode(message: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.address = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryBalanceRequest',
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: ''
  };
}
export const QueryBalanceResponse = {
  typeUrl: '/ethermint.evm.v1.QueryBalanceResponse',
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== '') {
      writer.uint32(10).string(message.balance);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.balance = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance ?? '';
    return message;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance === '' ? undefined : message.balance;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryBalanceResponse',
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStorageRequest(): QueryStorageRequest {
  return {
    address: '',
    key: ''
  };
}
export const QueryStorageRequest = {
  typeUrl: '/ethermint.evm.v1.QueryStorageRequest',
  encode(message: QueryStorageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.key !== '') {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.address = reader.string();
        break;
      case 2:
        message.key = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStorageRequest>): QueryStorageRequest {
    const message = createBaseQueryStorageRequest();
    message.address = object.address ?? '';
    message.key = object.key ?? '';
    return message;
  },
  fromAmino(object: QueryStorageRequestAmino): QueryStorageRequest {
    const message = createBaseQueryStorageRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryStorageRequest): QueryStorageRequestAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    obj.key = message.key === '' ? undefined : message.key;
    return obj;
  },
  fromAminoMsg(object: QueryStorageRequestAminoMsg): QueryStorageRequest {
    return QueryStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageRequestProtoMsg): QueryStorageRequest {
    return QueryStorageRequest.decode(message.value);
  },
  toProto(message: QueryStorageRequest): Uint8Array {
    return QueryStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageRequest): QueryStorageRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryStorageRequest',
      value: QueryStorageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStorageResponse(): QueryStorageResponse {
  return {
    value: ''
  };
}
export const QueryStorageResponse = {
  typeUrl: '/ethermint.evm.v1.QueryStorageResponse',
  encode(message: QueryStorageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== '') {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.value = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStorageResponse>): QueryStorageResponse {
    const message = createBaseQueryStorageResponse();
    message.value = object.value ?? '';
    return message;
  },
  fromAmino(object: QueryStorageResponseAmino): QueryStorageResponse {
    const message = createBaseQueryStorageResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QueryStorageResponse): QueryStorageResponseAmino {
    const obj: any = {};
    obj.value = message.value === '' ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: QueryStorageResponseAminoMsg): QueryStorageResponse {
    return QueryStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageResponseProtoMsg): QueryStorageResponse {
    return QueryStorageResponse.decode(message.value);
  },
  toProto(message: QueryStorageResponse): Uint8Array {
    return QueryStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageResponse): QueryStorageResponseProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryStorageResponse',
      value: QueryStorageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    address: ''
  };
}
export const QueryCodeRequest = {
  typeUrl: '/ethermint.evm.v1.QueryCodeRequest',
  encode(message: QueryCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.address = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.address = object.address ?? '';
    return message;
  },
  fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCodeRequest): QueryCodeRequestAmino {
    const obj: any = {};
    obj.address = message.address === '' ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest {
    return QueryCodeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest {
    return QueryCodeRequest.decode(message.value);
  },
  toProto(message: QueryCodeRequest): Uint8Array {
    return QueryCodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryCodeRequest',
      value: QueryCodeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    code: new Uint8Array()
  };
}
export const QueryCodeResponse = {
  typeUrl: '/ethermint.evm.v1.QueryCodeResponse',
  encode(message: QueryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code.length !== 0) {
      writer.uint32(10).bytes(message.code);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.code = reader.bytes();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.code = object.code ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = bytesFromBase64(object.code);
    }
    return message;
  },
  toAmino(message: QueryCodeResponse): QueryCodeResponseAmino {
    const obj: any = {};
    obj.code = message.code ? base64FromBytes(message.code) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse {
    return QueryCodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse {
    return QueryCodeResponse.decode(message.value);
  },
  toProto(message: QueryCodeResponse): Uint8Array {
    return QueryCodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryCodeResponse',
      value: QueryCodeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTxLogsRequest(): QueryTxLogsRequest {
  return {
    hash: '',
    pagination: undefined
  };
}
export const QueryTxLogsRequest = {
  typeUrl: '/ethermint.evm.v1.QueryTxLogsRequest',
  encode(message: QueryTxLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== '') {
      writer.uint32(10).string(message.hash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxLogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxLogsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.hash = reader.string();
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
  fromPartial(object: Partial<QueryTxLogsRequest>): QueryTxLogsRequest {
    const message = createBaseQueryTxLogsRequest();
    message.hash = object.hash ?? '';
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTxLogsRequestAmino): QueryTxLogsRequest {
    const message = createBaseQueryTxLogsRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTxLogsRequest): QueryTxLogsRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === '' ? undefined : message.hash;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTxLogsRequestAminoMsg): QueryTxLogsRequest {
    return QueryTxLogsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTxLogsRequestProtoMsg): QueryTxLogsRequest {
    return QueryTxLogsRequest.decode(message.value);
  },
  toProto(message: QueryTxLogsRequest): Uint8Array {
    return QueryTxLogsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTxLogsRequest): QueryTxLogsRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryTxLogsRequest',
      value: QueryTxLogsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTxLogsResponse(): QueryTxLogsResponse {
  return {
    logs: [],
    pagination: undefined
  };
}
export const QueryTxLogsResponse = {
  typeUrl: '/ethermint.evm.v1.QueryTxLogsResponse',
  encode(message: QueryTxLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxLogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxLogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.logs.push(Log.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryTxLogsResponse>): QueryTxLogsResponse {
    const message = createBaseQueryTxLogsResponse();
    message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTxLogsResponseAmino): QueryTxLogsResponse {
    const message = createBaseQueryTxLogsResponse();
    message.logs = object.logs?.map(e => Log.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTxLogsResponse): QueryTxLogsResponseAmino {
    const obj: any = {};
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? Log.toAmino(e) : undefined);
    } else {
      obj.logs = message.logs;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTxLogsResponseAminoMsg): QueryTxLogsResponse {
    return QueryTxLogsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTxLogsResponseProtoMsg): QueryTxLogsResponse {
    return QueryTxLogsResponse.decode(message.value);
  },
  toProto(message: QueryTxLogsResponse): Uint8Array {
    return QueryTxLogsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTxLogsResponse): QueryTxLogsResponseProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryTxLogsResponse',
      value: QueryTxLogsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/ethermint.evm.v1.QueryParamsRequest',
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
      typeUrl: '/ethermint.evm.v1.QueryParamsRequest',
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
  typeUrl: '/ethermint.evm.v1.QueryParamsResponse',
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
      typeUrl: '/ethermint.evm.v1.QueryParamsResponse',
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseEthCallRequest(): EthCallRequest {
  return {
    args: new Uint8Array(),
    gasCap: Long.UZERO
  };
}
export const EthCallRequest = {
  typeUrl: '/ethermint.evm.v1.EthCallRequest',
  encode(message: EthCallRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.args.length !== 0) {
      writer.uint32(10).bytes(message.args);
    }
    if (!message.gasCap.isZero()) {
      writer.uint32(16).uint64(message.gasCap);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EthCallRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthCallRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.args = reader.bytes();
        break;
      case 2:
        message.gasCap = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EthCallRequest>): EthCallRequest {
    const message = createBaseEthCallRequest();
    message.args = object.args ?? new Uint8Array();
    message.gasCap = object.gasCap !== undefined && object.gasCap !== null ? Long.fromValue(object.gasCap) : Long.UZERO;
    return message;
  },
  fromAmino(object: EthCallRequestAmino): EthCallRequest {
    const message = createBaseEthCallRequest();
    if (object.args !== undefined && object.args !== null) {
      message.args = bytesFromBase64(object.args);
    }
    if (object.gas_cap !== undefined && object.gas_cap !== null) {
      message.gasCap = Long.fromString(object.gas_cap);
    }
    return message;
  },
  toAmino(message: EthCallRequest): EthCallRequestAmino {
    const obj: any = {};
    obj.args = message.args ? base64FromBytes(message.args) : undefined;
    obj.gas_cap = !message.gasCap.isZero() ? message.gasCap?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EthCallRequestAminoMsg): EthCallRequest {
    return EthCallRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EthCallRequestProtoMsg): EthCallRequest {
    return EthCallRequest.decode(message.value);
  },
  toProto(message: EthCallRequest): Uint8Array {
    return EthCallRequest.encode(message).finish();
  },
  toProtoMsg(message: EthCallRequest): EthCallRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.EthCallRequest',
      value: EthCallRequest.encode(message).finish()
    };
  }
};
function createBaseEthCallWithOverrideRequest(): EthCallWithOverrideRequest {
  return {
    args: new Uint8Array(),
    gasCap: Long.UZERO,
    overrides: undefined
  };
}
export const EthCallWithOverrideRequest = {
  typeUrl: '/ethermint.evm.v1.EthCallWithOverrideRequest',
  encode(message: EthCallWithOverrideRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.args.length !== 0) {
      writer.uint32(10).bytes(message.args);
    }
    if (!message.gasCap.isZero()) {
      writer.uint32(16).uint64(message.gasCap);
    }
    if (message.overrides !== undefined) {
      StateOverride.encode(message.overrides, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EthCallWithOverrideRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthCallWithOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.args = reader.bytes();
        break;
      case 2:
        message.gasCap = reader.uint64() as Long;
        break;
      case 3:
        message.overrides = StateOverride.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EthCallWithOverrideRequest>): EthCallWithOverrideRequest {
    const message = createBaseEthCallWithOverrideRequest();
    message.args = object.args ?? new Uint8Array();
    message.gasCap = object.gasCap !== undefined && object.gasCap !== null ? Long.fromValue(object.gasCap) : Long.UZERO;
    message.overrides = object.overrides !== undefined && object.overrides !== null ? StateOverride.fromPartial(object.overrides) : undefined;
    return message;
  },
  fromAmino(object: EthCallWithOverrideRequestAmino): EthCallWithOverrideRequest {
    const message = createBaseEthCallWithOverrideRequest();
    if (object.args !== undefined && object.args !== null) {
      message.args = bytesFromBase64(object.args);
    }
    if (object.gas_cap !== undefined && object.gas_cap !== null) {
      message.gasCap = Long.fromString(object.gas_cap);
    }
    if (object.overrides !== undefined && object.overrides !== null) {
      message.overrides = StateOverride.fromAmino(object.overrides);
    }
    return message;
  },
  toAmino(message: EthCallWithOverrideRequest): EthCallWithOverrideRequestAmino {
    const obj: any = {};
    obj.args = message.args ? base64FromBytes(message.args) : undefined;
    obj.gas_cap = !message.gasCap.isZero() ? message.gasCap?.toString() : undefined;
    obj.overrides = message.overrides ? StateOverride.toAmino(message.overrides) : undefined;
    return obj;
  },
  fromAminoMsg(object: EthCallWithOverrideRequestAminoMsg): EthCallWithOverrideRequest {
    return EthCallWithOverrideRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EthCallWithOverrideRequestProtoMsg): EthCallWithOverrideRequest {
    return EthCallWithOverrideRequest.decode(message.value);
  },
  toProto(message: EthCallWithOverrideRequest): Uint8Array {
    return EthCallWithOverrideRequest.encode(message).finish();
  },
  toProtoMsg(message: EthCallWithOverrideRequest): EthCallWithOverrideRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.EthCallWithOverrideRequest',
      value: EthCallWithOverrideRequest.encode(message).finish()
    };
  }
};
function createBaseEstimateGasResponse(): EstimateGasResponse {
  return {
    gas: Long.UZERO
  };
}
export const EstimateGasResponse = {
  typeUrl: '/ethermint.evm.v1.EstimateGasResponse',
  encode(message: EstimateGasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gas.isZero()) {
      writer.uint32(8).uint64(message.gas);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateGasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateGasResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.gas = reader.uint64() as Long;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EstimateGasResponse>): EstimateGasResponse {
    const message = createBaseEstimateGasResponse();
    message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
    return message;
  },
  fromAmino(object: EstimateGasResponseAmino): EstimateGasResponse {
    const message = createBaseEstimateGasResponse();
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = Long.fromString(object.gas);
    }
    return message;
  },
  toAmino(message: EstimateGasResponse): EstimateGasResponseAmino {
    const obj: any = {};
    obj.gas = !message.gas.isZero() ? message.gas?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EstimateGasResponseAminoMsg): EstimateGasResponse {
    return EstimateGasResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EstimateGasResponseProtoMsg): EstimateGasResponse {
    return EstimateGasResponse.decode(message.value);
  },
  toProto(message: EstimateGasResponse): Uint8Array {
    return EstimateGasResponse.encode(message).finish();
  },
  toProtoMsg(message: EstimateGasResponse): EstimateGasResponseProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.EstimateGasResponse',
      value: EstimateGasResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTraceTxRequest(): QueryTraceTxRequest {
  return {
    msg: undefined,
    traceConfig: undefined,
    predecessors: [],
    blockNumber: Long.ZERO,
    blockHash: '',
    blockTime: new Date()
  };
}
export const QueryTraceTxRequest = {
  typeUrl: '/ethermint.evm.v1.QueryTraceTxRequest',
  encode(message: QueryTraceTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== undefined) {
      MsgEthereumTx.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.traceConfig !== undefined) {
      TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.predecessors) {
      MsgEthereumTx.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.blockNumber.isZero()) {
      writer.uint32(40).int64(message.blockNumber);
    }
    if (message.blockHash !== '') {
      writer.uint32(50).string(message.blockHash);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.msg = MsgEthereumTx.decode(reader, reader.uint32());
        break;
      case 3:
        message.traceConfig = TraceConfig.decode(reader, reader.uint32());
        break;
      case 4:
        message.predecessors.push(MsgEthereumTx.decode(reader, reader.uint32()));
        break;
      case 5:
        message.blockNumber = reader.int64() as Long;
        break;
      case 6:
        message.blockHash = reader.string();
        break;
      case 7:
        message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTraceTxRequest>): QueryTraceTxRequest {
    const message = createBaseQueryTraceTxRequest();
    message.msg = object.msg !== undefined && object.msg !== null ? MsgEthereumTx.fromPartial(object.msg) : undefined;
    message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? TraceConfig.fromPartial(object.traceConfig) : undefined;
    message.predecessors = object.predecessors?.map(e => MsgEthereumTx.fromPartial(e)) || [];
    message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? Long.fromValue(object.blockNumber) : Long.ZERO;
    message.blockHash = object.blockHash ?? '';
    message.blockTime = object.blockTime ?? undefined;
    return message;
  },
  fromAmino(object: QueryTraceTxRequestAmino): QueryTraceTxRequest {
    const message = createBaseQueryTraceTxRequest();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgEthereumTx.fromAmino(object.msg);
    }
    if (object.trace_config !== undefined && object.trace_config !== null) {
      message.traceConfig = TraceConfig.fromAmino(object.trace_config);
    }
    message.predecessors = object.predecessors?.map(e => MsgEthereumTx.fromAmino(e)) || [];
    if (object.block_number !== undefined && object.block_number !== null) {
      message.blockNumber = Long.fromString(object.block_number);
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.blockHash = object.block_hash;
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = fromTimestamp(Timestamp.fromAmino(object.block_time));
    }
    return message;
  },
  toAmino(message: QueryTraceTxRequest): QueryTraceTxRequestAmino {
    const obj: any = {};
    obj.msg = message.msg ? MsgEthereumTx.toAmino(message.msg) : undefined;
    obj.trace_config = message.traceConfig ? TraceConfig.toAmino(message.traceConfig) : undefined;
    if (message.predecessors) {
      obj.predecessors = message.predecessors.map(e => e ? MsgEthereumTx.toAmino(e) : undefined);
    } else {
      obj.predecessors = message.predecessors;
    }
    obj.block_number = !message.blockNumber.isZero() ? message.blockNumber?.toString() : undefined;
    obj.block_hash = message.blockHash === '' ? undefined : message.blockHash;
    obj.block_time = message.blockTime ? Timestamp.toAmino(toTimestamp(message.blockTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTraceTxRequestAminoMsg): QueryTraceTxRequest {
    return QueryTraceTxRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraceTxRequestProtoMsg): QueryTraceTxRequest {
    return QueryTraceTxRequest.decode(message.value);
  },
  toProto(message: QueryTraceTxRequest): Uint8Array {
    return QueryTraceTxRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraceTxRequest): QueryTraceTxRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryTraceTxRequest',
      value: QueryTraceTxRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTraceCallRequest(): QueryTraceCallRequest {
  return {
    args: new Uint8Array(),
    gasCap: Long.UZERO,
    config: undefined
  };
}
export const QueryTraceCallRequest = {
  typeUrl: '/ethermint.evm.v1.QueryTraceCallRequest',
  encode(message: QueryTraceCallRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.args.length !== 0) {
      writer.uint32(10).bytes(message.args);
    }
    if (!message.gasCap.isZero()) {
      writer.uint32(16).uint64(message.gasCap);
    }
    if (message.config !== undefined) {
      TraceCallConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceCallRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceCallRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.args = reader.bytes();
        break;
      case 2:
        message.gasCap = reader.uint64() as Long;
        break;
      case 3:
        message.config = TraceCallConfig.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTraceCallRequest>): QueryTraceCallRequest {
    const message = createBaseQueryTraceCallRequest();
    message.args = object.args ?? new Uint8Array();
    message.gasCap = object.gasCap !== undefined && object.gasCap !== null ? Long.fromValue(object.gasCap) : Long.UZERO;
    message.config = object.config !== undefined && object.config !== null ? TraceCallConfig.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino(object: QueryTraceCallRequestAmino): QueryTraceCallRequest {
    const message = createBaseQueryTraceCallRequest();
    if (object.args !== undefined && object.args !== null) {
      message.args = bytesFromBase64(object.args);
    }
    if (object.gas_cap !== undefined && object.gas_cap !== null) {
      message.gasCap = Long.fromString(object.gas_cap);
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = TraceCallConfig.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: QueryTraceCallRequest): QueryTraceCallRequestAmino {
    const obj: any = {};
    obj.args = message.args ? base64FromBytes(message.args) : undefined;
    obj.gas_cap = !message.gasCap.isZero() ? message.gasCap?.toString() : undefined;
    obj.config = message.config ? TraceCallConfig.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTraceCallRequestAminoMsg): QueryTraceCallRequest {
    return QueryTraceCallRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraceCallRequestProtoMsg): QueryTraceCallRequest {
    return QueryTraceCallRequest.decode(message.value);
  },
  toProto(message: QueryTraceCallRequest): Uint8Array {
    return QueryTraceCallRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraceCallRequest): QueryTraceCallRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryTraceCallRequest',
      value: QueryTraceCallRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTraceTxResponse(): QueryTraceTxResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryTraceTxResponse = {
  typeUrl: '/ethermint.evm.v1.QueryTraceTxResponse',
  encode(message: QueryTraceTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.data = reader.bytes();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTraceTxResponse>): QueryTraceTxResponse {
    const message = createBaseQueryTraceTxResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryTraceTxResponseAmino): QueryTraceTxResponse {
    const message = createBaseQueryTraceTxResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryTraceTxResponse): QueryTraceTxResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTraceTxResponseAminoMsg): QueryTraceTxResponse {
    return QueryTraceTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraceTxResponseProtoMsg): QueryTraceTxResponse {
    return QueryTraceTxResponse.decode(message.value);
  },
  toProto(message: QueryTraceTxResponse): Uint8Array {
    return QueryTraceTxResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraceTxResponse): QueryTraceTxResponseProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryTraceTxResponse',
      value: QueryTraceTxResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTraceBlockRequest(): QueryTraceBlockRequest {
  return {
    txs: [],
    traceConfig: undefined,
    blockNumber: Long.ZERO,
    blockHash: '',
    blockTime: new Date()
  };
}
export const QueryTraceBlockRequest = {
  typeUrl: '/ethermint.evm.v1.QueryTraceBlockRequest',
  encode(message: QueryTraceBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      MsgEthereumTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.traceConfig !== undefined) {
      TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
    }
    if (!message.blockNumber.isZero()) {
      writer.uint32(40).int64(message.blockNumber);
    }
    if (message.blockHash !== '') {
      writer.uint32(50).string(message.blockHash);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.txs.push(MsgEthereumTx.decode(reader, reader.uint32()));
        break;
      case 3:
        message.traceConfig = TraceConfig.decode(reader, reader.uint32());
        break;
      case 5:
        message.blockNumber = reader.int64() as Long;
        break;
      case 6:
        message.blockHash = reader.string();
        break;
      case 7:
        message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTraceBlockRequest>): QueryTraceBlockRequest {
    const message = createBaseQueryTraceBlockRequest();
    message.txs = object.txs?.map(e => MsgEthereumTx.fromPartial(e)) || [];
    message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? TraceConfig.fromPartial(object.traceConfig) : undefined;
    message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? Long.fromValue(object.blockNumber) : Long.ZERO;
    message.blockHash = object.blockHash ?? '';
    message.blockTime = object.blockTime ?? undefined;
    return message;
  },
  fromAmino(object: QueryTraceBlockRequestAmino): QueryTraceBlockRequest {
    const message = createBaseQueryTraceBlockRequest();
    message.txs = object.txs?.map(e => MsgEthereumTx.fromAmino(e)) || [];
    if (object.trace_config !== undefined && object.trace_config !== null) {
      message.traceConfig = TraceConfig.fromAmino(object.trace_config);
    }
    if (object.block_number !== undefined && object.block_number !== null) {
      message.blockNumber = Long.fromString(object.block_number);
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.blockHash = object.block_hash;
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = fromTimestamp(Timestamp.fromAmino(object.block_time));
    }
    return message;
  },
  toAmino(message: QueryTraceBlockRequest): QueryTraceBlockRequestAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? MsgEthereumTx.toAmino(e) : undefined);
    } else {
      obj.txs = message.txs;
    }
    obj.trace_config = message.traceConfig ? TraceConfig.toAmino(message.traceConfig) : undefined;
    obj.block_number = !message.blockNumber.isZero() ? message.blockNumber?.toString() : undefined;
    obj.block_hash = message.blockHash === '' ? undefined : message.blockHash;
    obj.block_time = message.blockTime ? Timestamp.toAmino(toTimestamp(message.blockTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTraceBlockRequestAminoMsg): QueryTraceBlockRequest {
    return QueryTraceBlockRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraceBlockRequestProtoMsg): QueryTraceBlockRequest {
    return QueryTraceBlockRequest.decode(message.value);
  },
  toProto(message: QueryTraceBlockRequest): Uint8Array {
    return QueryTraceBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTraceBlockRequest): QueryTraceBlockRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryTraceBlockRequest',
      value: QueryTraceBlockRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTraceBlockResponse(): QueryTraceBlockResponse {
  return {
    data: new Uint8Array()
  };
}
export const QueryTraceBlockResponse = {
  typeUrl: '/ethermint.evm.v1.QueryTraceBlockResponse',
  encode(message: QueryTraceBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.data = reader.bytes();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTraceBlockResponse>): QueryTraceBlockResponse {
    const message = createBaseQueryTraceBlockResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryTraceBlockResponseAmino): QueryTraceBlockResponse {
    const message = createBaseQueryTraceBlockResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryTraceBlockResponse): QueryTraceBlockResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTraceBlockResponseAminoMsg): QueryTraceBlockResponse {
    return QueryTraceBlockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTraceBlockResponseProtoMsg): QueryTraceBlockResponse {
    return QueryTraceBlockResponse.decode(message.value);
  },
  toProto(message: QueryTraceBlockResponse): Uint8Array {
    return QueryTraceBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTraceBlockResponse): QueryTraceBlockResponseProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryTraceBlockResponse',
      value: QueryTraceBlockResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBaseFeeRequest(): QueryBaseFeeRequest {
  return {};
}
export const QueryBaseFeeRequest = {
  typeUrl: '/ethermint.evm.v1.QueryBaseFeeRequest',
  encode(_: QueryBaseFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseFeeRequest();
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
  fromPartial(_: Partial<QueryBaseFeeRequest>): QueryBaseFeeRequest {
    const message = createBaseQueryBaseFeeRequest();
    return message;
  },
  fromAmino(_: QueryBaseFeeRequestAmino): QueryBaseFeeRequest {
    const message = createBaseQueryBaseFeeRequest();
    return message;
  },
  toAmino(_: QueryBaseFeeRequest): QueryBaseFeeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBaseFeeRequestAminoMsg): QueryBaseFeeRequest {
    return QueryBaseFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBaseFeeRequestProtoMsg): QueryBaseFeeRequest {
    return QueryBaseFeeRequest.decode(message.value);
  },
  toProto(message: QueryBaseFeeRequest): Uint8Array {
    return QueryBaseFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBaseFeeRequest): QueryBaseFeeRequestProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryBaseFeeRequest',
      value: QueryBaseFeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBaseFeeResponse(): QueryBaseFeeResponse {
  return {
    baseFee: ''
  };
}
export const QueryBaseFeeResponse = {
  typeUrl: '/ethermint.evm.v1.QueryBaseFeeResponse',
  encode(message: QueryBaseFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseFee !== '') {
      writer.uint32(10).string(message.baseFee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.baseFee = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBaseFeeResponse>): QueryBaseFeeResponse {
    const message = createBaseQueryBaseFeeResponse();
    message.baseFee = object.baseFee ?? '';
    return message;
  },
  fromAmino(object: QueryBaseFeeResponseAmino): QueryBaseFeeResponse {
    const message = createBaseQueryBaseFeeResponse();
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.baseFee = object.base_fee;
    }
    return message;
  },
  toAmino(message: QueryBaseFeeResponse): QueryBaseFeeResponseAmino {
    const obj: any = {};
    obj.base_fee = message.baseFee === '' ? undefined : message.baseFee;
    return obj;
  },
  fromAminoMsg(object: QueryBaseFeeResponseAminoMsg): QueryBaseFeeResponse {
    return QueryBaseFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBaseFeeResponseProtoMsg): QueryBaseFeeResponse {
    return QueryBaseFeeResponse.decode(message.value);
  },
  toProto(message: QueryBaseFeeResponse): Uint8Array {
    return QueryBaseFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBaseFeeResponse): QueryBaseFeeResponseProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.QueryBaseFeeResponse',
      value: QueryBaseFeeResponse.encode(message).finish()
    };
  }
};
function createBaseOverrideAccount_StateEntry(): OverrideAccount_StateEntry {
  return {
    key: '',
    value: ''
  };
}
export const OverrideAccount_StateEntry = {
  encode(message: OverrideAccount_StateEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OverrideAccount_StateEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOverrideAccount_StateEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.key = reader.string();
        break;
      case 2:
        message.value = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OverrideAccount_StateEntry>): OverrideAccount_StateEntry {
    const message = createBaseOverrideAccount_StateEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
  fromAmino(object: OverrideAccount_StateEntryAmino): OverrideAccount_StateEntry {
    const message = createBaseOverrideAccount_StateEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: OverrideAccount_StateEntry): OverrideAccount_StateEntryAmino {
    const obj: any = {};
    obj.key = message.key === '' ? undefined : message.key;
    obj.value = message.value === '' ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: OverrideAccount_StateEntryAminoMsg): OverrideAccount_StateEntry {
    return OverrideAccount_StateEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: OverrideAccount_StateEntryProtoMsg): OverrideAccount_StateEntry {
    return OverrideAccount_StateEntry.decode(message.value);
  },
  toProto(message: OverrideAccount_StateEntry): Uint8Array {
    return OverrideAccount_StateEntry.encode(message).finish();
  }
};
function createBaseOverrideAccount_StateDiffEntry(): OverrideAccount_StateDiffEntry {
  return {
    key: '',
    value: ''
  };
}
export const OverrideAccount_StateDiffEntry = {
  encode(message: OverrideAccount_StateDiffEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OverrideAccount_StateDiffEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOverrideAccount_StateDiffEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.key = reader.string();
        break;
      case 2:
        message.value = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OverrideAccount_StateDiffEntry>): OverrideAccount_StateDiffEntry {
    const message = createBaseOverrideAccount_StateDiffEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
  fromAmino(object: OverrideAccount_StateDiffEntryAmino): OverrideAccount_StateDiffEntry {
    const message = createBaseOverrideAccount_StateDiffEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: OverrideAccount_StateDiffEntry): OverrideAccount_StateDiffEntryAmino {
    const obj: any = {};
    obj.key = message.key === '' ? undefined : message.key;
    obj.value = message.value === '' ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: OverrideAccount_StateDiffEntryAminoMsg): OverrideAccount_StateDiffEntry {
    return OverrideAccount_StateDiffEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: OverrideAccount_StateDiffEntryProtoMsg): OverrideAccount_StateDiffEntry {
    return OverrideAccount_StateDiffEntry.decode(message.value);
  },
  toProto(message: OverrideAccount_StateDiffEntry): Uint8Array {
    return OverrideAccount_StateDiffEntry.encode(message).finish();
  }
};
function createBaseOverrideAccount(): OverrideAccount {
  return {
    nonce: Long.UZERO,
    code: new Uint8Array(),
    balance: '',
    state: {},
    stateDiff: {}
  };
}
export const OverrideAccount = {
  typeUrl: '/ethermint.evm.v1.OverrideAccount',
  encode(message: OverrideAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.code.length !== 0) {
      writer.uint32(18).bytes(message.code);
    }
    if (message.balance !== '') {
      writer.uint32(26).string(message.balance);
    }
    Object.entries(message.state).forEach(([key, value]) => {
      OverrideAccount_StateEntry.encode({
        key: key as any,
        value
      }, writer.uint32(34).fork()).ldelim();
    });
    Object.entries(message.stateDiff).forEach(([key, value]) => {
      OverrideAccount_StateDiffEntry.encode({
        key: key as any,
        value
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OverrideAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOverrideAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nonce = reader.uint64() as Long;
        break;
      case 2:
        message.code = reader.bytes();
        break;
      case 3:
        message.balance = reader.string();
        break;
      case 4:
        const entry4 = OverrideAccount_StateEntry.decode(reader, reader.uint32());
        if (entry4.value !== undefined) {
          message.state[entry4.key] = entry4.value;
        }
        break;
      case 5:
        const entry5 = OverrideAccount_StateDiffEntry.decode(reader, reader.uint32());
        if (entry5.value !== undefined) {
          message.stateDiff[entry5.key] = entry5.value;
        }
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OverrideAccount>): OverrideAccount {
    const message = createBaseOverrideAccount();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.code = object.code ?? new Uint8Array();
    message.balance = object.balance ?? '';
    message.state = Object.entries(object.state ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.stateDiff = Object.entries(object.stateDiff ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: OverrideAccountAmino): OverrideAccount {
    const message = createBaseOverrideAccount();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Long.fromString(object.nonce);
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = bytesFromBase64(object.code);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    message.state = Object.entries(object.state ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.stateDiff = Object.entries(object.state_diff ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: OverrideAccount): OverrideAccountAmino {
    const obj: any = {};
    obj.nonce = !message.nonce.isZero() ? message.nonce?.toString() : undefined;
    obj.code = message.code ? base64FromBytes(message.code) : undefined;
    obj.balance = message.balance === '' ? undefined : message.balance;
    obj.state = {};
    if (message.state) {
      Object.entries(message.state).forEach(([k, v]) => {
        obj.state[k] = v;
      });
    }
    obj.state_diff = {};
    if (message.stateDiff) {
      Object.entries(message.stateDiff).forEach(([k, v]) => {
        obj.state_diff[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: OverrideAccountAminoMsg): OverrideAccount {
    return OverrideAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: OverrideAccountProtoMsg): OverrideAccount {
    return OverrideAccount.decode(message.value);
  },
  toProto(message: OverrideAccount): Uint8Array {
    return OverrideAccount.encode(message).finish();
  },
  toProtoMsg(message: OverrideAccount): OverrideAccountProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.OverrideAccount',
      value: OverrideAccount.encode(message).finish()
    };
  }
};
function createBaseStateOverride_AccountsEntry(): StateOverride_AccountsEntry {
  return {
    key: '',
    value: undefined
  };
}
export const StateOverride_AccountsEntry = {
  encode(message: StateOverride_AccountsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      OverrideAccount.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StateOverride_AccountsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateOverride_AccountsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.key = reader.string();
        break;
      case 2:
        message.value = OverrideAccount.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StateOverride_AccountsEntry>): StateOverride_AccountsEntry {
    const message = createBaseStateOverride_AccountsEntry();
    message.key = object.key ?? '';
    message.value = object.value !== undefined && object.value !== null ? OverrideAccount.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: StateOverride_AccountsEntryAmino): StateOverride_AccountsEntry {
    const message = createBaseStateOverride_AccountsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = OverrideAccount.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: StateOverride_AccountsEntry): StateOverride_AccountsEntryAmino {
    const obj: any = {};
    obj.key = message.key === '' ? undefined : message.key;
    obj.value = message.value ? OverrideAccount.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: StateOverride_AccountsEntryAminoMsg): StateOverride_AccountsEntry {
    return StateOverride_AccountsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: StateOverride_AccountsEntryProtoMsg): StateOverride_AccountsEntry {
    return StateOverride_AccountsEntry.decode(message.value);
  },
  toProto(message: StateOverride_AccountsEntry): Uint8Array {
    return StateOverride_AccountsEntry.encode(message).finish();
  }
};
function createBaseStateOverride(): StateOverride {
  return {
    accounts: {}
  };
}
export const StateOverride = {
  typeUrl: '/ethermint.evm.v1.StateOverride',
  encode(message: StateOverride, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.accounts).forEach(([key, value]) => {
      StateOverride_AccountsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StateOverride {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateOverride();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        const entry1 = StateOverride_AccountsEntry.decode(reader, reader.uint32());
        if (entry1.value !== undefined) {
          message.accounts[entry1.key] = entry1.value;
        }
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StateOverride>): StateOverride {
    const message = createBaseStateOverride();
    message.accounts = Object.entries(object.accounts ?? {}).reduce<{
      [key: string]: OverrideAccount;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = OverrideAccount.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: StateOverrideAmino): StateOverride {
    const message = createBaseStateOverride();
    message.accounts = Object.entries(object.accounts ?? {}).reduce<{
      [key: string]: OverrideAccount;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = OverrideAccount.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: StateOverride): StateOverrideAmino {
    const obj: any = {};
    obj.accounts = {};
    if (message.accounts) {
      Object.entries(message.accounts).forEach(([k, v]) => {
        obj.accounts[k] = OverrideAccount.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: StateOverrideAminoMsg): StateOverride {
    return StateOverride.fromAmino(object.value);
  },
  fromProtoMsg(message: StateOverrideProtoMsg): StateOverride {
    return StateOverride.decode(message.value);
  },
  toProto(message: StateOverride): Uint8Array {
    return StateOverride.encode(message).finish();
  },
  toProtoMsg(message: StateOverride): StateOverrideProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.StateOverride',
      value: StateOverride.encode(message).finish()
    };
  }
};
function createBaseBlockOverrides(): BlockOverrides {
  return {
    number: '',
    defficulty: '',
    time: Long.UZERO,
    gasLimit: Long.UZERO,
    coinbase: '',
    random: '',
    baseFee: '',
    blobBaseFee: ''
  };
}
export const BlockOverrides = {
  typeUrl: '/ethermint.evm.v1.BlockOverrides',
  encode(message: BlockOverrides, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== '') {
      writer.uint32(10).string(message.number);
    }
    if (message.defficulty !== '') {
      writer.uint32(18).string(message.defficulty);
    }
    if (!message.time.isZero()) {
      writer.uint32(24).uint64(message.time);
    }
    if (!message.gasLimit.isZero()) {
      writer.uint32(32).uint64(message.gasLimit);
    }
    if (message.coinbase !== '') {
      writer.uint32(42).string(message.coinbase);
    }
    if (message.random !== '') {
      writer.uint32(50).string(message.random);
    }
    if (message.baseFee !== '') {
      writer.uint32(58).string(message.baseFee);
    }
    if (message.blobBaseFee !== '') {
      writer.uint32(66).string(message.blobBaseFee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockOverrides {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockOverrides();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.number = reader.string();
        break;
      case 2:
        message.defficulty = reader.string();
        break;
      case 3:
        message.time = reader.uint64() as Long;
        break;
      case 4:
        message.gasLimit = reader.uint64() as Long;
        break;
      case 5:
        message.coinbase = reader.string();
        break;
      case 6:
        message.random = reader.string();
        break;
      case 7:
        message.baseFee = reader.string();
        break;
      case 8:
        message.blobBaseFee = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BlockOverrides>): BlockOverrides {
    const message = createBaseBlockOverrides();
    message.number = object.number ?? '';
    message.defficulty = object.defficulty ?? '';
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.UZERO;
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? Long.fromValue(object.gasLimit) : Long.UZERO;
    message.coinbase = object.coinbase ?? '';
    message.random = object.random ?? '';
    message.baseFee = object.baseFee ?? '';
    message.blobBaseFee = object.blobBaseFee ?? '';
    return message;
  },
  fromAmino(object: BlockOverridesAmino): BlockOverrides {
    const message = createBaseBlockOverrides();
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    if (object.defficulty !== undefined && object.defficulty !== null) {
      message.defficulty = object.defficulty;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Long.fromString(object.time);
    }
    if (object.gas_limit !== undefined && object.gas_limit !== null) {
      message.gasLimit = Long.fromString(object.gas_limit);
    }
    if (object.coinbase !== undefined && object.coinbase !== null) {
      message.coinbase = object.coinbase;
    }
    if (object.random !== undefined && object.random !== null) {
      message.random = object.random;
    }
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.baseFee = object.base_fee;
    }
    if (object.blob_base_fee !== undefined && object.blob_base_fee !== null) {
      message.blobBaseFee = object.blob_base_fee;
    }
    return message;
  },
  toAmino(message: BlockOverrides): BlockOverridesAmino {
    const obj: any = {};
    obj.number = message.number === '' ? undefined : message.number;
    obj.defficulty = message.defficulty === '' ? undefined : message.defficulty;
    obj.time = !message.time.isZero() ? message.time?.toString() : undefined;
    obj.gas_limit = !message.gasLimit.isZero() ? message.gasLimit?.toString() : undefined;
    obj.coinbase = message.coinbase === '' ? undefined : message.coinbase;
    obj.random = message.random === '' ? undefined : message.random;
    obj.base_fee = message.baseFee === '' ? undefined : message.baseFee;
    obj.blob_base_fee = message.blobBaseFee === '' ? undefined : message.blobBaseFee;
    return obj;
  },
  fromAminoMsg(object: BlockOverridesAminoMsg): BlockOverrides {
    return BlockOverrides.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockOverridesProtoMsg): BlockOverrides {
    return BlockOverrides.decode(message.value);
  },
  toProto(message: BlockOverrides): Uint8Array {
    return BlockOverrides.encode(message).finish();
  },
  toProtoMsg(message: BlockOverrides): BlockOverridesProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.BlockOverrides',
      value: BlockOverrides.encode(message).finish()
    };
  }
};
function createBaseTraceCallConfig(): TraceCallConfig {
  return {
    traceConfig: undefined,
    stateOverrides: undefined,
    blockOverrieds: undefined
  };
}
export const TraceCallConfig = {
  typeUrl: '/ethermint.evm.v1.TraceCallConfig',
  encode(message: TraceCallConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traceConfig !== undefined) {
      TraceConfig.encode(message.traceConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.stateOverrides !== undefined) {
      StateOverride.encode(message.stateOverrides, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockOverrieds !== undefined) {
      BlockOverrides.encode(message.blockOverrieds, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TraceCallConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceCallConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.traceConfig = TraceConfig.decode(reader, reader.uint32());
        break;
      case 2:
        message.stateOverrides = StateOverride.decode(reader, reader.uint32());
        break;
      case 3:
        message.blockOverrieds = BlockOverrides.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TraceCallConfig>): TraceCallConfig {
    const message = createBaseTraceCallConfig();
    message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? TraceConfig.fromPartial(object.traceConfig) : undefined;
    message.stateOverrides = object.stateOverrides !== undefined && object.stateOverrides !== null ? StateOverride.fromPartial(object.stateOverrides) : undefined;
    message.blockOverrieds = object.blockOverrieds !== undefined && object.blockOverrieds !== null ? BlockOverrides.fromPartial(object.blockOverrieds) : undefined;
    return message;
  },
  fromAmino(object: TraceCallConfigAmino): TraceCallConfig {
    const message = createBaseTraceCallConfig();
    if (object.trace_config !== undefined && object.trace_config !== null) {
      message.traceConfig = TraceConfig.fromAmino(object.trace_config);
    }
    if (object.state_overrides !== undefined && object.state_overrides !== null) {
      message.stateOverrides = StateOverride.fromAmino(object.state_overrides);
    }
    if (object.block_overrieds !== undefined && object.block_overrieds !== null) {
      message.blockOverrieds = BlockOverrides.fromAmino(object.block_overrieds);
    }
    return message;
  },
  toAmino(message: TraceCallConfig): TraceCallConfigAmino {
    const obj: any = {};
    obj.trace_config = message.traceConfig ? TraceConfig.toAmino(message.traceConfig) : undefined;
    obj.state_overrides = message.stateOverrides ? StateOverride.toAmino(message.stateOverrides) : undefined;
    obj.block_overrieds = message.blockOverrieds ? BlockOverrides.toAmino(message.blockOverrieds) : undefined;
    return obj;
  },
  fromAminoMsg(object: TraceCallConfigAminoMsg): TraceCallConfig {
    return TraceCallConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: TraceCallConfigProtoMsg): TraceCallConfig {
    return TraceCallConfig.decode(message.value);
  },
  toProto(message: TraceCallConfig): Uint8Array {
    return TraceCallConfig.encode(message).finish();
  },
  toProtoMsg(message: TraceCallConfig): TraceCallConfigProtoMsg {
    return {
      typeUrl: '/ethermint.evm.v1.TraceCallConfig',
      value: TraceCallConfig.encode(message).finish()
    };
  }
};