// Sorts books by the three supported keys without mutating the input array.
export function sort(books, key) {
  const copy = books.slice();
  switch (key) {
    case "title":
      copy.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "author":
      copy.sort((a, b) => a.author.localeCompare(b.author));
      break;
    case "recent":
    default:
      // On Loan books are demoted to the end; each group keeps recency order.
      copy.sort((a, b) => {
        const aOnLoan = a.status === "On Loan" ? 1 : 0;
        const bOnLoan = b.status === "On Loan" ? 1 : 0;
        if (aOnLoan !== bOnLoan) {
          return aOnLoan - bOnLoan;
        }
        return b.order - a.order;
      });
      break;
  }
  return copy;
}
