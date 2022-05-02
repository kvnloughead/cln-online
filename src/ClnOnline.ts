import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

import './components/ToolBar.js';
import './components/CommandLine.js';

export class ClnOnline extends LitElement {
  @property({ type: String }) title = '$ cln';

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
    }
  `;

  _showToolbar() {
    const toolbar = this.renderRoot.querySelector('tool-bar');
    toolbar?.toggleAttribute('isVisible');
  }

  // _updateMarkdown() {
  //   // Updates the markdown in zero-md by directly manipulating the fall-back
  //   // text inside the <script> tag.
  //   // TODO - make it work by updating `src` attribute from a file
  //   const { value } = this.renderRoot.querySelector(
  //     '#md-editor'
  //   ) as HTMLTextAreaElement;
  //   const viewer = this.renderRoot
  //     .querySelector('#md-viewer')
  //     ?.querySelector('script') as HTMLScriptElement;
  //   viewer.textContent = value;
  // }

  render() {
    return html`
      <header>
        <command-line title=${this.title}></command-line>
        <tool-bar></tool-bar>
      </header>

      <main>
        <slot name="code-input"></slot>
      </main>
    `;
  }
}
