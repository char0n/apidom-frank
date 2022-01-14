import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const operationTraitAllowedFieldsLint: LinterMeta = {
  code: ApilintCodes.ALL_NOT_ALLOWED_FIELDS,
  source: 'apilint',
  message: 'Object includes not allowed fields',
  severity: 1,
  linterFunction: 'allowedFields',
  linterParams: [
    ['operationId', 'description', 'summary', 'tags', 'externalDocs', 'bindings', '$ref'],
    'x-',
  ],
  marker: 'key',
};

export default operationTraitAllowedFieldsLint;