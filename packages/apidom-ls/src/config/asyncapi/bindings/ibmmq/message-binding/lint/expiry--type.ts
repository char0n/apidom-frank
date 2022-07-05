import ApilintCodes from '../../../../../codes';
import { LinterMeta } from '../../../../../../apidom-language-types';

const expiryTypeLint: LinterMeta = {
  code: ApilintCodes.ASYNCAPI2_IBMMQ_MESSAGE_BINDING_FIELD_EXPIRY_TYPE,
  source: 'apilint',
  message: "'expiry' value must be a string",
  severity: 1,
  linterFunction: 'apilintNumber',
  linterParams: [true, true, true],
  marker: 'value',
  target: 'expiry',
  data: {},
};

export default expiryTypeLint;
