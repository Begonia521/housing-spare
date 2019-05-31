'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let data=[
        {gb:"热门推荐",url:"a1"},
        {gb:"美国",url:"a2"},
        {gb:"英国",url:"a3"},
        {gb:"澳大利亚",url:"a4"},
        {gb:"加拿大",url:"a5"},
        {gb:"新西兰",url:"a6"},
        {gb:"日本",url:"a7"},
        {gb:"新加坡",url:"a8"},
        {gb:"爱尔兰",url:"a9"},
        {gb:"韩国",url:"a10"},
        {gb:"欧洲",url:"a11"},
        {gb:"中国香港",url:"a12"},
        {gb:"国内",url:"a13"}
    ]
    ctx.body = data;
  }

  async index1(){
    const {ctx} = this;
    let data=[
      {
        id:"a1",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201509/23/e72ac24500c022231f055fd8151c793a.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      },
      {
        id:"a2",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/videoImages/b7/b4693091b2d7fff823ad6d4bb98283f636d4c2.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      },
      {
        id:"a3",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/35/1b39aae1c32bb49e33d6af70230051b5ea3a39.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      },
      {
        id:"a4",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/20/b80289fb0e1c9b1c3fc3af0ee71be24f0a666c.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      },
      {
        id:"a5",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/5c/8fac62c414d4cc454ed685178eb6bb5f4bce91.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      },
      {
        id:"a6",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/12/168a46e1160f3ada341716ed250bf196fdcbad.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      },
      {
        id:"a7",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/55/671b7dbd4eaf390f35045521d2005417a1f21d.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      },
      {
        id:"a8",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/19/923235fd2bb77b8d37641aaae90c9b9275ca2e.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      },
      {
        id:"a9",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/57/008679ae7314e74f03411aae0f097f68ef4393.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      },
      {
        id:"a10",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/a4/da89fe0b1e652fa9d3207a1233866d9fa073e0.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      },
      {
        id:"a11",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/6d/f6083e01d2905efad517a4a294df9dbc870780.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      },
      {
        id:"a12",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/56/6bb6b5584887c1ce9726ca6672a9fe4bacbaae.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      },
      {
        id:"a13",
        msgAry:[
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/76/bfb8e93b760b3ba9961c7d2af780cc8058171d.jpg?x-oss-process=style/house-280-157",
            city:"伦敦",
            scout:"Somerset Court",
            price:"£ 305 起/周",
            ucl:"去往伦敦大学学院（UCL）",
            carmain:"5分钟",
            bikmai:"7分钟",
            walkmain:"13分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/1b/35a8b98ea24d12dd04965c7933e9b991379140.jpg?x-oss-process=style/house-280-157",
            city:"格拉斯哥",
            scout:"West View",
            price:"£ 151.69 起/周",
            ucl:"去往格拉斯哥大学",
            carmain:"4分钟",
            bikmai:"7分钟",
            walkmain:"16分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/bd/6f7064709d538c3402a7ddbf7babd01177c09a.jpg?x-oss-process=style/house-280-157",
            city:"利物浦",
            scout:"West View",
            price:"£ 119 起/周",
            ucl:"去往利物浦约翰摩尔斯大学",
            carmain:"5分钟",
            bikmai:"8分钟",
            walkmain:"8分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/93/61f63f9bc0603752fbc014038ed0584a44afc0.jpg?x-oss-process=style/house-280-157",
            city:"洛杉矶",
            scout:"University Gateway",
            price:"£ 1,061.30 起/月",
            ucl:"去往南加州大学",
            carmain:"1分钟",
            bikmai:"2分钟",
            walkmain:"3分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/71/117732981c1b19b5f1704e96a3ab158f588591.jpg?x-oss-process=style/house-280-157",
            city:"纽约",
            scout:"SKY",
            price:"US$ 3,325 起/月",
            ucl:"去往福特汉姆大学-林肯中心校区",
            carmain:"7分钟",
            bikmai:"21分钟",
            walkmain:"27分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages/201607/11/8ebe7c73cc3b4f91fbfcffac0872c746.jpg?x-oss-process=style/house-280-157",
            city:"波士顿",
            scout:"Station Landing",
            price:"US$ 2,340 起/月",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          },
          {
            imgsrc:"https://pic.uhouzz.com/houseImages2/e1/3810dff34542aa47aea8f3a186c358e2182946.jpg?x-oss-process=style/house-280-157",
            city:"墨尔本",
            scout:"Scape Swanston",
            price:"AU$ 319 起/周",
            ucl:"去往东北大学",
            carmain:"16分钟",
            bikmai:"40分钟",
            walkmain:"107分钟"
          }
        ]
      }
    ]

    let id=ctx.query.id;
    let arr=[];
    for(let i=0;i<data.length;i++){
      if(id==data[i].id){
        // console.log(i)
        arr=data[i].msgAry
      }
    }
    ctx.body = arr;
  }
}

module.exports = HomeController;
