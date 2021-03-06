'use strict'

const AjaxMethod = require('./src/backends/ajax')
const RestNative = require('./src/backends/restful-native')
const Collection = require('./src/collection')
const Model = require('./src/model')
const RestfulModel = require('./src/restful/model')
const RestfulCollection = require('./src/restful/collection')
const TastypieCollection = require('./src/restful/tastypie_collection')
const TastypieModel = require('./src/restful/tastypie_model')

module.exports = {
    Backends: {
		RestNative: RestNative,
		AjaxMethod: AjaxMethod
    },
    Collection: Collection,
    Model: Model,
    Restful: {
    	Collection: RestfulCollection,
    	Model: RestfulModel,
    	Tastypie: {
	    	Collection: TastypieCollection,
    		Model: TastypieModel
    	}
    }
}
