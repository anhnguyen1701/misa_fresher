let focusState = false;

const comboboxInput = document.getElementById('combobox_input');
const comboboxBtn = document.getElementById('combobox_btn');
const comboboxData = document.getElementById('combobox_data');
const comboboxItems = comboboxData.querySelectorAll('li');

window.onload = function () {
    document.addEventListener('click', toggleComboboxData);
    comboboxItems.forEach((item) => {
        item.addEventListener('click', passValueToInput);
    })
}

// show and hide combobox data
function toggleComboboxData(event) {
    if (!focusState) {
        if (event.target === comboboxInput ||
            comboboxBtn.contains(event.target)
        ) {
            comboboxData.style.display = 'block';
            focusState = true;
        }
    } else {
        if (!comboboxData.contains(event.target)) {
            comboboxData.style.display = 'none';
            focusState = false;
        }
    }
}

function passValueToInput() {
    if (this.value == -1) {
        comboboxInput.value = '';
    } else {
        comboboxInput.value = this.innerHTML;
    }

    //delete
    try {
        let comboboxItemCheck = comboboxData.querySelector('.combobox__data-li-check');
        comboboxItemCheck.classList.remove('combobox__data-li-check');
        comboboxItemCheck.removeChild(comboboxItemCheck.querySelector('span'));
    } catch (error) {
        console.log(error);
    }

    //add
    let icon = '<span class="material-symbols-outlined icon"> done </span>';
    this.innerHTML += icon;
    this.classList.add('combobox__data-li-check');
}



