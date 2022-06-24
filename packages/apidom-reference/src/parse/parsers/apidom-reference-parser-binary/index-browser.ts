import stampit from 'stampit';
import { ParseResultElement, StringElement } from '@swagger-api/apidom-core';

import { ParserError } from '../../../util/errors';
import { Parser as IParser, File as IFile } from '../../../types';
import Parser from '../Parser';

/**
 * Everything that is not recognized by other parsers will be considered by this parser
 * as a binary data and will be encoded to Base64 format.
 */

const BinaryParser: stampit.Stamp<IParser> = stampit(Parser, {
  props: {
    name: 'binary',
  },
  methods: {
    async canParse(file: IFile): Promise<boolean> {
      const hasSupportedFileExtension =
        this.fileExtensions.length === 0 ? true : this.fileExtensions.includes(file.extension);

      if (!hasSupportedFileExtension) return false;
      return typeof file.data === 'string' || ArrayBuffer.isView(file.data);
    },
    async parse(file: IFile): Promise<ParseResultElement> {
      try {
        let base64String: string;

        /**
         * More information about binary strings and btoa function in following link:
         *   https://developer.mozilla.org/en-US/docs/Web/API/btoa
         */
        if (ArrayBuffer.isView(file.data)) {
          // @ts-ignore
          const binaryString = String.fromCharCode.apply(null, file.data);
          base64String = btoa(binaryString);
        } else if (typeof file.data === 'string') {
          const binaryString = unescape(encodeURIComponent(file.data));
          base64String = btoa(binaryString);
        } else {
          throw new TypeError('file.data is of invalid type. Only Buffer and string is allowed.');
        }

        const parseResultElement = new ParseResultElement();

        if (base64String.length !== 0) {
          const base64StringElement = new StringElement(base64String);
          base64StringElement.classes.push('result');
          parseResultElement.push(base64StringElement);
        }

        return parseResultElement;
      } catch (error: any) {
        throw new ParserError(`Error parsing "${file.uri}"`, error);
      }
    },
  },
});

export default BinaryParser;