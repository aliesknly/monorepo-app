/**
 *
 * @param object any
 * @param properties string[]
 * @returns new object
 */
export function deleteProperty<T extends object>(
  object: T,
  ...properties: (keyof T)[]
) {
  for (const property of properties) {
    delete object[property];
  }
  return object;
}
