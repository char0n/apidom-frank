import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const optionsTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_PATH_ITEM_FIELD_OPTIONS_TYPE,
  source: 'apilint',
  message: '"options" must be in a shape of the Operation Object',
  severity: DiagnosticSeverity.Error,
  linterFunction: 'apilintElementOrClass',
  linterParams: ['operation'],
  marker: 'value',
  target: 'options',
  data: {},
};

export default optionsTypeLint;
