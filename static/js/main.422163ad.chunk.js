(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),l=(a(13),a(5)),c=a(1),o=a(2),u=a(4),m=a(3),g=(a(14),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).cache="",n.messages={EmptyDescAndValue:"Incorrectly set values"},n.validCalendarDate=function(){return n.props.currentDate<n.props.endDate},n.validInitialWeight=function(){return parseInt(n.props.initialWeight)>30},n.validDesiredWeight=function(){return parseInt(n.props.desiredWeight)>30},n.validHeight=function(){return parseInt(n.props.height)>150},n.validInputValues=function(){return n.validCalendarDate()&&n.validInitialWeight()&&n.validDesiredWeight()&&n.validHeight()},n.state={result:"0",emptyTitles:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.looseWeight,a=e.gainWeight,n=(e.initialWeight,e.desiredWeight,e.currentBMI),s=e.desiredBMI,i=e.numbersOfDays,l=e.getCurrentBmiText,c=e.getDesiredBmiText,o=e.isClickedCountButton,u=this.state,m=u.result,g=(u.emptyTitles,t>0),d=g?"loose":"gain",h=a>0,p=g||h,v=t/i,E=Math.abs(v).toFixed(2),b=Math.abs(t/(i/7)).toFixed(2);return r.a.createElement(r.a.Fragment,null,o()?this.validInputValues()?this.cache=r.a.createElement("section",{className:"results"},r.a.createElement("p",{className:"resultParagraf"},p?"You want "+d+" ":"",r.a.createElement("strong",null,g?Math.abs(t)+" kg":""),r.a.createElement("strong",null,h?Math.abs(a)+" kg ":"")),r.a.createElement("p",{className:"resultParagraf"},""===l()?"":"Your current BMI is"," ",r.a.createElement("strong",null,!m||n)," ","(",l(),")"),r.a.createElement("p",{className:"resultParagraf"},""===c()?"":"Your desired BMI is"," ",r.a.createElement("strong",null,r.a.createElement("strong",null,!m||s)," ")," ","(",c(),")"),r.a.createElement("p",{className:"resultParagraf"},"You should"," ",p?d:""," ",r.a.createElement("strong",null,p?E:""," ","kg")," ","per day"),r.a.createElement("p",{className:"resultParagraf"},"You should"," ",p?d:""," ",r.a.createElement("strong",null,i<7?g?Math.abs(t):h?Math.abs(a):"":p?b:""," kg")," ","per week")):this.cache=r.a.createElement("p",{className:"results",style:{color:"red"}}," ",this.messages.EmptyDescAndValue):this.cache)}}]),a}(n.Component)),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.initialWeight,a=e.desiredWeight,n=e.height,s=e.currentDate,i=e.endDate,l=e.handleChangeEvent;return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{className:"progress_section_item"},r.a.createElement("label",{className:"progress_section_label"},"Initial weight :"),r.a.createElement("div",{className:"progress_section_data"},r.a.createElement("input",{className:"progress_bar_input",type:"range",step:"1",min:"30",max:"130",name:"initialWeight",value:t,onChange:l}),r.a.createElement("p",{className:"progress_bar_result"},t,"kg"))),r.a.createElement("article",{className:"progess_section_item"},r.a.createElement("label",{className:"progess_section_label"},"Desired weight :"),r.a.createElement("div",{className:"progress_section_data"},r.a.createElement("input",{className:"progress_bar_input",type:"range",step:"1",min:"30",max:"130",name:"desiredWeight",value:a,onChange:l}),r.a.createElement("p",{className:"progress_bar_result"},a,"kg"))),r.a.createElement("article",{className:"progress_section_item"},r.a.createElement("label",{className:"progress_section_label"},"Height :"),r.a.createElement("div",{className:"progress_section_data"},r.a.createElement("input",{className:"progress_bar_input",type:"range",step:"1",min:"150",max:"200",name:"height",value:n,onChange:l}),r.a.createElement("p",{className:"progress_bar_result"},n,"cm"))),r.a.createElement("article",{className:"progess_section_item"},r.a.createElement("label",{htmlFor:"date",name:"start-date"},"Start date:"),r.a.createElement("div",{className:"progress_section_data"},r.a.createElement("input",{className:"progress_bar_input",type:"date",name:"currentDate",defaultValue:s,min:s,onChange:l}))),r.a.createElement("article",{className:"progress_section_item"},r.a.createElement("label",{htmlFor:"date",name:"end-date"},"End date:"),r.a.createElement("div",{className:"progress_section_data"},r.a.createElement("input",{className:"progress_bar_input",type:"date",name:"endDate",defaultValue:i,min:s,onChange:l}))))}}]),a}(n.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(c.a)(this,a),(n=t.call(this,e)).handleChangeEvent=function(e){var t,a=e.target,r=a.name,s=a.value;n.setState((t={},Object(l.a)(t,r,s),Object(l.a)(t,"clickedCountButton",!1),t))},n.handleCountButton=function(){n.getLoseandGain(),n.getNumberofDays(),n.getBMI(),n.setState({clickedCountButton:!0})},n.isClickedCountButton=function(){return n.state.clickedCountButton},n.getLoseandGain=function(){var e=n.state,t=e.desiredWeight,a=e.initialWeight,r=a-t,s=t-a;n.setState({looseWeight:r,gainWeight:s})},n.getNumberofDays=function(){var e=n.state,t=e.currentDate,a=e.endDate,r=new Date(t)-new Date(a),s=Math.round(Math.abs(r/864e5));n.setState({currentDate:t,endDate:a,numbersOfDays:s})},n.getBMI=function(){var e=n.state,t=e.initialWeight,a=e.desiredWeight,r=e.height,s=(t/Math.pow(r/100,2)).toFixed(1),i=(a/Math.pow(r/100,2)).toFixed(1);n.setState({currentBMI:s,desiredBMI:i})},n.getCurrentBmiText=function(){var e=n.state.currentBMI;return e<=0?"":e<"15"?"Very severely underweight":e<"16"?"Severely underweight":e<"18,5"?"Underweight":e<"25"?"Normal":e<"30"?"Overweight":e<"35"?"Moderately obese ":e<"40"?"Severely obese ":"Very severely obese "},n.getDesiredBmiText=function(){var e=n.state.desiredBMI;return e<=0?"":e<"15"?"Very severely underweight":e<"16"?"Severely underweight":e<"18,5"?"Underweight":e<"25"?"Normal":e<"30"?"Overweight":e<"35"?"Moderately obese ":e<"40"?"Severely obese ":"Very severely obese "};var r=new Date,s=new Date;s.setDate(r.getDate()+1);var i=r.toISOString().slice(0,10),o=s.toISOString().slice(0,10);return n.state={initialWeight:"30",desiredWeight:"30",height:"150",looseWeight:"",gainWeight:"",currentBMI:"",desiredBMI:"",currentDate:i,endDate:o,numbersOfDays:"",emptyView:null,clickedCountButton:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.initialWeight,a=e.desiredWeight,n=e.height,s=e.looseWeight,i=e.gainWeight,l=e.currentBMI,c=e.desiredBMI,o=e.currentDate,u=e.endDate,m=e.numbersOfDays;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},"Desired web calculator"),r.a.createElement("main",{className:"calculator_content"},r.a.createElement("section",{className:"progress_session"},r.a.createElement(d,{handleChangeEvent:this.handleChangeEvent,initialWeight:t,desiredWeight:a,height:n,currentDate:o,endDate:u}),r.a.createElement(g,{looseWeight:s,gainWeight:i,initialWeight:t,desiredWeight:a,height:n,currentBMI:l,desiredBMI:c,currentDate:o,endDate:u,numbersOfDays:m,getCurrentBmiText:this.getCurrentBmiText,getDesiredBmiText:this.getDesiredBmiText,isClickedCountButton:this.isClickedCountButton})),r.a.createElement("div",{className:"button_position"},r.a.createElement("button",{onClick:this.handleCountButton,className:"button "},"Count"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.422163ad.chunk.js.map