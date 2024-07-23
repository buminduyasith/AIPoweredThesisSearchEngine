// fetchPost.ts

export interface FetchPostOptions {
    headers?: HeadersInit;
    body?: any;
}

export async function searchThesis(url: string, data: any, options?: FetchPostOptions): Promise<Response> {
    const defaultHeaders: HeadersInit = {
        'Content-Type': 'application/json',
        ...options?.headers,
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
}