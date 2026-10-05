/**
 * 微信小程序打卡接口 mkey 时效性测试脚本
 */
const nowTs = Math.floor(Date.now() / 1000).toString();

const requestUrl = "https://wox2019.woxshare.com/clientApi/signInRecordAdd";

// 请求头参数（还原自抓包，ts 替换为当前执行时间戳）
const headers = {
  "Host": "wox2019.woxshare.com",
  "Connection": "keep-alive",
  "Content-Type": "application/json",
  "Accept-Encoding": "gzip,compress,br,deflate",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.78(0x18004e33) NetType/WIFI Language/zh_CN",
  "Referer": "https://servicewechat.com/wx00217963e7841824/12/page-frame.html",
  "openid": "ozWoE5G73hgmq2WAfUJfUcBZ2MMc",
  "token": "WeixinMiniToken:602:353e4246ad7cfd2be4d438a82b1ba6bb60571b61",
  "bid": "djifb",
  "gid": "53",
  "oid": "1",
  "version": "4.12.47",
  "ts": nowTs, // 动态当前时间戳
  "mkey": "9f3708aa0468fc5548f3102e7c4d87d3" // 抓包中的静态 Header mkey
};

// 请求体参数（直接复用抓包中的静态负载与 Body mkey）
const body = {
  "token": "WeixinMiniToken:602:353e4246ad7cfd2be4d438a82b1ba6bb60571b61",
  "version": "4.12.47",
  "bid": "djifb",
  "mkeyUrl": "/clientApi/signInRecordAdd",
  "mkey": "3274a10458e1e356242597011dad3f62badd0f09"
};

const req = {
  url: requestUrl,
  method: "POST",
  headers: headers,
  body: JSON.stringify(body)
};

console.log(`[测试] 正在发起请求，当前时间戳 ts: ${nowTs}`);

$task.fetch(req).then(response => {
  console.log(`[测试] 响应状态码: ${response.statusCode}`);
  console.log(`[测试] 响应内容: ${response.body}`);

  try {
    const res = JSON.parse(response.body);
    if (res.errCode === 0) {
      $notify("打卡测试结果", "请求成功 (签名无强绑定)", `积分: ${res.detail?.integral || 0}，打卡天数: ${res.detail?.signDays || 0}`);
    } else {
      $notify("打卡测试结果", `业务错误 (${res.errCode})`, res.errMsg || "未知错误");
    }
  } catch (e) {
    $notify("打卡测试结果", "响应解析异常", response.body.substring(0, 120));
  }
  $done();
}, reason => {
  console.log(`[测试] 请求失败: ${reason.error}`);
  $notify("打卡测试结果", "网络连接异常", reason.error);
  $done();
});
