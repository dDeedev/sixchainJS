//@ts-nocheck
import * as _m0 from 'protobufjs/minimal';

import { Any, AnyAmino, AnySDKType } from '../google/protobuf/any';
import { Action, ActionAmino, ActionSDKType } from './action';
import { VirtualAction, VirtualActionAmino, VirtualActionSDKType } from './virtual_action';
import { RegistryStatus,VirtualSchemaRegistryRequest, VirtualSchemaRegistryRequestAmino, VirtualSchemaRegistryRequestSDKType } from './virtual_schema';
export enum AttributeLocation {
  NFT_ATTRIBUTE = 0,
  TOKEN_ATTRIBUTE = 1,
  UNRECOGNIZED = -1,
}
export const AttributeLocationSDKType = AttributeLocation;
export const AttributeLocationAmino = AttributeLocation;
export function attributeLocationFromJSON(object: any): AttributeLocation {
  switch (object) {
  case 0:
  case 'NFT_ATTRIBUTE':
    return AttributeLocation.NFT_ATTRIBUTE;
  case 1:
  case 'TOKEN_ATTRIBUTE':
    return AttributeLocation.TOKEN_ATTRIBUTE;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return AttributeLocation.UNRECOGNIZED;
  }
}
export function attributeLocationToJSON(object: AttributeLocation): string {
  switch (object) {
  case AttributeLocation.NFT_ATTRIBUTE:
    return 'NFT_ATTRIBUTE';
  case AttributeLocation.TOKEN_ATTRIBUTE:
    return 'TOKEN_ATTRIBUTE';
  case AttributeLocation.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
export enum AuthorizeTo {
  SYSTEM = 0,
  ALL = 1,
  UNRECOGNIZED = -1,
}
export const AuthorizeToSDKType = AuthorizeTo;
export const AuthorizeToAmino = AuthorizeTo;
export function authorizeToFromJSON(object: any): AuthorizeTo {
  switch (object) {
  case 0:
  case 'SYSTEM':
    return AuthorizeTo.SYSTEM;
  case 1:
  case 'ALL':
    return AuthorizeTo.ALL;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return AuthorizeTo.UNRECOGNIZED;
  }
}
export function authorizeToToJSON(object: AuthorizeTo): string {
  switch (object) {
  case AuthorizeTo.SYSTEM:
    return 'SYSTEM';
  case AuthorizeTo.ALL:
    return 'ALL';
  case AuthorizeTo.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
export enum FeeSubject {
  CREATE_NFT_SCHEMA = 0,
  UNRECOGNIZED = -1,
}
export const FeeSubjectSDKType = FeeSubject;
export const FeeSubjectAmino = FeeSubject;
export function feeSubjectFromJSON(object: any): FeeSubject {
  switch (object) {
  case 0:
  case 'CREATE_NFT_SCHEMA':
    return FeeSubject.CREATE_NFT_SCHEMA;
  case -1:
  case 'UNRECOGNIZED':
  default:
    return FeeSubject.UNRECOGNIZED;
  }
}
export function feeSubjectToJSON(object: FeeSubject): string {
  switch (object) {
  case FeeSubject.CREATE_NFT_SCHEMA:
    return 'CREATE_NFT_SCHEMA';
  case FeeSubject.UNRECOGNIZED:
  default:
    return 'UNRECOGNIZED';
  }
}
export interface MsgCreateNFTSchema {
  creator: string;
  nftSchemaBase64: string;
}
export interface MsgCreateNFTSchemaProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchema';
  value: Uint8Array;
}
export interface MsgCreateNFTSchemaAmino {
  creator?: string;
  nftSchemaBase64?: string;
}
export interface MsgCreateNFTSchemaAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchema';
  value: MsgCreateNFTSchemaAmino;
}
export interface MsgCreateNFTSchemaSDKType {
  creator: string;
  nftSchemaBase64: string;
}
export interface MsgCreateNFTSchemaResponse {
  code: string;
}
export interface MsgCreateNFTSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchemaResponse';
  value: Uint8Array;
}
export interface MsgCreateNFTSchemaResponseAmino {
  code?: string;
}
export interface MsgCreateNFTSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchemaResponse';
  value: MsgCreateNFTSchemaResponseAmino;
}
export interface MsgCreateNFTSchemaResponseSDKType {
  code: string;
}
export interface MsgCreateMetadata {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  base64NFTData: string;
}
export interface MsgCreateMetadataProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadata';
  value: Uint8Array;
}
export interface MsgCreateMetadataAmino {
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string;
  base64NFTData?: string;
}
export interface MsgCreateMetadataAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadata';
  value: MsgCreateMetadataAmino;
}
export interface MsgCreateMetadataSDKType {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  base64NFTData: string;
}
export interface MsgCreateMetadataResponse {
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgCreateMetadataResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadataResponse';
  value: Uint8Array;
}
export interface MsgCreateMetadataResponseAmino {
  nftSchemaCode?: string;
  tokenId?: string;
}
export interface MsgCreateMetadataResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadataResponse';
  value: MsgCreateMetadataResponseAmino;
}
export interface MsgCreateMetadataResponseSDKType {
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgCreateMultiMetadata {
  creator: string;
  nftSchemaCode: string;
  tokenId: string[];
  base64NFTData: string;
}
export interface MsgCreateMultiMetadataProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadata';
  value: Uint8Array;
}
export interface MsgCreateMultiMetadataAmino {
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string[];
  base64NFTData?: string;
}
export interface MsgCreateMultiMetadataAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadata';
  value: MsgCreateMultiMetadataAmino;
}
export interface MsgCreateMultiMetadataSDKType {
  creator: string;
  nftSchemaCode: string;
  tokenId: string[];
  base64NFTData: string;
}
export interface MsgCreateMultiMetadataResponse {
  nftSchemaCode: string;
  tokenId: string[];
}
export interface MsgCreateMultiMetadataResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadataResponse';
  value: Uint8Array;
}
export interface MsgCreateMultiMetadataResponseAmino {
  nftSchemaCode?: string;
  tokenId?: string[];
}
export interface MsgCreateMultiMetadataResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadataResponse';
  value: MsgCreateMultiMetadataResponseAmino;
}
export interface MsgCreateMultiMetadataResponseSDKType {
  nftSchemaCode: string;
  tokenId: string[];
}
export interface OpenseaAttribute {
  traitType: string;
  value?: Any;
}
export interface OpenseaAttributeProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.OpenseaAttribute';
  value: Uint8Array;
}
export interface OpenseaAttributeAmino {
  trait_type?: string;
  value?: AnyAmino;
}
export interface OpenseaAttributeAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.OpenseaAttribute';
  value: OpenseaAttributeAmino;
}
export interface OpenseaAttributeSDKType {
  trait_type: string;
  value?: AnySDKType;
}
export interface UpdatedOpenseaAttributes {
  attributes: OpenseaAttribute[];
}
export interface UpdatedOpenseaAttributesProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.UpdatedOpenseaAttributes';
  value: Uint8Array;
}
export interface UpdatedOpenseaAttributesAmino {
  attributes?: OpenseaAttributeAmino[];
}
export interface UpdatedOpenseaAttributesAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.UpdatedOpenseaAttributes';
  value: UpdatedOpenseaAttributesAmino;
}
export interface UpdatedOpenseaAttributesSDKType {
  attributes: OpenseaAttributeSDKType[];
}
export interface UpdatedOriginData {
  opensea?: UpdatedOpenseaAttributes;
}
export interface UpdatedOriginDataProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.UpdatedOriginData';
  value: Uint8Array;
}
export interface UpdatedOriginDataAmino {
  opensea?: UpdatedOpenseaAttributesAmino;
}
export interface UpdatedOriginDataAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.UpdatedOriginData';
  value: UpdatedOriginDataAmino;
}
export interface UpdatedOriginDataSDKType {
  opensea?: UpdatedOpenseaAttributesSDKType;
}
/** ActionParameter */
export interface ActionParameter {
  name: string;
  value: string;
}
export interface ActionParameterProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionParameter';
  value: Uint8Array;
}
/** ActionParameter */
export interface ActionParameterAmino {
  name?: string;
  value?: string;
}
export interface ActionParameterAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.ActionParameter';
  value: ActionParameterAmino;
}
/** ActionParameter */
export interface ActionParameterSDKType {
  name: string;
  value: string;
}
export interface MsgPerformActionByAdmin {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
  action: string;
  refId: string;
  parameters: ActionParameter[];
}
export interface MsgPerformActionByAdminProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdmin';
  value: Uint8Array;
}
export interface MsgPerformActionByAdminAmino {
  creator?: string;
  nft_schema_code?: string;
  tokenId?: string;
  action?: string;
  ref_id?: string;
  parameters?: ActionParameterAmino[];
}
export interface MsgPerformActionByAdminAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdmin';
  value: MsgPerformActionByAdminAmino;
}
export interface MsgPerformActionByAdminSDKType {
  creator: string;
  nft_schema_code: string;
  tokenId: string;
  action: string;
  ref_id: string;
  parameters: ActionParameterSDKType[];
}
export interface MsgPerformActionByAdminResponse {
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgPerformActionByAdminResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdminResponse';
  value: Uint8Array;
}
export interface MsgPerformActionByAdminResponseAmino {
  nft_schema_code?: string;
  token_id?: string;
}
export interface MsgPerformActionByAdminResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdminResponse';
  value: MsgPerformActionByAdminResponseAmino;
}
export interface MsgPerformActionByAdminResponseSDKType {
  nft_schema_code: string;
  token_id: string;
}
export interface MsgAddAttribute {
  creator: string;
  code: string;
  location: AttributeLocation;
  base64NewAttriuteDefenition: string;
}
export interface MsgAddAttributeProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttribute';
  value: Uint8Array;
}
export interface MsgAddAttributeAmino {
  creator?: string;
  code?: string;
  location?: AttributeLocation;
  base64NewAttriuteDefenition?: string;
}
export interface MsgAddAttributeAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttribute';
  value: MsgAddAttributeAmino;
}
export interface MsgAddAttributeSDKType {
  creator: string;
  code: string;
  location: AttributeLocation;
  base64NewAttriuteDefenition: string;
}
export interface MsgAddAttributeResponse {
  code: string;
  name: string;
}
export interface MsgAddAttributeResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttributeResponse';
  value: Uint8Array;
}
export interface MsgAddAttributeResponseAmino {
  code?: string;
  name?: string;
}
export interface MsgAddAttributeResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttributeResponse';
  value: MsgAddAttributeResponseAmino;
}
export interface MsgAddAttributeResponseSDKType {
  code: string;
  name: string;
}
export interface MsgAddAction {
  creator: string;
  code: string;
  base64NewAction: string;
}
export interface MsgAddActionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAction';
  value: Uint8Array;
}
export interface MsgAddActionAmino {
  creator?: string;
  code?: string;
  base64NewAction?: string;
}
export interface MsgAddActionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAction';
  value: MsgAddActionAmino;
}
export interface MsgAddActionSDKType {
  creator: string;
  code: string;
  base64NewAction: string;
}
export interface MsgAddActionResponse {
  code: string;
  name: string;
}
export interface MsgAddActionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddActionResponse';
  value: Uint8Array;
}
export interface MsgAddActionResponseAmino {
  code?: string;
  name?: string;
}
export interface MsgAddActionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgAddActionResponse';
  value: MsgAddActionResponseAmino;
}
export interface MsgAddActionResponseSDKType {
  code: string;
  name: string;
}
export interface MsgSetBaseUri {
  creator: string;
  code: string;
  newBaseUri: string;
}
export interface MsgSetBaseUriProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUri';
  value: Uint8Array;
}
export interface MsgSetBaseUriAmino {
  creator?: string;
  code?: string;
  newBaseUri?: string;
}
export interface MsgSetBaseUriAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUri';
  value: MsgSetBaseUriAmino;
}
export interface MsgSetBaseUriSDKType {
  creator: string;
  code: string;
  newBaseUri: string;
}
export interface MsgSetBaseUriResponse {
  code: string;
  uri: string;
}
export interface MsgSetBaseUriResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUriResponse';
  value: Uint8Array;
}
export interface MsgSetBaseUriResponseAmino {
  code?: string;
  uri?: string;
}
export interface MsgSetBaseUriResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUriResponse';
  value: MsgSetBaseUriResponseAmino;
}
export interface MsgSetBaseUriResponseSDKType {
  code: string;
  uri: string;
}
export interface MsgToggleAction {
  creator: string;
  code: string;
  action: string;
  status: boolean;
}
export interface MsgToggleActionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleAction';
  value: Uint8Array;
}
export interface MsgToggleActionAmino {
  creator?: string;
  code?: string;
  action?: string;
  status?: boolean;
}
export interface MsgToggleActionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleAction';
  value: MsgToggleActionAmino;
}
export interface MsgToggleActionSDKType {
  creator: string;
  code: string;
  action: string;
  status: boolean;
}
export interface MsgToggleActionResponse {
  code: string;
  name: string;
  status: boolean;
}
export interface MsgToggleActionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleActionResponse';
  value: Uint8Array;
}
export interface MsgToggleActionResponseAmino {
  code?: string;
  name?: string;
  status?: boolean;
}
export interface MsgToggleActionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleActionResponse';
  value: MsgToggleActionResponseAmino;
}
export interface MsgToggleActionResponseSDKType {
  code: string;
  name: string;
  status: boolean;
}
export interface MsgChangeSchemaOwner {
  creator: string;
  nftSchemaCode: string;
  newOwner: string;
}
export interface MsgChangeSchemaOwnerProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwner';
  value: Uint8Array;
}
export interface MsgChangeSchemaOwnerAmino {
  creator?: string;
  nftSchemaCode?: string;
  newOwner?: string;
}
export interface MsgChangeSchemaOwnerAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwner';
  value: MsgChangeSchemaOwnerAmino;
}
export interface MsgChangeSchemaOwnerSDKType {
  creator: string;
  nftSchemaCode: string;
  newOwner: string;
}
export interface MsgChangeSchemaOwnerResponse {
  nftSchemaCode: string;
  newOwner: string;
}
export interface MsgChangeSchemaOwnerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwnerResponse';
  value: Uint8Array;
}
export interface MsgChangeSchemaOwnerResponseAmino {
  nftSchemaCode?: string;
  newOwner?: string;
}
export interface MsgChangeSchemaOwnerResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwnerResponse';
  value: MsgChangeSchemaOwnerResponseAmino;
}
export interface MsgChangeSchemaOwnerResponseSDKType {
  nftSchemaCode: string;
  newOwner: string;
}
export interface MsgResyncAttributesResponse {
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgResyncAttributesResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributesResponse';
  value: Uint8Array;
}
export interface MsgResyncAttributesResponseAmino {
  nftSchemaCode?: string;
  tokenId?: string;
}
export interface MsgResyncAttributesResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributesResponse';
  value: MsgResyncAttributesResponseAmino;
}
export interface MsgResyncAttributesResponseSDKType {
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgShowAttributes {
  creator: string;
  nftSchemaCode: string;
  show: boolean;
  attributeNames: string[];
}
export interface MsgShowAttributesProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributes';
  value: Uint8Array;
}
export interface MsgShowAttributesAmino {
  creator?: string;
  nftSchemaCode?: string;
  show?: boolean;
  attributeNames?: string[];
}
export interface MsgShowAttributesAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributes';
  value: MsgShowAttributesAmino;
}
export interface MsgShowAttributesSDKType {
  creator: string;
  nftSchemaCode: string;
  show: boolean;
  attributeNames: string[];
}
export interface MsgShowAttributesResponse {
  nftSchema: string;
}
export interface MsgShowAttributesResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributesResponse';
  value: Uint8Array;
}
export interface MsgShowAttributesResponseAmino {
  nftSchema?: string;
}
export interface MsgShowAttributesResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributesResponse';
  value: MsgShowAttributesResponseAmino;
}
export interface MsgShowAttributesResponseSDKType {
  nftSchema: string;
}
export interface MsgResyncAttributes {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgResyncAttributesProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributes';
  value: Uint8Array;
}
export interface MsgResyncAttributesAmino {
  creator?: string;
  nftSchemaCode?: string;
  tokenId?: string;
}
export interface MsgResyncAttributesAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributes';
  value: MsgResyncAttributesAmino;
}
export interface MsgResyncAttributesSDKType {
  creator: string;
  nftSchemaCode: string;
  tokenId: string;
}
export interface MsgSetFeeConfig {
  creator: string;
  newFeeConfigBase64: string;
  feeSubject: FeeSubject;
}
export interface MsgSetFeeConfigProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfig';
  value: Uint8Array;
}
export interface MsgSetFeeConfigAmino {
  creator?: string;
  newFeeConfigBase64?: string;
  feeSubject?: FeeSubject;
}
export interface MsgSetFeeConfigAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfig';
  value: MsgSetFeeConfigAmino;
}
export interface MsgSetFeeConfigSDKType {
  creator: string;
  newFeeConfigBase64: string;
  feeSubject: FeeSubject;
}
export interface MsgSetFeeConfigResponse {}
export interface MsgSetFeeConfigResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfigResponse';
  value: Uint8Array;
}
export interface MsgSetFeeConfigResponseAmino {}
export interface MsgSetFeeConfigResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfigResponse';
  value: MsgSetFeeConfigResponseAmino;
}
export interface MsgSetFeeConfigResponseSDKType {}
export interface MsgSetMintauth {
  creator: string;
  nftSchemaCode: string;
  authorizeTo: AuthorizeTo;
}
export interface MsgSetMintauthProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauth';
  value: Uint8Array;
}
export interface MsgSetMintauthAmino {
  creator?: string;
  nftSchemaCode?: string;
  authorizeTo?: AuthorizeTo;
}
export interface MsgSetMintauthAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauth';
  value: MsgSetMintauthAmino;
}
export interface MsgSetMintauthSDKType {
  creator: string;
  nftSchemaCode: string;
  authorizeTo: AuthorizeTo;
}
export interface MsgSetMintauthResponse {
  nftSchemaCode: string;
}
export interface MsgSetMintauthResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauthResponse';
  value: Uint8Array;
}
export interface MsgSetMintauthResponseAmino {
  nftSchemaCode?: string;
}
export interface MsgSetMintauthResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauthResponse';
  value: MsgSetMintauthResponseAmino;
}
export interface MsgSetMintauthResponseSDKType {
  nftSchemaCode: string;
}
export interface MsgChangeOrgOwner {
  creator: string;
  orgName: string;
  toNewOwner: string;
}
export interface MsgChangeOrgOwnerProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwner';
  value: Uint8Array;
}
export interface MsgChangeOrgOwnerAmino {
  creator?: string;
  orgName?: string;
  toNewOwner?: string;
}
export interface MsgChangeOrgOwnerAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwner';
  value: MsgChangeOrgOwnerAmino;
}
export interface MsgChangeOrgOwnerSDKType {
  creator: string;
  orgName: string;
  toNewOwner: string;
}
export interface MsgChangeOrgOwnerResponse {
  orgName: string;
  oldOwner: string;
  newOwner: string;
}
export interface MsgChangeOrgOwnerResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwnerResponse';
  value: Uint8Array;
}
export interface MsgChangeOrgOwnerResponseAmino {
  orgName?: string;
  oldOwner?: string;
  newOwner?: string;
}
export interface MsgChangeOrgOwnerResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwnerResponse';
  value: MsgChangeOrgOwnerResponseAmino;
}
export interface MsgChangeOrgOwnerResponseSDKType {
  orgName: string;
  oldOwner: string;
  newOwner: string;
}
export interface MsgSetUriRetrievalMethod {
  creator: string;
  schemaCode: string;
  newMethod: number;
}
export interface MsgSetUriRetrievalMethodProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethod';
  value: Uint8Array;
}
export interface MsgSetUriRetrievalMethodAmino {
  creator?: string;
  schemaCode?: string;
  newMethod?: number;
}
export interface MsgSetUriRetrievalMethodAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethod';
  value: MsgSetUriRetrievalMethodAmino;
}
export interface MsgSetUriRetrievalMethodSDKType {
  creator: string;
  schemaCode: string;
  newMethod: number;
}
export interface MsgSetUriRetrievalMethodResponse {
  schemaCode: string;
  newMethod: string;
}
export interface MsgSetUriRetrievalMethodResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethodResponse';
  value: Uint8Array;
}
export interface MsgSetUriRetrievalMethodResponseAmino {
  schemaCode?: string;
  newMethod?: string;
}
export interface MsgSetUriRetrievalMethodResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethodResponse';
  value: MsgSetUriRetrievalMethodResponseAmino;
}
export interface MsgSetUriRetrievalMethodResponseSDKType {
  schemaCode: string;
  newMethod: string;
}
export interface MsgSetOriginChain {
  creator: string;
  schemaCode: string;
  newOriginChain: string;
}
export interface MsgSetOriginChainProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChain';
  value: Uint8Array;
}
export interface MsgSetOriginChainAmino {
  creator?: string;
  schemaCode?: string;
  newOriginChain?: string;
}
export interface MsgSetOriginChainAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChain';
  value: MsgSetOriginChainAmino;
}
export interface MsgSetOriginChainSDKType {
  creator: string;
  schemaCode: string;
  newOriginChain: string;
}
export interface MsgSetOriginChainResponse {
  schemaCode: string;
  newOriginChain: string;
}
export interface MsgSetOriginChainResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChainResponse';
  value: Uint8Array;
}
export interface MsgSetOriginChainResponseAmino {
  schemaCode?: string;
  newOriginChain?: string;
}
export interface MsgSetOriginChainResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChainResponse';
  value: MsgSetOriginChainResponseAmino;
}
export interface MsgSetOriginChainResponseSDKType {
  schemaCode: string;
  newOriginChain: string;
}
export interface MsgSetOriginContract {
  creator: string;
  schemaCode: string;
  newContractAddress: string;
}
export interface MsgSetOriginContractProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContract';
  value: Uint8Array;
}
export interface MsgSetOriginContractAmino {
  creator?: string;
  schemaCode?: string;
  newContractAddress?: string;
}
export interface MsgSetOriginContractAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContract';
  value: MsgSetOriginContractAmino;
}
export interface MsgSetOriginContractSDKType {
  creator: string;
  schemaCode: string;
  newContractAddress: string;
}
export interface MsgSetOriginContractResponse {
  schemaCode: string;
  newContractAddress: string;
}
export interface MsgSetOriginContractResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContractResponse';
  value: Uint8Array;
}
export interface MsgSetOriginContractResponseAmino {
  schemaCode?: string;
  newContractAddress?: string;
}
export interface MsgSetOriginContractResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContractResponse';
  value: MsgSetOriginContractResponseAmino;
}
export interface MsgSetOriginContractResponseSDKType {
  schemaCode: string;
  newContractAddress: string;
}
export interface MsgSetAttributeOveriding {
  creator: string;
  schemaCode: string;
  newOveridingType: number;
}
export interface MsgSetAttributeOveridingProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveriding';
  value: Uint8Array;
}
export interface MsgSetAttributeOveridingAmino {
  creator?: string;
  schemaCode?: string;
  newOveridingType?: number;
}
export interface MsgSetAttributeOveridingAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveriding';
  value: MsgSetAttributeOveridingAmino;
}
export interface MsgSetAttributeOveridingSDKType {
  creator: string;
  schemaCode: string;
  newOveridingType: number;
}
export interface MsgSetAttributeOveridingResponse {
  schemaCode: string;
  newOveriding: string;
}
export interface MsgSetAttributeOveridingResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveridingResponse';
  value: Uint8Array;
}
export interface MsgSetAttributeOveridingResponseAmino {
  schemaCode?: string;
  newOveriding?: string;
}
export interface MsgSetAttributeOveridingResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveridingResponse';
  value: MsgSetAttributeOveridingResponseAmino;
}
export interface MsgSetAttributeOveridingResponseSDKType {
  schemaCode: string;
  newOveriding: string;
}
export interface MsgSetMetadataFormat {
  creator: string;
  schemaCode: string;
  newFormat: string;
}
export interface MsgSetMetadataFormatProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormat';
  value: Uint8Array;
}
export interface MsgSetMetadataFormatAmino {
  creator?: string;
  schemaCode?: string;
  newFormat?: string;
}
export interface MsgSetMetadataFormatAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormat';
  value: MsgSetMetadataFormatAmino;
}
export interface MsgSetMetadataFormatSDKType {
  creator: string;
  schemaCode: string;
  newFormat: string;
}
export interface MsgSetMetadataFormatResponse {
  schemaCode: string;
  newFormat: string;
}
export interface MsgSetMetadataFormatResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormatResponse';
  value: Uint8Array;
}
export interface MsgSetMetadataFormatResponseAmino {
  schemaCode?: string;
  newFormat?: string;
}
export interface MsgSetMetadataFormatResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormatResponse';
  value: MsgSetMetadataFormatResponseAmino;
}
export interface MsgSetMetadataFormatResponseSDKType {
  schemaCode: string;
  newFormat: string;
}
export interface MsgCreateActionExecutor {
  creator: string;
  nftSchemaCode: string;
  executorAddress: string;
}
export interface MsgCreateActionExecutorProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutor';
  value: Uint8Array;
}
export interface MsgCreateActionExecutorAmino {
  creator?: string;
  nftSchemaCode?: string;
  executorAddress?: string;
}
export interface MsgCreateActionExecutorAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutor';
  value: MsgCreateActionExecutorAmino;
}
export interface MsgCreateActionExecutorSDKType {
  creator: string;
  nftSchemaCode: string;
  executorAddress: string;
}
export interface MsgCreateActionExecutorResponse {
  nftSchemaCode: string;
  executorAddress: string;
}
export interface MsgCreateActionExecutorResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutorResponse';
  value: Uint8Array;
}
export interface MsgCreateActionExecutorResponseAmino {
  nftSchemaCode?: string;
  executorAddress?: string;
}
export interface MsgCreateActionExecutorResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutorResponse';
  value: MsgCreateActionExecutorResponseAmino;
}
export interface MsgCreateActionExecutorResponseSDKType {
  nftSchemaCode: string;
  executorAddress: string;
}
export interface MsgUpdateActionExecutor {
  creator: string;
  nftSchemaCode: string;
  executorAddress: string;
}
export interface MsgUpdateActionExecutorProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionExecutor';
  value: Uint8Array;
}
export interface MsgUpdateActionExecutorAmino {
  creator?: string;
  nftSchemaCode?: string;
  executorAddress?: string;
}
export interface MsgUpdateActionExecutorAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionExecutor';
  value: MsgUpdateActionExecutorAmino;
}
export interface MsgUpdateActionExecutorSDKType {
  creator: string;
  nftSchemaCode: string;
  executorAddress: string;
}
export interface MsgUpdateActionExecutorResponse {
  nftSchemaCode: string;
  executorAddress: string;
}
export interface MsgUpdateActionExecutorResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionExecutorResponse';
  value: Uint8Array;
}
export interface MsgUpdateActionExecutorResponseAmino {
  nftSchemaCode?: string;
  executorAddress?: string;
}
export interface MsgUpdateActionExecutorResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionExecutorResponse';
  value: MsgUpdateActionExecutorResponseAmino;
}
export interface MsgUpdateActionExecutorResponseSDKType {
  nftSchemaCode: string;
  executorAddress: string;
}
export interface MsgDeleteActionExecutor {
  creator: string;
  nftSchemaCode: string;
  executorAddress: string;
}
export interface MsgDeleteActionExecutorProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutor';
  value: Uint8Array;
}
export interface MsgDeleteActionExecutorAmino {
  creator?: string;
  nftSchemaCode?: string;
  executorAddress?: string;
}
export interface MsgDeleteActionExecutorAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutor';
  value: MsgDeleteActionExecutorAmino;
}
export interface MsgDeleteActionExecutorSDKType {
  creator: string;
  nftSchemaCode: string;
  executorAddress: string;
}
export interface MsgDeleteActionExecutorResponse {
  nftSchemaCode: string;
  executorAddress: string;
}
export interface MsgDeleteActionExecutorResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutorResponse';
  value: Uint8Array;
}
export interface MsgDeleteActionExecutorResponseAmino {
  nftSchemaCode?: string;
  executorAddress?: string;
}
export interface MsgDeleteActionExecutorResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutorResponse';
  value: MsgDeleteActionExecutorResponseAmino;
}
export interface MsgDeleteActionExecutorResponseSDKType {
  nftSchemaCode: string;
  executorAddress: string;
}
export interface MsgUpdateSchemaAttribute {
  creator: string;
  nftSchemaCode: string;
  base64UpdateAttriuteDefenition: string;
}
export interface MsgUpdateSchemaAttributeProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttribute';
  value: Uint8Array;
}
export interface MsgUpdateSchemaAttributeAmino {
  creator?: string;
  nftSchemaCode?: string;
  Base64UpdateAttriuteDefenition?: string;
}
export interface MsgUpdateSchemaAttributeAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttribute';
  value: MsgUpdateSchemaAttributeAmino;
}
export interface MsgUpdateSchemaAttributeSDKType {
  creator: string;
  nftSchemaCode: string;
  Base64UpdateAttriuteDefenition: string;
}
export interface MsgUpdateSchemaAttributeResponse {
  nftSchemaCode: string;
  name: string;
}
export interface MsgUpdateSchemaAttributeResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttributeResponse';
  value: Uint8Array;
}
export interface MsgUpdateSchemaAttributeResponseAmino {
  nftSchemaCode?: string;
  name?: string;
}
export interface MsgUpdateSchemaAttributeResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttributeResponse';
  value: MsgUpdateSchemaAttributeResponseAmino;
}
export interface MsgUpdateSchemaAttributeResponseSDKType {
  nftSchemaCode: string;
  name: string;
}
export interface MsgUpdateAction {
  creator: string;
  nftSchemaCode: string;
  base64UpdateAction: string;
}
export interface MsgUpdateActionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateAction';
  value: Uint8Array;
}
export interface MsgUpdateActionAmino {
  creator?: string;
  nftSchemaCode?: string;
  base64UpdateAction?: string;
}
export interface MsgUpdateActionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateAction';
  value: MsgUpdateActionAmino;
}
export interface MsgUpdateActionSDKType {
  creator: string;
  nftSchemaCode: string;
  base64UpdateAction: string;
}
export interface MsgUpdateActionResponse {
  nftSchemaCode: string;
  name: string;
}
export interface MsgUpdateActionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionResponse';
  value: Uint8Array;
}
export interface MsgUpdateActionResponseAmino {
  nftSchemaCode?: string;
  name?: string;
}
export interface MsgUpdateActionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionResponse';
  value: MsgUpdateActionResponseAmino;
}
export interface MsgUpdateActionResponseSDKType {
  nftSchemaCode: string;
  name: string;
}
export interface MsgCreateVirtualAction {
  creator: string;
  nftSchemaCode: string;
  newActions: Action[];
}
export interface MsgCreateVirtualActionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualAction';
  value: Uint8Array;
}
export interface MsgCreateVirtualActionAmino {
  creator?: string;
  nftSchemaCode?: string;
  newActions?: ActionAmino[];
}
export interface MsgCreateVirtualActionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualAction';
  value: MsgCreateVirtualActionAmino;
}
export interface MsgCreateVirtualActionSDKType {
  creator: string;
  nftSchemaCode: string;
  newActions: ActionSDKType[];
}
export interface MsgCreateVirtualActionResponse {
  nftSchemaCode: string;
  virtualAction: VirtualAction[];
}
export interface MsgCreateVirtualActionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualActionResponse';
  value: Uint8Array;
}
export interface MsgCreateVirtualActionResponseAmino {
  nftSchemaCode?: string;
  virtualAction?: VirtualActionAmino[];
}
export interface MsgCreateVirtualActionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualActionResponse';
  value: MsgCreateVirtualActionResponseAmino;
}
export interface MsgCreateVirtualActionResponseSDKType {
  nftSchemaCode: string;
  virtualAction: VirtualActionSDKType[];
}
export interface MsgUpdateVirtualAction {
  creator: string;
  nftSchemaCode: string;
  newActions: Action[];
}
export interface MsgUpdateVirtualActionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualAction';
  value: Uint8Array;
}
export interface MsgUpdateVirtualActionAmino {
  creator?: string;
  nftSchemaCode?: string;
  newActions?: ActionAmino[];
}
export interface MsgUpdateVirtualActionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualAction';
  value: MsgUpdateVirtualActionAmino;
}
export interface MsgUpdateVirtualActionSDKType {
  creator: string;
  nftSchemaCode: string;
  newActions: ActionSDKType[];
}
export interface MsgUpdateVirtualActionResponse {
  nftSchemaCode: string;
  virtualAction: VirtualAction[];
}
export interface MsgUpdateVirtualActionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualActionResponse';
  value: Uint8Array;
}
export interface MsgUpdateVirtualActionResponseAmino {
  nftSchemaCode?: string;
  virtualAction?: VirtualActionAmino[];
}
export interface MsgUpdateVirtualActionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualActionResponse';
  value: MsgUpdateVirtualActionResponseAmino;
}
export interface MsgUpdateVirtualActionResponseSDKType {
  nftSchemaCode: string;
  virtualAction: VirtualActionSDKType[];
}
export interface MsgDeleteVirtualAction {
  creator: string;
  nftSchemaCode: string;
  name: string;
}
export interface MsgDeleteVirtualActionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualAction';
  value: Uint8Array;
}
export interface MsgDeleteVirtualActionAmino {
  creator?: string;
  nftSchemaCode?: string;
  name?: string;
}
export interface MsgDeleteVirtualActionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualAction';
  value: MsgDeleteVirtualActionAmino;
}
export interface MsgDeleteVirtualActionSDKType {
  creator: string;
  nftSchemaCode: string;
  name: string;
}
export interface MsgDeleteVirtualActionResponse {
  creator: string;
  status: string;
}
export interface MsgDeleteVirtualActionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualActionResponse';
  value: Uint8Array;
}
export interface MsgDeleteVirtualActionResponseAmino {
  creator?: string;
  status?: string;
}
export interface MsgDeleteVirtualActionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualActionResponse';
  value: MsgDeleteVirtualActionResponseAmino;
}
export interface MsgDeleteVirtualActionResponseSDKType {
  creator: string;
  status: string;
}
export interface MsgCreateVirtualSchemaProposal {
  creator: string;
  virtualNftSchemaCode: string;
  registry: VirtualSchemaRegistryRequest[];
}
export interface MsgCreateVirtualSchemaProposalProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaProposal';
  value: Uint8Array;
}
export interface MsgCreateVirtualSchemaProposalAmino {
  creator?: string;
  virtualNftSchemaCode?: string;
  registry?: VirtualSchemaRegistryRequestAmino[];
}
export interface MsgCreateVirtualSchemaProposalAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaProposal';
  value: MsgCreateVirtualSchemaProposalAmino;
}
export interface MsgCreateVirtualSchemaProposalSDKType {
  creator: string;
  virtualNftSchemaCode: string;
  registry: VirtualSchemaRegistryRequestSDKType[];
}
export interface MsgCreateVirtualSchemaResponse {
  id: string;
  virtualNftSchemaCode: string;
}
export interface MsgCreateVirtualSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaResponse';
  value: Uint8Array;
}
export interface MsgCreateVirtualSchemaResponseAmino {
  id?: string;
  virtualNftSchemaCode?: string;
}
export interface MsgCreateVirtualSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaResponse';
  value: MsgCreateVirtualSchemaResponseAmino;
}
export interface MsgCreateVirtualSchemaResponseSDKType {
  id: string;
  virtualNftSchemaCode: string;
}
export interface MsgDeleteVirtualSchema {
  creator: string;
  virtualNftSchemaCode: string;
}
export interface MsgDeleteVirtualSchemaProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchema';
  value: Uint8Array;
}
export interface MsgDeleteVirtualSchemaAmino {
  creator?: string;
  virtualNftSchemaCode?: string;
}
export interface MsgDeleteVirtualSchemaAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchema';
  value: MsgDeleteVirtualSchemaAmino;
}
export interface MsgDeleteVirtualSchemaSDKType {
  creator: string;
  virtualNftSchemaCode: string;
}
export interface MsgDeleteVirtualSchemaResponse {}
export interface MsgDeleteVirtualSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchemaResponse';
  value: Uint8Array;
}
export interface MsgDeleteVirtualSchemaResponseAmino {}
export interface MsgDeleteVirtualSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchemaResponse';
  value: MsgDeleteVirtualSchemaResponseAmino;
}
export interface MsgDeleteVirtualSchemaResponseSDKType {}
export interface MsgVoteCreateVirtualSchema {
  creator: string;
  id: string;
  nftSchemaCode: string;
  option: RegistryStatus;
}
export interface MsgVoteCreateVirtualSchemaProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchema';
  value: Uint8Array;
}
export interface MsgVoteCreateVirtualSchemaAmino {
  creator?: string;
  id?: string;
  nftSchemaCode?: string;
  option?: RegistryStatus;
}
export interface MsgVoteCreateVirtualSchemaAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchema';
  value: MsgVoteCreateVirtualSchemaAmino;
}
export interface MsgVoteCreateVirtualSchemaSDKType {
  creator: string;
  id: string;
  nftSchemaCode: string;
  option: RegistryStatus;
}
export interface MsgVoteCreateVirtualSchemaResponse {}
export interface MsgVoteCreateVirtualSchemaResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchemaResponse';
  value: Uint8Array;
}
export interface MsgVoteCreateVirtualSchemaResponseAmino {}
export interface MsgVoteCreateVirtualSchemaResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchemaResponse';
  value: MsgVoteCreateVirtualSchemaResponseAmino;
}
export interface MsgVoteCreateVirtualSchemaResponseSDKType {}
export interface MsgDisableVirtualSchemaProposal {
  creator: string;
  virtualNftSchemaCode: string;
  proposalExpiredBlock: string;
}
export interface MsgDisableVirtualSchemaProposalProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposal';
  value: Uint8Array;
}
export interface MsgDisableVirtualSchemaProposalAmino {
  creator?: string;
  virtualNftSchemaCode?: string;
  proposalExpiredBlock?: string;
}
export interface MsgDisableVirtualSchemaProposalAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposal';
  value: MsgDisableVirtualSchemaProposalAmino;
}
export interface MsgDisableVirtualSchemaProposalSDKType {
  creator: string;
  virtualNftSchemaCode: string;
  proposalExpiredBlock: string;
}
export interface MsgDisableVirtualSchemaProposalResponse {
  creator: string;
  proposalId: string;
}
export interface MsgDisableVirtualSchemaProposalResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposalResponse';
  value: Uint8Array;
}
export interface MsgDisableVirtualSchemaProposalResponseAmino {
  creator?: string;
  proposalId?: string;
}
export interface MsgDisableVirtualSchemaProposalResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposalResponse';
  value: MsgDisableVirtualSchemaProposalResponseAmino;
}
export interface MsgDisableVirtualSchemaProposalResponseSDKType {
  creator: string;
  proposalId: string;
}
export interface MsgPerformVirtualAction {
  creator: string;
  nftSchemaName: string;
  tokenIdMap: TokenIdMap[];
  action: string;
  refId: string;
  parameters: ActionParameter[];
}
export interface MsgPerformVirtualActionProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualAction';
  value: Uint8Array;
}
export interface MsgPerformVirtualActionAmino {
  creator?: string;
  nftSchemaName?: string;
  tokenIdMap?: TokenIdMapAmino[];
  action?: string;
  refId?: string;
  parameters?: ActionParameterAmino[];
}
export interface MsgPerformVirtualActionAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualAction';
  value: MsgPerformVirtualActionAmino;
}
export interface MsgPerformVirtualActionSDKType {
  creator: string;
  nftSchemaName: string;
  tokenIdMap: TokenIdMapSDKType[];
  action: string;
  refId: string;
  parameters: ActionParameterSDKType[];
}
export interface MsgPerformVirtualActionResponse {
  nftSchemaName: string;
}
export interface MsgPerformVirtualActionResponseProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualActionResponse';
  value: Uint8Array;
}
export interface MsgPerformVirtualActionResponseAmino {
  nftSchemaName?: string;
}
export interface MsgPerformVirtualActionResponseAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualActionResponse';
  value: MsgPerformVirtualActionResponseAmino;
}
export interface MsgPerformVirtualActionResponseSDKType {
  nftSchemaName: string;
}
export interface TokenIdMap {
  nftSchemaName: string;
  tokenId: string;
}
export interface TokenIdMapProtoMsg {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.TokenIdMap';
  value: Uint8Array;
}
export interface TokenIdMapAmino {
  nftSchemaName?: string;
  tokenId?: string;
}
export interface TokenIdMapAminoMsg {
  type: '/thesixnetwork.sixprotocol.nftmngr.TokenIdMap';
  value: TokenIdMapAmino;
}
export interface TokenIdMapSDKType {
  nftSchemaName: string;
  tokenId: string;
}
function createBaseMsgCreateNFTSchema(): MsgCreateNFTSchema {
  return {
    creator: '',
    nftSchemaBase64: ''
  };
}
export const MsgCreateNFTSchema = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchema',
  encode(message: MsgCreateNFTSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaBase64 !== '') {
      writer.uint32(18).string(message.nftSchemaBase64);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNFTSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNFTSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaBase64 = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateNFTSchema>): MsgCreateNFTSchema {
    const message = createBaseMsgCreateNFTSchema();
    message.creator = object.creator ?? '';
    message.nftSchemaBase64 = object.nftSchemaBase64 ?? '';
    return message;
  },
  fromAmino(object: MsgCreateNFTSchemaAmino): MsgCreateNFTSchema {
    const message = createBaseMsgCreateNFTSchema();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaBase64 !== undefined && object.nftSchemaBase64 !== null) {
      message.nftSchemaBase64 = object.nftSchemaBase64;
    }
    return message;
  },
  toAmino(message: MsgCreateNFTSchema): MsgCreateNFTSchemaAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaBase64 = message.nftSchemaBase64 === '' ? undefined : message.nftSchemaBase64;
    return obj;
  },
  fromAminoMsg(object: MsgCreateNFTSchemaAminoMsg): MsgCreateNFTSchema {
    return MsgCreateNFTSchema.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateNFTSchemaProtoMsg): MsgCreateNFTSchema {
    return MsgCreateNFTSchema.decode(message.value);
  },
  toProto(message: MsgCreateNFTSchema): Uint8Array {
    return MsgCreateNFTSchema.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateNFTSchema): MsgCreateNFTSchemaProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchema',
      value: MsgCreateNFTSchema.encode(message).finish()
    };
  }
};
function createBaseMsgCreateNFTSchemaResponse(): MsgCreateNFTSchemaResponse {
  return {
    code: ''
  };
}
export const MsgCreateNFTSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchemaResponse',
  encode(message: MsgCreateNFTSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNFTSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNFTSchemaResponse();
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
  fromPartial(object: Partial<MsgCreateNFTSchemaResponse>): MsgCreateNFTSchemaResponse {
    const message = createBaseMsgCreateNFTSchemaResponse();
    message.code = object.code ?? '';
    return message;
  },
  fromAmino(object: MsgCreateNFTSchemaResponseAmino): MsgCreateNFTSchemaResponse {
    const message = createBaseMsgCreateNFTSchemaResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    return message;
  },
  toAmino(message: MsgCreateNFTSchemaResponse): MsgCreateNFTSchemaResponseAmino {
    const obj: any = {};
    obj.code = message.code === '' ? undefined : message.code;
    return obj;
  },
  fromAminoMsg(object: MsgCreateNFTSchemaResponseAminoMsg): MsgCreateNFTSchemaResponse {
    return MsgCreateNFTSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateNFTSchemaResponseProtoMsg): MsgCreateNFTSchemaResponse {
    return MsgCreateNFTSchemaResponse.decode(message.value);
  },
  toProto(message: MsgCreateNFTSchemaResponse): Uint8Array {
    return MsgCreateNFTSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateNFTSchemaResponse): MsgCreateNFTSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateNFTSchemaResponse',
      value: MsgCreateNFTSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMetadata(): MsgCreateMetadata {
  return {
    creator: '',
    nftSchemaCode: '',
    tokenId: '',
    base64NFTData: ''
  };
}
export const MsgCreateMetadata = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadata',
  encode(message: MsgCreateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.base64NFTData !== '') {
      writer.uint32(34).string(message.base64NFTData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.tokenId = reader.string();
        break;
      case 4:
        message.base64NFTData = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateMetadata>): MsgCreateMetadata {
    const message = createBaseMsgCreateMetadata();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    message.base64NFTData = object.base64NFTData ?? '';
    return message;
  },
  fromAmino(object: MsgCreateMetadataAmino): MsgCreateMetadata {
    const message = createBaseMsgCreateMetadata();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    if (object.base64NFTData !== undefined && object.base64NFTData !== null) {
      message.base64NFTData = object.base64NFTData;
    }
    return message;
  },
  toAmino(message: MsgCreateMetadata): MsgCreateMetadataAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === '' ? undefined : message.tokenId;
    obj.base64NFTData = message.base64NFTData === '' ? undefined : message.base64NFTData;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMetadataAminoMsg): MsgCreateMetadata {
    return MsgCreateMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMetadataProtoMsg): MsgCreateMetadata {
    return MsgCreateMetadata.decode(message.value);
  },
  toProto(message: MsgCreateMetadata): Uint8Array {
    return MsgCreateMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMetadata): MsgCreateMetadataProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadata',
      value: MsgCreateMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMetadataResponse(): MsgCreateMetadataResponse {
  return {
    nftSchemaCode: '',
    tokenId: ''
  };
}
export const MsgCreateMetadataResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadataResponse',
  encode(message: MsgCreateMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.tokenId = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateMetadataResponse>): MsgCreateMetadataResponse {
    const message = createBaseMsgCreateMetadataResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    return message;
  },
  fromAmino(object: MsgCreateMetadataResponseAmino): MsgCreateMetadataResponse {
    const message = createBaseMsgCreateMetadataResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    return message;
  },
  toAmino(message: MsgCreateMetadataResponse): MsgCreateMetadataResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === '' ? undefined : message.tokenId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMetadataResponseAminoMsg): MsgCreateMetadataResponse {
    return MsgCreateMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMetadataResponseProtoMsg): MsgCreateMetadataResponse {
    return MsgCreateMetadataResponse.decode(message.value);
  },
  toProto(message: MsgCreateMetadataResponse): Uint8Array {
    return MsgCreateMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMetadataResponse): MsgCreateMetadataResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMetadataResponse',
      value: MsgCreateMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMultiMetadata(): MsgCreateMultiMetadata {
  return {
    creator: '',
    nftSchemaCode: '',
    tokenId: [],
    base64NFTData: ''
  };
}
export const MsgCreateMultiMetadata = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadata',
  encode(message: MsgCreateMultiMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(26).string(v!);
    }
    if (message.base64NFTData !== '') {
      writer.uint32(34).string(message.base64NFTData);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMultiMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMultiMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.tokenId.push(reader.string());
        break;
      case 4:
        message.base64NFTData = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateMultiMetadata>): MsgCreateMultiMetadata {
    const message = createBaseMsgCreateMultiMetadata();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId?.map(e => e) || [];
    message.base64NFTData = object.base64NFTData ?? '';
    return message;
  },
  fromAmino(object: MsgCreateMultiMetadataAmino): MsgCreateMultiMetadata {
    const message = createBaseMsgCreateMultiMetadata();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.tokenId = object.tokenId?.map(e => e) || [];
    if (object.base64NFTData !== undefined && object.base64NFTData !== null) {
      message.base64NFTData = object.base64NFTData;
    }
    return message;
  },
  toAmino(message: MsgCreateMultiMetadata): MsgCreateMultiMetadataAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map(e => e);
    } else {
      obj.tokenId = message.tokenId;
    }
    obj.base64NFTData = message.base64NFTData === '' ? undefined : message.base64NFTData;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMultiMetadataAminoMsg): MsgCreateMultiMetadata {
    return MsgCreateMultiMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMultiMetadataProtoMsg): MsgCreateMultiMetadata {
    return MsgCreateMultiMetadata.decode(message.value);
  },
  toProto(message: MsgCreateMultiMetadata): Uint8Array {
    return MsgCreateMultiMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMultiMetadata): MsgCreateMultiMetadataProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadata',
      value: MsgCreateMultiMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgCreateMultiMetadataResponse(): MsgCreateMultiMetadataResponse {
  return {
    nftSchemaCode: '',
    tokenId: []
  };
}
export const MsgCreateMultiMetadataResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadataResponse',
  encode(message: MsgCreateMultiMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.tokenId) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMultiMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMultiMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.tokenId.push(reader.string());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateMultiMetadataResponse>): MsgCreateMultiMetadataResponse {
    const message = createBaseMsgCreateMultiMetadataResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgCreateMultiMetadataResponseAmino): MsgCreateMultiMetadataResponse {
    const message = createBaseMsgCreateMultiMetadataResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.tokenId = object.tokenId?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgCreateMultiMetadataResponse): MsgCreateMultiMetadataResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map(e => e);
    } else {
      obj.tokenId = message.tokenId;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateMultiMetadataResponseAminoMsg): MsgCreateMultiMetadataResponse {
    return MsgCreateMultiMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMultiMetadataResponseProtoMsg): MsgCreateMultiMetadataResponse {
    return MsgCreateMultiMetadataResponse.decode(message.value);
  },
  toProto(message: MsgCreateMultiMetadataResponse): Uint8Array {
    return MsgCreateMultiMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMultiMetadataResponse): MsgCreateMultiMetadataResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateMultiMetadataResponse',
      value: MsgCreateMultiMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseOpenseaAttribute(): OpenseaAttribute {
  return {
    traitType: '',
    value: undefined
  };
}
export const OpenseaAttribute = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.OpenseaAttribute',
  encode(message: OpenseaAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traitType !== '') {
      writer.uint32(10).string(message.traitType);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OpenseaAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenseaAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.traitType = reader.string();
        break;
      case 2:
        message.value = Any.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OpenseaAttribute>): OpenseaAttribute {
    const message = createBaseOpenseaAttribute();
    message.traitType = object.traitType ?? '';
    message.value = object.value !== undefined && object.value !== null ? Any.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: OpenseaAttributeAmino): OpenseaAttribute {
    const message = createBaseOpenseaAttribute();
    if (object.trait_type !== undefined && object.trait_type !== null) {
      message.traitType = object.trait_type;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: OpenseaAttribute): OpenseaAttributeAmino {
    const obj: any = {};
    obj.trait_type = message.traitType === '' ? undefined : message.traitType;
    obj.value = message.value ? Any.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: OpenseaAttributeAminoMsg): OpenseaAttribute {
    return OpenseaAttribute.fromAmino(object.value);
  },
  fromProtoMsg(message: OpenseaAttributeProtoMsg): OpenseaAttribute {
    return OpenseaAttribute.decode(message.value);
  },
  toProto(message: OpenseaAttribute): Uint8Array {
    return OpenseaAttribute.encode(message).finish();
  },
  toProtoMsg(message: OpenseaAttribute): OpenseaAttributeProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.OpenseaAttribute',
      value: OpenseaAttribute.encode(message).finish()
    };
  }
};
function createBaseUpdatedOpenseaAttributes(): UpdatedOpenseaAttributes {
  return {
    attributes: []
  };
}
export const UpdatedOpenseaAttributes = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.UpdatedOpenseaAttributes',
  encode(message: UpdatedOpenseaAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attributes) {
      OpenseaAttribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatedOpenseaAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatedOpenseaAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.attributes.push(OpenseaAttribute.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdatedOpenseaAttributes>): UpdatedOpenseaAttributes {
    const message = createBaseUpdatedOpenseaAttributes();
    message.attributes = object.attributes?.map(e => OpenseaAttribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UpdatedOpenseaAttributesAmino): UpdatedOpenseaAttributes {
    const message = createBaseUpdatedOpenseaAttributes();
    message.attributes = object.attributes?.map(e => OpenseaAttribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UpdatedOpenseaAttributes): UpdatedOpenseaAttributesAmino {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? OpenseaAttribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: UpdatedOpenseaAttributesAminoMsg): UpdatedOpenseaAttributes {
    return UpdatedOpenseaAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdatedOpenseaAttributesProtoMsg): UpdatedOpenseaAttributes {
    return UpdatedOpenseaAttributes.decode(message.value);
  },
  toProto(message: UpdatedOpenseaAttributes): Uint8Array {
    return UpdatedOpenseaAttributes.encode(message).finish();
  },
  toProtoMsg(message: UpdatedOpenseaAttributes): UpdatedOpenseaAttributesProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.UpdatedOpenseaAttributes',
      value: UpdatedOpenseaAttributes.encode(message).finish()
    };
  }
};
function createBaseUpdatedOriginData(): UpdatedOriginData {
  return {
    opensea: undefined
  };
}
export const UpdatedOriginData = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.UpdatedOriginData',
  encode(message: UpdatedOriginData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.opensea !== undefined) {
      UpdatedOpenseaAttributes.encode(message.opensea, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatedOriginData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatedOriginData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.opensea = UpdatedOpenseaAttributes.decode(reader, reader.uint32());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdatedOriginData>): UpdatedOriginData {
    const message = createBaseUpdatedOriginData();
    message.opensea = object.opensea !== undefined && object.opensea !== null ? UpdatedOpenseaAttributes.fromPartial(object.opensea) : undefined;
    return message;
  },
  fromAmino(object: UpdatedOriginDataAmino): UpdatedOriginData {
    const message = createBaseUpdatedOriginData();
    if (object.opensea !== undefined && object.opensea !== null) {
      message.opensea = UpdatedOpenseaAttributes.fromAmino(object.opensea);
    }
    return message;
  },
  toAmino(message: UpdatedOriginData): UpdatedOriginDataAmino {
    const obj: any = {};
    obj.opensea = message.opensea ? UpdatedOpenseaAttributes.toAmino(message.opensea) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdatedOriginDataAminoMsg): UpdatedOriginData {
    return UpdatedOriginData.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdatedOriginDataProtoMsg): UpdatedOriginData {
    return UpdatedOriginData.decode(message.value);
  },
  toProto(message: UpdatedOriginData): Uint8Array {
    return UpdatedOriginData.encode(message).finish();
  },
  toProtoMsg(message: UpdatedOriginData): UpdatedOriginDataProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.UpdatedOriginData',
      value: UpdatedOriginData.encode(message).finish()
    };
  }
};
function createBaseActionParameter(): ActionParameter {
  return {
    name: '',
    value: ''
  };
}
export const ActionParameter = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionParameter',
  encode(message: ActionParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActionParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.name = reader.string();
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
  fromPartial(object: Partial<ActionParameter>): ActionParameter {
    const message = createBaseActionParameter();
    message.name = object.name ?? '';
    message.value = object.value ?? '';
    return message;
  },
  fromAmino(object: ActionParameterAmino): ActionParameter {
    const message = createBaseActionParameter();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: ActionParameter): ActionParameterAmino {
    const obj: any = {};
    obj.name = message.name === '' ? undefined : message.name;
    obj.value = message.value === '' ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: ActionParameterAminoMsg): ActionParameter {
    return ActionParameter.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionParameterProtoMsg): ActionParameter {
    return ActionParameter.decode(message.value);
  },
  toProto(message: ActionParameter): Uint8Array {
    return ActionParameter.encode(message).finish();
  },
  toProtoMsg(message: ActionParameter): ActionParameterProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.ActionParameter',
      value: ActionParameter.encode(message).finish()
    };
  }
};
function createBaseMsgPerformActionByAdmin(): MsgPerformActionByAdmin {
  return {
    creator: '',
    nftSchemaCode: '',
    tokenId: '',
    action: '',
    refId: '',
    parameters: []
  };
}
export const MsgPerformActionByAdmin = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdmin',
  encode(message: MsgPerformActionByAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.action !== '') {
      writer.uint32(34).string(message.action);
    }
    if (message.refId !== '') {
      writer.uint32(42).string(message.refId);
    }
    for (const v of message.parameters) {
      ActionParameter.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformActionByAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformActionByAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.tokenId = reader.string();
        break;
      case 4:
        message.action = reader.string();
        break;
      case 5:
        message.refId = reader.string();
        break;
      case 6:
        message.parameters.push(ActionParameter.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformActionByAdmin>): MsgPerformActionByAdmin {
    const message = createBaseMsgPerformActionByAdmin();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    message.action = object.action ?? '';
    message.refId = object.refId ?? '';
    message.parameters = object.parameters?.map(e => ActionParameter.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgPerformActionByAdminAmino): MsgPerformActionByAdmin {
    const message = createBaseMsgPerformActionByAdmin();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.ref_id !== undefined && object.ref_id !== null) {
      message.refId = object.ref_id;
    }
    message.parameters = object.parameters?.map(e => ActionParameter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgPerformActionByAdmin): MsgPerformActionByAdminAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nft_schema_code = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === '' ? undefined : message.tokenId;
    obj.action = message.action === '' ? undefined : message.action;
    obj.ref_id = message.refId === '' ? undefined : message.refId;
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? ActionParameter.toAmino(e) : undefined);
    } else {
      obj.parameters = message.parameters;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPerformActionByAdminAminoMsg): MsgPerformActionByAdmin {
    return MsgPerformActionByAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformActionByAdminProtoMsg): MsgPerformActionByAdmin {
    return MsgPerformActionByAdmin.decode(message.value);
  },
  toProto(message: MsgPerformActionByAdmin): Uint8Array {
    return MsgPerformActionByAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformActionByAdmin): MsgPerformActionByAdminProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdmin',
      value: MsgPerformActionByAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgPerformActionByAdminResponse(): MsgPerformActionByAdminResponse {
  return {
    nftSchemaCode: '',
    tokenId: ''
  };
}
export const MsgPerformActionByAdminResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdminResponse',
  encode(message: MsgPerformActionByAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformActionByAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformActionByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.tokenId = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformActionByAdminResponse>): MsgPerformActionByAdminResponse {
    const message = createBaseMsgPerformActionByAdminResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    return message;
  },
  fromAmino(object: MsgPerformActionByAdminResponseAmino): MsgPerformActionByAdminResponse {
    const message = createBaseMsgPerformActionByAdminResponse();
    if (object.nft_schema_code !== undefined && object.nft_schema_code !== null) {
      message.nftSchemaCode = object.nft_schema_code;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    return message;
  },
  toAmino(message: MsgPerformActionByAdminResponse): MsgPerformActionByAdminResponseAmino {
    const obj: any = {};
    obj.nft_schema_code = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.token_id = message.tokenId === '' ? undefined : message.tokenId;
    return obj;
  },
  fromAminoMsg(object: MsgPerformActionByAdminResponseAminoMsg): MsgPerformActionByAdminResponse {
    return MsgPerformActionByAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformActionByAdminResponseProtoMsg): MsgPerformActionByAdminResponse {
    return MsgPerformActionByAdminResponse.decode(message.value);
  },
  toProto(message: MsgPerformActionByAdminResponse): Uint8Array {
    return MsgPerformActionByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformActionByAdminResponse): MsgPerformActionByAdminResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformActionByAdminResponse',
      value: MsgPerformActionByAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddAttribute(): MsgAddAttribute {
  return {
    creator: '',
    code: '',
    location: 0,
    base64NewAttriuteDefenition: ''
  };
}
export const MsgAddAttribute = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttribute',
  encode(message: MsgAddAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== '') {
      writer.uint32(18).string(message.code);
    }
    if (message.location !== 0) {
      writer.uint32(24).int32(message.location);
    }
    if (message.base64NewAttriuteDefenition !== '') {
      writer.uint32(34).string(message.base64NewAttriuteDefenition);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.code = reader.string();
        break;
      case 3:
        message.location = reader.int32() as any;
        break;
      case 4:
        message.base64NewAttriuteDefenition = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddAttribute>): MsgAddAttribute {
    const message = createBaseMsgAddAttribute();
    message.creator = object.creator ?? '';
    message.code = object.code ?? '';
    message.location = object.location ?? 0;
    message.base64NewAttriuteDefenition = object.base64NewAttriuteDefenition ?? '';
    return message;
  },
  fromAmino(object: MsgAddAttributeAmino): MsgAddAttribute {
    const message = createBaseMsgAddAttribute();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    }
    if (object.base64NewAttriuteDefenition !== undefined && object.base64NewAttriuteDefenition !== null) {
      message.base64NewAttriuteDefenition = object.base64NewAttriuteDefenition;
    }
    return message;
  },
  toAmino(message: MsgAddAttribute): MsgAddAttributeAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.code = message.code === '' ? undefined : message.code;
    obj.location = message.location === 0 ? undefined : message.location;
    obj.base64NewAttriuteDefenition = message.base64NewAttriuteDefenition === '' ? undefined : message.base64NewAttriuteDefenition;
    return obj;
  },
  fromAminoMsg(object: MsgAddAttributeAminoMsg): MsgAddAttribute {
    return MsgAddAttribute.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAttributeProtoMsg): MsgAddAttribute {
    return MsgAddAttribute.decode(message.value);
  },
  toProto(message: MsgAddAttribute): Uint8Array {
    return MsgAddAttribute.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAttribute): MsgAddAttributeProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttribute',
      value: MsgAddAttribute.encode(message).finish()
    };
  }
};
function createBaseMsgAddAttributeResponse(): MsgAddAttributeResponse {
  return {
    code: '',
    name: ''
  };
}
export const MsgAddAttributeResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttributeResponse',
  encode(message: MsgAddAttributeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAttributeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAttributeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.code = reader.string();
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
  fromPartial(object: Partial<MsgAddAttributeResponse>): MsgAddAttributeResponse {
    const message = createBaseMsgAddAttributeResponse();
    message.code = object.code ?? '';
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: MsgAddAttributeResponseAmino): MsgAddAttributeResponse {
    const message = createBaseMsgAddAttributeResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgAddAttributeResponse): MsgAddAttributeResponseAmino {
    const obj: any = {};
    obj.code = message.code === '' ? undefined : message.code;
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgAddAttributeResponseAminoMsg): MsgAddAttributeResponse {
    return MsgAddAttributeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAttributeResponseProtoMsg): MsgAddAttributeResponse {
    return MsgAddAttributeResponse.decode(message.value);
  },
  toProto(message: MsgAddAttributeResponse): Uint8Array {
    return MsgAddAttributeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAttributeResponse): MsgAddAttributeResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAttributeResponse',
      value: MsgAddAttributeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddAction(): MsgAddAction {
  return {
    creator: '',
    code: '',
    base64NewAction: ''
  };
}
export const MsgAddAction = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAction',
  encode(message: MsgAddAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== '') {
      writer.uint32(18).string(message.code);
    }
    if (message.base64NewAction !== '') {
      writer.uint32(26).string(message.base64NewAction);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.code = reader.string();
        break;
      case 3:
        message.base64NewAction = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddAction>): MsgAddAction {
    const message = createBaseMsgAddAction();
    message.creator = object.creator ?? '';
    message.code = object.code ?? '';
    message.base64NewAction = object.base64NewAction ?? '';
    return message;
  },
  fromAmino(object: MsgAddActionAmino): MsgAddAction {
    const message = createBaseMsgAddAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.base64NewAction !== undefined && object.base64NewAction !== null) {
      message.base64NewAction = object.base64NewAction;
    }
    return message;
  },
  toAmino(message: MsgAddAction): MsgAddActionAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.code = message.code === '' ? undefined : message.code;
    obj.base64NewAction = message.base64NewAction === '' ? undefined : message.base64NewAction;
    return obj;
  },
  fromAminoMsg(object: MsgAddActionAminoMsg): MsgAddAction {
    return MsgAddAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddActionProtoMsg): MsgAddAction {
    return MsgAddAction.decode(message.value);
  },
  toProto(message: MsgAddAction): Uint8Array {
    return MsgAddAction.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAction): MsgAddActionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddAction',
      value: MsgAddAction.encode(message).finish()
    };
  }
};
function createBaseMsgAddActionResponse(): MsgAddActionResponse {
  return {
    code: '',
    name: ''
  };
}
export const MsgAddActionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddActionResponse',
  encode(message: MsgAddActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.code = reader.string();
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
  fromPartial(object: Partial<MsgAddActionResponse>): MsgAddActionResponse {
    const message = createBaseMsgAddActionResponse();
    message.code = object.code ?? '';
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: MsgAddActionResponseAmino): MsgAddActionResponse {
    const message = createBaseMsgAddActionResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgAddActionResponse): MsgAddActionResponseAmino {
    const obj: any = {};
    obj.code = message.code === '' ? undefined : message.code;
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgAddActionResponseAminoMsg): MsgAddActionResponse {
    return MsgAddActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddActionResponseProtoMsg): MsgAddActionResponse {
    return MsgAddActionResponse.decode(message.value);
  },
  toProto(message: MsgAddActionResponse): Uint8Array {
    return MsgAddActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddActionResponse): MsgAddActionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgAddActionResponse',
      value: MsgAddActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetBaseUri(): MsgSetBaseUri {
  return {
    creator: '',
    code: '',
    newBaseUri: ''
  };
}
export const MsgSetBaseUri = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUri',
  encode(message: MsgSetBaseUri, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== '') {
      writer.uint32(18).string(message.code);
    }
    if (message.newBaseUri !== '') {
      writer.uint32(26).string(message.newBaseUri);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBaseUri {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseUri();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.code = reader.string();
        break;
      case 3:
        message.newBaseUri = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetBaseUri>): MsgSetBaseUri {
    const message = createBaseMsgSetBaseUri();
    message.creator = object.creator ?? '';
    message.code = object.code ?? '';
    message.newBaseUri = object.newBaseUri ?? '';
    return message;
  },
  fromAmino(object: MsgSetBaseUriAmino): MsgSetBaseUri {
    const message = createBaseMsgSetBaseUri();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.newBaseUri !== undefined && object.newBaseUri !== null) {
      message.newBaseUri = object.newBaseUri;
    }
    return message;
  },
  toAmino(message: MsgSetBaseUri): MsgSetBaseUriAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.code = message.code === '' ? undefined : message.code;
    obj.newBaseUri = message.newBaseUri === '' ? undefined : message.newBaseUri;
    return obj;
  },
  fromAminoMsg(object: MsgSetBaseUriAminoMsg): MsgSetBaseUri {
    return MsgSetBaseUri.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetBaseUriProtoMsg): MsgSetBaseUri {
    return MsgSetBaseUri.decode(message.value);
  },
  toProto(message: MsgSetBaseUri): Uint8Array {
    return MsgSetBaseUri.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBaseUri): MsgSetBaseUriProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUri',
      value: MsgSetBaseUri.encode(message).finish()
    };
  }
};
function createBaseMsgSetBaseUriResponse(): MsgSetBaseUriResponse {
  return {
    code: '',
    uri: ''
  };
}
export const MsgSetBaseUriResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUriResponse',
  encode(message: MsgSetBaseUriResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code);
    }
    if (message.uri !== '') {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBaseUriResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBaseUriResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.code = reader.string();
        break;
      case 2:
        message.uri = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetBaseUriResponse>): MsgSetBaseUriResponse {
    const message = createBaseMsgSetBaseUriResponse();
    message.code = object.code ?? '';
    message.uri = object.uri ?? '';
    return message;
  },
  fromAmino(object: MsgSetBaseUriResponseAmino): MsgSetBaseUriResponse {
    const message = createBaseMsgSetBaseUriResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    return message;
  },
  toAmino(message: MsgSetBaseUriResponse): MsgSetBaseUriResponseAmino {
    const obj: any = {};
    obj.code = message.code === '' ? undefined : message.code;
    obj.uri = message.uri === '' ? undefined : message.uri;
    return obj;
  },
  fromAminoMsg(object: MsgSetBaseUriResponseAminoMsg): MsgSetBaseUriResponse {
    return MsgSetBaseUriResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetBaseUriResponseProtoMsg): MsgSetBaseUriResponse {
    return MsgSetBaseUriResponse.decode(message.value);
  },
  toProto(message: MsgSetBaseUriResponse): Uint8Array {
    return MsgSetBaseUriResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBaseUriResponse): MsgSetBaseUriResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetBaseUriResponse',
      value: MsgSetBaseUriResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleAction(): MsgToggleAction {
  return {
    creator: '',
    code: '',
    action: '',
    status: false
  };
}
export const MsgToggleAction = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleAction',
  encode(message: MsgToggleAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== '') {
      writer.uint32(18).string(message.code);
    }
    if (message.action !== '') {
      writer.uint32(26).string(message.action);
    }
    if (message.status === true) {
      writer.uint32(32).bool(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.code = reader.string();
        break;
      case 3:
        message.action = reader.string();
        break;
      case 4:
        message.status = reader.bool();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgToggleAction>): MsgToggleAction {
    const message = createBaseMsgToggleAction();
    message.creator = object.creator ?? '';
    message.code = object.code ?? '';
    message.action = object.action ?? '';
    message.status = object.status ?? false;
    return message;
  },
  fromAmino(object: MsgToggleActionAmino): MsgToggleAction {
    const message = createBaseMsgToggleAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MsgToggleAction): MsgToggleActionAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.code = message.code === '' ? undefined : message.code;
    obj.action = message.action === '' ? undefined : message.action;
    obj.status = message.status === false ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MsgToggleActionAminoMsg): MsgToggleAction {
    return MsgToggleAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleActionProtoMsg): MsgToggleAction {
    return MsgToggleAction.decode(message.value);
  },
  toProto(message: MsgToggleAction): Uint8Array {
    return MsgToggleAction.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleAction): MsgToggleActionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleAction',
      value: MsgToggleAction.encode(message).finish()
    };
  }
};
function createBaseMsgToggleActionResponse(): MsgToggleActionResponse {
  return {
    code: '',
    name: '',
    status: false
  };
}
export const MsgToggleActionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleActionResponse',
  encode(message: MsgToggleActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.status === true) {
      writer.uint32(24).bool(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.code = reader.string();
        break;
      case 2:
        message.name = reader.string();
        break;
      case 3:
        message.status = reader.bool();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgToggleActionResponse>): MsgToggleActionResponse {
    const message = createBaseMsgToggleActionResponse();
    message.code = object.code ?? '';
    message.name = object.name ?? '';
    message.status = object.status ?? false;
    return message;
  },
  fromAmino(object: MsgToggleActionResponseAmino): MsgToggleActionResponse {
    const message = createBaseMsgToggleActionResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MsgToggleActionResponse): MsgToggleActionResponseAmino {
    const obj: any = {};
    obj.code = message.code === '' ? undefined : message.code;
    obj.name = message.name === '' ? undefined : message.name;
    obj.status = message.status === false ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MsgToggleActionResponseAminoMsg): MsgToggleActionResponse {
    return MsgToggleActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleActionResponseProtoMsg): MsgToggleActionResponse {
    return MsgToggleActionResponse.decode(message.value);
  },
  toProto(message: MsgToggleActionResponse): Uint8Array {
    return MsgToggleActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleActionResponse): MsgToggleActionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgToggleActionResponse',
      value: MsgToggleActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeSchemaOwner(): MsgChangeSchemaOwner {
  return {
    creator: '',
    nftSchemaCode: '',
    newOwner: ''
  };
}
export const MsgChangeSchemaOwner = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwner',
  encode(message: MsgChangeSchemaOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.newOwner !== '') {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeSchemaOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeSchemaOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.newOwner = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChangeSchemaOwner>): MsgChangeSchemaOwner {
    const message = createBaseMsgChangeSchemaOwner();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.newOwner = object.newOwner ?? '';
    return message;
  },
  fromAmino(object: MsgChangeSchemaOwnerAmino): MsgChangeSchemaOwner {
    const message = createBaseMsgChangeSchemaOwner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner;
    }
    return message;
  },
  toAmino(message: MsgChangeSchemaOwner): MsgChangeSchemaOwnerAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.newOwner = message.newOwner === '' ? undefined : message.newOwner;
    return obj;
  },
  fromAminoMsg(object: MsgChangeSchemaOwnerAminoMsg): MsgChangeSchemaOwner {
    return MsgChangeSchemaOwner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeSchemaOwnerProtoMsg): MsgChangeSchemaOwner {
    return MsgChangeSchemaOwner.decode(message.value);
  },
  toProto(message: MsgChangeSchemaOwner): Uint8Array {
    return MsgChangeSchemaOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeSchemaOwner): MsgChangeSchemaOwnerProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwner',
      value: MsgChangeSchemaOwner.encode(message).finish()
    };
  }
};
function createBaseMsgChangeSchemaOwnerResponse(): MsgChangeSchemaOwnerResponse {
  return {
    nftSchemaCode: '',
    newOwner: ''
  };
}
export const MsgChangeSchemaOwnerResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwnerResponse',
  encode(message: MsgChangeSchemaOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.newOwner !== '') {
      writer.uint32(18).string(message.newOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeSchemaOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeSchemaOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.newOwner = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChangeSchemaOwnerResponse>): MsgChangeSchemaOwnerResponse {
    const message = createBaseMsgChangeSchemaOwnerResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.newOwner = object.newOwner ?? '';
    return message;
  },
  fromAmino(object: MsgChangeSchemaOwnerResponseAmino): MsgChangeSchemaOwnerResponse {
    const message = createBaseMsgChangeSchemaOwnerResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner;
    }
    return message;
  },
  toAmino(message: MsgChangeSchemaOwnerResponse): MsgChangeSchemaOwnerResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.newOwner = message.newOwner === '' ? undefined : message.newOwner;
    return obj;
  },
  fromAminoMsg(object: MsgChangeSchemaOwnerResponseAminoMsg): MsgChangeSchemaOwnerResponse {
    return MsgChangeSchemaOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeSchemaOwnerResponseProtoMsg): MsgChangeSchemaOwnerResponse {
    return MsgChangeSchemaOwnerResponse.decode(message.value);
  },
  toProto(message: MsgChangeSchemaOwnerResponse): Uint8Array {
    return MsgChangeSchemaOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeSchemaOwnerResponse): MsgChangeSchemaOwnerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeSchemaOwnerResponse',
      value: MsgChangeSchemaOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResyncAttributesResponse(): MsgResyncAttributesResponse {
  return {
    nftSchemaCode: '',
    tokenId: ''
  };
}
export const MsgResyncAttributesResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributesResponse',
  encode(message: MsgResyncAttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResyncAttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResyncAttributesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.tokenId = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgResyncAttributesResponse>): MsgResyncAttributesResponse {
    const message = createBaseMsgResyncAttributesResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    return message;
  },
  fromAmino(object: MsgResyncAttributesResponseAmino): MsgResyncAttributesResponse {
    const message = createBaseMsgResyncAttributesResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    return message;
  },
  toAmino(message: MsgResyncAttributesResponse): MsgResyncAttributesResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === '' ? undefined : message.tokenId;
    return obj;
  },
  fromAminoMsg(object: MsgResyncAttributesResponseAminoMsg): MsgResyncAttributesResponse {
    return MsgResyncAttributesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResyncAttributesResponseProtoMsg): MsgResyncAttributesResponse {
    return MsgResyncAttributesResponse.decode(message.value);
  },
  toProto(message: MsgResyncAttributesResponse): Uint8Array {
    return MsgResyncAttributesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResyncAttributesResponse): MsgResyncAttributesResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributesResponse',
      value: MsgResyncAttributesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgShowAttributes(): MsgShowAttributes {
  return {
    creator: '',
    nftSchemaCode: '',
    show: false,
    attributeNames: []
  };
}
export const MsgShowAttributes = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributes',
  encode(message: MsgShowAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.show === true) {
      writer.uint32(24).bool(message.show);
    }
    for (const v of message.attributeNames) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgShowAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgShowAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.show = reader.bool();
        break;
      case 4:
        message.attributeNames.push(reader.string());
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgShowAttributes>): MsgShowAttributes {
    const message = createBaseMsgShowAttributes();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.show = object.show ?? false;
    message.attributeNames = object.attributeNames?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgShowAttributesAmino): MsgShowAttributes {
    const message = createBaseMsgShowAttributes();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.show !== undefined && object.show !== null) {
      message.show = object.show;
    }
    message.attributeNames = object.attributeNames?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgShowAttributes): MsgShowAttributesAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.show = message.show === false ? undefined : message.show;
    if (message.attributeNames) {
      obj.attributeNames = message.attributeNames.map(e => e);
    } else {
      obj.attributeNames = message.attributeNames;
    }
    return obj;
  },
  fromAminoMsg(object: MsgShowAttributesAminoMsg): MsgShowAttributes {
    return MsgShowAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgShowAttributesProtoMsg): MsgShowAttributes {
    return MsgShowAttributes.decode(message.value);
  },
  toProto(message: MsgShowAttributes): Uint8Array {
    return MsgShowAttributes.encode(message).finish();
  },
  toProtoMsg(message: MsgShowAttributes): MsgShowAttributesProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributes',
      value: MsgShowAttributes.encode(message).finish()
    };
  }
};
function createBaseMsgShowAttributesResponse(): MsgShowAttributesResponse {
  return {
    nftSchema: ''
  };
}
export const MsgShowAttributesResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributesResponse',
  encode(message: MsgShowAttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchema !== '') {
      writer.uint32(10).string(message.nftSchema);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgShowAttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgShowAttributesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchema = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgShowAttributesResponse>): MsgShowAttributesResponse {
    const message = createBaseMsgShowAttributesResponse();
    message.nftSchema = object.nftSchema ?? '';
    return message;
  },
  fromAmino(object: MsgShowAttributesResponseAmino): MsgShowAttributesResponse {
    const message = createBaseMsgShowAttributesResponse();
    if (object.nftSchema !== undefined && object.nftSchema !== null) {
      message.nftSchema = object.nftSchema;
    }
    return message;
  },
  toAmino(message: MsgShowAttributesResponse): MsgShowAttributesResponseAmino {
    const obj: any = {};
    obj.nftSchema = message.nftSchema === '' ? undefined : message.nftSchema;
    return obj;
  },
  fromAminoMsg(object: MsgShowAttributesResponseAminoMsg): MsgShowAttributesResponse {
    return MsgShowAttributesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgShowAttributesResponseProtoMsg): MsgShowAttributesResponse {
    return MsgShowAttributesResponse.decode(message.value);
  },
  toProto(message: MsgShowAttributesResponse): Uint8Array {
    return MsgShowAttributesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgShowAttributesResponse): MsgShowAttributesResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgShowAttributesResponse',
      value: MsgShowAttributesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResyncAttributes(): MsgResyncAttributes {
  return {
    creator: '',
    nftSchemaCode: '',
    tokenId: ''
  };
}
export const MsgResyncAttributes = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributes',
  encode(message: MsgResyncAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.tokenId !== '') {
      writer.uint32(26).string(message.tokenId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResyncAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResyncAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.tokenId = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgResyncAttributes>): MsgResyncAttributes {
    const message = createBaseMsgResyncAttributes();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.tokenId = object.tokenId ?? '';
    return message;
  },
  fromAmino(object: MsgResyncAttributesAmino): MsgResyncAttributes {
    const message = createBaseMsgResyncAttributes();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    return message;
  },
  toAmino(message: MsgResyncAttributes): MsgResyncAttributesAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.tokenId = message.tokenId === '' ? undefined : message.tokenId;
    return obj;
  },
  fromAminoMsg(object: MsgResyncAttributesAminoMsg): MsgResyncAttributes {
    return MsgResyncAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResyncAttributesProtoMsg): MsgResyncAttributes {
    return MsgResyncAttributes.decode(message.value);
  },
  toProto(message: MsgResyncAttributes): Uint8Array {
    return MsgResyncAttributes.encode(message).finish();
  },
  toProtoMsg(message: MsgResyncAttributes): MsgResyncAttributesProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgResyncAttributes',
      value: MsgResyncAttributes.encode(message).finish()
    };
  }
};
function createBaseMsgSetFeeConfig(): MsgSetFeeConfig {
  return {
    creator: '',
    newFeeConfigBase64: '',
    feeSubject: 0
  };
}
export const MsgSetFeeConfig = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfig',
  encode(message: MsgSetFeeConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.newFeeConfigBase64 !== '') {
      writer.uint32(18).string(message.newFeeConfigBase64);
    }
    if (message.feeSubject !== 0) {
      writer.uint32(24).int32(message.feeSubject);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFeeConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFeeConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.newFeeConfigBase64 = reader.string();
        break;
      case 3:
        message.feeSubject = reader.int32() as any;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetFeeConfig>): MsgSetFeeConfig {
    const message = createBaseMsgSetFeeConfig();
    message.creator = object.creator ?? '';
    message.newFeeConfigBase64 = object.newFeeConfigBase64 ?? '';
    message.feeSubject = object.feeSubject ?? 0;
    return message;
  },
  fromAmino(object: MsgSetFeeConfigAmino): MsgSetFeeConfig {
    const message = createBaseMsgSetFeeConfig();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.newFeeConfigBase64 !== undefined && object.newFeeConfigBase64 !== null) {
      message.newFeeConfigBase64 = object.newFeeConfigBase64;
    }
    if (object.feeSubject !== undefined && object.feeSubject !== null) {
      message.feeSubject = object.feeSubject;
    }
    return message;
  },
  toAmino(message: MsgSetFeeConfig): MsgSetFeeConfigAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.newFeeConfigBase64 = message.newFeeConfigBase64 === '' ? undefined : message.newFeeConfigBase64;
    obj.feeSubject = message.feeSubject === 0 ? undefined : message.feeSubject;
    return obj;
  },
  fromAminoMsg(object: MsgSetFeeConfigAminoMsg): MsgSetFeeConfig {
    return MsgSetFeeConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetFeeConfigProtoMsg): MsgSetFeeConfig {
    return MsgSetFeeConfig.decode(message.value);
  },
  toProto(message: MsgSetFeeConfig): Uint8Array {
    return MsgSetFeeConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgSetFeeConfig): MsgSetFeeConfigProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfig',
      value: MsgSetFeeConfig.encode(message).finish()
    };
  }
};
function createBaseMsgSetFeeConfigResponse(): MsgSetFeeConfigResponse {
  return {};
}
export const MsgSetFeeConfigResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfigResponse',
  encode(_: MsgSetFeeConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFeeConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFeeConfigResponse();
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
  fromPartial(_: Partial<MsgSetFeeConfigResponse>): MsgSetFeeConfigResponse {
    const message = createBaseMsgSetFeeConfigResponse();
    return message;
  },
  fromAmino(_: MsgSetFeeConfigResponseAmino): MsgSetFeeConfigResponse {
    const message = createBaseMsgSetFeeConfigResponse();
    return message;
  },
  toAmino(_: MsgSetFeeConfigResponse): MsgSetFeeConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetFeeConfigResponseAminoMsg): MsgSetFeeConfigResponse {
    return MsgSetFeeConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetFeeConfigResponseProtoMsg): MsgSetFeeConfigResponse {
    return MsgSetFeeConfigResponse.decode(message.value);
  },
  toProto(message: MsgSetFeeConfigResponse): Uint8Array {
    return MsgSetFeeConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetFeeConfigResponse): MsgSetFeeConfigResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetFeeConfigResponse',
      value: MsgSetFeeConfigResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMintauth(): MsgSetMintauth {
  return {
    creator: '',
    nftSchemaCode: '',
    authorizeTo: 0
  };
}
export const MsgSetMintauth = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauth',
  encode(message: MsgSetMintauth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.authorizeTo !== 0) {
      writer.uint32(24).int32(message.authorizeTo);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMintauth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMintauth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.authorizeTo = reader.int32() as any;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMintauth>): MsgSetMintauth {
    const message = createBaseMsgSetMintauth();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.authorizeTo = object.authorizeTo ?? 0;
    return message;
  },
  fromAmino(object: MsgSetMintauthAmino): MsgSetMintauth {
    const message = createBaseMsgSetMintauth();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.authorizeTo !== undefined && object.authorizeTo !== null) {
      message.authorizeTo = object.authorizeTo;
    }
    return message;
  },
  toAmino(message: MsgSetMintauth): MsgSetMintauthAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.authorizeTo = message.authorizeTo === 0 ? undefined : message.authorizeTo;
    return obj;
  },
  fromAminoMsg(object: MsgSetMintauthAminoMsg): MsgSetMintauth {
    return MsgSetMintauth.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMintauthProtoMsg): MsgSetMintauth {
    return MsgSetMintauth.decode(message.value);
  },
  toProto(message: MsgSetMintauth): Uint8Array {
    return MsgSetMintauth.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMintauth): MsgSetMintauthProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauth',
      value: MsgSetMintauth.encode(message).finish()
    };
  }
};
function createBaseMsgSetMintauthResponse(): MsgSetMintauthResponse {
  return {
    nftSchemaCode: ''
  };
}
export const MsgSetMintauthResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauthResponse',
  encode(message: MsgSetMintauthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMintauthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMintauthResponse();
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
  fromPartial(object: Partial<MsgSetMintauthResponse>): MsgSetMintauthResponse {
    const message = createBaseMsgSetMintauthResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    return message;
  },
  fromAmino(object: MsgSetMintauthResponseAmino): MsgSetMintauthResponse {
    const message = createBaseMsgSetMintauthResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    return message;
  },
  toAmino(message: MsgSetMintauthResponse): MsgSetMintauthResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    return obj;
  },
  fromAminoMsg(object: MsgSetMintauthResponseAminoMsg): MsgSetMintauthResponse {
    return MsgSetMintauthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMintauthResponseProtoMsg): MsgSetMintauthResponse {
    return MsgSetMintauthResponse.decode(message.value);
  },
  toProto(message: MsgSetMintauthResponse): Uint8Array {
    return MsgSetMintauthResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMintauthResponse): MsgSetMintauthResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMintauthResponse',
      value: MsgSetMintauthResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeOrgOwner(): MsgChangeOrgOwner {
  return {
    creator: '',
    orgName: '',
    toNewOwner: ''
  };
}
export const MsgChangeOrgOwner = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwner',
  encode(message: MsgChangeOrgOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.orgName !== '') {
      writer.uint32(18).string(message.orgName);
    }
    if (message.toNewOwner !== '') {
      writer.uint32(26).string(message.toNewOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeOrgOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeOrgOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.orgName = reader.string();
        break;
      case 3:
        message.toNewOwner = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChangeOrgOwner>): MsgChangeOrgOwner {
    const message = createBaseMsgChangeOrgOwner();
    message.creator = object.creator ?? '';
    message.orgName = object.orgName ?? '';
    message.toNewOwner = object.toNewOwner ?? '';
    return message;
  },
  fromAmino(object: MsgChangeOrgOwnerAmino): MsgChangeOrgOwner {
    const message = createBaseMsgChangeOrgOwner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.orgName !== undefined && object.orgName !== null) {
      message.orgName = object.orgName;
    }
    if (object.toNewOwner !== undefined && object.toNewOwner !== null) {
      message.toNewOwner = object.toNewOwner;
    }
    return message;
  },
  toAmino(message: MsgChangeOrgOwner): MsgChangeOrgOwnerAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.orgName = message.orgName === '' ? undefined : message.orgName;
    obj.toNewOwner = message.toNewOwner === '' ? undefined : message.toNewOwner;
    return obj;
  },
  fromAminoMsg(object: MsgChangeOrgOwnerAminoMsg): MsgChangeOrgOwner {
    return MsgChangeOrgOwner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeOrgOwnerProtoMsg): MsgChangeOrgOwner {
    return MsgChangeOrgOwner.decode(message.value);
  },
  toProto(message: MsgChangeOrgOwner): Uint8Array {
    return MsgChangeOrgOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeOrgOwner): MsgChangeOrgOwnerProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwner',
      value: MsgChangeOrgOwner.encode(message).finish()
    };
  }
};
function createBaseMsgChangeOrgOwnerResponse(): MsgChangeOrgOwnerResponse {
  return {
    orgName: '',
    oldOwner: '',
    newOwner: ''
  };
}
export const MsgChangeOrgOwnerResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwnerResponse',
  encode(message: MsgChangeOrgOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orgName !== '') {
      writer.uint32(10).string(message.orgName);
    }
    if (message.oldOwner !== '') {
      writer.uint32(18).string(message.oldOwner);
    }
    if (message.newOwner !== '') {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeOrgOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeOrgOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.orgName = reader.string();
        break;
      case 2:
        message.oldOwner = reader.string();
        break;
      case 3:
        message.newOwner = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgChangeOrgOwnerResponse>): MsgChangeOrgOwnerResponse {
    const message = createBaseMsgChangeOrgOwnerResponse();
    message.orgName = object.orgName ?? '';
    message.oldOwner = object.oldOwner ?? '';
    message.newOwner = object.newOwner ?? '';
    return message;
  },
  fromAmino(object: MsgChangeOrgOwnerResponseAmino): MsgChangeOrgOwnerResponse {
    const message = createBaseMsgChangeOrgOwnerResponse();
    if (object.orgName !== undefined && object.orgName !== null) {
      message.orgName = object.orgName;
    }
    if (object.oldOwner !== undefined && object.oldOwner !== null) {
      message.oldOwner = object.oldOwner;
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner;
    }
    return message;
  },
  toAmino(message: MsgChangeOrgOwnerResponse): MsgChangeOrgOwnerResponseAmino {
    const obj: any = {};
    obj.orgName = message.orgName === '' ? undefined : message.orgName;
    obj.oldOwner = message.oldOwner === '' ? undefined : message.oldOwner;
    obj.newOwner = message.newOwner === '' ? undefined : message.newOwner;
    return obj;
  },
  fromAminoMsg(object: MsgChangeOrgOwnerResponseAminoMsg): MsgChangeOrgOwnerResponse {
    return MsgChangeOrgOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeOrgOwnerResponseProtoMsg): MsgChangeOrgOwnerResponse {
    return MsgChangeOrgOwnerResponse.decode(message.value);
  },
  toProto(message: MsgChangeOrgOwnerResponse): Uint8Array {
    return MsgChangeOrgOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeOrgOwnerResponse): MsgChangeOrgOwnerResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgChangeOrgOwnerResponse',
      value: MsgChangeOrgOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetUriRetrievalMethod(): MsgSetUriRetrievalMethod {
  return {
    creator: '',
    schemaCode: '',
    newMethod: 0
  };
}
export const MsgSetUriRetrievalMethod = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethod',
  encode(message: MsgSetUriRetrievalMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== '') {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newMethod !== 0) {
      writer.uint32(24).int32(message.newMethod);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUriRetrievalMethod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUriRetrievalMethod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.schemaCode = reader.string();
        break;
      case 3:
        message.newMethod = reader.int32();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetUriRetrievalMethod>): MsgSetUriRetrievalMethod {
    const message = createBaseMsgSetUriRetrievalMethod();
    message.creator = object.creator ?? '';
    message.schemaCode = object.schemaCode ?? '';
    message.newMethod = object.newMethod ?? 0;
    return message;
  },
  fromAmino(object: MsgSetUriRetrievalMethodAmino): MsgSetUriRetrievalMethod {
    const message = createBaseMsgSetUriRetrievalMethod();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newMethod !== undefined && object.newMethod !== null) {
      message.newMethod = object.newMethod;
    }
    return message;
  },
  toAmino(message: MsgSetUriRetrievalMethod): MsgSetUriRetrievalMethodAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.schemaCode = message.schemaCode === '' ? undefined : message.schemaCode;
    obj.newMethod = message.newMethod === 0 ? undefined : message.newMethod;
    return obj;
  },
  fromAminoMsg(object: MsgSetUriRetrievalMethodAminoMsg): MsgSetUriRetrievalMethod {
    return MsgSetUriRetrievalMethod.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetUriRetrievalMethodProtoMsg): MsgSetUriRetrievalMethod {
    return MsgSetUriRetrievalMethod.decode(message.value);
  },
  toProto(message: MsgSetUriRetrievalMethod): Uint8Array {
    return MsgSetUriRetrievalMethod.encode(message).finish();
  },
  toProtoMsg(message: MsgSetUriRetrievalMethod): MsgSetUriRetrievalMethodProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethod',
      value: MsgSetUriRetrievalMethod.encode(message).finish()
    };
  }
};
function createBaseMsgSetUriRetrievalMethodResponse(): MsgSetUriRetrievalMethodResponse {
  return {
    schemaCode: '',
    newMethod: ''
  };
}
export const MsgSetUriRetrievalMethodResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethodResponse',
  encode(message: MsgSetUriRetrievalMethodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaCode !== '') {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newMethod !== '') {
      writer.uint32(18).string(message.newMethod);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUriRetrievalMethodResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUriRetrievalMethodResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.schemaCode = reader.string();
        break;
      case 2:
        message.newMethod = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetUriRetrievalMethodResponse>): MsgSetUriRetrievalMethodResponse {
    const message = createBaseMsgSetUriRetrievalMethodResponse();
    message.schemaCode = object.schemaCode ?? '';
    message.newMethod = object.newMethod ?? '';
    return message;
  },
  fromAmino(object: MsgSetUriRetrievalMethodResponseAmino): MsgSetUriRetrievalMethodResponse {
    const message = createBaseMsgSetUriRetrievalMethodResponse();
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newMethod !== undefined && object.newMethod !== null) {
      message.newMethod = object.newMethod;
    }
    return message;
  },
  toAmino(message: MsgSetUriRetrievalMethodResponse): MsgSetUriRetrievalMethodResponseAmino {
    const obj: any = {};
    obj.schemaCode = message.schemaCode === '' ? undefined : message.schemaCode;
    obj.newMethod = message.newMethod === '' ? undefined : message.newMethod;
    return obj;
  },
  fromAminoMsg(object: MsgSetUriRetrievalMethodResponseAminoMsg): MsgSetUriRetrievalMethodResponse {
    return MsgSetUriRetrievalMethodResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetUriRetrievalMethodResponseProtoMsg): MsgSetUriRetrievalMethodResponse {
    return MsgSetUriRetrievalMethodResponse.decode(message.value);
  },
  toProto(message: MsgSetUriRetrievalMethodResponse): Uint8Array {
    return MsgSetUriRetrievalMethodResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetUriRetrievalMethodResponse): MsgSetUriRetrievalMethodResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetUriRetrievalMethodResponse',
      value: MsgSetUriRetrievalMethodResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetOriginChain(): MsgSetOriginChain {
  return {
    creator: '',
    schemaCode: '',
    newOriginChain: ''
  };
}
export const MsgSetOriginChain = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChain',
  encode(message: MsgSetOriginChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== '') {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newOriginChain !== '') {
      writer.uint32(26).string(message.newOriginChain);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOriginChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOriginChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.schemaCode = reader.string();
        break;
      case 3:
        message.newOriginChain = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetOriginChain>): MsgSetOriginChain {
    const message = createBaseMsgSetOriginChain();
    message.creator = object.creator ?? '';
    message.schemaCode = object.schemaCode ?? '';
    message.newOriginChain = object.newOriginChain ?? '';
    return message;
  },
  fromAmino(object: MsgSetOriginChainAmino): MsgSetOriginChain {
    const message = createBaseMsgSetOriginChain();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newOriginChain !== undefined && object.newOriginChain !== null) {
      message.newOriginChain = object.newOriginChain;
    }
    return message;
  },
  toAmino(message: MsgSetOriginChain): MsgSetOriginChainAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.schemaCode = message.schemaCode === '' ? undefined : message.schemaCode;
    obj.newOriginChain = message.newOriginChain === '' ? undefined : message.newOriginChain;
    return obj;
  },
  fromAminoMsg(object: MsgSetOriginChainAminoMsg): MsgSetOriginChain {
    return MsgSetOriginChain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOriginChainProtoMsg): MsgSetOriginChain {
    return MsgSetOriginChain.decode(message.value);
  },
  toProto(message: MsgSetOriginChain): Uint8Array {
    return MsgSetOriginChain.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOriginChain): MsgSetOriginChainProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChain',
      value: MsgSetOriginChain.encode(message).finish()
    };
  }
};
function createBaseMsgSetOriginChainResponse(): MsgSetOriginChainResponse {
  return {
    schemaCode: '',
    newOriginChain: ''
  };
}
export const MsgSetOriginChainResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChainResponse',
  encode(message: MsgSetOriginChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaCode !== '') {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newOriginChain !== '') {
      writer.uint32(18).string(message.newOriginChain);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOriginChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOriginChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.schemaCode = reader.string();
        break;
      case 2:
        message.newOriginChain = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetOriginChainResponse>): MsgSetOriginChainResponse {
    const message = createBaseMsgSetOriginChainResponse();
    message.schemaCode = object.schemaCode ?? '';
    message.newOriginChain = object.newOriginChain ?? '';
    return message;
  },
  fromAmino(object: MsgSetOriginChainResponseAmino): MsgSetOriginChainResponse {
    const message = createBaseMsgSetOriginChainResponse();
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newOriginChain !== undefined && object.newOriginChain !== null) {
      message.newOriginChain = object.newOriginChain;
    }
    return message;
  },
  toAmino(message: MsgSetOriginChainResponse): MsgSetOriginChainResponseAmino {
    const obj: any = {};
    obj.schemaCode = message.schemaCode === '' ? undefined : message.schemaCode;
    obj.newOriginChain = message.newOriginChain === '' ? undefined : message.newOriginChain;
    return obj;
  },
  fromAminoMsg(object: MsgSetOriginChainResponseAminoMsg): MsgSetOriginChainResponse {
    return MsgSetOriginChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOriginChainResponseProtoMsg): MsgSetOriginChainResponse {
    return MsgSetOriginChainResponse.decode(message.value);
  },
  toProto(message: MsgSetOriginChainResponse): Uint8Array {
    return MsgSetOriginChainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOriginChainResponse): MsgSetOriginChainResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginChainResponse',
      value: MsgSetOriginChainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetOriginContract(): MsgSetOriginContract {
  return {
    creator: '',
    schemaCode: '',
    newContractAddress: ''
  };
}
export const MsgSetOriginContract = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContract',
  encode(message: MsgSetOriginContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== '') {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newContractAddress !== '') {
      writer.uint32(26).string(message.newContractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOriginContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOriginContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.schemaCode = reader.string();
        break;
      case 3:
        message.newContractAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetOriginContract>): MsgSetOriginContract {
    const message = createBaseMsgSetOriginContract();
    message.creator = object.creator ?? '';
    message.schemaCode = object.schemaCode ?? '';
    message.newContractAddress = object.newContractAddress ?? '';
    return message;
  },
  fromAmino(object: MsgSetOriginContractAmino): MsgSetOriginContract {
    const message = createBaseMsgSetOriginContract();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newContractAddress !== undefined && object.newContractAddress !== null) {
      message.newContractAddress = object.newContractAddress;
    }
    return message;
  },
  toAmino(message: MsgSetOriginContract): MsgSetOriginContractAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.schemaCode = message.schemaCode === '' ? undefined : message.schemaCode;
    obj.newContractAddress = message.newContractAddress === '' ? undefined : message.newContractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSetOriginContractAminoMsg): MsgSetOriginContract {
    return MsgSetOriginContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOriginContractProtoMsg): MsgSetOriginContract {
    return MsgSetOriginContract.decode(message.value);
  },
  toProto(message: MsgSetOriginContract): Uint8Array {
    return MsgSetOriginContract.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOriginContract): MsgSetOriginContractProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContract',
      value: MsgSetOriginContract.encode(message).finish()
    };
  }
};
function createBaseMsgSetOriginContractResponse(): MsgSetOriginContractResponse {
  return {
    schemaCode: '',
    newContractAddress: ''
  };
}
export const MsgSetOriginContractResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContractResponse',
  encode(message: MsgSetOriginContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaCode !== '') {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newContractAddress !== '') {
      writer.uint32(18).string(message.newContractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOriginContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOriginContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.schemaCode = reader.string();
        break;
      case 2:
        message.newContractAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetOriginContractResponse>): MsgSetOriginContractResponse {
    const message = createBaseMsgSetOriginContractResponse();
    message.schemaCode = object.schemaCode ?? '';
    message.newContractAddress = object.newContractAddress ?? '';
    return message;
  },
  fromAmino(object: MsgSetOriginContractResponseAmino): MsgSetOriginContractResponse {
    const message = createBaseMsgSetOriginContractResponse();
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newContractAddress !== undefined && object.newContractAddress !== null) {
      message.newContractAddress = object.newContractAddress;
    }
    return message;
  },
  toAmino(message: MsgSetOriginContractResponse): MsgSetOriginContractResponseAmino {
    const obj: any = {};
    obj.schemaCode = message.schemaCode === '' ? undefined : message.schemaCode;
    obj.newContractAddress = message.newContractAddress === '' ? undefined : message.newContractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSetOriginContractResponseAminoMsg): MsgSetOriginContractResponse {
    return MsgSetOriginContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOriginContractResponseProtoMsg): MsgSetOriginContractResponse {
    return MsgSetOriginContractResponse.decode(message.value);
  },
  toProto(message: MsgSetOriginContractResponse): Uint8Array {
    return MsgSetOriginContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOriginContractResponse): MsgSetOriginContractResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetOriginContractResponse',
      value: MsgSetOriginContractResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetAttributeOveriding(): MsgSetAttributeOveriding {
  return {
    creator: '',
    schemaCode: '',
    newOveridingType: 0
  };
}
export const MsgSetAttributeOveriding = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveriding',
  encode(message: MsgSetAttributeOveriding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== '') {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newOveridingType !== 0) {
      writer.uint32(24).int32(message.newOveridingType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAttributeOveriding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAttributeOveriding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.schemaCode = reader.string();
        break;
      case 3:
        message.newOveridingType = reader.int32();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetAttributeOveriding>): MsgSetAttributeOveriding {
    const message = createBaseMsgSetAttributeOveriding();
    message.creator = object.creator ?? '';
    message.schemaCode = object.schemaCode ?? '';
    message.newOveridingType = object.newOveridingType ?? 0;
    return message;
  },
  fromAmino(object: MsgSetAttributeOveridingAmino): MsgSetAttributeOveriding {
    const message = createBaseMsgSetAttributeOveriding();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newOveridingType !== undefined && object.newOveridingType !== null) {
      message.newOveridingType = object.newOveridingType;
    }
    return message;
  },
  toAmino(message: MsgSetAttributeOveriding): MsgSetAttributeOveridingAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.schemaCode = message.schemaCode === '' ? undefined : message.schemaCode;
    obj.newOveridingType = message.newOveridingType === 0 ? undefined : message.newOveridingType;
    return obj;
  },
  fromAminoMsg(object: MsgSetAttributeOveridingAminoMsg): MsgSetAttributeOveriding {
    return MsgSetAttributeOveriding.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetAttributeOveridingProtoMsg): MsgSetAttributeOveriding {
    return MsgSetAttributeOveriding.decode(message.value);
  },
  toProto(message: MsgSetAttributeOveriding): Uint8Array {
    return MsgSetAttributeOveriding.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAttributeOveriding): MsgSetAttributeOveridingProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveriding',
      value: MsgSetAttributeOveriding.encode(message).finish()
    };
  }
};
function createBaseMsgSetAttributeOveridingResponse(): MsgSetAttributeOveridingResponse {
  return {
    schemaCode: '',
    newOveriding: ''
  };
}
export const MsgSetAttributeOveridingResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveridingResponse',
  encode(message: MsgSetAttributeOveridingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaCode !== '') {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newOveriding !== '') {
      writer.uint32(18).string(message.newOveriding);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAttributeOveridingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAttributeOveridingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.schemaCode = reader.string();
        break;
      case 2:
        message.newOveriding = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetAttributeOveridingResponse>): MsgSetAttributeOveridingResponse {
    const message = createBaseMsgSetAttributeOveridingResponse();
    message.schemaCode = object.schemaCode ?? '';
    message.newOveriding = object.newOveriding ?? '';
    return message;
  },
  fromAmino(object: MsgSetAttributeOveridingResponseAmino): MsgSetAttributeOveridingResponse {
    const message = createBaseMsgSetAttributeOveridingResponse();
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newOveriding !== undefined && object.newOveriding !== null) {
      message.newOveriding = object.newOveriding;
    }
    return message;
  },
  toAmino(message: MsgSetAttributeOveridingResponse): MsgSetAttributeOveridingResponseAmino {
    const obj: any = {};
    obj.schemaCode = message.schemaCode === '' ? undefined : message.schemaCode;
    obj.newOveriding = message.newOveriding === '' ? undefined : message.newOveriding;
    return obj;
  },
  fromAminoMsg(object: MsgSetAttributeOveridingResponseAminoMsg): MsgSetAttributeOveridingResponse {
    return MsgSetAttributeOveridingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetAttributeOveridingResponseProtoMsg): MsgSetAttributeOveridingResponse {
    return MsgSetAttributeOveridingResponse.decode(message.value);
  },
  toProto(message: MsgSetAttributeOveridingResponse): Uint8Array {
    return MsgSetAttributeOveridingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAttributeOveridingResponse): MsgSetAttributeOveridingResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetAttributeOveridingResponse',
      value: MsgSetAttributeOveridingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetMetadataFormat(): MsgSetMetadataFormat {
  return {
    creator: '',
    schemaCode: '',
    newFormat: ''
  };
}
export const MsgSetMetadataFormat = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormat',
  encode(message: MsgSetMetadataFormat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.schemaCode !== '') {
      writer.uint32(18).string(message.schemaCode);
    }
    if (message.newFormat !== '') {
      writer.uint32(26).string(message.newFormat);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMetadataFormat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMetadataFormat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.schemaCode = reader.string();
        break;
      case 3:
        message.newFormat = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMetadataFormat>): MsgSetMetadataFormat {
    const message = createBaseMsgSetMetadataFormat();
    message.creator = object.creator ?? '';
    message.schemaCode = object.schemaCode ?? '';
    message.newFormat = object.newFormat ?? '';
    return message;
  },
  fromAmino(object: MsgSetMetadataFormatAmino): MsgSetMetadataFormat {
    const message = createBaseMsgSetMetadataFormat();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newFormat !== undefined && object.newFormat !== null) {
      message.newFormat = object.newFormat;
    }
    return message;
  },
  toAmino(message: MsgSetMetadataFormat): MsgSetMetadataFormatAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.schemaCode = message.schemaCode === '' ? undefined : message.schemaCode;
    obj.newFormat = message.newFormat === '' ? undefined : message.newFormat;
    return obj;
  },
  fromAminoMsg(object: MsgSetMetadataFormatAminoMsg): MsgSetMetadataFormat {
    return MsgSetMetadataFormat.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMetadataFormatProtoMsg): MsgSetMetadataFormat {
    return MsgSetMetadataFormat.decode(message.value);
  },
  toProto(message: MsgSetMetadataFormat): Uint8Array {
    return MsgSetMetadataFormat.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMetadataFormat): MsgSetMetadataFormatProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormat',
      value: MsgSetMetadataFormat.encode(message).finish()
    };
  }
};
function createBaseMsgSetMetadataFormatResponse(): MsgSetMetadataFormatResponse {
  return {
    schemaCode: '',
    newFormat: ''
  };
}
export const MsgSetMetadataFormatResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormatResponse',
  encode(message: MsgSetMetadataFormatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaCode !== '') {
      writer.uint32(10).string(message.schemaCode);
    }
    if (message.newFormat !== '') {
      writer.uint32(18).string(message.newFormat);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMetadataFormatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMetadataFormatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.schemaCode = reader.string();
        break;
      case 2:
        message.newFormat = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetMetadataFormatResponse>): MsgSetMetadataFormatResponse {
    const message = createBaseMsgSetMetadataFormatResponse();
    message.schemaCode = object.schemaCode ?? '';
    message.newFormat = object.newFormat ?? '';
    return message;
  },
  fromAmino(object: MsgSetMetadataFormatResponseAmino): MsgSetMetadataFormatResponse {
    const message = createBaseMsgSetMetadataFormatResponse();
    if (object.schemaCode !== undefined && object.schemaCode !== null) {
      message.schemaCode = object.schemaCode;
    }
    if (object.newFormat !== undefined && object.newFormat !== null) {
      message.newFormat = object.newFormat;
    }
    return message;
  },
  toAmino(message: MsgSetMetadataFormatResponse): MsgSetMetadataFormatResponseAmino {
    const obj: any = {};
    obj.schemaCode = message.schemaCode === '' ? undefined : message.schemaCode;
    obj.newFormat = message.newFormat === '' ? undefined : message.newFormat;
    return obj;
  },
  fromAminoMsg(object: MsgSetMetadataFormatResponseAminoMsg): MsgSetMetadataFormatResponse {
    return MsgSetMetadataFormatResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMetadataFormatResponseProtoMsg): MsgSetMetadataFormatResponse {
    return MsgSetMetadataFormatResponse.decode(message.value);
  },
  toProto(message: MsgSetMetadataFormatResponse): Uint8Array {
    return MsgSetMetadataFormatResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMetadataFormatResponse): MsgSetMetadataFormatResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgSetMetadataFormatResponse',
      value: MsgSetMetadataFormatResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateActionExecutor(): MsgCreateActionExecutor {
  return {
    creator: '',
    nftSchemaCode: '',
    executorAddress: ''
  };
}
export const MsgCreateActionExecutor = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutor',
  encode(message: MsgCreateActionExecutor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== '') {
      writer.uint32(26).string(message.executorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateActionExecutor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateActionExecutor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.executorAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateActionExecutor>): MsgCreateActionExecutor {
    const message = createBaseMsgCreateActionExecutor();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.executorAddress = object.executorAddress ?? '';
    return message;
  },
  fromAmino(object: MsgCreateActionExecutorAmino): MsgCreateActionExecutor {
    const message = createBaseMsgCreateActionExecutor();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.executorAddress !== undefined && object.executorAddress !== null) {
      message.executorAddress = object.executorAddress;
    }
    return message;
  },
  toAmino(message: MsgCreateActionExecutor): MsgCreateActionExecutorAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.executorAddress = message.executorAddress === '' ? undefined : message.executorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCreateActionExecutorAminoMsg): MsgCreateActionExecutor {
    return MsgCreateActionExecutor.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateActionExecutorProtoMsg): MsgCreateActionExecutor {
    return MsgCreateActionExecutor.decode(message.value);
  },
  toProto(message: MsgCreateActionExecutor): Uint8Array {
    return MsgCreateActionExecutor.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateActionExecutor): MsgCreateActionExecutorProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutor',
      value: MsgCreateActionExecutor.encode(message).finish()
    };
  }
};
function createBaseMsgCreateActionExecutorResponse(): MsgCreateActionExecutorResponse {
  return {
    nftSchemaCode: '',
    executorAddress: ''
  };
}
export const MsgCreateActionExecutorResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutorResponse',
  encode(message: MsgCreateActionExecutorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== '') {
      writer.uint32(18).string(message.executorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateActionExecutorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateActionExecutorResponse();
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
  fromPartial(object: Partial<MsgCreateActionExecutorResponse>): MsgCreateActionExecutorResponse {
    const message = createBaseMsgCreateActionExecutorResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.executorAddress = object.executorAddress ?? '';
    return message;
  },
  fromAmino(object: MsgCreateActionExecutorResponseAmino): MsgCreateActionExecutorResponse {
    const message = createBaseMsgCreateActionExecutorResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.executorAddress !== undefined && object.executorAddress !== null) {
      message.executorAddress = object.executorAddress;
    }
    return message;
  },
  toAmino(message: MsgCreateActionExecutorResponse): MsgCreateActionExecutorResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.executorAddress = message.executorAddress === '' ? undefined : message.executorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCreateActionExecutorResponseAminoMsg): MsgCreateActionExecutorResponse {
    return MsgCreateActionExecutorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateActionExecutorResponseProtoMsg): MsgCreateActionExecutorResponse {
    return MsgCreateActionExecutorResponse.decode(message.value);
  },
  toProto(message: MsgCreateActionExecutorResponse): Uint8Array {
    return MsgCreateActionExecutorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateActionExecutorResponse): MsgCreateActionExecutorResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateActionExecutorResponse',
      value: MsgCreateActionExecutorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateActionExecutor(): MsgUpdateActionExecutor {
  return {
    creator: '',
    nftSchemaCode: '',
    executorAddress: ''
  };
}
export const MsgUpdateActionExecutor = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionExecutor',
  encode(message: MsgUpdateActionExecutor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== '') {
      writer.uint32(26).string(message.executorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateActionExecutor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateActionExecutor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.executorAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateActionExecutor>): MsgUpdateActionExecutor {
    const message = createBaseMsgUpdateActionExecutor();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.executorAddress = object.executorAddress ?? '';
    return message;
  },
  fromAmino(object: MsgUpdateActionExecutorAmino): MsgUpdateActionExecutor {
    const message = createBaseMsgUpdateActionExecutor();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.executorAddress !== undefined && object.executorAddress !== null) {
      message.executorAddress = object.executorAddress;
    }
    return message;
  },
  toAmino(message: MsgUpdateActionExecutor): MsgUpdateActionExecutorAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.executorAddress = message.executorAddress === '' ? undefined : message.executorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateActionExecutorAminoMsg): MsgUpdateActionExecutor {
    return MsgUpdateActionExecutor.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateActionExecutorProtoMsg): MsgUpdateActionExecutor {
    return MsgUpdateActionExecutor.decode(message.value);
  },
  toProto(message: MsgUpdateActionExecutor): Uint8Array {
    return MsgUpdateActionExecutor.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateActionExecutor): MsgUpdateActionExecutorProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionExecutor',
      value: MsgUpdateActionExecutor.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateActionExecutorResponse(): MsgUpdateActionExecutorResponse {
  return {
    nftSchemaCode: '',
    executorAddress: ''
  };
}
export const MsgUpdateActionExecutorResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionExecutorResponse',
  encode(message: MsgUpdateActionExecutorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== '') {
      writer.uint32(18).string(message.executorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateActionExecutorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateActionExecutorResponse();
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
  fromPartial(object: Partial<MsgUpdateActionExecutorResponse>): MsgUpdateActionExecutorResponse {
    const message = createBaseMsgUpdateActionExecutorResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.executorAddress = object.executorAddress ?? '';
    return message;
  },
  fromAmino(object: MsgUpdateActionExecutorResponseAmino): MsgUpdateActionExecutorResponse {
    const message = createBaseMsgUpdateActionExecutorResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.executorAddress !== undefined && object.executorAddress !== null) {
      message.executorAddress = object.executorAddress;
    }
    return message;
  },
  toAmino(message: MsgUpdateActionExecutorResponse): MsgUpdateActionExecutorResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.executorAddress = message.executorAddress === '' ? undefined : message.executorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateActionExecutorResponseAminoMsg): MsgUpdateActionExecutorResponse {
    return MsgUpdateActionExecutorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateActionExecutorResponseProtoMsg): MsgUpdateActionExecutorResponse {
    return MsgUpdateActionExecutorResponse.decode(message.value);
  },
  toProto(message: MsgUpdateActionExecutorResponse): Uint8Array {
    return MsgUpdateActionExecutorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateActionExecutorResponse): MsgUpdateActionExecutorResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionExecutorResponse',
      value: MsgUpdateActionExecutorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteActionExecutor(): MsgDeleteActionExecutor {
  return {
    creator: '',
    nftSchemaCode: '',
    executorAddress: ''
  };
}
export const MsgDeleteActionExecutor = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutor',
  encode(message: MsgDeleteActionExecutor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== '') {
      writer.uint32(26).string(message.executorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteActionExecutor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteActionExecutor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.executorAddress = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteActionExecutor>): MsgDeleteActionExecutor {
    const message = createBaseMsgDeleteActionExecutor();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.executorAddress = object.executorAddress ?? '';
    return message;
  },
  fromAmino(object: MsgDeleteActionExecutorAmino): MsgDeleteActionExecutor {
    const message = createBaseMsgDeleteActionExecutor();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.executorAddress !== undefined && object.executorAddress !== null) {
      message.executorAddress = object.executorAddress;
    }
    return message;
  },
  toAmino(message: MsgDeleteActionExecutor): MsgDeleteActionExecutorAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.executorAddress = message.executorAddress === '' ? undefined : message.executorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteActionExecutorAminoMsg): MsgDeleteActionExecutor {
    return MsgDeleteActionExecutor.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteActionExecutorProtoMsg): MsgDeleteActionExecutor {
    return MsgDeleteActionExecutor.decode(message.value);
  },
  toProto(message: MsgDeleteActionExecutor): Uint8Array {
    return MsgDeleteActionExecutor.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteActionExecutor): MsgDeleteActionExecutorProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutor',
      value: MsgDeleteActionExecutor.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteActionExecutorResponse(): MsgDeleteActionExecutorResponse {
  return {
    nftSchemaCode: '',
    executorAddress: ''
  };
}
export const MsgDeleteActionExecutorResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutorResponse',
  encode(message: MsgDeleteActionExecutorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.executorAddress !== '') {
      writer.uint32(18).string(message.executorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteActionExecutorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteActionExecutorResponse();
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
  fromPartial(object: Partial<MsgDeleteActionExecutorResponse>): MsgDeleteActionExecutorResponse {
    const message = createBaseMsgDeleteActionExecutorResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.executorAddress = object.executorAddress ?? '';
    return message;
  },
  fromAmino(object: MsgDeleteActionExecutorResponseAmino): MsgDeleteActionExecutorResponse {
    const message = createBaseMsgDeleteActionExecutorResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.executorAddress !== undefined && object.executorAddress !== null) {
      message.executorAddress = object.executorAddress;
    }
    return message;
  },
  toAmino(message: MsgDeleteActionExecutorResponse): MsgDeleteActionExecutorResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.executorAddress = message.executorAddress === '' ? undefined : message.executorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteActionExecutorResponseAminoMsg): MsgDeleteActionExecutorResponse {
    return MsgDeleteActionExecutorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteActionExecutorResponseProtoMsg): MsgDeleteActionExecutorResponse {
    return MsgDeleteActionExecutorResponse.decode(message.value);
  },
  toProto(message: MsgDeleteActionExecutorResponse): Uint8Array {
    return MsgDeleteActionExecutorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteActionExecutorResponse): MsgDeleteActionExecutorResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteActionExecutorResponse',
      value: MsgDeleteActionExecutorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSchemaAttribute(): MsgUpdateSchemaAttribute {
  return {
    creator: '',
    nftSchemaCode: '',
    base64UpdateAttriuteDefenition: ''
  };
}
export const MsgUpdateSchemaAttribute = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttribute',
  encode(message: MsgUpdateSchemaAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.base64UpdateAttriuteDefenition !== '') {
      writer.uint32(26).string(message.base64UpdateAttriuteDefenition);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSchemaAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSchemaAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.base64UpdateAttriuteDefenition = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateSchemaAttribute>): MsgUpdateSchemaAttribute {
    const message = createBaseMsgUpdateSchemaAttribute();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.base64UpdateAttriuteDefenition = object.base64UpdateAttriuteDefenition ?? '';
    return message;
  },
  fromAmino(object: MsgUpdateSchemaAttributeAmino): MsgUpdateSchemaAttribute {
    const message = createBaseMsgUpdateSchemaAttribute();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.Base64UpdateAttriuteDefenition !== undefined && object.Base64UpdateAttriuteDefenition !== null) {
      message.base64UpdateAttriuteDefenition = object.Base64UpdateAttriuteDefenition;
    }
    return message;
  },
  toAmino(message: MsgUpdateSchemaAttribute): MsgUpdateSchemaAttributeAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.Base64UpdateAttriuteDefenition = message.base64UpdateAttriuteDefenition === '' ? undefined : message.base64UpdateAttriuteDefenition;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSchemaAttributeAminoMsg): MsgUpdateSchemaAttribute {
    return MsgUpdateSchemaAttribute.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSchemaAttributeProtoMsg): MsgUpdateSchemaAttribute {
    return MsgUpdateSchemaAttribute.decode(message.value);
  },
  toProto(message: MsgUpdateSchemaAttribute): Uint8Array {
    return MsgUpdateSchemaAttribute.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSchemaAttribute): MsgUpdateSchemaAttributeProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttribute',
      value: MsgUpdateSchemaAttribute.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSchemaAttributeResponse(): MsgUpdateSchemaAttributeResponse {
  return {
    nftSchemaCode: '',
    name: ''
  };
}
export const MsgUpdateSchemaAttributeResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttributeResponse',
  encode(message: MsgUpdateSchemaAttributeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSchemaAttributeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSchemaAttributeResponse();
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
  fromPartial(object: Partial<MsgUpdateSchemaAttributeResponse>): MsgUpdateSchemaAttributeResponse {
    const message = createBaseMsgUpdateSchemaAttributeResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: MsgUpdateSchemaAttributeResponseAmino): MsgUpdateSchemaAttributeResponse {
    const message = createBaseMsgUpdateSchemaAttributeResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgUpdateSchemaAttributeResponse): MsgUpdateSchemaAttributeResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSchemaAttributeResponseAminoMsg): MsgUpdateSchemaAttributeResponse {
    return MsgUpdateSchemaAttributeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSchemaAttributeResponseProtoMsg): MsgUpdateSchemaAttributeResponse {
    return MsgUpdateSchemaAttributeResponse.decode(message.value);
  },
  toProto(message: MsgUpdateSchemaAttributeResponse): Uint8Array {
    return MsgUpdateSchemaAttributeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSchemaAttributeResponse): MsgUpdateSchemaAttributeResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateSchemaAttributeResponse',
      value: MsgUpdateSchemaAttributeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAction(): MsgUpdateAction {
  return {
    creator: '',
    nftSchemaCode: '',
    base64UpdateAction: ''
  };
}
export const MsgUpdateAction = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateAction',
  encode(message: MsgUpdateAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.base64UpdateAction !== '') {
      writer.uint32(26).string(message.base64UpdateAction);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.base64UpdateAction = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAction>): MsgUpdateAction {
    const message = createBaseMsgUpdateAction();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.base64UpdateAction = object.base64UpdateAction ?? '';
    return message;
  },
  fromAmino(object: MsgUpdateActionAmino): MsgUpdateAction {
    const message = createBaseMsgUpdateAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.base64UpdateAction !== undefined && object.base64UpdateAction !== null) {
      message.base64UpdateAction = object.base64UpdateAction;
    }
    return message;
  },
  toAmino(message: MsgUpdateAction): MsgUpdateActionAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.base64UpdateAction = message.base64UpdateAction === '' ? undefined : message.base64UpdateAction;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateActionAminoMsg): MsgUpdateAction {
    return MsgUpdateAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateActionProtoMsg): MsgUpdateAction {
    return MsgUpdateAction.decode(message.value);
  },
  toProto(message: MsgUpdateAction): Uint8Array {
    return MsgUpdateAction.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAction): MsgUpdateActionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateAction',
      value: MsgUpdateAction.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateActionResponse(): MsgUpdateActionResponse {
  return {
    nftSchemaCode: '',
    name: ''
  };
}
export const MsgUpdateActionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionResponse',
  encode(message: MsgUpdateActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateActionResponse();
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
  fromPartial(object: Partial<MsgUpdateActionResponse>): MsgUpdateActionResponse {
    const message = createBaseMsgUpdateActionResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: MsgUpdateActionResponseAmino): MsgUpdateActionResponse {
    const message = createBaseMsgUpdateActionResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgUpdateActionResponse): MsgUpdateActionResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateActionResponseAminoMsg): MsgUpdateActionResponse {
    return MsgUpdateActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateActionResponseProtoMsg): MsgUpdateActionResponse {
    return MsgUpdateActionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateActionResponse): Uint8Array {
    return MsgUpdateActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateActionResponse): MsgUpdateActionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateActionResponse',
      value: MsgUpdateActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVirtualAction(): MsgCreateVirtualAction {
  return {
    creator: '',
    nftSchemaCode: '',
    newActions: []
  };
}
export const MsgCreateVirtualAction = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualAction',
  encode(message: MsgCreateVirtualAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    for (const v of message.newActions) {
      Action.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVirtualAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVirtualAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.newActions.push(Action.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateVirtualAction>): MsgCreateVirtualAction {
    const message = createBaseMsgCreateVirtualAction();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.newActions = object.newActions?.map(e => Action.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateVirtualActionAmino): MsgCreateVirtualAction {
    const message = createBaseMsgCreateVirtualAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.newActions = object.newActions?.map(e => Action.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateVirtualAction): MsgCreateVirtualActionAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    if (message.newActions) {
      obj.newActions = message.newActions.map(e => e ? Action.toAmino(e) : undefined);
    } else {
      obj.newActions = message.newActions;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateVirtualActionAminoMsg): MsgCreateVirtualAction {
    return MsgCreateVirtualAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateVirtualActionProtoMsg): MsgCreateVirtualAction {
    return MsgCreateVirtualAction.decode(message.value);
  },
  toProto(message: MsgCreateVirtualAction): Uint8Array {
    return MsgCreateVirtualAction.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVirtualAction): MsgCreateVirtualActionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualAction',
      value: MsgCreateVirtualAction.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVirtualActionResponse(): MsgCreateVirtualActionResponse {
  return {
    nftSchemaCode: '',
    virtualAction: []
  };
}
export const MsgCreateVirtualActionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualActionResponse',
  encode(message: MsgCreateVirtualActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.virtualAction) {
      VirtualAction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVirtualActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVirtualActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.virtualAction.push(VirtualAction.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateVirtualActionResponse>): MsgCreateVirtualActionResponse {
    const message = createBaseMsgCreateVirtualActionResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.virtualAction = object.virtualAction?.map(e => VirtualAction.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateVirtualActionResponseAmino): MsgCreateVirtualActionResponse {
    const message = createBaseMsgCreateVirtualActionResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.virtualAction = object.virtualAction?.map(e => VirtualAction.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateVirtualActionResponse): MsgCreateVirtualActionResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    if (message.virtualAction) {
      obj.virtualAction = message.virtualAction.map(e => e ? VirtualAction.toAmino(e) : undefined);
    } else {
      obj.virtualAction = message.virtualAction;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateVirtualActionResponseAminoMsg): MsgCreateVirtualActionResponse {
    return MsgCreateVirtualActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateVirtualActionResponseProtoMsg): MsgCreateVirtualActionResponse {
    return MsgCreateVirtualActionResponse.decode(message.value);
  },
  toProto(message: MsgCreateVirtualActionResponse): Uint8Array {
    return MsgCreateVirtualActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVirtualActionResponse): MsgCreateVirtualActionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualActionResponse',
      value: MsgCreateVirtualActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateVirtualAction(): MsgUpdateVirtualAction {
  return {
    creator: '',
    nftSchemaCode: '',
    newActions: []
  };
}
export const MsgUpdateVirtualAction = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualAction',
  encode(message: MsgUpdateVirtualAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    for (const v of message.newActions) {
      Action.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateVirtualAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateVirtualAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.newActions.push(Action.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateVirtualAction>): MsgUpdateVirtualAction {
    const message = createBaseMsgUpdateVirtualAction();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.newActions = object.newActions?.map(e => Action.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateVirtualActionAmino): MsgUpdateVirtualAction {
    const message = createBaseMsgUpdateVirtualAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.newActions = object.newActions?.map(e => Action.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateVirtualAction): MsgUpdateVirtualActionAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    if (message.newActions) {
      obj.newActions = message.newActions.map(e => e ? Action.toAmino(e) : undefined);
    } else {
      obj.newActions = message.newActions;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateVirtualActionAminoMsg): MsgUpdateVirtualAction {
    return MsgUpdateVirtualAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateVirtualActionProtoMsg): MsgUpdateVirtualAction {
    return MsgUpdateVirtualAction.decode(message.value);
  },
  toProto(message: MsgUpdateVirtualAction): Uint8Array {
    return MsgUpdateVirtualAction.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateVirtualAction): MsgUpdateVirtualActionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualAction',
      value: MsgUpdateVirtualAction.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateVirtualActionResponse(): MsgUpdateVirtualActionResponse {
  return {
    nftSchemaCode: '',
    virtualAction: []
  };
}
export const MsgUpdateVirtualActionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualActionResponse',
  encode(message: MsgUpdateVirtualActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaCode !== '') {
      writer.uint32(10).string(message.nftSchemaCode);
    }
    for (const v of message.virtualAction) {
      VirtualAction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateVirtualActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateVirtualActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaCode = reader.string();
        break;
      case 2:
        message.virtualAction.push(VirtualAction.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateVirtualActionResponse>): MsgUpdateVirtualActionResponse {
    const message = createBaseMsgUpdateVirtualActionResponse();
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.virtualAction = object.virtualAction?.map(e => VirtualAction.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateVirtualActionResponseAmino): MsgUpdateVirtualActionResponse {
    const message = createBaseMsgUpdateVirtualActionResponse();
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    message.virtualAction = object.virtualAction?.map(e => VirtualAction.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateVirtualActionResponse): MsgUpdateVirtualActionResponseAmino {
    const obj: any = {};
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    if (message.virtualAction) {
      obj.virtualAction = message.virtualAction.map(e => e ? VirtualAction.toAmino(e) : undefined);
    } else {
      obj.virtualAction = message.virtualAction;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateVirtualActionResponseAminoMsg): MsgUpdateVirtualActionResponse {
    return MsgUpdateVirtualActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateVirtualActionResponseProtoMsg): MsgUpdateVirtualActionResponse {
    return MsgUpdateVirtualActionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateVirtualActionResponse): Uint8Array {
    return MsgUpdateVirtualActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateVirtualActionResponse): MsgUpdateVirtualActionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgUpdateVirtualActionResponse',
      value: MsgUpdateVirtualActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteVirtualAction(): MsgDeleteVirtualAction {
  return {
    creator: '',
    nftSchemaCode: '',
    name: ''
  };
}
export const MsgDeleteVirtualAction = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualAction',
  encode(message: MsgDeleteVirtualAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(18).string(message.nftSchemaCode);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteVirtualAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteVirtualAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaCode = reader.string();
        break;
      case 3:
        message.name = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteVirtualAction>): MsgDeleteVirtualAction {
    const message = createBaseMsgDeleteVirtualAction();
    message.creator = object.creator ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.name = object.name ?? '';
    return message;
  },
  fromAmino(object: MsgDeleteVirtualActionAmino): MsgDeleteVirtualAction {
    const message = createBaseMsgDeleteVirtualAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgDeleteVirtualAction): MsgDeleteVirtualActionAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.name = message.name === '' ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteVirtualActionAminoMsg): MsgDeleteVirtualAction {
    return MsgDeleteVirtualAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteVirtualActionProtoMsg): MsgDeleteVirtualAction {
    return MsgDeleteVirtualAction.decode(message.value);
  },
  toProto(message: MsgDeleteVirtualAction): Uint8Array {
    return MsgDeleteVirtualAction.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteVirtualAction): MsgDeleteVirtualActionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualAction',
      value: MsgDeleteVirtualAction.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteVirtualActionResponse(): MsgDeleteVirtualActionResponse {
  return {
    creator: '',
    status: ''
  };
}
export const MsgDeleteVirtualActionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualActionResponse',
  encode(message: MsgDeleteVirtualActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.status !== '') {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteVirtualActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteVirtualActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.status = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteVirtualActionResponse>): MsgDeleteVirtualActionResponse {
    const message = createBaseMsgDeleteVirtualActionResponse();
    message.creator = object.creator ?? '';
    message.status = object.status ?? '';
    return message;
  },
  fromAmino(object: MsgDeleteVirtualActionResponseAmino): MsgDeleteVirtualActionResponse {
    const message = createBaseMsgDeleteVirtualActionResponse();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MsgDeleteVirtualActionResponse): MsgDeleteVirtualActionResponseAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.status = message.status === '' ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteVirtualActionResponseAminoMsg): MsgDeleteVirtualActionResponse {
    return MsgDeleteVirtualActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteVirtualActionResponseProtoMsg): MsgDeleteVirtualActionResponse {
    return MsgDeleteVirtualActionResponse.decode(message.value);
  },
  toProto(message: MsgDeleteVirtualActionResponse): Uint8Array {
    return MsgDeleteVirtualActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteVirtualActionResponse): MsgDeleteVirtualActionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualActionResponse',
      value: MsgDeleteVirtualActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVirtualSchemaProposal(): MsgCreateVirtualSchemaProposal {
  return {
    creator: '',
    virtualNftSchemaCode: '',
    registry: []
  };
}
export const MsgCreateVirtualSchemaProposal = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaProposal',
  encode(message: MsgCreateVirtualSchemaProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.virtualNftSchemaCode !== '') {
      writer.uint32(18).string(message.virtualNftSchemaCode);
    }
    for (const v of message.registry) {
      VirtualSchemaRegistryRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVirtualSchemaProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVirtualSchemaProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.virtualNftSchemaCode = reader.string();
        break;
      case 3:
        message.registry.push(VirtualSchemaRegistryRequest.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateVirtualSchemaProposal>): MsgCreateVirtualSchemaProposal {
    const message = createBaseMsgCreateVirtualSchemaProposal();
    message.creator = object.creator ?? '';
    message.virtualNftSchemaCode = object.virtualNftSchemaCode ?? '';
    message.registry = object.registry?.map(e => VirtualSchemaRegistryRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateVirtualSchemaProposalAmino): MsgCreateVirtualSchemaProposal {
    const message = createBaseMsgCreateVirtualSchemaProposal();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.virtualNftSchemaCode !== undefined && object.virtualNftSchemaCode !== null) {
      message.virtualNftSchemaCode = object.virtualNftSchemaCode;
    }
    message.registry = object.registry?.map(e => VirtualSchemaRegistryRequest.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateVirtualSchemaProposal): MsgCreateVirtualSchemaProposalAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.virtualNftSchemaCode = message.virtualNftSchemaCode === '' ? undefined : message.virtualNftSchemaCode;
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? VirtualSchemaRegistryRequest.toAmino(e) : undefined);
    } else {
      obj.registry = message.registry;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateVirtualSchemaProposalAminoMsg): MsgCreateVirtualSchemaProposal {
    return MsgCreateVirtualSchemaProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateVirtualSchemaProposalProtoMsg): MsgCreateVirtualSchemaProposal {
    return MsgCreateVirtualSchemaProposal.decode(message.value);
  },
  toProto(message: MsgCreateVirtualSchemaProposal): Uint8Array {
    return MsgCreateVirtualSchemaProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVirtualSchemaProposal): MsgCreateVirtualSchemaProposalProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaProposal',
      value: MsgCreateVirtualSchemaProposal.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVirtualSchemaResponse(): MsgCreateVirtualSchemaResponse {
  return {
    id: '',
    virtualNftSchemaCode: ''
  };
}
export const MsgCreateVirtualSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaResponse',
  encode(message: MsgCreateVirtualSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.virtualNftSchemaCode !== '') {
      writer.uint32(18).string(message.virtualNftSchemaCode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVirtualSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVirtualSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.id = reader.string();
        break;
      case 2:
        message.virtualNftSchemaCode = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateVirtualSchemaResponse>): MsgCreateVirtualSchemaResponse {
    const message = createBaseMsgCreateVirtualSchemaResponse();
    message.id = object.id ?? '';
    message.virtualNftSchemaCode = object.virtualNftSchemaCode ?? '';
    return message;
  },
  fromAmino(object: MsgCreateVirtualSchemaResponseAmino): MsgCreateVirtualSchemaResponse {
    const message = createBaseMsgCreateVirtualSchemaResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.virtualNftSchemaCode !== undefined && object.virtualNftSchemaCode !== null) {
      message.virtualNftSchemaCode = object.virtualNftSchemaCode;
    }
    return message;
  },
  toAmino(message: MsgCreateVirtualSchemaResponse): MsgCreateVirtualSchemaResponseAmino {
    const obj: any = {};
    obj.id = message.id === '' ? undefined : message.id;
    obj.virtualNftSchemaCode = message.virtualNftSchemaCode === '' ? undefined : message.virtualNftSchemaCode;
    return obj;
  },
  fromAminoMsg(object: MsgCreateVirtualSchemaResponseAminoMsg): MsgCreateVirtualSchemaResponse {
    return MsgCreateVirtualSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateVirtualSchemaResponseProtoMsg): MsgCreateVirtualSchemaResponse {
    return MsgCreateVirtualSchemaResponse.decode(message.value);
  },
  toProto(message: MsgCreateVirtualSchemaResponse): Uint8Array {
    return MsgCreateVirtualSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVirtualSchemaResponse): MsgCreateVirtualSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgCreateVirtualSchemaResponse',
      value: MsgCreateVirtualSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteVirtualSchema(): MsgDeleteVirtualSchema {
  return {
    creator: '',
    virtualNftSchemaCode: ''
  };
}
export const MsgDeleteVirtualSchema = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchema',
  encode(message: MsgDeleteVirtualSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.virtualNftSchemaCode !== '') {
      writer.uint32(18).string(message.virtualNftSchemaCode);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteVirtualSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteVirtualSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.virtualNftSchemaCode = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteVirtualSchema>): MsgDeleteVirtualSchema {
    const message = createBaseMsgDeleteVirtualSchema();
    message.creator = object.creator ?? '';
    message.virtualNftSchemaCode = object.virtualNftSchemaCode ?? '';
    return message;
  },
  fromAmino(object: MsgDeleteVirtualSchemaAmino): MsgDeleteVirtualSchema {
    const message = createBaseMsgDeleteVirtualSchema();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.virtualNftSchemaCode !== undefined && object.virtualNftSchemaCode !== null) {
      message.virtualNftSchemaCode = object.virtualNftSchemaCode;
    }
    return message;
  },
  toAmino(message: MsgDeleteVirtualSchema): MsgDeleteVirtualSchemaAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.virtualNftSchemaCode = message.virtualNftSchemaCode === '' ? undefined : message.virtualNftSchemaCode;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteVirtualSchemaAminoMsg): MsgDeleteVirtualSchema {
    return MsgDeleteVirtualSchema.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteVirtualSchemaProtoMsg): MsgDeleteVirtualSchema {
    return MsgDeleteVirtualSchema.decode(message.value);
  },
  toProto(message: MsgDeleteVirtualSchema): Uint8Array {
    return MsgDeleteVirtualSchema.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteVirtualSchema): MsgDeleteVirtualSchemaProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchema',
      value: MsgDeleteVirtualSchema.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteVirtualSchemaResponse(): MsgDeleteVirtualSchemaResponse {
  return {};
}
export const MsgDeleteVirtualSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchemaResponse',
  encode(_: MsgDeleteVirtualSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteVirtualSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteVirtualSchemaResponse();
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
  fromPartial(_: Partial<MsgDeleteVirtualSchemaResponse>): MsgDeleteVirtualSchemaResponse {
    const message = createBaseMsgDeleteVirtualSchemaResponse();
    return message;
  },
  fromAmino(_: MsgDeleteVirtualSchemaResponseAmino): MsgDeleteVirtualSchemaResponse {
    const message = createBaseMsgDeleteVirtualSchemaResponse();
    return message;
  },
  toAmino(_: MsgDeleteVirtualSchemaResponse): MsgDeleteVirtualSchemaResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteVirtualSchemaResponseAminoMsg): MsgDeleteVirtualSchemaResponse {
    return MsgDeleteVirtualSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteVirtualSchemaResponseProtoMsg): MsgDeleteVirtualSchemaResponse {
    return MsgDeleteVirtualSchemaResponse.decode(message.value);
  },
  toProto(message: MsgDeleteVirtualSchemaResponse): Uint8Array {
    return MsgDeleteVirtualSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteVirtualSchemaResponse): MsgDeleteVirtualSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDeleteVirtualSchemaResponse',
      value: MsgDeleteVirtualSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVoteCreateVirtualSchema(): MsgVoteCreateVirtualSchema {
  return {
    creator: '',
    id: '',
    nftSchemaCode: '',
    option: 0
  };
}
export const MsgVoteCreateVirtualSchema = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchema',
  encode(message: MsgVoteCreateVirtualSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id);
    }
    if (message.nftSchemaCode !== '') {
      writer.uint32(26).string(message.nftSchemaCode);
    }
    if (message.option !== 0) {
      writer.uint32(32).int32(message.option);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteCreateVirtualSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteCreateVirtualSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.id = reader.string();
        break;
      case 3:
        message.nftSchemaCode = reader.string();
        break;
      case 4:
        message.option = reader.int32() as any;
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgVoteCreateVirtualSchema>): MsgVoteCreateVirtualSchema {
    const message = createBaseMsgVoteCreateVirtualSchema();
    message.creator = object.creator ?? '';
    message.id = object.id ?? '';
    message.nftSchemaCode = object.nftSchemaCode ?? '';
    message.option = object.option ?? 0;
    return message;
  },
  fromAmino(object: MsgVoteCreateVirtualSchemaAmino): MsgVoteCreateVirtualSchema {
    const message = createBaseMsgVoteCreateVirtualSchema();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.nftSchemaCode !== undefined && object.nftSchemaCode !== null) {
      message.nftSchemaCode = object.nftSchemaCode;
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    return message;
  },
  toAmino(message: MsgVoteCreateVirtualSchema): MsgVoteCreateVirtualSchemaAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.id = message.id === '' ? undefined : message.id;
    obj.nftSchemaCode = message.nftSchemaCode === '' ? undefined : message.nftSchemaCode;
    obj.option = message.option === 0 ? undefined : message.option;
    return obj;
  },
  fromAminoMsg(object: MsgVoteCreateVirtualSchemaAminoMsg): MsgVoteCreateVirtualSchema {
    return MsgVoteCreateVirtualSchema.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoteCreateVirtualSchemaProtoMsg): MsgVoteCreateVirtualSchema {
    return MsgVoteCreateVirtualSchema.decode(message.value);
  },
  toProto(message: MsgVoteCreateVirtualSchema): Uint8Array {
    return MsgVoteCreateVirtualSchema.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteCreateVirtualSchema): MsgVoteCreateVirtualSchemaProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchema',
      value: MsgVoteCreateVirtualSchema.encode(message).finish()
    };
  }
};
function createBaseMsgVoteCreateVirtualSchemaResponse(): MsgVoteCreateVirtualSchemaResponse {
  return {};
}
export const MsgVoteCreateVirtualSchemaResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchemaResponse',
  encode(_: MsgVoteCreateVirtualSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteCreateVirtualSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteCreateVirtualSchemaResponse();
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
  fromPartial(_: Partial<MsgVoteCreateVirtualSchemaResponse>): MsgVoteCreateVirtualSchemaResponse {
    const message = createBaseMsgVoteCreateVirtualSchemaResponse();
    return message;
  },
  fromAmino(_: MsgVoteCreateVirtualSchemaResponseAmino): MsgVoteCreateVirtualSchemaResponse {
    const message = createBaseMsgVoteCreateVirtualSchemaResponse();
    return message;
  },
  toAmino(_: MsgVoteCreateVirtualSchemaResponse): MsgVoteCreateVirtualSchemaResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteCreateVirtualSchemaResponseAminoMsg): MsgVoteCreateVirtualSchemaResponse {
    return MsgVoteCreateVirtualSchemaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoteCreateVirtualSchemaResponseProtoMsg): MsgVoteCreateVirtualSchemaResponse {
    return MsgVoteCreateVirtualSchemaResponse.decode(message.value);
  },
  toProto(message: MsgVoteCreateVirtualSchemaResponse): Uint8Array {
    return MsgVoteCreateVirtualSchemaResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteCreateVirtualSchemaResponse): MsgVoteCreateVirtualSchemaResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgVoteCreateVirtualSchemaResponse',
      value: MsgVoteCreateVirtualSchemaResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDisableVirtualSchemaProposal(): MsgDisableVirtualSchemaProposal {
  return {
    creator: '',
    virtualNftSchemaCode: '',
    proposalExpiredBlock: ''
  };
}
export const MsgDisableVirtualSchemaProposal = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposal',
  encode(message: MsgDisableVirtualSchemaProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.virtualNftSchemaCode !== '') {
      writer.uint32(18).string(message.virtualNftSchemaCode);
    }
    if (message.proposalExpiredBlock !== '') {
      writer.uint32(26).string(message.proposalExpiredBlock);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableVirtualSchemaProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableVirtualSchemaProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.virtualNftSchemaCode = reader.string();
        break;
      case 3:
        message.proposalExpiredBlock = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDisableVirtualSchemaProposal>): MsgDisableVirtualSchemaProposal {
    const message = createBaseMsgDisableVirtualSchemaProposal();
    message.creator = object.creator ?? '';
    message.virtualNftSchemaCode = object.virtualNftSchemaCode ?? '';
    message.proposalExpiredBlock = object.proposalExpiredBlock ?? '';
    return message;
  },
  fromAmino(object: MsgDisableVirtualSchemaProposalAmino): MsgDisableVirtualSchemaProposal {
    const message = createBaseMsgDisableVirtualSchemaProposal();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.virtualNftSchemaCode !== undefined && object.virtualNftSchemaCode !== null) {
      message.virtualNftSchemaCode = object.virtualNftSchemaCode;
    }
    if (object.proposalExpiredBlock !== undefined && object.proposalExpiredBlock !== null) {
      message.proposalExpiredBlock = object.proposalExpiredBlock;
    }
    return message;
  },
  toAmino(message: MsgDisableVirtualSchemaProposal): MsgDisableVirtualSchemaProposalAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.virtualNftSchemaCode = message.virtualNftSchemaCode === '' ? undefined : message.virtualNftSchemaCode;
    obj.proposalExpiredBlock = message.proposalExpiredBlock === '' ? undefined : message.proposalExpiredBlock;
    return obj;
  },
  fromAminoMsg(object: MsgDisableVirtualSchemaProposalAminoMsg): MsgDisableVirtualSchemaProposal {
    return MsgDisableVirtualSchemaProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisableVirtualSchemaProposalProtoMsg): MsgDisableVirtualSchemaProposal {
    return MsgDisableVirtualSchemaProposal.decode(message.value);
  },
  toProto(message: MsgDisableVirtualSchemaProposal): Uint8Array {
    return MsgDisableVirtualSchemaProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableVirtualSchemaProposal): MsgDisableVirtualSchemaProposalProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposal',
      value: MsgDisableVirtualSchemaProposal.encode(message).finish()
    };
  }
};
function createBaseMsgDisableVirtualSchemaProposalResponse(): MsgDisableVirtualSchemaProposalResponse {
  return {
    creator: '',
    proposalId: ''
  };
}
export const MsgDisableVirtualSchemaProposalResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposalResponse',
  encode(message: MsgDisableVirtualSchemaProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.proposalId !== '') {
      writer.uint32(18).string(message.proposalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableVirtualSchemaProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableVirtualSchemaProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.proposalId = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDisableVirtualSchemaProposalResponse>): MsgDisableVirtualSchemaProposalResponse {
    const message = createBaseMsgDisableVirtualSchemaProposalResponse();
    message.creator = object.creator ?? '';
    message.proposalId = object.proposalId ?? '';
    return message;
  },
  fromAmino(object: MsgDisableVirtualSchemaProposalResponseAmino): MsgDisableVirtualSchemaProposalResponse {
    const message = createBaseMsgDisableVirtualSchemaProposalResponse();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    }
    return message;
  },
  toAmino(message: MsgDisableVirtualSchemaProposalResponse): MsgDisableVirtualSchemaProposalResponseAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.proposalId = message.proposalId === '' ? undefined : message.proposalId;
    return obj;
  },
  fromAminoMsg(object: MsgDisableVirtualSchemaProposalResponseAminoMsg): MsgDisableVirtualSchemaProposalResponse {
    return MsgDisableVirtualSchemaProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisableVirtualSchemaProposalResponseProtoMsg): MsgDisableVirtualSchemaProposalResponse {
    return MsgDisableVirtualSchemaProposalResponse.decode(message.value);
  },
  toProto(message: MsgDisableVirtualSchemaProposalResponse): Uint8Array {
    return MsgDisableVirtualSchemaProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableVirtualSchemaProposalResponse): MsgDisableVirtualSchemaProposalResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgDisableVirtualSchemaProposalResponse',
      value: MsgDisableVirtualSchemaProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPerformVirtualAction(): MsgPerformVirtualAction {
  return {
    creator: '',
    nftSchemaName: '',
    tokenIdMap: [],
    action: '',
    refId: '',
    parameters: []
  };
}
export const MsgPerformVirtualAction = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualAction',
  encode(message: MsgPerformVirtualAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftSchemaName !== '') {
      writer.uint32(18).string(message.nftSchemaName);
    }
    for (const v of message.tokenIdMap) {
      TokenIdMap.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.action !== '') {
      writer.uint32(34).string(message.action);
    }
    if (message.refId !== '') {
      writer.uint32(42).string(message.refId);
    }
    for (const v of message.parameters) {
      ActionParameter.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformVirtualAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformVirtualAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.creator = reader.string();
        break;
      case 2:
        message.nftSchemaName = reader.string();
        break;
      case 3:
        message.tokenIdMap.push(TokenIdMap.decode(reader, reader.uint32()));
        break;
      case 4:
        message.action = reader.string();
        break;
      case 5:
        message.refId = reader.string();
        break;
      case 6:
        message.parameters.push(ActionParameter.decode(reader, reader.uint32()));
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformVirtualAction>): MsgPerformVirtualAction {
    const message = createBaseMsgPerformVirtualAction();
    message.creator = object.creator ?? '';
    message.nftSchemaName = object.nftSchemaName ?? '';
    message.tokenIdMap = object.tokenIdMap?.map(e => TokenIdMap.fromPartial(e)) || [];
    message.action = object.action ?? '';
    message.refId = object.refId ?? '';
    message.parameters = object.parameters?.map(e => ActionParameter.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgPerformVirtualActionAmino): MsgPerformVirtualAction {
    const message = createBaseMsgPerformVirtualAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nftSchemaName !== undefined && object.nftSchemaName !== null) {
      message.nftSchemaName = object.nftSchemaName;
    }
    message.tokenIdMap = object.tokenIdMap?.map(e => TokenIdMap.fromAmino(e)) || [];
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.refId !== undefined && object.refId !== null) {
      message.refId = object.refId;
    }
    message.parameters = object.parameters?.map(e => ActionParameter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgPerformVirtualAction): MsgPerformVirtualActionAmino {
    const obj: any = {};
    obj.creator = message.creator === '' ? undefined : message.creator;
    obj.nftSchemaName = message.nftSchemaName === '' ? undefined : message.nftSchemaName;
    if (message.tokenIdMap) {
      obj.tokenIdMap = message.tokenIdMap.map(e => e ? TokenIdMap.toAmino(e) : undefined);
    } else {
      obj.tokenIdMap = message.tokenIdMap;
    }
    obj.action = message.action === '' ? undefined : message.action;
    obj.refId = message.refId === '' ? undefined : message.refId;
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? ActionParameter.toAmino(e) : undefined);
    } else {
      obj.parameters = message.parameters;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPerformVirtualActionAminoMsg): MsgPerformVirtualAction {
    return MsgPerformVirtualAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformVirtualActionProtoMsg): MsgPerformVirtualAction {
    return MsgPerformVirtualAction.decode(message.value);
  },
  toProto(message: MsgPerformVirtualAction): Uint8Array {
    return MsgPerformVirtualAction.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformVirtualAction): MsgPerformVirtualActionProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualAction',
      value: MsgPerformVirtualAction.encode(message).finish()
    };
  }
};
function createBaseMsgPerformVirtualActionResponse(): MsgPerformVirtualActionResponse {
  return {
    nftSchemaName: ''
  };
}
export const MsgPerformVirtualActionResponse = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualActionResponse',
  encode(message: MsgPerformVirtualActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaName !== '') {
      writer.uint32(18).string(message.nftSchemaName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPerformVirtualActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPerformVirtualActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 2:
        message.nftSchemaName = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPerformVirtualActionResponse>): MsgPerformVirtualActionResponse {
    const message = createBaseMsgPerformVirtualActionResponse();
    message.nftSchemaName = object.nftSchemaName ?? '';
    return message;
  },
  fromAmino(object: MsgPerformVirtualActionResponseAmino): MsgPerformVirtualActionResponse {
    const message = createBaseMsgPerformVirtualActionResponse();
    if (object.nftSchemaName !== undefined && object.nftSchemaName !== null) {
      message.nftSchemaName = object.nftSchemaName;
    }
    return message;
  },
  toAmino(message: MsgPerformVirtualActionResponse): MsgPerformVirtualActionResponseAmino {
    const obj: any = {};
    obj.nftSchemaName = message.nftSchemaName === '' ? undefined : message.nftSchemaName;
    return obj;
  },
  fromAminoMsg(object: MsgPerformVirtualActionResponseAminoMsg): MsgPerformVirtualActionResponse {
    return MsgPerformVirtualActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPerformVirtualActionResponseProtoMsg): MsgPerformVirtualActionResponse {
    return MsgPerformVirtualActionResponse.decode(message.value);
  },
  toProto(message: MsgPerformVirtualActionResponse): Uint8Array {
    return MsgPerformVirtualActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPerformVirtualActionResponse): MsgPerformVirtualActionResponseProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.MsgPerformVirtualActionResponse',
      value: MsgPerformVirtualActionResponse.encode(message).finish()
    };
  }
};
function createBaseTokenIdMap(): TokenIdMap {
  return {
    nftSchemaName: '',
    tokenId: ''
  };
}
export const TokenIdMap = {
  typeUrl: '/thesixnetwork.sixprotocol.nftmngr.TokenIdMap',
  encode(message: TokenIdMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftSchemaName !== '') {
      writer.uint32(10).string(message.nftSchemaName);
    }
    if (message.tokenId !== '') {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenIdMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenIdMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      case 1:
        message.nftSchemaName = reader.string();
        break;
      case 2:
        message.tokenId = reader.string();
        break;
      default:
        reader.skipType(tag & 7);
        break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TokenIdMap>): TokenIdMap {
    const message = createBaseTokenIdMap();
    message.nftSchemaName = object.nftSchemaName ?? '';
    message.tokenId = object.tokenId ?? '';
    return message;
  },
  fromAmino(object: TokenIdMapAmino): TokenIdMap {
    const message = createBaseTokenIdMap();
    if (object.nftSchemaName !== undefined && object.nftSchemaName !== null) {
      message.nftSchemaName = object.nftSchemaName;
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    }
    return message;
  },
  toAmino(message: TokenIdMap): TokenIdMapAmino {
    const obj: any = {};
    obj.nftSchemaName = message.nftSchemaName === '' ? undefined : message.nftSchemaName;
    obj.tokenId = message.tokenId === '' ? undefined : message.tokenId;
    return obj;
  },
  fromAminoMsg(object: TokenIdMapAminoMsg): TokenIdMap {
    return TokenIdMap.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenIdMapProtoMsg): TokenIdMap {
    return TokenIdMap.decode(message.value);
  },
  toProto(message: TokenIdMap): Uint8Array {
    return TokenIdMap.encode(message).finish();
  },
  toProtoMsg(message: TokenIdMap): TokenIdMapProtoMsg {
    return {
      typeUrl: '/thesixnetwork.sixprotocol.nftmngr.TokenIdMap',
      value: TokenIdMap.encode(message).finish()
    };
  }
};