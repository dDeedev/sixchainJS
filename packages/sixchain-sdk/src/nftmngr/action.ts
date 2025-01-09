//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export enum AllowedActioner {
  ALLOWED_ACTIONER_ALL = 0,
  ALLOWED_ACTIONER_SYSTEM_ONLY = 1,
  ALLOWED_ACTIONER_USER_ONLY = 2,
  UNRECOGNIZED = -1,
}
export const AllowedActionerSDKType = AllowedActioner;
export const AllowedActionerAmino = AllowedActioner;
export function allowedActionerFromJSON(object: any): AllowedActioner {
  switch (object) {
  case 0:
  case 'ALLOWED_ACTIONER_ALL':
    return AllowedActioner.ALLOWED_ACTIONER_ALL;
  case 1:
  case 'ALLOWED_ACTIONER_SYSTEM_ONLY':
    return AllowedActioner.ALLOWED_ACTIONER_SYSTEM_ONLY;
  case 2:
  case 'ALLOWED_ACTIONER_USER_ONLY':
    return AllowedActioner.ALLOWED_ACTIONER_USER_ONLY;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return AllowedActioner.UNRECOGNIZED;
  }
}
export function allowedActionerToJSON(object: AllowedActioner): string {
  switch (object) {
  case AllowedActioner.ALLOWED_ACTIONER_ALL:
    return 'ALLOWED_ACTIONER_ALL';
  case AllowedActioner.ALLOWED_ACTIONER_SYSTEM_ONLY:
    return 'ALLOWED_ACTIONER_SYSTEM_ONLY';
  case AllowedActioner.ALLOWED_ACTIONER_USER_ONLY:
    return 'ALLOWED_ACTIONER_USER_ONLY';
  case AllowedActioner.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
export interface ActionParams {
  name: string;
  desc: string;
  dataType: string;
  required: boolean;
  defaultValue: string;
}
export interface ActionParamsProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionParams';
  value: Uint8Array;
}
export interface ActionParamsAmino {
  name?: string;
  desc?: string;
  data_type?: string;
  required?: boolean;
  default_value?: string;
}
export interface ActionParamsAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.ActionParams';
  value: ActionParamsAmino;
}
export interface ActionParamsSDKType {
  name: string;
  desc: string;
  data_type: string;
  required: boolean;
  default_value: string;
}
export interface Action {
  name: string;
  desc: string;
  disable: boolean;
  when: string;
  then: string[];
  allowedActioner?: AllowedActioner;
  params?: ActionParams[];
}
export interface ActionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.Action';
  value: Uint8Array;
}
export interface ActionAmino {
  name?: string;
  desc?: string;
  disable?: boolean;
  when?: string;
  then?: string[];
  allowed_actioner?: AllowedActioner;
  params?: ActionParamsAmino[];
}
export interface ActionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.Action';
  value: ActionAmino;
}
export interface ActionSDKType {
  name: string;
  desc: string;
  disable: boolean;
  when: string;
  then: string[];
  allowed_actioner?: AllowedActioner;
  params?: ActionParamsSDKType[];
}
function createBaseActionParams(): ActionParams {
  return {
    name: '',
    desc: '',
    dataType: '',
    required: false,
    defaultValue: ''
  };
}
export const ActionParams = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionParams',
  encode(message: ActionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.desc !== '') {
      writer.uint32(18).string(message.desc);
    }
    if (message.dataType !== '') {
      writer.uint32(26).string(message.dataType);
    }
    if (message.required === true) {
      writer.uint32(32).bool(message.required);
    }
    if (message.defaultValue !== '') {
      writer.uint32(42).string(message.defaultValue);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.name = reader.string();
        break;
      case 2:
        message.desc = reader.string();
        break;
      case 3:
        message.dataType = reader.string();
        break;
      case 4:
        message.required = reader.bool();
        break;
      case 5:
        message.defaultValue = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionParams>): ActionParams {
    const message = createBaseActionParams();
    message.name = object.name ?? '';
    message.desc = object.desc ?? '';
    message.dataType = object.dataType ?? '';
    message.required = object.required ?? false;
    message.defaultValue = object.defaultValue ?? '';
    return message;
  },
  fromAmino(object: ActionParamsAmino): ActionParams {
    const message = createBaseActionParams();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    }
    if (object.data_type !== undefined && object.data_type !== null) {
      message.dataType = object.data_type;
    }
    if (object.required !== undefined && object.required !== null) {
      message.required = object.required;
    }
    if (object.default_value !== undefined && object.default_value !== null) {
      message.defaultValue = object.default_value;
    }
    return message;
  },
  toAmino(message: ActionParams): ActionParamsAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    obj.desc = message.desc === '' ? undefined : message.desc;
    obj.data_type = message.dataType === '' ? undefined : message.dataType;
    obj.required = message.required === false ? undefined : message.required;
    obj.default_value = message.defaultValue === '' ? undefined : message.defaultValue;
    return obj;
  },
  fromAminoMsg(object: ActionParamsAminoMsg): ActionParams {
    return ActionParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionParamsProtoMsg): ActionParams {
    return ActionParams.decode(message.value);
  },
  toProto(message: ActionParams): Uint8Array {
    return ActionParams.encode(message).finish();
  },
  toProtoMsg(message: ActionParams): ActionParamsProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionParams',
      value: ActionParams.encode(message).finish()
    };
  }
};
function createBaseAction(): Action {
  return {
    name: '',
    desc: '',
    disable: false,
    when: '',
    then: [],
    allowedActioner: undefined,
    params: []
  };
}
export const Action = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.Action',
  encode(message: Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.desc !== '') {
      writer.uint32(18).string(message.desc);
    }
    if (message.disable === true) {
      writer.uint32(24).bool(message.disable);
    }
    if (message.when !== '') {
      writer.uint32(34).string(message.when);
    }
    for (const v of message.then) {
      writer.uint32(42).string(v!);
    }
    if (message.allowedActioner !== undefined) {
      writer.uint32(48).int32(message.allowedActioner);
    }
    for (const v of message.params) {
      ActionParams.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Action {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.name = reader.string();
        break;
      case 2:
        message.desc = reader.string();
        break;
      case 3:
        message.disable = reader.bool();
        break;
      case 4:
        message.when = reader.string();
        break;
      case 5:
        message.then.push(reader.string());
        break;
      case 6:
        message.allowedActioner = reader.int32() as any;
        break;
      case 7:
        message.params.push(ActionParams.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Action>): Action {
    const message = createBaseAction();
    message.name = object.name ?? '';
    message.desc = object.desc ?? '';
    message.disable = object.disable ?? false;
    message.when = object.when ?? '';
    message.then = object.then?.map(e => e) || [];
    message.allowedActioner = object.allowedActioner ?? undefined;
    message.params = object.params?.map(e => ActionParams.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ActionAmino): Action {
    const message = createBaseAction();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    }
    if (object.disable !== undefined && object.disable !== null) {
      message.disable = object.disable;
    }
    if (object.when !== undefined && object.when !== null) {
      message.when = object.when;
    }
    message.then = object.then?.map(e => e) || [];
    if (object.allowed_actioner !== undefined && object.allowed_actioner !== null) {
      message.allowedActioner = object.allowed_actioner;
    }
    message.params = object.params?.map(e => ActionParams.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Action): ActionAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    obj.desc = message.desc === '' ? undefined : message.desc;
    obj.disable = message.disable === false ? undefined : message.disable;
    obj.when = message.when === '' ? undefined : message.when;
    if (message.then) {
      obj.then = message.then.map(e => e);
    } else {
      obj.then = message.then;
    }
    obj.allowed_actioner = message.allowedActioner === null ? undefined : message.allowedActioner;
    if (message.params) {
      obj.params = message.params.map(e => e ? ActionParams.toAmino(e) : undefined);
    } else {
      obj.params = message.params;
    }
    return obj;
  },
  fromAminoMsg(object: ActionAminoMsg): Action {
    return Action.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionProtoMsg): Action {
    return Action.decode(message.value);
  },
  toProto(message: Action): Uint8Array {
    return Action.encode(message).finish();
  },
  toProtoMsg(message: Action): ActionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.Action',
      value: Action.encode(message).finish()
    };
  }
};