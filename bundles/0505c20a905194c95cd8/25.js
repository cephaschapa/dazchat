(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1437:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var s=a(18),r=a.n(s),o=a(86),n=a.n(o),i=a(90),c=a.n(i),l=a(89),h=a(91),u=a(307),p=a.n(u),d=a(87),y=a(94),m=a(170),g=a(298),S=a(206),_=a(269),b=a(273),C=a(96),P=a(208),k=a(169),f=a(263),w=a(255),v=a(226);const E=4;class O extends n.a.PureComponent{constructor(e){super(e),r()(this,"_onKeyBackupStatusChange",()=>{3===this.state.phase&&this._fetchBackupInfo()}),r()(this,"_onKeyPassphraseChange",e=>{this.setState({passPhraseKeySelected:e.target.value})}),r()(this,"_collectRecoveryKeyNode",e=>{this._recoveryKeyNode=e}),r()(this,"_onChooseKeyPassphraseFormSubmit",async()=>{"key"===this.state.passPhraseKeySelected?(this._recoveryKey=await h.a.get().createRecoveryKeyFromPassphrase(),this.setState({copied:!1,downloaded:!1,setPassphrase:!1,phase:6})):this.setState({copied:!1,downloaded:!1,phase:E})}),r()(this,"_onMigrateFormSubmit",e=>{e.preventDefault(),this.state.backupSigStatus.usable?this._bootstrapSecretStorage():this._restoreBackup()}),r()(this,"_onCopyClick",()=>{Object(g.a)(this._recoveryKeyNode)&&this.setState({copied:!0})}),r()(this,"_onDownloadClick",()=>{const e=new Blob([this._recoveryKey.encodedPrivateKey],{type:"text/plain;charset=us-ascii"});p.a.saveAs(e,"security-key.txt"),this.setState({downloaded:!0})}),r()(this,"_doBootstrapUIAuth",async e=>{if(this.state.canUploadKeysWithPasswordOnly&&this.state.accountPassword)await e({type:"m.login.password",identifier:{type:"m.id.user",user:h.a.get().getUserId()},user:h.a.get().getUserId(),password:this.state.accountPassword});else{const t=l.getComponent("dialogs.InteractiveAuthDialog"),a={[S.c.PHASE_PREAUTH]:{title:Object(d.a)("Use Single Sign On to continue"),body:Object(d.a)("To continue, use Single Sign On to prove your identity."),continueText:Object(d.a)("Single Sign On"),continueKind:"primary"},[S.c.PHASE_POSTAUTH]:{title:Object(d.a)("Confirm encryption setup"),body:Object(d.a)("Click the button below to confirm setting up encryption."),continueText:Object(d.a)("Confirm"),continueKind:"primary"}},{finished:s}=y.a.createTrackedDialog("Cross-signing keys dialog","",t,{title:Object(d.a)("Setting up keys"),matrixClient:h.a.get(),makeRequest:e,aestheticsForStagePhases:{[S.c.LOGIN_TYPE]:a,[S.c.UNSTABLE_LOGIN_TYPE]:a}}),[r]=await s;if(!r)throw new Error("Cross-signing key upload auth canceled")}}),r()(this,"_bootstrapSecretStorage",async()=>{this.setState({phase:8,error:null});const e=h.a.get(),{forceReset:t}=this.props;try{t?(console.log("Forcing secret storage reset"),await e.bootstrapSecretStorage({createSecretStorageKey:async()=>this._recoveryKey,setupNewKeyBackup:!0,setupNewSecretStorage:!0})):(await e.bootstrapCrossSigning({authUploadDeviceSigningKeys:this._doBootstrapUIAuth}),await e.bootstrapSecretStorage({createSecretStorageKey:async()=>this._recoveryKey,keyBackupInfo:this.state.backupInfo,setupNewKeyBackup:!this.state.backupInfo,getKeyBackupPassphrase:()=>this._backupKey?this._backupKey:Object(m.e)()})),this.props.onFinished(!0)}catch(e){this.state.canUploadKeysWithPasswordOnly&&401===e.httpStatus&&e.data.flows?this.setState({accountPassword:"",accountPasswordCorrect:!1,phase:3}):this.setState({error:e}),console.error("Error bootstrapping secret storage",e)}}),r()(this,"_onCancel",()=>{this.props.onFinished(!1)}),r()(this,"_onDone",()=>{this.props.onFinished(!0)}),r()(this,"_restoreBackup",async()=>{const{finished:e}=y.a.createTrackedDialog("Restore Backup","",f.a,{showSummary:!1,keyCallback:e=>this._backupKey=e},null,!1,!1);await e;const{backupSigStatus:t}=await this._fetchBackupInfo();t.usable&&this.state.canUploadKeysWithPasswordOnly&&this.state.accountPassword&&this._bootstrapSecretStorage()}),r()(this,"_onLoadRetryClick",()=>{this.setState({phase:0}),this._fetchBackupInfo()}),r()(this,"_onShowKeyContinueClick",()=>{this._bootstrapSecretStorage()}),r()(this,"_onCancelClick",()=>{this.setState({phase:10})}),r()(this,"_onGoBackClick",()=>{this.setState({phase:2})}),r()(this,"_onPassPhraseNextClick",async e=>{if(e.preventDefault(),this._passphraseField.current){if(await this._passphraseField.current.validate({allowEmpty:!1}),!this._passphraseField.current.state.valid)return this._passphraseField.current.focus(),void this._passphraseField.current.validate({allowEmpty:!1,focused:!0});this.setState({phase:5})}}),r()(this,"_onPassPhraseConfirmNextClick",async e=>{e.preventDefault(),this.state.passPhrase===this.state.passPhraseConfirm&&(this._recoveryKey=await h.a.get().createRecoveryKeyFromPassphrase(this.state.passPhrase),this.setState({copied:!1,downloaded:!1,setPassphrase:!0,phase:6}))}),r()(this,"_onSetAgainClick",()=>{this.setState({passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",phase:E})}),r()(this,"_onPassPhraseValidate",e=>{this.setState({passPhraseValid:e.valid})}),r()(this,"_onPassPhraseChange",e=>{this.setState({passPhrase:e.target.value})}),r()(this,"_onPassPhraseConfirmChange",e=>{this.setState({passPhraseConfirm:e.target.value})}),r()(this,"_onAccountPasswordChange",e=>{this.setState({accountPassword:e.target.value})}),this._recoveryKey=null,this._recoveryKeyNode=null,this._backupKey=null,this.state={phase:0,passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",copied:!1,downloaded:!1,setPassphrase:!1,backupInfo:null,backupSigStatus:null,canUploadKeysWithPasswordOnly:null,accountPassword:e.accountPassword||"",accountPasswordCorrect:null,canSkip:!Object(w.d)()};Object(w.c)().includes("key")?this.state.passPhraseKeySelected="key":this.state.passPhraseKeySelected="passphrase",this._passphraseField=Object(o.createRef)(),h.a.get().on("crypto.keyBackupStatus",this._onKeyBackupStatusChange),this.state.accountPassword?this.state.canUploadKeysWithPasswordOnly=!0:this._queryKeyUploadAuth(),this._getInitialPhase()}componentWillUnmount(){h.a.get().removeListener("crypto.keyBackupStatus",this._onKeyBackupStatusChange)}_getInitialPhase(){var e;const t=null===(e=v.a.createSecretStorageKey)||void 0===e?void 0:e.call(v.a);if(t)return console.log("Created key via customisations, jumping to bootstrap step"),this._recoveryKey={privateKey:t},void this._bootstrapSecretStorage();this._fetchBackupInfo()}async _fetchBackupInfo(){try{const e=await h.a.get().getKeyBackupVersion(),t=h.a.get().isCryptoEnabled()&&await h.a.get().isKeyBackupTrusted(e),{forceReset:a}=this.props,s=e&&!a?3:2;return this.setState({phase:s,backupInfo:e,backupSigStatus:t}),{backupInfo:e,backupSigStatus:t}}catch(e){this.setState({phase:1})}}async _queryKeyUploadAuth(){try{await h.a.get().uploadDeviceSigningKeys(null,{}),console.log("uploadDeviceSigningKeys unexpectedly succeeded without UI auth!")}catch(e){if(!e.data||!e.data.flows)return void console.log("uploadDeviceSigningKeys advertised no flows!");const t=e.data.flows.some(e=>1===e.stages.length&&"m.login.password"===e.stages[0]);this.setState({canUploadKeysWithPasswordOnly:t})}}_renderOptionKey(){return n.a.createElement(b.a,{key:"key",value:"key",name:"keyPassphrase",checked:"key"===this.state.passPhraseKeySelected,onChange:this._onKeyPassphraseChange,outlined:!0},n.a.createElement("div",{className:"mx_CreateSecretStorageDialog_optionTitle"},n.a.createElement("span",{className:"mx_CreateSecretStorageDialog_optionIcon mx_CreateSecretStorageDialog_optionIcon_secureBackup"}),Object(d.a)("Generate a Security Key")),n.a.createElement("div",null,Object(d.a)("We’ll generate a Security Key for you to store somewhere safe, like a password manager or a safe.")))}_renderOptionPassphrase(){return n.a.createElement(b.a,{key:"passphrase",value:"passphrase",name:"keyPassphrase",checked:"passphrase"===this.state.passPhraseKeySelected,onChange:this._onKeyPassphraseChange,outlined:!0},n.a.createElement("div",{className:"mx_CreateSecretStorageDialog_optionTitle"},n.a.createElement("span",{className:"mx_CreateSecretStorageDialog_optionIcon mx_CreateSecretStorageDialog_optionIcon_securePhrase"}),Object(d.a)("Enter a Security Phrase")),n.a.createElement("div",null,Object(d.a)("Use a secret phrase only you know, and optionally save a Security Key to use for backup.")))}_renderPhaseChooseKeyPassphrase(){const e=Object(w.c)(),t=e.includes("key")?this._renderOptionKey():null,a=e.includes("passphrase")?this._renderOptionPassphrase():null;return n.a.createElement("form",{onSubmit:this._onChooseKeyPassphraseFormSubmit},n.a.createElement("p",{className:"mx_CreateSecretStorageDialog_centeredBody"},Object(d.a)("Safeguard against losing access to encrypted messages & data by backing up encryption keys on your server.")),n.a.createElement("div",{className:"mx_CreateSecretStorageDialog_primaryContainer",role:"radiogroup"},t,a),n.a.createElement(P.a,{primaryButton:Object(d.a)("Continue"),onPrimaryButtonClick:this._onChooseKeyPassphraseFormSubmit,onCancel:this._onCancelClick,hasCancel:this.state.canSkip}))}_renderPhaseMigrate(){const e=l.getComponent("views.elements.Field");let t,a=Object(d.a)("Next");return this.state.canUploadKeysWithPasswordOnly?t=n.a.createElement("div",null,n.a.createElement("div",null,Object(d.a)("Enter your account password to confirm the upgrade:")),n.a.createElement("div",null,n.a.createElement(e,{type:"password",label:Object(d.a)("Password"),value:this.state.accountPassword,onChange:this._onAccountPasswordChange,forceValidity:!1!==this.state.accountPasswordCorrect&&null,autoFocus:!0}))):this.state.backupSigStatus.usable?t=n.a.createElement("p",null,Object(d.a)("You'll need to authenticate with the server to confirm the upgrade.")):(t=n.a.createElement("div",null,n.a.createElement("div",null,Object(d.a)("Restore your key backup to upgrade your encryption"))),a=Object(d.a)("Restore")),n.a.createElement("form",{onSubmit:this._onMigrateFormSubmit},n.a.createElement("p",null,Object(d.a)("Upgrade this session to allow it to verify other sessions, granting them access to encrypted messages and marking them as trusted for other users.")),n.a.createElement("div",null,t),n.a.createElement(P.a,{primaryButton:a,onPrimaryButtonClick:this._onMigrateFormSubmit,hasCancel:!1,primaryDisabled:this.state.canUploadKeysWithPasswordOnly&&!this.state.accountPassword},n.a.createElement("button",{type:"button",className:"danger",onClick:this._onCancelClick},Object(d.a)("Skip"))))}_renderPhasePassPhrase(){return n.a.createElement("form",{onSubmit:this._onPassPhraseNextClick},n.a.createElement("p",null,Object(d.a)("Enter a security phrase only you know, as it’s used to safeguard your data. To be secure, you shouldn’t re-use your account password.")),n.a.createElement("div",{className:"mx_CreateSecretStorageDialog_passPhraseContainer"},n.a.createElement(_.a,{className:"mx_CreateSecretStorageDialog_passPhraseField",onChange:this._onPassPhraseChange,minScore:4,value:this.state.passPhrase,onValidate:this._onPassPhraseValidate,fieldRef:this._passphraseField,autoFocus:!0,label:Object(d.b)("Enter a Security Phrase"),labelEnterPassword:Object(d.b)("Enter a Security Phrase"),labelStrongPassword:Object(d.b)("Great! This Security Phrase looks strong enough."),labelAllowedButUnsafe:Object(d.b)("Great! This Security Phrase looks strong enough.")})),n.a.createElement(P.a,{primaryButton:Object(d.a)("Continue"),onPrimaryButtonClick:this._onPassPhraseNextClick,hasCancel:!1,disabled:!this.state.passPhraseValid},n.a.createElement("button",{type:"button",onClick:this._onCancelClick,className:"danger"},Object(d.a)("Cancel"))))}_renderPhasePassPhraseConfirm(){const e=l.getComponent("views.elements.Field");let t,a;this.state.passPhraseConfirm===this.state.passPhrase?(t=Object(d.a)("That matches!"),a=Object(d.a)("Use a different passphrase?")):this.state.passPhrase.startsWith(this.state.passPhraseConfirm)||(t=Object(d.a)("That doesn't match."),a=Object(d.a)("Go back to set it again."));let s=null;return t&&(s=n.a.createElement("div",null,n.a.createElement("div",null,t),n.a.createElement("div",null,n.a.createElement(C.a,{element:"span",className:"mx_linkButton",onClick:this._onSetAgainClick},a)))),n.a.createElement("form",{onSubmit:this._onPassPhraseConfirmNextClick},n.a.createElement("p",null,Object(d.a)("Enter your Security Phrase a second time to confirm it.")),n.a.createElement("div",{className:"mx_CreateSecretStorageDialog_passPhraseContainer"},n.a.createElement(e,{type:"password",onChange:this._onPassPhraseConfirmChange,value:this.state.passPhraseConfirm,className:"mx_CreateSecretStorageDialog_passPhraseField",label:Object(d.a)("Confirm your Security Phrase"),autoFocus:!0,autoComplete:"new-password"}),n.a.createElement("div",{className:"mx_CreateSecretStorageDialog_passPhraseMatch"},s)),n.a.createElement(P.a,{primaryButton:Object(d.a)("Continue"),onPrimaryButtonClick:this._onPassPhraseConfirmNextClick,hasCancel:!1,disabled:this.state.passPhrase!==this.state.passPhraseConfirm},n.a.createElement("button",{type:"button",onClick:this._onCancelClick,className:"danger"},Object(d.a)("Skip"))))}_renderPhaseShowKey(){let e;return e=6===this.state.phase?n.a.createElement(P.a,{primaryButton:Object(d.a)("Continue"),disabled:!this.state.downloaded&&!this.state.copied&&!this.state.setPassphrase,onPrimaryButtonClick:this._onShowKeyContinueClick,hasCancel:!1}):n.a.createElement("div",{className:"mx_CreateSecretStorageDialog_continueSpinner"},n.a.createElement(k.a,null)),n.a.createElement("div",null,n.a.createElement("p",null,Object(d.a)("Store your Security Key somewhere safe, like a password manager or a safe, as it’s used to safeguard your encrypted data.")),n.a.createElement("div",{className:"mx_CreateSecretStorageDialog_primaryContainer"},n.a.createElement("div",{className:"mx_CreateSecretStorageDialog_recoveryKeyContainer"},n.a.createElement("div",{className:"mx_CreateSecretStorageDialog_recoveryKey"},n.a.createElement("code",{ref:this._collectRecoveryKeyNode},this._recoveryKey.encodedPrivateKey)),n.a.createElement("div",{className:"mx_CreateSecretStorageDialog_recoveryKeyButtons"},n.a.createElement(C.a,{kind:"primary",className:"mx_Dialog_primary",onClick:this._onDownloadClick,disabled:8===this.state.phase},Object(d.a)("Download")),n.a.createElement("span",null,Object(d.a)("or")),n.a.createElement(C.a,{kind:"primary",className:"mx_Dialog_primary mx_CreateSecretStorageDialog_recoveryKeyButtons_copyBtn",onClick:this._onCopyClick,disabled:8===this.state.phase},this.state.copied?Object(d.a)("Copied!"):Object(d.a)("Copy"))))),e)}_renderBusyPhase(){const e=l.getComponent("views.elements.Spinner");return n.a.createElement("div",null,n.a.createElement(e,null))}_renderPhaseLoadError(){return n.a.createElement("div",null,n.a.createElement("p",null,Object(d.a)("Unable to query secret storage status")),n.a.createElement("div",{className:"mx_Dialog_buttons"},n.a.createElement(P.a,{primaryButton:Object(d.a)("Retry"),onPrimaryButtonClick:this._onLoadRetryClick,hasCancel:this.state.canSkip,onCancel:this._onCancel})))}_renderPhaseSkipConfirm(){return n.a.createElement("div",null,n.a.createElement("p",null,Object(d.a)("If you cancel now, you may lose encrypted messages & data if you lose access to your logins.")),n.a.createElement("p",null,Object(d.a)("You can also set up Secure Backup & manage your keys in Settings.")),n.a.createElement(P.a,{primaryButton:Object(d.a)("Go back"),onPrimaryButtonClick:this._onGoBackClick,hasCancel:!1},n.a.createElement("button",{type:"button",className:"danger",onClick:this._onCancel},Object(d.a)("Cancel"))))}_titleForPhase(e){switch(e){case 2:return Object(d.a)("Set up Secure Backup");case 3:return Object(d.a)("Upgrade your encryption");case E:return Object(d.a)("Set a Security Phrase");case 5:return Object(d.a)("Confirm Security Phrase");case 10:return Object(d.a)("Are you sure?");case 6:return Object(d.a)("Save your Security Key");case 8:return Object(d.a)("Setting up keys");default:return""}}render(){const e=l.getComponent("views.dialogs.BaseDialog");let t;if(this.state.error)t=n.a.createElement("div",null,n.a.createElement("p",null,Object(d.a)("Unable to set up secret storage")),n.a.createElement("div",{className:"mx_Dialog_buttons"},n.a.createElement(P.a,{primaryButton:Object(d.a)("Retry"),onPrimaryButtonClick:this._bootstrapSecretStorage,hasCancel:this.state.canSkip,onCancel:this._onCancel})));else switch(this.state.phase){case 0:t=this._renderBusyPhase();break;case 1:t=this._renderPhaseLoadError();break;case 2:t=this._renderPhaseChooseKeyPassphrase();break;case 3:t=this._renderPhaseMigrate();break;case E:t=this._renderPhasePassPhrase();break;case 5:t=this._renderPhasePassPhraseConfirm();break;case 6:t=this._renderPhaseShowKey();break;case 8:t=this._renderBusyPhase();break;case 10:t=this._renderPhaseSkipConfirm()}let a=null;switch(this.state.phase){case E:case 5:a=["mx_CreateSecretStorageDialog_titleWithIcon","mx_CreateSecretStorageDialog_securePhraseTitle"];break;case 6:a=["mx_CreateSecretStorageDialog_titleWithIcon","mx_CreateSecretStorageDialog_secureBackupTitle"];break;case 2:a="mx_CreateSecretStorageDialog_centeredTitle"}return n.a.createElement(e,{className:"mx_CreateSecretStorageDialog",onFinished:this.props.onFinished,title:this._titleForPhase(this.state.phase),titleClass:a,hasCancel:this.props.hasCancel&&[E].includes(this.state.phase),fixedWidth:!1},n.a.createElement("div",null,t))}}r()(O,"propTypes",{hasCancel:c.a.bool,accountPassword:c.a.string,forceReset:c.a.bool}),r()(O,"defaultProps",{hasCancel:!0,forceReset:!1})},307:function(e,t,a){(function(a){var s,r,o;r=[],void 0===(o="function"==typeof(s=function(){"use strict";function t(e,t,a){var s=new XMLHttpRequest;s.open("GET",e),s.responseType="blob",s.onload=function(){i(s.response,t,a)},s.onerror=function(){console.error("could not download file")},s.send()}function s(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,n=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(e,a,n){var i=o.URL||o.webkitURL,c=document.createElement("a");a=a||e.name||"download",c.download=a,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):s(c.href)?t(e,a,n):r(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,o){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),a);else if(s(e))t(e,a,o);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout((function(){r(n)}))}}:function(e,a,s,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,s);var i="application/octet-stream"===e.type,c=/constructor/i.test(o.HTMLElement)||o.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&c||n)&&"undefined"!=typeof FileReader){var h=new FileReader;h.onloadend=function(){var e=h.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},h.readAsDataURL(e)}else{var u=o.URL||o.webkitURL,p=u.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});o.saveAs=i.saveAs=i,e.exports=i})?s.apply(t,r):s)||(e.exports=o)}).call(this,a(7))}}]);
//# sourceMappingURL=25.js.map