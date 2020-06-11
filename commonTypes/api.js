"use strict";
exports.__esModule = true;
exports.EndpointPrefix = exports.StatusCodes = exports.SearchParams = exports.PageParams = void 0;
var PageParams;
(function (PageParams) {
    PageParams["page"] = "page";
})(PageParams = exports.PageParams || (exports.PageParams = {}));
var SearchParams;
(function (SearchParams) {
    SearchParams["query"] = "query";
})(SearchParams = exports.SearchParams || (exports.SearchParams = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["ok"] = 200] = "ok";
    StatusCodes[StatusCodes["notFound"] = 404] = "notFound";
})(StatusCodes = exports.StatusCodes || (exports.StatusCodes = {}));
var EndpointPrefix;
(function (EndpointPrefix) {
    EndpointPrefix["api"] = "/api";
    EndpointPrefix["search"] = "/search";
    EndpointPrefix["posters"] = "/posters";
    EndpointPrefix["movie"] = "/movie";
    EndpointPrefix["discover"] = "/discover";
    EndpointPrefix["similar"] = "/similar";
    EndpointPrefix["topRated"] = "/top_rated";
    EndpointPrefix["trending"] = "/trending";
    EndpointPrefix["nowPlaying"] = "/now_playing";
    EndpointPrefix["upcoming"] = "/upcoming";
})(EndpointPrefix = exports.EndpointPrefix || (exports.EndpointPrefix = {}));
