export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      content: "en1",
    },
    ge: {
      content: "ge1",
    },
  },
  // content: {
  //   locales: {
  //     "*": {
  //       dir: "content", // Load content from the 'content' directory for all languages
  //     },
  //   },
  // },
}));
