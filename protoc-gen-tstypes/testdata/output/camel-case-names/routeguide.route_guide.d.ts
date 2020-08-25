// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace routeguide {

    // Points are represented as latitude-longitude pairs in the E7 representation
    // (degrees multiplied by 10**7 and rounded to the nearest integer).
    // Latitudes should be in the range +/- 90 degrees and longitude should be in
    // the range +/- 180 degrees (inclusive).
    export interface Point {
        latitude?: number;
        longitude?: number;
    }

    // A latitude-longitude rectangle, represented as two diagonally opposite
    // points "lo" and "hi".
    export interface Rectangle {
        // One corner of the rectangle.
        lo?: Point;
        // The other corner of the rectangle.
        hi?: Point;
    }

    // A feature names something at a given point.
    //
    // If a feature could not be named, the name is empty.
    export interface Feature {
        // The name of the feature.
        name?: string;
        // The point where the feature is detected.
        location?: Point;
    }

    // A RouteNote is a message sent while at a given point.
    export interface RouteNote {
        // The location from which the message is sent.
        location?: Point;
        // The message to be sent.
        message?: string;
    }

    // A RouteSummary is received in response to a RecordRoute rpc.
    //
    // It contains the number of individual points received, the number of
    // detected features, and the total distance covered as the cumulative sum of
    // the distance between each point.
    export interface RouteSummary {
        // The number of points received.
        pointCount?: number;
        // The number of known features passed while traversing the route.
        featureCount?: number;
        // The distance covered in metres.
        distance?: number;
        // The duration of the traversal in seconds.
        elapsedTime?: number;
    }

    export interface RouteGuideService {
        GetFeature: (r:Point) => { response: Feature, code: number, message: string, detail: any };
        ListFeatures: (r:Rectangle, cb:(a:{value: { response: Feature, code: number, message: string, detail: any }, done: boolean}) => void) => void;
        RecordRoute: (r:() => {value: Point, done: boolean}) => { response: RouteSummary, code: number, message: string, detail: any };
        RouteChat: (r:() => {value: RouteNote, done: boolean}, cb:(a:{value: { response: RouteNote, code: number, message: string, detail: any }, done: boolean}) => void) => void;
    }
}

