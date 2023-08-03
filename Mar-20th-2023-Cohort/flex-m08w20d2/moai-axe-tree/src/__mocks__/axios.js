export default {
  defaults: { baseURL: "" },
  get: jest.fn((url) => {
    if (url === "/high-scores") {
      return Promise.resolve({
        status: 200,
        data: [
          {
            id: 1,
            name: "Scott Schofield",
            points: 12,
          },
          {
            id: 2,
            name: "Margot Schofield",
            points: 29,
          },
        ],
      });
    }
  }),
};
