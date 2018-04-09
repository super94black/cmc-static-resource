
/**
 * 获取请求地址
 * @param  {[type]} key [description]
 * @return {[type]}     [URL]
 */
function getApi(key){
    var apis = {};
    apis['POST-POINT'] = '';//每死一次就保存分数数据地址
    apis['GET-RANK'] = '';//获得排行榜数据和个人排名
    apis['USER-INFO'] = '';//每次开始游戏获取用户数据
    apis['SHARE'] = '';//这个不填

    return apis[key]

}

/**
 * 封装一个请求对象
 * @param  {[type]} key       [URL MAP 对应的KEY值]
 * @param  {[type]} method    [post/get]
 * @param  {[type]} urlParams [URL参数]
 * @param  {[type]} payload   [POST/PUT 请求体]
 * @return {[type]}           [请求对象]
 */
function packReq(key, method, urlParams, payload){

    var req = {
        url: getApi(key),
        method: method,
        payload: payload
    };

    var paramMap = req.url.split("$"); 
    
    //URL参数组装
    if (paramMap.length > 1) {

        req.url = '';
            for(i = 0; i< paramMap.length ; i++){

                if (paramMap.length-1 !== i) {
                    req.url += (paramMap[i] + urlParams[i]);
            };
        };

    };

    return req;

}

/**
 * 异步请求
 * @param  {[type]} req [请求对象]
 * @param  {[type]} callback [回调函数]
 */
function request(req, callback){
    $.ajax({
        url: req.url,
        type: req.method,
        dataType: 'json',
        data: req.payload,
    })
    .done(function(data) {
        callback(data)
    })
    .fail(function() {
        console.log("error");
    })
    
}
