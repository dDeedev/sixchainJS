//@ts-nocheck
import * as _2 from './auth/v1beta1/auth';
import * as _3 from './auth/v1beta1/genesis';
import * as _4 from './auth/v1beta1/query';
import * as _163 from './auth/v1beta1/query.rpc.Query';
import * as _5 from './authz/v1beta1/authz';
import * as _6 from './authz/v1beta1/event';
import * as _7 from './authz/v1beta1/genesis';
import * as _8 from './authz/v1beta1/query';
import * as _164 from './authz/v1beta1/query.rpc.Query';
import * as _9 from './authz/v1beta1/tx';
import * as _149 from './authz/v1beta1/tx.amino';
import * as _156 from './authz/v1beta1/tx.registry';
import * as _174 from './authz/v1beta1/tx.rpc.msg';
import * as _10 from './bank/v1beta1/authz';
import * as _11 from './bank/v1beta1/bank';
import * as _12 from './bank/v1beta1/genesis';
import * as _13 from './bank/v1beta1/query';
import * as _165 from './bank/v1beta1/query.rpc.Query';
import * as _14 from './bank/v1beta1/tx';
import * as _150 from './bank/v1beta1/tx.amino';
import * as _157 from './bank/v1beta1/tx.registry';
import * as _175 from './bank/v1beta1/tx.rpc.msg';
import * as _15 from './base/abci/v1beta1/abci';
import * as _16 from './base/query/v1beta1/pagination';
import * as _17 from './base/reflection/v2alpha1/reflection';
import * as _18 from './base/v1beta1/coin';
import * as _19 from './crypto/ed25519/keys';
import * as _20 from './crypto/multisig/keys';
import * as _21 from './crypto/secp256k1/keys';
import * as _22 from './crypto/secp256r1/keys';
import * as _23 from './distribution/v1beta1/distribution';
import * as _24 from './distribution/v1beta1/genesis';
import * as _25 from './distribution/v1beta1/query';
import * as _166 from './distribution/v1beta1/query.rpc.Query';
import * as _26 from './distribution/v1beta1/tx';
import * as _151 from './distribution/v1beta1/tx.amino';
import * as _158 from './distribution/v1beta1/tx.registry';
import * as _176 from './distribution/v1beta1/tx.rpc.msg';
import * as _27 from './feegrant/v1beta1/feegrant';
import * as _28 from './feegrant/v1beta1/genesis';
import * as _29 from './feegrant/v1beta1/query';
import * as _167 from './feegrant/v1beta1/query.rpc.Query';
import * as _30 from './feegrant/v1beta1/tx';
import * as _152 from './feegrant/v1beta1/tx.amino';
import * as _159 from './feegrant/v1beta1/tx.registry';
import * as _177 from './feegrant/v1beta1/tx.rpc.msg';
import * as _31 from './gov/v1beta1/genesis';
import * as _32 from './gov/v1beta1/gov';
import * as _33 from './gov/v1beta1/query';
import * as _168 from './gov/v1beta1/query.rpc.Query';
import * as _34 from './gov/v1beta1/tx';
import * as _153 from './gov/v1beta1/tx.amino';
import * as _160 from './gov/v1beta1/tx.registry';
import * as _178 from './gov/v1beta1/tx.rpc.msg';
import * as _35 from './mint/v1beta1/genesis';
import * as _36 from './mint/v1beta1/mint';
import * as _37 from './mint/v1beta1/query';
import * as _169 from './mint/v1beta1/query.rpc.Query';
import * as _38 from './params/v1beta1/params';
import * as _39 from './params/v1beta1/query';
import * as _170 from './params/v1beta1/query.rpc.Query';
import * as _207 from './rpc.query';
import * as _208 from './rpc.tx';
import * as _40 from './staking/v1beta1/authz';
import * as _41 from './staking/v1beta1/genesis';
import * as _42 from './staking/v1beta1/query';
import * as _171 from './staking/v1beta1/query.rpc.Query';
import * as _43 from './staking/v1beta1/staking';
import * as _44 from './staking/v1beta1/tx';
import * as _154 from './staking/v1beta1/tx.amino';
import * as _161 from './staking/v1beta1/tx.registry';
import * as _179 from './staking/v1beta1/tx.rpc.msg';
import * as _45 from './staking/v1beta1/whitelist';
import * as _46 from './tx/signing/v1beta1/signing';
import * as _47 from './tx/v1beta1/service';
import * as _172 from './tx/v1beta1/service.rpc.Service';
import * as _48 from './tx/v1beta1/tx';
import * as _49 from './upgrade/v1beta1/query';
import * as _173 from './upgrade/v1beta1/query.rpc.Query';
import * as _50 from './upgrade/v1beta1/upgrade';
import * as _51 from './vesting/v1beta1/tx';
import * as _155 from './vesting/v1beta1/tx.amino';
import * as _162 from './vesting/v1beta1/tx.registry';
import * as _180 from './vesting/v1beta1/tx.rpc.msg';
import * as _52 from './vesting/v1beta1/vesting';
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._163
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._149,
      ..._156,
      ..._164,
      ..._174
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._150,
      ..._157,
      ..._165,
      ..._175
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._15
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._17
      };
    }
    export const v1beta1 = {
      ..._18
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._19
    };
    export const multisig = {
      ..._20
    };
    export const secp256k1 = {
      ..._21
    };
    export const secp256r1 = {
      ..._22
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._151,
      ..._158,
      ..._166,
      ..._176
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._152,
      ..._159,
      ..._167,
      ..._177
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._153,
      ..._160,
      ..._168,
      ..._178
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._169
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._170
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._154,
      ..._161,
      ..._171,
      ..._179
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._46
      };
    }
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._172
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._173
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._155,
      ..._162,
      ..._180
    };
  }
  export const ClientFactory = {
    ..._207,
    ..._208
  };
}