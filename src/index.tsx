/**
 * CE.SDK Start With Image Editor Starterkit - React Entry Point
 *
 * A design editor that starts with an image, perfect for photo editing
 * workflows, social media editors, or image-based design tools.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import type { Configuration } from '@cesdk/cesdk-js';
import { createRoot } from 'react-dom/client';

import { App } from './app/App/App';

const editorConfig: Configuration = {
  userId: 'starterkit-start-with-image-user'

  // Local assets (uncomment and set path for self-hosted assets)
  // baseURL: `/assets/`,

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container not found');
}

const root = createRoot(container);
root.render(<App editorConfig={editorConfig} />);
