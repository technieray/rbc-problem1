import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MortagegeInput } from './model/mortgage';

@Injectable({
  providedIn: 'root'
})
export class ComputationService {

  constructor() { }
  subject=new Subject<any[]>();
  public computeMortgage(model:MortagegeInput){


    // var principal = parseFloat(document.getElementById("principal").value);

    //     var termOfLoan = parseFloat(document.getElementById("termOfLoan").value);

    //     var annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value);

        var percentageRate = model.rate / 1200;
        var lengthOfLoan = 12 * model.year;
        var monthlyPayment = ((model.amount-model.prepayment) * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
        var monthly = monthlyPayment.toFixed(2); 
    let result=[['Number of Payments',lengthOfLoan,lengthOfLoan],['Mortgage Payment',monthly,monthly],['Prepayment',model.prepayment,model.prepayment],['Principal Payments','N/A',model.amount],['Interest Payments','N/A','N/A'],['Total Cost','N/A','N/A']]
    this.subject.next(result)
  }
}
