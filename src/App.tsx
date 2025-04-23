import * as React from 'react';
import GjsEditor from '@grapesjs/react';
import './style.css';
import type { Editor } from 'grapesjs';
import plugin from 'grapesjs-preset-webpage';
import gjsForms from 'grapesjs-plugin-forms';
import gjsBlocksBasic from 'grapesjs-blocks-basic';
import gjsComponentCountdown from 'grapesjs-component-countdown';
import gjsCustomCode from 'grapesjs-custom-code';
import gjsParserPostcss from 'grapesjs-parser-postcss';
import gjsPluginExport from 'grapesjs-plugin-export';
import gjsStyleBg from 'grapesjs-style-bg';
import gjsTabs from 'grapesjs-tabs';
import gjsTooltip from 'grapesjs-tooltip';
import gjsTouch from 'grapesjs-touch';
import gjsTuiImageEditor from 'grapesjs-tui-image-editor';
import gjsTyped from 'grapesjs-typed';


export default function App() {
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded', { editor });
  };

  return (
    <GjsEditor
      grapesjs="https://unpkg.com/grapesjs"
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      options={{
        height: '100vh',
        storageManager: false,
      }}
      plugins={[
        gjsBlocksBasic,
        plugin,
        gjsForms,
        gjsComponentCountdown,
        gjsCustomCode,
        gjsParserPostcss,
        gjsPluginExport,
        gjsStyleBg,
        gjsTabs,
        gjsTooltip,
        gjsTouch,
        gjsTuiImageEditor,
        gjsTyped
      ]}
      onEditor={onEditor}
    />
  );
}
