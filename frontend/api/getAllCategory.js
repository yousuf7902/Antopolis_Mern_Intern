
export default async function getAllCategory() {
  const result = await fetch("http://localhost:8080/allCategory");
  return result.json();
}
