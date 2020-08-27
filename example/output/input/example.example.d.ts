// Code generated by protoc-gen-typescript. DO NOT EDIT.

declare namespace example {

    export interface SearchRequest {
        query?: string;
        page_number?: number;
        result_per_page?: number;
        corpus?: SearchRequest.Corpus;
        xyz?: { [key: string]: number };
        zytes?: Uint8Array;
    }

    export namespace SearchRequest {
        export enum Corpus {
            UNIVERSAL = "UNIVERSAL",
            WEB = "WEB",
            IMAGES = "IMAGES",
            LOCAL = "LOCAL",
            NEWS = "NEWS",
            PRODUCTS = "PRODUCTS",
            VIDEO = "VIDEO",
        }
        export interface XyzEntry {
            key?: string;
            value?: number;
        }

    }

    export interface SearchResponse {
        results?: Array<string>;
        num_results?: number;
        original_request?: SearchRequest;
    }

}

