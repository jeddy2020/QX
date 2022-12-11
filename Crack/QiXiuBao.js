let obj = JSON.parse($response.body);
if(obj.action="getadnewdata")obj={};
else if(obj.action="addaduserrecorddata")obj={};
$done({body: JSON.stringify(obj)});
