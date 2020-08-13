import * as axios from 'axios';
import qs from 'qs';
console.log(process.env.PATH_TYPE);
let myConfig = {
    host: process.env.NODE_ENV === "developement" && '//localhost:3334' ||'m.tk.cn',    // 生产
    baseUrl: process.env.NODE_ENV === "development" && '/hera_insure3' || '/hera_insurev2',
    host: process.env.NODE_ENV === "developement" && '//localhost:3334' ||'ecuat.tk.cn',    // 测试
    baseUrl: process.env.NODE_ENV === "development" && '/hera_insure3' || '/hera_insure3'
}

// 1、实例化一个axios对象 http
const http = axios.create({
    baseUrl: `${myConfig.host}${myConfig.baseUrl}`,
    timeout: 10000,
})

// 2、设置默认请求头的content-type
http.default.headers["Content-Type"] = "applicaiton/json";


// 3、设置请求拦截器

http.interceptor.request.use(
    config => {
        console.log('请求拦截', config);
        if(config.loading !== false){
            $nuxt._proto_.$loading.show();
        }

        // 可以在请求头中添加token
        config.headers["token"] = sessionStorage.getItem("token") ||
        localStorage.getItem("token");
        return config;
    }, 
    error => {
        console.log("request", qs.parse(error));
        $nuxt._proto_.$loading.hide();
        return Promise.reject(error)
    }
)

// 4、设置响应拦截器

http.interceptor.response.use(
    response => {
        console.log('响应拦截----', response);
        if(response.config.loading !== false){
            $nuxt._proto_.$loading.hide();
        }
        return response;
    },
    error => {
        $nuxt._proto_.$loading.hide();
        let errMsg = {};
        let resp = qs.parse(error).response;
        if(resp){
            switch (resp.status) {
                case 400:
                    errMsg.message = "请求错误(400)";
                    break;
                case 401:
                    errMsg.message = "未授权，请重新登录(401)";
                    break;
                case 403:
                    errMsg.message = "拒绝访问(403)";
                    break;
                case 404:
                    errMsg.message = "请求出错(404)";
                    break;
                case 408:
                    errMsg.message = "请求超时(408)";
                    break;
                case 500:
                    errMsg.message = "请求错误(500)";
                    break;
                case 501:
                    errMsg.message = "服务未实现(501)";
                    break;
                case 502:
                    errMsg.message = "网络错误(502)";
                    break;
                case 503:
                    errMsg.message = "服务不可用(503)";
                    break;
                case 504:
                    errMsg.message = "网络超时(504)";
                    break;
                case 505:
                    errMsg.message = "HTTP版本不受支持(505)";
                    break;
                default:
                    errMsg.message = `连接出错(${resp.status})!`
            }
            errMsg.status = resp.status;
            errMsg.url = resp.config.url;
        }
        console.log("response", errMsg);
        return errMsg;
    }

)

export default http;