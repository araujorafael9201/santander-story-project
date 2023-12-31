const getDbPool = require('./db.js');
const express = require('express');

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/story/:storyTitle', async (req, res) => {
	const { storyTitle } = req.params;
	const story = await getStory(storyTitle);

	if (story) {
		const { description: storyDescription, fullStories, id } = story;
		res.json({
			title: storyTitle,
			description: storyDescription,
			fullStories,
			id
		})
	} else {
		res.sendStatus(404);
	}
})

app.post('/story', async (req, res) => {
	const { fullStory, parentStoryId } = req.body;

	if ((!fullStory || !parentStoryId) || (fullStory.length > 1000)) {
		// Bad Request
		return res.sendStatus(400);
	}

	const saveStoryRes = await saveStory(fullStory, parentStoryId);

	if (saveStoryRes) {
		return res.sendStatus(201);
	}

	return res.sendStatus(500);

})

async function saveStory(fullStory, parentStoryId) {
	const client = await getDbPool();

	// Check if parent story exists
	const parentStoryRes = await client.query(`SELECT title FROM stories WHERE id=${parentStoryId}`);
	if (parentStoryRes.rowCount == 0) {
		// Bad Request
		client.release();
		return null;
	}

	const res = await client.query(`INSERT INTO fullstories(story, based_on) VALUES ('${fullStory}', '${parentStoryId}')`)

	client.release();
	return res.rowCount
}


async function getStory(title) {
	const client = await getDbPool();

	const res = await client.query(`SELECT stories.id, description, story FROM stories INNER JOIN fullstories ON fullstories.based_on = stories.id WHERE title='${title}'`);

	if (res.rowCount > 0) {
		const description = res.rows[0].description;
		const id = res.rows[0].id;

		const fullStories = [];
		res.rows.forEach(r => {
			fullStories.push(r.story)
		});

		client.release();
		return {
			description,
			fullStories,
			id
		}
	} else {
		client.release();
		return null;
	}
}


app.listen(PORT, () => {
	console.log('Listening on port', PORT);
})
