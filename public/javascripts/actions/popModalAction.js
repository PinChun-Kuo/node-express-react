export const modalType = {
  open: 'open',
  close: 'close'
};

export function openAction() {
  return {
    type: modalType.open
  };
}

export function closeAction() {
  return {
    type: modalType.close
  };
}
