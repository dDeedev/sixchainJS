//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Admin, AdminAmino, AdminSDKType } from './admin';
import { Group, GroupAmino, GroupSDKType } from './group';
import { Params, ParamsAmino, ParamsSDKType } from './params';
/** GenesisState defines the protocoladmin module's genesis state. */
export interface GenesisState {
  params: Params;
  portId: string;
  groupList: Group[];
  adminList: Admin[];
}
export interface GenesisStateProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.GenesisState';
  value: Uint8Array;
}
/** GenesisState defines the protocoladmin module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  port_id?: string;
  groupList?: GroupAmino[];
  adminList?: AdminAmino[];
}
export interface GenesisStateAminoMsg {
  type: '/thesixnetwork.sixprotocol.protocoladmin.GenesisState';
  value: GenesisStateAmino;
}
/** GenesisState defines the protocoladmin module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  port_id: string;
  groupList: GroupSDKType[];
  adminList: AdminSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    portId: '',
    groupList: [],
    adminList: []
  };
}
export const GenesisState = {
  typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.GenesisState',
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== '') {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.groupList) {
      Group.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.adminList) {
      Admin.encode(v!, writer.uint32(34).fork()).ldelim();
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
        message.portId = reader.string();
        break;
      case 3:
        message.groupList.push(Group.decode(reader, reader.uint32()));
        break;
      case 4:
        message.adminList.push(Admin.decode(reader, reader.uint32()));
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
    message.portId = object.portId ?? '';
    message.groupList = object.groupList?.map(e => Group.fromPartial(e)) || [];
    message.adminList = object.adminList?.map(e => Admin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    message.groupList = object.groupList?.map(e => Group.fromAmino(e)) || [];
    message.adminList = object.adminList?.map(e => Admin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.port_id = message.portId === '' ? undefined : message.portId;
    if (message.groupList) {
      obj.groupList = message.groupList.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.groupList = message.groupList;
    }
    if (message.adminList) {
      obj.adminList = message.adminList.map(e => e ? Admin.toAmino(e) : undefined);
    } else {
      obj.adminList = message.adminList;
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
      typeUrl: '/thesixnetwork.sixprotocol.protocoladmin.GenesisState',
      value: GenesisState.encode(message).finish()
    };
  }
};