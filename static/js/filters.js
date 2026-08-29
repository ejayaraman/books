// Composes genre, language and status filters with AND logic. "all" bypasses a filter.
export function apply(books, { genre, language, status }) {
  return books.filter((book) => {
    if (genre && genre !== "all" && book.genre !== genre) {
      return false;
    }
    if (language && language !== "all" && book.language !== language) {
      return false;
    }
    if (status && status !== "all" && book.status !== status) {
      return false;
    }
    return true;
  });
}
