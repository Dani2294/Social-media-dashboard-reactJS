import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import OverviewCard from './components/OverviewCard';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import youtube from './images/icon-youtube.svg';

const socialAccountData = [
	{
		socialPlateform: 'facebook',
		icon: facebook,
		profile: '@nathanf',
		followersNum: 1987,
		isYoutube: false,
		followersEvolution: 12,
	},
	{
		socialPlateform: 'twitter',
		icon: twitter,
		profile: '@nathanf',
		followersNum: 1044,
		isYoutube: false,
		followersEvolution: 99,
	},
	{
		socialPlateform: 'instagram',
		icon: instagram,
		profile: '@realnathanf',
		followersNum: 11000,
		isYoutube: false,
		isInstagram: true,
		followersEvolution: 1099,
	},
	{
		socialPlateform: 'youtube',
		icon: youtube,
		profile: 'Nathan F.',
		followersNum: 8239,
		isYoutube: true,
		followersEvolution: -144,
	},
];

const overviewData = [
	{
		overviewSubHeading: ['Page Views', 'Likes'],
		overviewDayCount: [87, 52],
		overviewDayCountEvol: [+3, -2],
		icon: facebook,
	},
	{
		overviewSubHeading: ['Likes', 'Profile Views'],
		overviewDayCount: [5462, 52000],
		overviewDayCountEvol: [+2257, +1375],
		icon: instagram,
	},
	{
		overviewSubHeading: ['Retweets', 'Likes'],
		overviewDayCount: [117, 507],
		overviewDayCountEvol: [+303, +553],
		icon: twitter,
	},
	{
		overviewSubHeading: ['Likes', 'Total Views'],
		overviewDayCount: [107, 1407],
		overviewDayCountEvol: [-19, -12],
		icon: youtube,
	},
];

function App() {
	const [dark, setDark] = useState(false);
	return (
		<div className={dark ? 'dark' : ''}>
			<Header dark={dark} setDark={setDark} />
			<main className='dark:bg-dm-very-dark-blue -mt-12 sm:-mt-20 pb-10'>
				<section className='container mx-auto px-5 sm:px-0 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
					{socialAccountData.map((account, idx) => (
						<Card key={`${account.socialPlateform}-${idx}`} account={account} />
					))}
				</section>

				<section className='container mx-auto px-5 sm:px-0 mt-20 space-y-8 mb-8'>
					<h2 className='text-lm-dark-grayish-blue text-3xl font-bold dark:text-white'>
						Overview - Today
					</h2>
					<div className='grid gap-8 md:grid-cols-2'>
						{overviewData.map((data, idx) => (
							<OverviewCard key={idx} data={data} />
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
