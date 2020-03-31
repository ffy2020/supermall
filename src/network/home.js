import { request } from './request';

export function getHomeMultidata() {

    return request({
        url: '/mock/93042/home'
    })
}