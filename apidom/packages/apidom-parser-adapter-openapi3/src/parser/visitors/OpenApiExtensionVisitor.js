'use strict';

const stampit = require('stampit');
const { ValueVisitor } = require('./generics');
const SpecificationVisitor = require('./SpecificationVisitor');
const { isOpenApiExtension } = require('../predicates');
const { BREAK, visit } = require('../visitor');

const OpenApiExtensionVisitor = stampit(SpecificationVisitor, {
  methods: {
    property(propertyNode) {
      const keyElement = new this.namespace.elements.String(propertyNode.key.value);
      const { MemberElement } = this.namespace.elements.Element.prototype;
      const state = { namespace: this.namespace, sourceMap: this.sourceMap, specObj: this.specObj };
      const valueVisitor = ValueVisitor();

      visit(propertyNode.value, valueVisitor, { state });

      const memberElement = new MemberElement(
        this.maybeAddSourceMap(propertyNode.key, keyElement),
        this.maybeAddSourceMap(propertyNode.value, valueVisitor.element),
      )

      if (isOpenApiExtension({}, propertyNode)) {
        memberElement.classes.push('openApiExtension');
      }

      this.element = memberElement;

      return BREAK;
    },
  }
});

module.exports = OpenApiExtensionVisitor;
