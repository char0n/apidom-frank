import {
  ApidomCompletionItem,
  CompletionFormat,
  CompletionType,
} from '../../../../apidom-language-types';

const messageBindingsComplete: ApidomCompletionItem[] = [
  {
    label: '$ref',
    insertText: '\\$ref',
    kind: 14,
    format: CompletionFormat.QUOTED,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value: 'A reference to a Message Bindings',
    },
  },
  {
    label: 'http',
    insertText: 'http',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[HTTP Message Binding](https://github.com/asyncapi/bindings/blob/master/http#message)\n\n ---- \n\nProtocol-specific information for an HTTP message.',
    },
  },
  {
    label: 'ws',
    insertText: 'ws',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[WebSockets Message Binding](https://github.com/asyncapi/bindings/blob/master/websockets#message)\n\n ---- \n\nProtocol-specific information for a WebSockets message.',
    },
  },
  {
    label: 'kafka',
    insertText: 'kafka',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[Kafka Message Binding](https://github.com/asyncapi/bindings/blob/master/kafka#message)\n\n ---- \n\nProtocol-specific information for a Kafka message.',
    },
  },
  {
    label: 'anypointmq',
    insertText: 'anypointmq',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[Anypoint MQ Message Binding](https://github.com/asyncapi/bindings/blob/master/anypointmq#message)\n\n ---- \n\nProtocol-specific information for an Anypoint MQ message.\n',
    },
    targetSpecs: [{ namespace: 'asyncapi', version: '2.2.0' }],
  },
  {
    label: 'amqp',
    insertText: 'amqp',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[AMQP Message Binding](https://github.com/asyncapi/bindings/blob/master/amqp#message)\n\n ---- \n\nProtocol-specific information for an AMQP 0-9-1 message.',
    },
  },
  {
    label: 'amqp1',
    insertText: 'amqp1',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[AMQP 1.0 Message Binding](https://github.com/asyncapi/bindings/blob/master/amqp1#message)\n\n ---- \n\nProtocol-specific information for an AMQP 1.0 message.',
    },
  },
  {
    label: 'mqtt',
    insertText: 'mqtt',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[MQTT Message Binding](https://github.com/asyncapi/bindings/blob/master/mqtt#message)\n\n ---- \n\nProtocol-specific information for an MQTT message.',
    },
  },
  {
    label: 'mqtt5',
    insertText: 'mqtt5',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[MQTT 5 Message Binding](https://github.com/asyncapi/bindings/blob/master/mqtt5#message)\n\n ---- \n\nProtocol-specific information for an MQTT 5 message.',
    },
  },
  {
    label: 'nats',
    insertText: 'nats',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[NATS Message Binding](https://github.com/asyncapi/bindings/blob/master/nats#message)\n\n ---- \n\nProtocol-specific information for a NATS message.',
    },
  },
  {
    label: 'jms',
    insertText: 'jms',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[JMS Message Binding](https://github.com/asyncapi/bindings/blob/master/jms#message)\n\n ---- \n\nProtocol-specific information for a JMS message.',
    },
  },
  {
    label: 'sns',
    insertText: 'sns',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[SNS Message Binding](https://github.com/asyncapi/bindings/blob/master/sns#message)\n\n ---- \n\nProtocol-specific information for an SNS message.',
    },
  },
  {
    label: 'sqs',
    insertText: 'sqs',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[SQS Message Binding](https://github.com/asyncapi/bindings/blob/master/sqs#message)\n\n ---- \n\nProtocol-specific information for an SQS message.',
    },
  },
  {
    label: 'stomp',
    insertText: 'stomp',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[STOMP Message Binding](https://github.com/asyncapi/bindings/blob/master/stomp#message)\n\n ---- \n\nProtocol-specific information for a STOMP message.',
    },
  },
  {
    label: 'redis',
    insertText: 'redis',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[Redis Message Binding](https://github.com/asyncapi/bindings/blob/master/redis#message)\n\n ---- \n\nProtocol-specific information for a Redis message.',
    },
  },
  {
    label: 'mercure',
    insertText: 'mercure',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[Mercure Message Binding](https://github.com/asyncapi/bindings/blob/master/mercure#message)\n\n ---- \n\nProtocol-specific information for a Mercure message.',
    },
    targetSpecs: [
      { namespace: 'asyncapi', version: '2.1.0' },
      { namespace: 'asyncapi', version: '2.2.0' },
    ],
  },
  {
    label: 'ibmmq',
    insertText: 'ibmmq',
    kind: 14,
    format: CompletionFormat.OBJECT,
    type: CompletionType.PROPERTY,
    insertTextFormat: 2,
    documentation: {
      kind: 'markdown',
      value:
        '[IBM MQ Message Binding](https://github.com/asyncapi/bindings/blob/master/ibmmq#message-binding-object)\n\n ---- \n\nProtocol-specific information for an IBM MQ message.',
    },
    targetSpecs: [
      { namespace: 'asyncapi', version: '2.1.0' },
      { namespace: 'asyncapi', version: '2.2.0' },
    ],
  },
];

export default messageBindingsComplete;