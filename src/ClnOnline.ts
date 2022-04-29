import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class ClnOnline extends LitElement {
  @property({ type: String }) title = 'CLN Online';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--cln-online-background-color);
    }
  `;

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
      </main>
    `;
  }
}
