import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
} from 'react-share';

const SocialShare = () => {
	const shareUrl = 'https://dormiq.vercel.app';
  const title = 'Dormiq | Dorm or Prison Quiz';
  const hashtag = '#dormiq';
	return (
		<div className='grid grid-cols-3 gap-x-2'>
			<FacebookShareButton url={shareUrl} hashtag={hashtag}>
				<FacebookIcon size={32} round />
			</FacebookShareButton>
			<TwitterShareButton url={shareUrl} title={title} hashtags={[hashtag]}>
				<TwitterIcon size={32} round />
			</TwitterShareButton>
			<WhatsappShareButton url={shareUrl} title={title}>
				<WhatsappIcon size={32} round />
			</WhatsappShareButton>
		</div>
	);
};

export default SocialShare;
