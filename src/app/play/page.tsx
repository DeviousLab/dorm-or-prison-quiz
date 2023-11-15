'use client';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import Options from '@/components/Options';
import Image from 'next/image';

export default function Play() {
	const rooms = useQuery(api.rooms.get);
	console.log();
	return (
		<main className='flex grow items-center justify-center'>
			<Options />
			{/* {rooms?.map((room) => room.url && (
				<div key={room._id}>
					<Image src={room.url} width={500} height={500} alt='Image of room'/>
				</div>
			)
			)} */}
		</main>
	);
}
