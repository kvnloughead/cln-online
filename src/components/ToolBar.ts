import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('tool-bar')
class ToolBar extends LitElement {
  @property({ type: Boolean }) isVisible = false;

  static styles = css`
    .command-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      background-color: grey;

      padding: 12px 20px;
      width: 100%;
      box-sizing: border-box;

      position: fixed;
      left: 0;
      top: 51px;

      visibility: hidden;
    }

    button {
      font-family: monospace;
      font-size: calc(10px + 2vmin);
      padding: 6px 10px;
    }

    .visible {
      visibility: visible;
    }
  `;

  _toggleCommands() {
    this.isVisible = !this.isVisible;
  }

  render() {
    return html`
      <div>
        <button @click="${this._toggleCommands}">show commands</button>
        <button>settings</button>
      </div>
      <div class="command-container${this.isVisible ? ' visible' : ''}">
        <button>show</button>
        <button>edit</button>
        <button>find</button>
        <button>grep</button>
      </div>
    `;
  }
}

export default ToolBar;
