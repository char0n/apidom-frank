import {
  ApidomCompletionItem,
  CompletionFormat,
  CompletionType,
} from '../../../apidom-language-types';

const completion: ApidomCompletionItem[] = [
  {
    label: 'title',
    insertText: 'title',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value: '**Required.** The title of the application.',
    },
  },
  {
    label: 'version',
    insertText: 'version',
    kind: 14,
    format: CompletionFormat.QUOTED_FORCED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '**Required.** Provides the version of the application API (not to be confused with the specification version).',
    },
  },
  {
    label: 'description',
    insertText: 'description',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        'A short description of the application. [CommonMark syntax](https://spec.commonmark.org/) can be used for rich text representation.',
    },
  },
  {
    label: 'termsOfService',
    insertText: 'termsOfService',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value: 'A URL to the Terms of Service for the API. MUST be in the format of a URL.',
    },
  },
  {
    label: 'contact',
    insertText: 'contact',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[Contact Object](https://www.asyncapi.com/docs/specifications/v2.4.0#contactObject)\n\\\n\\\nContact information for the exposed API.',
    },
  },
  {
    label: 'license',
    insertText: 'license',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[License Object](https://www.asyncapi.com/docs/specifications/v2.4.0#licenseObject)\n\\\n\\\nLicense information for the exposed API.',
    },
  },
];

export default completion;
