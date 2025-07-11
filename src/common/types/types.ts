export type RequestStatus = "idle" | "loading" | "succeeded" | "failed"

export type Nullable<T> = T | null

export type ResponseType<T> = {
    info: InfoType;
    results: T[];
};

type InfoType = {
    count: number;
    pages: number;
    next: Nullable<string>;
    prev: Nullable<string>;
};
