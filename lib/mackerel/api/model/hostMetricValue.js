"use strict";
/**
 * Makerel API
 * This is part of Makerel API.
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var HostMetricValue = /** @class */ (function () {
    function HostMetricValue() {
    }
    HostMetricValue.getAttributeTypeMap = function () {
        return HostMetricValue.attributeTypeMap;
    };
    HostMetricValue.discriminator = undefined;
    HostMetricValue.attributeTypeMap = [
        {
            "name": "hostId",
            "baseName": "hostId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        }
    ];
    return HostMetricValue;
}());
exports.HostMetricValue = HostMetricValue;
