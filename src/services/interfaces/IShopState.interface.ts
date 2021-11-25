import {IUser} from "./IUser.interface";
import {ICard} from "./ICard.interface";

export interface IShopState {
    currentUser?: IUser;
    chosenCardState?: ICard;
}