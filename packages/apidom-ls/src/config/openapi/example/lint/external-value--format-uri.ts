import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const externalValueFormatURILint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_EXAMPLE_FIELD_EXTERNAL_VALUE_FORMAT_URI,
  source: 'apilint',
  message: "'externalValue' value must be a valid URL",
  severity: 1,
  linterFunction: 'apilintValidURI',
  marker: 'value',
  target: 'externalValue',
  data: {},
};

export default externalValueFormatURILint;
