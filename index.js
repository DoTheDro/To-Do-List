const form = document.getElementById('form')
const activity = document.getElementById('activity');
const listActivity = document.getElementById('listActivity');
const submitBtn = document.getElementById('btnSubmit');
const ol = document.createElement('ol');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (activity.value == '') {
		error.innerText = 'Please input tasks';
	} else {
		const li = document.createElement('li');
		li.innerText = activity.value;
		listActivity.append(ol);
		ol.setAttribute('id', 'tasks-lists');
		ol.append(li);
		li.innerText = activity.value;
		const deleteButton = document.createElement('button')
		li.append(deleteButton);
		deleteButton.innerText = "X"
		deleteButton.setAttribute('class', "delBtn")
		deleteButton.addEventListener('click', (e) => {
		ol.removeChild(li);
		});
		activity.value = '';
	}
}); 