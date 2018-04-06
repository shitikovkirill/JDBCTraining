"use strict"
define("shitikovkirill-github-io/app",["exports","shitikovkirill-github-io/resolver","ember-load-initializers","shitikovkirill-github-io/config/environment"],function(e,i,t,o){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:i.default});(0,t.default)(r,o.default.modulePrefix),e.default=r}),define("shitikovkirill-github-io/helpers/app-version",["exports","shitikovkirill-github-io/config/environment","ember-cli-app-version/utils/regexp"],function(e,i,t){Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r
var o=i.default.APP.version
function r(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return i.hideSha?o.match(t.versionRegExp)[0]:i.hideVersion?o.match(t.shaRegExp)[0]:o}e.default=Ember.Helper.helper(r)}),define("shitikovkirill-github-io/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i.default}),define("shitikovkirill-github-io/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i.default}),define("shitikovkirill-github-io/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","shitikovkirill-github-io/config/environment"],function(e,i,t){Object.defineProperty(e,"__esModule",{value:!0})
var o=void 0,r=void 0
t.default.APP&&(o=t.default.APP.name,r=t.default.APP.version),e.default={name:"App Version",initialize:(0,i.default)(o,r)}}),define("shitikovkirill-github-io/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",i.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("shitikovkirill-github-io/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:i.default}}),define("shitikovkirill-github-io/initializers/export-application-global",["exports","shitikovkirill-github-io/config/environment"],function(e,i){function t(){var e=arguments[1]||arguments[0]
if(!1!==i.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var o,r=i.default.exportApplicationGlobal
o="string"==typeof r?r:Ember.String.classify(i.default.modulePrefix),t[o]||(t[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default={name:"export-application-global",initialize:t}}),define("shitikovkirill-github-io/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:i.default}}),define("shitikovkirill-github-io/resolver",["exports","ember-resolver"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i.default}),define("shitikovkirill-github-io/router",["exports","shitikovkirill-github-io/config/environment"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Router.extend({location:i.default.locationType,rootURL:i.default.rootURL})
t.map(function(){}),e.default=t}),define("shitikovkirill-github-io/services/ajax",["exports","ember-ajax/services/ajax"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}})}),define("shitikovkirill-github-io/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"L2udq0ER",block:'{"symbols":[],"statements":[[1,[18,"welcome-page"],false],[0,"\\n"],[0,"\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"shitikovkirill-github-io/templates/application.hbs"}})}),define("shitikovkirill-github-io/config/environment",[],function(){try{var e="shitikovkirill-github-io/config/environment",i=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(unescape(i))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("shitikovkirill-github-io/app").default.create({name:"shitikovkirill-github-io",version:"0.0.0+003356bb"})
