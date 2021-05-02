import { LitElement, html } from 'lit-element'
import style from './button.css'

export class Button extends LitElement {

  size: string = 'small'
  disabled: boolean = false

  static get properties() {
    return {
      size: { type: String },
      disabled: { type: Boolean }
    }
  }

  static get styles() {
    return [ style ]
  }

  render() {
    return html `
      <button class="btn button-${this.size}" ?disabled="${this.disabled}">
        <span>
          <slot></slot>
        </span>
      </button>
    `
  }

}

customElements.define('bto-button', Button)