/**
 * 自动获取 畹町坊 小程序最新 Token
 */
/* 
* 
*

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
