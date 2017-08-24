var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_descriptor6,_descriptor7,_descriptor8,_descriptor9,_descriptor10,_descriptor11,_descriptor12,_descriptor13,_descriptor14,_descriptor15,_descriptor16,_dec2,_class4,_desc2,_value2,_class5,_descriptor17,_descriptor18,_jsxFileName='src/index.js';var _mobx=require('mobx');function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var defineWebviewMethods=function defineWebviewMethods(constructor,methods){return function(target){
target.prototype.postMessage=function(){
this.webview.postMessage(JSON.stringify(message));
};var _loop=function _loop(
method){
target.prototype[method]=function(){
this.postMessage({
constructor:constructor,
type:'exec',
payload:{
method:method,
arguments:[].concat(Array.prototype.slice.call(arguments))}});


};};for(var _iterator=methods,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var method=_ref;_loop(method);
}
};};var

CanvasGradient=
function CanvasGradient(canvas){_classCallCheck(this,CanvasGradient);
this.canvas=canvas;
};var



CanvasRenderingContext2D=(_dec=defineWebviewMethods('CanvasRenderingContext2D',["arc","arcTo","beginPath","bezierCurveTo","clearRect","clip","closePath","createImageData","createLinearGradient","createPattern","createRadialGradient","drawFocusIfNeeded","drawImage","drawWidgetAsOnScreen","drawWindow","fill","fillRect","fillText","getImageData","getLineDash","isPointInPath","isPointInStroke","lineTo","measureText","moveTo","putImageData","quadraticCurveTo","rect","restore","rotate","save","scale","setLineDash","setTransform","stroke","strokeRect","strokeText","transform","translate"]),_dec(_class=(_class2=


















function CanvasRenderingContext2D(canvas){_classCallCheck(this,CanvasRenderingContext2D);_initDefineProp(this,'fillStyle',_descriptor,this);_initDefineProp(this,'font',_descriptor2,this);_initDefineProp(this,'globalAlpha',_descriptor3,this);_initDefineProp(this,'globalCompositeOperation',_descriptor4,this);_initDefineProp(this,'lineCap',_descriptor5,this);_initDefineProp(this,'lineDashOffset',_descriptor6,this);_initDefineProp(this,'lineJoin',_descriptor7,this);_initDefineProp(this,'lineWidth',_descriptor8,this);_initDefineProp(this,'miterLimit',_descriptor9,this);_initDefineProp(this,'shadowBlur',_descriptor10,this);_initDefineProp(this,'shadowColor',_descriptor11,this);_initDefineProp(this,'shadowOffsetX',_descriptor12,this);_initDefineProp(this,'shadowOffsetY',_descriptor13,this);_initDefineProp(this,'strokeStyle',_descriptor14,this);_initDefineProp(this,'textAlign',_descriptor15,this);_initDefineProp(this,'textBaseline',_descriptor16,this);
this.canvas=canvas;
},(_descriptor=_applyDecoratedDescriptor(_class2.prototype,'fillStyle',[_mobx.observable],{enumerable:true,initializer:function initializer(){return'#000';}}),_descriptor2=_applyDecoratedDescriptor(_class2.prototype,'font',[_mobx.observable],{enumerable:true,initializer:function initializer(){return'10px sans-serif';}}),_descriptor3=_applyDecoratedDescriptor(_class2.prototype,'globalAlpha',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 1.0;}}),_descriptor4=_applyDecoratedDescriptor(_class2.prototype,'globalCompositeOperation',[_mobx.observable],{enumerable:true,initializer:function initializer(){return'source-over';}}),_descriptor5=_applyDecoratedDescriptor(_class2.prototype,'lineCap',[_mobx.observable],{enumerable:true,initializer:function initializer(){return'butt';}}),_descriptor6=_applyDecoratedDescriptor(_class2.prototype,'lineDashOffset',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 0.0;}}),_descriptor7=_applyDecoratedDescriptor(_class2.prototype,'lineJoin',[_mobx.observable],{enumerable:true,initializer:function initializer(){return'miter';}}),_descriptor8=_applyDecoratedDescriptor(_class2.prototype,'lineWidth',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 1.0;}}),_descriptor9=_applyDecoratedDescriptor(_class2.prototype,'miterLimit',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 10.0;}}),_descriptor10=_applyDecoratedDescriptor(_class2.prototype,'shadowBlur',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 0;}}),_descriptor11=_applyDecoratedDescriptor(_class2.prototype,'shadowColor',[_mobx.observable],{enumerable:true,initializer:function initializer(){return'rgba(0,0,0,0)';}}),_descriptor12=_applyDecoratedDescriptor(_class2.prototype,'shadowOffsetX',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 0;}}),_descriptor13=_applyDecoratedDescriptor(_class2.prototype,'shadowOffsetY',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 0;}}),_descriptor14=_applyDecoratedDescriptor(_class2.prototype,'strokeStyle',[_mobx.observable],{enumerable:true,initializer:function initializer(){return'#000';}}),_descriptor15=_applyDecoratedDescriptor(_class2.prototype,'textAlign',[_mobx.observable],{enumerable:true,initializer:function initializer(){return'start';}}),_descriptor16=_applyDecoratedDescriptor(_class2.prototype,'textBaseline',[_mobx.observable],{enumerable:true,initializer:function initializer(){return'alphabetic';}})),_class2))||_class);var




Canvas=(_dec2=defineWebviewMethods('HTMLCanvasElement',['toDataURL','toBlob']),_dec2(_class4=(_class5=function(_Component){_inherits(Canvas,_Component);function Canvas(){var _ref2;var _temp,_this,_ret2;_classCallCheck(this,Canvas);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret2=(_temp=(_this=_possibleConstructorReturn(this,(_ref2=Canvas.__proto__||Object.getPrototypeOf(Canvas)).call.apply(_ref2,[this].concat(args))),_this),_initDefineProp(_this,'height',_descriptor17,_this),_initDefineProp(_this,'width',_descriptor18,_this),_this.




toDataURI=_this.defineMethod('toDataURI'),_this.

context2D=new CanvasRenderingContext2D(),_this.









handleRef=function(element){
_this.webview=element;
},_temp),_possibleConstructorReturn(_this,_ret2);}_createClass(Canvas,[{key:'getContext',value:function getContext(contextType,contextAttributes){switch(contextType){case'2d':{return this.context2D;}}}},{key:'render',value:function render()

{
return React.createElement(WebView,{ref:this.handleRef,__source:{fileName:_jsxFileName,lineNumber:76}});
}}]);return Canvas;}(Component),(_descriptor17=_applyDecoratedDescriptor(_class5.prototype,'height',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 150;}}),_descriptor18=_applyDecoratedDescriptor(_class5.prototype,'width',[_mobx.observable],{enumerable:true,initializer:function initializer(){return 300;}})),_class5))||_class4);