export default async function getAllAnimals() {
    const result = await fetch("http://localhost:8080/allAnimals");
    return result.json();
}
