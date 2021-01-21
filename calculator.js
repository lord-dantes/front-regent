// parse price to html
const allPrice = document.querySelectorAll('[data-price]');
for (let i = 0; i < allPrice.length; i++) {
	allPrice[i].innerHTML = allPrice[i].getAttribute('data-price');
}
// start function with checked item
const btnList = document.querySelectorAll('.calc-table-item-btn button');
for (let i = 0; i < btnList.length; i++) {
	btnList[i].addEventListener('click', function(e){
		const calcCheck = this.parentNode.parentNode.querySelector('input[type=checkbox]').checked;
		if (!calcCheck) {
			changeItem(this);
			changePrice(this);
		}
	});
}
// result quantity items
function changeItem(el){
	const selectBtn = el.classList.contains('up');
	const calcItem = el.parentNode.parentNode;
	let calcItemValue = parseInt(calcItem.querySelector('.calc-table-item-count span').innerHTML);
	selectBtn ? calcItemValue++ : calcItemValue--;
	calcItemValue < 1 ? calcItemValue = 1 :
	calcItem.querySelector('.calc-table-item-count span').innerHTML = calcItemValue;
}
// result price one item
function changePrice(el){
	const calcItem = el.parentNode.parentNode;
	const calcItems = parseInt(calcItem.querySelector('.calc-table-item-count span').innerHTML);
	let calcItemPrice = parseInt(calcItem.querySelector('.calc-table-item-price span').getAttribute('data-price'));
	isNaN(calcItemPrice) ? calcItemPrice = 0 : calcItemPrice *= calcItems;
	calcItem.querySelector('.calc-table-item-price span').innerHTML = calcItemPrice;
}
// result basic & addons price
const allCheckboxBasic = document.getElementsByClassName('calc-item__checkbox--basic');
for (let i = 0; i < allCheckboxBasic.length; i++) {
	allCheckboxBasic[i].addEventListener('click', function(e){
		const priceItem = parseInt(allCheckboxBasic[i].parentNode.querySelector('.calc-table-item-price span').innerHTML);
		let priceAll = parseInt(document.querySelector('.price-items').innerHTML);
		this.checked ? priceAll += priceItem : priceAll -= priceItem
		document.querySelector('.price-items').innerHTML = priceAll;
	});
}
const allCheckboxAddons = document.getElementsByClassName('calc-item__checkbox--addons');
for (let i = 0; i < allCheckboxAddons.length; i++) {
	allCheckboxAddons[i].addEventListener('click', function(e){
		const priceItem = parseInt(allCheckboxAddons[i].parentNode.querySelector('.calc-table-item-price span').innerHTML);
		let priceAll = parseInt(document.querySelector('.price-items--addons').innerHTML);
		this.checked ? priceAll += priceItem : priceAll -= priceItem
		document.querySelector('.price-items--addons').innerHTML = priceAll;
	});
}
// result final price
const allCheckbox = document.getElementsByClassName('calc-item__checkbox');
for (let i = 0; i < allCheckbox.length; i++) {
	allCheckbox[i].addEventListener('click', function(e){
		let priceAll = parseInt(document.querySelector('.price-all').innerHTML);
		const priceItems = parseInt(document.querySelector('.price-items').innerHTML);
		const priceAddons = parseInt(document.querySelector('.price-items--addons').innerHTML);
		priceAll = priceItems + priceAddons;
		document.querySelector('.price-all').innerHTML = priceAll;
	});
};