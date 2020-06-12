"use strict";
exports.__esModule = true;
exports.ENDPOINT_PRE = exports.STATUS_CODES = exports.SEARCH_PARAMS = exports.PAGE_PARAMS = void 0;
var PAGE_PARAMS;
(function (PAGE_PARAMS) {
    PAGE_PARAMS["page"] = "page";
})(PAGE_PARAMS = exports.PAGE_PARAMS || (exports.PAGE_PARAMS = {}));
var SEARCH_PARAMS;
(function (SEARCH_PARAMS) {
    SEARCH_PARAMS["query"] = "query";
})(SEARCH_PARAMS = exports.SEARCH_PARAMS || (exports.SEARCH_PARAMS = {}));
var STATUS_CODES;
(function (STATUS_CODES) {
    STATUS_CODES[STATUS_CODES["ok"] = 200] = "ok";
    STATUS_CODES[STATUS_CODES["notFound"] = 404] = "notFound";
})(STATUS_CODES = exports.STATUS_CODES || (exports.STATUS_CODES = {}));
var ENDPOINT_PRE;
(function (ENDPOINT_PRE) {
    ENDPOINT_PRE["api"] = "/api";
    ENDPOINT_PRE["search"] = "/search";
    ENDPOINT_PRE["posters"] = "/posters";
    ENDPOINT_PRE["movie"] = "/movie";
    ENDPOINT_PRE["discover"] = "/discover";
    ENDPOINT_PRE["similar"] = "/similar";
    ENDPOINT_PRE["topRated"] = "/top_rated";
    ENDPOINT_PRE["trending"] = "/trending";
    ENDPOINT_PRE["nowPlaying"] = "/now_playing";
    ENDPOINT_PRE["upcoming"] = "/upcoming";
})(ENDPOINT_PRE = exports.ENDPOINT_PRE || (exports.ENDPOINT_PRE = {}));
