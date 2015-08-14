var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.bfuniteu;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.0-SNAPSHOT";
var $strongName = 'AA83DC092DB07AD797EA4C31ED223509';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = {3:1}, $intern_1 = {3:1, 4:1}, $intern_2 = {38:1}, $intern_3 = {62:1, 3:1, 4:1}, $intern_4 = {40:1, 3:1, 4:1}, $intern_5 = 4194303, $intern_6 = 1048575, $intern_7 = 524288, $intern_8 = 4194304, $intern_9 = 17592186044416, $intern_10 = -9223372036854775808, $intern_11 = 1000000000, $intern_12 = 32768, $intern_13 = 16384, $intern_14 = 131072, $intern_15 = 262144, $intern_16 = 16777216, $intern_17 = 33554432, $intern_18 = 67108864, $intern_19 = {37:1}, $intern_20 = {56:1, 42:1, 34:1, 48:1, 57:1, 31:1, 25:1}, $intern_21 = {56:1, 42:1, 34:1, 48:1, 64:1, 57:1, 31:1, 25:1}, $intern_22 = {56:1, 42:1, 34:1, 48:1, 64:1, 57:1, 81:1, 31:1, 25:1}, $intern_23 = {16:1}, $intern_24 = {77:1}, $intern_25 = {76:1}, $intern_26 = {9:1, 3:1, 11:1, 12:1}, $intern_27 = {7:1, 6:1, 28:1}, $intern_28 = {24:1}, $intern_29 = {41:1}, $intern_30 = {33:1}, $intern_31 = {18:1}, $intern_32 = {88:1}, $intern_33 = {16:1, 29:1}, $intern_34 = -2147483648, $intern_35 = 4294967296, $intern_36 = 1073741824, $intern_37 = {3:1, 8:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function create_com_google_gwt_useragent_client_UserAgent(){
  switch (permutationId) {
    case 2:
      return new UserAgentImplIe8;
    case 0:
      return new UserAgentImplGecko1_8;
    case 3:
      return new UserAgentImplIe9;
    case 1:
      return new UserAgentImplIe10;
  }
  return new UserAgentImplSafari;
}

function create_com_google_gwt_user_client_impl_WindowImpl(){
  switch (permutationId) {
    case 4:
      return new WindowImpl;
    case 0:
      return new WindowImplMozilla;
  }
  return new WindowImplIE;
}

function create_com_google_gwt_user_client_impl_DOMImpl(){
  switch (permutationId) {
    case 4:
      return new DOMImplWebkit_0;
    case 2:
      return new DOMImplIE8_0;
    case 0:
      return new DOMImplMozilla_0;
  }
  return new DOMImplIE9_0;
}

function create_com_google_gwt_http_client_Request_RequestImpl(){
  switch (permutationId) {
    case 2:
    case 3:
      return new Request$RequestImplIE8And9;
  }
  return new Request$RequestImpl;
}

function create_com_google_gwt_dom_client_DOMImpl(){
  switch (permutationId) {
    case 2:
      return new DOMImplIE8;
    case 4:
      return new DOMImplWebkit;
    case 0:
      return new DOMImplMozilla;
  }
  return new DOMImplIE9;
}

function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeIdOrPrototype && (_.typeMarker$ = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals_0(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName_0(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 313:1, 11:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function dynamicCast(src_0, dstId){
  checkType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function dynamicCastAllowJso(src_0, dstId){
  checkType(src_0 == null || !isJavaString(src_0) && !hasTypeMarker(src_0) || canCast(src_0, dstId));
  return src_0;
}

function dynamicCastJso(src_0){
  checkType(src_0 == null || !isJavaString(src_0) && !hasTypeMarker(src_0));
  return src_0;
}

function dynamicCastToString(src_0){
  checkType(src_0 == null || isJavaString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_byte(x_0){
  return round_int(x_0) << 24 >> 24;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

function round_short(x_0){
  return round_int(x_0) << 16 >> 16;
}

function throwClassCastExceptionUnlessNull(o){
  checkType(o == null);
  return o;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getEnumConstants(this$static){
  return this$static.enumConstantsFunc && this$static.enumConstantsFunc();
}

function $getName_0(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumSuperclass = superclass;
  clazz.enumConstantsFunc = enumConstantsFunc;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(44, 1, {44:1, 316:1}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName_1(){
  return $getName_0(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_28(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
function $clinit_String(){
  $clinit_String = emptyMethod;
  new String$1;
}

function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals_0(this$static, other){
  return this$static === other;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && this$static.charCodeAt(start_0) <= 32) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && this$static.charCodeAt(end - 1) <= 32) {
    --end;
  }
  return start_0 > 0 || end < length_0?__substr(this$static, start_0, end - start_0):this$static;
}

function __checkBounds(legalCount, start_0, end){
  $clinit_String();
  if (start_0 < 0) {
    throw new StringIndexOutOfBoundsException(start_0);
  }
  if (end < start_0) {
    throw new StringIndexOutOfBoundsException(end - start_0);
  }
  if (end > legalCount) {
    throw new StringIndexOutOfBoundsException(end);
  }
}

function __substr(str, beginIndex, len){
  $clinit_String();
  return str.substr(beginIndex, len);
}

function __valueOf(x_0, start_0, end){
  $clinit_String();
  var batchSize = 10000;
  var s = '';
  for (var batchStart = start_0; batchStart < end;) {
    var batchEnd = Math.min(batchStart + batchSize, end);
    s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

function valueOf_4(x_0){
  $clinit_String();
  return String.fromCharCode(x_0);
}

function valueOf_5(x_0, offset, count){
  $clinit_String();
  var end;
  end = offset + count;
  __checkBounds(x_0.length, offset, end);
  return __valueOf(x_0, offset, end);
}

function String$1(){
}

defineClass(119, 1, {}, String$1);
_.equals$ = function equals_28(other){
  return this === other;
}
;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 44), Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2), Ljava_lang_String$1_2_classLit = createForClass('java.lang', 'String/1', 119);
function $addSuppressed(this$static, exception){
  checkNotNull_0(exception, 'Cannot suppress a null exception.');
  checkCriticalArgument(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = initValues(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_0, 4, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $initCause(this$static, cause){
  checkState_0(!this$static.cause);
  checkCriticalArgument(true, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(4, 1, $intern_1);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  var className, msg;
  className = $getName_0(this.___clazz$);
  msg = this.getMessage();
  return msg != null?className + ': ' + msg:className;
}
;
_.disableSuppression = false;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 4);
function Exception(message){
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(66, 4, $intern_1);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 66);
function RuntimeException(){
  captureStackTrace(this, this.detailMessage);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(13, 66, $intern_1, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 13);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName_0(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.disableSuppression = !true;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(30, 13, {30:1, 3:1, 4:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 30);
function create(milliseconds){
  return new Date(milliseconds);
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function escapeChar(c, escapeTable){
  var lookedUp = escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeValue(toEscape){
  var escapeTable = (!escapeTable_0 && (escapeTable_0 = initEscapeTable()) , escapeTable_0);
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

function safeEval(json){
  try {
    return JSON.parse(json);
  }
   catch (e) {
    return throwIllegalArgumentException('Error parsing JSON: ' + e, json);
  }
}

function throwIllegalArgumentException(message, data_0){
  throw new IllegalArgumentException_0(message + '\n' + data_0);
}

var escapeTable_0;
defineClass(274, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 274);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = push_0(rescheduled, t)):$initWindowCloseHandlerImpl();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 30)?dynamicCast(e, 30).getThrown():e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

defineClass(159, 274, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 159);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

var collector;
defineClass(285, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 285);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(121, 285, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  var fnStack = [];
  t.__gwt$backingJsError = {fnStack:fnStack};
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 121);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

defineClass(286, 285, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown.replace('\n', ' ')))):jsThrown && typeof jsThrown == 'object' && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 286);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(122, 286, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 122);
function get_0(instance, key_0){
  if (instance.expando$) {
    return instance.expando$[':' + key_0];
  }
  return null;
}

function setNative(instance, key_0, value_0){
  !instance.expando$ && (instance.expando$ = {});
  instance.expando$[':' + key_0] = value_0;
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $isOrHasChild(this$static, child){
  return ($clinit_DOMImpl() , impl_0).isOrHasChild(this$static, child);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getFirstChildElement(this$static){
  return $getFirstChildElement_0(($clinit_DOMImpl() , this$static));
}

function $getString(this$static){
  return ($clinit_DOMImpl() , impl_0).toString_0(this$static);
}

function $hasAttribute(this$static){
  return ($clinit_DOMImpl() , impl_0).hasAttribute_0(this$static, 'compressed');
}

function $removeAttribute(this$static, name_0){
  this$static.removeAttribute(name_0);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(__substr(oldStyle, 0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $clinit_DOMImpl(){
  $clinit_DOMImpl = emptyMethod;
  impl_0 = dynamicCast(create_com_google_gwt_dom_client_DOMImpl(), 38);
}

function $cssSetOpacity(style, value_0){
  style.opacity = value_0;
}

function $getFirstChildElement_0(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

defineClass(38, 1, $intern_2);
_.createElement_0 = function createElement(doc, tag){
  return doc.createElement(tag);
}
;
_.createScriptElement = function createScriptElement(doc, source){
  var elem;
  elem = this.createElement_0(doc, 'script');
  elem.text = source;
  return elem;
}
;
_.cssSetOpacity = function cssSetOpacity(style, value_0){
  $cssSetOpacity(style, value_0);
}
;
_.eventGetCurrentTarget = function eventGetCurrentTarget(event_0){
  return event_0.currentTarget;
}
;
_.hasAttribute_0 = function hasAttribute(elem, name_0){
  return elem.hasAttribute(name_0);
}
;
_.setInnerText = function setInnerText(elem, text_0){
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
  text_0 != null && elem.appendChild(elem.ownerDocument.createTextNode(text_0));
}
;
_.toString_0 = function toString_2(elem){
  return elem.outerHTML;
}
;
var impl_0;
var Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImpl', 38);
function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

defineClass(298, 38, $intern_2);
_.createElement_0 = function createElement_0(doc, tagName){
  var container, elem;
  if (tagName.indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement('div')) , doc.__gwt_container);
    $setInnerHTML(container, '<' + tagName + '/>');
    elem = $getFirstChildElement_0(($clinit_DOMImpl() , container));
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}
;
_.eventGetCurrentTarget = function eventGetCurrentTarget_0(event_0){
  return currentEventTarget;
}
;
_.eventGetRelatedTarget = function eventGetRelatedTarget(evt){
  return evt.relatedTarget || (evt.type == 'mouseout'?evt.toElement:evt.fromElement);
}
;
_.eventGetTarget = function eventGetTarget(evt){
  return evt.srcElement;
}
;
_.eventPreventDefault = function eventPreventDefault(evt){
  evt.returnValue = false;
}
;
_.hasAttribute_0 = function hasAttribute_0(elem, name_0){
  var node = elem.getAttributeNode(name_0);
  return !!(node && node.specified);
}
;
_.isOrHasChild = function isOrHasChild(parent_0, child){
  return isOrHasChildImpl(parent_0, child);
}
;
_.setInnerText = function setInnerText_0(elem, text_0){
  elem.innerText = text_0 || '';
}
;
var currentEventTarget;
var Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplTrident', 298);
function DOMImplIE8(){
  $clinit_DOMImpl();
}

function isIE8_0(){
  if (!isIE8Detected) {
    isIE8 = isIE8Impl();
    isIE8Detected = true;
  }
  return isIE8;
}

function isIE8Impl(){
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('msie') != -1 && $doc.documentMode == 8) {
    return true;
  }
  return false;
}

defineClass(169, 298, $intern_2, DOMImplIE8);
_.cssSetOpacity = function cssSetOpacity_0(style, value_0){
  isIE8_0()?(style.filter = 'alpha(opacity=' + value_0 * 100 + ')' , undefined):$cssSetOpacity(style, value_0);
}
;
var isIE8 = false, isIE8Detected = false;
var Lcom_google_gwt_dom_client_DOMImplIE8_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE8', 169);
defineClass(299, 38, $intern_2);
_.eventGetRelatedTarget = function eventGetRelatedTarget_0(evt){
  return evt.relatedTarget;
}
;
_.eventGetTarget = function eventGetTarget_0(evt){
  return evt.target;
}
;
_.eventPreventDefault = function eventPreventDefault_0(evt){
  evt.preventDefault();
}
;
_.isOrHasChild = function isOrHasChild_0(parent_0, child){
  return parent_0.contains(child);
}
;
_.setInnerText = function setInnerText_1(elem, text_0){
  elem.textContent = text_0 || '';
}
;
var Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandard', 299);
defineClass(300, 299, $intern_2);
_.createScriptElement = function createScriptElement_0(doc, source){
  var elem;
  elem = doc.createElement('script');
  impl_0.setInnerText(elem, source);
  return elem;
}
;
_.eventGetCurrentTarget = function eventGetCurrentTarget_1(event_0){
  return event_0.currentTarget || $wnd;
}
;
var Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandardBase', 300);
function DOMImplIE9(){
  $clinit_DOMImpl();
}

defineClass(171, 300, $intern_2, DOMImplIE9);
_.isOrHasChild = function isOrHasChild_1(parent_0, child){
  return isOrHasChildImpl(parent_0, child);
}
;
var Lcom_google_gwt_dom_client_DOMImplIE9_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplIE9', 171);
function DOMImplMozilla(){
  $clinit_DOMImpl();
}

defineClass(172, 299, $intern_2, DOMImplMozilla);
_.eventGetRelatedTarget = function eventGetRelatedTarget_1(evt){
  var relatedTarget = evt.relatedTarget;
  if (!relatedTarget) {
    return null;
  }
  try {
    var nodeName = relatedTarget.nodeName;
    return relatedTarget;
  }
   catch (e) {
    return null;
  }
}
;
_.isOrHasChild = function isOrHasChild_2(parent_0, child){
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}
;
_.toString_0 = function toString_3(elem){
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement('DIV');
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = '';
  return outer;
}
;
var Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplMozilla', 172);
function DOMImplWebkit(){
  $clinit_DOMImpl();
}

defineClass(170, 300, $intern_2, DOMImplWebkit);
_.eventGetTarget = function eventGetTarget_1(evt){
  var target = evt.target;
  target && target.nodeType == 3 && (target = target.parentNode);
  return target;
}
;
var Lcom_google_gwt_dom_client_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplWebkit', 170);
function $createDivElement(this$static){
  return ($clinit_DOMImpl() , impl_0).createElement_0(this$static, 'div');
}

function $createScriptElement(this$static, source){
  return ($clinit_DOMImpl() , impl_0).createScriptElement(this$static, source);
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getClientWidth(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $setOpacity(this$static, value_0){
  ($clinit_DOMImpl() , impl_0).cssSetOpacity(this$static, value_0);
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

defineClass(292, 1, {});
_.toString$ = function toString_4(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 292);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(293, 292, {});
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 293);
function CloseEvent_0(){
}

function fire(source){
  var event_0;
  if (TYPE) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(205, 293, {}, CloseEvent_0);
_.dispatch = function dispatch(handler){
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 205);
defineClass(148, 1, {});
_.hashCode$ = function hashCode_1(){
  return this.index_0;
}
;
_.toString$ = function toString_5(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 148);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(105, 148, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 105);
function $addHandler(this$static, type_0, handler){
  return $doAdd(this$static.eventBus, type_0, handler) , new LegacyHandlerWrapper;
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 62)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

defineClass(103, 1, {42:1});
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 103);
defineClass(294, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 294);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_5(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1;
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_1(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next();
      try {
        event_0.dispatch(dynamicCast(handler, 314));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 4)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_7(causes, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_2(this$static.map_0, type_0), 41);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_0(this$static.map_0, type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_2(source), 8);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0);
  return directHandlers;
}

function $getHandlerList(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_2(this$static.map_0, type_0), 41);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get_2(null), 8);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_3(c$iterator.last = c$iterator.i++), 315));
        $doAddNow(c.this$01, c.val$type2, c.val$source3, c.val$handler4);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

defineClass(149, 294, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 149);
function HandlerManager$Bus(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(150, 149, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 150);
function LegacyHandlerWrapper(){
}

defineClass(211, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 211);
function UmbrellaException(causes){
  var cause, cause$iterator, i;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty()?null:dynamicCast(causes.iterator().next(), 4));
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext();) {
    cause = dynamicCast(cause$iterator.next(), 4);
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next(), 4);
    first?(first = false):(b.string += '; ' , b);
    $append_0(b, t.getMessage());
  }
  return b.string;
}

defineClass(62, 13, $intern_3, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 62);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(108, 62, $intern_3, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 108);
function $cancel(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = ($clinit_Request$ImplHolder() , $clinit_Request$ImplHolder() , impl_1).createResponse(xhr);
  response.xmlHttpRequest.responseText.length == 0?$onError(callback.val$cmb2, new RequestException('Risposta vuota')):$onSuccess(callback.val$cmb2, response.xmlHttpRequest.responseText);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static);
  $onError_0(this$static.callback, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request_0(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException;
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(199, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 199);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_1(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(131, 1, {});
_.fire = function fire_0(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $fireOnTimeout(this.this$01);
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 131);
function Request$1(this$0){
  this.this$01 = this$0;
}

defineClass(202, 131, {}, Request$1);
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 202);
function $clinit_Request$ImplHolder(){
  $clinit_Request$ImplHolder = emptyMethod;
  impl_1 = dynamicCast(create_com_google_gwt_http_client_Request_RequestImpl(), 83);
}

var impl_1;
function Request$RequestImpl(){
}

defineClass(83, 1, {83:1}, Request$RequestImpl);
_.createResponse = function createResponse(xmlHttpRequest){
  return new ResponseImpl(xmlHttpRequest);
}
;
var Lcom_google_gwt_http_client_Request$RequestImpl_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImpl', 83);
function Request$RequestImplIE8And9(){
}

defineClass(200, 83, {83:1}, Request$RequestImplIE8And9);
_.createResponse = function createResponse_0(xmlHttpRequest){
  return new Request$RequestImplIE8And9$1(xmlHttpRequest);
}
;
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9', 200);
defineClass(303, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 303);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(111, 303, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 111);
function Request$RequestImplIE8And9$1($anonymous0){
  ResponseImpl.call(this, $anonymous0);
}

defineClass(201, 111, {}, Request$RequestImplIE8And9$1);
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9/1', 201);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  GET = new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 30)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw unwrap($e0);
  }
  xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(null);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 30)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    }
     else 
      throw unwrap($e1);
  }
  return request;
}

function $sendRequest(this$static, callback){
  throwIfNull('callback', callback);
  return $doSend(this$static, callback);
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(110, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var GET;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 110);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(198, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 198);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(71, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_6(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 71);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(40, 66, $intern_4, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 40);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(210, 40, $intern_4, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 210);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(215, 40, $intern_4, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 215);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

function canSet(array, value_0){
  switch (array.__elementTypeCategory$) {
    case 4:
      return isJavaString(value_0);
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return !isJavaString(value_0) && !hasTypeMarker(value_0);
    case 1:
      return !isJavaString(value_0) && !hasTypeMarker(value_0) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function setCheck(array, index_0, value_0){
  checkArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 30)) {
    jse = dynamicCast(e, 30);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 4)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create_0(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_5;
  a1 = value_0 >> 22 & $intern_5;
  a2 = value_0 < 0?$intern_6:0;
  return create0(a0, a1, a2);
}

function create_1(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new ArithmeticException;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_7 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_1(($clinit_LongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!gte_0(a, b)) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_1(($clinit_LongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    setH(bshift, a2 >>> 1);
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_LongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_5;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_5;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_6;
  setL(a, neg0);
  setM(a, neg1);
  setH(a, neg2);
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function setH(a, x_0){
  a.h = x_0;
}

function setL(a, x_0){
  a.l = x_0;
}

function setM(a, x_0){
  a.m = x_0;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_8 + a.h * $intern_9;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  setL(a, sum0 & $intern_5);
  setM(a, sum1 & $intern_5);
  setH(a, sum2 & $intern_6);
  return true;
}

var remainder;
function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return {l:sum0 & $intern_5, m:sum1 & $intern_5, h:sum2 & $intern_6};
}

function and(a, b){
  return {l:a.l & b.l, m:a.m & b.m, h:a.h & b.h};
}

function div(a, b){
  return divMod(a, b, false);
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_10) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_9) {
    a2 = round_int(value_0 / $intern_9);
    value_0 -= a2 * $intern_9;
  }
  a1 = 0;
  if (value_0 >= $intern_8) {
    a1 = round_int(value_0 / $intern_8);
    value_0 -= a1 * $intern_8;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_0, 320, 256, 0, 1));
    result = boxedValues[rebase] = create_0(value_0);
    return result;
  }
  return create_0(value_0);
}

function gt(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function lt(a, b){
  return !gte_0(a, b);
}

function lte(a, b){
  return !gt(a, b);
}

function mod(a, b){
  divMod(a, b, true);
  return remainder;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_5;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_5;
  c2 += c1 >> 22;
  c1 &= $intern_5;
  c2 &= $intern_6;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_5;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_5;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_6;
  return create0(neg0, neg1, neg2);
}

function neq(a, b){
  return a.l != b.l || a.m != b.m || a.h != b.h;
}

function or(a, b){
  return {l:a.l | b.l, m:a.m | b.m, h:a.h | b.h};
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return {l:res0 & $intern_5, m:res1 & $intern_5, h:res2 & $intern_6};
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_7) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_6:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_6:0;
    res1 = negative?$intern_5:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_5, m:res1 & $intern_5, h:res2 & $intern_6};
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_6;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return {l:res0 & $intern_5, m:res1 & $intern_5, h:res2 & $intern_6};
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_5, m:sum1 & $intern_5, h:sum2 & $intern_6};
}

function toDouble(a){
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_10;
  }
  if (!gte_0(a, ZERO)) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_8 + a.h * $intern_9;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_7(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_7(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = fromInt($intern_11);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_5, $intern_5, 524287);
  MIN_VALUE = create0(0, 0, $intern_7);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $onModuleLoad_0(new BFEntryPoint);
}

function $replace(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw new NullPointerException_0('html is null');
  }
  this.html = html;
}

defineClass(63, 1, {86:1, 3:1}, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.asString = function asString(){
  return this.html;
}
;
_.equals$ = function equals_0(obj){
  if (!instanceOf(obj, 86)) {
    return false;
  }
  return $equals_0(this.html, dynamicCast(obj, 86).asString());
}
;
_.hashCode$ = function hashCode_2(){
  return getHashCode_0(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 63);
function SafeHtmlString(){
  this.html = '';
}

defineClass(214, 1, {86:1, 3:1}, SafeHtmlString);
_.asString = function asString_0(){
  return this.html;
}
;
_.equals$ = function equals_1(obj){
  if (!instanceOf(obj, 86)) {
    return false;
  }
  return $equals_0(this.html, dynamicCast(obj, 86).asString());
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode_0(this.html);
}
;
_.toString$ = function toString_8(){
  return 'safe: "' + this.html + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 214);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  new SafeHtmlString;
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  s.indexOf('&') != -1 && (s = $replace(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, GT_RE, LT_RE, QUOT_RE, SQUOT_RE;
function $get(this$static){
  if (!this$static.element) {
    this$static.element = $getElementById($doc, this$static.domId);
    if (!this$static.element) {
      throw new RuntimeException_0('Cannot find element with id "' + this$static.domId + '". Perhaps it is not attached to the document body.');
    }
    $removeAttribute(this$static.element, 'id');
  }
  return this$static.element;
}

function LazyDomElement(domId){
  this.domId = domId;
}

defineClass(14, 1, {}, LazyDomElement);
var Lcom_google_gwt_uibinder_client_LazyDomElement_2_classLit = createForClass('com.google.gwt.uibinder.client', 'LazyDomElement', 14);
function attachToDom(element){
  var origParent, origSibling;
  ensureHiddenDiv();
  origParent = $getParentElement(($clinit_DOMImpl() , element));
  origSibling = $getNextSiblingElement(element);
  $appendChild(hiddenDiv, element);
  return new UiBinderUtil$TempAttachment(origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (!hiddenDiv) {
    hiddenDiv = $createDivElement($doc);
    setVisible(hiddenDiv, false);
    $appendChild(getBodyElement(), hiddenDiv);
  }
}

function fromHtml(html){
  var newbie;
  ensureHiddenDiv();
  $setInnerHTML(hiddenDiv, html);
  newbie = $getFirstChildElement(hiddenDiv);
  $removeChild(newbie.parentNode, newbie);
  return newbie;
}

function orphan(node){
  $removeChild(node.parentNode, node);
}

var hiddenDiv;
function UiBinderUtil$TempAttachment(origParent, origSibling, element){
  this.origParent = origParent;
  this.origSibling = origSibling;
  this.element = element;
}

defineClass(212, 1, {}, UiBinderUtil$TempAttachment);
var Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client', 'UiBinderUtil/TempAttachment', 212);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  impl_2 = dynamicCast(create_com_google_gwt_user_client_impl_DOMImpl(), 37);
}

function dispatchEvent_1(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(($clinit_DOMImpl() , evt).type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function isPotential(o){
  $clinit_DOM();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function previewEvent(evt){
  $clinit_DOM();
  return true;
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  impl_2.sinkEvents(elem, eventBits);
}

var currentEvent = null, impl_2, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_0(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function setEventListener(elem, listener){
  $clinit_DOM();
  setEventListener_0(elem, listener);
}

function sinkEvents_0(elem){
  $clinit_DOM();
  impl_2.sinkEvents(elem, 1);
}

function $clinit_Window(){
  $clinit_Window = emptyMethod;
  impl_3 = dynamicCast(create_com_google_gwt_user_client_impl_WindowImpl(), 72);
}

function addCloseHandler(handler){
  $clinit_Window();
  maybeInitializeCloseHandlers();
  return addHandler(TYPE?TYPE:(TYPE = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    impl_3.initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function onClosed(){
  $clinit_Window();
  closeHandlersInitialized && fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
}

function onClosing(){
  $clinit_Window();
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

var closeHandlersInitialized = false, handlers_0, impl_3;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_0 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(147, 293, {}, Window$ClosingEvent);
_.dispatch = function dispatch_0(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 147);
function Window$WindowHandlers(){
  this.eventBus = new HandlerManager$Bus;
  this.source = null;
}

defineClass(104, 103, {42:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 104);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return $intern_12;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return $intern_13;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return $intern_14;
    case 'contextmenu':
      return $intern_15;
    case 'paste':
      return $intern_7;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_8;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_16;
    case 'gesturechange':
      return $intern_17;
    case 'gestureend':
      return $intern_18;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(this$static){
  if (!eventSystemIsInitialized) {
    this$static.initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener_0(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 34)?maybeListener:null;
}

function setEventListener_0(elem, listener){
  elem.__listener = listener;
}

defineClass(37, 1, $intern_19);
var eventSystemIsInitialized = false;
var Lcom_google_gwt_user_client_impl_DOMImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImpl', 37);
function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?callDispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?callDispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?callDispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?callDispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?callDispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?callDispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?callDispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?callDispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?callDispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?callDispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?callDispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?callDispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?callDispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?callDispatchEvent:null);
  chMask & $intern_13 && (elem.onscroll = bits & $intern_13?callDispatchEvent:null);
  chMask & $intern_12 && (elem.nodeName == 'IFRAME'?bits & $intern_12?elem.attachEvent('onload', callDispatchOnLoadEvent):elem.detachEvent('onload', callDispatchOnLoadEvent):(elem.onload = bits & $intern_12?callDispatchUnhandledEvent:null));
  chMask & 65536 && (elem.onerror = bits & 65536?callDispatchEvent:null);
  chMask & $intern_14 && (elem.onmousewheel = bits & $intern_14?callDispatchEvent:null);
  chMask & $intern_15 && (elem.oncontextmenu = bits & $intern_15?callDispatchEvent:null);
  chMask & $intern_7 && (elem.onpaste = bits & $intern_7?callDispatchEvent:null);
}

function previewEventImpl(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

defineClass(297, 37, $intern_19);
_.initEventSystem = function initEventSystem(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return previewEvent($wnd.event);
  }
  );
  var dispatchEvent_0 = $entry(function(){
    var oldEventTarget = ($clinit_DOMImpl() , currentEventTarget);
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEventImpl()) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var getEventListener = getEventListener_0;
    var listener, curElem = this;
    while (curElem && !(listener = getEventListener(curElem))) {
      curElem = curElem.parentElement;
    }
    listener && dispatchEvent_1($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  );
  var dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent_0.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEventImpl();
    }
  }
  );
  var dispatchUnhandledEvent = $entry(function(){
    this.__gwtLastUnhandledEvent = $wnd.event.type;
    dispatchEvent_0.call(this);
  }
  );
  var moduleName = $moduleName.replace(/\./g, '_');
  $wnd['__gwt_dispatchEvent_' + moduleName] = dispatchEvent_0;
  callDispatchEvent = (new Function('w', 'return function() { w.__gwt_dispatchEvent_' + moduleName + '.call(this) }'))($wnd);
  $wnd['__gwt_dispatchDblClickEvent_' + moduleName] = dispatchDblClickEvent;
  callDispatchDblClickEvent = (new Function('w', 'return function() { w.__gwt_dispatchDblClickEvent_' + moduleName + '.call(this)}'))($wnd);
  $wnd['__gwt_dispatchUnhandledEvent_' + moduleName] = dispatchUnhandledEvent;
  callDispatchUnhandledEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(this)}'))($wnd);
  callDispatchOnLoadEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(w.event.srcElement)}'))($wnd);
  var bodyDispatcher = $entry(function(){
    dispatchEvent_0.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}
;
_.sinkEvents = function sinkEvents_1(elem, bits){
  $maybeInitializeEventSystem(this);
  $sinkEventsImpl(elem, bits);
}
;
var callDispatchDblClickEvent, callDispatchEvent, callDispatchOnLoadEvent, callDispatchUnhandledEvent;
var Lcom_google_gwt_user_client_impl_DOMImplTrident_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplTrident', 297);
function DOMImplIE8_0(){
}

defineClass(166, 297, $intern_19, DOMImplIE8_0);
var Lcom_google_gwt_user_client_impl_DOMImplIE8_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplIE8', 166);
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_3, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_2 = $entry(dispatchEvent_3);
  dispatchUnhandledEvent_0 = $entry(dispatchUnhandledEvent_1);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkEventsImpl_0(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_2:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_2:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_2:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_2:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_2:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_2:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_2:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_2:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_2:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_2:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_2:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_2:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_2:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_2:null);
  chMask & $intern_13 && (elem.onscroll = bits & $intern_13?dispatchEvent_2:null);
  chMask & $intern_12 && (elem.onload = bits & $intern_12?dispatchUnhandledEvent_0:null);
  chMask & 65536 && (elem.onerror = bits & 65536?dispatchEvent_2:null);
  chMask & $intern_14 && (elem.onmousewheel = bits & $intern_14?dispatchEvent_2:null);
  chMask & $intern_15 && (elem.oncontextmenu = bits & $intern_15?dispatchEvent_2:null);
  chMask & $intern_7 && (elem.onpaste = bits & $intern_7?dispatchEvent_2:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_2:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_2:null);
  chMask & $intern_8 && (elem.ontouchend = bits & $intern_8?dispatchEvent_2:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_2:null);
  chMask & $intern_16 && (elem.ongesturestart = bits & $intern_16?dispatchEvent_2:null);
  chMask & $intern_17 && (elem.ongesturechange = bits & $intern_17?dispatchEvent_2:null);
  chMask & $intern_18 && (elem.ongestureend = bits & $intern_18?dispatchEvent_2:null);
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOMImplStandard();
  $clinit_DOM();
  return;
}

function dispatchDragEvent(evt){
  ($clinit_DOMImpl() , impl_0).eventPreventDefault(evt);
  dispatchEvent_3(evt);
}

function dispatchEvent_3(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_1(evt, element.nodeType != 1?null:element, getEventListener_0(element));
}

function dispatchUnhandledEvent_1(evt){
  var element;
  element = ($clinit_DOMImpl() , impl_0).eventGetCurrentTarget(evt);
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_3(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = ($clinit_DOMImpl() , impl_0).eventGetCurrentTarget(evt);
  while (!!curElem && !getEventListener_0(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

defineClass(295, 37, $intern_19);
_.initEventSystem = function initEventSystem_0(){
  $initEventSystem();
}
;
_.sinkEvents = function sinkEvents_2(elem, bits){
  $maybeInitializeEventSystem(this);
  $sinkEventsImpl_0(elem, bits);
}
;
var bitlessEventDispatchers, captureElem, captureEventDispatchers, dispatchEvent_2, dispatchUnhandledEvent_0;
var Lcom_google_gwt_user_client_impl_DOMImplStandard_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplStandard', 295);
defineClass(296, 295, $intern_19);
var Lcom_google_gwt_user_client_impl_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplStandardBase', 296);
function DOMImplIE9_0(){
  $clinit_DOMImplStandard();
}

defineClass(167, 296, $intern_19, DOMImplIE9_0);
var Lcom_google_gwt_user_client_impl_DOMImplIE9_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplIE9', 167);
function $clinit_DOMImplMozilla(){
  $clinit_DOMImplMozilla = emptyMethod;
  $clinit_DOMImplStandard();
  captureEventDispatchers['DOMMouseScroll'] = dispatchCapturedMouseEvent;
}

function $initSyntheticMouseUpEvents(){
  $wnd.addEventListener('mouseout', $entry(function(evt){
    var cap = ($clinit_DOMImplStandard() , captureElem);
    if (cap && !evt.relatedTarget) {
      if ('html' == evt.target.tagName.toLowerCase()) {
        var muEvent = $doc.createEvent('MouseEvents');
        muEvent.initMouseEvent('mouseup', true, true, $wnd, 0, evt.screenX, evt.screenY, evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, evt.button, null);
        cap.dispatchEvent(muEvent);
      }
    }
  }
  ), true);
}

function DOMImplMozilla_0(){
  $clinit_DOMImplMozilla();
}

defineClass(168, 295, $intern_19, DOMImplMozilla_0);
_.initEventSystem = function initEventSystem_1(){
  $initEventSystem();
  $initSyntheticMouseUpEvents();
}
;
_.sinkEvents = function sinkEvents_3(elem, bits){
  $maybeInitializeEventSystem(this);
  $sinkEventsImpl_0(elem, bits);
  bits & $intern_14 && elem.addEventListener('DOMMouseScroll', ($clinit_DOMImplStandard() , dispatchEvent_2), false);
}
;
var Lcom_google_gwt_user_client_impl_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplMozilla', 168);
function DOMImplWebkit_0(){
  $clinit_DOMImplStandard();
}

defineClass(165, 296, $intern_19, DOMImplWebkit_0);
var Lcom_google_gwt_user_client_impl_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.user.client.impl', 'DOMImplWebkit', 165);
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function WindowImpl(){
}

defineClass(72, 1, {72:1}, WindowImpl);
_.initWindowCloseHandler = function initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      $clinit_Window();
      closeHandlersInitialized && fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}
;
var Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImpl', 72);
function $initWindowCloseHandlerImpl(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}

function WindowImplIE(){
}

defineClass(204, 72, {72:1}, WindowImplIE);
_.initWindowCloseHandler = function initWindowCloseHandler_0(){
  var scriptElem;
  scriptElem = $createScriptElement($doc, 'function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n');
  $appendChild($doc.body, scriptElem);
  $initWindowCloseHandlerImpl();
  $removeChild($doc.body, scriptElem);
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE', 204);
function WindowImplMozilla(){
}

defineClass(203, 72, {72:1}, WindowImplMozilla);
var Lcom_google_gwt_user_client_impl_WindowImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplMozilla', 203);
function $clinit_UIObject(){
  $clinit_UIObject = emptyMethod;
  new UIObject$DebugIdImpl;
}

function $resolvePotentialElement(){
  throw new UnsupportedOperationException;
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function setVisible(elem, visible){
  $clinit_UIObject();
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

defineClass(31, 1, {48:1, 31:1});
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.toString$ = function toString_9(){
  if (!this.element) {
    return '(null handle)';
  }
  return $getString(($clinit_DOM() , this.element));
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 31);
function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener_0(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(($clinit_DOMImpl() , event_0).type)) {
    case 16:
    case 32:
      related = impl_0.eventGetRelatedTarget(event_0);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    $clinit_DOM();
    setEventListener_0(this$static.element, null);
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 64)) {
    dynamicCast(this$static.parent_0, 64).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?sinkEvents(($clinit_DOM() , this$static.element), eventBitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(25, 31, $intern_20);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 25);
defineClass(302, 25, $intern_21);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 302);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_1(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , $getParentElement(($clinit_DOMImpl() , elem))), elem);
    $remove_1(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection;
}

defineClass(107, 302, $intern_21);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 107);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(186, 107, $intern_21);
_.remove = function remove_0(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 186);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next(), 25);
    try {
      c.execute(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_7(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(187, 108, $intern_3, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 187);
function AttachDetachException$1(){
}

defineClass(188, 1, {}, AttachDetachException$1);
_.execute = function execute(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 188);
function AttachDetachException$2(){
}

defineClass(189, 1, {}, AttachDetachException$2);
_.execute = function execute_0(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 189);
function $checkInit(this$static){
  if (!this$static.widget) {
    throw new IllegalStateException_0('initWidget() is not called yet');
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw new IllegalStateException_0('Composite.initWidget() may only be called once.');
  }
  $removeFromParent(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement(this$static, elem);
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

defineClass(301, 25, $intern_20);
_.isAttached = function isAttached_0(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}
;
_.onAttach = function onAttach_0(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    $sinkEvents(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach(this.widget);
  $clinit_DOM();
  setEventListener_0(this.element, this);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  $onBrowserEvent(this.widget, event_0);
}
;
_.onDetach = function onDetach_0(){
  $onDetach(this.widget);
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, ($clinit_DOM() , $resolvePotentialElement()));
  return this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 301);
function HTMLPanel(html){
  $clinit_UIObject();
  ComplexPanel.call(this);
  $setElement(this, ($clinit_DOM() , $createDivElement($doc)));
  $setInnerHTML(this.element, html);
}

defineClass(196, 107, $intern_21, HTMLPanel);
var Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLPanel', 196);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  $clinit_UIObject();
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  $clinit_UIObject();
  ComplexPanel.call(this);
  $setElement(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_4(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_1(){
  $clinit_RootPanel();
  var rp;
  rp = dynamicCast($get_2(rootPanels, null), 81);
  if (rp) {
    return rp;
  }
  rootPanels.size_0 == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put_0(rootPanels, null, rp);
  $add_7(widgetsToDetach, rp);
  return rp;
}

function getBodyElement(){
  $clinit_RootPanel();
  return $doc.body;
}

defineClass(81, 186, $intern_22);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 81);
function RootPanel$1(){
}

defineClass(191, 1, {}, RootPanel$1);
_.execute = function execute_1(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 191);
function RootPanel$2(){
}

defineClass(192, 1, {314:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 192);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, getBodyElement());
}

defineClass(190, 81, $intern_22, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 190);
function UIObject$DebugIdImpl(){
}

defineClass(175, 1, {}, UIObject$DebugIdImpl);
var Lcom_google_gwt_user_client_ui_UIObject$DebugIdImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject/DebugIdImpl', 175);
function $add_1(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_0, 25, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    this$static.array[i] = this$static.array[i - 1];
  }
  this$static.array[beforeIndex] = w;
}

function $remove_0(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    this$static.array[i] = this$static.array[i + 1];
  }
  this$static.array[this$static.size_0] = null;
}

function $remove_1(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_0(this$static, index_0);
}

function WidgetCollection(){
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_0, 25, 4, 0, 1);
}

defineClass(194, 1, {}, WidgetCollection);
_.iterator = function iterator_1(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 194);
function $next(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(109, 1, $intern_23, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next = function next_0(){
  return $next(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 109);
function assertCompileTimeUserAgent(){
  var compileTimeValue, impl, runtimeValue;
  impl = dynamicCast(create_com_google_gwt_useragent_client_UserAgent(), 77);
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  if (!$equals_0(compileTimeValue, runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue);
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(87, 4, $intern_1);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 87);
defineClass(21, 87, $intern_1);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 21);
function UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue){
  Error_0.call(this, ($clinit_String() , '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.')), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4):null);
}

defineClass(115, 21, $intern_1, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 115);
function UserAgentImplGecko1_8(){
}

defineClass(162, 1, $intern_24, UserAgentImplGecko1_8);
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'gecko1_8';
}
;
_.getRuntimeValue = function getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplGecko1_18_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplGecko1_8', 162);
function UserAgentImplIe10(){
}

defineClass(164, 1, $intern_24, UserAgentImplIe10);
_.getCompileTimeValue = function getCompileTimeValue_0(){
  return 'ie10';
}
;
_.getRuntimeValue = function getRuntimeValue_0(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplIe10_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe10', 164);
function UserAgentImplIe8(){
}

defineClass(161, 1, $intern_24, UserAgentImplIe8);
_.getCompileTimeValue = function getCompileTimeValue_1(){
  return 'ie8';
}
;
_.getRuntimeValue = function getRuntimeValue_1(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplIe8_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe8', 161);
function UserAgentImplIe9(){
}

defineClass(163, 1, $intern_24, UserAgentImplIe9);
_.getCompileTimeValue = function getCompileTimeValue_2(){
  return 'ie9';
}
;
_.getRuntimeValue = function getRuntimeValue_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplIe9_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe9', 163);
function UserAgentImplSafari(){
}

defineClass(160, 1, $intern_24, UserAgentImplSafari);
_.getCompileTimeValue = function getCompileTimeValue_3(){
  return 'safari';
}
;
_.getRuntimeValue = function getRuntimeValue_3(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
var Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplSafari', 160);
function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $maybeInitializeCreatorMap(this$static){
  if (!this$static.creatorMap) {
    this$static.creatorMap = {};
    this$static.initializeCreatorMap(this$static.creatorMap);
  }
}

function $maybeInitializeEnumMap(this$static){
  if (!this$static.enumToStringMap) {
    this$static.enumToStringMap = new HashMap;
    this$static.stringsToEnumsMap = new HashMap;
    this$static.initializeEnumMap();
  }
}

defineClass(304, 1, $intern_25);
_.create_0 = function create_2(clazz){
  $maybeInitializeCreatorMap(this);
  return $create(this.creatorMap, clazz, this);
}
;
_.getEnum = function getEnum(clazz, token){
  var e, e$iterator, list, clazz_0, superclass;
  $maybeInitializeEnumMap(this);
  list = dynamicCast($getStringValue(this.stringsToEnumsMap, token), 8);
  if (!list) {
    throw new IllegalArgumentException_0(token);
  }
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = dynamicCast(e$iterator.next(), 12);
    if ((clazz_0 = e.___clazz$ , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass) == clazz) {
      return e;
    }
  }
  throw new IllegalArgumentException_0(($ensureNamesAreInitialized(clazz) , clazz.typeName));
}
;
_.getToken = function getToken(e){
  var toReturn;
  $maybeInitializeEnumMap(this);
  toReturn = dynamicCastToString($get_2(this.enumToStringMap, e));
  if (toReturn == null) {
    throw new IllegalArgumentException_0(e.name_0 != null?e.name_0:'' + e.ordinal);
  }
  return toReturn;
}
;
var Lcom_google_web_bindery_autobean_gwt_client_impl_AbstractAutoBeanFactory_2_classLit = createForClass('com.google.web.bindery.autobean.gwt.client.impl', 'AbstractAutoBeanFactory', 304);
function $traverse(this$static, visitor, count){
  var i, paramCount, type_0;
  if (this$static.simpleType) {
    visitor.endVisitType(this$static.simpleType);
    return 0;
  }
  type_0 = this$static.paramTypes[count];
  paramCount = this$static.paramCounts[count];
  ++count;
  for (i = 0; i < paramCount; i++) {
    count = $traverse(this$static, visitor, count);
  }
  visitor.endVisitType(type_0);
  return count;
}

function ClientPropertyContext(type_0){
  this.simpleType = type_0;
  this.paramTypes = null;
  this.paramCounts = null;
}

function ClientPropertyContext_0(types, paramCounts){
  this.simpleType = null;
  this.paramTypes = types;
  this.paramCounts = paramCounts;
}

defineClass(15, 1, {}, ClientPropertyContext, ClientPropertyContext_0);
var Lcom_google_web_bindery_autobean_gwt_client_impl_ClientPropertyContext_2_classLit = createForClass('com.google.web.bindery.autobean.gwt.client.impl', 'ClientPropertyContext', 15);
function beanSetter(bean, key_0){
  return function(value_0){
    bean.setProperty(key_0, value_0);
  }
  ;
}

function $add_2(this$static, clazz, constructors){
  this$static[$ensureNamesAreInitialized(clazz) , clazz.typeName] = constructors;
}

function $create(this$static, clazz, factory){
  var arr;
  arr = this$static[$ensureNamesAreInitialized(clazz) , clazz.typeName];
  if (!!arr && !!arr[0]) {
    return arr[0](factory, null);
  }
  return null;
}

function $getPropertyKeys0(this$static, list){
  for (key in this$static) {
    this$static.hasOwnProperty(key) && list.add_1(key);
  }
}

function $getRaw(this$static, index_0){
  _ = this$static[index_0];
  if (_ == null) {
    return null;
  }
  if (isUnwrappedString(_)) {
    return {__s:_};
  }
  return Object(_);
}

function $getRaw_0(this$static, index_0){
  _ = this$static[index_0];
  if (_ == null) {
    return null;
  }
  if (isUnwrappedString(_)) {
    return {__s:_};
  }
  return Object(_);
}

function $getReified(this$static, key_0){
  return this$static.__reified && this$static.__reified[':' + key_0];
}

function $isReified(this$static, key_0){
  return !!(this$static.__reified && this$static.__reified.hasOwnProperty(':' + key_0));
}

function $isString(this$static){
  return this$static && this$static.__s != null;
}

function $setReified(this$static, key_0, object){
  (this$static.__reified || (this$static.__reified = function(){
  }
  ))[':' + key_0] = object;
}

function asNumber__D__devirtual$(this$static){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.asNumber():Number(this$static);
}

function asString__Ljava_lang_String___devirtual$(this$static){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.asString():this$static.__s;
}

function assign_Lcom_google_web_bindery_autobean_shared_Splittable_Ljava_lang_String__V__devirtual$(this$static, parent_0, propertyName){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.assign_0(parent_0, propertyName):($isString(this$static)?(parent_0[propertyName] = this$static.__s , undefined):(parent_0[propertyName] = this$static , undefined) , undefined);
}

function create0_0(object){
  return Number(object);
}

function create0_1(object){
  return Boolean(object);
}

function getPropertyKeys__Ljava_util_List___devirtual$(this$static){
  var toReturn;
  return hasJavaObjectVirtualDispatch(this$static)?this$static.getPropertyKeys():(toReturn = new ArrayList , $getPropertyKeys0(this$static, toReturn) , $clinit_Collections() , new Collections$UnmodifiableRandomAccessList(toReturn));
}

function getReified_Ljava_lang_String__Ljava_lang_Object___devirtual$(this$static, key_0){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.getReified(key_0):$getReified(this$static, key_0);
}

function getSplittable__Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this$static){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.getSplittable():this$static;
}

function get_I_Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this$static, index_0){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.get_0(index_0):$getRaw(this$static, index_0);
}

function get_Ljava_lang_String__Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this$static, key_0){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.get_1(key_0):$getRaw_0(this$static, key_0);
}

function isNull_Ljava_lang_String__Z__devirtual$(this$static, key_0){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.isNull_0(key_0):this$static[key_0] == null;
}

function isNumber__Z__devirtual$(this$static){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.isNumber():Object.prototype.toString.call(this$static) == '[object Number]';
}

function isReified_Ljava_lang_String__Z__devirtual$(this$static, key_0){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.isReified(key_0):$isReified(this$static, key_0);
}

function isUnwrappedString(obj){
  return Object.prototype.toString.call(obj) == '[object String]';
}

function setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(this$static, key_0, object){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.setReified(key_0, object):$setReified(this$static, key_0, object);
}

function size__I__devirtual$(this$static){
  return hasJavaObjectVirtualDispatch(this$static)?this$static.size_1():this$static.length;
}

function $clinit_NullSplittable(){
  $clinit_NullSplittable = emptyMethod;
  INSTANCE_0 = new NullSplittable;
}

function $assign(parent_0, index_0){
  parent_0[index_0] = null;
}

function $assign_0(parent_0, propertyName){
  delete parent_0[propertyName];
}

function NullSplittable(){
}

defineClass(132, 1, {113:1}, NullSplittable);
_.asBoolean = function asBoolean(){
  return false;
}
;
_.asNumber = function asNumber(){
  return 0;
}
;
_.asString = function asString_1(){
  return null;
}
;
_.assign = function assign(parent_0, index_0){
  $assign(parent_0, index_0);
}
;
_.assign_0 = function assign_0(parent_0, propertyName){
  $assign_0(parent_0, propertyName);
}
;
_.get_0 = function get_2(index_0){
  throw new NullPointerException;
}
;
_.get_1 = function get_3(key_0){
  throw new NullPointerException;
}
;
_.getPropertyKeys = function getPropertyKeys(){
  throw new NullPointerException;
}
;
_.getReified = function getReified(key_0){
  throw new NullPointerException;
}
;
_.isIndexed = function isIndexed(){
  return false;
}
;
_.isNull = function isNull(index_0){
  throw new NullPointerException;
}
;
_.isNull_0 = function isNull_0(key_0){
  throw new NullPointerException;
}
;
_.isNumber = function isNumber(){
  return false;
}
;
_.isReified = function isReified(key_0){
  throw new NullPointerException;
}
;
_.setReified = function setReified(key_0, object){
  throw new NullPointerException;
}
;
_.size_1 = function size_1(){
  throw new NullPointerException;
}
;
var INSTANCE_0;
var Lcom_google_web_bindery_autobean_gwt_client_impl_NullSplittable_2_classLit = createForClass('com.google.web.bindery.autobean.gwt.client.impl', 'NullSplittable', 132);
var Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit = createForInterface('com.google.web.bindery.autobean.shared', 'AutoBean');
function decode(factory, clazz, payload){
  var data_0;
  data_0 = split_1(payload);
  return doDecode(new AutoBeanCodexImpl$EncodeState(factory), clazz, data_0);
}

function getAutoBean(delegate){
  return delegate == null?null:dynamicCast(get_0(delegate, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7);
}

defineClass(306, 1, {});
_.visit = function visit(bean, ctx){
  return true;
}
;
_.visitReferenceProperty = function visitReferenceProperty(propertyName, value_0, ctx){
  return true;
}
;
_.visitValueProperty = function visitValueProperty(propertyName, value_0, ctx){
  return true;
}
;
var Lcom_google_web_bindery_autobean_shared_AutoBeanVisitor_2_classLit = createForClass('com.google.web.bindery.autobean.shared', 'AutoBeanVisitor', 306);
defineClass(305, 1, {});
_.endVisitType = function endVisitType(type_0){
}
;
var Lcom_google_web_bindery_autobean_shared_AutoBeanVisitor$ParameterizationVisitor_2_classLit = createForClass('com.google.web.bindery.autobean.shared', 'AutoBeanVisitor/ParameterizationVisitor', 305);
function $clinit_Splittable(){
  $clinit_Splittable = emptyMethod;
  NULL = ($clinit_NullSplittable() , INSTANCE_0);
}

var NULL;
var Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit = createForInterface('com.google.web.bindery.autobean.shared', 'Splittable');
function $clinit_ValueCodex(){
  $clinit_ValueCodex = emptyMethod;
  var t, t$array, t$index, t$max, temp;
  temp = new HashMap;
  for (t$array = values() , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $put_0(temp, t.type_0, t);
    !!t.primitiveType && $put_0(temp, t.primitiveType, t);
  }
  $clinit_Collections();
  new Collections$UnmodifiableSet(new AbstractMap$1(temp));
  TYPES_BY_CLASS = new Collections$UnmodifiableMap(temp);
}

function canDecode(clazz){
  $clinit_ValueCodex();
  if (findType(clazz)) {
    return true;
  }
  return false;
}

function decode_0(clazz, split_0){
  $clinit_ValueCodex();
  if (!split_0 || split_0 == ($clinit_Splittable() , NULL)) {
    return null;
  }
  return getTypeOrDie(clazz).decode(clazz, split_0);
}

function encode(clazz, obj){
  $clinit_ValueCodex();
  if (obj == null) {
    return $clinit_Splittable() , NULL;
  }
  return getTypeOrDie(clazz).encode(obj);
}

function findType(clazz){
  if ((clazz.modifiers & 8) != 0) {
    return $clinit_ValueCodex$Type() , ENUM;
  }
  return dynamicCast($get_4(TYPES_BY_CLASS, clazz), 9);
}

function getTypeOrDie(clazz){
  var toReturn;
  toReturn = findType(clazz);
  if (!toReturn) {
    throw new UnsupportedOperationException_0(($ensureNamesAreInitialized(clazz) , clazz.typeName));
  }
  return toReturn;
}

function getUninitializedFieldValue(clazz){
  $clinit_ValueCodex();
  var type_0;
  type_0 = getTypeOrDie(clazz);
  if (clazz == type_0.primitiveType) {
    return type_0.defaultValue;
  }
  return null;
}

var TYPES_BY_CLASS;
defineClass(12, 1, {3:1, 11:1, 12:1});
_.equals$ = function equals_2(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_4(){
  return getHashCode(this);
}
;
_.toString$ = function toString_10(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 12);
function $clinit_ValueCodex$Type(){
  $clinit_ValueCodex$Type = emptyMethod;
  BIG_DECIMAL = new ValueCodex$Type$1(Ljava_math_BigDecimal_2_classLit);
  BIG_INTEGER = new ValueCodex$Type$2(Ljava_math_BigInteger_2_classLit);
  BOOLEAN = new ValueCodex$Type$3(Ljava_lang_Boolean_2_classLit, Z_classLit, ($clinit_Boolean() , $clinit_Boolean() , FALSE));
  BYTE = new ValueCodex$Type$4(Ljava_lang_Byte_2_classLit, B_classLit, valueOf(0));
  CHARACTER = new ValueCodex$Type$5(Ljava_lang_Character_2_classLit, C_classLit, valueOf_0(0));
  DATE = new ValueCodex$Type$6(Ljava_util_Date_2_classLit);
  DOUBLE = new ValueCodex$Type$7(Ljava_lang_Double_2_classLit, D_classLit, new Double(0));
  ENUM = new ValueCodex$Type$8(Ljava_lang_Enum_2_classLit);
  FLOAT = new ValueCodex$Type$9(Ljava_lang_Float_2_classLit, F_classLit, new Float(0));
  INTEGER = new ValueCodex$Type$10(Ljava_lang_Integer_2_classLit, I_classLit, valueOf_1(0));
  LONG = new ValueCodex$Type$11(Ljava_lang_Long_2_classLit, J_classLit, valueOf_2({l:0, m:0, h:0}));
  SHORT = new ValueCodex$Type$12(Ljava_lang_Short_2_classLit, S_classLit, valueOf_3(0));
  STRING = new ValueCodex$Type$13(Ljava_lang_String_2_classLit);
  SPLITTABLE = new ValueCodex$Type$14(Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit);
  VOID = new ValueCodex$Type$15(Ljava_lang_Void_2_classLit, V_classLit);
}

function ValueCodex$Type(enum$name, enum$ordinal, objectType){
  ValueCodex$Type_0.call(this, enum$name, enum$ordinal, objectType, null, null);
}

function ValueCodex$Type_0(enum$name, enum$ordinal, objectType, primitiveType, defaultValue){
  this.name_0 = enum$name;
  this.ordinal = enum$ordinal;
  this.type_0 = objectType;
  this.primitiveType = primitiveType;
  this.defaultValue = defaultValue;
}

function values(){
  $clinit_ValueCodex$Type();
  return initValues(getClassLiteralForArray(Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, 1), $intern_0, 9, 0, [BIG_DECIMAL, BIG_INTEGER, BOOLEAN, BYTE, CHARACTER, DATE, DOUBLE, ENUM, FLOAT, INTEGER, LONG, SHORT, STRING, SPLITTABLE, VOID]);
}

defineClass(9, 12, $intern_26);
var BIG_DECIMAL, BIG_INTEGER, BOOLEAN, BYTE, CHARACTER, DATE, DOUBLE, ENUM, FLOAT, INTEGER, LONG, SHORT, SPLITTABLE, STRING, VOID;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type', 9, Ljava_lang_Enum_2_classLit, values);
function ValueCodex$Type$1($anonymous0){
  ValueCodex$Type.call(this, 'BIG_DECIMAL', 0, $anonymous0);
}

defineClass(250, 9, $intern_26, ValueCodex$Type$1);
_.decode = function decode_1(clazz, value_0){
  return new BigDecimal_0(asString__Ljava_lang_String___devirtual$(value_0));
}
;
_.encode = function encode_0(value_0){
  return {__s:$toString_0(dynamicCast(value_0, 26))};
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$1_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/1', 250, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$10($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'INTEGER', 9, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(259, 9, $intern_26, ValueCodex$Type$10);
_.decode = function decode_2(clazz, value_0){
  return valueOf_1(round_int(asNumber__D__devirtual$(value_0)));
}
;
_.encode = function encode_1(value_0){
  return create0_0(dynamicCast(value_0, 51).value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$10_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/10', 259, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function $decode(value_0){
  if (isNumber__Z__devirtual$(value_0)) {
    return valueOf_2(fromDouble(asNumber__D__devirtual$(value_0)));
  }
  return valueOf_2(__parseAndValidateLong(asString__Ljava_lang_String___devirtual$(value_0)));
}

function ValueCodex$Type$11($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'LONG', 10, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(260, 9, $intern_26, ValueCodex$Type$11);
_.decode = function decode_3(clazz, value_0){
  return $decode(value_0);
}
;
_.encode = function encode_2(value_0){
  return {__s:($clinit_String() , '' + dynamicCast(value_0, 52))};
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$11_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/11', 260, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$12($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'SHORT', 11, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(261, 9, $intern_26, ValueCodex$Type$12);
_.decode = function decode_4(clazz, value_0){
  return valueOf_3(round_short(asNumber__D__devirtual$(value_0)));
}
;
_.encode = function encode_3(value_0){
  return create0_0(dynamicCast(value_0, 53).value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$12_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/12', 261, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$13($anonymous0){
  ValueCodex$Type.call(this, 'STRING', 12, $anonymous0);
}

defineClass(262, 9, $intern_26, ValueCodex$Type$13);
_.decode = function decode_5(clazz, value_0){
  return asString__Ljava_lang_String___devirtual$(value_0);
}
;
_.encode = function encode_4(value_0){
  return {__s:dynamicCastToString(value_0)};
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$13_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/13', 262, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$14($anonymous0){
  ValueCodex$Type.call(this, 'SPLITTABLE', 13, $anonymous0);
}

defineClass(263, 9, $intern_26, ValueCodex$Type$14);
_.decode = function decode_6(clazz, value_0){
  return value_0;
}
;
_.encode = function encode_5(value_0){
  return dynamicCastAllowJso(value_0, 113);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$14_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/14', 263, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$15($anonymous0, $anonymous1){
  ValueCodex$Type_0.call(this, 'VOID', 14, $anonymous0, $anonymous1, null);
}

defineClass(264, 9, $intern_26, ValueCodex$Type$15);
_.decode = function decode_7(clazz, value_0){
  return null;
}
;
_.encode = function encode_6(value_0){
  return null;
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$15_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/15', 264, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$2($anonymous0){
  ValueCodex$Type.call(this, 'BIG_INTEGER', 1, $anonymous0);
}

defineClass(251, 9, $intern_26, ValueCodex$Type$2);
_.decode = function decode_8(clazz, value_0){
  return new BigInteger_3(asString__Ljava_lang_String___devirtual$(value_0));
}
;
_.encode = function encode_7(value_0){
  return {__s:toDecimalScaledString_0(dynamicCast(value_0, 5), 0)};
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$2_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/2', 251, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$3($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'BOOLEAN', 2, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(252, 9, $intern_26, ValueCodex$Type$3);
_.decode = function decode_9(clazz, value_0){
  return $clinit_Boolean() , (hasJavaObjectVirtualDispatch(value_0)?value_0.asBoolean():value_0 == true)?TRUE:FALSE;
}
;
_.encode = function encode_8(value_0){
  return create0_1(dynamicCast(value_0, 58).value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$3_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/3', 252, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$4($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'BYTE', 3, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(253, 9, $intern_26, ValueCodex$Type$4);
_.decode = function decode_10(clazz, value_0){
  return valueOf(round_byte(asNumber__D__devirtual$(value_0)));
}
;
_.encode = function encode_9(value_0){
  return create0_0(dynamicCast(value_0, 59).value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$4_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/4', 253, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$5($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'CHARACTER', 4, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(254, 9, $intern_26, ValueCodex$Type$5);
_.decode = function decode_11(clazz, value_0){
  return valueOf_0(asString__Ljava_lang_String___devirtual$(value_0).charCodeAt(0));
}
;
_.encode = function encode_10(value_0){
  return {__s:($clinit_String() , '' + dynamicCast(value_0, 50))};
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$5_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/5', 254, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function $decode_0(value_0){
  if (isNumber__Z__devirtual$(value_0)) {
    return new Date_0(fromDouble(asNumber__D__devirtual$(value_0)));
  }
  return tryParseDate(asString__Ljava_lang_String___devirtual$(value_0));
}

function ValueCodex$Type$6($anonymous0){
  ValueCodex$Type.call(this, 'DATE', 5, $anonymous0);
}

defineClass(255, 9, $intern_26, ValueCodex$Type$6);
_.decode = function decode_12(clazz, value_0){
  return $decode_0(value_0);
}
;
_.encode = function encode_11(value_0){
  return {__s:($clinit_String() , '' + toString_7(fromDouble(dynamicCast(value_0, 55).jsdate.getTime())))};
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$6_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/6', 255, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$7($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'DOUBLE', 6, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(256, 9, $intern_26, ValueCodex$Type$7);
_.decode = function decode_13(clazz, value_0){
  return new Double(asNumber__D__devirtual$(value_0));
}
;
_.encode = function encode_12(value_0){
  return create0_0(dynamicCast(value_0, 60).value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$7_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/7', 256, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$8($anonymous0){
  ValueCodex$Type.call(this, 'ENUM', 7, $anonymous0);
}

defineClass(257, 9, $intern_26, ValueCodex$Type$8);
_.decode = function decode_14(clazz, value_0){
  return dynamicCast($getEnumConstants(clazz)[round_int(asNumber__D__devirtual$(value_0))], 12);
}
;
_.encode = function encode_13(value_0){
  return create0_0(dynamicCast(value_0, 12).ordinal);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$8_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/8', 257, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function ValueCodex$Type$9($anonymous0, $anonymous1, $anonymous2){
  ValueCodex$Type_0.call(this, 'FLOAT', 8, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(258, 9, $intern_26, ValueCodex$Type$9);
_.decode = function decode_15(clazz, value_0){
  return new Float(asNumber__D__devirtual$(value_0));
}
;
_.encode = function encode_14(value_0){
  return create0_0(dynamicCast(value_0, 61).value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_ValueCodex$Type$9_2_classLit = createForEnum('com.google.web.bindery.autobean.shared', 'ValueCodex/Type/9', 258, Lcom_google_web_bindery_autobean_shared_ValueCodex$Type_2_classLit, null);
function $checkFrozen(this$static){
  if (this$static.frozen) {
    throw new IllegalStateException_0('The AutoBean has been frozen');
  }
}

function $checkWrapped(this$static){
  if (this$static.wrapped == null && !this$static.usingSimplePeer) {
    throw new IllegalStateException_0('The AutoBean has been unwrapped');
  }
}

function $getOrReify(this$static, propertyName){
  var coder, temp, toReturn;
  $checkWrapped(this$static);
  if (isReified_Ljava_lang_String__Z__devirtual$(this$static.data_0, propertyName)) {
    temp = getReified_Ljava_lang_String__Ljava_lang_Object___devirtual$(this$static.data_0, propertyName);
    return temp;
  }
  if (isNull_Ljava_lang_String__Z__devirtual$(this$static.data_0, propertyName)) {
    return null;
  }
  setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(this$static.data_0, propertyName, null);
  coder = doCoderFor(this$static, propertyName);
  toReturn = coder.decode_0(new AutoBeanCodexImpl$EncodeState(this$static.factory), get_Ljava_lang_String__Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this$static.data_0, propertyName));
  setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(this$static.data_0, propertyName, toReturn);
  return toReturn;
}

function $getWrapped(this$static){
  $checkWrapped(this$static);
  return this$static.wrapped;
}

function $setData(this$static, data_0){
  this$static.data_0 = data_0;
  this$static.wrapped = this$static.createSimplePeer();
}

function $traverse_0(this$static, visitor, ctx){
  if (!$add_7(ctx.seen, this$static)) {
    return;
  }
  visitor.visit(this$static, ctx) && this$static.traverseProperties(visitor, ctx);
}

function AbstractAutoBean(factory){
  AbstractAutoBean_0.call(this, factory, {});
}

function AbstractAutoBean_0(factory, data_0){
  this.data_0 = data_0;
  this.factory = factory;
  this.usingSimplePeer = true;
  this.wrapped = this.createSimplePeer();
}

function AbstractAutoBean_1(wrapped, factory){
  this.factory = factory;
  this.usingSimplePeer = false;
  this.data_0 = null;
  this.wrapped = wrapped;
  setNative(wrapped, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this);
}

defineClass(6, 1, $intern_27);
_.createSimplePeer = function createSimplePeer(){
  throw new UnsupportedOperationException;
}
;
_.getSplittable = function getSplittable(){
  return this.data_0;
}
;
_.setProperty = function setProperty(propertyName, value_0){
  var backing, coder;
  $checkWrapped(this);
  $checkFrozen(this);
  setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(this.data_0, propertyName, value_0);
  if (value_0 == null) {
    $assign_0(($clinit_Splittable() , this.data_0), propertyName);
    return;
  }
  coder = doCoderFor(this, propertyName);
  backing = coder.extractSplittable(new AutoBeanCodexImpl$EncodeState(this.factory), value_0);
  !backing?setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(this.data_0, '__unsplittableValues', ($clinit_Boolean() , $clinit_Boolean() , TRUE)):assign_Lcom_google_web_bindery_autobean_shared_Splittable_Ljava_lang_String__V__devirtual$(backing, this.data_0, propertyName);
}
;
_.frozen = false;
_.usingSimplePeer = false;
var Lcom_google_web_bindery_autobean_shared_impl_AbstractAutoBean_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AbstractAutoBean', 6);
function AbstractAutoBean$OneShotContext(){
  this.seen = new HashSet;
}

defineClass(225, 1, {}, AbstractAutoBean$OneShotContext);
var Lcom_google_web_bindery_autobean_shared_impl_AbstractAutoBean$OneShotContext_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AbstractAutoBean/OneShotContext', 225);
function $clinit_AutoBeanCodexImpl(){
  $clinit_AutoBeanCodexImpl = emptyMethod;
  coderFor = new HashMap;
  coders = new HashMap;
}

function doCoderFor(bean, propertyName){
  $clinit_AutoBeanCodexImpl();
  var key_0, toReturn;
  key_0 = $getName_0(bean.getType()) + ':' + propertyName;
  toReturn = dynamicCast($getStringValue(coderFor, key_0), 24);
  if (!toReturn) {
    $traverse_0(bean, new AutoBeanCodexImpl$PropertyCoderCreator, new AbstractAutoBean$OneShotContext);
    toReturn = dynamicCast($getStringValue(coderFor, key_0), 24);
    if (!toReturn) {
      throw new IllegalArgumentException_0(propertyName);
    }
  }
  return toReturn;
}

function doDecode(state, clazz, data_0){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast(getReified_Ljava_lang_String__Ljava_lang_Object___devirtual$(data_0, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit) , Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit.typeName)), 7);
  if (toReturn) {
    return toReturn;
  }
  toReturn = state.factory.create_0(clazz);
  setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(data_0, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit) , Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit.typeName), toReturn);
  if (!toReturn) {
    throw new IllegalArgumentException_0(($ensureNamesAreInitialized(clazz) , clazz.typeName));
  }
  $setData(dynamicCast(toReturn, 6), data_0);
  return toReturn;
}

function enumCoder(type_0){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast($get_2(coders, type_0), 24);
  if (!toReturn) {
    toReturn = new AutoBeanCodexImpl$EnumCoder(type_0);
    $put_0(coders, type_0, toReturn);
  }
  return toReturn;
}

function key_1(bean, propertyName){
  $clinit_AutoBeanCodexImpl();
  return $getName_0(bean.getType()) + ':' + propertyName;
}

function objectCoder(type_0){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast($get_2(coders, type_0), 24);
  if (!toReturn) {
    toReturn = new AutoBeanCodexImpl$ObjectCoder(type_0);
    $put_0(coders, type_0, toReturn);
  }
  return toReturn;
}

function tryExtractSplittable(value_0){
  $clinit_AutoBeanCodexImpl();
  var bean;
  bean = value_0 == null?null:dynamicCast(get_0(value_0, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7);
  if (bean != null && (!isJavaString(bean) && !hasTypeMarker(bean) || canCast(bean, 28))) {
    return getSplittable__Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(dynamicCastAllowJso(bean, 28));
  }
  return null;
}

function valueCoder_0(type_0){
  $clinit_AutoBeanCodexImpl();
  var toReturn;
  toReturn = dynamicCast($get_2(coders, type_0), 24);
  if (!toReturn) {
    toReturn = new AutoBeanCodexImpl$ValueCoder(type_0);
    $put_0(coders, type_0, toReturn);
  }
  return toReturn;
}

var coderFor, coders;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl', null);
function AutoBeanCodexImpl$CoderCreator(){
  this.stack_0 = new Stack;
}

defineClass(217, 305, {}, AutoBeanCodexImpl$CoderCreator);
_.endVisitType = function endVisitType_0(type_0){
  Ljava_util_List_2_classLit == type_0 || Ljava_util_Set_2_classLit == type_0?$push(this.stack_0, ($clinit_AutoBeanCodexImpl() , new AutoBeanCodexImpl$CollectionCoder(type_0, dynamicCast($pop(this.stack_0), 24)))):Ljava_util_Map_2_classLit == type_0?$push(this.stack_0, ($clinit_AutoBeanCodexImpl() , new AutoBeanCodexImpl$MapCoder(dynamicCast($pop(this.stack_0), 24), dynamicCast($pop(this.stack_0), 24)))):Lcom_google_web_bindery_autobean_shared_Splittable_2_classLit == type_0?$push(this.stack_0, ($clinit_AutoBeanCodexImpl() , $clinit_AutoBeanCodexImpl$SplittableCoder() , INSTANCE_1)):$getEnumConstants(type_0) != null?$push(this.stack_0, enumCoder(type_0)):canDecode(type_0)?$push(this.stack_0, valueCoder_0(type_0)):$push(this.stack_0, objectCoder(type_0));
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$CoderCreator_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/CoderCreator', 217);
function AutoBeanCodexImpl$CollectionCoder(type_0, elementDecoder){
  this.elementDecoder = elementDecoder;
  this.type_0 = type_0;
}

defineClass(218, 1, $intern_28, AutoBeanCodexImpl$CollectionCoder);
_.decode_0 = function decode_16(state, data_0){
  var collection;
  if (Ljava_util_List_2_classLit == this.type_0) {
    collection = new SplittableList(data_0, this.elementDecoder, state);
  }
   else if (Ljava_util_Set_2_classLit == this.type_0) {
    collection = new SplittableSet(data_0, this.elementDecoder, state);
  }
   else {
    throw new RuntimeException_0($getName_0(this.type_0));
  }
  return collection;
}
;
_.extractSplittable = function extractSplittable(state, value_0){
  return tryExtractSplittable(value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$CollectionCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/CollectionCoder', 218);
function AutoBeanCodexImpl$EncodeState(factory){
  this.factory = factory;
  this.enumMap = instanceOf(factory, 76)?dynamicCast(factory, 76):null;
}

defineClass(94, 1, {}, AutoBeanCodexImpl$EncodeState);
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$EncodeState_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/EncodeState', 94);
function AutoBeanCodexImpl$EnumCoder(type_0){
  this.type_0 = type_0;
}

defineClass(219, 1, $intern_28, AutoBeanCodexImpl$EnumCoder);
_.decode_0 = function decode_17(state, data_0){
  return state.enumMap.getEnum(this.type_0, asString__Ljava_lang_String___devirtual$(data_0));
}
;
_.extractSplittable = function extractSplittable_0(state, value_0){
  return split_1(escapeValue(state.enumMap.getToken(dynamicCast(value_0, 12))));
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$EnumCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/EnumCoder', 219);
function AutoBeanCodexImpl$MapCoder(valueDecoder, keyDecoder){
  this.keyDecoder = keyDecoder;
  this.valueDecoder = valueDecoder;
}

defineClass(220, 1, $intern_28, AutoBeanCodexImpl$MapCoder);
_.decode_0 = function decode_18(state, data_0){
  var toReturn;
  (hasJavaObjectVirtualDispatch(data_0)?data_0.isIndexed():Object.prototype.toString.call(data_0) == '[object Array]')?(toReturn = new SplittableComplexMap(data_0, this.keyDecoder, this.valueDecoder, state)):(toReturn = new SplittableSimpleMap(data_0, this.keyDecoder, this.valueDecoder, state));
  return toReturn;
}
;
_.extractSplittable = function extractSplittable_1(state, value_0){
  return tryExtractSplittable(value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$MapCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/MapCoder', 220);
function AutoBeanCodexImpl$ObjectCoder(type_0){
  this.type_0 = type_0;
}

defineClass(221, 1, $intern_28, AutoBeanCodexImpl$ObjectCoder);
_.decode_0 = function decode_19(state, data_0){
  var bean;
  bean = doDecode(state, this.type_0, data_0);
  return !bean?null:bean.as();
}
;
_.extractSplittable = function extractSplittable_2(state, value_0){
  return tryExtractSplittable(value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$ObjectCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/ObjectCoder', 221);
function $maybeCreateCoder(this$static, propertyName, ctx){
  var creator;
  creator = new AutoBeanCodexImpl$CoderCreator;
  $traverse(ctx, creator, 0);
  $putStringValue(($clinit_AutoBeanCodexImpl() , coderFor), key_1(this$static.bean, propertyName), dynamicCast($pop(creator.stack_0), 24));
}

function AutoBeanCodexImpl$PropertyCoderCreator(){
}

defineClass(222, 306, {}, AutoBeanCodexImpl$PropertyCoderCreator);
_.visit = function visit_0(bean, ctx){
  this.bean = bean;
  return true;
}
;
_.visitReferenceProperty = function visitReferenceProperty_0(propertyName, value_0, ctx){
  $maybeCreateCoder(this, propertyName, ctx);
  return false;
}
;
_.visitValueProperty = function visitValueProperty_0(propertyName, value_0, ctx){
  $maybeCreateCoder(this, propertyName, ctx);
  return false;
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$PropertyCoderCreator_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/PropertyCoderCreator', 222);
function $clinit_AutoBeanCodexImpl$SplittableCoder(){
  $clinit_AutoBeanCodexImpl$SplittableCoder = emptyMethod;
  INSTANCE_1 = new AutoBeanCodexImpl$SplittableCoder;
}

function AutoBeanCodexImpl$SplittableCoder(){
}

defineClass(223, 1, $intern_28, AutoBeanCodexImpl$SplittableCoder);
_.decode_0 = function decode_20(state, data_0){
  return data_0;
}
;
_.extractSplittable = function extractSplittable_3(state, value_0){
  return dynamicCastAllowJso(value_0, 113);
}
;
var INSTANCE_1;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$SplittableCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/SplittableCoder', 223);
function AutoBeanCodexImpl$ValueCoder(type_0){
  this.type_0 = type_0;
}

defineClass(224, 1, $intern_28, AutoBeanCodexImpl$ValueCoder);
_.decode_0 = function decode_21(state, propertyValue){
  if (!propertyValue || propertyValue == ($clinit_Splittable() , NULL)) {
    return getUninitializedFieldValue(this.type_0);
  }
  return decode_0(this.type_0, propertyValue);
}
;
_.extractSplittable = function extractSplittable_4(state, value_0){
  return encode(this.type_0, value_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_AutoBeanCodexImpl$ValueCoder_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'AutoBeanCodexImpl/ValueCoder', 224);
function SplittableComplexMap(data_0, keyCoder, valueCoder, state){
  this.data_0 = data_0;
  this.keys_0 = new SplittableList(get_I_Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(data_0, 0), keyCoder, state);
  this.values = new SplittableList(get_I_Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(data_0, 1), valueCoder, state);
}

defineClass(266, 1, $intern_29, SplittableComplexMap);
_.entrySet_0 = function entrySet(){
  return new SplittableComplexMap$1(this);
}
;
_.equals$ = function equals_3(other){
  return this === other;
}
;
_.get_2 = function get_4(key_0){
  var idx;
  idx = $indexOf_0(this.keys_0, key_0);
  if (idx == -1) {
    return null;
  }
  return $get_0(this.values, idx);
}
;
_.getSplittable = function getSplittable_0(){
  return this.data_0;
}
;
_.hashCode$ = function hashCode_5(){
  return getHashCode(this);
}
;
_.put = function put(key_0, value_0){
  var idx;
  idx = $indexOf_0(this.keys_0, key_0);
  if (idx == -1) {
    $add_3(this.keys_0, key_0);
    $add_3(this.values, value_0);
    return null;
  }
  return $set(this.values, idx, value_0);
}
;
_.size_1 = function size_2(){
  return size__I__devirtual$(this.keys_0.data_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableComplexMap', 266);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_1('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_0(sb, e === this$static?'(this Collection)':($clinit_String() , '' + e));
  }
  sb.string += ']';
  return sb.string;
}

defineClass(288, 1, {});
_.equals$ = function equals_4(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_6(){
  return getHashCode(this);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.toString$ = function toString_11(){
  return $toString(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 288);
defineClass(289, 288, $intern_30);
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.equals$ = function equals_5(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 33)) {
    return false;
  }
  other = dynamicCast(o, 33);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_7(){
  return hashCode_35(this);
}
;
_.isEmpty = function isEmpty_0(){
  return this.size_1() == 0;
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 289);
function SplittableComplexMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(267, 289, $intern_30, SplittableComplexMap$1);
_.iterator = function iterator_2(){
  return new SplittableComplexMap$1$1(this);
}
;
_.size_1 = function size_3(){
  return size__I__devirtual$(this.this$01.keys_0.data_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableComplexMap/1', 267);
function SplittableComplexMap$1$1(this$1){
  this.this$11 = this$1;
  this.keyIt = new AbstractList$IteratorImpl(this.this$11.this$01.keys_0);
  this.valueIt = new AbstractList$ListIteratorImpl(this.this$11.this$01.values, 0);
}

defineClass(268, 1, $intern_23, SplittableComplexMap$1$1);
_.hasNext = function hasNext_0(){
  return $hasNext_2(this.keyIt);
}
;
_.next = function next_1(){
  return new SplittableComplexMap$1$1$1(this);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableComplexMap/1/1', 268);
function SplittableComplexMap$1$1$1(this$2){
  this.this$21 = this$2;
  this.key = $next_1(this.this$21.keyIt);
  this.value_0 = $next_2(this.this$21.valueIt);
}

defineClass(269, 1, $intern_31, SplittableComplexMap$1$1$1);
_.equals$ = function equals_6(other){
  return this === other;
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_8(){
  return getHashCode(this);
}
;
_.setValue = function setValue(value_0){
  $set_0(this.this$21.valueIt, value_0);
  return value_0;
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableComplexMap$1$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableComplexMap/1/1/1', 269);
function $add_3(this$static, obj){
  this$static.add_0(this$static.size_1(), obj);
  return true;
}

function $equals(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 8)) {
    return false;
  }
  other = dynamicCast(o, 8);
  if (this$static.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this$static.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next();
    elemOther = iterOther.next();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = size__I__devirtual$(this$static.data_0); i < n; ++i) {
    if (equals_40(toFind, $get_0(this$static, i))) {
      return i;
    }
  }
  return -1;
}

defineClass(290, 288, {8:1});
_.add_0 = function add_1(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_2(obj){
  return $add_3(this, obj);
}
;
_.equals$ = function equals_7(o){
  return $equals(this, o);
}
;
_.hashCode$ = function hashCode_9(){
  return hashCode_36(this);
}
;
_.isEmpty = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.iterator = function iterator_3(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.set_0 = function set_1(index_0, o){
  throw new UnsupportedOperationException_0('Set not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 290);
function $get_0(this$static, index_0){
  var toReturn;
  if (isReified_Ljava_lang_String__Z__devirtual$(this$static.data_0, ($clinit_String() , '' + index_0))) {
    toReturn = getReified_Ljava_lang_String__Ljava_lang_Object___devirtual$(this$static.data_0, '' + index_0);
    return toReturn;
  }
  return reify(this$static.state, this$static.data_0, index_0, this$static.elementCoder);
}

function $set(this$static, index_0, element){
  var previous;
  previous = $get_0(this$static, index_0);
  set_3(this$static.state, this$static.data_0, index_0, this$static.elementCoder, element);
  return previous;
}

function SplittableList(data_0, elementCoder, state){
  this.data_0 = data_0;
  this.elementCoder = elementCoder;
  this.state = state;
}

function reify(state, data_0, index_0, coder){
  var toReturn;
  if (hasJavaObjectVirtualDispatch(data_0)?data_0.isNull(index_0):data_0[index_0] == null) {
    return null;
  }
  toReturn = coder.decode_0(state, get_I_Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(data_0, index_0));
  setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(data_0, ($clinit_String() , '' + index_0), toReturn);
  return toReturn;
}

function set_3(state, data_0, index_0, coder, value_0){
  var backing;
  setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(data_0, ($clinit_String() , '' + index_0), value_0);
  if (value_0 == null) {
    $assign(($clinit_Splittable() , data_0), index_0);
    return;
  }
  backing = coder.extractSplittable(state, value_0);
  !backing?setReified_Ljava_lang_String_Ljava_lang_Object__V__devirtual$(data_0, '__unsplittableValues', ($clinit_Boolean() , $clinit_Boolean() , TRUE)):hasJavaObjectVirtualDispatch(backing)?backing.assign(data_0, index_0):($isString(backing)?(data_0[index_0] = backing.__s , undefined):(data_0[index_0] = backing , undefined) , undefined);
}

defineClass(85, 290, {8:1}, SplittableList);
_.add_0 = function add_3(index_0, element){
  set_3(this.state, this.data_0, index_0, this.elementCoder, element);
}
;
_.get_3 = function get_5(index_0){
  return $get_0(this, index_0);
}
;
_.getSplittable = function getSplittable_1(){
  return this.data_0;
}
;
_.set_0 = function set_2(index_0, element){
  return $set(this, index_0, element);
}
;
_.size_1 = function size_4(){
  return size__I__devirtual$(this.data_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableList_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableList', 85);
function SplittableSet(data_0, elementCoder, state){
  this.data_0 = new SplittableList(data_0, elementCoder, state);
}

defineClass(265, 289, $intern_30, SplittableSet);
_.getSplittable = function getSplittable_2(){
  return this.data_0.data_0;
}
;
_.iterator = function iterator_4(){
  return new AbstractList$IteratorImpl(this.data_0);
}
;
_.size_1 = function size_5(){
  return size__I__devirtual$(this.data_0.data_0);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableSet_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableSet', 265);
function $get_1(this$static, key_0){
  var encodedKey;
  encodedKey = asString__Ljava_lang_String___devirtual$(this$static.keyCoder.extractSplittable(this$static.state, key_0));
  return $getRaw_1(this$static, encodedKey);
}

function $getRaw_1(this$static, encodedKey){
  var toReturn, toReturn0, value_0;
  if ($isReified(this$static.reified, encodedKey)) {
    toReturn0 = $getReified(this$static.reified, encodedKey);
    return toReturn0;
  }
  if (isNull_Ljava_lang_String__Z__devirtual$(this$static.data_0, encodedKey)) {
    return null;
  }
  value_0 = get_Ljava_lang_String__Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this$static.data_0, encodedKey);
  toReturn = this$static.valueCoder.decode_0(this$static.state, value_0);
  $setReified(this$static.reified, encodedKey, toReturn);
  return toReturn;
}

function $put(this$static, key_0, value_0){
  var encodedKey, encodedValue, toReturn;
  toReturn = $get_1(this$static, key_0);
  encodedKey = asString__Ljava_lang_String___devirtual$(this$static.keyCoder.extractSplittable(this$static.state, key_0));
  $setReified(this$static.reified, encodedKey, value_0);
  encodedValue = this$static.valueCoder.extractSplittable(this$static.state, value_0);
  !encodedValue?$setReified(this$static.reified, '__unsplittableValues', ($clinit_Boolean() , $clinit_Boolean() , TRUE)):assign_Lcom_google_web_bindery_autobean_shared_Splittable_Ljava_lang_String__V__devirtual$(encodedValue, this$static.data_0, encodedKey);
  return toReturn;
}

function SplittableSimpleMap(data_0, keyCoder, valueCoder, state){
  this.reified = {};
  this.data_0 = data_0;
  this.keyCoder = keyCoder;
  this.state = state;
  this.valueCoder = valueCoder;
}

defineClass(270, 1, $intern_29, SplittableSimpleMap);
_.entrySet_0 = function entrySet_0(){
  return new SplittableSimpleMap$1(this);
}
;
_.equals$ = function equals_8(other){
  return this === other;
}
;
_.get_2 = function get_6(key_0){
  return $get_1(this, key_0);
}
;
_.getSplittable = function getSplittable_3(){
  return this.data_0;
}
;
_.hashCode$ = function hashCode_10(){
  return getHashCode(this);
}
;
_.put = function put_0(key_0, value_0){
  return $put(this, key_0, value_0);
}
;
_.size_1 = function size_6(){
  return getPropertyKeys__Ljava_util_List___devirtual$(this.data_0).coll.size_1();
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableSimpleMap', 270);
function SplittableSimpleMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = getPropertyKeys__Ljava_util_List___devirtual$(this.this$01.data_0);
}

defineClass(271, 289, $intern_30, SplittableSimpleMap$1);
_.iterator = function iterator_5(){
  return new SplittableSimpleMap$1$1(this);
}
;
_.size_1 = function size_7(){
  return this.keys_0.size_1();
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableSimpleMap/1', 271);
function SplittableSimpleMap$1$1(this$1){
  this.this$11 = this$1;
  this.keyIterator = this.this$11.keys_0.iterator();
}

defineClass(272, 1, $intern_23, SplittableSimpleMap$1$1);
_.hasNext = function hasNext_1(){
  return this.keyIterator.hasNext();
}
;
_.next = function next_2(){
  return this.encodedKey = dynamicCastToString(this.keyIterator.next()) , new SplittableSimpleMap$1$1$1(this);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableSimpleMap/1/1', 272);
function SplittableSimpleMap$1$1$1(this$2){
  this.this$21 = this$2;
  this.key = this.this$21.this$11.this$01.keyCoder.decode_0(this.this$21.this$11.this$01.state, split_1(escapeValue(this.this$21.encodedKey)));
  this.value_0 = this.this$21.this$11.this$01.valueCoder.decode_0(this.this$21.this$11.this$01.state, get_Ljava_lang_String__Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(this.this$21.this$11.this$01.data_0, this.this$21.encodedKey));
}

defineClass(273, 1, $intern_31, SplittableSimpleMap$1$1$1);
_.equals$ = function equals_9(other){
  return this === other;
}
;
_.getKey = function getKey_0(){
  return this.key;
}
;
_.getValue = function getValue_0(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_11(){
  return getHashCode(this);
}
;
_.setValue = function setValue_0(newValue){
  return $put(this.this$21.this$11.this$01, this.key, newValue);
}
;
var Lcom_google_web_bindery_autobean_shared_impl_SplittableSimpleMap$1$1$1_2_classLit = createForClass('com.google.web.bindery.autobean.shared.impl', 'SplittableSimpleMap/1/1/1', 273);
function split_1(payload){
  var c, isSimple, toReturn;
  c = payload.charCodeAt(0);
  isSimple = c != 123 && c != 91;
  isSimple && (payload = '[' + payload + ']');
  toReturn = dynamicCastAllowJso(safeEval(payload), 113);
  isSimple && (toReturn = get_I_Lcom_google_web_bindery_autobean_shared_Splittable___devirtual$(toReturn, 0));
  return toReturn;
}

function tryParseDate(date){
  var js;
  try {
    return new Date_0(__parseAndValidateLong(date));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 17))
      throw unwrap($e0);
  }
  try {
    js = new Date(date);
    return new Date_0(fromDouble(js.getTime()));
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (!instanceOf($e1, 30))
      throw unwrap($e1);
  }
  return null;
}

function SimpleEventBus$1(){
}

defineClass(151, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 151);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(152, 1, {315:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 152);
function $clinit_Polymer(){
  $clinit_Polymer = emptyMethod;
  urlImported = new HashSet;
  pending = new HashMap;
}

function endLoading(container, webcomponent){
  $clinit_Polymer();
  $setOpacity(container.style, 0);
  $setPropertyImpl(container.style, 'transition', 'opacity 1.1s');
  onReady(webcomponent, new Polymer$5(container));
}

function importHref(hrefOrTag, ok){
  $clinit_Polymer();
  var loading, oks;
  if (!$equals_0(__substr(hrefOrTag, 0, 4), 'http')) {
    (new RegExp('^([\\w-]+)$')).test(hrefOrTag) && (hrefOrTag = hrefOrTag + '/' + hrefOrTag + '.html');
    $equals_0(__substr(hrefOrTag, 0, 16), 'bower_components') || (hrefOrTag = 'bower_components/' + hrefOrTag);
    hrefOrTag = $moduleBase + hrefOrTag;
  }
  loading = $hasStringValue(pending, hrefOrTag);
  if (loading || !$contains_0(urlImported, hrefOrTag)) {
    loading || $putStringValue(pending, hrefOrTag, new ArrayList);
    oks = dynamicCast($getStringValue(pending, hrefOrTag), 8);
    !!ok && oks.add_1(ok);
    loading || importHrefImpl(hrefOrTag, new Polymer$1(hrefOrTag, oks), null);
  }
   else 
    !!ok && (--ok.count == 0 && $call(ok.val$ok2) , null);
}

function importHref_0(hrefs, ok){
  $clinit_Polymer();
  var allOk, href_0, href$iterator;
  allOk = new Polymer$2(hrefs, ok);
  for (href$iterator = new AbstractList$IteratorImpl(hrefs); href$iterator.i < href$iterator.this$01_0.size_1();) {
    href_0 = (checkCriticalElement(href$iterator.i < href$iterator.this$01_0.size_1()) , dynamicCastToString(href$iterator.this$01_0.get_3(href$iterator.last = href$iterator.i++)));
    importHref(href_0, allOk);
  }
}

function importHrefImpl(href_0, onload_0, onerror_0){
  console.log('gwt-polymer loading: ', href_0.replace(/^.*components\//, ''));
  var l = $doc.createElement('link');
  l.rel = 'import';
  l.href = href_0;
  onload_0 && (l.onload = function(){
    onload_0.call_0(href_0);
  }
  );
  onerror_0 && (l.onerror = function(){
    onerror_0.call_0(href_0);
  }
  );
  $doc.head.appendChild(l);
  return l;
}

function isRegisteredElement(e){
  return !!e && e.constructor !== $wnd.HTMLElement && e.constructor != $wnd.HTMLUnknownElement;
}

function onReady(e, f_0){
  function isReady(f){
    if (isRegisteredElement(e)) {
      typeof f == 'function'?f(e):f.call_0(e);
      return true;
    }
  }

  if (!isReady(f_0)) {
    var id_0 = setInterval(function(){
      isReady(f_0) && clearInterval(id_0);
    }
    , 0);
  }
}

function reFlow(){
  $clinit_Polymer();
  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var c = 0;
    var id_0 = setInterval(function(){
      c++ >= 20 && $doc.body.offsetWidth > 0 && clearInterval(id_0);
    }
    , 50);
  }
}

function startLoading(){
  $clinit_Polymer();
  var l;
  l = ($clinit_DOM() , $doc.getElementById('loading'));
  if (!l) {
    l = $createDivElement($doc);
    $setAttribute(l, 'style', 'position:fixed;top:0px;left:0px;width:100%;text-align:center;font-family:arial;font-size:24px;color:#4285f4;');
    l.id = 'loading';
    ($clinit_DOMImpl() , impl_0).setInnerText(l, 'loading...');
    $appendChild($doc.body, l);
  }
}

var pending, urlImported;
function Polymer$1(val$href, val$oks){
  this.val$href1 = val$href;
  this.val$oks2 = val$oks;
}

defineClass(128, 1, $intern_32, Polymer$1);
_.call_0 = function call_0(arg){
  var ok, ok$iterator;
  $add_7(($clinit_Polymer() , urlImported), this.val$href1);
  for (ok$iterator = this.val$oks2.iterator(); ok$iterator.hasNext();) {
    ok = dynamicCast(ok$iterator.next(), 88);
    ok.call_0(arg);
  }
  $removeStringValue(pending, this.val$href1);
  return null;
}
;
var Lcom_vaadin_polymer_Polymer$1_2_classLit = createForClass('com.vaadin.polymer', 'Polymer/1', 128);
function Polymer$2(val$hrefs, val$ok){
  this.val$hrefs1 = val$hrefs;
  this.val$ok2 = val$ok;
  this.count = this.val$hrefs1.array.length;
}

defineClass(129, 1, $intern_32, Polymer$2);
_.call_0 = function call_1(arg){
  return --this.count == 0 && $call(this.val$ok2) , null;
}
;
_.count = 0;
var Lcom_vaadin_polymer_Polymer$2_2_classLit = createForClass('com.vaadin.polymer', 'Polymer/2', 129);
function Polymer$5(val$container){
  this.val$container1 = val$container;
}

defineClass(130, 1, $intern_32, Polymer$5);
_.call_0 = function call_2(arg){
  reFlow();
  $setOpacity(this.val$container1.style, 1);
  $setOpacity(($clinit_DOM() , $doc.getElementById('loading')).style, 0);
  return null;
}
;
var Lcom_vaadin_polymer_Polymer$5_2_classLit = createForClass('com.vaadin.polymer', 'Polymer/5', 130);
function IteratorAutoBean(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  this.shim = new IteratorAutoBean$1(this);
  setNative(this.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this);
}

defineClass(238, 6, $intern_27, IteratorAutoBean);
_.as = function as_0(){
  return this.shim;
}
;
_.getType = function getType(){
  return Ljava_util_Iterator_2_classLit;
}
;
_.traverseProperties = function traverseProperties(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $hasNext(as)?TRUE:FALSE);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'next') , Z_classLit));
  visitor.visitValueProperty('next', value_0, propertyContext);
}
;
var Lemul_java_util_IteratorAutoBean_2_classLit = createForClass('emul.java.util', 'IteratorAutoBean', 238);
function $hasNext(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 16).hasNext();
  return toReturn;
}

function IteratorAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(239, 1, $intern_23, IteratorAutoBean$1);
_.equals$ = function equals_10(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 16).equals$(o);
}
;
_.hasNext = function hasNext_2(){
  return $hasNext(this);
}
;
_.hashCode$ = function hashCode_12(){
  return dynamicCast($getWrapped(this.this$01), 16).hashCode$();
}
;
_.next = function next_3(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 16).next();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)).as());
  return toReturn;
}
;
_.toString$ = function toString_12(){
  return dynamicCast($getWrapped(this.this$01), 16).toString$();
}
;
var Lemul_java_util_IteratorAutoBean$1_2_classLit = createForClass('emul.java.util', 'IteratorAutoBean/1', 239);
function ListAutoBean(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  this.shim = new ListAutoBean$1(this);
  setNative(this.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this);
}

defineClass(73, 6, $intern_27, ListAutoBean);
_.as = function as_1(){
  return this.shim;
}
;
_.getType = function getType_0(){
  return Ljava_util_List_2_classLit;
}
;
_.traverseProperties = function traverseProperties_0(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $isEmpty(as)?TRUE:FALSE);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'empty') , Z_classLit));
  visitor.visitValueProperty('empty', value_0, propertyContext);
}
;
var Lemul_java_util_ListAutoBean_2_classLit = createForClass('emul.java.util', 'ListAutoBean', 73);
function $isEmpty(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 8).isEmpty();
  return toReturn;
}

function ListAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(237, 1, {8:1}, ListAutoBean$1);
_.add_1 = function add_4(o){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 8).add_1(o);
  $clinit_Boolean();
  return toReturn;
}
;
_.equals$ = function equals_11(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 8).equals$(o);
}
;
_.hashCode$ = function hashCode_13(){
  return dynamicCast($getWrapped(this.this$01), 8).hashCode$();
}
;
_.isEmpty = function isEmpty_2(){
  return $isEmpty(this);
}
;
_.iterator = function iterator_6(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 8).iterator();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)).as(), 16)):(toReturn = (new IteratorAutoBean(this.this$01.factory, toReturn)).shim));
  return toReturn;
}
;
_.listIterator = function listIterator_1(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 8).listIterator();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)).as(), 29)):(toReturn = (new ListIteratorAutoBean(this.this$01.factory, toReturn)).shim));
  return toReturn;
}
;
_.listIterator_0 = function listIterator_2(from){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 8).listIterator_0(from);
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)).as(), 29)):(toReturn = (new ListIteratorAutoBean(this.this$01.factory, toReturn)).shim));
  initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_0, 1, 3, [valueOf_1(from)]);
  return toReturn;
}
;
_.size_1 = function size_8(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 8).size_1();
  valueOf_1(toReturn);
  return toReturn;
}
;
_.toString$ = function toString_13(){
  return dynamicCast($getWrapped(this.this$01), 8).toString$();
}
;
var Lemul_java_util_ListAutoBean$1_2_classLit = createForClass('emul.java.util', 'ListAutoBean/1', 237);
function ListIteratorAutoBean(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  this.shim = new ListIteratorAutoBean$1(this);
  setNative(this.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this);
}

defineClass(112, 6, $intern_27, ListIteratorAutoBean);
_.as = function as_2(){
  return this.shim;
}
;
_.getType = function getType_1(){
  return Ljava_util_ListIterator_2_classLit;
}
;
_.traverseProperties = function traverseProperties_1(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = ($clinit_Boolean() , $hasNext_0(as)?TRUE:FALSE);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'next') , Z_classLit));
  visitor.visitValueProperty('next', value_0, propertyContext);
  value_0 = $hasPrevious(as)?TRUE:FALSE;
  propertyContext = new ClientPropertyContext((beanSetter(this, 'previous') , Z_classLit));
  visitor.visitValueProperty('previous', value_0, propertyContext);
}
;
var Lemul_java_util_ListIteratorAutoBean_2_classLit = createForClass('emul.java.util', 'ListIteratorAutoBean', 112);
function $hasNext_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 29).hasNext();
  return toReturn;
}

function $hasPrevious(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 29).hasPrevious();
  return toReturn;
}

function ListIteratorAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(240, 1, $intern_33, ListIteratorAutoBean$1);
_.equals$ = function equals_12(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 29).equals$(o);
}
;
_.hasNext = function hasNext_3(){
  return $hasNext_0(this);
}
;
_.hasPrevious = function hasPrevious(){
  return $hasPrevious(this);
}
;
_.hashCode$ = function hashCode_14(){
  return dynamicCast($getWrapped(this.this$01), 29).hashCode$();
}
;
_.next = function next_4(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 29).next();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)).as());
  return toReturn;
}
;
_.previous = function previous_0(){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this.this$01), 29).previous();
  toReturn != null && !!(toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)) && (toReturn = (toReturn == null?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)).as());
  return toReturn;
}
;
_.toString$ = function toString_14(){
  return dynamicCast($getWrapped(this.this$01), 29).toString$();
}
;
var Lemul_java_util_ListIteratorAutoBean$1_2_classLit = createForClass('emul.java.util', 'ListIteratorAutoBean/1', 240);
function $getNext(this$static, type_0){
  return dynamicCast($getStringValue(this$static.nexts, type_0), 49);
}

function $getTeam(this$static, type_0){
  return dynamicCast($getStringValue(this$static.teams, type_0), 43);
}

function $initialize(this$static, icb){
  $load('data/menu.json', new BFUnitEUContext$1(this$static, icb, icb));
}

function $loadArenaTeam(this$static, icb){
  $load('data/team/tarena.json', new BFUnitEUContext$9(this$static, icb, icb));
}

function $loadBBSpamTeam(this$static, icb){
  $load('data/team/tbbspam.json', new BFUnitEUContext$6(this$static, icb, icb));
}

function $loadBatch(this$static, icb){
  $load('data/batch.json', new BFUnitEUContext$2(this$static, icb, icb));
}

function $loadCritTeam(this$static, icb){
  $load('data/team/tcrit.json', new BFUnitEUContext$7(this$static, icb, icb));
}

function $loadNext6EU(this$static, icb){
  $load('data/next/next6eu.json', new BFUnitEUContext$3(this$static, icb, icb));
}

function $loadNext6GL(this$static, icb){
  $load('data/next/next6gl.json', new BFUnitEUContext$4(this$static, icb, icb));
}

function $loadNext7GL(this$static, icb){
  $load('data/next/next7gl.json', new BFUnitEUContext$5(this$static, icb, icb));
}

function $loadTankTeam(this$static, icb){
  $load('data/team/ttank.json', new BFUnitEUContext$8(this$static, icb, icb));
}

function BFUnitEUContext(){
  this.nexts = new HashMap;
  this.teams = new HashMap;
}

defineClass(69, 1, {}, BFUnitEUContext);
var instance_0;
var Lio_github_firecoremajin_context_BFUnitEUContext_2_classLit = createForClass('io.github.firecoremajin.context', 'BFUnitEUContext', 69);
function $onError(this$static, exception){
  $onError_1(this$static.icb, exception);
}

function $onSuccess(this$static, response){
  var t;
  try {
    this$static.doSuccess(response);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 4)) {
      t = $e0;
      $onError_1(this$static.icb, t);
    }
     else 
      throw unwrap($e0);
  }
}

function BFUnitEUContext$CMB(icb){
  this.icb = icb;
}

defineClass(39, 1, {});
var Lio_github_firecoremajin_context_BFUnitEUContext$CMB_2_classLit = createForClass('io.github.firecoremajin.context', 'BFUnitEUContext/CMB', 39);
function BFUnitEUContext$1(this$0, $anonymous0, val$icb){
  this.this$01 = this$0;
  this.val$icb3 = val$icb;
  BFUnitEUContext$CMB.call(this, $anonymous0);
}

defineClass(176, 39, {}, BFUnitEUContext$1);
_.doSuccess = function doSuccess(response){
  var ab_menu, factory;
  factory = new MenuBeanFactoryImpl;
  ab_menu = decode(factory, Lio_github_firecoremajin_data_menu_Menu_2_classLit, response);
  this.this$01.menu = dynamicCast(ab_menu.as(), 74);
  $loadBatch(this.this$01, this.val$icb3);
}
;
var Lio_github_firecoremajin_context_BFUnitEUContext$1_2_classLit = createForClass('io.github.firecoremajin.context', 'BFUnitEUContext/1', 176);
function BFUnitEUContext$2(this$0, $anonymous0, val$icb){
  this.this$01 = this$0;
  this.val$icb3 = val$icb;
  BFUnitEUContext$CMB.call(this, $anonymous0);
}

defineClass(177, 39, {}, BFUnitEUContext$2);
_.doSuccess = function doSuccess_0(response){
  var ab_batch, factory;
  factory = new BatchBeanFactoryImpl;
  ab_batch = decode(factory, Lio_github_firecoremajin_data_batch_Batch_2_classLit, response);
  this.this$01.batch = dynamicCast(ab_batch.as(), 75);
  $loadNext6EU(this.this$01, this.val$icb3);
}
;
var Lio_github_firecoremajin_context_BFUnitEUContext$2_2_classLit = createForClass('io.github.firecoremajin.context', 'BFUnitEUContext/2', 177);
function BFUnitEUContext$3(this$0, $anonymous0, val$icb){
  this.this$01 = this$0;
  this.val$icb3 = val$icb;
  BFUnitEUContext$CMB.call(this, $anonymous0);
}

defineClass(178, 39, {}, BFUnitEUContext$3);
_.doSuccess = function doSuccess_1(response){
  var ab_next, factory;
  factory = new NextBeanFactoryImpl;
  ab_next = decode(factory, Lio_github_firecoremajin_data_next_Next_2_classLit, response);
  $putStringValue(this.this$01.nexts, 'next6eu', dynamicCast(ab_next.as(), 49));
  $loadNext6GL(this.this$01, this.val$icb3);
}
;
var Lio_github_firecoremajin_context_BFUnitEUContext$3_2_classLit = createForClass('io.github.firecoremajin.context', 'BFUnitEUContext/3', 178);
function BFUnitEUContext$4(this$0, $anonymous0, val$icb){
  this.this$01 = this$0;
  this.val$icb3 = val$icb;
  BFUnitEUContext$CMB.call(this, $anonymous0);
}

defineClass(179, 39, {}, BFUnitEUContext$4);
_.doSuccess = function doSuccess_2(response){
  var ab_next, factory;
  factory = new NextBeanFactoryImpl;
  ab_next = decode(factory, Lio_github_firecoremajin_data_next_Next_2_classLit, response);
  $putStringValue(this.this$01.nexts, 'next6gl', dynamicCast(ab_next.as(), 49));
  $loadNext7GL(this.this$01, this.val$icb3);
}
;
var Lio_github_firecoremajin_context_BFUnitEUContext$4_2_classLit = createForClass('io.github.firecoremajin.context', 'BFUnitEUContext/4', 179);
function BFUnitEUContext$5(this$0, $anonymous0, val$icb){
  this.this$01 = this$0;
  this.val$icb3 = val$icb;
  BFUnitEUContext$CMB.call(this, $anonymous0);
}

defineClass(180, 39, {}, BFUnitEUContext$5);
_.doSuccess = function doSuccess_3(response){
  var ab_next, factory;
  factory = new NextBeanFactoryImpl;
  ab_next = decode(factory, Lio_github_firecoremajin_data_next_Next_2_classLit, response);
  $putStringValue(this.this$01.nexts, 'next7gl', dynamicCast(ab_next.as(), 49));
  $loadBBSpamTeam(this.this$01, this.val$icb3);
}
;
var Lio_github_firecoremajin_context_BFUnitEUContext$5_2_classLit = createForClass('io.github.firecoremajin.context', 'BFUnitEUContext/5', 180);
function BFUnitEUContext$6(this$0, $anonymous0, val$icb){
  this.this$01 = this$0;
  this.val$icb3 = val$icb;
  BFUnitEUContext$CMB.call(this, $anonymous0);
}

defineClass(181, 39, {}, BFUnitEUContext$6);
_.doSuccess = function doSuccess_4(response){
  var ab_team, factory;
  factory = new TeamBeanFactoryImpl;
  ab_team = decode(factory, Lio_github_firecoremajin_data_team_Team_2_classLit, response);
  $putStringValue(this.this$01.teams, 'tbbspam', dynamicCast(ab_team.as(), 43));
  $loadCritTeam(this.this$01, this.val$icb3);
}
;
var Lio_github_firecoremajin_context_BFUnitEUContext$6_2_classLit = createForClass('io.github.firecoremajin.context', 'BFUnitEUContext/6', 181);
function BFUnitEUContext$7(this$0, $anonymous0, val$icb){
  this.this$01 = this$0;
  this.val$icb3 = val$icb;
  BFUnitEUContext$CMB.call(this, $anonymous0);
}

defineClass(182, 39, {}, BFUnitEUContext$7);
_.doSuccess = function doSuccess_5(response){
  var ab_team, factory;
  factory = new TeamBeanFactoryImpl;
  ab_team = decode(factory, Lio_github_firecoremajin_data_team_Team_2_classLit, response);
  $putStringValue(this.this$01.teams, 'tcrit', dynamicCast(ab_team.as(), 43));
  $loadTankTeam(this.this$01, this.val$icb3);
}
;
var Lio_github_firecoremajin_context_BFUnitEUContext$7_2_classLit = createForClass('io.github.firecoremajin.context', 'BFUnitEUContext/7', 182);
function BFUnitEUContext$8(this$0, $anonymous0, val$icb){
  this.this$01 = this$0;
  this.val$icb3 = val$icb;
  BFUnitEUContext$CMB.call(this, $anonymous0);
}

defineClass(183, 39, {}, BFUnitEUContext$8);
_.doSuccess = function doSuccess_6(response){
  var ab_team, factory;
  factory = new TeamBeanFactoryImpl;
  ab_team = decode(factory, Lio_github_firecoremajin_data_team_Team_2_classLit, response);
  $putStringValue(this.this$01.teams, 'ttank', dynamicCast(ab_team.as(), 43));
  $loadArenaTeam(this.this$01, this.val$icb3);
}
;
var Lio_github_firecoremajin_context_BFUnitEUContext$8_2_classLit = createForClass('io.github.firecoremajin.context', 'BFUnitEUContext/8', 183);
function BFUnitEUContext$9(this$0, $anonymous0, val$icb){
  this.this$01 = this$0;
  this.val$icb3 = val$icb;
  BFUnitEUContext$CMB.call(this, $anonymous0);
}

defineClass(184, 39, {}, BFUnitEUContext$9);
_.doSuccess = function doSuccess_7(response){
  var ab_team, factory, expand;
  factory = new TeamBeanFactoryImpl;
  ab_team = decode(factory, Lio_github_firecoremajin_data_team_Team_2_classLit, response);
  $putStringValue(this.this$01.teams, 'tarena', dynamicCast(ab_team.as(), 43));
  $createMenu(this.val$icb3.this$01, (!instance_0 && (instance_0 = new BFUnitEUContext) , instance_0).menu);
  expand = ($clinit_Window() , $getClientWidth($doc) > 510);
  new HomePage(expand);
  new NextPage('next6eu', expand);
  new NextPage('next6gl', expand);
  new NextPage('next7gl', expand);
  new TeamPage('tbbspam', expand);
  new TeamPage('tcrit', expand);
  new TeamPage('ttank', expand);
  new TeamPage('tarena', expand);
  null.$_nullMethod();
}
;
var Lio_github_firecoremajin_context_BFUnitEUContext$9_2_classLit = createForClass('io.github.firecoremajin.context', 'BFUnitEUContext/9', 184);
function $getConstructors_io_github_firecoremajin_data_batch_Batch(){
  return [function(factory){
    return new BatchAutoBean(factory);
  }
  , function(factory, wrapped){
    return new BatchAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_io_github_firecoremajin_data_unit_Unit(){
  return [function(factory){
    return new UnitAutoBean(factory);
  }
  , function(factory, wrapped){
    return new UnitAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Iterator(){
  return [undefined, function(factory, wrapped){
    return new IteratorAutoBean(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_List(){
  return [undefined, function(factory, wrapped){
    return new ListAutoBean(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_ListIterator(){
  return [undefined, function(factory, wrapped){
    return new ListIteratorAutoBean(factory, wrapped);
  }
  ];
}

function BatchBeanFactoryImpl(){
}

defineClass(226, 304, $intern_25, BatchBeanFactoryImpl);
_.initializeCreatorMap = function initializeCreatorMap(map_0){
  $add_2(map_0, Lio_github_firecoremajin_data_batch_Batch_2_classLit, $getConstructors_io_github_firecoremajin_data_batch_Batch());
  $add_2(map_0, Lio_github_firecoremajin_data_unit_Unit_2_classLit, $getConstructors_io_github_firecoremajin_data_unit_Unit());
  $add_2(map_0, Ljava_util_List_2_classLit, $getConstructors_java_util_List());
  $add_2(map_0, Ljava_util_Iterator_2_classLit, $getConstructors_java_util_Iterator());
  $add_2(map_0, Ljava_util_ListIterator_2_classLit, $getConstructors_java_util_ListIterator());
}
;
_.initializeEnumMap = function initializeEnumMap(){
}
;
var Lio_github_firecoremajin_data_BatchBeanFactoryImpl_2_classLit = createForClass('io.github.firecoremajin.data', 'BatchBeanFactoryImpl', 226);
function $getConstructors_io_github_firecoremajin_data_menu_Menu(){
  return [function(factory){
    return new MenuAutoBean(factory);
  }
  , function(factory, wrapped){
    return new MenuAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_io_github_firecoremajin_data_menu_MenuItem(){
  return [function(factory){
    return new MenuItemAutoBean(factory);
  }
  , function(factory, wrapped){
    return new MenuItemAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_io_github_firecoremajin_data_menu_Submenu(){
  return [function(factory){
    return new SubmenuAutoBean(factory);
  }
  , function(factory, wrapped){
    return new SubmenuAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Iterator_0(){
  return [undefined, function(factory, wrapped){
    return new IteratorAutoBean(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_List_0(){
  return [undefined, function(factory, wrapped){
    return new ListAutoBean(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_ListIterator_0(){
  return [undefined, function(factory, wrapped){
    return new ListIteratorAutoBean(factory, wrapped);
  }
  ];
}

function MenuBeanFactoryImpl(){
}

defineClass(216, 304, $intern_25, MenuBeanFactoryImpl);
_.initializeCreatorMap = function initializeCreatorMap_0(map_0){
  $add_2(map_0, Lio_github_firecoremajin_data_menu_Menu_2_classLit, $getConstructors_io_github_firecoremajin_data_menu_Menu());
  $add_2(map_0, Lio_github_firecoremajin_data_menu_MenuItem_2_classLit, $getConstructors_io_github_firecoremajin_data_menu_MenuItem());
  $add_2(map_0, Lio_github_firecoremajin_data_menu_Submenu_2_classLit, $getConstructors_io_github_firecoremajin_data_menu_Submenu());
  $add_2(map_0, Ljava_util_List_2_classLit, $getConstructors_java_util_List_0());
  $add_2(map_0, Ljava_util_Iterator_2_classLit, $getConstructors_java_util_Iterator_0());
  $add_2(map_0, Ljava_util_ListIterator_2_classLit, $getConstructors_java_util_ListIterator_0());
}
;
_.initializeEnumMap = function initializeEnumMap_0(){
}
;
var Lio_github_firecoremajin_data_MenuBeanFactoryImpl_2_classLit = createForClass('io.github.firecoremajin.data', 'MenuBeanFactoryImpl', 216);
function $getConstructors_io_github_firecoremajin_data_next_Next(){
  return [function(factory){
    return new NextAutoBean(factory);
  }
  , function(factory, wrapped){
    return new NextAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_io_github_firecoremajin_data_unit_Unit_0(){
  return [function(factory){
    return new UnitAutoBean(factory);
  }
  , function(factory, wrapped){
    return new UnitAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Iterator_1(){
  return [undefined, function(factory, wrapped){
    return new IteratorAutoBean(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_List_1(){
  return [undefined, function(factory, wrapped){
    return new ListAutoBean(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_ListIterator_1(){
  return [undefined, function(factory, wrapped){
    return new ListIteratorAutoBean(factory, wrapped);
  }
  ];
}

function NextBeanFactoryImpl(){
}

defineClass(95, 304, $intern_25, NextBeanFactoryImpl);
_.initializeCreatorMap = function initializeCreatorMap_1(map_0){
  $add_2(map_0, Lio_github_firecoremajin_data_next_Next_2_classLit, $getConstructors_io_github_firecoremajin_data_next_Next());
  $add_2(map_0, Lio_github_firecoremajin_data_unit_Unit_2_classLit, $getConstructors_io_github_firecoremajin_data_unit_Unit_0());
  $add_2(map_0, Ljava_util_List_2_classLit, $getConstructors_java_util_List_1());
  $add_2(map_0, Ljava_util_Iterator_2_classLit, $getConstructors_java_util_Iterator_1());
  $add_2(map_0, Ljava_util_ListIterator_2_classLit, $getConstructors_java_util_ListIterator_1());
}
;
_.initializeEnumMap = function initializeEnumMap_1(){
}
;
var Lio_github_firecoremajin_data_NextBeanFactoryImpl_2_classLit = createForClass('io.github.firecoremajin.data', 'NextBeanFactoryImpl', 95);
function $getConstructors_io_github_firecoremajin_data_team_Team(){
  return [function(factory){
    return new TeamAutoBean(factory);
  }
  , function(factory, wrapped){
    return new TeamAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_io_github_firecoremajin_data_unit_Unit_1(){
  return [function(factory){
    return new UnitAutoBean(factory);
  }
  , function(factory, wrapped){
    return new UnitAutoBean_0(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_Iterator_2(){
  return [undefined, function(factory, wrapped){
    return new IteratorAutoBean(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_List_2(){
  return [undefined, function(factory, wrapped){
    return new ListAutoBean(factory, wrapped);
  }
  ];
}

function $getConstructors_java_util_ListIterator_2(){
  return [undefined, function(factory, wrapped){
    return new ListIteratorAutoBean(factory, wrapped);
  }
  ];
}

function TeamBeanFactoryImpl(){
}

defineClass(84, 304, $intern_25, TeamBeanFactoryImpl);
_.initializeCreatorMap = function initializeCreatorMap_2(map_0){
  $add_2(map_0, Lio_github_firecoremajin_data_team_Team_2_classLit, $getConstructors_io_github_firecoremajin_data_team_Team());
  $add_2(map_0, Lio_github_firecoremajin_data_unit_Unit_2_classLit, $getConstructors_io_github_firecoremajin_data_unit_Unit_1());
  $add_2(map_0, Ljava_util_List_2_classLit, $getConstructors_java_util_List_2());
  $add_2(map_0, Ljava_util_Iterator_2_classLit, $getConstructors_java_util_Iterator_2());
  $add_2(map_0, Ljava_util_ListIterator_2_classLit, $getConstructors_java_util_ListIterator_2());
}
;
_.initializeEnumMap = function initializeEnumMap_2(){
}
;
var Lio_github_firecoremajin_data_TeamBeanFactoryImpl_2_classLit = createForClass('io.github.firecoremajin.data', 'TeamBeanFactoryImpl', 84);
var Lio_github_firecoremajin_data_batch_Batch_2_classLit = createForInterface('io.github.firecoremajin.data.batch', 'Batch');
function $$init(this$static){
  this$static.shim = new BatchAutoBean$1(this$static);
  setNative(this$static.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this$static);
}

function BatchAutoBean(factory){
  AbstractAutoBean.call(this, factory);
  $$init(this);
}

function BatchAutoBean_0(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  $$init(this);
}

defineClass(309, 6, $intern_27, BatchAutoBean, BatchAutoBean_0);
_.as = function as_3(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_0(){
  return new BatchAutoBean$2(this);
}
;
_.getType = function getType_2(){
  return Lio_github_firecoremajin_data_batch_Batch_2_classLit;
}
;
_.traverseProperties = function traverseProperties_2(visitor, ctx){
  var as, bean, propertyContext;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getUnits(as)), 6);
  propertyContext = new ClientPropertyContext_0((beanSetter(this, 'units') , initValues(getClassLiteralForArray(Ljava_lang_Class_2_classLit, 1), $intern_0, 44, 0, [Ljava_util_List_2_classLit, Lio_github_firecoremajin_data_unit_Unit_2_classLit])), initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [1, 0]));
  visitor.visitReferenceProperty('units', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
var Lio_github_firecoremajin_data_batch_BatchAutoBean_2_classLit = createForClass('io.github.firecoremajin.data.batch', 'BatchAutoBean', 309);
function $getUnits(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 75).getUnits();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)).as(), 8)):(toReturn = (new ListAutoBean(this$static.this$01.factory, toReturn)).shim));
  return toReturn;
}

function BatchAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(241, 1, {75:1}, BatchAutoBean$1);
_.equals$ = function equals_13(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 75).equals$(o);
}
;
_.getUnits = function getUnits(){
  return $getUnits(this);
}
;
_.hashCode$ = function hashCode_15(){
  return dynamicCast($getWrapped(this.this$01), 75).hashCode$();
}
;
_.toString$ = function toString_15(){
  return dynamicCast($getWrapped(this.this$01), 75).toString$();
}
;
var Lio_github_firecoremajin_data_batch_BatchAutoBean$1_2_classLit = createForClass('io.github.firecoremajin.data.batch', 'BatchAutoBean/1', 241);
function BatchAutoBean$2(this$0){
  this.this$01 = this$0;
}

defineClass(242, 1, {75:1}, BatchAutoBean$2);
_.getUnits = function getUnits_0(){
  return dynamicCast($getOrReify(this.this$01, 'units'), 8);
}
;
var Lio_github_firecoremajin_data_batch_BatchAutoBean$2_2_classLit = createForClass('io.github.firecoremajin.data.batch', 'BatchAutoBean/2', 242);
var Lio_github_firecoremajin_data_menu_Menu_2_classLit = createForInterface('io.github.firecoremajin.data.menu', 'Menu');
function $$init_0(this$static){
  this$static.shim = new MenuAutoBean$1(this$static);
  setNative(this$static.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this$static);
}

function MenuAutoBean(factory){
  AbstractAutoBean.call(this, factory);
  $$init_0(this);
}

function MenuAutoBean_0(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  $$init_0(this);
}

defineClass(307, 6, $intern_27, MenuAutoBean, MenuAutoBean_0);
_.as = function as_4(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_1(){
  return new MenuAutoBean$2(this);
}
;
_.getType = function getType_3(){
  return Lio_github_firecoremajin_data_menu_Menu_2_classLit;
}
;
_.traverseProperties = function traverseProperties_3(visitor, ctx){
  var as, bean, propertyContext;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getMitems(as)), 6);
  propertyContext = new ClientPropertyContext_0((beanSetter(this, 'mitems') , initValues(getClassLiteralForArray(Ljava_lang_Class_2_classLit, 1), $intern_0, 44, 0, [Ljava_util_List_2_classLit, Lio_github_firecoremajin_data_menu_MenuItem_2_classLit])), initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [1, 0]));
  visitor.visitReferenceProperty('mitems', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
var Lio_github_firecoremajin_data_menu_MenuAutoBean_2_classLit = createForClass('io.github.firecoremajin.data.menu', 'MenuAutoBean', 307);
function $getMitems(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 74).getMitems();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)).as(), 8)):(toReturn = (new ListAutoBean(this$static.this$01.factory, toReturn)).shim));
  return toReturn;
}

function MenuAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(230, 1, {74:1}, MenuAutoBean$1);
_.equals$ = function equals_14(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 74).equals$(o);
}
;
_.getMitems = function getMitems(){
  return $getMitems(this);
}
;
_.hashCode$ = function hashCode_16(){
  return dynamicCast($getWrapped(this.this$01), 74).hashCode$();
}
;
_.toString$ = function toString_16(){
  return dynamicCast($getWrapped(this.this$01), 74).toString$();
}
;
var Lio_github_firecoremajin_data_menu_MenuAutoBean$1_2_classLit = createForClass('io.github.firecoremajin.data.menu', 'MenuAutoBean/1', 230);
function MenuAutoBean$2(this$0){
  this.this$01 = this$0;
}

defineClass(231, 1, {74:1}, MenuAutoBean$2);
_.getMitems = function getMitems_0(){
  return dynamicCast($getOrReify(this.this$01, 'mitems'), 8);
}
;
var Lio_github_firecoremajin_data_menu_MenuAutoBean$2_2_classLit = createForClass('io.github.firecoremajin.data.menu', 'MenuAutoBean/2', 231);
var Lio_github_firecoremajin_data_menu_MenuItem_2_classLit = createForInterface('io.github.firecoremajin.data.menu', 'MenuItem');
function $$init_1(this$static){
  this$static.shim = new MenuItemAutoBean$1(this$static);
  setNative(this$static.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this$static);
}

function MenuItemAutoBean(factory){
  AbstractAutoBean.call(this, factory);
  $$init_1(this);
}

function MenuItemAutoBean_0(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  $$init_1(this);
}

defineClass(308, 6, $intern_27, MenuItemAutoBean, MenuItemAutoBean_0);
_.as = function as_5(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_2(){
  return new MenuItemAutoBean$2(this);
}
;
_.getType = function getType_4(){
  return Lio_github_firecoremajin_data_menu_MenuItem_2_classLit;
}
;
_.traverseProperties = function traverseProperties_4(visitor, ctx){
  var as, bean, propertyContext, value_0;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getSubmenu(as)), 6);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'submenu') , Lio_github_firecoremajin_data_menu_Submenu_2_classLit));
  visitor.visitReferenceProperty('submenu', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
  value_0 = $getId(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'id') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('id', value_0, propertyContext);
  value_0 = $getLabel(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'label') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('label', value_0, propertyContext);
}
;
var Lio_github_firecoremajin_data_menu_MenuItemAutoBean_2_classLit = createForClass('io.github.firecoremajin.data.menu', 'MenuItemAutoBean', 308);
function $getId(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 47).getId();
  return toReturn;
}

function $getLabel(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 47).getLabel();
  return toReturn;
}

function $getSubmenu(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 47).getSubmenu();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)).as(), 65)):(toReturn = (new SubmenuAutoBean_0(this$static.this$01.factory, toReturn)).shim));
  return toReturn;
}

function MenuItemAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(232, 1, {47:1}, MenuItemAutoBean$1);
_.equals$ = function equals_15(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 47).equals$(o);
}
;
_.getId = function getId(){
  return $getId(this);
}
;
_.getLabel = function getLabel(){
  return $getLabel(this);
}
;
_.getSubmenu = function getSubmenu(){
  return $getSubmenu(this);
}
;
_.hashCode$ = function hashCode_17(){
  return dynamicCast($getWrapped(this.this$01), 47).hashCode$();
}
;
_.toString$ = function toString_17(){
  return dynamicCast($getWrapped(this.this$01), 47).toString$();
}
;
var Lio_github_firecoremajin_data_menu_MenuItemAutoBean$1_2_classLit = createForClass('io.github.firecoremajin.data.menu', 'MenuItemAutoBean/1', 232);
function MenuItemAutoBean$2(this$0){
  this.this$01 = this$0;
}

defineClass(233, 1, {47:1}, MenuItemAutoBean$2);
_.getId = function getId_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'id'));
}
;
_.getLabel = function getLabel_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'label'));
}
;
_.getSubmenu = function getSubmenu_0(){
  return dynamicCast($getOrReify(this.this$01, 'submenu'), 65);
}
;
var Lio_github_firecoremajin_data_menu_MenuItemAutoBean$2_2_classLit = createForClass('io.github.firecoremajin.data.menu', 'MenuItemAutoBean/2', 233);
var Lio_github_firecoremajin_data_menu_Submenu_2_classLit = createForInterface('io.github.firecoremajin.data.menu', 'Submenu');
function $$init_2(this$static){
  this$static.shim = new SubmenuAutoBean$1(this$static);
  setNative(this$static.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this$static);
}

function SubmenuAutoBean(factory){
  AbstractAutoBean.call(this, factory);
  $$init_2(this);
}

function SubmenuAutoBean_0(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  $$init_2(this);
}

defineClass(234, 6, $intern_27, SubmenuAutoBean, SubmenuAutoBean_0);
_.as = function as_6(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_3(){
  return new SubmenuAutoBean$2(this);
}
;
_.getType = function getType_5(){
  return Lio_github_firecoremajin_data_menu_Submenu_2_classLit;
}
;
_.traverseProperties = function traverseProperties_5(visitor, ctx){
  var as, bean, propertyContext;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getMitems_0(as)), 6);
  propertyContext = new ClientPropertyContext_0((beanSetter(this, 'mitems') , initValues(getClassLiteralForArray(Ljava_lang_Class_2_classLit, 1), $intern_0, 44, 0, [Ljava_util_List_2_classLit, Lio_github_firecoremajin_data_menu_MenuItem_2_classLit])), initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [1, 0]));
  visitor.visitReferenceProperty('mitems', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
var Lio_github_firecoremajin_data_menu_SubmenuAutoBean_2_classLit = createForClass('io.github.firecoremajin.data.menu', 'SubmenuAutoBean', 234);
function $getMitems_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 65).getMitems();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)).as(), 8)):(toReturn = (new ListAutoBean(this$static.this$01.factory, toReturn)).shim));
  return toReturn;
}

function SubmenuAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(235, 1, {65:1}, SubmenuAutoBean$1);
_.equals$ = function equals_16(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 65).equals$(o);
}
;
_.getMitems = function getMitems_1(){
  return $getMitems_0(this);
}
;
_.hashCode$ = function hashCode_18(){
  return dynamicCast($getWrapped(this.this$01), 65).hashCode$();
}
;
_.toString$ = function toString_18(){
  return dynamicCast($getWrapped(this.this$01), 65).toString$();
}
;
var Lio_github_firecoremajin_data_menu_SubmenuAutoBean$1_2_classLit = createForClass('io.github.firecoremajin.data.menu', 'SubmenuAutoBean/1', 235);
function SubmenuAutoBean$2(this$0){
  this.this$01 = this$0;
}

defineClass(236, 1, {65:1}, SubmenuAutoBean$2);
_.getMitems = function getMitems_2(){
  return dynamicCast($getOrReify(this.this$01, 'mitems'), 8);
}
;
var Lio_github_firecoremajin_data_menu_SubmenuAutoBean$2_2_classLit = createForClass('io.github.firecoremajin.data.menu', 'SubmenuAutoBean/2', 236);
var Lio_github_firecoremajin_data_next_Next_2_classLit = createForInterface('io.github.firecoremajin.data.next', 'Next');
function $$init_3(this$static){
  this$static.shim = new NextAutoBean$1(this$static);
  setNative(this$static.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this$static);
}

function NextAutoBean(factory){
  AbstractAutoBean.call(this, factory);
  $$init_3(this);
}

function NextAutoBean_0(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  $$init_3(this);
}

defineClass(311, 6, $intern_27, NextAutoBean, NextAutoBean_0);
_.as = function as_7(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_4(){
  return new NextAutoBean$2(this);
}
;
_.getType = function getType_6(){
  return Lio_github_firecoremajin_data_next_Next_2_classLit;
}
;
_.traverseProperties = function traverseProperties_6(visitor, ctx){
  var as, bean, propertyContext;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getUnits_0(as)), 6);
  propertyContext = new ClientPropertyContext_0((beanSetter(this, 'units') , initValues(getClassLiteralForArray(Ljava_lang_Class_2_classLit, 1), $intern_0, 44, 0, [Ljava_util_List_2_classLit, Lio_github_firecoremajin_data_unit_Unit_2_classLit])), initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [1, 0]));
  visitor.visitReferenceProperty('units', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
var Lio_github_firecoremajin_data_next_NextAutoBean_2_classLit = createForClass('io.github.firecoremajin.data.next', 'NextAutoBean', 311);
function $getUnits_0(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 49).getUnits();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)).as(), 8)):(toReturn = (new ListAutoBean(this$static.this$01.factory, toReturn)).shim));
  return toReturn;
}

function NextAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(245, 1, {49:1}, NextAutoBean$1);
_.equals$ = function equals_17(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 49).equals$(o);
}
;
_.getUnits = function getUnits_1(){
  return $getUnits_0(this);
}
;
_.hashCode$ = function hashCode_19(){
  return dynamicCast($getWrapped(this.this$01), 49).hashCode$();
}
;
_.toString$ = function toString_19(){
  return dynamicCast($getWrapped(this.this$01), 49).toString$();
}
;
var Lio_github_firecoremajin_data_next_NextAutoBean$1_2_classLit = createForClass('io.github.firecoremajin.data.next', 'NextAutoBean/1', 245);
function NextAutoBean$2(this$0){
  this.this$01 = this$0;
}

defineClass(246, 1, {49:1}, NextAutoBean$2);
_.getUnits = function getUnits_2(){
  return dynamicCast($getOrReify(this.this$01, 'units'), 8);
}
;
var Lio_github_firecoremajin_data_next_NextAutoBean$2_2_classLit = createForClass('io.github.firecoremajin.data.next', 'NextAutoBean/2', 246);
var Lio_github_firecoremajin_data_team_Team_2_classLit = createForInterface('io.github.firecoremajin.data.team', 'Team');
function $$init_4(this$static){
  this$static.shim = new TeamAutoBean$1(this$static);
  setNative(this$static.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this$static);
}

function TeamAutoBean(factory){
  AbstractAutoBean.call(this, factory);
  $$init_4(this);
}

function TeamAutoBean_0(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  $$init_4(this);
}

defineClass(312, 6, $intern_27, TeamAutoBean, TeamAutoBean_0);
_.as = function as_8(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_5(){
  return new TeamAutoBean$2(this);
}
;
_.getType = function getType_7(){
  return Lio_github_firecoremajin_data_team_Team_2_classLit;
}
;
_.traverseProperties = function traverseProperties_7(visitor, ctx){
  var as, bean, propertyContext;
  as = this.shim;
  bean = dynamicCast(getAutoBean($getUnits_1(as)), 6);
  propertyContext = new ClientPropertyContext_0((beanSetter(this, 'units') , initValues(getClassLiteralForArray(Ljava_lang_Class_2_classLit, 1), $intern_0, 44, 0, [Ljava_util_List_2_classLit, Lio_github_firecoremajin_data_unit_Unit_2_classLit])), initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [1, 0]));
  visitor.visitReferenceProperty('units', bean, propertyContext) && !!bean && $traverse_0(bean, visitor, ctx);
}
;
var Lio_github_firecoremajin_data_team_TeamAutoBean_2_classLit = createForClass('io.github.firecoremajin.data.team', 'TeamAutoBean', 312);
function $getUnits_1(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 43).getUnits();
  !!toReturn && ((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7))?(toReturn = dynamicCast((!toReturn?null:dynamicCast(get_0(toReturn, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName)), 7)).as(), 8)):(toReturn = (new ListAutoBean(this$static.this$01.factory, toReturn)).shim));
  return toReturn;
}

function TeamAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(247, 1, {43:1}, TeamAutoBean$1);
_.equals$ = function equals_18(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 43).equals$(o);
}
;
_.getUnits = function getUnits_3(){
  return $getUnits_1(this);
}
;
_.hashCode$ = function hashCode_20(){
  return dynamicCast($getWrapped(this.this$01), 43).hashCode$();
}
;
_.toString$ = function toString_20(){
  return dynamicCast($getWrapped(this.this$01), 43).toString$();
}
;
var Lio_github_firecoremajin_data_team_TeamAutoBean$1_2_classLit = createForClass('io.github.firecoremajin.data.team', 'TeamAutoBean/1', 247);
function TeamAutoBean$2(this$0){
  this.this$01 = this$0;
}

defineClass(248, 1, {43:1}, TeamAutoBean$2);
_.getUnits = function getUnits_4(){
  return dynamicCast($getOrReify(this.this$01, 'units'), 8);
}
;
var Lio_github_firecoremajin_data_team_TeamAutoBean$2_2_classLit = createForClass('io.github.firecoremajin.data.team', 'TeamAutoBean/2', 248);
var Lio_github_firecoremajin_data_unit_Unit_2_classLit = createForInterface('io.github.firecoremajin.data.unit', 'Unit');
function $$init_5(this$static){
  this$static.shim = new UnitAutoBean$1(this$static);
  setNative(this$static.shim, ($ensureNamesAreInitialized(Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit) , Lcom_google_web_bindery_autobean_shared_AutoBean_2_classLit.typeName), this$static);
}

function UnitAutoBean(factory){
  AbstractAutoBean.call(this, factory);
  $$init_5(this);
}

function UnitAutoBean_0(factory, wrapped){
  AbstractAutoBean_1.call(this, wrapped, factory);
  $$init_5(this);
}

defineClass(310, 6, $intern_27, UnitAutoBean, UnitAutoBean_0);
_.as = function as_9(){
  return this.shim;
}
;
_.createSimplePeer = function createSimplePeer_6(){
  return new UnitAutoBean$2(this);
}
;
_.getType = function getType_8(){
  return Lio_github_firecoremajin_data_unit_Unit_2_classLit;
}
;
_.traverseProperties = function traverseProperties_8(visitor, ctx){
  var as, propertyContext, value_0;
  as = this.shim;
  value_0 = $getCard(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'card') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('card', value_0, propertyContext);
  value_0 = $getDescription(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'description') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('description', value_0, propertyContext);
  value_0 = $getIcon(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'icon') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('icon', value_0, propertyContext);
  value_0 = $getLink(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'link') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('link', value_0, propertyContext);
  value_0 = $getName(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'name') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('name', value_0, propertyContext);
  value_0 = $getSubtitle(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'subtitle') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('subtitle', value_0, propertyContext);
  value_0 = $getVote(as);
  propertyContext = new ClientPropertyContext((beanSetter(this, 'vote') , Ljava_lang_String_2_classLit));
  visitor.visitValueProperty('vote', value_0, propertyContext);
}
;
var Lio_github_firecoremajin_data_unit_UnitAutoBean_2_classLit = createForClass('io.github.firecoremajin.data.unit', 'UnitAutoBean', 310);
function $getCard(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 23).getCard();
  return toReturn;
}

function $getDescription(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 23).getDescription();
  return toReturn;
}

function $getIcon(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 23).getIcon();
  return toReturn;
}

function $getLink(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 23).getLink();
  return toReturn;
}

function $getName(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 23).getName();
  return toReturn;
}

function $getSubtitle(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 23).getSubtitle();
  return toReturn;
}

function $getVote(this$static){
  var toReturn;
  toReturn = dynamicCast($getWrapped(this$static.this$01), 23).getVote();
  return toReturn;
}

function UnitAutoBean$1(this$0){
  this.this$01 = this$0;
}

defineClass(243, 1, {23:1}, UnitAutoBean$1);
_.equals$ = function equals_19(o){
  return this === o || dynamicCast($getWrapped(this.this$01), 23).equals$(o);
}
;
_.getCard = function getCard(){
  return $getCard(this);
}
;
_.getDescription = function getDescription(){
  return $getDescription(this);
}
;
_.getIcon = function getIcon(){
  return $getIcon(this);
}
;
_.getLink = function getLink(){
  return $getLink(this);
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSubtitle = function getSubtitle(){
  return $getSubtitle(this);
}
;
_.getVote = function getVote(){
  return $getVote(this);
}
;
_.hashCode$ = function hashCode_21(){
  return dynamicCast($getWrapped(this.this$01), 23).hashCode$();
}
;
_.toString$ = function toString_21(){
  return dynamicCast($getWrapped(this.this$01), 23).toString$();
}
;
var Lio_github_firecoremajin_data_unit_UnitAutoBean$1_2_classLit = createForClass('io.github.firecoremajin.data.unit', 'UnitAutoBean/1', 243);
function UnitAutoBean$2(this$0){
  this.this$01 = this$0;
}

defineClass(244, 1, {23:1}, UnitAutoBean$2);
_.getCard = function getCard_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'card'));
}
;
_.getDescription = function getDescription_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'description'));
}
;
_.getIcon = function getIcon_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'icon'));
}
;
_.getLink = function getLink_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'link'));
}
;
_.getName = function getName_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'name'));
}
;
_.getSubtitle = function getSubtitle_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'subtitle'));
}
;
_.getVote = function getVote_0(){
  return dynamicCastToString($getOrReify(this.this$01, 'vote'));
}
;
var Lio_github_firecoremajin_data_unit_UnitAutoBean$2_2_classLit = createForClass('io.github.firecoremajin.data.unit', 'UnitAutoBean/2', 244);
function $onModuleLoad_0(this$static){
  startLoading();
  $clinit_Polymer();
  importHref('paper-styles/demo-pages.html', null);
  importHref_0(new Arrays$ArrayList(initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 4, ['iron-icons/iron-icons.html', 'iron-flex-layout/iron-flex-layout.html', 'paper-material/paper-material.html', 'paper-card/paper-card.html', 'paper-badge/paper-badge.html', 'iron-image/iron-image.html', 'paper-drawer-panel/paper-drawer-panel.html', 'paper-header-panel/paper-header-panel.html', 'paper-toolbar/paper-toolbar.html', 'paper-item/all-imports.html', 'paper-ripple/paper-ripple.html', 'paper-icon-button/paper-icon-button.html', 'paper-fab/paper-fab.html', 'paper-dialog/paper-dialog.html', 'paper-input/all-imports.html', 'paper-input/all-imports.html', 'paper-button/paper-button.html'])), new BFEntryPoint$1(this$static));
}

function $startApplication(this$static){
  this$static.layout = new BFUnitEULayout;
  $add_0(($clinit_RootPanel() , get_1()), this$static.layout);
}

function BFEntryPoint(){
}

defineClass(114, 1, {}, BFEntryPoint);
var Lio_github_firecoremajin_entry_BFEntryPoint_2_classLit = createForClass('io.github.firecoremajin.entry', 'BFEntryPoint', 114);
function $call(this$static){
  $startApplication(this$static.this$01);
  return null;
}

function BFEntryPoint$1(this$0){
  this.this$01 = this$0;
}

defineClass(117, 1, $intern_32, BFEntryPoint$1);
_.call_0 = function call_3(arg){
  return $call(this);
}
;
var Lio_github_firecoremajin_entry_BFEntryPoint$1_2_classLit = createForClass('io.github.firecoremajin.entry', 'BFEntryPoint/1', 117);
function $load(url_0, cmb){
  var build, re;
  build = new RequestBuilder(($clinit_RequestBuilder() , GET), url_0);
  try {
    $sendRequest(build, new JSONLoader$1(cmb));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 40)) {
      re = $e0;
      $onError_1(cmb.icb, re);
    }
     else 
      throw unwrap($e0);
  }
}

function $onError_0(this$static, t){
  $onError(this$static.val$cmb2, t);
}

function JSONLoader$1(val$cmb){
  this.val$cmb2 = val$cmb;
}

defineClass(185, 1, {}, JSONLoader$1);
var Lio_github_firecoremajin_json_JSONLoader$1_2_classLit = createForClass('io.github.firecoremajin.json', 'JSONLoader/1', 185);
function $createMenu(this$static, menu){
  var item_0, item$iterator, mi;
  for (item$iterator = menu.getMitems().iterator(); item$iterator.hasNext();) {
    item_0 = dynamicCast(item$iterator.next(), 47);
    mi = new MenuItem(item_0);
    $setListener(mi, this$static.mListener);
    $appendChild(this$static.menuPanel, mi.element);
  }
}

function BFUnitEULayout(){
  $clinit_UIObject();
  this.mListener = new BFUnitEULayout$1;
  $initWidget(this, $build_f_HTMLPanel1(new BFUnitEULayout_BFUnitEULayoutBinderImpl$Widgets(this)));
  $clinit_Polymer();
  endLoading(($clinit_DOM() , this.element), this.errorDialog);
  $initialize((!instance_0 && (instance_0 = new BFUnitEUContext) , instance_0), new BFUnitEULayout$2(this));
}

defineClass(118, 301, $intern_20, BFUnitEULayout);
var Lio_github_firecoremajin_ui_layout_BFUnitEULayout_2_classLit = createForClass('io.github.firecoremajin.ui.layout', 'BFUnitEULayout', 118);
function $handleEvent(id_0){
  null.$_nullMethod();
  $equals_0('home', id_0)?null.$_nullMethod():$equals_0('eu6', id_0)?null.$_nullMethod():$equals_0('gl6', id_0)?null.$_nullMethod():$equals_0('gl7', id_0)?null.$_nullMethod():$equals_0('tbbspam', id_0)?null.$_nullMethod():$equals_0('tcrit', id_0)?null.$_nullMethod():$equals_0('ttank', id_0)?null.$_nullMethod():$equals_0('tarena', id_0) && null.$_nullMethod();
  null.$_nullMethod();
}

function BFUnitEULayout$1(){
}

defineClass(173, 1, {}, BFUnitEULayout$1);
var Lio_github_firecoremajin_ui_layout_BFUnitEULayout$1_2_classLit = createForClass('io.github.firecoremajin.ui.layout', 'BFUnitEULayout/1', 173);
function $onError_1(this$static, exception){
  $setInnerHTML(this$static.this$01.errorMessage, exception.getMessage());
  null.$_nullMethod();
}

function BFUnitEULayout$2(this$0){
  this.this$01 = this$0;
}

defineClass(174, 1, {}, BFUnitEULayout$2);
var Lio_github_firecoremajin_ui_layout_BFUnitEULayout$2_2_classLit = createForClass('io.github.firecoremajin.ui.layout', 'BFUnitEULayout/2', 174);
function $build_f_HTMLPanel1(this$static){
  var __attachRecord__, f_HTMLPanel1, drawerPanel, menuPanel, content_0, errorDialog, errorMessage;
  f_HTMLPanel1 = new HTMLPanel($html1(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5).html);
  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));
  drawerPanel = $get(new LazyDomElement(this$static.domId0));
  throwClassCastExceptionUnlessNull(drawerPanel);
  menuPanel = $get(new LazyDomElement(this$static.domId1));
  this$static.owner.menuPanel = menuPanel;
  $get(new LazyDomElement(this$static.domId2));
  content_0 = $get(new LazyDomElement(this$static.domId3));
  throwClassCastExceptionUnlessNull(content_0);
  errorDialog = $get(new LazyDomElement(this$static.domId4));
  this$static.owner.errorDialog = throwClassCastExceptionUnlessNull(errorDialog);
  errorMessage = $get(new LazyDomElement(this$static.domId5));
  this$static.owner.errorMessage = errorMessage;
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  return f_HTMLPanel1;
}

function BFUnitEULayout_BFUnitEULayoutBinderImpl$Widgets(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId2 = $createUniqueId($doc);
  this.domId3 = $createUniqueId($doc);
  this.domId4 = $createUniqueId($doc);
  this.domId5 = $createUniqueId($doc);
}

defineClass(193, 1, {}, BFUnitEULayout_BFUnitEULayoutBinderImpl$Widgets);
var Lio_github_firecoremajin_ui_layout_BFUnitEULayout_1BFUnitEULayoutBinderImpl$Widgets_2_classLit = createForClass('io.github.firecoremajin.ui.layout', 'BFUnitEULayout_BFUnitEULayoutBinderImpl/Widgets', 193);
function $html1(arg0, arg1, arg2, arg3, arg4, arg5){
  var sb;
  sb = new StringBuilder;
  sb.string += '<style> div { font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; color: #777;} .bf-toolbar { background: #e7e7e7 !important; font-size: 1.4em; } .bf-body { position: relative; display: block;} <\/style> <paper-drawer-panel id=\'';
  $append_0(sb, htmlEscape(arg0));
  sb.string += "'> <div drawer=''> <paper-header-panel mode='seamed'> <paper-toolbar class='bf-toolbar'> <span class='bf-header'>BF Unit EU<\/span> <\/paper-toolbar> <div id='";
  $append_0(sb, htmlEscape(arg1));
  sb.string += "'><\/div> <\/paper-header-panel> <\/div> <div main=''> <paper-header-panel mode='seamed'> <paper-toolbar class='bf-toolbar'> <paper-icon-button icon='more-vert' id='";
  $append_0(sb, htmlEscape(arg2));
  sb.string += "' paper-drawer-toggle=''><\/paper-icon-button> <span class='bf-header' paper-drawer-toggle=''>BF Unit EU<\/span> <\/paper-toolbar> <div class='bf-body' id='";
  $append_0(sb, htmlEscape(arg3));
  sb.string += "'><\/div> <\/paper-header-panel> <\/div> <\/paper-drawer-panel> <paper-dialog class='dialog' id='";
  $append_0(sb, htmlEscape(arg4));
  sb.string += "' modal=''> <p id='";
  $append_0(sb, htmlEscape(arg5));
  sb.string += "'><\/p> <div class='buttons'> <paper-button autofocus='' dialog-confirm=''>Chiudi<\/paper-button> <\/div> <\/paper-dialog>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $setExpanded(this$static, expand){
  expand?$removeClassName(this$static.submenu, 'bfmi-hide'):$addClassName(this$static.submenu, 'bfmi-hide');
}

function $setListener(this$static, listener){
  var item_0, item$iterator;
  this$static.listener = listener;
  for (item$iterator = new AbstractList$IteratorImpl(this$static.subitems); item$iterator.i < item$iterator.this$01_0.size_1();) {
    item_0 = (checkCriticalElement(item$iterator.i < item$iterator.this$01_0.size_1()) , dynamicCast(item$iterator.this$01_0.get_3(item$iterator.last = item$iterator.i++), 80));
    $setListener(item_0, listener);
  }
}

function MenuItem(item_0){
  var mi, subitem, subitem$iterator;
  this.subitems = new ArrayList;
  this.element = $build_f_div1(new MenuItem_MenuItemUiBinderImpl$Widgets(this));
  this.id_0 = item_0.getId();
  $setInnerHTML(this.label_0, item_0.getLabel());
  setEventListener(this.menuitem, this);
  sinkEvents_0(this.menuitem);
  if (item_0.getSubmenu()) {
    for (subitem$iterator = item_0.getSubmenu().getMitems().iterator(); subitem$iterator.hasNext();) {
      subitem = dynamicCast(subitem$iterator.next(), 47);
      mi = new MenuItem(subitem);
      $add_5(this.subitems, mi);
      !!this.listener && $setListener(mi, this.listener);
      $appendChild(this.submenu, mi.element);
    }
  }
}

defineClass(80, 1, {34:1, 80:1}, MenuItem);
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  $clinit_DOM();
  $eventGetTypeInt(($clinit_DOMImpl() , event_0).type) == 1 && $isOrHasChild(this.menuitem, impl_0.eventGetTarget(event_0)) && ($setExpanded(this, $getClassName(this.submenu).indexOf('bfmi-hide') != -1) , !!this.listener && this.id_0 != null && this.id_0.length > 0 && !$equals_0('null', this.id_0) && $handleEvent(this.id_0));
}
;
var Lio_github_firecoremajin_ui_menu_MenuItem_2_classLit = createForClass('io.github.firecoremajin.ui.menu', 'MenuItem', 80);
function $build_f_div1(this$static){
  var __attachRecord__, f_div1, menuitem, label_0, submenu;
  f_div1 = fromHtml($html1_0(this$static.domId0, this$static.domId1, this$static.domId2).html);
  __attachRecord__ = attachToDom(f_div1);
  menuitem = $get(new LazyDomElement(this$static.domId0));
  this$static.owner.menuitem = menuitem;
  label_0 = $get(new LazyDomElement(this$static.domId1));
  this$static.owner.label_0 = label_0;
  submenu = $get(new LazyDomElement(this$static.domId2));
  this$static.owner.submenu = submenu;
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  return f_div1;
}

function MenuItem_MenuItemUiBinderImpl$Widgets(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId2 = $createUniqueId($doc);
}

defineClass(206, 1, {}, MenuItem_MenuItemUiBinderImpl$Widgets);
var Lio_github_firecoremajin_ui_menu_MenuItem_1MenuItemUiBinderImpl$Widgets_2_classLit = createForClass('io.github.firecoremajin.ui.menu', 'MenuItem_MenuItemUiBinderImpl/Widgets', 206);
function $html1_0(arg0, arg1, arg2){
  var sb;
  sb = new StringBuilder;
  sb.string += "<div class='vertical center-justified layout'><style is='custom-style'> .bf-item { color: #777 !important; position: relative; overflow: hidden; cursor:pointer; } .bf-subitem { padding-left: 25px; } .bfmi-hide { display: none; } .bf-menuicon { margin-right:10px; } <\/style> <div class='bf-item' id='";
  $append_0(sb, htmlEscape(arg0));
  sb.string += "'> <paper-item> <iron-icon class='bf-menuicon' icon='label'><\/iron-icon> <paper-item-body> <div id='";
  $append_0(sb, htmlEscape(arg1));
  sb.string += "'><\/div> <\/paper-item-body> <\/paper-item> <paper-ripple><\/paper-ripple> <\/div> <div class='bf-subitem bfmi-hide' id='";
  $append_0(sb, htmlEscape(arg2));
  sb.string += "'><\/div><\/div>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function HomePage(expand){
  var next, ub, unit, unit$iterator;
  $build_f_div1_0(new HomePage_HomePageUiBinderImpl$Widgets(this));
  next = (!instance_0 && (instance_0 = new BFUnitEUContext) , instance_0).batch;
  for (unit$iterator = next.getUnits().iterator(); unit$iterator.hasNext();) {
    unit = dynamicCast(unit$iterator.next(), 23);
    ub = new UnitBadge(unit);
    expand?$removeAttribute(ub.element, 'compressed'):$setAttribute(ub.element, 'compressed', 'true');
    $appendChild(this.container, ub.element);
  }
}

defineClass(197, 1, {}, HomePage);
var Lio_github_firecoremajin_ui_pages_HomePage_2_classLit = createForClass('io.github.firecoremajin.ui.pages', 'HomePage', 197);
function $build_f_div1_0(this$static){
  var __attachRecord__, f_div1, container;
  f_div1 = fromHtml($html1_1(this$static.domId0).html);
  __attachRecord__ = attachToDom(f_div1);
  container = $get(new LazyDomElement(this$static.domId0));
  this$static.owner.container = container;
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  return f_div1;
}

function HomePage_HomePageUiBinderImpl$Widgets(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
}

defineClass(207, 1, {}, HomePage_HomePageUiBinderImpl$Widgets);
var Lio_github_firecoremajin_ui_pages_HomePage_1HomePageUiBinderImpl$Widgets_2_classLit = createForClass('io.github.firecoremajin.ui.pages', 'HomePage_HomePageUiBinderImpl/Widgets', 207);
function $html1_1(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<div class='bf-home'><style is='custom-style'> .bf-home { position: relative; } .bu-container { @apply(--layout-horizontal); @apply(--layout-wrap); @apply(--layout-center-justified); position: relative; margin: 0px;} @media (min-width: 58em) { .bu-container { @apply(--layout-start-justified); } } .bu-container * { font-size: 0.95em; } <\/style> <div class='bu-container' id='";
  $append_0(sb, htmlEscape(arg0));
  sb.string += "'> <\/div><\/div>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function NextPage(type_0, expand){
  var next, ub, unit, unit$iterator;
  $build_f_div1_1(new NextPage_NextPageUiBinderImpl$Widgets(this));
  next = $getNext((!instance_0 && (instance_0 = new BFUnitEUContext) , instance_0), type_0);
  for (unit$iterator = next.getUnits().iterator(); unit$iterator.hasNext();) {
    unit = dynamicCast(unit$iterator.next(), 23);
    ub = new UnitBadge(unit);
    expand?$removeAttribute(ub.element, 'compressed'):$setAttribute(ub.element, 'compressed', 'true');
    $appendChild(this.container, ub.element);
  }
}

defineClass(92, 1, {}, NextPage);
var Lio_github_firecoremajin_ui_pages_NextPage_2_classLit = createForClass('io.github.firecoremajin.ui.pages', 'NextPage', 92);
function $build_f_div1_1(this$static){
  var __attachRecord__, f_div1, container;
  f_div1 = fromHtml($html1_2(this$static.domId0).html);
  __attachRecord__ = attachToDom(f_div1);
  container = $get(new LazyDomElement(this$static.domId0));
  this$static.owner.container = container;
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  return f_div1;
}

function NextPage_NextPageUiBinderImpl$Widgets(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
}

defineClass(208, 1, {}, NextPage_NextPageUiBinderImpl$Widgets);
var Lio_github_firecoremajin_ui_pages_NextPage_1NextPageUiBinderImpl$Widgets_2_classLit = createForClass('io.github.firecoremajin.ui.pages', 'NextPage_NextPageUiBinderImpl/Widgets', 208);
function $html1_2(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<div class='bf-next'><style is='custom-style'> .bf-next { position: relative; } .bu-container { @apply(--layout-horizontal); @apply(--layout-wrap); @apply(--layout-center-justified); position: relative; margin: 0px;} @media (min-width: 58em) { .bu-container { @apply(--layout-start-justified); } } .bu-container * { font-size: 0.95em; } <\/style> <div class='bu-container' id='";
  $append_0(sb, htmlEscape(arg0));
  sb.string += "'> <\/div><\/div>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function TeamPage(type_0, expand){
  var next, ub, unit, unit$iterator;
  $build_f_div1_2(new TeamPage_TeamPageUiBinderImpl$Widgets(this));
  next = $getTeam((!instance_0 && (instance_0 = new BFUnitEUContext) , instance_0), type_0);
  for (unit$iterator = next.getUnits().iterator(); unit$iterator.hasNext();) {
    unit = dynamicCast(unit$iterator.next(), 23);
    ub = new UnitBadge(unit);
    expand?$removeAttribute(ub.element, 'compressed'):$setAttribute(ub.element, 'compressed', 'true');
    $appendChild(this.container, ub.element);
  }
}

defineClass(82, 1, {}, TeamPage);
var Lio_github_firecoremajin_ui_pages_TeamPage_2_classLit = createForClass('io.github.firecoremajin.ui.pages', 'TeamPage', 82);
function $build_f_div1_2(this$static){
  var __attachRecord__, f_div1, container;
  f_div1 = fromHtml($html1_3(this$static.domId0).html);
  __attachRecord__ = attachToDom(f_div1);
  container = $get(new LazyDomElement(this$static.domId0));
  this$static.owner.container = container;
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  return f_div1;
}

function TeamPage_TeamPageUiBinderImpl$Widgets(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
}

defineClass(209, 1, {}, TeamPage_TeamPageUiBinderImpl$Widgets);
var Lio_github_firecoremajin_ui_pages_TeamPage_1TeamPageUiBinderImpl$Widgets_2_classLit = createForClass('io.github.firecoremajin.ui.pages', 'TeamPage_TeamPageUiBinderImpl/Widgets', 209);
function $html1_3(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<div class='bf-team'><style is='custom-style'> .bf-team { position: relative; } .bu-container { @apply(--layout-horizontal); @apply(--layout-wrap); @apply(--layout-center-justified); position: relative; margin: 0px;} @media (min-width: 58em) { .bu-container { @apply(--layout-start-justified); } } .bu-container * { font-size: 0.95em; } <\/style> <div class='bu-container' id='";
  $append_0(sb, htmlEscape(arg0));
  sb.string += "'> <\/div><\/div>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $setExpanded_0(this$static, expand){
  expand?$removeAttribute(this$static.element, 'compressed'):$setAttribute(this$static.element, 'compressed', 'true');
}

function UnitBadge(unit){
  this.element = $build_f_div1_3(new UnitBadge_UnitBadgeUiBinderImpl$Widgets(this));
  $setAttribute(this.image, 'src', unit.getIcon());
  $setInnerHTML(this.title_0, unit.getName());
  $setInnerHTML(this.subtitle, unit.getSubtitle());
  $setInnerHTML(this.description, unit.getDescription());
  unit.getLink() == null || unit.getLink().length == 0 || $equals_0('null', unit.getLink())?null.$_nullMethod():null.$_nullMethod("window.open('" + unit.getLink() + "','_blank');");
  unit.getCard() == null || unit.getCard().length == 0 || $equals_0('null', unit.getCard())?null.$_nullMethod():null.$_nullMethod("window.open('" + unit.getCard() + "','_blank');");
  setEventListener(this.header, this);
  sinkEvents_0(this.header);
}

defineClass(93, 1, {34:1}, UnitBadge);
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  $clinit_DOM();
  $eventGetTypeInt(($clinit_DOMImpl() , event_0).type) == 1 && $isOrHasChild(this.header, impl_0.eventGetTarget(event_0)) && $setExpanded_0(this, $hasAttribute(this.element));
}
;
var Lio_github_firecoremajin_ui_widget_UnitBadge_2_classLit = createForClass('io.github.firecoremajin.ui.widget', 'UnitBadge', 93);
function $build_f_div1_3(this$static){
  var __attachRecord__, f_div1, header, image, title_0, subtitle, link_0, card, description;
  f_div1 = fromHtml($html1_4(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7).html);
  __attachRecord__ = attachToDom(f_div1);
  header = $get(new LazyDomElement(this$static.domId0));
  this$static.owner.header = header;
  image = $get(new LazyDomElement(this$static.domId1));
  this$static.owner.image = image;
  title_0 = $get(new LazyDomElement(this$static.domId2));
  this$static.owner.title_0 = title_0;
  subtitle = $get(new LazyDomElement(this$static.domId3));
  this$static.owner.subtitle = subtitle;
  $get(new LazyDomElement(this$static.domId4));
  link_0 = $get(new LazyDomElement(this$static.domId5));
  throwClassCastExceptionUnlessNull(link_0);
  card = $get(new LazyDomElement(this$static.domId6));
  throwClassCastExceptionUnlessNull(card);
  description = $get(new LazyDomElement(this$static.domId7));
  this$static.owner.description = description;
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  return f_div1;
}

function UnitBadge_UnitBadgeUiBinderImpl$Widgets(owner){
  this.owner = owner;
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId2 = $createUniqueId($doc);
  this.domId3 = $createUniqueId($doc);
  this.domId4 = $createUniqueId($doc);
  this.domId5 = $createUniqueId($doc);
  this.domId6 = $createUniqueId($doc);
  this.domId7 = $createUniqueId($doc);
}

defineClass(213, 1, {}, UnitBadge_UnitBadgeUiBinderImpl$Widgets);
var Lio_github_firecoremajin_ui_widget_UnitBadge_1UnitBadgeUiBinderImpl$Widgets_2_classLit = createForClass('io.github.firecoremajin.ui.widget', 'UnitBadge_UnitBadgeUiBinderImpl/Widgets', 213);
function $html1_4(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7){
  var sb;
  sb = new StringBuilder;
  sb.string += "<div class='ub-cnt'><style is='custom-style'> .ub-cnt { width: 100%; min-height: 100%; display: block; margin: 1.0em 0.7em 0.3em; } @media (min-width: 58em) { .ub-cnt { width: 46%; } } @media (min-width: 86em) { .ub-cnt { width: 31%; } } .ub-cnt&gt;paper-card { min-width:100%; min-height: 100%; display: block; } .ub-cnt&gt;paper-card&gt;paper-material { min-width:100%; min-height: 100%; display: block; } .ub-header { @apply(--layout-horizontal); @apply(--layout-wrap); padding: 0.7em 0.3em; cursor: pointer; } .ub-header .ub-htitle { @apply(--layout-flex); } .ub-header .ub-htitle .ub-title { font-size: 1.5em; padding-left: 0.5em; } .ub-header .ub-htitle .ub-subtitle{ font-size: 1.1em; padding-left: 1.2em; padding-top: 0.2em;} .ub-header .ub-links { font-size: 1.05em; @apply(--layout-vertical); padding: 0 0.3em;} .ub-content { padding: 0.2em 0.4em 1.3em; max-height: 4.7em; min-height: 4.7em; } .ub-actions { @apply(--layout-horizontal); padding: 0 0.7em 0.4em; } .ub-cnt[compressed=\"true\"] .ub-content {\xA0display: none; } .ub-cnt[compressed=\"true\"] .ub-actions {\xA0display: none; } .ub-cnt .ub-switch[disabled] { display: none; } .ub-btcard { text-align: center;} .ub-card&gt;paper-material { padding: 0.1em; } .ub-btfill { @apply(--layout-flex); visibility: hidden;} .ub-switch[aria-pressed=true] { background: #ccc; color: #fff; } <\/style>  <paper-card class='ub-card' elevation='2'> <div class='ub-header' id='";
  $append_0(sb, htmlEscape(arg0));
  sb.string += "'> <div class='ub-avatar'><img id='";
  $append_0(sb, htmlEscape(arg1));
  sb.string += "'><\/div> <div class='ub-htitle'> <div class='ub-title' id='";
  $append_0(sb, htmlEscape(arg2));
  sb.string += "'><\/div> <div><\/div> <div class='ub-subtitle' id='";
  $append_0(sb, htmlEscape(arg3));
  sb.string += "'><\/div> <\/div> <div class='ub-badge' id='";
  $append_0(sb, htmlEscape(arg4));
  sb.string += "'><\/div> <div class='ub-links'> <paper-button class='ub-btcard'><a id='";
  $append_0(sb, htmlEscape(arg5));
  sb.string += "'>Wiki<\/a><\/paper-button> <paper-button class='ub-btcard'><a id='";
  $append_0(sb, htmlEscape(arg6));
  sb.string += "'>Scheda<\/a><\/paper-button> <\/div> <\/div> <div class='ub-content' id='";
  $append_0(sb, htmlEscape(arg7));
  sb.string += "'><\/div> <\/paper-card><\/div>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function arraySplice(src_0, srcOfs, dest, destOfs, len){
  var batchEnd, batchStart, end;
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = batchStart + 10000 < end?batchStart + 10000:end;
    len = batchEnd - batchStart;
    nativeArraySplice(dest, destOfs, len, src_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function nativeArraySplice(array, index_0, deleteCount, arrayToAdd){
  Array.prototype.splice.apply(array, [index_0, deleteCount].concat(arrayToAdd));
}

function checkArrayType(expression){
  if (!expression) {
    throw new ArrayStoreException;
  }
}

function checkArrayType_0(expression, errorMessage){
  if (!expression) {
    throw new ArrayStoreException_0(($clinit_String() , '' + errorMessage));
  }
}

function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0(($clinit_String() , '' + errorMessage));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw new NullPointerException_0(($clinit_String() , '' + errorMessage));
  }
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function checkState_0(expression){
  if (!expression) {
    throw new IllegalStateException_0(($clinit_String() , "Can't overwrite cause"));
  }
}

function checkType(expression){
  if (!expression) {
    throw new ClassCastException;
  }
}

function $append0(this$static, x_0, start_0, end){
  x_0 == null && (x_0 = 'null');
  this$static.string += __substr(x_0, start_0, end - start_0);
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(89, 1, {});
_.toString$ = function toString_22(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 89);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(127, 13, $intern_1, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 127);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(54, 13, $intern_1, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 54);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

defineClass(229, 54, $intern_1, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 229);
function ArrayStoreException(){
  RuntimeException.call(this);
}

function ArrayStoreException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(98, 13, $intern_1, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 98);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = new Boolean_0(false);
  TRUE = new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

function toString_24(x_0){
  return $clinit_String() , '' + x_0;
}

defineClass(58, 1, {3:1, 58:1, 11:1}, Boolean_0);
_.equals$ = function equals_20(o){
  return instanceOf(o, 58) && dynamicCast(o, 58).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_22(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_23(){
  return toString_24(this.value_0);
}
;
_.value_0 = false;
var FALSE, TRUE;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 58);
function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < $intern_34;
  if (isNaN(toReturn)) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseAndValidateLong(s){
  var c, firstTime, head, i, length_0, maxDigits, minValue, negative, orig, radixPower, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  orig = s;
  length_0 = s.length;
  negative = false;
  if (length_0 > 0) {
    c = s.charCodeAt(0);
    if (c == 45 || c == 43) {
      s = __substr(s, 1, s.length - 1);
      --length_0;
      negative = c == 45;
    }
  }
  if (length_0 == 0) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  while (s.length > 0 && s.charCodeAt(0) == 48) {
    s = __substr(s, 1, s.length - 1);
    --length_0;
  }
  if (length_0 > ($clinit_Number$__ParseLong() , maxLengthForRadix)[10]) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  for (i = 0; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + orig + '"');
    }
  }
  toReturn = {l:0, m:0, h:0};
  maxDigits = maxDigitsForRadix[10];
  radixPower = fromInt(maxDigitsRadixPower[10]);
  minValue = neg(maxValueForRadix[10]);
  firstTime = true;
  head = length_0 % maxDigits;
  if (head > 0) {
    toReturn = fromInt(-__parseInt(__substr(s, 0, head), 10));
    s = __substr(s, head, s.length - head);
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = __parseInt(__substr(s, 0, maxDigits), 10);
    s = __substr(s, maxDigits, s.length - maxDigits);
    length_0 -= maxDigits;
    if (firstTime) {
      firstTime = false;
    }
     else {
      if (lt(toReturn, minValue)) {
        throw new NumberFormatException('For input string: "' + orig + '"');
      }
      toReturn = mul(toReturn, radixPower);
    }
    toReturn = sub_0(toReturn, fromInt(head));
  }
  if (gt(toReturn, {l:0, m:0, h:0})) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  if (!negative) {
    toReturn = neg(toReturn);
    if (lt(toReturn, {l:0, m:0, h:0})) {
      throw new NumberFormatException('For input string: "' + orig + '"');
    }
  }
  return toReturn;
}

function __parseInt(s, radix){
  return parseInt(s, radix);
}

defineClass(35, 1, {3:1, 35:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 35);
function Byte(value_0){
  this.value_0 = value_0;
}

function toString_26(b){
  return $clinit_String() , '' + b;
}

function valueOf(b){
  var rebase, result;
  rebase = b + 128;
  result = ($clinit_Byte$BoxedValues() , boxedValues_0)[rebase];
  !result && (result = boxedValues_0[rebase] = new Byte(b));
  return result;
}

defineClass(59, 35, {3:1, 59:1, 11:1, 35:1}, Byte);
_.equals$ = function equals_21(o){
  return instanceOf(o, 59) && dynamicCast(o, 59).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_23(){
  return this.value_0;
}
;
_.toString$ = function toString_25(){
  return toString_26(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', 59);
function $clinit_Byte$BoxedValues(){
  $clinit_Byte$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Byte_2_classLit, $intern_0, 59, 256, 0, 1);
}

var boxedValues_0;
function Character(value_0){
  this.value_0 = value_0;
}

function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function valueOf_0(c){
  var result;
  if (c < 128) {
    result = ($clinit_Character$BoxedValues() , boxedValues_1)[c];
    !result && (result = boxedValues_1[c] = new Character(c));
    return result;
  }
  return new Character(c);
}

defineClass(50, 1, {3:1, 50:1, 11:1}, Character);
_.equals$ = function equals_22(o){
  return instanceOf(o, 50) && dynamicCast(o, 50).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_24(){
  return this.value_0;
}
;
_.toString$ = function toString_27(){
  return valueOf_4(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', 50);
function $clinit_Character$BoxedValues(){
  $clinit_Character$BoxedValues = emptyMethod;
  boxedValues_1 = initDim(Ljava_lang_Character_2_classLit, $intern_0, 50, 128, 0, 1);
}

var boxedValues_1;
function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(120, 13, $intern_1, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 120);
function Double(value_0){
  this.value_0 = value_0;
}

function isNaN_0(x_0){
  return isNaN(x_0);
}

function toString_30(b){
  return $clinit_String() , '' + b;
}

defineClass(60, 35, {3:1, 11:1, 60:1, 35:1}, Double);
_.equals$ = function equals_23(o){
  return instanceOf(o, 60) && dynamicCast(o, 60).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_25(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_29(){
  return toString_30(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 60);
function Float(value_0){
  this.value_0 = value_0;
}

function toString_32(b){
  return $clinit_String() , '' + b;
}

defineClass(61, 35, {3:1, 11:1, 61:1, 35:1}, Float);
_.equals$ = function equals_24(o){
  return instanceOf(o, 61) && dynamicCast(o, 61).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_26(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_31(){
  return toString_32(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 61);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(27, 13, $intern_1, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 27);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(32, 13, $intern_1, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 32);
function Integer(value_0){
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - $intern_13;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function toString_34(value_0){
  return $clinit_String() , '' + value_0;
}

function valueOf_1(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_2)[rebase];
    !result && (result = boxedValues_2[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(51, 35, {3:1, 11:1, 51:1, 35:1}, Integer);
_.equals$ = function equals_25(o){
  return instanceOf(o, 51) && dynamicCast(o, 51).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_27(){
  return this.value_0;
}
;
_.toString$ = function toString_33(){
  return toString_34(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 51);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_2 = initDim(Ljava_lang_Integer_2_classLit, $intern_0, 51, 256, 0, 1);
}

var boxedValues_2;
function Long(value_0){
  this.value_0 = value_0;
}

function toString_36(value_0){
  return $clinit_String() , '' + toString_7(value_0);
}

function valueOf_2(i){
  var rebase, result;
  if (gt(i, {l:4194175, m:$intern_5, h:$intern_6}) && lt(i, {l:128, m:0, h:0})) {
    rebase = toInt(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_3)[rebase];
    !result && (result = boxedValues_3[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

defineClass(52, 35, {3:1, 11:1, 52:1, 35:1}, Long);
_.equals$ = function equals_26(o){
  return instanceOf(o, 52) && eq(dynamicCast(o, 52).value_0, this.value_0);
}
;
_.hashCode$ = function hashCode_28(){
  return toInt(this.value_0);
}
;
_.toString$ = function toString_35(){
  return toString_36(this.value_0);
}
;
_.value_0 = {l:0, m:0, h:0};
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 52);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_3 = initDim(Ljava_lang_Long_2_classLit, $intern_0, 52, 256, 0, 1);
}

var boxedValues_3;
function floor_0(x_0){
  return Math.floor(x_0);
}

function pow_0(x_0, exp_0){
  return Math.pow(x_0, exp_0);
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(20, 13, $intern_1, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 20);
function $clinit_Number$__ParseLong(){
  $clinit_Number$__ParseLong = emptyMethod;
  var i;
  maxDigitsForRadix = initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  maxDigitsRadixPower = initDim(I_classLit, $intern_0, 10, 37, 7, 1);
  maxLengthForRadix = initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  maxValueForRadix = initDim(J_classLit, $intern_0, 10, 37, 6, 1);
  for (i = 2; i <= 36; i++) {
    maxDigitsRadixPower[i] = round_int(pow_0(i, maxDigitsForRadix[i]));
    maxValueForRadix[i] = div({l:$intern_5, m:$intern_5, h:524287}, fromInt(maxDigitsRadixPower[i]));
  }
}

var maxDigitsForRadix, maxDigitsRadixPower, maxLengthForRadix, maxValueForRadix;
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(17, 27, {3:1, 17:1, 4:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 17);
function Short(value_0){
  this.value_0 = value_0;
}

function toString_38(b){
  return $clinit_String() , '' + b;
}

function valueOf_3(s){
  var rebase, result;
  if (s > -129 && s < 128) {
    rebase = s + 128;
    result = ($clinit_Short$BoxedValues() , boxedValues_4)[rebase];
    !result && (result = boxedValues_4[rebase] = new Short(s));
    return result;
  }
  return new Short(s);
}

defineClass(53, 35, {3:1, 11:1, 35:1, 53:1}, Short);
_.equals$ = function equals_27(o){
  return instanceOf(o, 53) && dynamicCast(o, 53).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_29(){
  return this.value_0;
}
;
_.toString$ = function toString_37(){
  return toString_38(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Short_2_classLit = createForClass('java.lang', 'Short', 53);
function $clinit_Short$BoxedValues(){
  $clinit_Short$BoxedValues = emptyMethod;
  boxedValues_4 = initDim(Ljava_lang_Short_2_classLit, $intern_0, 53, 256, 0, 1);
}

var boxedValues_4;
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key_0 = ':' + str;
  var result = front[key_0];
  if (result != null) {
    return result;
  }
  result = back_0[key_0];
  result == null && (result = compute(str));
  increment();
  return front[key_0] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += String.fromCharCode(x_0);
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $insert_0(this$static, index_0, x_0){
  this$static.string = __substr(this$static.string, 0, index_0) + x_0 + $substring(this$static.string, index_0);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(19, 89, {313:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
_.toString$ = function toString_39(){
  return this.string;
}
;
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 19);
function StringIndexOutOfBoundsException(index_0){
  IndexOutOfBoundsException_0.call(this, 'String index out of range: ' + index_0);
}

defineClass(96, 54, $intern_1, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 96);
function arraycopy(src_0, srcOfs, dest, destOfs, len){
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  checkNotNull_0(src_0, 'src');
  checkNotNull_0(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkArrayType_0((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkArrayType_0((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkArrayType_0((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new IndexOutOfBoundsException;
  }
  if (((srcComp.modifiers & 1) == 0 || (srcComp.modifiers & 4) != 0) && srcType != destType) {
    srcArray = dynamicCast(src_0, 317);
    destArray = dynamicCast(dest, 317);
    if (src_0 === dest && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else 
    len > 0 && arraySplice(src_0, srcOfs, dest, destOfs, len);
}

function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(36, 13, $intern_1, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 36);
function $clinit_BigDecimal(){
  $clinit_BigDecimal = emptyMethod;
  var i, j, j0;
  new BigDecimal({l:1, m:0, h:0}, 0);
  new BigDecimal({l:10, m:0, h:0}, 0);
  new BigDecimal({l:0, m:0, h:0}, 0);
  BI_SCALED_BY_ZERO = initDim(Ljava_math_BigDecimal_2_classLit, $intern_0, 26, 11, 0, 1);
  CH_ZEROS = initDim(C_classLit, $intern_0, 10, 100, 7, 1);
  DOUBLE_FIVE_POW = initValues(getClassLiteralForArray(D_classLit, 1), $intern_0, 10, 7, [1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125, 244140625, 1220703125, 6103515625, 30517578125, 152587890625, 762939453125, 3814697265625, 19073486328125, 95367431640625, 476837158203125, 2384185791015625]);
  DOUBLE_FIVE_POW_BIT_LENGTH = initDim(I_classLit, $intern_0, 10, DOUBLE_FIVE_POW.length, 7, 1);
  DOUBLE_TEN_POW = initValues(getClassLiteralForArray(D_classLit, 1), $intern_0, 10, 7, [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, $intern_11, 10000000000, 100000000000, 1000000000000, 10000000000000, 100000000000000, 1000000000000000, 10000000000000000]);
  DOUBLE_TEN_POW_BIT_LENGTH = initDim(I_classLit, $intern_0, 10, DOUBLE_TEN_POW.length, 7, 1);
  ZERO_SCALED_BY = initDim(Ljava_math_BigDecimal_2_classLit, $intern_0, 26, 11, 0, 1);
  i = 0;
  for (; i < ZERO_SCALED_BY.length; i++) {
    BI_SCALED_BY_ZERO[i] = new BigDecimal(fromInt(i), 0);
    ZERO_SCALED_BY[i] = new BigDecimal({l:0, m:0, h:0}, i);
    CH_ZEROS[i] = 48;
  }
  for (; i < CH_ZEROS.length; i++) {
    CH_ZEROS[i] = 48;
  }
  for (j0 = 0; j0 < DOUBLE_FIVE_POW_BIT_LENGTH.length; j0++) {
    DOUBLE_FIVE_POW_BIT_LENGTH[j0] = bitLength(DOUBLE_FIVE_POW[j0]);
  }
  for (j = 0; j < DOUBLE_TEN_POW_BIT_LENGTH.length; j++) {
    DOUBLE_TEN_POW_BIT_LENGTH[j] = bitLength(DOUBLE_TEN_POW[j]);
  }
  $clinit_Multiplication();
}

function $initFrom(this$static, val){
  var begin, ch_0, i, last, offset, scaleString, unscaled, unscaledBuffer;
  begin = 0;
  offset = 0;
  last = val.length;
  unscaledBuffer = (val.length , new StringBuilder_0);
  if (0 < last && val.charCodeAt(0) == 43) {
    ++offset;
    ++begin;
    if (offset < last && (val.charCodeAt(offset) == 43 || val.charCodeAt(offset) == 45)) {
      throw new NumberFormatException('For input string: "' + val + '"');
    }
  }
  while (offset < last && val.charCodeAt(offset) != 46 && val.charCodeAt(offset) != 101 && val.charCodeAt(offset) != 69) {
    ++offset;
  }
  $append0(unscaledBuffer, val, begin, offset);
  if (offset < last && val.charCodeAt(offset) == 46) {
    ++offset;
    begin = offset;
    while (offset < last && val.charCodeAt(offset) != 101 && val.charCodeAt(offset) != 69) {
      ++offset;
    }
    this$static.scale = offset - begin;
    $append0(unscaledBuffer, val, begin, offset);
  }
   else {
    this$static.scale = 0;
  }
  if (offset < last && (val.charCodeAt(offset) == 101 || val.charCodeAt(offset) == 69)) {
    ++offset;
    begin = offset;
    if (offset < last && val.charCodeAt(offset) == 43) {
      ++offset;
      offset < last && val.charCodeAt(offset) != 45 && ++begin;
    }
    scaleString = __substr(val, begin, last - begin);
    this$static.scale = this$static.scale - __parseAndValidateInt(scaleString);
    if (this$static.scale != round_int(this$static.scale)) {
      throw new NumberFormatException('Scale out of range.');
    }
  }
  unscaled = unscaledBuffer.string;
  if (unscaled.length < 16) {
    this$static.smallValue = parseUnscaled(unscaled);
    if (isNaN_0(this$static.smallValue)) {
      throw new NumberFormatException('For input string: "' + val + '"');
    }
    this$static.bitLength = bitLength(this$static.smallValue);
  }
   else {
    $setUnscaledValue(this$static, new BigInteger_3(unscaled));
  }
  this$static.precision = unscaledBuffer.string.length;
  for (i = 0; i < unscaledBuffer.string.length; ++i) {
    ch_0 = $charAt(unscaledBuffer.string, i);
    if (ch_0 != 45 && ch_0 != 48) {
      break;
    }
    --this$static.precision;
  }
  this$static.precision == 0 && (this$static.precision = 1);
}

function $setUnscaledValue(this$static, unscaledValue){
  var value_0;
  this$static.intVal = unscaledValue;
  this$static.bitLength = bitLength_1(unscaledValue);
  this$static.bitLength < 54 && (this$static.smallValue = toDouble((value_0 = unscaledValue.numberLength > 1?or(shl(fromInt(unscaledValue.digits[1]), 32), and(fromInt(unscaledValue.digits[0]), {l:$intern_5, m:1023, h:0})):and(fromInt(unscaledValue.digits[0]), {l:$intern_5, m:1023, h:0}) , mul(fromInt(unscaledValue.sign), value_0))));
}

function $toString_0(this$static){
  var begin, end, exponent, intString, result;
  if (this$static.toStringImage != null) {
    return this$static.toStringImage;
  }
  if (this$static.bitLength < 32) {
    this$static.toStringImage = toDecimalScaledString(fromDouble(this$static.smallValue), round_int(this$static.scale));
    return this$static.toStringImage;
  }
  intString = toDecimalScaledString_0((!this$static.intVal && (this$static.intVal = valueOf_6(this$static.smallValue)) , this$static.intVal), 0);
  if (this$static.scale == 0) {
    return intString;
  }
  begin = (!this$static.intVal && (this$static.intVal = valueOf_6(this$static.smallValue)) , this$static.intVal).sign < 0?2:1;
  end = intString.length;
  exponent = -this$static.scale + end - begin;
  result = new StringBuilder;
  result.string += intString;
  if (this$static.scale > 0 && exponent >= -6) {
    if (exponent >= 0) {
      $insert_0(result, end - round_int(this$static.scale), '.');
    }
     else {
      result.string = __substr(result.string, 0, begin - 1) + '0.' + $substring(result.string, begin - 1);
      $insert_0(result, begin + 1, valueOf_5(CH_ZEROS, 0, -round_int(exponent) - 1));
    }
  }
   else {
    if (end - begin >= 1) {
      result.string = __substr(result.string, 0, begin) + '.' + $substring(result.string, begin);
      ++end;
    }
    result.string = __substr(result.string, 0, end) + 'E' + $substring(result.string, end);
    exponent > 0 && $insert_0(result, ++end, '+');
    $insert_0(result, ++end, toString_36(fromDouble(exponent)));
  }
  this$static.toStringImage = result.string;
  return this$static.toStringImage;
}

function BigDecimal(smallValue, scale){
  this.scale = scale;
  this.bitLength = bitLength_0(smallValue);
  this.bitLength < 54?(this.smallValue = toDouble(smallValue)):(this.intVal = valueOf_7(smallValue));
}

function BigDecimal_0(val){
  $clinit_BigDecimal();
  $initFrom(this, val);
}

function bitLength(value_0){
  var negative, result;
  if (value_0 > -140737488355328 && value_0 < 140737488355328) {
    if (value_0 == 0) {
      return 0;
    }
    negative = value_0 < 0;
    negative && (value_0 = -value_0);
    result = round_int(floor_0(Math.log(value_0) / 0.6931471805599453));
    (!negative || value_0 != pow_0(2, result)) && ++result;
    return result;
  }
  return bitLength_0(fromDouble(value_0));
}

function bitLength_0(value_0){
  var high;
  lt(value_0, {l:0, m:0, h:0}) && (value_0 = {l:~value_0.l & $intern_5, m:~value_0.m & $intern_5, h:~value_0.h & $intern_6});
  return 64 - (high = toInt(shr(value_0, 32)) , high != 0?numberOfLeadingZeros_0(high):numberOfLeadingZeros_0(toInt(value_0)) + 32);
}

function parseUnscaled(str){
  var unscaledRegex = unscaledRegex_0;
  !unscaledRegex && (unscaledRegex = unscaledRegex_0 = /^[+-]?\d*$/i);
  if (unscaledRegex.test(str)) {
    return parseInt(str, 10);
  }
   else {
    return Number.NaN;
  }
}

defineClass(26, 35, {3:1, 11:1, 35:1, 26:1}, BigDecimal, BigDecimal_0);
_.equals$ = function equals_29(x_0){
  var x1;
  if (this === x_0) {
    return true;
  }
  if (instanceOf(x_0, 26)) {
    x1 = dynamicCast(x_0, 26);
    return x1.scale == this.scale && (this.bitLength < 54?x1.smallValue == this.smallValue:$equals_1(this.intVal, x1.intVal));
  }
  return false;
}
;
_.hashCode$ = function hashCode_30(){
  var longValue;
  if (this.hashCode != 0) {
    return this.hashCode;
  }
  if (this.bitLength < 54) {
    longValue = fromDouble(this.smallValue);
    this.hashCode = toInt(and(longValue, {l:$intern_5, m:$intern_5, h:$intern_6}));
    this.hashCode = 33 * this.hashCode + toInt(and(shr(longValue, 32), {l:$intern_5, m:$intern_5, h:$intern_6}));
    this.hashCode = 17 * this.hashCode + round_int(this.scale);
    return this.hashCode;
  }
  this.hashCode = 17 * $hashCode(this.intVal) + round_int(this.scale);
  return this.hashCode;
}
;
_.toString$ = function toString_40(){
  return $toString_0(this);
}
;
_.bitLength = 0;
_.hashCode = 0;
_.precision = 0;
_.scale = 0;
_.smallValue = 0;
var BI_SCALED_BY_ZERO, CH_ZEROS, DOUBLE_FIVE_POW, DOUBLE_FIVE_POW_BIT_LENGTH, DOUBLE_TEN_POW, DOUBLE_TEN_POW_BIT_LENGTH, ZERO_SCALED_BY, unscaledRegex_0;
var Ljava_math_BigDecimal_2_classLit = createForClass('java.math', 'BigDecimal', 26);
function $clinit_BigInteger(){
  $clinit_BigInteger = emptyMethod;
  var i;
  ONE_0 = new BigInteger_0(1, 1);
  TEN = new BigInteger_0(1, 10);
  ZERO_0 = new BigInteger_0(0, 0);
  MINUS_ONE = new BigInteger_0(-1, 1);
  SMALL_VALUES = initValues(getClassLiteralForArray(Ljava_math_BigInteger_2_classLit, 1), $intern_0, 5, 0, [ZERO_0, ONE_0, new BigInteger_0(1, 2), new BigInteger_0(1, 3), new BigInteger_0(1, 4), new BigInteger_0(1, 5), new BigInteger_0(1, 6), new BigInteger_0(1, 7), new BigInteger_0(1, 8), new BigInteger_0(1, 9), TEN]);
  TWO_POWS = initDim(Ljava_math_BigInteger_2_classLit, $intern_0, 5, 32, 0, 1);
  for (i = 0; i < TWO_POWS.length; i++) {
    TWO_POWS[i] = valueOf_7(shl({l:1, m:0, h:0}, i));
  }
}

function $cutOffLeadingZeroes(this$static){
  while (this$static.numberLength > 0 && this$static.digits[--this$static.numberLength] == 0)
  ;
  this$static.digits[this$static.numberLength++] == 0 && (this$static.sign = 0);
}

function $equals_1(this$static, x_0){
  var x1;
  if (this$static === x_0) {
    return true;
  }
  if (instanceOf(x_0, 5)) {
    x1 = dynamicCast(x_0, 5);
    return this$static.sign == x1.sign && this$static.numberLength == x1.numberLength && $equalsArrays(this$static, x1.digits);
  }
  return false;
}

function $equalsArrays(this$static, b){
  var i;
  for (i = this$static.numberLength - 1; i >= 0 && this$static.digits[i] === b[i]; i--)
  ;
  return i < 0;
}

function $getFirstNonzeroDigit(this$static){
  var i;
  if (this$static.firstNonzeroDigit == -2) {
    if (this$static.sign == 0) {
      i = -1;
    }
     else {
      for (i = 0; this$static.digits[i] == 0; i++)
      ;
    }
    this$static.firstNonzeroDigit = i;
  }
  return this$static.firstNonzeroDigit;
}

function $hashCode(this$static){
  var i;
  if (this$static.hashCode != 0) {
    return this$static.hashCode;
  }
  for (i = 0; i < this$static.digits.length; i++) {
    this$static.hashCode = this$static.hashCode * 33 + (this$static.digits[i] & -1);
  }
  this$static.hashCode = this$static.hashCode * this$static.sign;
  return this$static.hashCode;
}

function $multiply(this$static, val){
  if (val.sign == 0) {
    return ZERO_0;
  }
  if (this$static.sign == 0) {
    return ZERO_0;
  }
  return $clinit_Multiplication() , karatsuba(this$static, val);
}

function $shiftLeft(this$static, n){
  if (n == 0 || this$static.sign == 0) {
    return this$static;
  }
  return n > 0?shiftLeft(this$static, n):shiftRight(this$static, -n);
}

function $shiftRight(this$static, n){
  if (n == 0 || this$static.sign == 0) {
    return this$static;
  }
  return n > 0?shiftRight(this$static, n):shiftLeft(this$static, -n);
}

function BigInteger(sign, val){
  this.sign = sign;
  if (val < $intern_35) {
    this.numberLength = 1;
    this.digits = initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [val | 0]);
  }
   else {
    this.numberLength = 2;
    this.digits = initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [val % $intern_35 | 0, val / $intern_35 | 0]);
  }
}

function BigInteger_0(sign, value_0){
  $clinit_BigInteger();
  this.sign = sign;
  this.numberLength = 1;
  this.digits = initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [value_0]);
}

function BigInteger_1(sign, numberLength, digits){
  $clinit_BigInteger();
  this.sign = sign;
  this.numberLength = numberLength;
  this.digits = digits;
}

function BigInteger_2(sign, val){
  this.sign = sign;
  if (eq(and(val, {l:0, m:4193280, h:$intern_6}), {l:0, m:0, h:0})) {
    this.numberLength = 1;
    this.digits = initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [toInt(val)]);
  }
   else {
    this.numberLength = 2;
    this.digits = initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [toInt(val), toInt(shr(val, 32))]);
  }
}

function BigInteger_3(val){
  $clinit_BigInteger();
  BigInteger_4.call(this, val);
}

function BigInteger_4(val){
  checkNotNull(val);
  if (!val.length) {
    throw new NumberFormatException('Zero length BigInteger');
  }
  setFromString(this, val);
}

function setFromString(bi, val){
  var bigRadix, bigRadixDigit, bigRadixDigitsLength, charsPerInt, digitIndex, digits, endChar, newDigit, sign, startChar, stringLength, substrEnd, substrStart, topChars;
  stringLength = val.length;
  endChar = stringLength;
  if (val.charCodeAt(0) == 45) {
    sign = -1;
    startChar = 1;
    --stringLength;
  }
   else {
    sign = 1;
    startChar = 0;
  }
  charsPerInt = ($clinit_Conversion() , digitFitInInt)[10];
  bigRadixDigitsLength = stringLength / charsPerInt | 0;
  topChars = stringLength % charsPerInt;
  topChars != 0 && ++bigRadixDigitsLength;
  digits = initDim(I_classLit, $intern_0, 10, bigRadixDigitsLength, 7, 1);
  bigRadix = bigRadices[8];
  digitIndex = 0;
  substrEnd = startChar + (topChars == 0?charsPerInt:topChars);
  for (substrStart = startChar; substrStart < endChar; substrStart = substrEnd , substrEnd = substrEnd + charsPerInt) {
    bigRadixDigit = __parseAndValidateInt(__substr(val, substrStart, substrEnd - substrStart));
    newDigit = ($clinit_Multiplication() , multiplyByInt(digits, digits, digitIndex, bigRadix));
    newDigit += inplaceAdd(digits, digitIndex, bigRadixDigit);
    digits[digitIndex++] = newDigit;
  }
  bi.sign = sign;
  bi.numberLength = digitIndex;
  bi.digits = digits;
  $cutOffLeadingZeroes(bi);
}

function valueOf_6(val){
  $clinit_BigInteger();
  if (val < 0) {
    if (val != -1) {
      return new BigInteger(-1, -val);
    }
    return MINUS_ONE;
  }
   else 
    return val <= 10?SMALL_VALUES[round_int(val)]:new BigInteger(1, val);
}

function valueOf_7(val){
  $clinit_BigInteger();
  if (lt(val, {l:0, m:0, h:0})) {
    if (neq(val, {l:$intern_5, m:$intern_5, h:$intern_6})) {
      return new BigInteger_2(-1, neg(val));
    }
    return MINUS_ONE;
  }
   else 
    return lte(val, {l:10, m:0, h:0})?SMALL_VALUES[toInt(val)]:new BigInteger_2(1, val);
}

defineClass(5, 35, {3:1, 11:1, 35:1, 5:1}, BigInteger, BigInteger_0, BigInteger_1, BigInteger_2, BigInteger_3);
_.equals$ = function equals_30(x_0){
  return $equals_1(this, x_0);
}
;
_.hashCode$ = function hashCode_31(){
  return $hashCode(this);
}
;
_.toString$ = function toString_41(){
  return toDecimalScaledString_0(this, 0);
}
;
_.firstNonzeroDigit = -2;
_.hashCode = 0;
_.numberLength = 0;
_.sign = 0;
var MINUS_ONE, ONE_0, SMALL_VALUES, TEN, TWO_POWS, ZERO_0;
var Ljava_math_BigInteger_2_classLit = createForClass('java.math', 'BigInteger', 5);
function bitLength_1(val){
  var bLength, highDigit, i;
  if (val.sign == 0) {
    return 0;
  }
  bLength = val.numberLength << 5;
  highDigit = val.digits[val.numberLength - 1];
  if (val.sign < 0) {
    i = $getFirstNonzeroDigit(val);
    if (i == val.numberLength - 1) {
      --highDigit;
      highDigit = highDigit | 0;
    }
  }
  bLength -= numberOfLeadingZeros_0(highDigit);
  return bLength;
}

function shiftLeft(source, count){
  var intCount, resDigits, resLength, result;
  intCount = count >> 5;
  count &= 31;
  resLength = source.numberLength + intCount + (count == 0?0:1);
  resDigits = initDim(I_classLit, $intern_0, 10, resLength, 7, 1);
  shiftLeft_0(resDigits, source.digits, intCount, count);
  result = new BigInteger_1(source.sign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function shiftLeft_0(result, source, intCount, count){
  var i, i0, rightShiftCount;
  if (count == 0) {
    arraycopy(source, 0, result, intCount, result.length - intCount);
  }
   else {
    rightShiftCount = 32 - count;
    result[result.length - 1] = 0;
    for (i0 = result.length - 1; i0 > intCount; i0--) {
      result[i0] |= source[i0 - intCount - 1] >>> rightShiftCount;
      result[i0 - 1] = source[i0 - intCount - 1] << count;
    }
  }
  for (i = 0; i < intCount; i++) {
    result[i] = 0;
  }
}

function shiftLeftOneBit(result, source, srcLen){
  var carry, i, val;
  carry = 0;
  for (i = 0; i < srcLen; i++) {
    val = source[i];
    result[i] = val << 1 | carry;
    carry = val >>> 31;
  }
  carry != 0 && (result[srcLen] = carry);
}

function shiftRight(source, count){
  var i, intCount, resDigits, resLength, result;
  intCount = count >> 5;
  count &= 31;
  if (intCount >= source.numberLength) {
    return source.sign < 0?($clinit_BigInteger() , MINUS_ONE):($clinit_BigInteger() , ZERO_0);
  }
  resLength = source.numberLength - intCount;
  resDigits = initDim(I_classLit, $intern_0, 10, resLength + 1, 7, 1);
  shiftRight_0(resDigits, resLength, source.digits, intCount, count);
  if (source.sign < 0) {
    for (i = 0; i < intCount && source.digits[i] == 0; i++)
    ;
    if (i < intCount || count > 0 && source.digits[i] << 32 - count != 0) {
      for (i = 0; i < resLength && resDigits[i] == -1; i++) {
        resDigits[i] = 0;
      }
      i == resLength && ++resLength;
      ++resDigits[i];
    }
  }
  result = new BigInteger_1(source.sign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function shiftRight_0(result, resultLen, source, intCount, count){
  var allZero, i, leftShiftCount;
  allZero = true;
  for (i = 0; i < intCount; i++) {
    allZero = allZero & source[i] == 0;
  }
  if (count == 0) {
    arraycopy(source, intCount, result, 0, resultLen);
  }
   else {
    leftShiftCount = 32 - count;
    allZero = allZero & source[i] << leftShiftCount == 0;
    for (i = 0; i < resultLen - 1; i++) {
      result[i] = source[i + intCount] >>> count | source[i + intCount + 1] << leftShiftCount;
    }
    result[i] = source[i + intCount] >>> count;
    ++i;
  }
  return allZero;
}

function $clinit_Conversion(){
  $clinit_Conversion = emptyMethod;
  bigRadices = initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [$intern_34, 1162261467, $intern_36, 1220703125, 362797056, 1977326743, $intern_36, 387420489, $intern_11, 214358881, 429981696, 815730721, 1475789056, 170859375, 268435456, 410338673, 612220032, 893871739, 1280000000, 1801088541, 113379904, 148035889, 191102976, 244140625, 308915776, 387420489, 481890304, 594823321, 729000000, 887503681, $intern_36, 1291467969, 1544804416, 1838265625, 60466176]);
  digitFitInInt = initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [-1, -1, 31, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
}

function divideLongByBillion(a){
  var aPos, quot, rem;
  if (gte_0(a, {l:0, m:0, h:0})) {
    quot = div(a, {l:1755648, m:238, h:0});
    rem = mod(a, {l:1755648, m:238, h:0});
  }
   else {
    aPos = shru(a, 1);
    quot = div(aPos, {l:877824, m:119, h:0});
    rem = mod(aPos, {l:877824, m:119, h:0});
    rem = add_0(shl(rem, 1), and(a, {l:1, m:0, h:0}));
  }
  return or(shl(rem, 32), and(quot, {l:$intern_5, m:1023, h:0}));
}

function toDecimalScaledString(value_0, scale){
  $clinit_Conversion();
  var currentChar, exponent, insertPoint, j, j0, negNumber, prev, result, result1, result10, startPoint, v;
  negNumber = lt(value_0, {l:0, m:0, h:0});
  negNumber && (value_0 = neg(value_0));
  if (eq(value_0, {l:0, m:0, h:0})) {
    switch (scale) {
      case 0:
        return '0';
      case 1:
        return '0.0';
      case 2:
        return '0.00';
      case 3:
        return '0.000';
      case 4:
        return '0.0000';
      case 5:
        return '0.00000';
      case 6:
        return '0.000000';
      default:result10 = new StringBuilder;
        scale < 0?(result10.string += '0E+' , result10):(result10.string += '0E' , result10);
        $append_0(result10, scale == $intern_34?'2147483648':($clinit_String() , '' + -scale));
        return result10.string;
    }
  }
  result = initDim(C_classLit, $intern_0, 10, 19, 7, 1);
  currentChar = 18;
  v = value_0;
  do {
    prev = v;
    v = div(v, {l:10, m:0, h:0});
    result[--currentChar] = toInt(add_0({l:48, m:0, h:0}, sub_0(prev, mul(v, {l:10, m:0, h:0})))) & 65535;
  }
   while (neq(v, {l:0, m:0, h:0}));
  exponent = sub_0(sub_0(sub_0({l:18, m:0, h:0}, fromInt(currentChar)), fromInt(scale)), {l:1, m:0, h:0});
  if (scale == 0) {
    negNumber && (result[--currentChar] = 45);
    return $clinit_String() , valueOf_5(result, currentChar, 18 - currentChar);
  }
  if (scale > 0 && gte_0(exponent, {l:4194298, m:$intern_5, h:$intern_6})) {
    if (gte_0(exponent, {l:0, m:0, h:0})) {
      insertPoint = currentChar + toInt(exponent);
      for (j0 = 17; j0 >= insertPoint; j0--) {
        result[j0 + 1] = result[j0];
      }
      result[++insertPoint] = 46;
      negNumber && (result[--currentChar] = 45);
      return $clinit_String() , valueOf_5(result, currentChar, 18 - currentChar + 1);
    }
    for (j = 2; lt(fromInt(j), add_0(neg(exponent), {l:1, m:0, h:0})); j++) {
      result[--currentChar] = 48;
    }
    result[--currentChar] = 46;
    result[--currentChar] = 48;
    negNumber && (result[--currentChar] = 45);
    return $clinit_String() , valueOf_5(result, currentChar, 18 - currentChar);
  }
  startPoint = currentChar + 1;
  result1 = new StringBuilder_0;
  negNumber && (result1.string += '-' , result1);
  if (18 - startPoint >= 1) {
    $append(result1, result[currentChar]);
    result1.string += '.';
    result1.string += valueOf_5(result, currentChar + 1, 18 - currentChar - 1);
  }
   else {
    result1.string += valueOf_5(result, currentChar, 18 - currentChar);
  }
  result1.string += 'E';
  gt(exponent, {l:0, m:0, h:0}) && (result1.string += '+' , result1);
  $append_0(result1, ($clinit_String() , '' + toString_7(exponent)));
  return result1.string;
}

function toDecimalScaledString_0(val, scale){
  $clinit_Conversion();
  var currentChar, delta, digits, exponent, highDigit, i, i1, insertPoint, j, j0, negNumber, numberLength, prev, previous, res, resDigit, resLengthInChars, result, result1, result10, result11, sign, startPoint, temp, temp1, tempLen, v;
  sign = val.sign;
  numberLength = val.numberLength;
  digits = val.digits;
  if (sign == 0) {
    switch (scale) {
      case 0:
        return '0';
      case 1:
        return '0.0';
      case 2:
        return '0.00';
      case 3:
        return '0.000';
      case 4:
        return '0.0000';
      case 5:
        return '0.00000';
      case 6:
        return '0.000000';
      default:result10 = new StringBuilder;
        scale < 0?(result10.string += '0E+' , result10):(result10.string += '0E' , result10);
        result10.string += -scale;
        return result10.string;
    }
  }
  resLengthInChars = numberLength * 10 + 1 + 7;
  result = initDim(C_classLit, $intern_0, 10, resLengthInChars + 1, 7, 1);
  currentChar = resLengthInChars;
  if (numberLength == 1) {
    highDigit = digits[0];
    if (highDigit < 0) {
      v = and(fromInt(highDigit), {l:$intern_5, m:1023, h:0});
      do {
        prev = v;
        v = div(v, {l:10, m:0, h:0});
        result[--currentChar] = 48 + toInt(sub_0(prev, mul(v, {l:10, m:0, h:0}))) & 65535;
      }
       while (neq(v, {l:0, m:0, h:0}));
    }
     else {
      v = highDigit;
      do {
        prev = v;
        v = v / 10 | 0;
        result[--currentChar] = 48 + (prev - v * 10) & 65535;
      }
       while (v != 0);
    }
  }
   else {
    temp = initDim(I_classLit, $intern_0, 10, numberLength, 7, 1);
    tempLen = numberLength;
    arraycopy(digits, 0, temp, 0, numberLength);
    BIG_LOOP: while (true) {
      result11 = {l:0, m:0, h:0};
      for (i1 = tempLen - 1; i1 >= 0; i1--) {
        temp1 = add_0(shl(result11, 32), and(fromInt(temp[i1]), {l:$intern_5, m:1023, h:0}));
        res = divideLongByBillion(temp1);
        temp[i1] = toInt(res);
        result11 = fromInt(toInt(shr(res, 32)));
      }
      resDigit = toInt(result11);
      previous = currentChar;
      do {
        result[--currentChar] = 48 + resDigit % 10 & 65535;
      }
       while ((resDigit = resDigit / 10 | 0) != 0 && currentChar != 0);
      delta = 9 - previous + currentChar;
      for (i = 0; i < delta && currentChar > 0; i++) {
        result[--currentChar] = 48;
      }
      j = tempLen - 1;
      for (; temp[j] == 0; j--) {
        if (j == 0) {
          break BIG_LOOP;
        }
      }
      tempLen = j + 1;
    }
    while (result[currentChar] == 48) {
      ++currentChar;
    }
  }
  negNumber = sign < 0;
  exponent = resLengthInChars - currentChar - scale - 1;
  if (scale == 0) {
    negNumber && (result[--currentChar] = 45);
    return $clinit_String() , valueOf_5(result, currentChar, resLengthInChars - currentChar);
  }
  if (scale > 0 && exponent >= -6) {
    if (exponent >= 0) {
      insertPoint = currentChar + exponent;
      for (j0 = resLengthInChars - 1; j0 >= insertPoint; j0--) {
        result[j0 + 1] = result[j0];
      }
      result[++insertPoint] = 46;
      negNumber && (result[--currentChar] = 45);
      return $clinit_String() , valueOf_5(result, currentChar, resLengthInChars - currentChar + 1);
    }
    for (j = 2; j < -exponent + 1; j++) {
      result[--currentChar] = 48;
    }
    result[--currentChar] = 46;
    result[--currentChar] = 48;
    negNumber && (result[--currentChar] = 45);
    return $clinit_String() , valueOf_5(result, currentChar, resLengthInChars - currentChar);
  }
  startPoint = currentChar + 1;
  result1 = new StringBuilder_0;
  negNumber && (result1.string += '-' , result1);
  if (resLengthInChars - startPoint >= 1) {
    $append(result1, result[currentChar]);
    result1.string += '.';
    result1.string += valueOf_5(result, currentChar + 1, resLengthInChars - currentChar - 1);
  }
   else {
    result1.string += valueOf_5(result, currentChar, resLengthInChars - currentChar);
  }
  result1.string += 'E';
  exponent > 0 && (result1.string += '+' , result1);
  $append_0(result1, ($clinit_String() , '' + exponent));
  return result1.string;
}

var bigRadices, digitFitInInt;
function add_5(op1, op2){
  var a, b, cmp, op1Len, op1Sign, op2Len, op2Sign, res, res0, resDigits, resSign, valueHi, valueLo;
  op1Sign = op1.sign;
  op2Sign = op2.sign;
  if (op1Sign == 0) {
    return op2;
  }
  if (op2Sign == 0) {
    return op1;
  }
  op1Len = op1.numberLength;
  op2Len = op2.numberLength;
  if (op1Len + op2Len == 2) {
    a = and(fromInt(op1.digits[0]), {l:$intern_5, m:1023, h:0});
    b = and(fromInt(op2.digits[0]), {l:$intern_5, m:1023, h:0});
    if (op1Sign == op2Sign) {
      res0 = add_0(a, b);
      valueLo = toInt(res0);
      valueHi = toInt(shru(res0, 32));
      return valueHi == 0?new BigInteger_0(op1Sign, valueLo):new BigInteger_1(op1Sign, 2, initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [valueLo, valueHi]));
    }
    return valueOf_7(op1Sign < 0?sub_0(b, a):sub_0(a, b));
  }
   else if (op1Sign == op2Sign) {
    resSign = op1Sign;
    resDigits = op1Len >= op2Len?add_6(op1.digits, op1Len, op2.digits, op2Len):add_6(op2.digits, op2Len, op1.digits, op1Len);
  }
   else {
    cmp = op1Len != op2Len?op1Len > op2Len?1:-1:compareArrays(op1.digits, op2.digits, op1Len);
    if (cmp == 0) {
      return $clinit_BigInteger() , ZERO_0;
    }
    if (cmp == 1) {
      resSign = op1Sign;
      resDigits = subtract_0(op1.digits, op1Len, op2.digits, op2Len);
    }
     else {
      resSign = op2Sign;
      resDigits = subtract_0(op2.digits, op2Len, op1.digits, op1Len);
    }
  }
  res = new BigInteger_1(resSign, resDigits.length, resDigits);
  $cutOffLeadingZeroes(res);
  return res;
}

function add_6(a, aSize, b, bSize){
  var res;
  res = initDim(I_classLit, $intern_0, 10, aSize + 1, 7, 1);
  add_7(res, a, aSize, b, bSize);
  return res;
}

function add_7(res, a, aSize, b, bSize){
  var carry, i;
  carry = add_0(and(fromInt(a[0]), {l:$intern_5, m:1023, h:0}), and(fromInt(b[0]), {l:$intern_5, m:1023, h:0}));
  res[0] = toInt(carry);
  carry = shr(carry, 32);
  if (aSize >= bSize) {
    for (i = 1; i < bSize; i++) {
      carry = add_0(carry, add_0(and(fromInt(a[i]), {l:$intern_5, m:1023, h:0}), and(fromInt(b[i]), {l:$intern_5, m:1023, h:0})));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
    for (; i < aSize; i++) {
      carry = add_0(carry, and(fromInt(a[i]), {l:$intern_5, m:1023, h:0}));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
  }
   else {
    for (i = 1; i < aSize; i++) {
      carry = add_0(carry, add_0(and(fromInt(a[i]), {l:$intern_5, m:1023, h:0}), and(fromInt(b[i]), {l:$intern_5, m:1023, h:0})));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
    for (; i < bSize; i++) {
      carry = add_0(carry, and(fromInt(b[i]), {l:$intern_5, m:1023, h:0}));
      res[i] = toInt(carry);
      carry = shr(carry, 32);
    }
  }
  neq(carry, {l:0, m:0, h:0}) && (res[i] = toInt(carry));
}

function compareArrays(a, b, size_0){
  var i;
  for (i = size_0 - 1; i >= 0 && a[i] === b[i]; i--)
  ;
  return i < 0?0:lt(and(fromInt(a[i]), {l:$intern_5, m:1023, h:0}), and(fromInt(b[i]), {l:$intern_5, m:1023, h:0}))?-1:1;
}

function inplaceAdd(a, aSize, addend){
  var carry, i;
  carry = and(fromInt(addend), {l:$intern_5, m:1023, h:0});
  for (i = 0; neq(carry, {l:0, m:0, h:0}) && i < aSize; i++) {
    carry = add_0(carry, and(fromInt(a[i]), {l:$intern_5, m:1023, h:0}));
    a[i] = toInt(carry);
    carry = shr(carry, 32);
  }
  return toInt(carry);
}

function subtract(op1, op2){
  var a, b, cmp, op1Len, op1Sign, op2Len, op2Sign, res, resDigits, resSign;
  op1Sign = op1.sign;
  op2Sign = op2.sign;
  if (op2Sign == 0) {
    return op1;
  }
  if (op1Sign == 0) {
    return op2.sign == 0?op2:new BigInteger_1(-op2.sign, op2.numberLength, op2.digits);
  }
  op1Len = op1.numberLength;
  op2Len = op2.numberLength;
  if (op1Len + op2Len == 2) {
    a = and(fromInt(op1.digits[0]), {l:$intern_5, m:1023, h:0});
    b = and(fromInt(op2.digits[0]), {l:$intern_5, m:1023, h:0});
    op1Sign < 0 && (a = neg(a));
    op2Sign < 0 && (b = neg(b));
    return valueOf_7(sub_0(a, b));
  }
  cmp = op1Len != op2Len?op1Len > op2Len?1:-1:compareArrays(op1.digits, op2.digits, op1Len);
  if (cmp == -1) {
    resSign = -op2Sign;
    resDigits = op1Sign == op2Sign?subtract_0(op2.digits, op2Len, op1.digits, op1Len):add_6(op2.digits, op2Len, op1.digits, op1Len);
  }
   else {
    resSign = op1Sign;
    if (op1Sign == op2Sign) {
      if (cmp == 0) {
        return $clinit_BigInteger() , ZERO_0;
      }
      resDigits = subtract_0(op1.digits, op1Len, op2.digits, op2Len);
    }
     else {
      resDigits = add_6(op1.digits, op1Len, op2.digits, op2Len);
    }
  }
  res = new BigInteger_1(resSign, resDigits.length, resDigits);
  $cutOffLeadingZeroes(res);
  return res;
}

function subtract_0(a, aSize, b, bSize){
  var res;
  res = initDim(I_classLit, $intern_0, 10, aSize, 7, 1);
  subtract_1(res, a, aSize, b, bSize);
  return res;
}

function subtract_1(res, a, aSize, b, bSize){
  var borrow, i;
  borrow = {l:0, m:0, h:0};
  for (i = 0; i < bSize; i++) {
    borrow = add_0(borrow, sub_0(and(fromInt(a[i]), {l:$intern_5, m:1023, h:0}), and(fromInt(b[i]), {l:$intern_5, m:1023, h:0})));
    res[i] = toInt(borrow);
    borrow = shr(borrow, 32);
  }
  for (; i < aSize; i++) {
    borrow = add_0(borrow, and(fromInt(a[i]), {l:$intern_5, m:1023, h:0}));
    res[i] = toInt(borrow);
    borrow = shr(borrow, 32);
  }
}

function $clinit_Multiplication(){
  $clinit_Multiplication = emptyMethod;
  var fivePow, i;
  bigFivePows = initDim(Ljava_math_BigInteger_2_classLit, $intern_0, 5, 32, 0, 1);
  bigTenPows = initDim(Ljava_math_BigInteger_2_classLit, $intern_0, 5, 32, 0, 1);
  fivePow = {l:1, m:0, h:0};
  for (i = 0; i <= 18; i++) {
    bigFivePows[i] = valueOf_7(fivePow);
    bigTenPows[i] = valueOf_7(shl(fivePow, i));
    fivePow = mul(fivePow, {l:5, m:0, h:0});
  }
  for (; i < bigTenPows.length; i++) {
    bigFivePows[i] = $multiply(bigFivePows[i - 1], bigFivePows[1]);
    bigTenPows[i] = $multiply(bigTenPows[i - 1], ($clinit_BigInteger() , TEN));
  }
}

function karatsuba(op1, op2){
  $clinit_Multiplication();
  var lower, lowerOp1, lowerOp2, middle, ndiv2, temp, upper, upperOp1, upperOp2;
  if (op2.numberLength > op1.numberLength) {
    temp = op1;
    op1 = op2;
    op2 = temp;
  }
  if (op2.numberLength < 63) {
    return multiplyPAP(op1, op2);
  }
  ndiv2 = (op1.numberLength & -2) << 4;
  upperOp1 = $shiftRight(op1, ndiv2);
  upperOp2 = $shiftRight(op2, ndiv2);
  lowerOp1 = subtract(op1, $shiftLeft(upperOp1, ndiv2));
  lowerOp2 = subtract(op2, $shiftLeft(upperOp2, ndiv2));
  upper = karatsuba(upperOp1, upperOp2);
  lower = karatsuba(lowerOp1, lowerOp2);
  middle = karatsuba(subtract(upperOp1, lowerOp1), subtract(lowerOp2, upperOp2));
  middle = add_5(add_5(middle, upper), lower);
  middle = $shiftLeft(middle, ndiv2);
  upper = $shiftLeft(upper, ndiv2 << 1);
  return add_5(add_5(upper, middle), lower);
}

function multArraysPAP(aDigits, aLen, bDigits, bLen, resDigits){
  if (aLen == 0 || bLen == 0) {
    return;
  }
  aLen == 1?(resDigits[bLen] = multiplyByInt(resDigits, bDigits, bLen, aDigits[0])):bLen == 1?(resDigits[aLen] = multiplyByInt(resDigits, aDigits, aLen, bDigits[0])):multPAP(aDigits, bDigits, resDigits, aLen, bLen);
}

function multPAP(a, b, t, aLen, bLen){
  var aI, carry, i, j;
  if (maskUndefined(a) === maskUndefined(b) && aLen == bLen) {
    square(a, aLen, t);
    return;
  }
  for (i = 0; i < aLen; i++) {
    carry = {l:0, m:0, h:0};
    aI = a[i];
    for (j = 0; j < bLen; j++) {
      carry = add_0(add_0(mul(and(fromInt(aI), {l:$intern_5, m:1023, h:0}), and(fromInt(b[j]), {l:$intern_5, m:1023, h:0})), and(fromInt(t[i + j]), {l:$intern_5, m:1023, h:0})), and(fromInt(toInt(carry)), {l:$intern_5, m:1023, h:0}));
      t[i + j] = toInt(carry);
      carry = shru(carry, 32);
    }
    t[i + bLen] = toInt(carry);
  }
}

function multiplyByInt(res, a, aSize, factor){
  $clinit_Multiplication();
  var carry, i;
  carry = {l:0, m:0, h:0};
  for (i = 0; i < aSize; i++) {
    carry = add_0(mul(and(fromInt(a[i]), {l:$intern_5, m:1023, h:0}), and(fromInt(factor), {l:$intern_5, m:1023, h:0})), and(fromInt(toInt(carry)), {l:$intern_5, m:1023, h:0}));
    res[i] = toInt(carry);
    carry = shru(carry, 32);
  }
  return toInt(carry);
}

function multiplyPAP(a, b){
  var aDigits, aLen, bDigits, bLen, resDigits, resLength, resSign, result, val, valueHi, valueLo;
  aLen = a.numberLength;
  bLen = b.numberLength;
  resLength = aLen + bLen;
  resSign = a.sign != b.sign?-1:1;
  if (resLength == 2) {
    val = mul(and(fromInt(a.digits[0]), {l:$intern_5, m:1023, h:0}), and(fromInt(b.digits[0]), {l:$intern_5, m:1023, h:0}));
    valueLo = toInt(val);
    valueHi = toInt(shru(val, 32));
    return valueHi == 0?new BigInteger_0(resSign, valueLo):new BigInteger_1(resSign, 2, initValues(getClassLiteralForArray(I_classLit, 1), $intern_0, 10, 7, [valueLo, valueHi]));
  }
  aDigits = a.digits;
  bDigits = b.digits;
  resDigits = initDim(I_classLit, $intern_0, 10, resLength, 7, 1);
  multArraysPAP(aDigits, aLen, bDigits, bLen, resDigits);
  result = new BigInteger_1(resSign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function square(a, aLen, res){
  var carry, i, i0, index_0, j;
  for (i0 = 0; i0 < aLen; i0++) {
    carry = {l:0, m:0, h:0};
    for (j = i0 + 1; j < aLen; j++) {
      carry = add_0(add_0(mul(and(fromInt(a[i0]), {l:$intern_5, m:1023, h:0}), and(fromInt(a[j]), {l:$intern_5, m:1023, h:0})), and(fromInt(res[i0 + j]), {l:$intern_5, m:1023, h:0})), and(fromInt(toInt(carry)), {l:$intern_5, m:1023, h:0}));
      res[i0 + j] = toInt(carry);
      carry = shru(carry, 32);
    }
    res[i0 + aLen] = toInt(carry);
  }
  shiftLeftOneBit(res, res, aLen << 1);
  carry = {l:0, m:0, h:0};
  for (i = 0 , index_0 = 0; i < aLen; ++i , index_0++) {
    carry = add_0(add_0(mul(and(fromInt(a[i]), {l:$intern_5, m:1023, h:0}), and(fromInt(a[i]), {l:$intern_5, m:1023, h:0})), and(fromInt(res[index_0]), {l:$intern_5, m:1023, h:0})), and(fromInt(toInt(carry)), {l:$intern_5, m:1023, h:0}));
    res[index_0] = toInt(carry);
    carry = shru(carry, 32);
    ++index_0;
    carry = add_0(carry, and(fromInt(res[index_0]), {l:$intern_5, m:1023, h:0}));
    res[index_0] = toInt(carry);
    carry = shru(carry, 32);
  }
  return res;
}

var bigFivePows, bigTenPows;
function $containsEntry(this$static, entry){
  var key_0, ourValue, value_0;
  key_0 = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_2(key_0);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key_0)) {
    return false;
  }
  return true;
}

function $equals_2(this$static, obj){
  var entry, entry$iterator, otherMap;
  if (obj === this$static) {
    return true;
  }
  if (!instanceOf(obj, 41)) {
    return false;
  }
  otherMap = dynamicCast(obj, 41);
  if (this$static.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next(), 18);
    if (!$containsEntry(this$static, entry)) {
      return false;
    }
  }
  return true;
}

function $implFindEntry(this$static, key_0){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext();) {
    entry = dynamicCast(iter.next(), 18);
    k = entry.getKey();
    if (maskUndefined(key_0) === maskUndefined(k) || key_0 != null && equals_Ljava_lang_Object__Z__devirtual$(key_0, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_1(this$static){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_1('{');
  comma = false;
  for (entry$iterator = this$static.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next(), 18);
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_0(sb, $toString_2(this$static, entry.getKey()));
    sb.string += '=';
    $append_0(sb, $toString_2(this$static, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':($clinit_String() , '' + o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(287, 1, $intern_29);
_.containsKey = function containsKey(key_0){
  return !!$implFindEntry(this, key_0);
}
;
_.equals$ = function equals_31(obj){
  return $equals_2(this, obj);
}
;
_.get_2 = function get_7(key_0){
  return getEntryValueOrNull($implFindEntry(this, key_0));
}
;
_.hashCode$ = function hashCode_32(){
  return hashCode_35(this.entrySet_0());
}
;
_.put = function put_1(key_0, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.size_1 = function size_9(){
  return this.entrySet_0().size_1();
}
;
_.toString$ = function toString_42(){
  return $toString_1(this);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 287);
function $containsKey(this$static, key_0){
  return isJavaString(key_0)?$hasStringValue(this$static, key_0):!!$getEntry(this$static.hashCodeMap, key_0);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_2(this$static, key_0){
  return isJavaString(key_0)?$getStringValue(this$static, key_0):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key_0));
}

function $getStringValue(this$static, key_0){
  return key_0 == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_4(key_0);
}

function $hasStringValue(this$static, key_0){
  return key_0 == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_4(key_0) === undefined);
}

function $put_0(this$static, key_0, value_0){
  return isJavaString(key_0)?$putStringValue(this$static, key_0, value_0):$put_1(this$static.hashCodeMap, key_0, value_0);
}

function $putStringValue(this$static, key_0, value_0){
  return key_0 == null?$put_1(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key_0, value_0);
}

function $remove_2(this$static, key_0){
  return $remove_5(this$static.hashCodeMap, key_0);
}

function $removeStringValue(this$static, key_0){
  return key_0 == null?$remove_5(this$static.hashCodeMap, null):this$static.stringMap.remove_0(key_0);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate_0.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate_0.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

defineClass(123, 287, $intern_29);
_.containsKey = function containsKey_0(key_0){
  return $containsKey(this, key_0);
}
;
_.entrySet_0 = function entrySet_1(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_2 = function get_8(key_0){
  return $get_2(this, key_0);
}
;
_.put = function put_2(key_0, value_0){
  return $putStringValue(this, key_0, value_0);
}
;
_.size_1 = function size_10(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 123);
function $contains(this$static, o){
  if (instanceOf(o, 18)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 18));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(78, 289, $intern_30, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_7(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_11(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 78);
function $hasNext_1(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_0(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext_1(this$static)) , dynamicCast(this$static.current.next(), 18);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(97, 1, $intern_23, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_4(){
  return $hasNext_1(this);
}
;
_.next = function next_5(){
  return $next_0(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 97);
function $hasNext_2(this$static){
  return this$static.i < this$static.this$01_0.size_1();
}

function $next_1(this$static){
  checkCriticalElement(this$static.hasNext());
  return this$static.this$01_0.get_3(this$static.last = this$static.i++);
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(45, 1, $intern_23, AbstractList$IteratorImpl);
_.hasNext = function hasNext_5(){
  return $hasNext_2(this);
}
;
_.next = function next_6(){
  return $next_1(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 45);
function $next_2(this$static){
  return checkCriticalElement(this$static.i < this$static.this$01_0.size_1()) , this$static.this$01_0.get_3(this$static.last = this$static.i++);
}

function $previous(this$static){
  checkCriticalElement(this$static.i > 0);
  return this$static.this$01.get_3(this$static.last = --this$static.i);
}

function $set_0(this$static, o){
  checkState(this$static.last != -1);
  this$static.this$01.set_0(this$static.last, o);
}

function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(67, 45, $intern_33, AbstractList$ListIteratorImpl);
_.hasNext = function hasNext_6(){
  return this.i < this.this$01_0.size_1();
}
;
_.hasPrevious = function hasPrevious_0(){
  return this.i > 0;
}
;
_.next = function next_7(){
  return $next_2(this);
}
;
_.previous = function previous_1(){
  return $previous(this);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 67);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(90, 289, $intern_30, AbstractMap$1);
_.contains_0 = function contains_1(key_0){
  return $containsKey(this.this$01, key_0);
}
;
_.iterator = function iterator_8(){
  return $iterator(this);
}
;
_.size_1 = function size_12(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 90);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(126, 1, $intern_23, AbstractMap$1$1);
_.hasNext = function hasNext_7(){
  return $hasNext_1(this.val$outerIter2);
}
;
_.next = function next_8(){
  var entry;
  entry = $next_0(this.val$outerIter2);
  return entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 126);
defineClass(124, 1, $intern_31);
_.equals$ = function equals_32(other){
  var entry;
  if (!instanceOf(other, 18)) {
    return false;
  }
  entry = dynamicCast(other, 18);
  return equals_40(this.key, entry.getKey()) && equals_40(this.value_0, entry.getValue());
}
;
_.getKey = function getKey_1(){
  return this.key;
}
;
_.getValue = function getValue_1(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_33(){
  return hashCode_43(this.key) ^ hashCode_43(this.value_0);
}
;
_.setValue = function setValue_1(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_43(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 124);
function AbstractMap$SimpleEntry(key_0, value_0){
  this.key = key_0;
  this.value_0 = value_0;
}

defineClass(125, 124, $intern_31, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 125);
defineClass(291, 1, $intern_31);
_.equals$ = function equals_33(other){
  var entry;
  if (!instanceOf(other, 18)) {
    return false;
  }
  entry = dynamicCast(other, 18);
  return equals_40(this.val$key2, entry.getKey()) && equals_40(this.this$01.get_4(this.val$key2), entry.getValue());
}
;
_.hashCode$ = function hashCode_34(){
  return hashCode_43(this.val$key2) ^ hashCode_43(this.this$01.get_4(this.val$key2));
}
;
_.toString$ = function toString_44(){
  return this.val$key2 + '=' + this.this$01.get_4(this.val$key2);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 291);
function $add_4(this$static, index_0, o){
  checkPositionIndex(index_0, this$static.array.length);
  splice_0(this$static.array, index_0, 0, o);
}

function $add_5(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $get_3(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $remove_3(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $set_1(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(46, 290, $intern_37, ArrayList);
_.add_0 = function add_8(index_0, o){
  $add_4(this, index_0, o);
}
;
_.add_1 = function add_9(o){
  return $add_5(this, o);
}
;
_.get_3 = function get_9(index_0){
  return $get_3(this, index_0);
}
;
_.isEmpty = function isEmpty_3(){
  return this.array.length == 0;
}
;
_.set_0 = function set_4(index_0, o){
  return $set_1(this, index_0, o);
}
;
_.size_1 = function size_13(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 46);
function Arrays$ArrayList(array){
  this.array = array;
}

defineClass(116, 290, $intern_37, Arrays$ArrayList);
_.get_3 = function get_10(index_0){
  return checkElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.set_0 = function set_5(index_0, value_0){
  var was;
  was = (checkElementIndex(index_0, this.array.length) , this.array[index_0]);
  setCheck(this.array, index_0, value_0);
  return was;
}
;
_.size_1 = function size_14(){
  return this.array.length;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 116);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
  new Collections$EmptyMap;
  EMPTY_SET = new Collections$EmptySet;
}

function hashCode_35(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_36(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

var EMPTY_LIST, EMPTY_SET;
function Collections$EmptyList(){
}

defineClass(133, 290, $intern_37, Collections$EmptyList);
_.get_3 = function get_11(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_9(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_3(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_15(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 133);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(134, 1, $intern_33, Collections$EmptyListIterator);
_.hasNext = function hasNext_8(){
  return false;
}
;
_.hasPrevious = function hasPrevious_1(){
  return false;
}
;
_.next = function next_9(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_2(){
  throw new NoSuchElementException;
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 134);
function Collections$EmptyMap(){
}

defineClass(136, 287, {3:1, 41:1}, Collections$EmptyMap);
_.containsKey = function containsKey_1(key_0){
  return false;
}
;
_.entrySet_0 = function entrySet_2(){
  return $clinit_Collections() , EMPTY_SET;
}
;
_.get_2 = function get_12(key_0){
  return null;
}
;
_.size_1 = function size_16(){
  return 0;
}
;
var Ljava_util_Collections$EmptyMap_2_classLit = createForClass('java.util', 'Collections/EmptyMap', 136);
function Collections$EmptySet(){
}

defineClass(135, 289, {3:1, 33:1}, Collections$EmptySet);
_.contains_0 = function contains_2(object){
  return false;
}
;
_.iterator = function iterator_10(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_17(){
  return 0;
}
;
var Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', 135);
function $add_6(){
  throw new UnsupportedOperationException;
}

function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(99, 1, {});
_.equals$ = function equals_34(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_37(){
  return getHashCode(this);
}
;
_.iterator = function iterator_11(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.toString$ = function toString_45(){
  return this.coll.toString$();
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 99);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(79, 1, $intern_23, Collections$UnmodifiableCollectionIterator);
_.hasNext = function hasNext_9(){
  return this.it.hasNext();
}
;
_.next = function next_10(){
  return this.it.next();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 79);
defineClass(137, 99, {8:1});
_.add_1 = function add_10(o){
  return $add_6();
}
;
_.equals$ = function equals_35(o){
  return $equals(this.list, o);
}
;
_.hashCode$ = function hashCode_38(){
  return hashCode_36(this.list);
}
;
_.isEmpty = function isEmpty_4(){
  return this.list.array.length == 0;
}
;
_.iterator = function iterator_12(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.listIterator = function listIterator_4(){
  return new Collections$UnmodifiableListIterator(new AbstractList$ListIteratorImpl(this.list, 0));
}
;
_.listIterator_0 = function listIterator_5(from){
  return new Collections$UnmodifiableListIterator(new AbstractList$ListIteratorImpl(this.list, from));
}
;
_.size_1 = function size_18(){
  return this.coll.size_1();
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 137);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(101, 79, $intern_33, Collections$UnmodifiableListIterator);
_.hasNext = function hasNext_10(){
  return this.it.hasNext();
}
;
_.hasPrevious = function hasPrevious_2(){
  return this.lit.i > 0;
}
;
_.next = function next_11(){
  return this.it.next();
}
;
_.previous = function previous_3(){
  return $previous(this.lit);
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 101);
function $get_4(this$static, key_0){
  return $get_2(this$static.map_0, key_0);
}

function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(138, 1, $intern_29, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_3(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(new AbstractHashMap$EntrySet(this.map_0)));
  return this.entrySet;
}
;
_.equals$ = function equals_36(o){
  return $equals_2(this.map_0, o);
}
;
_.get_2 = function get_13(key_0){
  return $get_4(this, key_0);
}
;
_.hashCode$ = function hashCode_39(){
  return hashCode_35(new AbstractHashMap$EntrySet(this.map_0));
}
;
_.put = function put_3(key_0, value_0){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_19(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_46(){
  return $toString_1(this.map_0);
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 138);
function Collections$UnmodifiableSet(set_0){
  Collections$UnmodifiableCollection.call(this, set_0);
}

defineClass(100, 99, $intern_30, Collections$UnmodifiableSet);
_.equals$ = function equals_37(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_40(){
  return this.coll.hashCode$();
}
;
_.isEmpty = function isEmpty_5(){
  return this.coll.isEmpty();
}
;
_.iterator = function iterator_13(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_20(){
  return this.coll.size_1();
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 100);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  Collections$UnmodifiableSet.call(this, s);
}

defineClass(139, 100, $intern_30, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_14(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 139);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(142, 1, $intern_23, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.hasNext = function hasNext_11(){
  return this.val$it2.hasNext();
}
;
_.next = function next_12(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(dynamicCast(this.val$it2.next(), 18));
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 142);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(140, 1, $intern_31, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals$ = function equals_38(o){
  return this.entry.equals$(o);
}
;
_.getKey = function getKey_2(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_2(){
  return this.entry.getValue();
}
;
_.hashCode$ = function hashCode_41(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_2(value_0){
  throw new UnsupportedOperationException;
}
;
_.toString$ = function toString_47(){
  return this.entry.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 140);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(141, 137, {8:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 141);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(195, 13, $intern_1, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 195);
function Date_0(date){
  this.jsdate = create(toDouble(date));
}

function padTwo(number){
  return number < 10?'0' + number:($clinit_String() , '' + number);
}

defineClass(55, 1, {3:1, 11:1, 55:1}, Date_0);
_.equals$ = function equals_39(obj){
  return instanceOf(obj, 55) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, 55).jsdate.getTime()));
}
;
_.hashCode$ = function hashCode_42(){
  var time;
  time = fromDouble(this.jsdate.getTime());
  return toInt(xor(time, shru(time, 32)));
}
;
_.toString$ = function toString_48(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:($clinit_String() , '' + (offset < 0?-offset:offset) % 60);
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 55);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function EmptyStackException(){
  RuntimeException.call(this);
}

defineClass(249, 13, $intern_1, EmptyStackException);
var Ljava_util_EmptyStackException_2_classLit = createForClass('java.util', 'EmptyStackException', 249);
function $equals_3(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key_0){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key_0);
  return hashCode | 0;
}

function HashMap(){
  $reset(this);
}

defineClass(22, 123, {3:1, 41:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 22);
function $add_7(this$static, o){
  var old;
  old = $put_0(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_4(this$static, o){
  return $remove_2(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(68, 289, {3:1, 33:1}, HashSet);
_.contains_0 = function contains_3(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_6(){
  return this.map_0.size_0 == 0;
}
;
_.iterator = function iterator_15(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.size_1 = function size_21(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_49(){
  return $toString(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 68);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key_0){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key_0 == null?'0':($clinit_String() , '' + $getHashCode(key_0))) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_3(key_0, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key_0, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key_0 == null?'0':($clinit_String() , '' + $getHashCode(key_0)));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_3(key_0, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key_0, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_5(this$static, key_0){
  var chain, entry, hashCode, i;
  hashCode = !key_0?'0':($clinit_String() , '' + $getHashCode(key_0));
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_3(key_0, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(106, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 106);
function $hasNext_3(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_0, 18, 0, 0, 1);
}

defineClass(158, 1, $intern_23, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_12(){
  return $hasNext_3(this);
}
;
_.next = function next_13(){
  return checkCriticalElement($hasNext_3(this)) , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 158);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(156, 106, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 156);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(){
  ArrayList.call(this);
}

defineClass(157, 46, $intern_37, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 157);
function InternalJsMapFactory(){
}

defineClass(153, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 153);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate_0 = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate_0;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(155, 153, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 155);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(154, 153, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 154);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_2(this$static, key_0, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key_0];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_2(this$static, key_0, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_6(this$static, key_0){
  var value_0;
  value_0 = this$static.backingMap[key_0];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key_0];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_2(this$static, key_0, value_0){
  this$static.backingMap[key_0] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(91, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_4 = function get_14(key_0){
  return this.backingMap[key_0];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key_0){
  return new InternalJsStringMap$2(this, key_0);
}
;
_.put_0 = function put_4(key_0, value_0){
  return $put_2(this, key_0, value_0);
}
;
_.remove_0 = function remove_1(key_0){
  return $remove_6(this, key_0);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 91);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(146, 1, $intern_23, InternalJsStringMap$1);
_.hasNext = function hasNext_13(){
  return this.i < this.val$keys2.length;
}
;
_.next = function next_14(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.i++]);
}
;
_.i = 0;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 146);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(102, 291, $intern_31, InternalJsStringMap$2);
_.getKey = function getKey_3(){
  return this.val$key2;
}
;
_.getValue = function getValue_3(){
  return this.this$01.get_4(this.val$key2);
}
;
_.setValue = function setValue_3(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 102);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(143, 91, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key_0 in this.backingMap) {
    if (key_0.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key_0.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_4 = function get_15(key_0){
  return this.backingMap[':' + key_0];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1;
}
;
_.put_0 = function put_5(key_0, value_0){
  return $put_2(this, ':' + key_0, value_0);
}
;
_.remove_0 = function remove_2(key_0){
  return $remove_6(this, ':' + key_0);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 143);
function InternalJsStringMap$InternalJsStringMapLegacy$1(){
  ArrayList.call(this);
}

defineClass(145, 46, $intern_37, InternalJsStringMap$InternalJsStringMapLegacy$1);
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 145);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(144, 91, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 144);
var Ljava_util_Iterator_2_classLit = createForInterface('java.util', 'Iterator');
var Ljava_util_List_2_classLit = createForInterface('java.util', 'List');
var Ljava_util_ListIterator_2_classLit = createForInterface('java.util', 'ListIterator');
var Ljava_util_Map_2_classLit = createForInterface('java.util', 'Map');
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(70, 13, $intern_1, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 70);
function equals_40(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_43(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

var Ljava_util_Set_2_classLit = createForInterface('java.util', 'Set');
function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new ArrayIndexOutOfBoundsException;
  }
}

defineClass(227, 290, $intern_37);
_.add_0 = function add_11(index_0, o){
  checkArrayElementIndex(index_0, this.arrayList.array.length + 1);
  $add_4(this.arrayList, index_0, o);
}
;
_.add_1 = function add_12(o){
  return $add_5(this.arrayList, o);
}
;
_.get_3 = function get_16(index_0){
  checkArrayElementIndex(index_0, this.arrayList.array.length);
  return $get_3(this.arrayList, index_0);
}
;
_.isEmpty = function isEmpty_7(){
  return this.arrayList.array.length == 0;
}
;
_.iterator = function iterator_16(){
  return new AbstractList$IteratorImpl(this.arrayList);
}
;
_.set_0 = function set_6(index_0, elem){
  checkArrayElementIndex(index_0, this.arrayList.array.length);
  return $set_1(this.arrayList, index_0, elem);
}
;
_.size_1 = function size_22(){
  return this.arrayList.array.length;
}
;
_.toString$ = function toString_50(){
  return $toString(this.arrayList);
}
;
var Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', 227);
function $pop(this$static){
  var sz;
  sz = this$static.arrayList.array.length;
  if (sz > 0) {
    return checkArrayElementIndex(sz - 1, this$static.arrayList.array.length) , $remove_3(this$static.arrayList, sz - 1);
  }
   else {
    throw new EmptyStackException;
  }
}

function $push(this$static, o){
  $add_5(this$static.arrayList, o);
  return o;
}

function Stack(){
  this.arrayList = new ArrayList;
}

defineClass(228, 227, $intern_37, Stack);
var Ljava_util_Stack_2_classLit = createForClass('java.util', 'Stack', 228);
var I_classLit = createForPrimitive('int', 'I'), Z_classLit = createForPrimitive('boolean', 'Z'), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), B_classLit = createForPrimitive('byte', 'B'), J_classLit = createForPrimitive('long', 'J'), D_classLit = createForPrimitive('double', 'D'), F_classLit = createForPrimitive('float', 'F'), S_classLit = createForPrimitive('short', 'S'), C_classLit = createForPrimitive('char', 'C'), Ljava_lang_Void_2_classLit = createForClass('java.lang', 'Void', null), V_classLit = createForPrimitive('void', 'V');
var $entry = entry_0;
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']], [['locale', 'default'], ['user.agent', 'ie10']], [['locale', 'default'], ['user.agent', 'ie8']], [['locale', 'default'], ['user.agent', 'ie9']], [['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=bfuniteu-0.js

