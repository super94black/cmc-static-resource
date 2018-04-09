# cmc-static-resource
- 游戏规则说明
  - 这是一个圣诞小游戏

  - 进入开始页面前需要从微信服务器拉取个人信息（保存哪些个人信息看需求说明部分），

      如果你实在不会可以使用模拟信息（写死在代码里）

  - 点击开始游戏时需要获取用户信息（具体哪些信息看需求说明部分）

  - 每人每天可以玩40次，每死一次就需要向后端发起记录分数请求，后端会返回字段（看需求说明）

  - 查看排行榜，排名按照分数从高到低排名，每人每天第一次玩分数都会清零
---

- Filter的功能:
  - 第一次进入需要获取用户信息(微信认证流程),将获取的openid,nickname,imgurl(微信给的是headimgurl)保存,此处必须使用session
  - 获取用户数据后有两种情况:
    - 没有在数据库中: 创建新的user 、初始化次数/分数/登录时间 、存入昵称/头像地址/openid
    - 已存在: 检查登陆时间是否超过一天,如果是,则更新剩余游戏次数（用户每天可以玩得次数是40次）/头像地址(时刻保持用户最新头像)
  ---
- 关于前后端交互时用户身份鉴别的问题
  - 后端统一存取session,前端不提供关于身份信息的字段
  ---
- 状态码

    200正常 
    400是客户端问题 
    500是服务端这边问题

    前端基本只对200做了处理,但后端要根据出现的情况再返回数据时写上相应的状态码（这是一个良好的代码习惯）

---

- 前端文件的使用及要求
  - 这个游戏不用管前端怎么实现，只需要实现后端的接口即可，但是返回字段必须严格按照文档来写
  - 向后台请求的js在static目录下的http.js文件里，那里我对接口地址做了注释，你需要填写自己的地址
  - 拦截器要拦截各种方式进入入口，比如通过浏览器输入游戏页面地址/后端URI
  - 游戏入口文件是index.jsp（不是views下边那个）
  - 前端代码自己没事可以熟悉一下，至少知道什么时候发请求，在哪发请求
  - 前端所有文件整体放在webapp目录下

---

- 需求说明
  - 通过微信公众号进入，拦截器获取个人信息，做业务逻辑，放行至游戏开始页面(index.jsp)
  - 开始游戏，前端会向后端发送一次请求，后端需要响应
        GET请求
        响应:
        
        	{
        
        		"status":状态码
        
        		"msg":是否成功
        
        		//成功则有data
        
        		"data":{
        
        				"nickname":用户昵称
        
        				"rank":用户排名
        
        				"share":是否分享过（这个字段默认填0）
        
        				"count":剩余游戏次数 （每个人每天都有40次）
        
        				"imgurl":用户的头像地址
        
        			}
        
        	}

  - 用户每死一次前端会向后端发一次请求,后端接受前端参数存库，并返回下面的数据
        POST:

           	请求参数:score

           	响应:

           		{	

           			"status":状态码

           			"msg":是否成功

           			//成功则有data

           			"data":

           				{

           				"nickname":用户昵称

        				"rank":用户排名

        				"count":剩余游戏次数 （每个人每天都有40次）

        				"imgurl":用户的头像地址

           				}

           		}
           # 每死一次就会发送一次请求
  - 查看榜单，获得前50名排名,并返回个人的排名
         响应:

          	{

          		"status":状态码

          		"msg":是否成功

          		//成功则有data

          		"data":{

          				"1":{"nickname":xxx,"imgurl":xxx,"rank":xx}

          				"2":{"nickname":xxx,"imgurl":xxx","rank":xx}

          				......

          				"my":{"nickname":xxx,"imgurl":xxx,"rank":xx}

          			}			

          	}

- 作业提交
  - 下周六晚上12点前，将演示地址和git地址发送至zhanghanlin@redrock.team
  - 对于作业要求至少要能有本机页面演示，如果可以部署到服务器然后

  ​       手机微信演示

  - 你们做公众号的时候都讲过微信开发流程了，有什么不懂多看文档 
  - 本次作业逻辑比较简单，难点在于前后端交互，所以首先看懂游戏规则，理清自己的逻辑，然后学会和前端交互

