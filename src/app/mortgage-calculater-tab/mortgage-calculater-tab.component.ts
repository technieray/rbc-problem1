import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Panel,GeneraicComponents } from '../model/components';
import { ComputationService } from '../computation.service';
import { MortagegeInput } from '../model/mortgage';
declare var Highcharts: any;
@Component({
  selector: 'app-mortgage-calculater-tab',
  templateUrl: './mortgage-calculater-tab.component.html',
  styleUrls: ['./mortgage-calculater-tab.component.css']
})
export class MortgageCalculaterTabComponent implements OnInit {

  panelList:Panel[]
  columns:string[];
  result:any[];
  constructor(private svc:ComputationService) { }

  ngOnInit(): void {
    this.svc.subject.subscribe((data)=>{
      this.result=data;
      console.log(this.result)
    })
    let txt1:GeneraicComponents={name:'Amount',labelTxt:'Mortgage Amount',type:'number',format:'currency'}
    let txt2:GeneraicComponents={name:'rate',labelTxt:'Interest Rate',type:'number',format:'percentage'}
    let txt3:GeneraicComponents={name:'preamt',labelTxt:'Prepayment Amount',type:'number',format:'currency'}
    let txt4:GeneraicComponents={name:'startpayment',labelTxt:'Start With Payment',type:'number'}
    let txt5:GeneraicComponents={name:'period',labelTxt:'Amortization Period',type:'select',options:[{key:'1 Year',value:1},{key:'5 Years',value:5},{key:'10 Years',value:10},{key:'15 Years',value:15},{key:'20 Years',value:20}]}
    let txt6:GeneraicComponents={name:'freq',labelTxt:'Payment Frequency',type:'select',options:[{key:'Weekly',value:1},{key:'Bi-Weekly',value:2},{key:'Monthly',value:3}]}
    let txt7:GeneraicComponents={name:'term',labelTxt:'Term',type:'select',options:[{key:'1 Years',value:2},{key:'2 Years',value:1},{key:'3 Years',value:3}]}
    let txt8:GeneraicComponents={name:'paymentfreq',labelTxt:'Payment Frequency',type:'select',options:[{key:'One Time',value:1},{key:'Each Year',value:2},{key:'Same as Regular Payment',value:3}]}
    let list1:GeneraicComponents[]=[];
    let panel1:Panel={headerTxt:"Payment Plan",components:[txt1,txt2,txt5,txt6,txt7]}
    let panel2:Panel={headerTxt:"Prepayment Plan",components:[txt3,txt8,txt4]}

    this.columns=['Category','Term','Amortization Period']
    this.panelList=[panel1,panel2]
  }

  ngAfterViewInt(){
    Highcharts.getJSON(
      'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
      function (data) {
  
          Highcharts.chart('container', {
              chart: {
                  zoomType: 'x'
              },
              title: {
                  text: 'USD to EUR exchange rate over time'
              },
              subtitle: {
                  text: document.ontouchstart === undefined ?
                      'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
              },
              xAxis: {
                  type: 'datetime'
              },
              yAxis: {
                  title: {
                      text: 'Exchange rate'
                  }
              },
              legend: {
                  enabled: false
              },
              plotOptions: {
                  area: {
                      fillColor: {
                          linearGradient: {
                              x1: 0,
                              y1: 0,
                              x2: 0,
                              y2: 1
                          },
                          stops: [
                              [0, Highcharts.getOptions().colors[0]],
                              [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                          ]
                      },
                      marker: {
                          radius: 2
                      },
                      lineWidth: 1,
                      states: {
                          hover: {
                              lineWidth: 1
                          }
                      },
                      threshold: null
                  }
              },
  
              series: [{
                  type: 'area',
                  name: 'USD to EUR',
                  data: data
              }]
          });
      }
  );
  }

  public calculate(){
    var amount=this.panelList[0].components.filter(x=>{return x.name=='Amount'})[0].value;
    var year=this.panelList[0].components.filter(x=>{return x.name=='period'})[0].value;
    var rate=this.panelList[0].components.filter(x=>{return x.name=='rate'})[0].value;
   var prepayment=this.panelList[1].components.filter(x=>{return x.name=='preamt'})[0].value;
    var obj:MortagegeInput={amount:amount,year:year,rate:rate,prepayment:prepayment?prepayment:0}

    this.svc.computeMortgage(obj);
  }

  


}
