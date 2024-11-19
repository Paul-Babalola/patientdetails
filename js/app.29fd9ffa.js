(function(){"use strict";var t={704:function(t,e,s){var n=s(5130),a=s(6768);const i={class:"dashboard"},l={class:"content"};function r(t,e,s,n,r,o){const c=(0,a.g2)("Sidebar"),u=(0,a.g2)("PatientList"),d=(0,a.g2)("DiagnosisHistory"),p=(0,a.g2)("PatientDetails");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(c),(0,a.Lk)("main",null,[(0,a.Lk)("div",l,[(0,a.bF)(u),(0,a.bF)(d),(0,a.bF)(p,{patient:r.selectedPatient},null,8,["patient"])])])])}const o={class:"sidebar"};function c(t,e){return(0,a.uX)(),(0,a.CE)("header",o,e[0]||(e[0]=[(0,a.Fv)('<div class="logo" data-v-5ac03098><img src="./assets/TestLogo@2x.png" alt="" data-v-5ac03098></div><nav data-v-5ac03098><ul data-v-5ac03098><li data-v-5ac03098><img class="icon" src="./assets/home_FILL0_wght300_GRAD0_opsz24.png" data-v-5ac03098> Overview</li><li class="active" data-v-5ac03098><img class="icon" src="./assets/group_FILL0_wght300_GRAD0_opsz24.png" data-v-5ac03098> Patients</li><li data-v-5ac03098><img class="icon" src="./assets/calendar_today_FILL0_wght300_GRAD0_opsz24.png" data-v-5ac03098> Schedule</li><li data-v-5ac03098><img class="icon" src="./assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.png" data-v-5ac03098> Message</li><li data-v-5ac03098><img class="icon" src="./assets/credit_card_FILL0_wght300_GRAD0_opsz24.png" data-v-5ac03098> Transactions</li></ul></nav><div class="profile" data-v-5ac03098><img class="prof" src="./assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="Doctor" data-v-5ac03098><div data-v-5ac03098><p class="text" data-v-5ac03098>Dr. Jose Simmons</p><span class="text1" data-v-5ac03098>General Practitioner</span></div></div><div data-v-5ac03098><img class="iconic1" src="./assets/settings_FILL0_wght300_GRAD0_opsz24.png" data-v-5ac03098><img class="iconic" src="./assets/more_vert_FILL0_wght300_GRAD0_opsz24.png" data-v-5ac03098></div>',4)]))}var u=s(1241);const d={},p=(0,u.A)(d,[["render",c],["__scopeId","data-v-5ac03098"]]);var h=p,g=s(8178),v={components:{Sidebar:h,PatientList:g["default"]},data(){return{selectedPatient:{name:"Jessica Taylor",dob:"August 23, 1996",gender:"Female"}}}};const k=(0,u.A)(v,[["render",r],["__scopeId","data-v-dc9b7876"]]);var L=k,m=s(1387);const _=[{path:"/",name:"patientlist",component:()=>Promise.resolve().then(s.bind(s,8178))}],f=(0,m.aE)({history:(0,m.LA)(),routes:_});var y=f,b=s(782),P=(0,b.y$)({state:{selectedPatient:null},mutations:{setSelectedPatient(t,e){t.selectedPatient=e}},actions:{selectPatient({commit:t},e){t("setSelectedPatient",e)}},getters:{selectedPatient:t=>t.selectedPatient}});(0,n.Ef)(L).use(y).use(P).mount("#app")},8178:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var n=s(6768),a=s(4232);const i={class:"container"},l={class:"patient-list"},r=["onClick"],o={style:{"background-color":"none",width:"25vw"},class:"patient-dets"},c=["src"],u={class:"patient-details"},d={key:0,class:"diagnosis-history"},p={key:0,class:"stat-card green"},h={key:1,class:"stat-card red"},g={key:2,class:"stat-card pink"},v={key:0,class:"diagnostic-history"},k={class:"diagnostic-history-table"},L={key:0,style:{"text-align":"left"},class:"patient-details"},m={class:"patient-details-container"},_=["src"],f={style:{"text-align":"center"}},y={class:"pt2"},b={class:"pt1"},P={class:"pt3"},C={class:"pt4"},D={class:"pt5"},w={key:1,class:"no-selection"},F={key:2,class:"patient-details-container2"},E={class:"tests"};function I(t,e,s,I,M,A){return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("div",l,[e[1]||(e[1]=(0,n.Lk)("h2",null,"Patients",-1)),e[2]||(e[2]=(0,n.Lk)("img",{src:"./assets/search_FILL0_wght300_GRAD0_opsz24.png",alt:"Search Icon",class:"search-icon"},null,-1)),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(A.filteredPatients,(t=>((0,n.uX)(),(0,n.CE)("li",{key:t.name,onClick:e=>A.selectPatient(t)},[(0,n.Lk)("div",o,[(0,n.Lk)("img",{style:{"margin-right":"15px"},src:t.profile_picture,alt:"Patient"},null,8,c),(0,n.Lk)("div",u,[(0,n.Lk)("p",null,(0,a.v_)(t.name),1),(0,n.Lk)("span",null,(0,a.v_)(t.gender)+", "+(0,a.v_)(t.age),1)]),e[0]||(e[0]=(0,n.Lk)("img",{class:"more",src:"./assets/more_horiz_FILL0_wght300_GRAD0_opsz24.png",alt:"More"},null,-1))])],8,r)))),128))])]),M.selectedPatient?((0,n.uX)(),(0,n.CE)("div",d,[e[15]||(e[15]=(0,n.Lk)("h3",null,"Diagnosis History",-1)),e[16]||(e[16]=(0,n.Lk)("canvas",{id:"diagnosisChart"},null,-1)),(0,n.Lk)("div",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(M.selectedPatient.diagnosis_history,((t,s)=>((0,n.uX)(),(0,n.CE)("div",{class:"stats-container",key:s},[M.selectedPoint===s?((0,n.uX)(),(0,n.CE)("div",p,[e[4]||(e[4]=(0,n.Lk)("img",{src:"./assets/respiratory rate.png"},null,-1)),e[5]||(e[5]=(0,n.Lk)("p",null,"Respiratory Rate",-1)),(0,n.Lk)("h4",null,(0,a.v_)(t.respiratory_rate.value)+" bpm",1),(0,n.Lk)("p",null,[e[3]||(e[3]=(0,n.Lk)("br",null,null,-1)),(0,n.Lk)("span",null,(0,a.v_)(t.respiratory_rate.levels),1)])])):(0,n.Q3)("",!0),M.selectedPoint===s?((0,n.uX)(),(0,n.CE)("div",h,[e[8]||(e[8]=(0,n.Lk)("img",{src:"./assets/temperature.png"},null,-1)),e[9]||(e[9]=(0,n.Lk)("p",null,"Temperature",-1)),(0,n.Lk)("h4",null,(0,a.v_)(t.temperature.value)+"°F",1),(0,n.Lk)("p",null,[e[6]||(e[6]=(0,n.Lk)("br",null,null,-1)),e[7]||(e[7]=(0,n.eW)()),(0,n.Lk)("span",null,(0,a.v_)(t.temperature.levels),1)])])):(0,n.Q3)("",!0),M.selectedPoint===s?((0,n.uX)(),(0,n.CE)("div",g,[e[11]||(e[11]=(0,n.Lk)("img",{src:"./assets/HeartBPM.png"},null,-1)),e[12]||(e[12]=(0,n.Lk)("p",null,"Heart Rate",-1)),(0,n.Lk)("h4",null,(0,a.v_)(t.heart_rate.value)+" bpm",1),(0,n.Lk)("p",null,[e[10]||(e[10]=(0,n.Lk)("br",null,null,-1)),(0,n.Lk)("span",null,(0,a.v_)(t.heart_rate.levels),1)])])):(0,n.Q3)("",!0)])))),128)),M.selectedPatient?((0,n.uX)(),(0,n.CE)("div",v,[e[14]||(e[14]=(0,n.Lk)("h3",null,"Diagnostic List",-1)),(0,n.Lk)("table",k,[e[13]||(e[13]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,"Problem/Diagnosis"),(0,n.Lk)("th",null,"Description"),(0,n.Lk)("th",null,"Status")])],-1)),(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(M.selectedPatient.diagnostic_list,((t,e)=>((0,n.uX)(),(0,n.CE)("tr",{key:e},[(0,n.Lk)("td",null,(0,a.v_)(t.name),1),(0,n.Lk)("td",null,(0,a.v_)(t.description),1),(0,n.Lk)("td",null,(0,a.v_)(t.status),1)])))),128))])])])):(0,n.Q3)("",!0)])])):(0,n.Q3)("",!0),(0,n.Lk)("div",null,[M.selectedPatient?((0,n.uX)(),(0,n.CE)("div",L,[(0,n.Lk)("div",m,[(0,n.Lk)("img",{src:M.selectedPatient.profile_picture,alt:"Patient Profile",class:"patient-profile-img"},null,8,_),(0,n.Lk)("h2",f,(0,a.v_)(M.selectedPatient.name),1),(0,n.Lk)("div",y,[e[18]||(e[18]=(0,n.Lk)("img",{class:"icon",src:"./assets/BirthIcon.png"},null,-1)),(0,n.Lk)("div",null,[e[17]||(e[17]=(0,n.Lk)("p",null,"Date Of Birth:",-1)),(0,n.Lk)("p",null,(0,a.v_)(A.formatDate(M.selectedPatient.date_of_birth)),1)])]),(0,n.Lk)("div",b,[e[20]||(e[20]=(0,n.Lk)("img",{class:"icon",src:"./assets/FemaleIcon.png"},null,-1)),(0,n.Lk)("div",null,[e[19]||(e[19]=(0,n.Lk)("p",null,"Gender:",-1)),(0,n.Lk)("p",null,(0,a.v_)(M.selectedPatient.gender),1)])]),(0,n.Lk)("div",P,[e[22]||(e[22]=(0,n.Lk)("img",{class:"icon",src:"./assets/PhoneIcon.png"},null,-1)),(0,n.Lk)("div",null,[e[21]||(e[21]=(0,n.Lk)("p",null,"Contact Lines:",-1)),(0,n.Lk)("p",null,(0,a.v_)(M.selectedPatient.phone_number),1)])]),(0,n.Lk)("div",C,[e[24]||(e[24]=(0,n.Lk)("img",{class:"icon",src:"./assets/PhoneIcon.png"},null,-1)),(0,n.Lk)("div",null,[e[23]||(e[23]=(0,n.Lk)("p",null,"Emergency Contacts:",-1)),(0,n.Lk)("p",null,(0,a.v_)(M.selectedPatient.emergency_contact),1)])]),(0,n.Lk)("div",D,[e[26]||(e[26]=(0,n.Lk)("img",{class:"icon",src:"./assets/InsuranceIcon.png"},null,-1)),(0,n.Lk)("div",null,[e[25]||(e[25]=(0,n.Lk)("p",null,"Insurance:",-1)),(0,n.Lk)("p",null,(0,a.v_)(M.selectedPatient.insurance_type),1)])]),e[27]||(e[27]=(0,n.Lk)("button",{class:"static-button"},"Show All Information",-1))])])):((0,n.uX)(),(0,n.CE)("div",w,"No patient selected.")),M.selectedPatient?((0,n.uX)(),(0,n.CE)("div",F,[e[29]||(e[29]=(0,n.Lk)("h3",null,"Lab Results",-1)),(0,n.Lk)("ul",E,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(M.selectedPatient.lab_results,((t,s)=>((0,n.uX)(),(0,n.CE)("div",{key:s},[(0,n.Lk)("p",null,(0,a.v_)(t),1),e[28]||(e[28]=(0,n.Lk)("img",{class:"download-icon",src:"./assets/icons8-download-64.png",alt:"Download Icon"},null,-1))])))),128))])])):(0,n.Q3)("",!0)])])}s(4114),s(8992),s(4520),s(1454),s(4979);var M=s(6912),A={data(){return{searchQuery:"",patients:[],selectedPatient:null,filteredDiagnosisHistory:[],selectedPoint:null,chart:null,selectedMonth:"",last6Months:[]}},created(){this.calculateLast6Months(),this.renderDiagnosisChart()},computed:{filteredPatients(){return this.patients.filter((t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase())))}},methods:{async fetchPatientDetails(){const t="coalition",e="skills-test",s=`${t}:${e}`,n=btoa(s);try{const t=await fetch("https://fedskillstest.coalitiontechnologies.workers.dev",{method:"GET",headers:{Authorization:`Basic ${n}`}}),e=await t.json();this.patients=e}catch(a){console.error("Error fetching patient details:",a)}},formatDate(t){const e=new Date(t);return new Intl.DateTimeFormat("en-US",{month:"long",day:"2-digit",year:"numeric"}).format(e)},selectPatient(t){this.selectedPatient=t,this.renderDiagnosisChart()},calculateLast6Months(){const t=["January","February","March","April","May","June","July","August","September","October","November","December"],e=new Date,s=[];for(let n=0;n<6;n++){const a=new Date;a.setMonth(e.getMonth()-n),s.push({label:`${t[a.getMonth()]} ${a.getFullYear()}`,value:`${t[a.getMonth()]} ${a.getFullYear()}`})}this.last6Months=s.reverse(),this.selectedMonth=this.last6Months[0].value},applyMonthFilter(){this.filteredDiagnosisHistory=this.selectedPatient.diagnosis_history.filter((t=>{const e=`${t.month} ${t.year}`;return e===this.selectedMonth})),this.renderDiagnosisChart()},renderDiagnosisChart(){this.$nextTick((()=>{if(this.selectedPatient&&this.selectedPatient.diagnosis_history&&this.selectedPatient.diagnosis_history.length>0){const t=this.filteredDiagnosisHistory.length>0?this.filteredDiagnosisHistory:this.selectedPatient.diagnosis_history,e=t.slice(-6),s=e.map((t=>t.heart_rate.value||0)),n=e.map((t=>t.respiratory_rate.value||0)),a=e.map((t=>t.temperature.value||0)),i=e.map((t=>{const e=new Date(`${t.month} 1, ${t.year}`).toLocaleString("en-US",{month:"short",year:"numeric"});return e})),l=document.getElementById("diagnosisChart");if(!l)return void console.error("Canvas element not found");const r=l.getContext("2d");if(!r)return void console.error("Canvas context could not be obtained");this.chart&&this.chart.destroy(),M.t1.register(M.ZT,M.No,M.PP,M.kc,M.FN,M.hE,M.m_,M.s$),this.chart=new M.t1(r,{type:"line",data:{labels:i,datasets:[{label:"Heart Rate (bpm)",data:s,borderColor:"pink",backgroundColor:"rgba(255, 105, 180, 0.5)",fill:!0},{label:"Respiratory Rate (breaths/min)",data:n,borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0},{label:"Temperature (°F)",data:a,borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]},options:{responsive:!0,plugins:{title:{display:!0,text:"Blood Pressure",align:"start",font:{size:14,weight:"bold"}}},scales:{x:{type:"category",labels:i,ticks:{autoSkip:!1,maxRotation:0,minRotation:0}}},layout:{padding:20},elements:{line:{tension:.4}},backgroundColor:"rgba(240, 240, 240, 0.2)",onClick:t=>{const e=this.chart.getElementsAtEventForMode(t,"nearest",{intersect:!0},!0);if(e.length){const t=e[0].index;this.selectedPoint=t}}}})}}))},getDiagnosisHistory(){return this.selectedPatient&&this.selectedPatient.diagnosis_history?this.selectedPatient.diagnosis_history:[]}},mounted(){this.fetchPatientDetails()}},S=s(1241);const X=(0,S.A)(A,[["render",I],["__scopeId","data-v-7182764c"]]);var x=X}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,i){if(!n){var l=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],i=t[u][2];for(var r=!0,o=0;o<n.length;o++)(!1&i||l>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[o])}))?n.splice(o--,1):(r=!1,i<l&&(l=i));if(r){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,a,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,l=n[0],r=n[1],o=n[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(o)var u=o(s)}for(e&&e(n);c<l.length;c++)i=l[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},n=self["webpackChunkmy_vue_project"]=self["webpackChunkmy_vue_project"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(704)}));n=s.O(n)})();
//# sourceMappingURL=app.29fd9ffa.js.map