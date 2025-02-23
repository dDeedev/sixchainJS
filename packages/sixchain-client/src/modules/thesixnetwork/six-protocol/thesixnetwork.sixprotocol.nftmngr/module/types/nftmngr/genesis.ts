/* eslint-disable */
import { Params } from "../nftmngr/params";
import { NFTSchema } from "../nftmngr/nft_schema";
import { NftData } from "../nftmngr/nft_data";
import { ActionByRefId } from "../nftmngr/action_by_ref_id";
import { Organization } from "../nftmngr/organization";
import { NFTSchemaByContract } from "../nftmngr/nft_schema_by_contract";
import { NFTFeeConfig } from "../nftmngr/nft_fee_config";
import { NFTFeeBalance } from "../nftmngr/nft_fee_balance";
import { MetadataCreator } from "../nftmngr/metadata_creator";
import { NftCollection } from "../nftmngr/nft_collection";
import { ActionExecutor } from "../nftmngr/action_executor";
import { SchemaAttribute } from "../nftmngr/schema_attribute";
import { ActionOfSchema } from "../nftmngr/action_of_schema";
import { ExecutorOfSchema } from "../nftmngr/executor_of_schema";
import { VirtualAction } from "../nftmngr/virtual_action";
import {
  VirtualSchema,
  VirtualSchemaProposal,
  ActiveVirtualSchemaProposal,
  InactiveVirtualSchemaProposal,
} from "../nftmngr/virtual_schema";
import { LockSchemaFee } from "../nftmngr/lock_schema_fee";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesixnetwork.sixprotocol.nftmngr";

/** GenesisState defines the nftmngr module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  nFTSchemaList: NFTSchema[];
  nftDataList: NftData[];
  actionByRefIdList: ActionByRefId[];
  organizationList: Organization[];
  nFTSchemaByContractList: NFTSchemaByContract[];
  nft_fee_config: NFTFeeConfig | undefined;
  nFTFeeBalance: NFTFeeBalance | undefined;
  metadataCreatorList: MetadataCreator[];
  nftCollectionList: NftCollection[];
  actionExecutorList: ActionExecutor[];
  schemaAttributeList: SchemaAttribute[];
  actionOfSchemaList: ActionOfSchema[];
  executorOfSchemaList: ExecutorOfSchema[];
  virtualActionList: VirtualAction[];
  virtualSchemaList: VirtualSchema[];
  virtualSchemaProposalList: VirtualSchemaProposal[];
  activeVirtualSchemaProposalList: ActiveVirtualSchemaProposal[];
  inactiveVirtualSchemaProposalList: InactiveVirtualSchemaProposal[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  lockSchemaFeeList: LockSchemaFee[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nFTSchemaList) {
      NFTSchema.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.nftDataList) {
      NftData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.actionByRefIdList) {
      ActionByRefId.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.organizationList) {
      Organization.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.nFTSchemaByContractList) {
      NFTSchemaByContract.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.nft_fee_config !== undefined) {
      NFTFeeConfig.encode(
        message.nft_fee_config,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.nFTFeeBalance !== undefined) {
      NFTFeeBalance.encode(
        message.nFTFeeBalance,
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.metadataCreatorList) {
      MetadataCreator.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.nftCollectionList) {
      NftCollection.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.actionExecutorList) {
      ActionExecutor.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.schemaAttributeList) {
      SchemaAttribute.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.actionOfSchemaList) {
      ActionOfSchema.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.executorOfSchemaList) {
      ExecutorOfSchema.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.virtualActionList) {
      VirtualAction.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.virtualSchemaList) {
      VirtualSchema.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.virtualSchemaProposalList) {
      VirtualSchemaProposal.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.activeVirtualSchemaProposalList) {
      ActiveVirtualSchemaProposal.encode(
        v!,
        writer.uint32(162).fork()
      ).ldelim();
    }
    for (const v of message.inactiveVirtualSchemaProposalList) {
      InactiveVirtualSchemaProposal.encode(
        v!,
        writer.uint32(170).fork()
      ).ldelim();
    }
    for (const v of message.lockSchemaFeeList) {
      LockSchemaFee.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.nFTSchemaList = [];
    message.nftDataList = [];
    message.actionByRefIdList = [];
    message.organizationList = [];
    message.nFTSchemaByContractList = [];
    message.metadataCreatorList = [];
    message.nftCollectionList = [];
    message.actionExecutorList = [];
    message.schemaAttributeList = [];
    message.actionOfSchemaList = [];
    message.executorOfSchemaList = [];
    message.virtualActionList = [];
    message.virtualSchemaList = [];
    message.virtualSchemaProposalList = [];
    message.activeVirtualSchemaProposalList = [];
    message.inactiveVirtualSchemaProposalList = [];
    message.lockSchemaFeeList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nFTSchemaList.push(NFTSchema.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nftDataList.push(NftData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.actionByRefIdList.push(
            ActionByRefId.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.organizationList.push(
            Organization.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.nFTSchemaByContractList.push(
            NFTSchemaByContract.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.nft_fee_config = NFTFeeConfig.decode(reader, reader.uint32());
          break;
        case 9:
          message.nFTFeeBalance = NFTFeeBalance.decode(reader, reader.uint32());
          break;
        case 10:
          message.metadataCreatorList.push(
            MetadataCreator.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.nftCollectionList.push(
            NftCollection.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.actionExecutorList.push(
            ActionExecutor.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.schemaAttributeList.push(
            SchemaAttribute.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.actionOfSchemaList.push(
            ActionOfSchema.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.executorOfSchemaList.push(
            ExecutorOfSchema.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.virtualActionList.push(
            VirtualAction.decode(reader, reader.uint32())
          );
          break;
        case 17:
          message.virtualSchemaList.push(
            VirtualSchema.decode(reader, reader.uint32())
          );
          break;
        case 19:
          message.virtualSchemaProposalList.push(
            VirtualSchemaProposal.decode(reader, reader.uint32())
          );
          break;
        case 20:
          message.activeVirtualSchemaProposalList.push(
            ActiveVirtualSchemaProposal.decode(reader, reader.uint32())
          );
          break;
        case 21:
          message.inactiveVirtualSchemaProposalList.push(
            InactiveVirtualSchemaProposal.decode(reader, reader.uint32())
          );
          break;
        case 22:
          message.lockSchemaFeeList.push(
            LockSchemaFee.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.nFTSchemaList = [];
    message.nftDataList = [];
    message.actionByRefIdList = [];
    message.organizationList = [];
    message.nFTSchemaByContractList = [];
    message.metadataCreatorList = [];
    message.nftCollectionList = [];
    message.actionExecutorList = [];
    message.schemaAttributeList = [];
    message.actionOfSchemaList = [];
    message.executorOfSchemaList = [];
    message.virtualActionList = [];
    message.virtualSchemaList = [];
    message.virtualSchemaProposalList = [];
    message.activeVirtualSchemaProposalList = [];
    message.inactiveVirtualSchemaProposalList = [];
    message.lockSchemaFeeList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.nFTSchemaList !== undefined && object.nFTSchemaList !== null) {
      for (const e of object.nFTSchemaList) {
        message.nFTSchemaList.push(NFTSchema.fromJSON(e));
      }
    }
    if (object.nftDataList !== undefined && object.nftDataList !== null) {
      for (const e of object.nftDataList) {
        message.nftDataList.push(NftData.fromJSON(e));
      }
    }
    if (
      object.actionByRefIdList !== undefined &&
      object.actionByRefIdList !== null
    ) {
      for (const e of object.actionByRefIdList) {
        message.actionByRefIdList.push(ActionByRefId.fromJSON(e));
      }
    }
    if (
      object.organizationList !== undefined &&
      object.organizationList !== null
    ) {
      for (const e of object.organizationList) {
        message.organizationList.push(Organization.fromJSON(e));
      }
    }
    if (
      object.nFTSchemaByContractList !== undefined &&
      object.nFTSchemaByContractList !== null
    ) {
      for (const e of object.nFTSchemaByContractList) {
        message.nFTSchemaByContractList.push(NFTSchemaByContract.fromJSON(e));
      }
    }
    if (object.nft_fee_config !== undefined && object.nft_fee_config !== null) {
      message.nft_fee_config = NFTFeeConfig.fromJSON(object.nft_fee_config);
    } else {
      message.nft_fee_config = undefined;
    }
    if (object.nFTFeeBalance !== undefined && object.nFTFeeBalance !== null) {
      message.nFTFeeBalance = NFTFeeBalance.fromJSON(object.nFTFeeBalance);
    } else {
      message.nFTFeeBalance = undefined;
    }
    if (
      object.metadataCreatorList !== undefined &&
      object.metadataCreatorList !== null
    ) {
      for (const e of object.metadataCreatorList) {
        message.metadataCreatorList.push(MetadataCreator.fromJSON(e));
      }
    }
    if (
      object.nftCollectionList !== undefined &&
      object.nftCollectionList !== null
    ) {
      for (const e of object.nftCollectionList) {
        message.nftCollectionList.push(NftCollection.fromJSON(e));
      }
    }
    if (
      object.actionExecutorList !== undefined &&
      object.actionExecutorList !== null
    ) {
      for (const e of object.actionExecutorList) {
        message.actionExecutorList.push(ActionExecutor.fromJSON(e));
      }
    }
    if (
      object.schemaAttributeList !== undefined &&
      object.schemaAttributeList !== null
    ) {
      for (const e of object.schemaAttributeList) {
        message.schemaAttributeList.push(SchemaAttribute.fromJSON(e));
      }
    }
    if (
      object.actionOfSchemaList !== undefined &&
      object.actionOfSchemaList !== null
    ) {
      for (const e of object.actionOfSchemaList) {
        message.actionOfSchemaList.push(ActionOfSchema.fromJSON(e));
      }
    }
    if (
      object.executorOfSchemaList !== undefined &&
      object.executorOfSchemaList !== null
    ) {
      for (const e of object.executorOfSchemaList) {
        message.executorOfSchemaList.push(ExecutorOfSchema.fromJSON(e));
      }
    }
    if (
      object.virtualActionList !== undefined &&
      object.virtualActionList !== null
    ) {
      for (const e of object.virtualActionList) {
        message.virtualActionList.push(VirtualAction.fromJSON(e));
      }
    }
    if (
      object.virtualSchemaList !== undefined &&
      object.virtualSchemaList !== null
    ) {
      for (const e of object.virtualSchemaList) {
        message.virtualSchemaList.push(VirtualSchema.fromJSON(e));
      }
    }
    if (
      object.virtualSchemaProposalList !== undefined &&
      object.virtualSchemaProposalList !== null
    ) {
      for (const e of object.virtualSchemaProposalList) {
        message.virtualSchemaProposalList.push(
          VirtualSchemaProposal.fromJSON(e)
        );
      }
    }
    if (
      object.activeVirtualSchemaProposalList !== undefined &&
      object.activeVirtualSchemaProposalList !== null
    ) {
      for (const e of object.activeVirtualSchemaProposalList) {
        message.activeVirtualSchemaProposalList.push(
          ActiveVirtualSchemaProposal.fromJSON(e)
        );
      }
    }
    if (
      object.inactiveVirtualSchemaProposalList !== undefined &&
      object.inactiveVirtualSchemaProposalList !== null
    ) {
      for (const e of object.inactiveVirtualSchemaProposalList) {
        message.inactiveVirtualSchemaProposalList.push(
          InactiveVirtualSchemaProposal.fromJSON(e)
        );
      }
    }
    if (
      object.lockSchemaFeeList !== undefined &&
      object.lockSchemaFeeList !== null
    ) {
      for (const e of object.lockSchemaFeeList) {
        message.lockSchemaFeeList.push(LockSchemaFee.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.nFTSchemaList) {
      obj.nFTSchemaList = message.nFTSchemaList.map((e) =>
        e ? NFTSchema.toJSON(e) : undefined
      );
    } else {
      obj.nFTSchemaList = [];
    }
    if (message.nftDataList) {
      obj.nftDataList = message.nftDataList.map((e) =>
        e ? NftData.toJSON(e) : undefined
      );
    } else {
      obj.nftDataList = [];
    }
    if (message.actionByRefIdList) {
      obj.actionByRefIdList = message.actionByRefIdList.map((e) =>
        e ? ActionByRefId.toJSON(e) : undefined
      );
    } else {
      obj.actionByRefIdList = [];
    }
    if (message.organizationList) {
      obj.organizationList = message.organizationList.map((e) =>
        e ? Organization.toJSON(e) : undefined
      );
    } else {
      obj.organizationList = [];
    }
    if (message.nFTSchemaByContractList) {
      obj.nFTSchemaByContractList = message.nFTSchemaByContractList.map((e) =>
        e ? NFTSchemaByContract.toJSON(e) : undefined
      );
    } else {
      obj.nFTSchemaByContractList = [];
    }
    message.nft_fee_config !== undefined &&
      (obj.nft_fee_config = message.nft_fee_config
        ? NFTFeeConfig.toJSON(message.nft_fee_config)
        : undefined);
    message.nFTFeeBalance !== undefined &&
      (obj.nFTFeeBalance = message.nFTFeeBalance
        ? NFTFeeBalance.toJSON(message.nFTFeeBalance)
        : undefined);
    if (message.metadataCreatorList) {
      obj.metadataCreatorList = message.metadataCreatorList.map((e) =>
        e ? MetadataCreator.toJSON(e) : undefined
      );
    } else {
      obj.metadataCreatorList = [];
    }
    if (message.nftCollectionList) {
      obj.nftCollectionList = message.nftCollectionList.map((e) =>
        e ? NftCollection.toJSON(e) : undefined
      );
    } else {
      obj.nftCollectionList = [];
    }
    if (message.actionExecutorList) {
      obj.actionExecutorList = message.actionExecutorList.map((e) =>
        e ? ActionExecutor.toJSON(e) : undefined
      );
    } else {
      obj.actionExecutorList = [];
    }
    if (message.schemaAttributeList) {
      obj.schemaAttributeList = message.schemaAttributeList.map((e) =>
        e ? SchemaAttribute.toJSON(e) : undefined
      );
    } else {
      obj.schemaAttributeList = [];
    }
    if (message.actionOfSchemaList) {
      obj.actionOfSchemaList = message.actionOfSchemaList.map((e) =>
        e ? ActionOfSchema.toJSON(e) : undefined
      );
    } else {
      obj.actionOfSchemaList = [];
    }
    if (message.executorOfSchemaList) {
      obj.executorOfSchemaList = message.executorOfSchemaList.map((e) =>
        e ? ExecutorOfSchema.toJSON(e) : undefined
      );
    } else {
      obj.executorOfSchemaList = [];
    }
    if (message.virtualActionList) {
      obj.virtualActionList = message.virtualActionList.map((e) =>
        e ? VirtualAction.toJSON(e) : undefined
      );
    } else {
      obj.virtualActionList = [];
    }
    if (message.virtualSchemaList) {
      obj.virtualSchemaList = message.virtualSchemaList.map((e) =>
        e ? VirtualSchema.toJSON(e) : undefined
      );
    } else {
      obj.virtualSchemaList = [];
    }
    if (message.virtualSchemaProposalList) {
      obj.virtualSchemaProposalList = message.virtualSchemaProposalList.map(
        (e) => (e ? VirtualSchemaProposal.toJSON(e) : undefined)
      );
    } else {
      obj.virtualSchemaProposalList = [];
    }
    if (message.activeVirtualSchemaProposalList) {
      obj.activeVirtualSchemaProposalList = message.activeVirtualSchemaProposalList.map(
        (e) => (e ? ActiveVirtualSchemaProposal.toJSON(e) : undefined)
      );
    } else {
      obj.activeVirtualSchemaProposalList = [];
    }
    if (message.inactiveVirtualSchemaProposalList) {
      obj.inactiveVirtualSchemaProposalList = message.inactiveVirtualSchemaProposalList.map(
        (e) => (e ? InactiveVirtualSchemaProposal.toJSON(e) : undefined)
      );
    } else {
      obj.inactiveVirtualSchemaProposalList = [];
    }
    if (message.lockSchemaFeeList) {
      obj.lockSchemaFeeList = message.lockSchemaFeeList.map((e) =>
        e ? LockSchemaFee.toJSON(e) : undefined
      );
    } else {
      obj.lockSchemaFeeList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.nFTSchemaList = [];
    message.nftDataList = [];
    message.actionByRefIdList = [];
    message.organizationList = [];
    message.nFTSchemaByContractList = [];
    message.metadataCreatorList = [];
    message.nftCollectionList = [];
    message.actionExecutorList = [];
    message.schemaAttributeList = [];
    message.actionOfSchemaList = [];
    message.executorOfSchemaList = [];
    message.virtualActionList = [];
    message.virtualSchemaList = [];
    message.virtualSchemaProposalList = [];
    message.activeVirtualSchemaProposalList = [];
    message.inactiveVirtualSchemaProposalList = [];
    message.lockSchemaFeeList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.nFTSchemaList !== undefined && object.nFTSchemaList !== null) {
      for (const e of object.nFTSchemaList) {
        message.nFTSchemaList.push(NFTSchema.fromPartial(e));
      }
    }
    if (object.nftDataList !== undefined && object.nftDataList !== null) {
      for (const e of object.nftDataList) {
        message.nftDataList.push(NftData.fromPartial(e));
      }
    }
    if (
      object.actionByRefIdList !== undefined &&
      object.actionByRefIdList !== null
    ) {
      for (const e of object.actionByRefIdList) {
        message.actionByRefIdList.push(ActionByRefId.fromPartial(e));
      }
    }
    if (
      object.organizationList !== undefined &&
      object.organizationList !== null
    ) {
      for (const e of object.organizationList) {
        message.organizationList.push(Organization.fromPartial(e));
      }
    }
    if (
      object.nFTSchemaByContractList !== undefined &&
      object.nFTSchemaByContractList !== null
    ) {
      for (const e of object.nFTSchemaByContractList) {
        message.nFTSchemaByContractList.push(
          NFTSchemaByContract.fromPartial(e)
        );
      }
    }
    if (object.nft_fee_config !== undefined && object.nft_fee_config !== null) {
      message.nft_fee_config = NFTFeeConfig.fromPartial(object.nft_fee_config);
    } else {
      message.nft_fee_config = undefined;
    }
    if (object.nFTFeeBalance !== undefined && object.nFTFeeBalance !== null) {
      message.nFTFeeBalance = NFTFeeBalance.fromPartial(object.nFTFeeBalance);
    } else {
      message.nFTFeeBalance = undefined;
    }
    if (
      object.metadataCreatorList !== undefined &&
      object.metadataCreatorList !== null
    ) {
      for (const e of object.metadataCreatorList) {
        message.metadataCreatorList.push(MetadataCreator.fromPartial(e));
      }
    }
    if (
      object.nftCollectionList !== undefined &&
      object.nftCollectionList !== null
    ) {
      for (const e of object.nftCollectionList) {
        message.nftCollectionList.push(NftCollection.fromPartial(e));
      }
    }
    if (
      object.actionExecutorList !== undefined &&
      object.actionExecutorList !== null
    ) {
      for (const e of object.actionExecutorList) {
        message.actionExecutorList.push(ActionExecutor.fromPartial(e));
      }
    }
    if (
      object.schemaAttributeList !== undefined &&
      object.schemaAttributeList !== null
    ) {
      for (const e of object.schemaAttributeList) {
        message.schemaAttributeList.push(SchemaAttribute.fromPartial(e));
      }
    }
    if (
      object.actionOfSchemaList !== undefined &&
      object.actionOfSchemaList !== null
    ) {
      for (const e of object.actionOfSchemaList) {
        message.actionOfSchemaList.push(ActionOfSchema.fromPartial(e));
      }
    }
    if (
      object.executorOfSchemaList !== undefined &&
      object.executorOfSchemaList !== null
    ) {
      for (const e of object.executorOfSchemaList) {
        message.executorOfSchemaList.push(ExecutorOfSchema.fromPartial(e));
      }
    }
    if (
      object.virtualActionList !== undefined &&
      object.virtualActionList !== null
    ) {
      for (const e of object.virtualActionList) {
        message.virtualActionList.push(VirtualAction.fromPartial(e));
      }
    }
    if (
      object.virtualSchemaList !== undefined &&
      object.virtualSchemaList !== null
    ) {
      for (const e of object.virtualSchemaList) {
        message.virtualSchemaList.push(VirtualSchema.fromPartial(e));
      }
    }
    if (
      object.virtualSchemaProposalList !== undefined &&
      object.virtualSchemaProposalList !== null
    ) {
      for (const e of object.virtualSchemaProposalList) {
        message.virtualSchemaProposalList.push(
          VirtualSchemaProposal.fromPartial(e)
        );
      }
    }
    if (
      object.activeVirtualSchemaProposalList !== undefined &&
      object.activeVirtualSchemaProposalList !== null
    ) {
      for (const e of object.activeVirtualSchemaProposalList) {
        message.activeVirtualSchemaProposalList.push(
          ActiveVirtualSchemaProposal.fromPartial(e)
        );
      }
    }
    if (
      object.inactiveVirtualSchemaProposalList !== undefined &&
      object.inactiveVirtualSchemaProposalList !== null
    ) {
      for (const e of object.inactiveVirtualSchemaProposalList) {
        message.inactiveVirtualSchemaProposalList.push(
          InactiveVirtualSchemaProposal.fromPartial(e)
        );
      }
    }
    if (
      object.lockSchemaFeeList !== undefined &&
      object.lockSchemaFeeList !== null
    ) {
      for (const e of object.lockSchemaFeeList) {
        message.lockSchemaFeeList.push(LockSchemaFee.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
