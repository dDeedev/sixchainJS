//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { ActionByRefId, ActionByRefIdAmino, ActionByRefIdSDKType } from './action_by_ref_id';
import { ActionExecutor, ActionExecutorAmino, ActionExecutorSDKType } from './action_executor';
import { ActionOfSchema, ActionOfSchemaAmino, ActionOfSchemaSDKType } from './action_of_schema';
import { DisableVirtualSchema, DisableVirtualSchemaAmino, DisableVirtualSchemaSDKType } from './disable_virtual_schema';
import { ExecutorOfSchema, ExecutorOfSchemaAmino, ExecutorOfSchemaSDKType } from './executor_of_schema';
import { MetadataCreator, MetadataCreatorAmino, MetadataCreatorSDKType } from './metadata_creator';
import { NftCollection, NftCollectionAmino, NftCollectionSDKType } from './nft_collection';
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
/** GenesisState defines the nftmngr module's genesis state. */
export interface GenesisState {
  params: Params;
  nFTSchemaList: NFTSchema[];
  nftDataList: NftData[];
  actionByRefIdList: ActionByRefId[];
  organizationList: Organization[];
  nFTSchemaByContractList: NFTSchemaByContract[];
  nftFeeConfig?: NFTFeeConfig;
  nFTFeeBalance?: NFTFeeBalance;
  metadataCreatorList: MetadataCreator[];
  nftCollectionList: NftCollection[];
  actionExecutorList: ActionExecutor[];
  schemaAttributeList: SchemaAttribute[];
  actionOfSchemaList: ActionOfSchema[];
  executorOfSchemaList: ExecutorOfSchema[];
  virtualActionList: VirtualAction[];
  virtualSchemaList: VirtualSchema[];
  disableVirtualSchemaList: DisableVirtualSchema[];
  virtualSchemaProposalList: VirtualSchemaProposal[];
  activeVirtualSchemaProposalList: ActiveVirtualSchemaProposal[];
  inactiveVirtualSchemaProposalList: InactiveVirtualSchemaProposal[];
}
export interface GenesisStateProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.GenesisState';
  value: Uint8Array;
}
/** GenesisState defines the nftmngr module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  nFTSchemaList?: NFTSchemaAmino[];
  nftDataList?: NftDataAmino[];
  actionByRefIdList?: ActionByRefIdAmino[];
  organizationList?: OrganizationAmino[];
  nFTSchemaByContractList?: NFTSchemaByContractAmino[];
  nft_fee_config?: NFTFeeConfigAmino;
  nFTFeeBalance?: NFTFeeBalanceAmino;
  metadataCreatorList?: MetadataCreatorAmino[];
  nftCollectionList?: NftCollectionAmino[];
  actionExecutorList?: ActionExecutorAmino[];
  schemaAttributeList?: SchemaAttributeAmino[];
  actionOfSchemaList?: ActionOfSchemaAmino[];
  executorOfSchemaList?: ExecutorOfSchemaAmino[];
  virtualActionList?: VirtualActionAmino[];
  virtualSchemaList?: VirtualSchemaAmino[];
  disableVirtualSchemaList?: DisableVirtualSchemaAmino[];
  virtualSchemaProposalList?: VirtualSchemaProposalAmino[];
  activeVirtualSchemaProposalList?: ActiveVirtualSchemaProposalAmino[];
  inactiveVirtualSchemaProposalList?: InactiveVirtualSchemaProposalAmino[];
}
export interface GenesisStateAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.GenesisState';
  value: GenesisStateAmino;
}
/** GenesisState defines the nftmngr module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  nFTSchemaList: NFTSchemaSDKType[];
  nftDataList: NftDataSDKType[];
  actionByRefIdList: ActionByRefIdSDKType[];
  organizationList: OrganizationSDKType[];
  nFTSchemaByContractList: NFTSchemaByContractSDKType[];
  nft_fee_config?: NFTFeeConfigSDKType;
  nFTFeeBalance?: NFTFeeBalanceSDKType;
  metadataCreatorList: MetadataCreatorSDKType[];
  nftCollectionList: NftCollectionSDKType[];
  actionExecutorList: ActionExecutorSDKType[];
  schemaAttributeList: SchemaAttributeSDKType[];
  actionOfSchemaList: ActionOfSchemaSDKType[];
  executorOfSchemaList: ExecutorOfSchemaSDKType[];
  virtualActionList: VirtualActionSDKType[];
  virtualSchemaList: VirtualSchemaSDKType[];
  disableVirtualSchemaList: DisableVirtualSchemaSDKType[];
  virtualSchemaProposalList: VirtualSchemaProposalSDKType[];
  activeVirtualSchemaProposalList: ActiveVirtualSchemaProposalSDKType[];
  inactiveVirtualSchemaProposalList: InactiveVirtualSchemaProposalSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    nFTSchemaList: [],
    nftDataList: [],
    actionByRefIdList: [],
    organizationList: [],
    nFTSchemaByContractList: [],
    nftFeeConfig: undefined,
    nFTFeeBalance: undefined,
    metadataCreatorList: [],
    nftCollectionList: [],
    actionExecutorList: [],
    schemaAttributeList: [],
    actionOfSchemaList: [],
    executorOfSchemaList: [],
    virtualActionList: [],
    virtualSchemaList: [],
    disableVirtualSchemaList: [],
    virtualSchemaProposalList: [],
    activeVirtualSchemaProposalList: [],
    inactiveVirtualSchemaProposalList: []
  };
}
export const GenesisState = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.GenesisState',
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.nftFeeConfig !== undefined) {
      NFTFeeConfig.encode(message.nftFeeConfig, writer.uint32(66).fork()).ldelim();
    }
    if (message.nFTFeeBalance !== undefined) {
      NFTFeeBalance.encode(message.nFTFeeBalance, writer.uint32(74).fork()).ldelim();
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
    for (const v of message.disableVirtualSchemaList) {
      DisableVirtualSchema.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.virtualSchemaProposalList) {
      VirtualSchemaProposal.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.activeVirtualSchemaProposalList) {
      ActiveVirtualSchemaProposal.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.inactiveVirtualSchemaProposalList) {
      InactiveVirtualSchemaProposal.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
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
        message.actionByRefIdList.push(ActionByRefId.decode(reader, reader.uint32()));
        break;
      case 5:
        message.organizationList.push(Organization.decode(reader, reader.uint32()));
        break;
      case 7:
        message.nFTSchemaByContractList.push(NFTSchemaByContract.decode(reader, reader.uint32()));
        break;
      case 8:
        message.nftFeeConfig = NFTFeeConfig.decode(reader, reader.uint32());
        break;
      case 9:
        message.nFTFeeBalance = NFTFeeBalance.decode(reader, reader.uint32());
        break;
      case 10:
        message.metadataCreatorList.push(MetadataCreator.decode(reader, reader.uint32()));
        break;
      case 11:
        message.nftCollectionList.push(NftCollection.decode(reader, reader.uint32()));
        break;
      case 12:
        message.actionExecutorList.push(ActionExecutor.decode(reader, reader.uint32()));
        break;
      case 13:
        message.schemaAttributeList.push(SchemaAttribute.decode(reader, reader.uint32()));
        break;
      case 14:
        message.actionOfSchemaList.push(ActionOfSchema.decode(reader, reader.uint32()));
        break;
      case 15:
        message.executorOfSchemaList.push(ExecutorOfSchema.decode(reader, reader.uint32()));
        break;
      case 16:
        message.virtualActionList.push(VirtualAction.decode(reader, reader.uint32()));
        break;
      case 17:
        message.virtualSchemaList.push(VirtualSchema.decode(reader, reader.uint32()));
        break;
      case 18:
        message.disableVirtualSchemaList.push(DisableVirtualSchema.decode(reader, reader.uint32()));
        break;
      case 19:
        message.virtualSchemaProposalList.push(VirtualSchemaProposal.decode(reader, reader.uint32()));
        break;
      case 20:
        message.activeVirtualSchemaProposalList.push(ActiveVirtualSchemaProposal.decode(reader, reader.uint32()));
        break;
      case 21:
        message.inactiveVirtualSchemaProposalList.push(InactiveVirtualSchemaProposal.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.nFTSchemaList = object.nFTSchemaList?.map(e => NFTSchema.fromPartial(e)) || [];
    message.nftDataList = object.nftDataList?.map(e => NftData.fromPartial(e)) || [];
    message.actionByRefIdList = object.actionByRefIdList?.map(e => ActionByRefId.fromPartial(e)) || [];
    message.organizationList = object.organizationList?.map(e => Organization.fromPartial(e)) || [];
    message.nFTSchemaByContractList = object.nFTSchemaByContractList?.map(e => NFTSchemaByContract.fromPartial(e)) || [];
    message.nftFeeConfig = object.nftFeeConfig !== undefined && object.nftFeeConfig !== null ? NFTFeeConfig.fromPartial(object.nftFeeConfig) : undefined;
    message.nFTFeeBalance = object.nFTFeeBalance !== undefined && object.nFTFeeBalance !== null ? NFTFeeBalance.fromPartial(object.nFTFeeBalance) : undefined;
    message.metadataCreatorList = object.metadataCreatorList?.map(e => MetadataCreator.fromPartial(e)) || [];
    message.nftCollectionList = object.nftCollectionList?.map(e => NftCollection.fromPartial(e)) || [];
    message.actionExecutorList = object.actionExecutorList?.map(e => ActionExecutor.fromPartial(e)) || [];
    message.schemaAttributeList = object.schemaAttributeList?.map(e => SchemaAttribute.fromPartial(e)) || [];
    message.actionOfSchemaList = object.actionOfSchemaList?.map(e => ActionOfSchema.fromPartial(e)) || [];
    message.executorOfSchemaList = object.executorOfSchemaList?.map(e => ExecutorOfSchema.fromPartial(e)) || [];
    message.virtualActionList = object.virtualActionList?.map(e => VirtualAction.fromPartial(e)) || [];
    message.virtualSchemaList = object.virtualSchemaList?.map(e => VirtualSchema.fromPartial(e)) || [];
    message.disableVirtualSchemaList = object.disableVirtualSchemaList?.map(e => DisableVirtualSchema.fromPartial(e)) || [];
    message.virtualSchemaProposalList = object.virtualSchemaProposalList?.map(e => VirtualSchemaProposal.fromPartial(e)) || [];
    message.activeVirtualSchemaProposalList = object.activeVirtualSchemaProposalList?.map(e => ActiveVirtualSchemaProposal.fromPartial(e)) || [];
    message.inactiveVirtualSchemaProposalList = object.inactiveVirtualSchemaProposalList?.map(e => InactiveVirtualSchemaProposal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.nFTSchemaList = object.nFTSchemaList?.map(e => NFTSchema.fromAmino(e)) || [];
    message.nftDataList = object.nftDataList?.map(e => NftData.fromAmino(e)) || [];
    message.actionByRefIdList = object.actionByRefIdList?.map(e => ActionByRefId.fromAmino(e)) || [];
    message.organizationList = object.organizationList?.map(e => Organization.fromAmino(e)) || [];
    message.nFTSchemaByContractList = object.nFTSchemaByContractList?.map(e => NFTSchemaByContract.fromAmino(e)) || [];
    if (object.nft_fee_config !== undefined && object.nft_fee_config !== null) {
      message.nftFeeConfig = NFTFeeConfig.fromAmino(object.nft_fee_config);
    }
    if (object.nFTFeeBalance !== undefined && object.nFTFeeBalance !== null) {
      message.nFTFeeBalance = NFTFeeBalance.fromAmino(object.nFTFeeBalance);
    }
    message.metadataCreatorList = object.metadataCreatorList?.map(e => MetadataCreator.fromAmino(e)) || [];
    message.nftCollectionList = object.nftCollectionList?.map(e => NftCollection.fromAmino(e)) || [];
    message.actionExecutorList = object.actionExecutorList?.map(e => ActionExecutor.fromAmino(e)) || [];
    message.schemaAttributeList = object.schemaAttributeList?.map(e => SchemaAttribute.fromAmino(e)) || [];
    message.actionOfSchemaList = object.actionOfSchemaList?.map(e => ActionOfSchema.fromAmino(e)) || [];
    message.executorOfSchemaList = object.executorOfSchemaList?.map(e => ExecutorOfSchema.fromAmino(e)) || [];
    message.virtualActionList = object.virtualActionList?.map(e => VirtualAction.fromAmino(e)) || [];
    message.virtualSchemaList = object.virtualSchemaList?.map(e => VirtualSchema.fromAmino(e)) || [];
    message.disableVirtualSchemaList = object.disableVirtualSchemaList?.map(e => DisableVirtualSchema.fromAmino(e)) || [];
    message.virtualSchemaProposalList = object.virtualSchemaProposalList?.map(e => VirtualSchemaProposal.fromAmino(e)) || [];
    message.activeVirtualSchemaProposalList = object.activeVirtualSchemaProposalList?.map(e => ActiveVirtualSchemaProposal.fromAmino(e)) || [];
    message.inactiveVirtualSchemaProposalList = object.inactiveVirtualSchemaProposalList?.map(e => InactiveVirtualSchemaProposal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.nFTSchemaList) {
      obj.nFTSchemaList = message.nFTSchemaList.map(e => e ? NFTSchema.toAmino(e) : undefined);
    } else {
      obj.nFTSchemaList = message.nFTSchemaList;
    }
    if (message.nftDataList) {
      obj.nftDataList = message.nftDataList.map(e => e ? NftData.toAmino(e) : undefined);
    } else {
      obj.nftDataList = message.nftDataList;
    }
    if (message.actionByRefIdList) {
      obj.actionByRefIdList = message.actionByRefIdList.map(e => e ? ActionByRefId.toAmino(e) : undefined);
    } else {
      obj.actionByRefIdList = message.actionByRefIdList;
    }
    if (message.organizationList) {
      obj.organizationList = message.organizationList.map(e => e ? Organization.toAmino(e) : undefined);
    } else {
      obj.organizationList = message.organizationList;
    }
    if (message.nFTSchemaByContractList) {
      obj.nFTSchemaByContractList = message.nFTSchemaByContractList.map(e => e ? NFTSchemaByContract.toAmino(e) : undefined);
    } else {
      obj.nFTSchemaByContractList = message.nFTSchemaByContractList;
    }
    obj.nft_fee_config = message.nftFeeConfig ? NFTFeeConfig.toAmino(message.nftFeeConfig) : undefined;
    obj.nFTFeeBalance = message.nFTFeeBalance ? NFTFeeBalance.toAmino(message.nFTFeeBalance) : undefined;
    if (message.metadataCreatorList) {
      obj.metadataCreatorList = message.metadataCreatorList.map(e => e ? MetadataCreator.toAmino(e) : undefined);
    } else {
      obj.metadataCreatorList = message.metadataCreatorList;
    }
    if (message.nftCollectionList) {
      obj.nftCollectionList = message.nftCollectionList.map(e => e ? NftCollection.toAmino(e) : undefined);
    } else {
      obj.nftCollectionList = message.nftCollectionList;
    }
    if (message.actionExecutorList) {
      obj.actionExecutorList = message.actionExecutorList.map(e => e ? ActionExecutor.toAmino(e) : undefined);
    } else {
      obj.actionExecutorList = message.actionExecutorList;
    }
    if (message.schemaAttributeList) {
      obj.schemaAttributeList = message.schemaAttributeList.map(e => e ? SchemaAttribute.toAmino(e) : undefined);
    } else {
      obj.schemaAttributeList = message.schemaAttributeList;
    }
    if (message.actionOfSchemaList) {
      obj.actionOfSchemaList = message.actionOfSchemaList.map(e => e ? ActionOfSchema.toAmino(e) : undefined);
    } else {
      obj.actionOfSchemaList = message.actionOfSchemaList;
    }
    if (message.executorOfSchemaList) {
      obj.executorOfSchemaList = message.executorOfSchemaList.map(e => e ? ExecutorOfSchema.toAmino(e) : undefined);
    } else {
      obj.executorOfSchemaList = message.executorOfSchemaList;
    }
    if (message.virtualActionList) {
      obj.virtualActionList = message.virtualActionList.map(e => e ? VirtualAction.toAmino(e) : undefined);
    } else {
      obj.virtualActionList = message.virtualActionList;
    }
    if (message.virtualSchemaList) {
      obj.virtualSchemaList = message.virtualSchemaList.map(e => e ? VirtualSchema.toAmino(e) : undefined);
    } else {
      obj.virtualSchemaList = message.virtualSchemaList;
    }
    if (message.disableVirtualSchemaList) {
      obj.disableVirtualSchemaList = message.disableVirtualSchemaList.map(e => e ? DisableVirtualSchema.toAmino(e) : undefined);
    } else {
      obj.disableVirtualSchemaList = message.disableVirtualSchemaList;
    }
    if (message.virtualSchemaProposalList) {
      obj.virtualSchemaProposalList = message.virtualSchemaProposalList.map(e => e ? VirtualSchemaProposal.toAmino(e) : undefined);
    } else {
      obj.virtualSchemaProposalList = message.virtualSchemaProposalList;
    }
    if (message.activeVirtualSchemaProposalList) {
      obj.activeVirtualSchemaProposalList = message.activeVirtualSchemaProposalList.map(e => e ? ActiveVirtualSchemaProposal.toAmino(e) : undefined);
    } else {
      obj.activeVirtualSchemaProposalList = message.activeVirtualSchemaProposalList;
    }
    if (message.inactiveVirtualSchemaProposalList) {
      obj.inactiveVirtualSchemaProposalList = message.inactiveVirtualSchemaProposalList.map(e => e ? InactiveVirtualSchemaProposal.toAmino(e) : undefined);
    } else {
      obj.inactiveVirtualSchemaProposalList = message.inactiveVirtualSchemaProposalList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.GenesisState',
      value: GenesisState.encode(message).finish()
    };
  }
};