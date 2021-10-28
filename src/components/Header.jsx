import React from 'react';
import { Switch } from '@headlessui/react';

const Header = ({ dark, setDark }) => {
	return (
		<header className='bg-lm-very-pale-blue px-5 dark:bg-dm-top-pattern-very-dark-blue'>
			<div className='container mx-auto pt-7 pb-32'>
				<div className='space-y-5 md:space-y-0 md:flex justify-between items-center'>
					<div className='space-y-2 border-b border-lm-dark-grayish-blue pb-5 md:border-b-0 md:mt-4'>
						<h1 className='font-bold text-2xl text-lm-very-dark-blue tracking-wide md:text-3xl dark:text-white'>
							Social Media Dashboard
						</h1>
						<p className='text-lm-dark-grayish-blue text-md font-bold dark:text-dm-desaturated-blue'>
							Total Followers: 23,004
						</p>
					</div>
					<div className='flex justify-between items-center'>
						<span className='text-lm-dark-grayish-blue font-bold md:mr-5 dark:text-dm-desaturated-blue'>
							Dark Mode
						</span>
						<Switch
							checked={dark}
							onChange={setDark}
							className={`relative inline-flex flex-shrink-0 items-center h-6 w-14 rounded-full border-2 border-transparent cursor-pointer ${
								dark
									? 'bg-gradient-to-r from-toggleFrom to-toggleTo'
									: 'bg-lm-toggle'
							} hover:bg-opacity-70 transition`}>
							<span
								className={`pointer-events-none inline-block h-4 w-4 mx-1 rounded-full shadow transform  ${
									dark
										? 'translate-x-0 bg-dm-top-pattern-very-dark-blue'
										: 'translate-x-8 bg-white'
								} transition-transform duration-300`}></span>
						</Switch>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
