const btn_1 = document.querySelector(".number_1");
const btn_2 = document.querySelector(".number_2");
const btn_3 = document.querySelector(".number_3");
const btn_4 = document.querySelector(".number_4");
const btn_5 = document.querySelector(".number_5");
const btn_6 = document.querySelector(".number_6");
const btn_7 = document.querySelector(".number_7");
const btn_8 = document.querySelector(".number_8");
const btn_9 = document.querySelector(".number_9");
const btn_0 = document.querySelector(".number_0");
const btn_divide = document.querySelector(".number_divide");
const btn_mult = document.querySelector(".number_x");
const btn_plus = document.querySelector(".number_plus");
const btn_minus = document.querySelector(".number_minus");
const btn_eqv = document.querySelector(".number_eqv");
const result = document.querySelector(".form");

const calculation = {
	firstNum: [],
	action: {},
	secondNum: [],
};

function addNum(e) {
	if (Object.values(calculation.action).length == 0) {
		if (calculation.firstNum.length < 4) {
			calculation.firstNum.push(e);
			result.textContent = calculation.firstNum.join("");
		}
	} else {
		if (calculation.secondNum.length < 4) {
			calculation.secondNum.push(e);
			result.textContent = calculation.secondNum.join("");
		}
	}
}

btn_1.addEventListener("click", (e) => {
	addNum(e.target.textContent);
});

btn_2.addEventListener("click", (e) => {
	addNum(e.target.textContent);
});

btn_3.addEventListener("click", (e) => {
	addNum(e.target.textContent);
});

btn_4.addEventListener("click", (e) => {
	addNum(e.target.textContent);
});

btn_5.addEventListener("click", (e) => {
	addNum(e.target.textContent);
});

btn_6.addEventListener("click", (e) => {
	addNum(e.target.textContent);
});

btn_7.addEventListener("click", (e) => {
	addNum(e.target.textContent);
});

btn_8.addEventListener("click", (e) => {
	addNum(e.target.textContent);
});

btn_9.addEventListener("click", (e) => {
	addNum(e.target.textContent);
});

btn_0.addEventListener("click", (e) => {
	addNum(e.target.textContent);
});

btn_mult.addEventListener("click", (e) => {
	calculation.action.math = function(a, b) {
		return +a.join('') * +b.join('')
	};
	result.textContent = "";
});
btn_plus.addEventListener("click", (e) => {
	calculation.action.math = function(a, b) {
		return +a.join('') + +b.join('')
	}
	result.textContent = "";
});
btn_minus.addEventListener("click", (e) => {
	calculation.action.math = function(a, b) {
		return +a.join('') - +b.join('')
	}
	result.textContent = "";
});
btn_divide.addEventListener("click", (e) => {
	calculation.action.math = function(a, b) {
		return +a.join('') / +b.join('')
	}
	result.textContent = "";
});

btn_eqv.addEventListener('click', function() {
	result.textContent = calculation.action.math(calculation.firstNum, calculation.secondNum);
	calculation.firstNum = [];
	calculation.secondNum = [];
	calculation.action = {};
})