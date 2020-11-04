import $RefParser from '@apidevtools/json-schema-ref-parser';
import { createNamespace, ParseResultElement } from 'apidom';
import {
  Error,
  JsonArray,
  JsonDocument,
  JsonObject,
  JsonProperty,
  transformTreeSitterJsonCST,
} from 'apidom-ast';
import asyncapi2_0 from 'apidom-ns-asyncapi-2-0';
// @ts-ignore
import { visit } from 'apidom-parser-adapter-json';

import specification from './specification';

export const namespace = createNamespace(asyncapi2_0);

const parse = async (
  source: string,
  { sourceMap = false, specObj = specification, parser = null } = {},
): Promise<ParseResultElement> => {
  const resolvedSpecObj = await $RefParser.dereference(specObj);
  // @ts-ignore
  const parseResultElement = new namespace.elements.ParseResult();
  // @ts-ignore
  const documentVisitor = resolvedSpecObj.visitors.document.$visitor();

  // @ts-ignore
  const cst = parser.parse(source);
  const ast = transformTreeSitterJsonCST(cst);

  const keyMap = {
    // @ts-ignore
    [JsonDocument.type]: ['children'],
    // @ts-ignore
    [JsonObject.type]: ['children'],
    // @ts-ignore
    [JsonProperty.type]: ['children'],
    // @ts-ignore
    [JsonArray.type]: ['children'],
    // @ts-ignore
    [Error.type]: ['children'],
  };

  visit(ast.rootNode, documentVisitor, {
    keyMap,
    // @ts-ignore
    state: {
      namespace,
      specObj: resolvedSpecObj,
      sourceMap,
      element: parseResultElement,
    },
  });

  return parseResultElement;
};

export default parse;
