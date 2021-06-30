import { TAG_LIST_MAX_LENGTH, TAG_MAX_LENGTH } from 'common/constants'

export const allowAddTag = (tags: string[]) => {
  return tags.length < TAG_LIST_MAX_LENGTH;
}

export const isUniqueTag = (tags: string[], tag: string): boolean => {
  return tag.trim() && !tags.some((x) => x.toLocaleUpperCase().trim() === tag.toLocaleUpperCase().trim());
}

export const isTagLengthWithinLimit = (tag?: string): boolean => {
  return tag?.length <= TAG_MAX_LENGTH;
}
