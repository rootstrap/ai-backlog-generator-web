'use client';
import { useRef, useTransition } from 'react';

import { Button } from '@/app/common/components';

interface ShortDescriptionFormProps {
	createEnahncedDescription: (shortDescription: string) => Promise<void>;
}

export const ShortDescriptionForm = ({ createEnahncedDescription }: ShortDescriptionFormProps) => {
	const [pending, startTransition] = useTransition();
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<form>
			<div className='flex flex-col mb-1 gap-4 text-center'>
				<label className='text-lg' htmlFor='simple-description-input'>
					Tell us in a few words what your product is about
				</label>
				<input
					ref={inputRef}
					type='text'
					id='simple-description-input'
					name='simple-description'
					placeholder='Credit card storage mobile app'
					className='bg-background border border-gray-500 py-3 px-4 rounded-md'
					minLength={10}
					required
				/>
				<div className='md:flex gap-2'>
					<Button
						variant='primary'
						type='submit'
						onClick={() => {
							startTransition(async () => {
								await createEnahncedDescription(inputRef.current!.value);
							});
						}}
						isLoading={pending}
					>
						Generate Description
					</Button>
				</div>
			</div>
		</form>
	);
};
