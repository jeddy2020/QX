/***********************************

> 应用名称：傲软抠图
> 软件版本：1.6.0
> 下载地址：https://apps.apple.com/cn/app/id1490054676
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2022-09-13
 
[rewrite_local]

# ～ 傲软抠图解锁会员权限（2022-09-13）@ddgksf2013
https?:\/\/.*\.aoscdn\.com\/base\/vip\/client\/authorizations$ url script-response-body https://raw.githubusercontent.com/jeddy2020/QX/main/Crack/apowersoft.js

[mitm] 

hostname=*.aoscdn.com

***********************************/



var cuttlefish ={"warning":"","tgchannel":"","feedback":""};
var ddgksf2013 = {
  "status" : 200,
  "message" : "success",
  "data" : {
    "expired_at" : 4045798296,
    "is_activated" : 1,
    "is_lifetime" : 1,
    "expire_time" : "2099-01-01 00:00:00",
    "device_id" : 600150864,
    "period_type" : "active",
    "remain_days" : 99999,
    "product_id" : 369,
    "has_present" : 0,
    "allowed_device_count" : 1,
    "has_buy_extend" : 0,
    "will_expire" : 0,
    "license_type" : "premium",
    "begin_activated_time" : 1645798296,
    "durations" : 0,
    "vip_special" : 1
  }
};
$done({body: JSON.stringify(ddgksf2013)});
