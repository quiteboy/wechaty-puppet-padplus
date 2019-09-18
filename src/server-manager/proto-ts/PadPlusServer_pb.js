/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.PadPlusServer.ApiType', null, global);
goog.exportSymbol('proto.PadPlusServer.InitConfig', null, global);
goog.exportSymbol('proto.PadPlusServer.RequestObject', null, global);
goog.exportSymbol('proto.PadPlusServer.ResponseObject', null, global);
goog.exportSymbol('proto.PadPlusServer.ResponseType', null, global);
goog.exportSymbol('proto.PadPlusServer.StreamResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PadPlusServer.RequestObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PadPlusServer.RequestObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PadPlusServer.RequestObject.displayName = 'proto.PadPlusServer.RequestObject';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PadPlusServer.RequestObject.prototype.toObject = function(opt_includeInstance) {
  return proto.PadPlusServer.RequestObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PadPlusServer.RequestObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PadPlusServer.RequestObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    uin: jspb.Message.getField(msg, 1),
    requestid: jspb.Message.getField(msg, 10),
    token: jspb.Message.getField(msg, 20),
    apitype: jspb.Message.getField(msg, 30),
    params: jspb.Message.getField(msg, 40)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PadPlusServer.RequestObject}
 */
proto.PadPlusServer.RequestObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PadPlusServer.RequestObject;
  return proto.PadPlusServer.RequestObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PadPlusServer.RequestObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PadPlusServer.RequestObject}
 */
proto.PadPlusServer.RequestObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUin(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 30:
      var value = /** @type {!proto.PadPlusServer.ApiType} */ (reader.readEnum());
      msg.setApitype(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.setParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PadPlusServer.RequestObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PadPlusServer.RequestObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PadPlusServer.RequestObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PadPlusServer.RequestObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeString(
      20,
      f
    );
  }
  f = /** @type {!proto.PadPlusServer.ApiType} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeEnum(
      30,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 40));
  if (f != null) {
    writer.writeString(
      40,
      f
    );
  }
};


/**
 * optional string uin = 1;
 * @return {string}
 */
proto.PadPlusServer.RequestObject.prototype.getUin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.PadPlusServer.RequestObject.prototype.setUin = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.PadPlusServer.RequestObject.prototype.clearUin = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PadPlusServer.RequestObject.prototype.hasUin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string requestId = 10;
 * @return {string}
 */
proto.PadPlusServer.RequestObject.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.PadPlusServer.RequestObject.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.PadPlusServer.RequestObject.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PadPlusServer.RequestObject.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * required string token = 20;
 * @return {string}
 */
proto.PadPlusServer.RequestObject.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/** @param {string} value */
proto.PadPlusServer.RequestObject.prototype.setToken = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.PadPlusServer.RequestObject.prototype.clearToken = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PadPlusServer.RequestObject.prototype.hasToken = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * required ApiType apiType = 30;
 * @return {!proto.PadPlusServer.ApiType}
 */
proto.PadPlusServer.RequestObject.prototype.getApitype = function() {
  return /** @type {!proto.PadPlusServer.ApiType} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/** @param {!proto.PadPlusServer.ApiType} value */
proto.PadPlusServer.RequestObject.prototype.setApitype = function(value) {
  jspb.Message.setField(this, 30, value);
};


proto.PadPlusServer.RequestObject.prototype.clearApitype = function() {
  jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PadPlusServer.RequestObject.prototype.hasApitype = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional string params = 40;
 * @return {string}
 */
proto.PadPlusServer.RequestObject.prototype.getParams = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/** @param {string} value */
proto.PadPlusServer.RequestObject.prototype.setParams = function(value) {
  jspb.Message.setField(this, 40, value);
};


proto.PadPlusServer.RequestObject.prototype.clearParams = function() {
  jspb.Message.setField(this, 40, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PadPlusServer.RequestObject.prototype.hasParams = function() {
  return jspb.Message.getField(this, 40) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PadPlusServer.ResponseObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PadPlusServer.ResponseObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PadPlusServer.ResponseObject.displayName = 'proto.PadPlusServer.ResponseObject';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PadPlusServer.ResponseObject.prototype.toObject = function(opt_includeInstance) {
  return proto.PadPlusServer.ResponseObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PadPlusServer.ResponseObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PadPlusServer.ResponseObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getField(msg, 10)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PadPlusServer.ResponseObject}
 */
proto.PadPlusServer.ResponseObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PadPlusServer.ResponseObject;
  return proto.PadPlusServer.ResponseObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PadPlusServer.ResponseObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PadPlusServer.ResponseObject}
 */
proto.PadPlusServer.ResponseObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PadPlusServer.ResponseObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PadPlusServer.ResponseObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PadPlusServer.ResponseObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PadPlusServer.ResponseObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * required string result = 10;
 * @return {string}
 */
proto.PadPlusServer.ResponseObject.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.PadPlusServer.ResponseObject.prototype.setResult = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.PadPlusServer.ResponseObject.prototype.clearResult = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PadPlusServer.ResponseObject.prototype.hasResult = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PadPlusServer.InitConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PadPlusServer.InitConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PadPlusServer.InitConfig.displayName = 'proto.PadPlusServer.InitConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PadPlusServer.InitConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.PadPlusServer.InitConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PadPlusServer.InitConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PadPlusServer.InitConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getField(msg, 10)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PadPlusServer.InitConfig}
 */
proto.PadPlusServer.InitConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PadPlusServer.InitConfig;
  return proto.PadPlusServer.InitConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PadPlusServer.InitConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PadPlusServer.InitConfig}
 */
proto.PadPlusServer.InitConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PadPlusServer.InitConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PadPlusServer.InitConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PadPlusServer.InitConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PadPlusServer.InitConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * required string token = 10;
 * @return {string}
 */
proto.PadPlusServer.InitConfig.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.PadPlusServer.InitConfig.prototype.setToken = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.PadPlusServer.InitConfig.prototype.clearToken = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PadPlusServer.InitConfig.prototype.hasToken = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PadPlusServer.StreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PadPlusServer.StreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PadPlusServer.StreamResponse.displayName = 'proto.PadPlusServer.StreamResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PadPlusServer.StreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.PadPlusServer.StreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PadPlusServer.StreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PadPlusServer.StreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uin: jspb.Message.getField(msg, 1),
    requestid: jspb.Message.getField(msg, 10),
    data: jspb.Message.getField(msg, 20),
    responsetype: jspb.Message.getField(msg, 30)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PadPlusServer.StreamResponse}
 */
proto.PadPlusServer.StreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PadPlusServer.StreamResponse;
  return proto.PadPlusServer.StreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PadPlusServer.StreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PadPlusServer.StreamResponse}
 */
proto.PadPlusServer.StreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUin(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 30:
      var value = /** @type {!proto.PadPlusServer.ResponseType} */ (reader.readEnum());
      msg.setResponsetype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PadPlusServer.StreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PadPlusServer.StreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PadPlusServer.StreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PadPlusServer.StreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeString(
      20,
      f
    );
  }
  f = /** @type {!proto.PadPlusServer.ResponseType} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeEnum(
      30,
      f
    );
  }
};


/**
 * optional string uin = 1;
 * @return {string}
 */
proto.PadPlusServer.StreamResponse.prototype.getUin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.PadPlusServer.StreamResponse.prototype.setUin = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.PadPlusServer.StreamResponse.prototype.clearUin = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PadPlusServer.StreamResponse.prototype.hasUin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string requestId = 10;
 * @return {string}
 */
proto.PadPlusServer.StreamResponse.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.PadPlusServer.StreamResponse.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.PadPlusServer.StreamResponse.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PadPlusServer.StreamResponse.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * required string data = 20;
 * @return {string}
 */
proto.PadPlusServer.StreamResponse.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/** @param {string} value */
proto.PadPlusServer.StreamResponse.prototype.setData = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.PadPlusServer.StreamResponse.prototype.clearData = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PadPlusServer.StreamResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * required ResponseType responseType = 30;
 * @return {!proto.PadPlusServer.ResponseType}
 */
proto.PadPlusServer.StreamResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.PadPlusServer.ResponseType} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/** @param {!proto.PadPlusServer.ResponseType} value */
proto.PadPlusServer.StreamResponse.prototype.setResponsetype = function(value) {
  jspb.Message.setField(this, 30, value);
};


proto.PadPlusServer.StreamResponse.prototype.clearResponsetype = function() {
  jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PadPlusServer.StreamResponse.prototype.hasResponsetype = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * @enum {number}
 */
proto.PadPlusServer.ApiType = {
  GET_QRCODE: 0,
  RECONNECT: 1,
  LOGOUT: 2,
  INIT: 3,
  STOP: 4,
  GET_CONTACT: 10,
  SEARCH_CONTACT: 11,
  ADD_CONTACT: 12,
  ACCEPT_CONTACT: 13,
  SYNC_CONTACT: 14,
  CONTACT_ALIAS: 15,
  ADD_CHATROOM_CONTACT: 16,
  GET_ROOM_MEMBER: 30,
  ROOM_OPERATION: 31,
  CREATE_ROOM: 32,
  SET_ROOM_ANNOUNCEMENT: 33,
  GET_ROOM_ANNOUNCEMENT: 34,
  SEND_MESSAGE: 50,
  SEND_FILE: 51,
  REVOKE_MESSAGE: 52,
  GET_MESSAGE_MEDIA: 53,
  GET_ALL_LABEL: 70,
  ADD_LABEL: 71,
  MODIFY_LABEL: 72
};

/**
 * @enum {number}
 */
proto.PadPlusServer.ResponseType = {
  REQUEST_RESPONSE: 0,
  DISCONNECT: 1,
  LOGIN_QRCODE: 10,
  QRCODE_SCAN: 11,
  ACCOUNT_LOGIN: 12,
  ACCOUNT_LOGOUT: 13,
  QRCODE_LOGIN: 14,
  AUTO_LOGIN: 15,
  CONTACT_LIST: 20,
  CONTACT_MODIFY: 21,
  CONTACT_DELETE: 22,
  ROOM_MEMBER_LIST: 23,
  ROOM_MEMBER_MODIFY: 24,
  CONTACT_SEARCH: 25,
  CONTACT_ADD: 26,
  MESSAGE_RECEIVE: 30,
  STATUS_NOTIFY: 31,
  MESSAGE_MEDIA_SRC: 32
};

goog.object.extend(exports, proto.PadPlusServer);
