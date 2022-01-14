import {
  ApidomCompletionItem,
  CompletionFormat,
  CompletionType,
} from '../../../../apidom-language-types';

const messageComplete: ApidomCompletionItem[] = [
  {
    label: '$ref',
    insertText: '\\$ref',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value: 'A reference to a message',
    },
  },
  {
    label: 'headers',
    insertText: 'headers',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[Schema Object](https://www.asyncapi.com/docs/specifications/v2.2.0#schemaObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.2.0#referenceObject)\n\n ----\n\nSchema definition of the application headers. Schema MUST be of type "object". It **MUST NOT** define the protocol headers.',
    },
  },
  {
    label: 'payload',
    insertText: 'payload',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        'Definition of the message payload. It can be of any type but defaults to [Schema object](https://www.asyncapi.com/docs/specifications/v2.2.0#schemaObject). It must match the schema format, including encoding type - e.g Avro should be inlined as either a YAML or JSON object NOT a string to be parsed as YAML or JSON.',
    },
  },
  {
    label: 'correlationId',
    insertText: 'correlationId',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[Correlation ID Object](https://www.asyncapi.com/docs/specifications/v2.2.0#correlationIdObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.2.0#referenceObject)\n\n ---- \n\nDefinition of the correlation ID used for message tracing or matching.',
    },
  },
  {
    label: 'schemaFormat',
    insertText: 'schemaFormat',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        'A string containing the name of the schema format used to define the message payload. If omitted, implementations should parse the payload as a [Schema object](https://www.asyncapi.com/docs/specifications/v2.2.0#schemaObject). When the payload is defined using a `$ref` to a remote file, it is RECOMMENDED the schema format includes the file encoding type to allow implementations to parse the file correctly. E.g., adding `+yaml` if content type is `application/vnd.apache.avro` results in `application/vnd.apache.avro+yaml`.  \n' +
        '\n\n ---- \n\nCheck out the [supported schema formats table](https://www.asyncapi.com/docs/specifications/v2.2.0#messageObjectSchemaFormatTable) for more information. Custom values are allowed but their implementation is OPTIONAL. A custom value MUST NOT refer to one of the schema formats listed in the [table](https://www.asyncapi.com/docs/specifications/v2.2.0#messageObjectSchemaFormatTable).',
    },
  },
  {
    label: 'contentType',
    insertText: 'contentType',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        "The content type to use when encoding/decoding a message's payload. The value MUST be a specific media type (e.g. `application/json`). When omitted, the value MUST be the one specified on the [defaultContentType](https://www.asyncapi.com/docs/specifications/v2.2.0#defaultContentTypeString) field.",
    },
  },
  {
    label: 'name',
    insertText: 'name',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value: 'A machine-friendly name for the message.',
    },
  },
  {
    label: 'title',
    insertText: 'title',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value: 'A human-friendly title for the message.',
    },
  },
  {
    label: 'summary',
    insertText: 'summary',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value: 'A short summary of what the message is about.',
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
        'A verbose explanation of the message. [CommonMark syntax](https://spec.commonmark.org/) can be used for rich text representation.',
    },
  },
  {
    label: 'tags',
    insertText: 'tags',
    kind: 14,
    format: CompletionFormat.ARRAY,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[Tags Object](https://www.asyncapi.com/docs/specifications/v2.2.0#tagsObject)\n\n ---- \n\nA list of tags for API documentation control.',
    },
  },
  {
    label: 'externalDocs',
    insertText: 'externalDocs',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[External Documentation Object](https://www.asyncapi.com/docs/specifications/v2.2.0#externalDocumentationObject)\n\n ---- \n\nAdditional external documentation for this message..',
    },
  },
  {
    label: 'bindings',
    insertText: 'bindings',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[Message Bindings Object](https://www.asyncapi.com/docs/specifications/v2.2.0#messageBindingsObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.2.0#referenceObject)\n\n ---- \n\nA map where the keys describe the name of the protocol and the values describe protocol-specific definitions for the message.',
    },
  },
  {
    label: 'examples',
    insertText: 'examples',
    kind: 14,
    format: CompletionFormat.ARRAY,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '\\[[Message Example Object](https://www.asyncapi.com/docs/specifications/v2.2.0#messageExampleObject)\\]\n\n ---- \n\nList of examples.',
    },
  },
  {
    label: 'traits',
    insertText: 'traits',
    kind: 14,
    format: CompletionFormat.ARRAY,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[[Message Trait Object](https://www.asyncapi.com/docs/specifications/v2.2.0#messageTraitObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.2.0#referenceObject)]\n\n ---- \n\nA list of traits to apply to the message object. Traits MUST be merged into the message object using the [JSON Merge Patch](https://tools.ietf.org/html/rfc7386) algorithm in the same order they are defined here. The resulting object MUST be a valid [Message Object](https://www.asyncapi.com/docs/specifications/v2.2.0#messageObject).\n\n ---- \n\nThis object can be extended with [Specification Extensions](https://www.asyncapi.com/docs/specifications/v2.2.0#specificationExtensions).',
    },
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.aai.asyncapi;version=2.2.0',
    insertText: 'application/vnd.aai.asyncapi;version=2.2.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: [{ namespace: 'asyncapi', version: '2.2.0' }],
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.aai.asyncapi+json;version=2.2.0',
    insertText: 'application/vnd.aai.asyncapi+json;version=2.2.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: [{ namespace: 'asyncapi', version: '2.2.0' }],
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.aai.asyncapi+yaml;version=2.2.0',
    insertText: 'application/vnd.aai.asyncapi+yaml;version=2.2.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: [{ namespace: 'asyncapi', version: '2.2.0' }],
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.aai.asyncapi;version=2.1.0',
    insertText: 'application/vnd.aai.asyncapi;version=2.1.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: [{ namespace: 'asyncapi', version: '2.1.0' }],
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.aai.asyncapi+json;version=2.1.0',
    insertText: 'application/vnd.aai.asyncapi+json;version=2.1.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: [{ namespace: 'asyncapi', version: '2.1.0' }],
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.aai.asyncapi+yaml;version=2.1.0',
    insertText: 'application/vnd.aai.asyncapi+yaml;version=2.1.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: [{ namespace: 'asyncapi', version: '2.1.0' }],
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.aai.asyncapi;version=2.0.0',
    insertText: 'application/vnd.aai.asyncapi;version=2.0.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: [{ namespace: 'asyncapi', version: '2.0.0' }],
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.aai.asyncapi+json;version=2.0.0',
    insertText: 'application/vnd.aai.asyncapi+json;version=2.0.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: [{ namespace: 'asyncapi', version: '2.0.0' }],
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.aai.asyncapi+yaml;version=2.0.0',
    insertText: 'application/vnd.aai.asyncapi+yaml;version=2.0.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
    targetSpecs: [{ namespace: 'asyncapi', version: '2.0.0' }],
  },
  {
    target: 'schemaFormat',
    label: 'application/schema+json;version=draft-07',
    insertText: 'application/schema+json;version=draft-07',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
  {
    target: 'schemaFormat',
    label: 'application/schema+yaml;version=draft-07',
    insertText: 'application/schema+yaml;version=draft-07',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.apache.avro;version=1.9.0',
    insertText: 'application/vnd.apache.avro;version=1.9.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.apache.avro+json;version=1.9.0',
    insertText: 'application/vnd.apache.avro+json;version=1.9.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.apache.avro+yaml;version=1.9.0',
    insertText: 'application/vnd.apache.avro+yaml;version=1.9.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.oai.openapi;version=3.0.0',
    insertText: 'application/vnd.oai.openapi;version=3.0.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.oai.openapi+json;version=3.0.0',
    insertText: 'application/vnd.oai.openapi+json;version=3.0.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
  {
    target: 'schemaFormat',
    label: 'application/vnd.oai.openapi+yaml;version=3.0.0',
    insertText: 'application/vnd.oai.openapi+yaml;version=3.0.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
  {
    target: 'schemaFormat',
    label: 'application/raml+yaml;version=1.0',
    insertText: 'application/raml+yaml;version=1.0',
    kind: 12,
    format: CompletionFormat.QUOTED,
    type: CompletionType.VALUE,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'amqp',
    insertText: 'amqp',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'amqps',
    insertText: 'amqps',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'http',
    insertText: 'http',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'https',
    insertText: 'https',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'ibmmq',
    insertText: 'ibmmq',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'jms',
    insertText: 'jms',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'kafka',
    insertText: 'kafka',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'kafka-secure',
    insertText: 'kafka-secure',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'anypointmq',
    insertText: 'anypointmq',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'mqtt',
    insertText: 'mqtt',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'secure-mqtt',
    insertText: 'secure-mqtt',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'stomp',
    insertText: 'stomp',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'stomps',
    insertText: 'stomps',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'ws',
    insertText: 'ws',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'wss',
    insertText: 'wss',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
  {
    target: 'bindings',
    label: 'mercure',
    insertText: 'mercure',
    kind: 12,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
  },
];

export default messageComplete;