'use client';
import { useRef, useTransition } from 'react';

import { Button } from '@/app/common/components';

interface LongDescriptionFormProps {
	long_description: string;
	createFeatures: (longDescription: string) => Promise<void>;
}

export const LongDescriptionForm = ({
	long_description,
	createFeatures,
}: LongDescriptionFormProps) => {
	const [pending, startTransition] = useTransition();
	const inputRef = useRef<HTMLTextAreaElement>(null);

	return (
		<form>
			<div className='flex flex-col mb-1 gap-4 text-center'>
				<label className='text-lg' htmlFor='enhanced-description-input'>
					Awesome. This is what we understood from your description. Please, feel free to edit it
				</label>
				<textarea
					ref={inputRef}
					id='enhanced-description-input'
					name='enhanced-description'
					className='w-full bg-background border border-gray-500 py-3 px-4 rounded-md mb-4 resize-none overflow-y-auto h-[200px]'
					defaultValue={long_description}
					minLength={50}
					required
				/>
			</div>
			<div className='md:flex gap-1'>
				<Button
					variant='primary'
					type='submit'
					isLoading={pending}
					onClick={() => {
						startTransition(async () => {
							await createFeatures(inputRef.current!.value);
						});
					}}
				>
					Generate Features
				</Button>
			</div>
		</form>
	);
};
