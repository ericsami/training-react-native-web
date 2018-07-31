import * as chatService from './services/chats'

export const PAGE_SIZE = 3;

export const DEFAULT_OFFLINE_STATUS = '离线';

export function getConatctStatus(type, show, status){
    var statusStr = DEFAULT_OFFLINE_STATUS; 


    if(type === 'unavailable'){
        statusStr = DEFAULT_OFFLINE_STATUS;
        return statusStr;
    }

    if(show && show != '')
    {
        switch(show)
        {
            case 'chat':
              return statusStr = '有空';
            case 'away':
              return statusStr = '离开';
            case 'dnd':
              return statusStr = '忙碌';
            default:
              return statusStr;
        } 
    } 

    
    if((type == null || type == '') && ( show == null || show == '') && (status == null || status == '')){
        statusStr = '在线';
    }

    return statusStr;
}

export function getSpecialTimeStr(timeStamp){
    
    if(timeStamp === undefined)
        return "";
    let year = timeStamp.substring(0,4);
    let month = timeStamp.substring(4,6);
    let day = timeStamp.substring(6,8);
    let hour = timeStamp.substring(9,11);
    let min = timeStamp.substring(12,14);
    let sec = timeStamp.substring(15,17);
    timeStamp = year+"-"+month+"-"+day+"T"+hour+":"+min+":"+sec;

    let date = new Date(timeStamp);

    var dateNow = new Date();
    if(date.getFullYear() === dateNow.getFullYear() && date.getMonth() === dateNow.getMonth() && date.getDate() === dateNow.getDate()){
        return date.getHours() + ':' + date.getMinutes();
    }

    var dateYestoday = new Date();
    dateYestoday.setDate(dateYestoday.getDate() - 1)
    if(date.getFullYear() === dateYestoday.getFullYear() && date.getMonth() === dateYestoday.getMonth() && date.getDate() === dateYestoday.getDate()){
        return '昨天';
    }

    var dateBeforeYestoday = new Date();
    dateBeforeYestoday.setDate(dateBeforeYestoday.getDate() - 2);
    if(date.getFullYear() === dateBeforeYestoday.getFullYear() && date.getMonth() === dateBeforeYestoday.getMonth() && date.getDate() === dateBeforeYestoday.getDate()){
        return '前天';
    }

     return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

export function getTimeStr(timeStamp){
    var date = null;
    if(timeStamp instanceof Date)
        date = timeStamp;
    else
        date = new Date(timeStamp); 
    var dateNow = new Date();
    if(date.getFullYear() === dateNow.getFullYear() && date.getMonth() === dateNow.getMonth() && date.getDate() === dateNow.getDate()){
        return date.getHours() + ':' + date.getMinutes();
    }

    var dateYestoday = new Date();
    dateYestoday.setDate(dateYestoday.getDate() - 1)
    if(date.getFullYear() === dateYestoday.getFullYear() && date.getMonth() === dateYestoday.getMonth() && date.getDate() === dateYestoday.getDate()){
        return '昨天';
    }

    var dateBeforeYestoday = new Date();
    dateBeforeYestoday.setDate(dateBeforeYestoday.getDate() - 2);
    if(date.getFullYear() === dateBeforeYestoday.getFullYear() && date.getMonth() === dateBeforeYestoday.getMonth() && date.getDate() === dateBeforeYestoday.getDate()){
        return '前天';
    }

     return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

export function getContactAvatar(sessionid, contactJid){
    return chatService.getFriendAvater(sessionid, contactJid);
}




export const ExpressionsConfig = [
     {
          img: "emoji_1.png",
          zhCn:"[可爱]",
          enUs:"[cute]",
          xhTw:"[可愛]"
      },
      {
          img:"emoji_2.png",
          zhCn:"[笑脸]",
          enUs:"[smile]",
          zhTw:"[笑臉]"
      },
      {
          img:"emoji_3.png",
          zhCn:"[囧]",
          enUs:"[jiong]",
          zhTw:"[囧]"
      },
      {
          img:"emoji_4.png",
          zhCn:"[生气]",
          enUs:"[angry]",
          zhTw:"[生氣]"
      },
      {
          img:"emoji_5.png",
          zhCn:"[鬼脸]",
          enUs:"[grimace]",
          zhTw:"[鬼臉]"
      },
      {
          img:"emoji_6.png",
          zhCn:"[花心]",
          enUs:"[mahogany]",
          zhTw:"[花心]"
      },
      {
          img:"emoji_7.png",
          zhCn:"[害怕]",
          enUs:"[afraid]",
          zhTw:"[害怕]"
      },
      {
          img:"emoji_8.png",
          zhCn:"[我汗]",
          enUs:"[sweat]",
          zhTw:"[我汗]"
      },
      {
          img:"emoji_9.png",
          zhCn:"[尴尬]",
          enUs:"[awkward]",
          xhTw:"[尷尬]"
      },
      {
          img:"emoji_10.png",
          zhCn:"[哼哼]",
          enUs:"[hem]",
          zhTw:"[哼哼]"
      },
      {
          img:"emoji_11.png",
          zhCn:"[忧郁]",
          enUs:"[gloomy]",
          zhTw:"[憂鬱]"
      },
      {
          img:"emoji_12.png",
          zhCn:"[呲牙]",
          enUs:"[baredteeth]",
          zhTw:"[呲牙]"
      },
      {
          img:"emoji_13.png",
          zhCn:"[媚眼]",
          enUs:"[flirtatious]",
          zhTw:"[媚眼]"
      },
      {
          img:"emoji_14.png",
          zhCn:"[累]",
          enUs:"[tired]",
          zhTw:"[累]"
      },
      {
          img:"emoji_15.png",
          zhCn:"[苦逼]",
          enUs:"[hard]",
          zhTw:"[苦逼]"
      },
      {
          img:"emoji_16.png",
          zhCn:"[瞌睡]",
          enUs: "[doze]",
          zhTw:"[瞌睡]"
      },
      {
          img:"emoji_17.png",
          zhCn:"[哎呀]",
          enUs:"[ah]",
          zhTw:"[哎呀]"
      },
      {
          img:"emoji_18.png",
          zhCn:"[刺瞎]",
          enUs:"[cixia]",
          zhTw:"[刺瞎]"
      },
      {
          img:"emoji_19.png",
          zhCn:"[哭]",
          enUs:"[cry]",
          zhTw:"[哭]"
      },
      {
          img:"emoji_20.png",
          zhCn:"[激动]",
          enUs:"[excitement]",
          zhTw:"[激動]"
      },
      {
          img:"emoji_21.png",
          zhCn:"[难过]",
          enUs:"[sorry]",
          zhTw:"[難過]"
      },
      {
          img:"emoji_22.png",
          zhCn:"[害羞]",
          enUs:"[shy]",
          zhTw:"[害羞]"
      },
      {
          img:"emoji_23.png",
          zhCn:"[高兴]",
          enUs:"[happy]",
          zhTw:"[高興]"
      },
      {
          img:"emoji_24.png",
          zhCn:"[愤怒]",
          enUs:"[anger]",
          zhTw:"[憤怒]"
      },
      {
          img:"emoji_25.png",
          zhCn:"[亲]",
          enUs:"[close]",
          zhTw:"[親]"
      },
      {
          img:"emoji_26.png",
          zhCn:"[飞吻]",
          enUs:"[kiss]",
          zhTw:"[飛吻]"
      },
      {
          img:"emoji_27.png",
          zhCn:"[得意]",
          enUs:"[proud]",
          zhTw:"[得意]"
      },
      {
          img:"emoji_28.png",
          zhCn:"[惊恐]",
          enUs:"[shock]",
          zhTw:"[驚恐]"
      },
      {
          img:"emoji_29.png",
          zhCn:"[口罩]",
          enUs:"[masks]",
          zhTw:"[口罩]"
      },
      {
          img:"emoji_30.png",
          zhCn:"[惊讶]",
          enUs:"[surprised]",
          zhTw:"[驚訝]"
      },
      {
          img:"emoji_31.png",
          zhCn:"[委屈]",
          enUs:"[grievance]",
          zhTw:"[委屈]"
      },
      {
          img:"emoji_32.png",
          zhCn:"[生病]",
          enUs:"[sick]",
          zhTw:"[生病]"
      },
      {
          img:"emoji_33.png",
          zhCn:"[赞]",
          enUs:"[praise]",
          zhTw:"[贊]"
      },
      {
          img:"emoji_34.png",
          zhCn:"[心碎]",
          enUs:"[heartbreak]",
          zhTw:"[心碎]"
      },
      {
          img:"emoji_35.png",
          zhCn:"[玫瑰]",
          enUs:"[rose]",
          zhTw:"[玫瑰]"
      },
      {
          img:"emoji_36.png",
          zhCn:"[花]",
          enUs:"[flower]",
          zhTw:"[花]"
      },
      {
          img:"emoji_37.png",
          zhCn:"[外星人]",
          enUs:"[alien]",
          zhTw:"[外星人]"
      },
      {
          img:"emoji_38.png",
          zhCn:"[金牛座]",
          enUs:"[taurus]",
          zhTw:"[金牛座]"
      },
      {
          img:"emoji_39.png",
          zhCn:"[双子座]",
          enUs:"[gemini]",
          zhTw:"[雙子座]"
      },
      {
          img:"emoji_40.png",
          zhCn:"[巨蟹座]",
          enUs:"[cancer]",
          zhTw:"[巨蟹座]"
      },
      {
          img:"emoji_41.png",
          zhCn:"[狮子座]",
          enUs:"[leo]",
          zhTw:"[獅子座]"
      },
      {
          img:"emoji_42.png",
          zhCn:"[处女座]",
          enUs:"[virgo]",
          zhTw:"[處女座]"
      },
      {
          img:"emoji_43.png",
          zhCn:"[天平座]",
          enUs:"[libra]",
          zhTw:"[天平座]"
      },
      {
          img:"emoji_44.png",
          zhCn:"[天蝎座]",
          enUs:"[scorpio]",
          zhTw:"[天蠍座]"
      },
      {
          img:"emoji_45.png",
          zhCn:"[射手座]",
          enUs:"[sagittarius]",
          zhTw:"[射手座]"
      },
      {
          img:"emoji_46.png",
          zhCn:"[摩羯座]",
          enUs:"[capricorn]",
          zhTw:"[摩羯座]"
      },
      {
          img:"emoji_47.png",
          zhCn:"[水瓶座]",
          enUs:"[aquarius]",
          zhTw:"[水瓶座]"
      },
      {
          img:"emoji_48.png",
          zhCn:"[白羊座]",
          enUs:"[aries]",
          zhTw:"[白羊座]"
      },
      {
          img:"emoji_49.png",
          zhCn:"[双鱼座]",
          enUs:"[pisces]",
          zhTw:"[雙魚座]"
      },
      {
          img:"emoji_50.png",
          zhCn:"[星座]",
          enUs:"[constellation]",
          zhTw:"[星座]"
      },
      {
          img:"emoji_51.png",
          zhCn:"[男孩]",
          enUs:"[boy]",
          zhTw:"[男孩]"
      },
      {
          img:"emoji_52.png",
          zhCn:"[女孩]",
          enUs:"[girl]",
          zhTw:"[女孩]"
      },
      {
          img:"emoji_53.png",
          zhCn:"[嘴唇]",
          enUs:"[lips]",
          zhTw:"[嘴唇]"
      },
      {
          img:"emoji_54.png",
          zhCn:"[爸爸]",
          enUs:"[father]",
          zhTw:"[爸爸]"
      },
      {
          img:"emoji_55.png",
          zhCn:"[妈妈]",
          enUs:"[mom]",
          zhTw:"[媽媽]"
      },
      {
          img:"emoji_56.png",
          zhCn:"[衣服]",
          enUs:"[clothes]",
          zhTw:"[衣服]"
      },
      {
          img:"emoji_57.png",
          zhCn:"[皮鞋]",
          enUs:"[leathershoes]",
          zhTw:"[皮鞋]"
      },
      {
          img:"emoji_58.png",
          zhCn:"[照相]",
          enUs:"[photo]",
          zhTw:"[照相]"
      },
      {
          img:"emoji_59.png",
          zhCn:"[电话]",
          enUs:"[phone]",
          zhTw:"[電話]"
      },
      {
          img:"emoji_60.png",
          zhCn:"[石头]",
          enUs:"[stone]",
          zhTw:"[石頭]"
      },
      {
          img:"emoji_61.png",
          zhCn:"[胜利]",
          enUs:"[victory]",
          zhTw:"[勝利]"
      },
      {
          img:"emoji_62.png",
          zhCn:"[禁止]",
          enUs:"[ban]",
          zhTw:"[禁止]"
      },
      {
          img:"emoji_63.png",
          zhCn:"[滑雪]",
          enUs:"[skiing]",
          zhTw:"[滑雪]"
      },
      {
          img:"emoji_64.png",
          zhCn:"[高尔夫]",
          enUs:"[golf]",
          zhTw:"[高爾夫]"
      },
      {
          img:"emoji_65.png",
          zhCn:"[网球]",
          enUs:"[tennis]",
          zhTw:"[網球]"
      },
      {
          img:"emoji_66.png",
          zhCn:"[棒球]",
          enUs:"[baseball]",
          zhTw:"[棒球]"
      },
      {
          img:"emoji_67.png",
          zhCn:"[冲浪]",
          enUs:"[surf]",
          zhTw:"[衝浪]"
      },
      {
          img:"emoji_68.png",
          zhCn:"[足球]",
          enUs:"[football]",
          zhTw:"[足球]"
      },
      {
          img:"emoji_69.png",
          zhCn:"[小鱼]",
          enUs:"[fish]",
          zhTw:"[小魚]"
      },
      {
          img:"emoji_70.png",
          zhCn:"[问号]",
          enUs:"[question]",
          zhTw:"[問號]"
      },
      {
          img:"emoji_71.png",
          zhCn:"[叹号]",
          enUs:"[exclamation]",
          zhTw:"[嘆號]"
      },
      {
          img:"emoji_179.png",
          zhCn:"[顶]",
          enUs:"[top]",
          zhTw:"[頂]"
      },
      {
          img:"emoji_180.png",
          zhCn:"[写字]",
          enUs:"[write]",
          zhTw:"[寫字]"
      },
      {
          img:"emoji_181.png",
          zhCn:"[衬衫]",
          enUs:"[shirt]",
          zhTw:"[襯衫]"
      },
      {
          img:"emoji_182.png",
          zhCn:"[小花]",
          enUs:"[floret]",
          zhTw:"[小花]"
      },
      {
          img:"emoji_183.png",
          zhCn:"[郁金香]",
          enUs:"[tulip]",
          zhTw:"[鬱金香]"
      },
      {
          img:"emoji_184.png",
          zhCn:"[向日葵]",
          enUs:"[sunflower]",
          zhTw:"[向日葵]"
      },
      {
          img:"emoji_185.png",
          zhCn:"[鲜花]",
          enUs:"[flowers]",
          zhTw:"[鮮花]"
      },
      {
          img:"emoji_186.png",
          zhCn:"[椰树]",
          enUs:"[coco]",
          zhTw:"[椰樹]"
      },
      {
          img:"emoji_187.png",
          zhCn:"[仙人掌]",
          enUs:"[cactus]",
          zhTw:"[仙人掌]"
      },
      {
          img:"emoji_188.png",
          zhCn:"[气球]",
          enUs:"[balloon]",
          zhTw:"[氣球]"
      },
      {
          img:"emoji_189.png",
          zhCn:"[炸弹]",
          enUs:"[bomb]",
          zhTw:"[炸彈]"
      },
      {
          img:"emoji_190.png",
          zhCn:"[喝彩]",
          enUs:"[cheers]",
          zhTw:"[喝彩]"
      },
      {
          img:"emoji_191.png",
          zhCn:"[剪子]",
          enUs:"[scissors]",
          zhTw:"[剪子]"
      },
      {
          img:"emoji_192.png",
          zhCn:"[蝴蝶结]",
          enUs:"[bow]",
          zhTw:"[蝴蝶結]"
      },
      {
          img:"emoji_193.png",
          zhCn:"[机密]",
          enUs:"[confidential]",
          zhTw:"[機密]"
      },
      {
          img:"emoji_194.png",
          zhCn:"[铃声]",
          enUs:"[ring]",
          zhTw:"[鈴聲]"
      },
      {
          img:"emoji_195.png",
          zhCn:"[女帽]",
          enUs:"[millinery]",
          zhTw:"[女帽]"
      },
      {
          img:"emoji_196.png",
          zhCn:"[裙子]",
          enUs:"[skirt]",
          zhTw:"[裙子]"
      },
      {
          img:"emoji_197.png",
          zhCn:"[理发店]",
          enUs:"[barber_shop]",
          zhTw:"[理髮店]"
      },
      {
          img:"emoji_198.png",
          zhCn:"[和服]",
          enUs:"[kimono]",
          zhTw:"[和服]"
      },
      {
          img:"emoji_199.png",
          zhCn:"[比基尼]",
          enUs:"[bikini]",
          zhTw:"[比基尼]"
      },
      {
          img:"emoji_200.png",
          zhCn:"[拎包]",
          enUs:"[bag]",
          zhTw:"[拎包]"
      },
      {
          img:"emoji_201.png",
          zhCn:"[拍摄]",
          enUs:"[shooting]",
          zhTw:"[拍攝]"
      },
      {
          img:"emoji_202.png",
          zhCn:"[铃铛]",
          enUs:"[bell]",
          zhTw:"[鈴鐺]"
      },
      {
          img:"emoji_203.png",
          zhCn:"[音乐]",
          enUs:"[music]",
          zhTw:"[音樂]"
      },
      {
          img:"emoji_204.png",
          zhCn:"[心星]",
          enUs:"[heart_star]",
          zhTw:"[心星]"
      },
      {
          img:"emoji_205.png",
          zhCn:"[粉心]",
          enUs:"[pink_heart]",
          zhTw:"[粉心]"
      },
      {
          img:"emoji_206.png",
          zhCn:"[丘比特]",
          enUs:"[cupid]",
          zhTw:"[丘比特]"
      },
      {
          img:"emoji_207.png",
          zhCn:"[吹气]",
          enUs:"[blowing]",
          zhTw:"[吹氣]"
      },
      {
          img:"emoji_208.png",
          zhCn:"[口水]",
          enUs:"[saliva]",
          zhTw:"[口水]"
      },
      {
          img:"emoji_209.png",
          zhCn:"[对]",
          enUs:"[right]",
          zhTw:"[對]"
      },
      {
          img:"emoji_210.png",
          zhCn:"[错]",
          enUs:"[wrong]",
          zhTw:"[錯]"
      },
      {
          img:"emoji_211.png",
          zhCn:"[绿茶]",
          enUs:"[green_tea]",
          zhTw:"[綠茶]"
      },
      {
          img:"emoji_212.png",
          zhCn:"[面包]",
          enUs:"[bread]",
          zhTw:"[麵包]"
      },
      {
          img:"emoji_213.png",
          zhCn:"[面条]",
          enUs:"[noodles]",
          zhTw:"[麵條]"
      },
      {
          img:"emoji_214.png",
          zhCn:"[咖喱饭]",
          enUs:"[curry]",
          zhTw:"[咖哩飯]"
      },
      {
          img:"emoji_215.png",
          zhCn:"[饭团]",
          enUs:"[onigiri]",
          zhTw:"[飯糰]"
      },
      {
          img:"emoji_216.png",
          zhCn:"[麻辣烫]",
          enUs:"[spicy]",
          zhTw:"[麻辣燙]"
      },
      {
          img:"emoji_217.png",
          zhCn:"[寿司]",
          enUs:"[sushi]",
          zhTw:"[壽司]"
      },
      {
          img:"emoji_218.png",
          zhCn:"[苹果]",
          enUs:"[apple]",
          zhTw:"[蘋果]"
      },
      {
          img:"emoji_219.png",
          zhCn:"[橙子]",
          enUs:"[orange]",
          zhTw:"[橙子]"
      },
      {
          img:"emoji_220.png",
          zhCn:"[草莓]",
          enUs:"[strawberry]",
          zhTw:"[草莓]"
      },
      {
          img:"emoji_221.png",
          zhCn:"[西瓜]",
          enUs:"[watermelon]",
          zhTw:"[西瓜]"
      },
      {
          img:"emoji_222.png",
          zhCn:"[柿子]",
          enUs:"[persimmon]",
          zhTw:"[柿子]"
      },
      {
          img:"emoji_223.png",
          zhCn:"[眼睛]",
          enUs:"[eye]",
          zhTw:"[眼睛]"
      },
      {
          img:"emoji_224.png",
          zhCn:"[好的]",
          enUs:"[good]",
          zhTw:"[好的]"
      }
];