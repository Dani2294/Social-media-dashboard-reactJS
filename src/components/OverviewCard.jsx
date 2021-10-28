import React from 'react';
import iconUp from '../images/icon-up.svg';
import iconDown from '../images/icon-down.svg';

const OverviewCard = ({ data }) => {
	return (
		<div className='space-y-5 lg:space-y-0 grid lg:grid-cols-2 lg:gap-8'>
			<div className='rounded-lg p-7 bg-lm-light-grayish-blue space-y-8 cursor-pointer dark:bg-dm-dark-desaturated-blue hover:bg-lm-light-grayish-blue-hov dark:hover:bg-dm-dark-desaturated-blue-hov transition'>
				<div className='flex justify-between items-center'>
					<span className='text-lm-dark-grayish-blue text-lg font-bold dark:text-dm-desaturated-blue'>
						{data.overviewSubHeading[0]}
					</span>
					<img className='h-6 w-6' src={data.icon} alt='#' />
				</div>
				<div className='flex justify-between items-end'>
					<span className='font-bold text-4xl text-lm-very-dark-blue dark:text-white'>
						{data.overviewDayCount[0] > 9999
							? data.overviewDayCount[0].toString().slice(0, 2) + 'k'
							: data.overviewDayCount[0]}
					</span>
					{Math.sign(data.overviewDayCountEvol[0]) > 0 ? (
						<span className='flex items-center text-lime-green font-bold'>
							<img className='mr-2 h-2' src={iconUp} alt='#' />
							{Math.abs(data.overviewDayCountEvol[0])}%
						</span>
					) : (
						<span className='flex items-center text-bright-red font-bold'>
							<img className='mr-2 h-2' src={iconDown} alt='#' />
							{Math.abs(data.overviewDayCountEvol[0])}%
						</span>
					)}
				</div>
			</div>
			<div className='rounded-lg p-7 bg-lm-light-grayish-blue space-y-8 cursor-pointer dark:bg-dm-dark-desaturated-blue hover:bg-lm-light-grayish-blue-hov dark:hover:bg-dm-dark-desaturated-blue-hov transition'>
				<div className='flex justify-between items-center'>
					<span className='text-lm-dark-grayish-blue text-lg font-bold dark:text-dm-desaturated-blue'>
						{data.overviewSubHeading[1]}
					</span>
					<img className='h-6 w-6' src={data.icon} alt='#' />
				</div>
				<div className='flex justify-between items-end'>
					<span className='font-bold text-4xl text-lm-very-dark-blue dark:text-white'>
						{data.overviewDayCount[1] > 9999
							? data.overviewDayCount[1].toString().slice(0, 2) + 'k'
							: data.overviewDayCount[1]}
					</span>
					{Math.sign(data.overviewDayCountEvol[1]) > 0 ? (
						<span className='flex items-center text-lime-green font-bold'>
							<img className='mr-2 h-2' src={iconUp} alt='#' />
							{Math.abs(data.overviewDayCountEvol[1])}%
						</span>
					) : (
						<span className='flex items-center text-bright-red font-bold'>
							<img className='mr-2 h-2' src={iconDown} alt='#' />
							{Math.abs(data.overviewDayCountEvol[1])}%
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default OverviewCard;
