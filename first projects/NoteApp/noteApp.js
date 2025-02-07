const titleInput = document.querySelector(".titleInput");
const plus = document.querySelector("#plus");
const main = document.querySelector("main");

plus.addEventListener("click", () => {
  const noteCard = document.createElement(`div`);
  noteCard.classList.add("note");

  const noteTitle = document.createElement(`p`);
  noteTitle.classList.add(`title`);
  noteTitle.textContent = titleInput.value;

  const hRule = document.createElement(`hr`);

  const contentOfCard = document.createElement(`p`);
  contentOfCard.classList.add(`noteContent`);

  const span = document.createElement(`span`);
  span.contentEditable = true;
  contentOfCard.appendChild(span);

  const closeBtnContainer = document.createElement(`div`);
  closeBtnContainer.classList.add(`closeBtnContainer`);

  const closeBtn = document.createElement(`button`);
  closeBtn.classList.add(`delContBtn`);
  closeBtn.textContent = `✖`;
  closeBtnContainer.appendChild(closeBtn);

  noteCard.appendChild(noteTitle);
  noteCard.appendChild(hRule);
  noteCard.appendChild(contentOfCard);
  noteCard.appendChild(closeBtnContainer);

  main.appendChild(noteCard);
});
