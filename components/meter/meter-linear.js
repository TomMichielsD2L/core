import { css, html, LitElement } from 'lit-element/lit-element.js';
import { RtlMixin } from '../../mixins/rtl-mixin.js';

class MeterLinear extends RtlMixin(LitElement)  {
	static get styles() {
		return [ css`
			:host {
				display: block;
				position: relative;
			}

			.d2l-meter-linear-full-bar, .d2l-meter-linear-inner-bar {
				border-radius: 32px;
				height: 9px;
				left: 0;
				position: absolute;
				top: 0;
				width: 100%;
			}

			.d2l-meter-linear-full-bar {
				background-color: var(--d2l-color-gypsum);
			}

			.d2l-meter-linear-inner-bar {
				background-color: var(--d2l-color-celestine);
			}
		`];
	}

	render() {
		const progressBarWidth = this.value / this.max * 100;
		return html `
			<div class="d2l-meter-linear-full-bar">
				<div class="d2l-meter-linear-inner-bar" style="width:${progressBarWidth}%;"></div>
			</div>
		`;
	}

	static get properties() {
		return {
			value: { type: Number, reflect: true },
			max: { type: Number, reflect: true },
			primary: { type: String, reflect: true },
			secondary: { type: String, reflect: true }
		};
	}

	constructor() {
		super();
		this.value = 0;
		this.max = 100;
	}
}

customElements.define('d2l-meter-linear', MeterLinear);