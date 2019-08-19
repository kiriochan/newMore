import Mock from 'mockjs';
const Random = Mock.Random;
Mock.mock('/getdata5', {
    'code': 0,
    'data': {
        'list|3-15': [{
            'id|+1': 1,
            'image': Random.image('50ptx50pt', '#50B347', '#FFF', 'Mock.js'),
            'csentence': '@csentence(1,20)',
            'title': '@cword(2,10)',
            'text': '@cparagraph(2)',
            'comtime':'@datetime(M月d日 H:m)'
        }]
    },
    'message': 'ok'
});