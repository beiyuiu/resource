/*只做闰年判断，通过参数传递进来要判断的年份，返回boolean的值表示是否为闰年*/

/**
 * 判断指定年份是否为闰年
 * 参数 ：year，表示要判断的年份
 * 返回值 ：返回是否为闰年的结果，true，表示是闰年，false，表示不是闰年
 */
function isRun(year){
	return year%4==0&&year%100!=0||year%400==0;
}