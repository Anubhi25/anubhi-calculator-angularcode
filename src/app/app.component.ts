import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  name = 'Calculator';
  required:string='';
  result:string='';
  subresult:string='';
  longButtons:string[]=['AC','CE'];
  buttons:string[]=['sqrt','sqr','log','%','exp','pi','+/-','1/x','7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+'];
  private prev:string='';
  private curr:string='';
  lasttoken:string='';
  beforelasttoken:string='';
  n1:number=0;
  fact:number=1;
  j:number=0;
  k:number=0;
  isFloat="false";
  add(value:string) {
    if(this.subresult!='') {
       this.prev=this.curr;
       this.curr=value;
    }
    if(value=='AC') {
      this.result='';
      this.subresult='';
      this.prev='';
      this.curr='';
      this.isFloat='false';
    }
    else if(value=='CE') {
      this.subresult=this.prev!='=' ? this.subresult.slice(0,-1) : this.subresult;
    }
    else if(value=='=') {

      if(!((this.subresult.includes('sqrt'))||(this.subresult.includes('sqr'))||(this.subresult.includes('log'))||(this.subresult.includes('pi'))||(this.subresult.includes('exp')))) {
        if(this.subresult.length<15) 
        this.subresult=this.result+this.beforelasttoken+this.lasttoken;
        this.result=eval(this.subresult);
      } 
      if((this.subresult.includes('sqrt'))) {
        var index=this.subresult.indexOf('sqrt');
        this.required=this.subresult.slice(0,index);
        this.n1=Number(Math.sqrt(Number(this.required)).toFixed(10));
        this.result=this.n1.toString();
      }
      if((this.subresult.includes('sqr'))) {
        var index=this.subresult.indexOf('sqr');
        this.required=this.subresult.slice(0,index);
        this.n1=Math.pow((Number(this.required)),2);
        this.result=this.n1.toString();
      }
      if((this.subresult.includes('log'))) {
        var index=this.subresult.indexOf('log');
        this.required=this.subresult.slice(0,index);
        this.n1=Number(Math.log(Number(this.required)).toFixed(10));
        this.result=this.n1.toString();
      }
      if((this.subresult.includes('exp'))) {
        var index=this.subresult.indexOf('exp');
        this.required=this.subresult.slice(0,index);
        this.n1=Number(Math.exp(Number(this.required)).toFixed(10));
        this.result=this.n1.toString();
      }   
    }
    else if((value=='/'&&this.subresult=='')||(value=='+'&&this.subresult=='')||(value=='*'&&this.subresult=='')||(value=='%'&&this.subresult=='')) {
      this.subresult='';
    }
    else if(value=='sqrt') {
      if(!this.subresult.includes('sqrt')) {
        this.subresult+=value;
    }
    }
     else if(value=='sqr') {
      if(!this.subresult.includes('sqr')) {
        this.subresult+=value;
    }
    }
     else if(value=='log') {
      if(!this.subresult.includes('log')) {
        this.subresult+=value;
    }
    }
    else if(value=='exp') {
      if(!this.subresult.includes('exp')) {
        this.subresult+=value;
    }
    }
    else if(value=='pi') {
      if(!this.subresult.includes('pi')) {
        this.subresult=3.14.toString();
        this.result=3.14.toString();
    }
    } else if(value=='.') {
      if(this.isFloat=='false') {
        this.subresult+=value;
        this.isFloat='true';
      }        
    }
    else if(value=='+/-') {
      this.required='this.result*(-1)';
      this.result=eval(this.required);
      this.subresult=this.result;   
    }
    else if(value=='1/x') {
      this.n1=1/Number(this.subresult);
      this.subresult=this.n1.toFixed(5).toString();
      this.result=this.n1.toFixed(5).toString();
    }
    else if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%') {
      this.isFloat='false';
      this.subresult+=value;
    }
    
    else 
    {
        if(!((this.prev=='+' && this.curr=='+')
        ||(this.prev=='-' && this.curr=='-')||(this.prev=='*' && this.curr=='*')||(this.prev=='/' && this.curr=='/')||(this.prev=='%' && this.curr=='%')||(this.prev=='%' && this.curr=='/')|| (this.prev=='%' && this.curr=='*')||(this.prev=='%' && this.curr=='-')||(this.prev=='%' && this.curr=='+')||(this.prev=='/' && this.curr=='%')||(this.prev=='/' && this.curr=='*')||(this.prev=='/' && this.curr=='+') ||(this.prev=='*' && this.curr=='%')||(this.prev=='*' && this.curr=='/')||(this.prev=='*' && this.curr=='+')||(this.prev=='-' && this.curr=='%')||(this.prev=='-' && this.curr=='/')||(this.prev=='-' && this.curr=='*')||(this.prev=='-' && this.curr=='+')||(this.prev=='+' && this.curr=='%')||(this.prev=='+' && this.curr=='/')||(this.prev=='+' && this.curr=='*')||(this.prev=='.' && this.curr=='%')||(this.prev=='.' && this.curr=='*')||(this.prev=='.' && this.curr=='/')||(this.prev=='.' && this.curr=='-')||(this.prev=='.' && this.curr=='+')||(this.curr=='+/-')))
        {
            if(this.subresult.length<15) {
            this.subresult+=value;
            if(Number.isInteger(eval(this.subresult))) 
            this.result=eval(this.subresult);
            else
            this.result=eval(this.subresult).toFixed(5);
            this.lasttoken=this.subresult[this.subresult.length-1];
            this.beforelasttoken=this.subresult[this.subresult.length-2];
        }
        }
    }
   }
   } 
    

  

