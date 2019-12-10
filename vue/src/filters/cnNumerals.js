export const cnNumerals = (n) => {
  // 只转换两位数字
  var arr  = n.toString().split('')
  var numArr = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
  var unitArr = ['', '十', '百', '千', '万']
  var str = '';
  for (var i = 0; i < arr.length; i ++) {
    str += numArr[arr[i] * 1] + unitArr[arr.length - i -1]
  }
  return str
}