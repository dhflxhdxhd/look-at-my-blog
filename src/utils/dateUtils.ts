// utils/dateUtils.ts
export const formatDateWithDash = (dateString: string): string => {
  if (!dateString) return "";
  return new Date(dateString).toISOString().split("T")[0];
};
