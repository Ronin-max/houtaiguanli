const baseURL = 'http://open.duyiedu.com';
const appkey = 'Ronin_1603886623108';

//get请求获取数据
export async function get (url,params={}){
    let lastURL = url + '?';
    for (const prop in params) {
        lastURL += prop + '=' + params[prop] + '&';
    }
    return await fetch(baseURL + lastURL).then(data=>data.json());
}

//登录请求
export async function login (params={}){
    let url = '/api/student/stuLogin';
    const reqParams = JSON.stringify({
        appkey,
        ...params
    })
    return await fetch(baseURL + url,{
        method:'POST',
        body:reqParams
    }).then(data=>data.json());
}

//注册请求
export async function register (params){
    let url = '/api/student/stuRegister';
    const reqParams = JSON.stringify({
        appkey,
        ...params
    })
    return await fetch(baseURL + url,{
        method:'POST',
        body:reqParams
    }).then(data=>data.json());
}