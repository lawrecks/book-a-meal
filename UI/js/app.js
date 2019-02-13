const addToMenu = () => {
    let menu_select = document.getElementById('menu_item');
    let price = document.getElementById('price').value;
    // console.log(menu_select);
    let raw_image = document.getElementById('my_image').value;
    let done_button = document.getElementById('form_button');
    if (menu_select =='' || price =='' || raw_image=='')
        return;

    
    let image = raw_image.substring(12);
    let menu_item = menu_select.options [menu_select.selectedIndex].text;
    // console.log(menu_item);
    let menu_table = document.getElementById('menu_table');
    menu_table.style.visibility = 'visible';
    done_button.style.visibility = 'visible';
    let row = menu_table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = menu_item;
    cell2.innerHTML = price;
    cell3.innerHTML = `<img src="img/${image}" alt="menu image" width="100"/>`;
    menu_item = '';
    price = '';
}

const changeName = () => {
    let new_image = document.getElementById('new_image').files[0].name;
    let upload_button = document.getElementById('up_btn');
    // console.log(image_name);
    upload_button.innerHTML = new_image;

}
const changeName1 = () => {
    let new_image = document.getElementById('new_image1').files[0].name;
    let upload_button = document.getElementById('up_btn1');
    // console.log(image_name);
    upload_button.innerHTML = new_image;

}

const addNewMenuOption = () => {
    let new_menu = document.getElementById('new_menu').value;
    let new_price = document.getElementById('new_price').value;
    let new_image = document.getElementById('new_image').files[0];
    //  console.log(URL.createObjectURL(new_image));
    let meal_options = document.getElementById('meal_options');
    if (new_menu =='' || new_price =='' || new_image=='')
        return;

    // let image = new_image.substring(12);
    let new_div = document.createElement('div');
    new_div.className = 'meal-options-item';
    new_div.innerHTML = `<img src="${URL.createObjectURL(new_image)}" alt="${new_menu}" width="180" height="180"><h3>${new_menu}</h3>
    <h4>(&#8358;${new_price})</h4><div class="edit-delete"><button id="edit-button" onclick="openEditModal()">Edit</button><button id="delete-button" onclick="openDeleteModal()">Delete</button></div>`;
    // new_div.appendChild(new_item);
    meal_options.insertBefore(new_div, meal_options.childNodes[0]);

}

const showSideBar = () => {
    let side_bar = document.getElementById('my_sidebar');
    if (side_bar.style.display != 'block'){
        side_bar.style.display = 'block';
        side_bar.style.width = '43%';
    }
    else{
        side_bar.style.display = 'none';
        side_bar.style.width = '0';
    }

}

const openDeleteModal = () => {
    let modal = document.getElementById('delete_modal');
    let close_button = document.getElementsByClassName('close')[0];
    let cancel_button = document.getElementById('cancel_delete');
    let delete_button = document.getElementById('do_delete');
    modal.style.display = 'block';
    close_button.onclick = () => {
        modal.style.display = 'none';
    }
    cancel_button.onclick = () => {
        modal.style.display = 'none';
    }
    delete_button.onclick = () => {
        modal.style.display = 'none';
    }
    window.onclick = (event) => {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }

}

const openEditModal = () => {
    let modal = document.getElementById('edit_modal');
    let close_button = document.getElementsByClassName('close')[1];
    let cancel_button = document.getElementById('cancel_edit');
    let save_button = document.getElementById('save_edit');
    modal.style.display = 'block';
    close_button.onclick = () => {
        modal.style.display = 'none';
    }
    cancel_button.onclick = () => {
        modal.style.display = 'none';
    }
    save_button.onclick = () => {
        modal.style.display = 'none';
    }
    window.onclick = (event) => {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }

}