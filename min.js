const HyperHTMLElement=(e=>class extends HTMLElement{static define(t){const a=this,r=a.prototype;(a.observedAttributes||[]).forEach(t=>{t in r||e(r,t.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),{configurable:!0,get(){return this.getAttribute(t)},set(e){this.setAttribute(t,e)}})});const l=r.attributeChangedCallback,n=!!l;if("created"in r){let t=!0;e(r,"attributeChangedCallback",{configurable:!0,value(e,a,r){t&&(t=!1,this.created()),n&&a!==r&&l.apply(this,arguments)}});const a=r.connectedCallback,i=!!a;e(r,"connectedCallback",{configurable:!0,value(){t&&(t=!1,this.created()),i&&a.apply(this,arguments)}})}else n&&e(r,"attributeChangedCallback",{configurable:!0,value(e,t,a){t!==a&&l.apply(this,arguments)}});return"handleEvent"in r||e(r,"handleEvent",{configurable:!0,value(e){this["on"+e.type](e)}}),customElements.define(t,a),a}get html(){return this.__hyperHTML||e(this,"__hyperHTML",{configurable:!0,value:hyperHTML.bind(this.shadowRoot||this._shadowRoot||this)}).__hyperHTML}})(Object.defineProperty);try{module.exports=HyperHTMLElement;var hyperHTML=hyperHTML||require("hyperhtml")}catch(e){}