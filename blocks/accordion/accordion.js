export default function decorate(block) {
  [...block.children].forEach((currentRow, index) => {
    const currentTitle = currentRow.firstElementChild;
    currentTitle.classList.add('accordion-title');
    const currentContent = currentRow.lastElementChild;
    currentContent.classList.add('accordion-content');

    if (index === 0) {
      currentRow.classList.add('accordion-active');
    }

    currentTitle.addEventListener('click', () => {
      if (currentRow.classList.contains('accordion-active')) {
        currentRow.classList.remove('accordion-active');
      } else {
        [...block.children].forEach((row) => {
          row.classList.remove('accordion-active');
        });
        currentRow.classList.add('accordion-active');
      }
    });
  });
}
