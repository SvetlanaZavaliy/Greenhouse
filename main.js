const selectElements = document.querySelectorAll('.select');

selectElements.forEach(activateCustomSelect);

function activateCustomSelect(selectWrapper) {
    const realSelect = selectWrapper.querySelector('select');
	selectWrapper.querySelector('.select__value').innerText = realSelect.value;

	// Create array with values
	let labels = [];
	for (option of realSelect.options) labels.push(option.label);

	// Create HTML elements and render them on page
	const selectList = selectWrapper.querySelector('.select__list');

	labels.forEach((label) => {
		const li = document.createElement('li');
		li.classList.add('select__list-item');
		li.innerText = label;
		if (realSelect.value === label) li.classList.add('select__list-item--active');
		li.addEventListener('click', selectElement);
		selectList.append(li);
	});

	function selectElement(e) {
		console.log('Element CLICK!!!');

		// Select active element
		selectList.querySelector('.select__list-item--active').classList.remove('select__list-item--active');
		e.target.classList.add('select__list-item--active');

		// Set value
		selectWrapper.querySelector('.select__value').innerText = e.target.innerText;

		// Set real Select value
		realSelect.value = e.target.innerText;
	}

	selectWrapper.addEventListener('click', function () {
		selectList.classList.toggle('select__list--visible');
	});
}