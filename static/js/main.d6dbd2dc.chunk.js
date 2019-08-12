(window["webpackJsonprandom-quote-machine"]=window["webpackJsonprandom-quote-machine"]||[]).push([[0],{33:function(t,n,e){t.exports=e(59)},59:function(t,n,e){"use strict";e.r(n);var o=e(0),a=e.n(o),i=e(20),r=e.n(i),u=e(2),c=e(21),s=e(22),l=e(29),m=e(23),f=e(30),d=e(3),b=e(24),h=e.n(b);function x(){var t=Object(u.a)(["animation: "," ","ms linear forwards"]);return x=function(){return t},t}function g(){var t=Object(u.a)(["\n    margin: 0;\n    ",";\n"]);return g=function(){return t},t}function p(){var t=Object(u.a)(["\n    0% {opacity: 1;}\n    50% {opacity: 0;}\n    100% {opacity: 1;}\n"]);return p=function(){return t},t}function T(){var t=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ",";\n    font-size: 30px;\n    padding: 40px 50px 0px;\n    flex-basis: 75%;\n    border-radius: 5px 5px 0 0;\n    background-color: white;\n    transition: color ","ms;\n"]);return T=function(){return t},t}function v(t){return a.a.createElement(w.QuoteBox,{id:"text",color:t.color,animationTime:t.animationTime},a.a.createElement(w.Text,{fade:t.fade,animationTime:t.animationTime},t.quote))}var w={};w.QuoteBox=d.b.div(T(),function(t){return t.color},function(t){return t.animationTime});var C=Object(d.c)(p());function j(){var t=Object(u.a)(["animation: "," ","ms linear forwards"]);return j=function(){return t},t}function q(){var t=Object(u.a)(["\n    margin: 0;\n    ",";\n"]);return q=function(){return t},t}function k(){var t=Object(u.a)(["\n    0% {opacity: 1;}\n    50% {opacity: 0;}\n    100% {opacity: 1;}\n"]);return k=function(){return t},t}function y(){var t=Object(u.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  color: ",";\n  font-size: 20px;\n  padding: 20px 50px 30px;\n  flex-basis: 12.5%;\n  background-color: white;\n  transition: color ","ms;\n"]);return y=function(){return t},t}function O(t){return a.a.createElement(E.AuthorBox,{id:"author",color:t.color,animationTime:t.animationTime},a.a.createElement(E.Text,{fade:t.fade,animationTime:t.animationTime},"- ",t.author))}w.Text=d.b.p(g(),function(t){return t.fade?Object(d.a)(x(),C,function(t){return t.animationTime}):""});var E={};E.AuthorBox=d.b.div(y(),function(t){return t.color},function(t){return t.animationTime});var B=Object(d.c)(k());E.Text=d.b.p(q(),function(t){return t.fade?Object(d.a)(j(),B,function(t){return t.animationTime}):""});var Q=e(27),N=e(28);function A(){var t=Object(u.a)(["\n  color: ",";\n  height: 35px;\n  font-size: 35px;\n  background-color: white;\n  transition: color ","ms;\n"]);return A=function(){return t},t}function S(t){return a.a.createElement("a",{id:"tweet-quote",href:'https://twitter.com/intent/tweet?text="'.concat(t.quote,'" -').concat(t.author),target:"_blank",rel:"noopener noreferrer"},a.a.createElement(z.TweetButton,{bgColor:t.bgColor,animationTime:t.animationTime},a.a.createElement(Q.a,{icon:N.a})))}var z={};function M(){var t=Object(u.a)(["\n  color: white;\n  border: none;\n  border-radius: 3px;\n  height: 35px;\n  background-color: ",";\n  transition: background-color ","ms;\n"]);return M=function(){return t},t}function R(t){return a.a.createElement(D.NewQuoteButton,{id:"new-quote",disabled:t.disabled,onClick:t.handleClick,bgColor:t.bgColor,animationTime:t.animationTime},"New Quote")}z.TweetButton=d.b.i(A(),function(t){return t.bgColor},function(t){return t.animationTime});var D={};function F(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 50px 30px;\n  flex-basis: 12.5%;\n  border-radius: 0 0 5px 5px;\n  background-color: white;\n"]);return F=function(){return t},t}function J(t){return a.a.createElement(I.Buttons,{id:"buttons"},a.a.createElement(S,{quote:t.quote,author:t.author,bgColor:t.color,animationTime:t.animationTime}),a.a.createElement(R,{handleClick:t.handleClick,disabled:t.disableNewQuote,bgColor:t.color,animationTime:t.animationTime}))}D.NewQuoteButton=d.b.button(M(),function(t){return t.bgColor},function(t){return t.animationTime});var I={};function _(){var t=Object(u.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  height: auto;\n"]);return _=function(){return t},t}function G(){var t=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background-color: ",";\n  transition: background-color ","ms;\n"]);return G=function(){return t},t}I.Buttons=d.b.div(F());var H=function(t){function n(){var t,e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=Object(l.a)(this,(t=Object(m.a)(n)).call.apply(t,[this].concat(a)))).state={quotes:"",quoteText:"",quoteAuthor:"",mainColor:"white",fade:!1,disableNewQuote:!1,animationTime:1500},e.handleClick=function(){e.setState({fade:!0,disableNewQuote:!0}),e.getColor(),setTimeout(function(){e.getRandomQuote()},e.state.animationTime/2),setTimeout(function(){e.setState({fade:!1,disableNewQuote:!1})},e.state.animationTime)},e.handleFade=function(){e.setState({fade:!e.state.fade,disableNewQuote:!e.state.disableNewQuote})},e.getRandomQuote=function(){var t=e.state.quotes[Math.floor(Math.random()*e.state.quotes.length)];e.setState({quoteText:t.quote,quoteAuthor:t.author})},e.getColor=function(){var t=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],n=t[Math.floor(Math.random()*t.length)];e.setState({mainColor:n})},e}return Object(f.a)(n,t),Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.body.style.margin=0,h.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(function(n){t.setState({quotes:n.data.quotes})}).catch(function(t){console.log("Error: ".concat(t))}).then(function(){t.getRandomQuote(),t.getColor()})}},{key:"render",value:function(){var t=this;return a.a.createElement(K.Background,{bgColor:this.state.mainColor,fade:this.state.fade,animationTime:this.state.animationTime},a.a.createElement(K.QuoteBox,{id:"quote-box",bgColor:this.state.mainColor},a.a.createElement(v,{quote:this.state.quoteText,color:this.state.mainColor,fade:this.state.fade,animationTime:this.state.animationTime,onAnimationEnd:function(){return t.setState({fade:!1,disableNewQuote:!1})}}),a.a.createElement(O,{author:this.state.quoteAuthor,color:this.state.mainColor,fade:this.state.fade,animationTime:this.state.animationTime}),a.a.createElement(J,{quote:this.state.quoteText,author:this.state.quoteAuthor,handleClick:this.handleClick,disableNewQuote:this.state.disableNewQuote,color:this.state.mainColor,fade:this.state.fade,animationTime:this.state.animationTime})))}}]),n}(a.a.Component),K={};K.Background=d.b.div(G(),function(t){return t.bgColor},function(t){return t.animationTime}),K.QuoteBox=d.b.div(_()),r.a.render(a.a.createElement(H,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d6dbd2dc.chunk.js.map