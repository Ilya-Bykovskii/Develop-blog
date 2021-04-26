export default async function GenTopics(req, res) {
    const length = 9;
    const href = 'http://localhost:4000/topic-prev/'
    let topicsID = new Set();
    let topics = [];
    while (topicsID.size < 6) {
        const newID = Math.floor(Math.random() * 10) % length + 1;        

        if (topicsID.has(newID)) continue;

        topicsID.add(newID);

        await fetch(href + newID)
        .then(data => data.json())
        .then(json => topics.push(json))
        .catch(err => {
            console.error(err);
            topicsID.delete(newID);
        })
    }

    res.end(JSON.stringify(topics));
}