import React from 'react';
import iconUp from '../images/icon-up.svg';
import iconDown from '../images/icon-down.svg';

const Card = ({ account }) => {
	return (
		<div
			className={`flex flex-col items-center relative rounded-lg py-7 px-2 space-y-9 cursor-pointer bg-lm-light-grayish-blue dark:bg-dm-dark-desaturated-blue border-t-8 border-${
				account.socialPlateform
			} ${
				account.isInstagram && 'border-insta'
			} hover:bg-lm-light-grayish-blue-hov dark:hover:bg-dm-dark-desaturated-blue-hov transition`}>
			<div className='flex items-center'>
				<img
					className='mr-3 h-5 w-5'
					src={account.icon}
					alt={`${account.socialPlateform} logo`}
				/>
				<span className='text-lm-dark-grayish-blue text-xs font-bold dark:text-dm-desaturated-blue'>
					{account.profile}
				</span>
			</div>
			<div>
				<h3 className='font-bold text-5xl text-lm-very-dark-blue text-center mb-2 dark:text-white'>
					{account.followersNum > 9999
						? account.followersNum.toString().slice(0, 2) + 'k'
						: account.followersNum}
				</h3>
				<p className='uppercase text-xs lt-spacing text-lm-dark-grayish-blue text-center dark:text-dm-desaturated-blue'>
					{account.isYoutube ? 'subscribers' : 'followers'}
				</p>
			</div>
			{Math.sign(account.followersEvolution) > 0 ? (
				<p className='flex items-center text-lime-green font-bold text-xs'>
					<img className='mr-1 h-1' src={iconUp} alt='#' />
					{Math.abs(account.followersEvolution)} Today
				</p>
			) : (
				<p className='flex items-center text-bright-red font-bold text-xs'>
					<img className='mr-1 h-1' src={iconDown} alt='#' />
					{Math.abs(account.followersEvolution)} Today
				</p>
			)}
		</div>
	);
};

export default Card;
