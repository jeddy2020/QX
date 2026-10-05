/**
 * WOX 小程序每日自动打卡任务
 */
const TOKEN_KEY = "wox_checkin_token";
// 本地暂无新 Token 时使用的备用默认值
const DEFAULT_TOKEN = "WeixinMiniToken:602:353e4246ad7cfd2be4d438a82b1ba6bb60571b61";

const currentToken = $prefs.valueForKey(TOKEN_KEY) || DEFAULT_TOKEN;
const nowTs = Math.floor(Date.now() / 1000).toString();

const signUrl = "https://wox2019.woxshare.com/clientApi/signInRecordAdd";

const headers = {
  "Host": "wox2019.woxshare.com",
  "Connection": "keep-alive",
  "Content-Type": "application/json",
  "Accept-Encoding": "gzip,compress,br,deflate",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.78(0x18004e33) NetType/WIFI Language/zh_CN",
  "Referer": "https://servicewechat.com/wx00217963e7841824/12/page-frame.html",
  "openid": "ozWoE5G73hgmq2WAfUJfUcBZ2MMc",
  "token": currentToken,
  "bid": "djifb",
  "gid": "53",
  "oid": "1",
  "version": "4.12.47",
  "ts": nowTs,
  "mkey": "9f3708aa0468fc5548f3102e7c4d87d3"
};

const body = {
  "token": currentToken,
  "version": "4.12.47",
  "bid": "djifb",
  "mkeyUrl": "/clientApi/signInRecordAdd",
  "mkey": "3274a10458e1e356242597011dad3f62badd0f09"
};

const req = {
  url: signUrl,
  method: "POST",
  headers: headers,
  body: JSON.stringify(body)
};

$task.fetch(req).then(response => {
  try {
    const res = JSON.parse(response.body);
    if (res.errCode === 0) {
      $notify("WOX打卡", "打卡成功 🎉", `获得积分: ${res.detail?.integral || 0}，累计打卡: ${res.detail?.signDays || 0} 天`);
    } else if (res.errMsg && res.errMsg.indexOf("只能签到一期") !== -1) {
      $notify("WOX打卡", "今日已打卡", res.errMsg);
    } else if (res.errCode === 10005) {
      $notify("WOX打卡", "Token失效 ⚠️", "请在微信中打开一次小程序以自动刷新凭据");
    } else {
      $notify("WOX打卡", `打卡失败 (${res.errCode})`, res.errMsg || "接口异常");
    }
  } catch (e) {
    $notify("WOX打卡", "响应解析异常", response.body.substring(0, 100));
  }
  $done();
}, reason => {
  $notify("WOX打卡", "网络请求失败", reason.error);
  $done();
});
