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

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { ApiResponse } from '../model/apiResponse';
import { ServiceMetricValue } from '../model/serviceMetricValue';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';
import { ApiKeyAuth } from '../model/models';

let defaultBasePath = 'https://api.mackerelio.com/api/v0';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ServiceMetricApiApiKeys {
    apiKey,
}

export class ServiceMetricApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'apiKey': new ApiKeyAuth('header', 'X-Api-Key'),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: ServiceMetricApiApiKeys, value: string) {
        (this.authentications as any)[ServiceMetricApiApiKeys[key]].apiKey = value;
    }

    /**
     * 
     * @param serviceName 
     * @param serviceMetrics 
     */
    public async postServiceMetric (serviceName: string, serviceMetrics: Array<ServiceMetricValue>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiResponse;  }> {
        const localVarPath = this.basePath + '/services/{serviceName}/tsdb'
            .replace('{' + 'serviceName' + '}', encodeURIComponent(String(serviceName)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'serviceName' is not null or undefined
        if (serviceName === null || serviceName === undefined) {
            throw new Error('Required parameter serviceName was null or undefined when calling postServiceMetric.');
        }

        // verify required parameter 'serviceMetrics' is not null or undefined
        if (serviceMetrics === null || serviceMetrics === undefined) {
            throw new Error('Required parameter serviceMetrics was null or undefined when calling postServiceMetric.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(serviceMetrics, "Array<ServiceMetricValue>")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));

        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ApiResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ApiResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
}
