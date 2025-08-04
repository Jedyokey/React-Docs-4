export const fetchBio = async (person) => {
    const delay = person === "Bob" ? 2000 : 200 // Simulate different loading times
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("This is " + person + "'s bio.");
        }, delay);
    })
}