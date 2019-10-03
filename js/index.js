const problems = Database.getProblems();

const cardsplaceElement = document.querySelector('[data-cardsplace]');

for (const problem of problems) {
    const html = Card.getHTML(problem);
    cardsplaceElement.append(html);
}