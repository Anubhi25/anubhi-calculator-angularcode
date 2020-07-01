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
  longButtons:string[]=['AC','CE'];
  buttons:string[]=['sqrt','sqr','log','%','exp','pi','(',')','7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+'];
  private prev:string='';
  private curr:string='';
  n1:number=0;
  fact:number=1;
  add(value:string) {
    if(this.result!='') {
       this.prev=this.curr;
       this.curr=value;
    }
    if(value=='AC') {
      this.result='';
      this.prev='';
      this.curr='';
    }
    else if(value=='CE') {
      this.result=this.prev!='=' ? this.result.slice(0,-1) : this.result;
    }
    else if(value=='=') {
      if(!((this.result.startsWith('sqrt'))||(this.result.startsWith('sqr'))||(this.result.startsWith('log'))||(this.result.startsWith('pi')))) {
        this.result=eval(this.result);
      } 
      if((this.result.startsWith('sqrt'))) {
        this.required=this.result.substr(4);
        this.n1=Number(Math.sqrt(Number(this.required)).toFixed(10));
        this.result=this.n1.toString();
      }
      if((this.result.startsWith('sqr'))) {
        this.required=this.result.substr(3);
        this.n1=Math.pow((Number(this.required)),2);
        this.result=this.n1.toString();
      }
      if((this.result.startsWith('log'))) {
        this.required=this.result.substr(3);
        this.n1=Number(Math.log(Number(this.required)).toFixed(10));
        this.result=this.n1.toString();
      }
      if((this.result.startsWith('exp'))) {
        this.required=this.result.substr(3);
        this.n1=Number(Math.exp(Number(this.required)).toFixed(10));
        this.result=this.n1.toString();
      }   
    }
    else if((value=='/'&&this.result=='')||(value=='+'&&this.result=='')||(value=='*'&&this.result=='')||(value=='%'&&this.result=='')) {
      this.result='';
    }
    else if(value=='sqrt') {
      this.result+=value;
      this.required=this.result.substr(4);
      if(this.required.includes('sqrt')) {
        this.result='sqrt';
      }
    }
     else if(value=='sqr') {
      this.result+=value;
      this.required=this.result.substr(3);
      if(this.required.includes('sqr')) {
        this.result='sqr';
      }
    }
     else if(value=='log') {
      this.result+=value;
      this.required=this.result.substr(3);
      if(this.required.includes('log')) {
        this.result='log';
      }
    }
    else if(value=='exp') {
      this.result+=value;
      this.required=this.result.substr(3);
      if(this.required.includes('exp')) {
        this.result='exp';
      }
    }
    else if(value=='pi') {
      this.result=3.14.toString();
      this.required=this.result.substr(2);
      if(this.required.includes('pi')) {
        this.result='3.14';
      }
    }
    else 
    {
        if(!((this.prev=='+' && this.curr=='+')
        ||(this.prev=='-' && this.curr=='-')||(this.prev=='*' && this.curr=='*')||(this.prev=='/' && this.curr=='/')||(this.prev=='%' && this.curr=='%')||(this.prev=='%' && this.curr=='/')|| (this.prev=='%' && this.curr=='*')||(this.prev=='%' && this.curr=='-')||(this.prev=='%' && this.curr=='+')||(this.prev=='/' && this.curr=='%')||(this.prev=='/' && this.curr=='*')||(this.prev=='/' && this.curr=='+') ||(this.prev=='*' && this.curr=='%')||(this.prev=='*' && this.curr=='/')||(this.prev=='*' && this.curr=='+')||(this.prev=='-' && this.curr=='%')||(this.prev=='-' && this.curr=='/')||(this.prev=='-' && this.curr=='*')||(this.prev=='-' && this.curr=='+')||(this.prev=='+' && this.curr=='%')||(this.prev=='+' && this.curr=='/')||(this.prev=='+' && this.curr=='*')))
        {
              this.result+=value;
        }
    }
   }
   } 
    

  

