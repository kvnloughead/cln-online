import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('command-line')
class CommandLine extends LitElement {
  static styles = css`
    :host {
      width: 50%;
    }

    form {
      display: flex;
      align-items: center;
      gap: 10px;

      background-color: lightgrey;
    }

    label {
      font-size: calc(10px + 1vmin);
      vertical-align: baseline;
    }

    input {
      flex-grow: 1;
      padding: 6px 10px;
      font-size: calc(10px + 1vmin);
      font-family: monospace;
      height: calc(10px + 1vmin);
      background-color: lightgrey;
      vertical-align: baseline;
      border: none;
    }

    input::placeholder {
      font-size: calc(10px + 1vmin);
    }
  `;

  render() {
    return html`
      <form action="">
        <label for="subcommand">$ cln</label>
        <input
          type="text"
          id="subcommand"
          name="subcommand"
          required
          minlength="4"
          maxlength="8"
          size="10"
          placeholder="e.g. show, find, edit..."
        />
      </form>
    `;
  }
}

export default CommandLine;
