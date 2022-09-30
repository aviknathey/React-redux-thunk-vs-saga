export const GET = async (url) => {
    return await fetch(url, {
        method: "GET"
    });
};

export const POST = async (url, body) => {
    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json; charset=utf-8;"
        },
        body: JSON.stringify(body)
    });
};