import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const messageTraitIdLint: LinterMeta = {
  code: ApilintCodes.MESSAGE_TRAIT_ID,
  source: 'apilint',
  message: "'messageId' value must be a string",
  severity: 1,
  linterFunction: 'apilintType',
  linterParams: ['string'],
  marker: 'value',
  target: 'messageId',
  data: {},
};

export default messageTraitIdLint;