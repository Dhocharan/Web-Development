const addtext = document.getElementById('add-text');
const listcontainer = document.getElementById('list-container');

function addItem() {
    if (addtext.value === '') {
        alert('You must write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = addtext.value;

        // Create the Edit button
        let editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.style.marginLeft = '10px';
        li.appendChild(editButton);

        // Create the Delete button
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.style.marginLeft = '10px';
        li.appendChild(deleteButton);

        // Add the list item to the container
        listcontainer.appendChild(li);

        // Clear the input field after adding the item
        addtext.value = '';

        // Event listener for editing the item
        editButton.addEventListener('click', function() {
            let newText = prompt('Edit your task:', li.firstChild.textContent); 
            if (newText !== null && newText.trim() !== '') {
                li.firstChild.textContent = newText.trim();
            }
        });

        // Event listener for deleting the item
        deleteButton.addEventListener('click', function() {
            listcontainer.removeChild(li);
        });
    }
}
