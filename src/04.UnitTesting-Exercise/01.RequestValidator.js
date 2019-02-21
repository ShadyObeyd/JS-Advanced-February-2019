function solve(obj) {
    if(!obj.method || (obj.method !== 'GET' && obj.method !== 'POST' && obj.method !== 'DELETE' && obj.method !== 'CONNECT')){
        throw  new Error('Invalid request header: Invalid Method');
    }

    let uriPattern = /^[\w.]+$/g;

    if(!obj.uri || (obj.uri !== '*' && !obj.uri.match(uriPattern))){
        throw  new Error('Invalid request header: Invalid URI');
    }

    if(!obj.version || (obj.version !== 'HTTP/0.9' && obj.version !== 'HTTP/1.0' && obj.version !== 'HTTP/1.1' && obj.version !== 'HTTP/2.0')){
        throw  new Error('Invalid request header: Invalid Version');
    }
    let messagePattern = /^[^<>\\&'"]*$/g;

    if(!obj.hasOwnProperty('message') || (!obj.message.match(messagePattern) && obj.message !== '')){
        throw  new Error('Invalid request header: Invalid Message');
    }

    return obj;
}
let inputObj = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};
console.log(solve(inputObj));