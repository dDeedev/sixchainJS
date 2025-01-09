//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';
export interface Trait {
  traitType: string;
  value: string;
  displayType: string;
  maxValue: string;
}
export interface TraitProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.Trait';
  value: Uint8Array;
}
export interface TraitAmino {
  trait_type?: string;
  value?: string;
  display_type?: string;
  max_value?: string;
}
export interface TraitAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftoracle.Trait';
  value: TraitAmino;
}
export interface TraitSDKType {
  trait_type: string;
  value: string;
  display_type: string;
  max_value: string;
}
function createBaseTrait(): Trait {
  return {
    traitType: '',
    value: '',
    displayType: '',
    maxValue: ''
  };
}
export const Trait = {
  typeUrl: '/thesixnetwork.sixprotocol.nftoracle.Trait',
  encode(message: Trait, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traitType !== '') {
      writer.uint32(10).string(message.traitType);
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value);
    }
    if (message.displayType !== '') {
      writer.uint32(26).string(message.displayType);
    }
    if (message.maxValue !== '') {
      writer.uint32(34).string(message.maxValue);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Trait {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrait();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.traitType = reader.string();
        break;
      case 2:
        message.value = reader.string();
        break;
      case 3:
        message.displayType = reader.string();
        break;
      case 4:
        message.maxValue = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Trait>): Trait {
    const message = createBaseTrait();
    message.traitType = object.traitType ?? '';
    message.value = object.value ?? '';
    message.displayType = object.displayType ?? '';
    message.maxValue = object.maxValue ?? '';
    return message;
  },
  fromAmino(object: TraitAmino): Trait {
    const message = createBaseTrait();
    if (object.trait_type !== undefined && object.trait_type !== null) {
      message.traitType = object.trait_type;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.display_type !== undefined && object.display_type !== null) {
      message.displayType = object.display_type;
    }
    if (object.max_value !== undefined && object.max_value !== null) {
      message.maxValue = object.max_value;
    }
    return message;
  },
  toAmino(message: Trait): TraitAmino {
    const obj: any = {};
    obj.trait_type = message.traitType === '' ? undefined : message.traitType;
    obj.value = message.value === '' ? undefined : message.value;
    obj.display_type = message.displayType === '' ? undefined : message.displayType;
    obj.max_value = message.maxValue === '' ? undefined : message.maxValue;
    return obj;
  },
  fromAminoMsg(object: TraitAminoMsg): Trait {
    return Trait.fromAmino(object.value);
  },
  fromProtoMsg(message: TraitProtoMsg): Trait {
    return Trait.decode(message.value);
  },
  toProto(message: Trait): Uint8Array {
    return Trait.encode(message).finish();
  },
  toProtoMsg(message: Trait): TraitProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftoracle.Trait',
      value: Trait.encode(message).finish()
    };
  }
};