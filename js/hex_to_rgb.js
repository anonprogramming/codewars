function hexStringToRGB(hexString)
{
	let rgb = {};
	rgb.r = parseInt(hexString[1]+hexString[2],16);
	rgb.g = parseInt(hexString[3]+hexString[4],16);
	rgb.b = parseInt(hexString[5]+hexString[6],16);
	return rgb;
}
console.log(hexStringToRGB("#FF9933"));