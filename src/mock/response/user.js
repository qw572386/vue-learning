import Mock from 'mockjs'
const Random = Mock.Random
export const getUserInfo = (options) => {
  const template = {
    'str|2-4': 'qiwei',
    'name|5': 'qiwei',
    'age|+2': 18,
    'num|4-10': 0,
    'float|3-10.2-5': 0,
    'bool|1': true,
    'bool2|1-9': true, // min/(min+max)
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'obj2|1-2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2-4': [1, 2, 3, 4],
    'arr2|2': ['a', 'b'],
    'func': () => {
      return 'this is create by function'
    },
    'reg': /[1-9][a-z]/,
    // email: Random.email()
    email: Mock.mock('@email'),
    range: Random.range(3, 6, 1),
    date: Random.date('yyyy-MM-dd'),
    time: Random.time('hh:mm'),
    dateTime: Random.datetime('yyyy-MM-dd hh:mm:ss'),
    now: Random.now('hour', 'yyyy-MM-dd a hh:mm'),
    img: Random.image('100x200', '#00ff00', '#ffffff', 'png', 'qiwei'),
    img_base64: Random.dataImage(),
    color: Random.color(),
    cword: Random.cword('看来时代风格速度放缓', 2, 5),
    cname: Random.cname(),
    email2: Random.email('qiwei.com'),
    region: Random.region(),
    province: Random.province(),
    city: Random.city(true),
    county: Random.county(true),
    zip: Random.zip(),
    upperFirstLetter: Random.capitalize('qiwei'),
    pick: Random.pick([1, 2, 3, 4]),
    shuffle: Random.shuffle([1, 2, 3, 4]),
    guid: Random.guid(),
    id: Random.id(),
    fruit: Random.fruit(),
    fruit2: '@fruit'
  }
  return Mock.mock(template)
}
