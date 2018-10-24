declare module 'react-html-parser' {
  import * as React from 'react';

  export function reactHtmlParser(htmlString: string): React.ReactNode;

  export default reactHtmlParser;
}
