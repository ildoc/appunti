import {Tweet} from './tweet';

export class TweetService {
    getTweets(): Tweet[]{
        return [
            {
                author: 'httyhyrtyw',
                nickname: '@gfhuidfashluidfas',
                pictureUrl: 'http://dummyimage.com/100x100/1',
                text: 'aaaaaaaaaa',
                liked: false,
                likes: 10,
            },
            {
                author: 'werwer',
                nickname: '@aaaaaffer',
                pictureUrl: 'http://dummyimage.com/100x100/2',
                text: 'fsdfsdfsdfsdfsdf',
                liked: true,
                likes: 6,
            },
            {
                author: 'dghdfg',
                nickname: '@gfhdfgd',
                pictureUrl: 'http://dummyimage.com/100x100/3',
                text: 'ghth4eh4thrthr4htr',
                liked: false,
                likes: 7,
            }
        ];
    }
}
