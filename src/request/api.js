// 发送电话号码验证码的接口
const SEND_CODE_API = '/api/user/login/send_phone_code';

// 根据电话号码和验证码登录的接口
const LOGIN_BY_CODE_API = '/api/user/login/login_by_code';

// 检查登录是否过期
const CHECK_LOGIN_API = '/api/user/check_login';

// 首页banner
const TEA_BANNER_API = '/api/main/banner';

// 店铺列表
const SHOP_LIST_API = '/api/main/shoplist';

// 菜单
const MENU_LIST_API = '/api/menu/list';

//下单
const ORDER_API = '/api/order/submit';

// 订单列表
const ORDER_LIST_API = '/api/order/list';

export default {
    SEND_CODE_API,
    LOGIN_BY_CODE_API,
    CHECK_LOGIN_API,
    TEA_BANNER_API,
    SHOP_LIST_API,
    MENU_LIST_API,
    ORDER_API,
    ORDER_LIST_API
}