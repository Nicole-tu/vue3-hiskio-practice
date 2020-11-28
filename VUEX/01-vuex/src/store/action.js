export default {
  handleMenuOpen(context) {
    const bool = !context.state.isOpen;
    context.commit('handleMenuOpen', bool)
  }
}