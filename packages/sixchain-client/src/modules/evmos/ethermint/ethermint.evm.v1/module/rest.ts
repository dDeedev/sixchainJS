/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Evmv1Params {
  /**
   * evm denom represents the token denomination used to run the EVM state
   * transitions.
   */
  evm_denom?: string;
  enable_create?: boolean;
  enable_call?: boolean;
  extra_eips?: string[];

  /**
   * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
   * instead of *big.Int.
   */
  chain_config?: V1ChainConfig;

  /**
   * Allow unprotected transactions defines if replay-protected (i.e non EIP155
   * signed) transactions can be executed on the state machine.
   */
  allow_unprotected_txs?: boolean;
}

/**
* `Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }
*/
export interface ProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   *
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   *
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   *
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface V1BlockOverrides {
  number?: string;
  defficulty?: string;

  /** @format uint64 */
  time?: string;

  /** @format uint64 */
  gas_limit?: string;
  coinbase?: string;
  random?: string;
  base_fee?: string;
  blob_base_fee?: string;
}

/**
* ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
instead of *big.Int.
*/
export interface V1ChainConfig {
  homestead_block?: string;
  dao_fork_block?: string;
  dao_fork_support?: boolean;
  eip150_block?: string;
  eip150_hash?: string;
  eip155_block?: string;
  eip158_block?: string;
  byzantium_block?: string;
  constantinople_block?: string;
  petersburg_block?: string;
  istanbul_block?: string;
  muir_glacier_block?: string;
  berlin_block?: string;
  london_block?: string;
  arrow_glacier_block?: string;
  merge_fork_block?: string;
}

export interface V1EstimateGasResponse {
  /** @format uint64 */
  gas?: string;
}

/**
* Log represents an protobuf compatible Ethereum Log that defines a contract
log event. These events are generated by the LOG opcode and stored/indexed by
the node.

Consensus fields:
*/
export interface V1Log {
  address?: string;

  /** list of topics provided by the contract. */
  topics?: string[];

  /** @format byte */
  data?: string;

  /** @format uint64 */
  block_number?: string;
  tx_hash?: string;

  /** @format uint64 */
  tx_index?: string;
  block_hash?: string;

  /** @format uint64 */
  index?: string;

  /**
   * The Removed field is true if this log was reverted due to a chain
   * reorganisation. You must pay attention to this field if you receive logs
   * through a filter query.
   */
  removed?: boolean;
}

/**
 * MsgEthereumTx encapsulates an Ethereum transaction as an SDK message.
 */
export interface V1MsgEthereumTx {
  /** caches */
  data?: ProtobufAny;

  /** @format double */
  size?: number;
  hash?: string;
  from?: string;
}

/**
 * MsgEthereumTxResponse defines the Msg/EthereumTx response type.
 */
export interface V1MsgEthereumTxResponse {
  hash?: string;

  /**
   * logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  logs?: V1Log[];

  /** @format byte */
  ret?: string;
  vm_error?: string;

  /** @format uint64 */
  gas_used?: string;
}

export interface V1OverrideAccount {
  /** @format uint64 */
  nonce?: string;

  /** @format byte */
  code?: string;
  balance?: string;
  state?: Record<string, string>;
  state_diff?: Record<string, string>;
}

/**
 * QueryAccountResponse is the response type for the Query/Account RPC method.
 */
export interface V1QueryAccountResponse {
  /** balance is the balance of the EVM denomination. */
  balance?: string;

  /** code hash is the hex-formatted code bytes from the EOA. */
  code_hash?: string;

  /**
   * nonce is the account's sequence number.
   * @format uint64
   */
  nonce?: string;
}

/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method.
 */
export interface V1QueryBalanceResponse {
  /** balance is the balance of the EVM denomination. */
  balance?: string;
}

/**
 * BaseFeeResponse returns the EIP1559 base fee.
 */
export interface V1QueryBaseFeeResponse {
  base_fee?: string;
}

/**
* QueryCodeResponse is the response type for the Query/Code RPC
method.
*/
export interface V1QueryCodeResponse {
  /**
   * code represents the code bytes from an ethereum address.
   * @format byte
   */
  code?: string;
}

/**
* QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
RPC method.
*/
export interface V1QueryCosmosAccountResponse {
  /** cosmos_address is the cosmos address of the account. */
  cosmos_address?: string;

  /**
   * sequence is the account's sequence number.
   * @format uint64
   */
  sequence?: string;

  /** @format uint64 */
  account_number?: string;
}

/**
 * QueryParamsResponse defines the response type for querying x/evm parameters.
 */
export interface V1QueryParamsResponse {
  /** params define the evm module parameters. */
  params?: Evmv1Params;
}

/**
* QueryStorageResponse is the response type for the Query/Storage RPC
method.
*/
export interface V1QueryStorageResponse {
  /** key defines the storage state value hash associated with the given key. */
  value?: string;
}

export interface V1QueryTraceBlockResponse {
  /** @format byte */
  data?: string;
}

export interface V1QueryTraceTxResponse {
  /** @format byte */
  data?: string;
}

/**
* QueryValidatorAccountResponse is the response type for the
Query/ValidatorAccount RPC method.
*/
export interface V1QueryValidatorAccountResponse {
  /** account_address is the cosmos address of the account in bech32 format. */
  account_address?: string;

  /**
   * sequence is the account's sequence number.
   * @format uint64
   */
  sequence?: string;

  /** @format uint64 */
  account_number?: string;
}

/**
 * StateOverride is a map of addresses to OverrideAccount.
 */
export interface V1StateOverride {
  "accounts[string][string][string]"?: Record<string, V1OverrideAccount>;
}

export interface V1TraceCallConfig {
  /** TraceConfig holds extra parameters to trace functions. */
  trace_config?: V1TraceConfig;

  /** StateOverride is a map of addresses to OverrideAccount. */
  state_overrides?: V1StateOverride;
  block_overrieds?: V1BlockOverrides;
}

/**
 * TraceConfig holds extra parameters to trace functions.
 */
export interface V1TraceConfig {
  tracer?: string;
  timeout?: string;

  /** @format uint64 */
  reexec?: string;
  disable_stack?: boolean;
  disable_storage?: boolean;
  debug?: boolean;

  /** @format int32 */
  limit?: number;

  /**
   * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
   * instead of *big.Int.
   */
  overrides?: V1ChainConfig;
  enable_memory?: boolean;
  enable_return_data?: boolean;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title ethermint/evm/v1/evm.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAccount
   * @summary Account queries an Ethereum account.
   * @request GET:/ethermint/evm/v1/account/{address}
   */
  queryAccount = (address: string, params: RequestParams = {}) =>
    this.request<V1QueryAccountResponse, RpcStatus>({
      path: `/ethermint/evm/v1/account/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Query
 * @name QueryBalance
 * @summary Balance queries the balance of a the EVM denomination for a single
EthAccount.
 * @request GET:/ethermint/evm/v1/balances/{address}
 */
  queryBalance = (address: string, params: RequestParams = {}) =>
    this.request<V1QueryBalanceResponse, RpcStatus>({
      path: `/ethermint/evm/v1/balances/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Query
 * @name QueryBaseFee
 * @summary BaseFee queries the base fee of the parent block of the current block,
it's similar to feemarket module's method, but also checks london hardfork status.
 * @request GET:/ethermint/evm/v1/base_fee
 */
  queryBaseFee = (params: RequestParams = {}) =>
    this.request<V1QueryBaseFeeResponse, RpcStatus>({
      path: `/ethermint/evm/v1/base_fee`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCode
   * @summary Code queries the balance of all coins for a single account.
   * @request GET:/ethermint/evm/v1/codes/{address}
   */
  queryCode = (address: string, params: RequestParams = {}) =>
    this.request<V1QueryCodeResponse, RpcStatus>({
      path: `/ethermint/evm/v1/codes/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCosmosAccount
   * @summary CosmosAccount queries an Ethereum account's Cosmos Address.
   * @request GET:/ethermint/evm/v1/cosmos_account/{address}
   */
  queryCosmosAccount = (address: string, params: RequestParams = {}) =>
    this.request<V1QueryCosmosAccountResponse, RpcStatus>({
      path: `/ethermint/evm/v1/cosmos_account/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEstimateGas
   * @summary EstimateGas implements the `eth_estimateGas` rpc api
   * @request GET:/ethermint/evm/v1/estimate_gas
   */
  queryEstimateGas = (query?: { args?: string; gas_cap?: string }, params: RequestParams = {}) =>
    this.request<V1EstimateGasResponse, RpcStatus>({
      path: `/ethermint/evm/v1/estimate_gas`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEstimateGasWithOverride
   * @request GET:/ethermint/evm/v1/estimate_gas_overides
   */
  queryEstimateGasWithOverride = (
    query?: { args?: string; gas_cap?: string; "overrides.accounts[string][string]"?: any },
    params: RequestParams = {},
  ) =>
    this.request<V1EstimateGasResponse, RpcStatus>({
      path: `/ethermint/evm/v1/estimate_gas_overides`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEthCall
   * @summary EthCall implements the `eth_call` rpc api
   * @request GET:/ethermint/evm/v1/eth_call
   */
  queryEthCall = (query?: { args?: string; gas_cap?: string }, params: RequestParams = {}) =>
    this.request<V1MsgEthereumTxResponse, RpcStatus>({
      path: `/ethermint/evm/v1/eth_call`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEthCallWithOverride
   * @summary EthCall implements the `eth_call` rpc api
   * @request GET:/ethermint/evm/v1/eth_call_overides
   */
  queryEthCallWithOverride = (
    query?: { args?: string; gas_cap?: string; "overrides.accounts[string]"?: any },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgEthereumTxResponse, RpcStatus>({
      path: `/ethermint/evm/v1/eth_call_overides`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgEthereumTx
   * @summary EthereumTx defines a method submitting Ethereum transactions.
   * @request POST:/ethermint/evm/v1/ethereum_tx
   */
  msgEthereumTx = (
    query?: { "data.type_url"?: string; "data.value"?: string; size?: number; hash?: string; from?: string },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgEthereumTxResponse, RpcStatus>({
      path: `/ethermint/evm/v1/ethereum_tx`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Params queries the parameters of x/evm module.
   * @request GET:/ethermint/evm/v1/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<V1QueryParamsResponse, RpcStatus>({
      path: `/ethermint/evm/v1/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryStorage
   * @summary Storage queries the balance of all coins for a single account.
   * @request GET:/ethermint/evm/v1/storage/{address}/{key}
   */
  queryStorage = (address: string, key: string, params: RequestParams = {}) =>
    this.request<V1QueryStorageResponse, RpcStatus>({
      path: `/ethermint/evm/v1/storage/${address}/${key}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTraceBlock
   * @summary TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api
   * @request GET:/ethermint/evm/v1/trace_block
   */
  queryTraceBlock = (
    query?: {
      "trace_config.tracer"?: string;
      "trace_config.timeout"?: string;
      "trace_config.reexec"?: string;
      "trace_config.disable_stack"?: boolean;
      "trace_config.disable_storage"?: boolean;
      "trace_config.debug"?: boolean;
      "trace_config.limit"?: number;
      "trace_config.overrides.homestead_block"?: string;
      "trace_config.overrides.dao_fork_block"?: string;
      "trace_config.overrides.dao_fork_support"?: boolean;
      "trace_config.overrides.eip150_block"?: string;
      "trace_config.overrides.eip150_hash"?: string;
      "trace_config.overrides.eip155_block"?: string;
      "trace_config.overrides.eip158_block"?: string;
      "trace_config.overrides.byzantium_block"?: string;
      "trace_config.overrides.constantinople_block"?: string;
      "trace_config.overrides.petersburg_block"?: string;
      "trace_config.overrides.istanbul_block"?: string;
      "trace_config.overrides.muir_glacier_block"?: string;
      "trace_config.overrides.berlin_block"?: string;
      "trace_config.overrides.london_block"?: string;
      "trace_config.overrides.arrow_glacier_block"?: string;
      "trace_config.overrides.merge_fork_block"?: string;
      "trace_config.enable_memory"?: boolean;
      "trace_config.enable_return_data"?: boolean;
      block_number?: string;
      block_hash?: string;
      block_time?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryTraceBlockResponse, RpcStatus>({
      path: `/ethermint/evm/v1/trace_block`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTraceCall
   * @summary TraceTx implements the `debug_traceTransaction` rpc api
   * @request GET:/ethermint/evm/v1/trace_call
   */
  queryTraceCall = (
    query?: {
      args?: string;
      gas_cap?: string;
      "config.trace_config.tracer"?: string;
      "config.trace_config.timeout"?: string;
      "config.trace_config.reexec"?: string;
      "config.trace_config.disable_stack"?: boolean;
      "config.trace_config.disable_storage"?: boolean;
      "config.trace_config.debug"?: boolean;
      "config.trace_config.limit"?: number;
      "config.trace_config.overrides.homestead_block"?: string;
      "config.trace_config.overrides.dao_fork_block"?: string;
      "config.trace_config.overrides.dao_fork_support"?: boolean;
      "config.trace_config.overrides.eip150_block"?: string;
      "config.trace_config.overrides.eip150_hash"?: string;
      "config.trace_config.overrides.eip155_block"?: string;
      "config.trace_config.overrides.eip158_block"?: string;
      "config.trace_config.overrides.byzantium_block"?: string;
      "config.trace_config.overrides.constantinople_block"?: string;
      "config.trace_config.overrides.petersburg_block"?: string;
      "config.trace_config.overrides.istanbul_block"?: string;
      "config.trace_config.overrides.muir_glacier_block"?: string;
      "config.trace_config.overrides.berlin_block"?: string;
      "config.trace_config.overrides.london_block"?: string;
      "config.trace_config.overrides.arrow_glacier_block"?: string;
      "config.trace_config.overrides.merge_fork_block"?: string;
      "config.trace_config.enable_memory"?: boolean;
      "config.trace_config.enable_return_data"?: boolean;
      "config.state_overrides.accounts[string][string][string]"?: any;
      "config.block_overrieds.number"?: string;
      "config.block_overrieds.defficulty"?: string;
      "config.block_overrieds.time"?: string;
      "config.block_overrieds.gas_limit"?: string;
      "config.block_overrieds.coinbase"?: string;
      "config.block_overrieds.random"?: string;
      "config.block_overrieds.base_fee"?: string;
      "config.block_overrieds.blob_base_fee"?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryTraceTxResponse, RpcStatus>({
      path: `/ethermint/evm/v1/trace_call`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTraceTx
   * @summary TraceTx implements the `debug_traceTransaction` rpc api
   * @request GET:/ethermint/evm/v1/trace_tx
   */
  queryTraceTx = (
    query?: {
      "msg.data.type_url"?: string;
      "msg.data.value"?: string;
      "msg.size"?: number;
      "msg.hash"?: string;
      "msg.from"?: string;
      "trace_config.tracer"?: string;
      "trace_config.timeout"?: string;
      "trace_config.reexec"?: string;
      "trace_config.disable_stack"?: boolean;
      "trace_config.disable_storage"?: boolean;
      "trace_config.debug"?: boolean;
      "trace_config.limit"?: number;
      "trace_config.overrides.homestead_block"?: string;
      "trace_config.overrides.dao_fork_block"?: string;
      "trace_config.overrides.dao_fork_support"?: boolean;
      "trace_config.overrides.eip150_block"?: string;
      "trace_config.overrides.eip150_hash"?: string;
      "trace_config.overrides.eip155_block"?: string;
      "trace_config.overrides.eip158_block"?: string;
      "trace_config.overrides.byzantium_block"?: string;
      "trace_config.overrides.constantinople_block"?: string;
      "trace_config.overrides.petersburg_block"?: string;
      "trace_config.overrides.istanbul_block"?: string;
      "trace_config.overrides.muir_glacier_block"?: string;
      "trace_config.overrides.berlin_block"?: string;
      "trace_config.overrides.london_block"?: string;
      "trace_config.overrides.arrow_glacier_block"?: string;
      "trace_config.overrides.merge_fork_block"?: string;
      "trace_config.enable_memory"?: boolean;
      "trace_config.enable_return_data"?: boolean;
      block_number?: string;
      block_hash?: string;
      block_time?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryTraceTxResponse, RpcStatus>({
      path: `/ethermint/evm/v1/trace_tx`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
 * No description
 * 
 * @tags Query
 * @name QueryValidatorAccount
 * @summary ValidatorAccount queries an Ethereum account's from a validator consensus
Address.
 * @request GET:/ethermint/evm/v1/validator_account/{cons_address}
 */
  queryValidatorAccount = (cons_address: string, params: RequestParams = {}) =>
    this.request<V1QueryValidatorAccountResponse, RpcStatus>({
      path: `/ethermint/evm/v1/validator_account/${cons_address}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
