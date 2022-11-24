import request from 'request';

export function post(url: string, data: request.CoreOptions) : Promise<string> {
    return new Promise((resolve, reject) => {
        request.post(url, data, (error: string, response: request.Response, body: string) => {
            if (error) reject(error) 
            else resolve(body);
        });
    });
}