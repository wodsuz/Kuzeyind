export function date(): string {
  let month: number = new Date().getMonth() + 1;
  let year: number = new Date().getFullYear();
  let full_date: string = month + "/" + year;
  return full_date;
}
