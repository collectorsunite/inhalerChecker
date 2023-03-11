const checkboxes = document.querySelectorAll('.checkbox');
const total = document.querySelector('#total');

// check local storage for any previously checked checkboxes
for (let i = 0; i < checkboxes.length; i++) {
  const checkboxName = checkboxes[i].name;
  const checkboxValue = localStorage.getItem(checkboxName);

  if (checkboxValue === 'true') {
    checkboxes[i].checked = true;
  }
}

// update the total and save to local storage on change
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    let checkedCount = document.querySelectorAll('.checkbox:checked').length;
    total.innerText = checkedCount;

    const checkboxName = checkbox.name;
    const checkboxValue = checkbox.checked;
    localStorage.setItem(checkboxName, checkboxValue);
  })
})
