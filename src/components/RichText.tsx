import {convertFromRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import * as React from 'react';
import ReactHTMLParser from 'react-html-parser';

export interface IRichTextProps {
  content: string;
}

export const RichText: React.SFC<IRichTextProps> = ({content}) => (
  <>{ReactHTMLParser(stateToHTML(convertFromRaw(JSON.parse(content))))}</>
);
export default RichText;
