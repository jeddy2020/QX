/***********************************

> 应用名称：傲软抠图
> 软件版本：1.6.5
> 下载地址：https://apps.apple.com/cn/app/id1490054676
> 脚本作者：Cuttlefish
> 更新时间：2023.3.18
 
[rewrite_local]

# ～ 傲软抠图解锁会员
https://awvp.aoscdn.com/base/vip/v2/vips url script-response-body https://raw.githubusercontent.com/jeddy2020/QX/main/Crack/apowersoft.js

[mitm] 

hostname=awvp.aoscdn.com

***********************************/

var Jeddyhuang={
  "status" : 200,
  "message" : "success",
  "data" : {
    "group_expired_at" : 0,
    "is_tried" : 0,
    "max_devices" : 1,
    "period_type" : "active",
    "candy_expired_at" : 0,
    "pending" : 0,
    "remained_seconds" : 0,
    "limit" : 0,
    "expired_at" : 4045798296,
    "candy" : 0,
    "license_type" : "premium",
    "quota" : 0,
    "status" : 1,
    "coin" : 100
  }
}
$done({body: JSON.stringify(Jeddyhuang)});
