import * as google_protobuf from "google/protobuf/timestamp"

// Code generated by protoc-gen-typescript. DO NOT EDIT.

declare namespace example {

    export interface SearchRequest {
        query?: string;
        page_number?: number;
        result_per_page?: number;
        corpus?: SearchRequest.Corpus;
        sent_at?: google_protobuf.Timestamp;
        xyz?: { [key: string]: number };
        zytes?: Uint8Array;
    }

    export namespace SearchRequest {
        export enum Corpus {
            UNIVERSAL = 0,
            WEB = 1,
            IMAGES = 2,
            LOCAL = 3,
            NEWS = 4,
            PRODUCTS = 5,
            VIDEO = 6,
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

