import Mock from 'mockjs';
const Random = Mock.Random;
Mock.mock('/getdata4', {
    'code': 0,
    'data': {
        'list|3-10': [{
            'id|+1': 1,
            'image': Random.image('50ptx50pt', '#50B347', '#FFF', 'Mock.js'),
            'name': '@cname',
            'sex|1': true
        }]
    },
    'message': 'ok',
    'systemDate': new Date().getTime()
});