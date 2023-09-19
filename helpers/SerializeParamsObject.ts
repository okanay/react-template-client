export function SerializeParamsObject<T extends object>(object: T): T {
  const params: any = {};
  for (const key in object) {
    params[key] = object[key];
  }

  return params;
}
