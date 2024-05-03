import { JsonValue } from "@prisma/client/runtime/library";

export function convertToSource(value: string): JsonValue {
  return Number(value) ? Number(value) : value === 'true' ? true : value === 'false' ? false : value;
}
