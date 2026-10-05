/**
 * 自动获取 畹町坊 小程序最新 Token
 */
/* 
* 
*
* [task_local]
* # 畹町坊打卡,每天早晨 08:30 自动执行打卡
* 30 8 * * * https://raw.githubusercontent.com/jeddy2020/QX/refs/heads/main/sign/wanding_checkin.js, tag=畹町坊打卡, enabled=true
*
* [rewrite_local]
* # 畹町坊获取token
^https:\/\/wox2019\.woxshare\.com\/(clientApi|crp)\/ url script-request-header https://raw.githubusercontent.com/jeddy2020/QX/refs/heads/main/sign/wanding_get_token.js
const TOKEN_KEY = "wox_checkin_token";
*
[mitm]
hostname = woxshare.com
*
*/

if ($request &&$request.headers) {
  const token = $request.headers["token"] \vert{}\vert{} $request.headers["Token"];
  if (token && token.startsWith("WeixinMiniToken")) {
    const oldToken = $prefs.valueForKey(TOKEN_KEY);
    if (oldToken !== token) {
      $prefs.setValueForKey(token, TOKEN_KEY);
      $notify("WOX打卡", "Token更新成功", "已同步最新登录凭据");
      console.log(`[WOX] 新 Token 已保存: ${token}`);
    }
  }
}

$done({});
