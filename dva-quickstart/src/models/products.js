export default {

  // chave de estado global
  namespace: 'products',

  // estado inicial
  state: [],

  // reducer do redux
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
