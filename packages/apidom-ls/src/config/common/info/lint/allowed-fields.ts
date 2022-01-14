import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const infoAllowedFieldsLint: LinterMeta = {
  code: ApilintCodes.ALL_NOT_ALLOWED_FIELDS,
  source: 'apilint',
  message: 'Object includes not allowed fields',
  severity: 1,
  linterFunction: 'allowedFields',
  linterParams: [['title', 'version', 'description', 'termsOfService', 'contact', 'license'], 'x-'],
  marker: 'key',
  targetSpecs: [
    { namespace: 'asyncapi', version: '2.0.0' },
    { namespace: 'asyncapi', version: '2.1.0' },
    { namespace: 'asyncapi', version: '2.2.0' },
  ],
};

export default infoAllowedFieldsLint;