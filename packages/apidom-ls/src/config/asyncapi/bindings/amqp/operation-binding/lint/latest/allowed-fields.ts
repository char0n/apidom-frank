import ApilintCodes from '../../../../../../codes';
import { LinterMeta } from '../../../../../../../apidom-language-types';

const allowedFieldsLint: LinterMeta = {
  code: ApilintCodes.NOT_ALLOWED_FIELDS,
  source: 'apilint',
  message: 'Object includes not allowed fields.',
  severity: 1,
  linterFunction: 'allowedFields',
  linterParams: [
    [
      'expiration',
      'userId',
      'cc',
      'priority',
      'deliveryMode',
      'mandatory',
      'bcc',
      'replyTo',
      'timestamp',
      'ack',
      'bindingVersion',
    ],
  ],
  marker: 'key',
  conditions: [
    {
      function: 'missingField',
      params: ['bindingVersion'],
    },
  ],
};

export default allowedFieldsLint;