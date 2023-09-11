import { revalidatePath } from 'next/cache';
import { backlogApi, Fields, Sections, SubmitButton } from '@/app/common';
import type { LongDescriptionResponse, FeaturesResponse } from '@/app/common';

let long_description = '';

export default function Home() {
	const createEnahncedDescription = async (formData: FormData) => {
		'use server';
		const short_description = formData.get('simple-description') as string;

		try {
			const { data } = await backlogApi.post<LongDescriptionResponse>('generate/long-description', {
				field: Fields.SHORT,
				content: short_description,
			});

			long_description = data.long_description;
			revalidatePath('/');
		} catch (error) {
			console.error(error);
		}
	};

	const createFeatures = async (formData: FormData) => {
		'use server';
		const long_description = formData.get('enhanced-description') as string;

		try {
			const { data } = await backlogApi.post<FeaturesResponse>('generate/features', {
				field: Fields.LONG,
				content: long_description,
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h1 className='py-8 text-2xl font-semibold text-center'>Product Definition</h1>
			<section id={Sections.SIMPLE_DESCRIPTION}>
				<form action={createEnahncedDescription}>
					<div className='flex flex-col mb-1 gap-4 text-center'>
						<label className='text-lg' htmlFor='simple-description-input'>
							Tell us in a few words what your product is about
						</label>
						<input
							type='text'
							id='simple-description-input'
							name='simple-description'
							placeholder='Credit card storage mobile app'
							className='bg-background border border-gray-500 py-3 px-4 rounded-md'
							minLength={10}
							required
						/>
						<div className='md:flex gap-2'>
							<SubmitButton variant='primary'>Generate Description</SubmitButton>
						</div>
					</div>
				</form>
			</section>

			{long_description ? (
				<section id={Sections.ENHANCED_DESCRIPTION} className='my-12 pb-12'>
					<form action={createFeatures}>
						<div className='flex flex-col mb-1 gap-4 text-center'>
							<label className='text-lg' htmlFor='enhanced-description-input'>
								Awesome. This is what we understood from your description. Please, feel free to edit
								it
							</label>
							<textarea
								id='enhanced-description-input'
								name='enhanced-description'
								className='w-full bg-background border border-gray-500 py-3 px-4 rounded-md mb-4 resize-none overflow-y-auto h-[200px]'
								defaultValue={long_description}
								minLength={50}
								required
							/>
						</div>
						<div className='md:flex gap-1'>
							<SubmitButton variant='primary'>Generate Features</SubmitButton>
						</div>
					</form>
				</section>
			) : null}
		</>
	);
}
