import { Id } from './_generated/dataModel';
import { query } from './_generated/server';
import { v } from 'convex/values';

const shuffle = (
	array: {
		_id: Id<'rooms'>;
		_creationTime: number;
		type: string;
		imageId: string;
		title: string;
	}[],
	seedNumber: number
) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor((Math.random() * (i + 1) + seedNumber) % array.length);
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export const get = query({
	args: {
		seedNumber: v.number(),
	},
	handler: async (ctx, args) => {
		let rooms = await ctx.db.query('rooms').collect();
		const shuffledRooms = shuffle(rooms, args.seedNumber).slice(0, 10);
		return await Promise.all(
			shuffledRooms.map(async (room) => ({
				...room,
				...(room.imageId
					? { url: await ctx.storage.getUrl(room.imageId) }
					: {}),
			}))
		);
	},
});
