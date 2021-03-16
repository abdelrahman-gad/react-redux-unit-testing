import moxios from 'moxios';
import {testStore} from './../utils';
import {fetchPosts} from './../actions';

describe('fetchPosts',()=>{
    beforeEach(()=>{
        moxios.install();
    });
    afterEach(()=>{
        moxios.uninstall();
    });

    it('Store must update correctly',()=>{
        const expectedState = [
            { title:'Title 1',body:'body 1' },
            { title:'Title 2',body:'body 2' },
            { title:'Title 3',body:'body 3' },
        ];
        const store = testStore();
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:expectedState
            });
        });
        return store.dispatch(fetchPosts()).then(()=>{
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        });
    }); 
});