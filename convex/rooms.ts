import { Id } from './_generated/dataModel';
import { query } from './_generated/server';

const shuffle = (
	array: {
		_id: Id<'rooms'>;
		_creationTime: number;
		type: string;
		imageId: string;
		title: string;
	}[]
) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export const get = query({
	args: {},
	handler: async (ctx) => {
		let rooms = await ctx.db.query('rooms').collect();
		const shuffledRooms = shuffle(rooms).slice(0, 10);
		return Promise.all(
			shuffledRooms.map(async (room) => ({
				...room,
				...(room.imageId
					? { url: await ctx.storage.getUrl(room.imageId) }
					: {}),
			}))
		);
	},
});
