export const updateRowType = {
  empty: 'empty',
  nonEmpty: 'not empty'
};

export function emptyAction() {
  return {
    type: updateRowType.empty
  };
}

export function nonEmptyAction(updateRow) {
  return {
    type: updateRowType.notEmpty,
    payload: {
      updateRow: updateRow
    }
  };
}
