//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Coin, CoinAmino, CoinSDKType } from '../cosmos/base/v1beta1/coin';
/** @deprecated */
export interface Token {
  $typeUrl?: '/thesixnetwork.sixprotocol.tokenmngr.Token';
  name: string;
  base: string;
  maxSupply: Coin;
  mintee: string;
  creator: string;
}
export interface TokenProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Token';
  value: Uint8Array;
}
/** @deprecated */
export interface TokenAmino {
  name?: string;
  base?: string;
  maxSupply?: CoinAmino;
  mintee?: string;
  creator?: string;
}
export interface TokenAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.Token';
  value: TokenAmino;
}
/** @deprecated */
export interface TokenSDKType {
  $typeUrl?: '/thesixnetwork.sixprotocol.tokenmngr.Token';
  name: string;
  base: string;
  maxSupply: CoinSDKType;
  mintee: string;
  creator: string;
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnit {
  /** denom represents the string name of the given denom unit (e.g uatom). */
  denom: string;
  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 1^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   */
  exponent: number;
  /** aliases is a list of string aliases for the given denom */
  aliases: string[];
}
export interface DenomUnitProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.DenomUnit';
  value: Uint8Array;
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnitAmino {
  /** denom represents the string name of the given denom unit (e.g uatom). */
  denom?: string;
  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 1^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   */
  exponent?: number;
  /** aliases is a list of string aliases for the given denom */
  aliases?: string[];
}
export interface DenomUnitAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.DenomUnit';
  value: DenomUnitAmino;
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnitSDKType {
  denom: string;
  exponent: number;
  aliases: string[];
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface Metadata {
  description: string;
  /** denom_units represents the list of DenomUnit's for a given coin */
  denomUnits: DenomUnit[];
  /** base represents the base denom (should be the DenomUnit with exponent = 0). */
  base: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display: string;
  /**
   * name defines the name of the token (eg: Cosmos Atom)
   * 
   * Since: cosmos-sdk 0.43
   */
  name: string;
  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   * 
   * Since: cosmos-sdk 0.43
   */
  symbol: string;
}
export interface MetadataProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Metadata';
  value: Uint8Array;
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface MetadataAmino {
  description?: string;
  /** denom_units represents the list of DenomUnit's for a given coin */
  denom_units?: DenomUnitAmino[];
  /** base represents the base denom (should be the DenomUnit with exponent = 0). */
  base?: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display?: string;
  /**
   * name defines the name of the token (eg: Cosmos Atom)
   * 
   * Since: cosmos-sdk 0.43
   */
  name?: string;
  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   * 
   * Since: cosmos-sdk 0.43
   */
  symbol?: string;
}
export interface MetadataAminoMsg {
  type: '/thesixnetwork.sixprotocol.tokenmngr.Metadata';
  value: MetadataAmino;
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface MetadataSDKType {
  description: string;
  denom_units: DenomUnitSDKType[];
  base: string;
  display: string;
  name: string;
  symbol: string;
}
function createBaseToken(): Token {
  return {
    $typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Token',
    name: '',
    base: '',
    maxSupply: Coin.fromPartial({}),
    mintee: '',
    creator: ''
  };
}
export const Token = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Token',
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.base !== '') {
      writer.uint32(18).string(message.base);
    }
    if (message.maxSupply !== undefined) {
      Coin.encode(message.maxSupply, writer.uint32(26).fork()).ldelim();
    }
    if (message.mintee !== '') {
      writer.uint32(34).string(message.mintee);
    }
    if (message.creator !== '') {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.name = reader.string();
        break;
      case 2:
        message.base = reader.string();
        break;
      case 3:
        message.maxSupply = Coin.decode(reader, reader.uint32());
        break;
      case 4:
        message.mintee = reader.string();
        break;
      case 5:
        message.creator = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Token>): Token {
    const message = createBaseToken();
    message.name = object.name ?? '';
    message.base = object.base ?? '';
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Coin.fromPartial(object.maxSupply) : undefined;
    message.mintee = object.mintee ?? '';
    message.creator = object.creator ?? '';
    return message;
  },
  fromAmino(object: TokenAmino): Token {
    const message = createBaseToken();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Coin.fromAmino(object.maxSupply);
    }
    if (object.mintee !== undefined && object.mintee !== null) {
      message.mintee = object.mintee;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: Token): TokenAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    obj.base = message.base === '' ? undefined : message.base;
    obj.maxSupply = message.maxSupply ? Coin.toAmino(message.maxSupply) : undefined;
    obj.mintee = message.mintee === '' ? undefined : message.mintee;
    obj.creator = message.creator === '' ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: TokenAminoMsg): Token {
    return Token.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenProtoMsg): Token {
    return Token.decode(message.value);
  },
  toProto(message: Token): Uint8Array {
    return Token.encode(message).finish();
  },
  toProtoMsg(message: Token): TokenProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Token',
      value: Token.encode(message).finish()
    };
  }
};
function createBaseDenomUnit(): DenomUnit {
  return {
    denom: '',
    exponent: 0,
    aliases: []
  };
}
export const DenomUnit = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.DenomUnit',
  encode(message: DenomUnit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }
    for (const v of message.aliases) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DenomUnit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.denom = reader.string();
        break;
      case 2:
        message.exponent = reader.uint32();
        break;
      case 3:
        message.aliases.push(reader.string());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DenomUnit>): DenomUnit {
    const message = createBaseDenomUnit();
    message.denom = object.denom ?? '';
    message.exponent = object.exponent ?? 0;
    message.aliases = object.aliases?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DenomUnitAmino): DenomUnit {
    const message = createBaseDenomUnit();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    message.aliases = object.aliases?.map(e => e) || [];
    return message;
  },
  toAmino(message: DenomUnit): DenomUnitAmino {
    const obj: any = {};
    obj.denom = message.denom === '' ? undefined : message.denom;
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    if (message.aliases) {
      obj.aliases = message.aliases.map(e => e);
    } else {
      obj.aliases = message.aliases;
    }
    return obj;
  },
  fromAminoMsg(object: DenomUnitAminoMsg): DenomUnit {
    return DenomUnit.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomUnitProtoMsg): DenomUnit {
    return DenomUnit.decode(message.value);
  },
  toProto(message: DenomUnit): Uint8Array {
    return DenomUnit.encode(message).finish();
  },
  toProtoMsg(message: DenomUnit): DenomUnitProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.DenomUnit',
      value: DenomUnit.encode(message).finish()
    };
  }
};
function createBaseMetadata(): Metadata {
  return {
    description: '',
    denomUnits: [],
    base: '',
    display: '',
    name: '',
    symbol: ''
  };
}
export const Metadata = {
  typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Metadata',
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== '') {
      writer.uint32(10).string(message.description);
    }
    for (const v of message.denomUnits) {
      DenomUnit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.base !== '') {
      writer.uint32(26).string(message.base);
    }
    if (message.display !== '') {
      writer.uint32(34).string(message.display);
    }
    if (message.name !== '') {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== '') {
      writer.uint32(50).string(message.symbol);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.description = reader.string();
        break;
      case 2:
        message.denomUnits.push(DenomUnit.decode(reader, reader.uint32()));
        break;
      case 3:
        message.base = reader.string();
        break;
      case 4:
        message.display = reader.string();
        break;
      case 5:
        message.name = reader.string();
        break;
      case 6:
        message.symbol = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.description = object.description ?? '';
    message.denomUnits = object.denomUnits?.map(e => DenomUnit.fromPartial(e)) || [];
    message.base = object.base ?? '';
    message.display = object.display ?? '';
    message.name = object.name ?? '';
    message.symbol = object.symbol ?? '';
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    const message = createBaseMetadata();
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.denomUnits = object.denom_units?.map(e => DenomUnit.fromAmino(e)) || [];
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.display !== undefined && object.display !== null) {
      message.display = object.display;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    return message;
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.description = message.description === '' ? undefined : message.description;
    if (message.denomUnits) {
      obj.denom_units = message.denomUnits.map(e => e ? DenomUnit.toAmino(e) : undefined);
    } else {
      obj.denom_units = message.denomUnits;
    }
    obj.base = message.base === '' ? undefined : message.base;
    obj.display = message.display === '' ? undefined : message.display;
    obj.name = message.name === '' ? undefined : message.name;
    obj.symbol = message.symbol === '' ? undefined : message.symbol;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.tokenmngr.Metadata',
      value: Metadata.encode(message).finish()
    };
  }
};