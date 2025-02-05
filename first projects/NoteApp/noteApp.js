const titleInput = document.querySelector('.titleInput');
const addNote = document.querySelector('#plus');
const noteTitle =  document.querySelector('.title');

addNote.addEventListener('click', () => {
    noteTitle.textContent = titleInput.value;
});

  