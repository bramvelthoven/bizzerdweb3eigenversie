export interface IBaseProduct {
    title: string,
    price: number,
    discountApplied: boolean,
    mostChosen: boolean,
    folderName: string,
    imageLink: string
}
export interface IProduct extends IBaseProduct {
    id: string,
}

export const defaultProduct: IProduct = {
    title: 'standaard kaartje',
    price: 0.50,
    discountApplied: false,
    mostChosen: false,
    folderName: 'a',
    id: '1',
    imageLink: 'a'
}