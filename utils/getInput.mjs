export default async function (id) {
    try {
        const r = await fetch(`https://adventofcode.com/2023/day/${id}/input`, {
            method: 'GET', // or 'POST', 'PUT', etc.
            headers: {
                'Cookie': 'session=' + process.env.session // Your cookies here
            }
        })

        return await r.text()
    } catch (e) {
        console.error(e);
    }
}