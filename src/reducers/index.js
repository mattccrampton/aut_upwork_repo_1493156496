import cart from './cart';
import { combineReducers } from 'redux';
import {default as RightColTopBooks} from '../pages/homepage/RightColTopBooks.duck';
import {default as TopBooksOLD} from '../pages/homepage/TopBooks.duck';
import {default as LeftList} from '../scenes/Homepage/ThirdRow/LeftList/LeftList.duck';
import {default as CenterList} from '../scenes/Homepage/ThirdRow/CenterList/CenterList.duck';
import {default as RightList} from '../scenes/Homepage/ThirdRow/RightList/RightList.duck';
import {default as TopBooks} from '../scenes/Homepage/TopBooks/TopBooks.duck';

//console.log("import reducer test", RightColTopBooks);


const rootReducer = combineReducers({
    cart : cart,
    RightColTopBooks : RightColTopBooks,
    TopBooks : TopBooksOLD,
    Homepage_ThirdRow_LeftList   : LeftList,
    Homepage_ThirdRow_CenterList : CenterList,
    Homepage_ThirdRow_RightList : RightList,
    Homepage_TopBooks : TopBooks,
});

export default rootReducer;
