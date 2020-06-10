import { MovieSideSheetState } from 'app/containers/MovieSideSheet/types';
import { HomePageState } from 'app/containers/HomePage/types';
import { SearchSheetState } from 'app/containers/SearchSheet/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  movieSideSheet?: MovieSideSheetState;
  homePage?: HomePageState;
  searchSheet?: SearchSheetState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
