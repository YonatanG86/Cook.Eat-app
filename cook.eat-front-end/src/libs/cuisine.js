import React from "react";
import AmericanCuisine from '../img/types-of-cuisines/american.jpg';
import BrazilianCuisine from '../img/types-of-cuisines/brazilian.jpg';
import CaribbeanCuisine from '../img/types-of-cuisines/caribbean.png';
import ChineseCuisine from '../img/types-of-cuisines/chinese.jpeg';
import EnglishCuisine from '../img/types-of-cuisines/english.jpg';
import EthiopianCuisine from '../img/types-of-cuisines/ethiopian.jpg';
import FrenchCuisine from '../img/types-of-cuisines/french.png';
import FilipinoCuisine from '../img/types-of-cuisines/filipino.jpg';
import GeorgianCuisine from '../img/types-of-cuisines/georgian.jpg';
import GermanCuisine from '../img/types-of-cuisines/german.jpg';
import GreekCuisine from '../img/types-of-cuisines/greek.jpg';
import IndianCuisine from '../img/types-of-cuisines/indian.jpg';
import IndonesianCuisine from '../img/types-of-cuisines/indonesian.jpg';
import ItalianCuisine from '../img/types-of-cuisines/italian.jpg';
import JamaicanCuisine from '../img/types-of-cuisines/jamaican.jpeg';
import JapaneseCuisine from '../img/types-of-cuisines/japanese.jpg';
import JewishCuisine from '../img/types-of-cuisines/jewish.jpg';
import KoreanCuisine from '../img/types-of-cuisines/korean.jpg';
import MexicanCuisine from '../img/types-of-cuisines/mexican.jpg';
import PolishCuisine from '../img/types-of-cuisines/polish.jpg';
import PersianCuisine from '../img/types-of-cuisines/persian.jpg';
import PortugueseCuisine from '../img/types-of-cuisines/portuguese.jpg';
import RussianCuisine from '../img/types-of-cuisines/russian.jpg';
import SpanishCuisine from '../img/types-of-cuisines/spanish.jpg';
import ThaiCuisine from '../img/types-of-cuisines/thai.jpg';
import VietnameseCuisine from '../img/types-of-cuisines/vietnamese.jpg';

const cuisinePic = (cuisineType) => {

    if(cuisineType === 'Italian'){
        return ItalianCuisine
    } else if(cuisineType === 'American'){
        return AmericanCuisine
    } else if(cuisineType === 'Brazilian'){
        return BrazilianCuisine
    } else if(cuisineType === 'Caribbean'){
        return CaribbeanCuisine
    } else if(cuisineType === 'Chinese'){
        return ChineseCuisine
    } else if(cuisineType === 'English'){
        return EnglishCuisine
    } else if(cuisineType === 'Ethiopian'){
        return EthiopianCuisine
    } else if(cuisineType === 'French'){
        return FrenchCuisine
    } else if(cuisineType === 'Filipino'){
        return FilipinoCuisine
    } else if(cuisineType === 'Georgian'){
        return GeorgianCuisine
    } else if(cuisineType === 'German'){
        return GermanCuisine
    } else if(cuisineType === 'Greek'){
        return GreekCuisine
    } else if(cuisineType === 'Indian'){
        return IndianCuisine
    } else if(cuisineType === 'Indonesian'){
        return IndonesianCuisine
    } else if(cuisineType === 'Jamaican'){
        return JamaicanCuisine
    } else if(cuisineType === 'Japanese'){
        return JapaneseCuisine
    } else if(cuisineType === 'Jewish'){
        return JewishCuisine
    } else if(cuisineType === 'Korean'){
        return KoreanCuisine
    } else if(cuisineType === 'Mexican'){
        return MexicanCuisine
    } else if(cuisineType === 'Polish'){
        return PolishCuisine
    } else if(cuisineType === 'Persian'){
        return PersianCuisine
    } else if(cuisineType === 'Portuguese'){
        return PortugueseCuisine
    } else if(cuisineType === 'Russian'){
        return RussianCuisine
    } else if(cuisineType === 'Spanish'){
        return SpanishCuisine
    } else if(cuisineType === 'Thai'){
        return ThaiCuisine
    } else {
        return VietnameseCuisine
    }
}

export { cuisinePic }