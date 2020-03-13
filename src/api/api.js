import http from './http';
/*注册*/
export const api_register = params => http.post('/api/user/register', params).then(res => res.data);
/*登录*/
export const api_login = params => http.post('/api/user/login', params).then(res => res.data);
/*文章模块*/
//获取文章列表
export const api_getEssay= params => http.post('/api/essay/getEssayList', params).then(res => res.data);
//发布文章
export const  api_postEssay= params => http.post('/api/essay/addEssay', params).then(res => res.data);
//删除文章
export const api_delEssay= params => http.post('/api/essay/deleteEssay', params).then(res => res.data);
//修改文章
export const api_updateEssay= params => http.post('/api/essay/updateEssay', params).then(res => res.data);
//获取文章详情
export const api_getEssayInfo= params => http.post('/api/essay/getDetail', params).then(res => res.data);