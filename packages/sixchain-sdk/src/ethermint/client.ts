//@ts-nocheck
import { GeneratedType, OfflineSigner,Registry } from '@cosmjs/proto-signing';
import { AminoTypes, defaultRegistryTypes, SigningStargateClient } from '@cosmjs/stargate';
import { HttpEndpoint } from '@cosmjs/tendermint-rpc';

import * as ethermintEvmV1TxAmino from './evm/v1/tx.amino';
import * as ethermintEvmV1TxRegistry from './evm/v1/tx.registry';
export const ethermintAminoConverters = {
  ...ethermintEvmV1TxAmino.AminoConverter
};
export const ethermintProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...ethermintEvmV1TxRegistry.registry];
export const getSigningEthermintClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...ethermintProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...ethermintAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningEthermintClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningEthermintClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};