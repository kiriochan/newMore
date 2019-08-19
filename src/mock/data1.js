import Mock from 'mockjs';
const Random = Mock.Random;
Mock.mock('/getdata1?id=123', {
    'code': 0,
    'data': {
        'list|3-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'image': Random.image('91ptx134pt', '#50B347', '#FFF', 'Mock.js'),
            'csentence': '@csentence(4)',
            'text': '@cparagraph(10)'
        }]
    },
    'message': '操作成功',
    'systemDate': new Date().getTime()
});