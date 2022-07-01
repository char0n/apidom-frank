import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const typeRequiredLint: LinterMeta = {
  code: ApilintCodes.ASYNCAPI2_SECURITY_SCHEME_FIELD_TYPE_REQUIRED,
  source: 'apilint',
  message: "should always have a 'type'",
  severity: 1,
  linterFunction: 'hasRequiredField',
  linterParams: ['type'],
  marker: 'key',
  data: {
    quickFix: [
      {
        message: "add 'type' field",
        action: 'addChild',
        snippetYaml: 'type: \n  ',
        snippetJson: '"type": "",\n    ',
      },
    ],
  },
};

export default typeRequiredLint;
