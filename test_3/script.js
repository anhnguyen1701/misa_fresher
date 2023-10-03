let focusState = false;

const comboboxInput = document.getElementById('combobox_input');
const comboboxBtn = document.getElementById('combobox_btn');
const comboboxData = document.getElementById('combobox_data');
const comboboxItems = comboboxData.querySelectorAll('li');

window.onload = function () {
    console.log(comboboxData);
    document.addEventListener('click', toggleComboboxData);
    comboboxItems.forEach((item) => {
        item.addEventListener('click', passValueToInput);
    })
    comboboxInput.addEventListener('click', filter);
    comboboxBtn.addEventListener('click', filter)
    comboboxInput.addEventListener('keyup', filter);
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

//pass valuet to input and reset css
function passValueToInput() {
    if (this.value == -1)
        comboboxInput.value = '';
    else
        comboboxInput.value = this.querySelector('.combobox__data-li-text').innerText;

    //delete
    try {
        let comboboxItemCheck = comboboxData.querySelector('.combobox__data-li-check');
        comboboxItemCheck.classList.remove('combobox__data-li-check');
        comboboxItemCheck.removeChild(comboboxItemCheck.querySelector('.icon'));
    } catch (error) {
        console.log(error);
    }

    //add
    let icon = '<span class="material-symbols-outlined icon"> done </span>';
    this.innerHTML += icon;
    this.classList.add('combobox__data-li-check');
}

//search
function filter() {
    let keyword = comboboxInput.value.toLowerCase();
    let list = comboboxData.querySelectorAll('.combobox__data-li-text');

    list.forEach((item) => {
        if (item.innerText.toLowerCase().indexOf(keyword) > -1) {
            item.parentNode.style.display = '';
        } else {
            item.parentNode.style.display = "none";
        }
    })

    comboboxData.querySelector('li[value="-1"]').style.display = '';
}


