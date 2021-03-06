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

import { Alert } from './alert';

export class AlertsResponse {
    'alerts'?: Array<Alert>;
    'nextId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alerts",
            "baseName": "alerts",
            "type": "Array<Alert>"
        },
        {
            "name": "nextId",
            "baseName": "nextId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AlertsResponse.attributeTypeMap;
    }
}

