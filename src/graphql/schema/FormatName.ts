type FormatName = {
  type: (fullName: string) => string,
  field: (fullName: string) => string,
  arg: (fullName: string) => string,
  enumValue: (fullName: string) => string,

  queryMethod: (type: string) => string,
  queryByKeyMethod: (type: string, key: string) => string,

  queryAllMethod: (type: string) => string,
  queryAllOrderByType: (type: string) => string,
  queryAllEdgeType: (type: string) => string,
  queryAllRelationType: (type: string) => string,
  queryAllConditionType: (type: string) => string,

  queryAllEdgeFieldName: (type: string) => string,
  deleteMethod: (type: string) => string,
  deleteType: (type: string) => string,
  deleteByKeyMethod: (type: string, key: string) => string,
  deletedID: (type: string) => string,

  inputType: (type: string) => string,
  mutationPayload: (type: string) => string,
  createMethod: (type: string) => string,
  updateType: (type: string) => string,
  updateByKeyMethod: (type: string, key: string) => string,
  updateMethod: (fieldName: string) => string,
  updatePatchyType: (type: string) => string,
  updateFieldPatch: (fieldName: string) => string,
}

export default FormatName
