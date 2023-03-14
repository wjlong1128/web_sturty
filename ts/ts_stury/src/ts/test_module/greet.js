function greet(name) {
    if (Array.isArray(name)) {
        return name.map((n) => `Welcome, ${n}!`);
    }
    return `Welcome, ${name}!`;
}
export default greet;
