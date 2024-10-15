export default async function ParseJSON(json) {
    const request = new Request(json);
    const response = await fetch(request);
    const data = await response.json();
    return data;
}

