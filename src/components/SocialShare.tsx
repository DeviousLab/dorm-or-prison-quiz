'use client';
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
} from 'react-share';

type Props = {
	correct_answers: number;
};

const SocialShare = (correct_answers: Props) => {
	const shareUrl = `https://dormiq.xyz?correct_answers=${correct_answers.correct_answers}`;
  const title = 'DormIQ | Dorm or Prison Quiz';
  const hashtag = 'dormiq';
	return (
		<div className='grid grid-cols-3 gap-x-2'>
			<FacebookShareButton url={shareUrl} hashtag={hashtag}>
				<FacebookIcon size={35} round />
			</FacebookShareButton>
			<TwitterShareButton url={shareUrl} title={title} hashtags={[hashtag]}>
				<TwitterIcon size={35} round />
			</TwitterShareButton>
			<WhatsappShareButton url={shareUrl} title={title}>
				<WhatsappIcon size={35} round />
			</WhatsappShareButton>
		</div>
	);
};

export default SocialShare;
