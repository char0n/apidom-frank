import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const allowedFieldsLint: LinterMeta = {
  code: ApilintCodes.NOT_ALLOWED_FIELDS,
  source: 'apilint',
  message: 'Object includes not allowed fields',
  severity: DiagnosticSeverity.Error,
  linterFunction: 'allowedFields',
  linterParams: [
    [
      'openapi',
      'info',
      'servers',
      'paths',
      'components',
      'security',
      'tags',
      'externalDocs',
      'jsonSchemaDialect',
      'webhooks',
    ],
    'x-',
  ],
  marker: 'key',
};

export default allowedFieldsLint;
