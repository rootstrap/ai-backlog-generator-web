'use client';
import { Button } from '@/app/common/components';
import { Feature as FeatureType } from '@/app/common/types';

interface FeatureProps {
	feature: FeatureType;
	onRemove?: (title: string) => void;
	onEdit?: (title: string) => void;
}

export const Feature = ({
	feature: { title, description, epic },
	onRemove,
	onEdit,
}: FeatureProps) => {
	return (
		<div className='py-6 px-8 border border-gray-500 mb-4 hover:bg-gray-100 text-left rounded'>
			<h2 className='mb-2 text-xl font-semibold'>
				{title} - {epic}
			</h2>
			<p className='mb-8'>{description}</p>
			<div className='flex gap-2'>
				<Button
					variant='unstyled'
					className='text-blue-800 border border-blue-800 hover:text-blue-900 hover:border-blue-900'
					type='button'
				>
					Edit
				</Button>
				<Button
					variant='unstyled'
					className='text-error-main border border-error-main hover:text-error-dark hover:border-error-900'
					type='button'
				>
					Remove
				</Button>
			</div>
		</div>
	);
};
