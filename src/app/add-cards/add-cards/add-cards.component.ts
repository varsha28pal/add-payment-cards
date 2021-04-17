import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditCardValidators } from 'angular-cc-library';
import { IAddCardParams, IAddCardResponse } from './interfaces/add-cards.interface';
import { AddCardService } from './services/add-cards.service';

@Component({
  selector: 'app-add-cards',
  templateUrl: './add-cards.component.html',
  styleUrls: ['./add-cards.component.css']
})
export class AddCardsComponent implements OnInit {
  addCardGroup: FormGroup;
  addCardDetailsResponse: boolean;
  isFormSubmitted: boolean = false;
  
  constructor(private _addCardService: AddCardService) { }

  ngOnInit() {
    this.addCardGroup = new FormGroup({
      cardName: new FormControl('', [
        Validators.required
      ]),
      cardNumber: new FormControl('', [
          Validators.required,
          Validators.minLength(12),
          CreditCardValidators.validateCCNumber
      ]),
      cardExpiry: new FormControl('', [
        Validators.required,
        CreditCardValidators.validateExpDate
      ]),
      cardCvc: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(4)
      ]),
    })
  }

  getCardNameControl(): AbstractControl | null {
    return this.addCardGroup && this.addCardGroup.get('cardName');
  }
  getCardNumberControl(): AbstractControl | null {
    return this.addCardGroup && this.addCardGroup.get('cardNumber');
  }
  getCardExpiryControl(): AbstractControl | null {
    return this.addCardGroup && this.addCardGroup.get('cardExpiry');
  }
  getCardCvcControl(): AbstractControl | null {
    return this.addCardGroup && this.addCardGroup.get('cardCvc');
  }

  getCardNameErrorMsg(): string {
    if(this.getCardNameControl().errors.required) {
      return "Name on card is required.";
    }
  }

  getCardNumberErrorMsg(): string {
    if(this.getCardNumberControl().errors.required) {
      return "Card number is required.";
    } else if(this.getCardNumberControl().errors.ccNumber) {
      return "Card number is invalid.";
    }
  }

  getCardExpiryErrorMsg(): string {
    if(this.getCardExpiryControl().errors.required) {
      return "Expiry date is required.";
    } else if(this.getCardExpiryControl().errors.expDate) {
      return "Expiry date is invalid.";
    }
  }

  getCardCvcErrorMsg(): string {
    if(this.getCardCvcControl().errors.required) {
      return "Card security code is required.";
    } else if(this.getCardCvcControl().errors.minlength || this.getCardCvcControl().errors.maxlength) {
      return "Security code is invalid.";
    }
  }

  onAddCardDetails() {
    const params: IAddCardParams = {
      cardName: this.getCardNameControl().value,
      cardNumber: this.getCardNumberControl().value,
      cardExpiry: this.getCardExpiryControl().value,
      cardCvc: this.getCardCvcControl().value
    }
    this._addCardService.addCard(params).subscribe((response: IAddCardResponse) => {
      this.addCardDetailsResponse = response.success;
      this.isFormSubmitted = true;
    });
  }

  onFormReset() {
    this.addCardGroup.reset();
    this.addCardDetailsResponse = null;
    this.isFormSubmitted = false;
  }
}
