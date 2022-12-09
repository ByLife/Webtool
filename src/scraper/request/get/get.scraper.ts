import request from 'request';

export function get(url: string) : Promise<string> {
    return new Promise((resolve, reject) => {
        request(url, (error: string, response: request.Response, body: string) => {
            if (error) reject(error) 
            else resolve(body);
        });
    });
}
