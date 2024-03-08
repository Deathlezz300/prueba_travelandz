import {Router} from 'express'
import { getFilterData, getHotelsSearch, getPossibleCountries, getPossiblesCities } from '../controllers/FiltersController';

const FilterRouter=Router();


FilterRouter.get('/',getFilterData)

FilterRouter.get('/hotel/:citycode',getHotelsSearch);

FilterRouter.get('/:countrycode/cities',getPossiblesCities)

FilterRouter.get('/countries',getPossibleCountries)

export default FilterRouter