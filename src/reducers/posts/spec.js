import  {types} from './../../actions/types';
import postsReducer from './reducer';

describe('Posts reducers ', () => {
  it('should return default state', () =>{
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return a new state ig recieving type', () => {
      const posts = [{title:'test one'}, {title:'test 2 '}, { title:'Test 3' }];
      const newState = postsReducer(undefined , {
        type:types.GET_POSTS,
        payload: posts
      });
      expect(newState).toEqual(posts );
  });
});

