"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return a?o.createElement(m,i(i({ref:t},c),{},{components:a})):o.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const r={title:"Adopter Spotlight: Toyota revs up secure app development with Backstage and AWS",description:"Read this Adopter Spotlight to learn how Toyota combined the power of Backstage and AWS to cut costs and speed up deployment.",author:"Emma White, Spotify",publishedISODate:"2023-03-20",previewImage:"./preview.png"},i=void 0,s={permalink:"/blog/adopter-spotlight-toyota",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/adopter-spotlight-toyota/index.md",source:"@site/blog/adopter-spotlight-toyota/index.md",title:"Adopter Spotlight: Toyota revs up secure app development with Backstage and AWS",description:"Read this Adopter Spotlight to learn how Toyota combined the power of Backstage and AWS to cut costs and speed up deployment.",date:"2023-07-13T12:03:52.826Z",formattedDate:"July 13, 2023",tags:[],readingTime:3.33,hasTruncateMarker:!1,authors:[{name:"Emma White, Spotify"}],frontMatter:{title:"Adopter Spotlight: Toyota revs up secure app development with Backstage and AWS",description:"Read this Adopter Spotlight to learn how Toyota combined the power of Backstage and AWS to cut costs and speed up deployment.",author:"Emma White, Spotify",publishedISODate:"2023-03-20",previewImage:"./preview.png"},prevItem:{title:"Where do you start when adopting Backstage?",permalink:"/blog/adopting-backstage"},nextItem:{title:"Adopter Spotlight: QuintoAndar uses Backstage to create a source of truth",permalink:"/blog/adopter-spotlight/quintoandar"}},l={authorsImageUrls:[void 0]},p=[{value:"From stuck-in-neutral to gassed up",id:"from-stuck-in-neutral-to-gassed-up",level:3},{value:"Streamlining to a single interface",id:"streamlining-to-a-single-interface",level:3},{value:"Going places...a lot faster",id:"going-placesa-lot-faster",level:3},{value:"A big win for the bottom line",id:"a-big-win-for-the-bottom-line",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: AWS published the ",(0,n.kt)("a",{parentName:"em",href:"https://aws.amazon.com/solutions/case-studies/toyota-ecs-case-study/"},"original case study")," and ",(0,n.kt)("a",{parentName:"em",href:"https://www.youtube.com/watch?v=oZpll0dJlnM"},"video"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Toyota header image",src:a(7248).Z,width:"2500",height:"1313"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"tl;dr")," ",(0,n.kt)("a",{parentName:"p",href:"https://www.toyota.com/usa/"},"Toyota Motor North America")," (TMNA) ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/solutions/case-studies/toyota-ecs-case-study/"},"recently shared")," how they combined the power of ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/"},"Amazon Web Services")," (AWS) and ",(0,n.kt)("a",{parentName:"p",href:"http://backstage.io"},"Backstage")," to securely deploy applications faster and save $10 million in annual costs. "),(0,n.kt)("h3",{id:"from-stuck-in-neutral-to-gassed-up"},"From stuck-in-neutral to gassed up"),(0,n.kt)("p",null,"As TMNA matured its cloud development strategy, engineering teams were running into increased friction and bottlenecks in its highly manual deployment process. They needed to find a tool that would simplify and streamline creating new apps on AWS and allow their developers to build quickly and easily while adhering to best practices and security requirements. And that\u2019s where Backstage came in\u2026. "),(0,n.kt)("p",null,"AWS supported TMNA to solve this problem through a developer portal built off the Backstage core framework. The result was a shiny, new internal development platform called \u201cChofer\u201d \u2014 Spanish for \u201cchauffeur\u201d as an homage to Toyota\u2019s manufacturing presence in Mexico. "),(0,n.kt)("p",null,"Today, Chofer supports 100+ application teams, 1,600+ cloud applications, and 40+ AWS services \u2013 helping the company save money by deploying secure, modern applications at scale more quickly than ever before."),(0,n.kt)("h3",{id:"streamlining-to-a-single-interface"},"Streamlining to a single interface"),(0,n.kt)("p",null,"TMNA spent six months in late 2020 assembling the team to build their Backstage instance and working with AWS to map out their project needs. They started building out the Chofer frontend in February 2021 and, in a few short months, the team released an MVP Chofer for TMNA developers to start using. "),(0,n.kt)("p",null,"Over time, Chofer has grown to unify infrastructure tooling, services, training, observability, cost tracking, infrastructure scaffolding, and documentation into a single streamlined development interface. Chofer\u2019s goal is to take the guesswork out of the equation for developers allowing them to create new apps and templates quickly and at scale in partnership with its security teams. "),(0,n.kt)("p",null,"As Kishore Jonnalagedda, Director of Engineering at TMNA, says: \u201cSecurity patterns and scalability are already taken into account. All these things \u2013 capacity, operations, cost optimization, cost transparency, and security \u2013 are being built into the application without the application team having to think of them in detail.\u201d"),(0,n.kt)("h3",{id:"going-placesa-lot-faster"},"Going places...a lot faster"),(0,n.kt)("p",null,"Because Backstage is cloud-agnostic, TMNA was able to customize Backstage according to their AWS needs and make their AWS deployments go even faster. Specifically, TMNA used Backstage\u2019s ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-templates/"},"Software Templates")," and ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/"},"Software Catalog")," to program 40+ templates so that developers can easily deploy containerized applications using ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ecs/"},"Amazon ECS")," or ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/"},"Amazon EKS"),", for example. Additionally, they\u2019ve configured their Backstage app to implement specific backend parameters across different AWS regions and create dashboards that track cost expenditure."),(0,n.kt)("p",null,"The combined power of the self-service catalog and software templates allows TMNA developers to move faster. Now, developers can ship projects in a matter of weeks, not quarters. In fact, one team reported that they saved six weeks of effort \u2014 equivalent to $250,000 \u2014 with these improvements by not having to build a particular application from scratch."),(0,n.kt)("p",null,"The TMNA cloud team can also ensure deployments are backward compatible and upgraded along with CI/CD pipelines, saving its application teams an additional estimated 4-6 weeks on these tasks."),(0,n.kt)("h3",{id:"a-big-win-for-the-bottom-line"},"A big win for the bottom line"),(0,n.kt)("p",null,"As a result of its increased developer productivity, TMNA saw an overall cost reduction of more than $10 million in 2022 \u2013 as well as a reduction of around $5 million in annual cloud infrastructure costs, saving up to $96,000 in infrastructure costs per team. "),(0,n.kt)("p",null,"TMNA was also able to track its go-green initiatives using Chofer\u2019s Cloud Carbon Footprint tool, which reveals the various TMNA teams\u2019 carbon footprints, their cloud spend, and their cost optimization recommendations."),(0,n.kt)("p",null,"Ultimately, by leveraging the power of AWS and Backstage, TMNA saw a reduction in costs, with a huge impact on developer effectiveness. Now, its application teams are working to further their cloud competencies and showcase their cloud expertise through blogs and training \u2013 helping other teams to adopt Chofer and bring Backstage\u2019s many benefits to other areas of the business."),(0,n.kt)("p",null,"Read the original case study ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/solutions/case-studies/toyota-ecs-case-study/"},"here"),".\nUsing Backstage? ",(0,n.kt)("a",{parentName:"p",href:"https://hubs.li/Q01GDd0Q0"},"Let us know"),"."))}u.isMDXComponent=!0},7248:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/preview-fa776edfe57895fb16a0cfb96c4af183.png"}}]);