import { DiagnosticSeverity } from 'vscode-languageserver-types';

import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const variablesValuesTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_O_SERVER_FIELD_VARIABLES_VALUES_TYPE,
  source: 'apilint',
  message: '"variables" members must be Server Variable Object',
  severity: DiagnosticSeverity.Error,
  linterFunction: 'apilintChildrenOfElementsOrClasses',
  linterParams: [['serverVariable']],
  marker: 'key',
  markerTarget: 'variables',
  target: 'variables',
  data: {},
};

export default variablesValuesTypeLint;
