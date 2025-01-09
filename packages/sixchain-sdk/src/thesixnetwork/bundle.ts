//@ts-nocheck
import * as _71 from '../nftadmin/authorization';
import * as _72 from '../nftadmin/genesis';
import * as _73 from '../nftadmin/params';
import * as _74 from '../nftadmin/permissions';
import * as _75 from '../nftadmin/query';
import * as _197 from '../nftadmin/query.rpc.Query';
import * as _76 from '../nftadmin/tx';
import * as _187 from '../nftadmin/tx.amino';
import * as _192 from '../nftadmin/tx.registry';
import * as _202 from '../nftadmin/tx.rpc.msg';
import * as _80 from '../nftmngr/action';
import * as _77 from '../nftmngr/action_by_ref_id';
import * as _78 from '../nftmngr/action_executor';
import * as _79 from '../nftmngr/action_of_schema';
import * as _81 from '../nftmngr/attribute_definition';
import * as _82 from '../nftmngr/attribute_of_schema';
import * as _83 from '../nftmngr/disable_virtual_schema';
import * as _84 from '../nftmngr/display_option';
import * as _85 from '../nftmngr/executor_of_schema';
import * as _86 from '../nftmngr/genesis';
import * as _87 from '../nftmngr/metadata_creator';
import * as _88 from '../nftmngr/nft_attribute_value';
import * as _89 from '../nftmngr/nft_collection';
import * as _90 from '../nftmngr/nft_data';
import * as _91 from '../nftmngr/nft_fee_balance';
import * as _92 from '../nftmngr/nft_fee_config';
import * as _94 from '../nftmngr/nft_schema';
import * as _93 from '../nftmngr/nft_schema_by_contract';
import * as _95 from '../nftmngr/on_chain_data';
import * as _96 from '../nftmngr/opensea_display_option';
import * as _97 from '../nftmngr/organization';
import * as _98 from '../nftmngr/origin_data';
import * as _99 from '../nftmngr/params';
import * as _100 from '../nftmngr/query';
import * as _198 from '../nftmngr/query.rpc.Query';
import * as _101 from '../nftmngr/schema_attribute';
import * as _102 from '../nftmngr/tx';
import * as _188 from '../nftmngr/tx.amino';
import * as _193 from '../nftmngr/tx.registry';
import * as _203 from '../nftmngr/tx.rpc.msg';
import * as _103 from '../nftmngr/virtual_action';
import * as _104 from '../nftmngr/virtual_schema';
import * as _105 from '../nftoracle/action_request';
import * as _106 from '../nftoracle/action_signature';
import * as _108 from '../nftoracle/action_signer';
import * as _107 from '../nftoracle/action_signer_config';
import * as _109 from '../nftoracle/binded_signer';
import * as _110 from '../nftoracle/collection_owner_request';
import * as _111 from '../nftoracle/collection_owner_signature';
import * as _112 from '../nftoracle/genesis';
import * as _113 from '../nftoracle/mint_request';
import * as _114 from '../nftoracle/opensea';
import * as _115 from '../nftoracle/oracle_config';
import * as _116 from '../nftoracle/params';
import * as _117 from '../nftoracle/query';
import * as _199 from '../nftoracle/query.rpc.Query';
import * as _118 from '../nftoracle/request';
import * as _119 from '../nftoracle/sync_action_signer';
import * as _120 from '../nftoracle/tx';
import * as _189 from '../nftoracle/tx.amino';
import * as _194 from '../nftoracle/tx.registry';
import * as _204 from '../nftoracle/tx.rpc.msg';
import * as _121 from '../protocoladmin/admin';
import * as _122 from '../protocoladmin/genesis';
import * as _123 from '../protocoladmin/group';
import * as _124 from '../protocoladmin/packet';
import * as _125 from '../protocoladmin/params';
import * as _126 from '../protocoladmin/query';
import * as _200 from '../protocoladmin/query.rpc.Query';
import * as _127 from '../protocoladmin/tx';
import * as _190 from '../protocoladmin/tx.amino';
import * as _195 from '../protocoladmin/tx.registry';
import * as _205 from '../protocoladmin/tx.rpc.msg';
import * as _128 from '../tokenmngr/burn';
import * as _129 from '../tokenmngr/genesis';
import * as _130 from '../tokenmngr/mintperm';
import * as _131 from '../tokenmngr/options';
import * as _132 from '../tokenmngr/packet';
import * as _133 from '../tokenmngr/params';
import * as _134 from '../tokenmngr/query';
import * as _201 from '../tokenmngr/query.rpc.Query';
import * as _136 from '../tokenmngr/token';
import * as _135 from '../tokenmngr/token_burn';
import * as _137 from '../tokenmngr/tx';
import * as _191 from '../tokenmngr/tx.amino';
import * as _196 from '../tokenmngr/tx.registry';
import * as _206 from '../tokenmngr/tx.rpc.msg';
import * as _211 from './rpc.query';
import * as _212 from './rpc.tx';
export namespace thesixnetwork {
  export namespace sixprotocol {
    export const nftadmin = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._187,
      ..._192,
      ..._197,
      ..._202
    };
    export const nftmngr = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._188,
      ..._193,
      ..._198,
      ..._203
    };
    export const nftoracle = {
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._189,
      ..._194,
      ..._199,
      ..._204
    };
    export const protocoladmin = {
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._190,
      ..._195,
      ..._200,
      ..._205
    };
    export const tokenmngr = {
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._191,
      ..._196,
      ..._201,
      ..._206
    };
  }
  export const ClientFactory = {
    ..._211,
    ..._212
  };
}