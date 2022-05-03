import { LitElement, html, css } from 'lit';
import { eventOptions, property } from 'lit/decorators.js';

import './components/ToolBar.js';
import './components/CommandLine.js';

export class ClnOnline extends LitElement {
  @property({ type: String }) content = '# Default markdown';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 1vmin);
      max-width: 960px;
      margin: 0 auto;
      background-color: var(--cln-online-background-color);
      font-family: monospace;
    }

    header {
      display: flex;
      justify-content: space-between;
      background-color: grey;
      width: 100%;
      position: fixed;
      left: 0;
      padding: 12px 20px;
      box-sizing: border-box;
    }

    h1 {
      margin: 0 0 12px;
    }

    main {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 60px;
      min-width: 1280px;
    }

    .code-input-wrapper {
      position: relative;
    }
  `;

  _showToolbar() {
    const toolbar = this.renderRoot.querySelector('tool-bar');
    toolbar?.toggleAttribute('isVisible');
  }

  protected firstUpdated(): void {
    const textarea = this.renderRoot.querySelector('textarea');
    textarea?.addEventListener('input', () => {
      this._updateViewer(textarea.value);
    });
  }

  @eventOptions({ capture: true })
  _updateViewer(value: string) {
    const viewer = this.renderRoot
      .querySelector('#md-viewer')
      ?.querySelector('script') as HTMLScriptElement;
    viewer.textContent = value;
  }

  render() {
    return html`
      <header>
        <command-line></command-line>
        <tool-bar></tool-bar>
      </header>

      <main>
        <!-- <code-input> and its things. Can't link the files in index.html -->
        <code-input
          @oninput=${this._updateViewer}
          lang="Markdown"
          placeholder="Enter some markdown"
          value=${this.content}
        >
        </code-input>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/WebCoder49/code-input@1.0/code-input.css"
        />
        <link
          id="import-theme"
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.css"
        />
        <link rel="stylesheet" href="./src/css/code-input-local.css" />

        <zero-md id="md-viewer">
          <!-- without data-merge, the default styles will be omitted -->
          <template data-merge="append">
            <style>
              :host {
                min-height: 600px;
                width: 35vw;
                margin-top: 200px;
              }
            </style>
          </template>
          <!-- without data-dedent the default will be read as a code block -->
          <script type="text/markdown" data-dedent>
            ${this.content}
          </script>
        </zero-md>
      </main>
    `;
  }
}
