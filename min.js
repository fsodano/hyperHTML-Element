const HyperHTMLElement=(e=>class extends HTMLElement{static define(t){const r=this,a=r.prototype;if((r.observedAttributes||[]).forEach(t=>{t in a||e(a,t.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),{configurable:!0,get(){return this.getAttribute(t)},set(e){this.setAttribute(t,e)}})}),"ready"in a){let t=!0;const r=a.attributeChangedCallback,i=!!r;e(a,"attributeChangedCallback",{configurable:!0,value(e,a,s){t&&(t=!1,this.ready()),i&&a!==s&&r.apply(this,arguments)}});const s=a.connectedCallback,n=!!s;e(a,"connectedCallback",{configurable:!0,value(){t&&(t=!1,this.ready()),n&&s.apply(this,arguments)}})}return customElements.define(t,r),r}get html(){return this.__hyperHTML||e(this,"__hyperHTML",{configurable:!0,value:hyperHTML.bind(this.shadowRoot||this._shadowRoot||this)}).__hyperHTML}})(Object.defineProperty);var hyperHTML;try{module.exports=HyperHTMLElement,hyperHTML=require("hyperhtml")}catch(e){}