var app = getApp();
const baseurl = "https://wx.voiceaitech.com/wechat";
// const baseurl = "http://192.168.0.101:18040";
// const baseurl = "http://192.168.0.15:8070";
//  const baseurl = "http://192.168.0.11:8042";
// const baseurl ="http://192.168.0.103:8089"

const resurl = baseurl + '/static/wxmp/img'
const ApiRootUrl = baseurl + "/api/wx/mp";

function getASRURL(oriURL) {
  var ws_url = oriURL;
  if (ws_url.indexOf('https://') > -1) {
    ws_url = ws_url.replace('https://', 'wss://')
  } else if (ws_url.indexOf('http://') > -1) {
    ws_url = ws_url.replace('http://', 'ws://')
  } else {
    return ''
  }

  return ws_url
}

module.exports = {
  baseurl,
  resurl,
  AuthLoginByWeixin: ApiRootUrl + '/auth/loginByWeixin', //微信登录
  FileUpload: ApiRootUrl + '/file/upload', //上传文件
  FileUploadxx: ApiRootUrl + '/activity/file/mobileUpload', //上传文件
  CreateGroup: ApiRootUrl + '/group/create',   //创建分组
  GroupExits: ApiRootUrl + '/group/exists',   //查询分组是否存在

  VPRRegister: ApiRootUrl + '/vpr/enroll', //声纹注册
  VPRRegisterLong: ApiRootUrl + '/vpr/registerlongtext', //声纹长文本注册

  VPRVerify: ApiRootUrl + '/vpr/identify', //声纹验证
  VPRAnalyze: ApiRootUrl + '/vpr/analyze', //声纹提取(性别)
  deleteVPR: ApiRootUrl + '/vpr/delete',  //删除声纹

  compareVPR: ApiRootUrl + '/vpr/compare',  //对比声纹

  getText: ApiRootUrl + '/text/get',  //获取8位动态数字
  getexText: ApiRootUrl + '/text/getex',    //获取数字、固定、⾃由⽂本

  tagExist: ApiRootUrl + '/tag/exist',  //⽤户声纹是否存在
  VPRAnalyzeLong: ApiRootUrl + '/vpr/asvcheck', //声纹提取(活体)
  VPRVerify_SW: ApiRootUrl + '/vpr/shengwangadd', //添加声网信息
  AuthCode: ApiRootUrl + "/auth/authcode", //授权码
  
};