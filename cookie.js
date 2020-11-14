/*
 * @Author: whisperSec
 * @objectDescription: 文件描述
 * @Date: 2020-10-31 15:26:59
 * @LastEditors: 最后编辑者
 * @LastEditTime: 2020-10-31 16:53:03
 */

function setCookie(key, value){
    document.cookie = `${key}=${decodeURIComponent(value)};path=/`;
}

function getCookie(key){
    if(document.cookie.length > 0){
        let kname = key + "=";
        let inx = document.cookie.indexOf(kname);
        if(inx !== -1){
            let stx = inx + kname.length;
            let enx = document.cookie.indexOf(";", inx);
            if(enx == -1){
                enx = document.cookie.length;
            }
            let cVal = document.cookie.substring(stx, enx);
            return decodeURIComponent(cVal);
        }
    }
    return "";
}

function checkCookie(){
    
}