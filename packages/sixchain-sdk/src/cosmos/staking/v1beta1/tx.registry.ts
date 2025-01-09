//@ts-nocheck
import { GeneratedType, Registry } from '@cosmjs/proto-signing';

import { MsgBeginRedelegate, MsgCreateValidator, MsgCreateWhitelistDelegator, MsgDelegate, MsgDeleteWhitelistDelegator,MsgEditValidator, MsgSetValidatorApproval, MsgUndelegate } from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [['/cosmos.staking.v1beta1.MsgSetValidatorApproval', MsgSetValidatorApproval], ['/cosmos.staking.v1beta1.MsgCreateValidator', MsgCreateValidator], ['/cosmos.staking.v1beta1.MsgEditValidator', MsgEditValidator], ['/cosmos.staking.v1beta1.MsgDelegate', MsgDelegate], ['/cosmos.staking.v1beta1.MsgBeginRedelegate', MsgBeginRedelegate], ['/cosmos.staking.v1beta1.MsgUndelegate', MsgUndelegate], ['/cosmos.staking.v1beta1.MsgCreateWhitelistDelegator', MsgCreateWhitelistDelegator], ['/cosmos.staking.v1beta1.MsgDeleteWhitelistDelegator', MsgDeleteWhitelistDelegator]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setValidatorApproval(value: MsgSetValidatorApproval) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgSetValidatorApproval',
        value: MsgSetValidatorApproval.encode(value).finish()
      };
    },
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
        value: MsgCreateValidator.encode(value).finish()
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
        value: MsgEditValidator.encode(value).finish()
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
        value: MsgDelegate.encode(value).finish()
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
        value: MsgBeginRedelegate.encode(value).finish()
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
        value: MsgUndelegate.encode(value).finish()
      };
    },
    createWhitelistdelegator(value: MsgCreateWhitelistDelegator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCreateWhitelistDelegator',
        value: MsgCreateWhitelistDelegator.encode(value).finish()
      };
    },
    deleteWhitelistdelegator(value: MsgDeleteWhitelistDelegator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgDeleteWhitelistDelegator',
        value: MsgDeleteWhitelistDelegator.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setValidatorApproval(value: MsgSetValidatorApproval) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgSetValidatorApproval',
        value
      };
    },
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
        value
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
        value
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
        value
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
        value
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
        value
      };
    },
    createWhitelistdelegator(value: MsgCreateWhitelistDelegator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCreateWhitelistDelegator',
        value
      };
    },
    deleteWhitelistdelegator(value: MsgDeleteWhitelistDelegator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgDeleteWhitelistDelegator',
        value
      };
    }
  },
  fromPartial: {
    setValidatorApproval(value: MsgSetValidatorApproval) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgSetValidatorApproval',
        value: MsgSetValidatorApproval.fromPartial(value)
      };
    },
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
        value: MsgCreateValidator.fromPartial(value)
      };
    },
    editValidator(value: MsgEditValidator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
        value: MsgEditValidator.fromPartial(value)
      };
    },
    delegate(value: MsgDelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
        value: MsgDelegate.fromPartial(value)
      };
    },
    beginRedelegate(value: MsgBeginRedelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
        value: MsgBeginRedelegate.fromPartial(value)
      };
    },
    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
        value: MsgUndelegate.fromPartial(value)
      };
    },
    createWhitelistdelegator(value: MsgCreateWhitelistDelegator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCreateWhitelistDelegator',
        value: MsgCreateWhitelistDelegator.fromPartial(value)
      };
    },
    deleteWhitelistdelegator(value: MsgDeleteWhitelistDelegator) {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgDeleteWhitelistDelegator',
        value: MsgDeleteWhitelistDelegator.fromPartial(value)
      };
    }
  }
};