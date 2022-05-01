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
      font-size: calc(10px + 2vmin);
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
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
  `;

  _showToolbar() {
    const toolbar = this.renderRoot.querySelector('tool-bar');
    toolbar?.toggleAttribute('isVisible');
  }

  render() {
    return html`
      <header>
        <command-line title=${this.title}></command-line>
        <tool-bar></tool-bar>
      </header>

      <main></main>
    `;
  }
}
