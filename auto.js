
auto.waitFor();
var height = device.height;
var width = device.width;
toast("开启1111")
setScreenMetrics(width, height);
 
start1111();
 
function start1111()
{
    gotoMiaoBi();
    miaoBiCenter();
    toast("finished")
}
 
function gotoMiaoBi()
{
    if(className("android.widget.Button").text("赚喵币").exists()){
        className("android.widget.Button").text("赚喵币").click();
        toast("赚喵币")
        sleep(4000);
    }
}
 
function miaoBiCenter()
{
    var count = 3;
    while(count-- > 0)
    {
        browseJobs("去浏览");
        browseJobs("去逛逛");
        browseJobs("去搜索");
        doFinishJob();
        getRewards();
        sleep(3000);
    }
 
}
 
function getRewards()
{
    while(text("领取奖励").exists())
    {
        text("领取奖励").findOne().click();
        sleep(2000);
    }
}
 
function browseJobs(target)
{
    while(text(target).exists())
    {
        text(target).findOne().click();
        sleep(3000)
        var count = 0;
        while(count ++ < 7)
        {
            swipe(width / 2, height/2, width / 2, height/10, 500); 
            sleep(3000);
        }
 
        back();
        sleep(3000)
    }
}
 
function doFinishJob()
{
    if(text("去完成").exists())
    {
        var finishedList = text("去完成").find();
        for(let i=0;i<finishedList.size();i++)
        {
            var finished = finishedList.get(i);
            var title = finished.parent().child(0).child(0).text();
            if(title.indexOf("邀请好友") != -1 || title.indexOf("淘宝人生") != -1)
            {
                toast(title);
                sleep(2000);
            }else {
                finished.click();
                sleep(3000);
                var count = 0;
                while(count ++ < 7)
                {
                    swipe(width / 2, height/2, width / 2, height/10, 500); 
                    sleep(3000);
                }
        
                back();
                sleep(3000)
            }
        }
    }
}
