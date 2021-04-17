export interface IAddCardParams {
    cardName: string,
    cardNumber: string,
    cardExpiry: string,
    cardCvc: string
}

export interface IAddCardResponse {
    success: boolean,
    data: { [key: string]: string } | string
}