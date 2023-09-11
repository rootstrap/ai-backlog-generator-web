import { revalidatePath } from 'next/cache';

import { backlogApi } from '@/app/common/api';
import { Button } from '@/app/common/components';
import { Fields, Sections } from '@/app/common/types';
import type {
	LongDescriptionResponse,
	FeaturesResponse,
	Feature as FeatureType,
} from '@/app/common/types';

import { LongDescriptionForm, ShortDescriptionForm } from '@/app/product/components';
import { Feature } from '@/app/feature/components';

let long_description = '';
let features: FeatureType[] = [];

const createEnahncedDescription = async (shortDescription: string) => {
	'use server';
	const short_description = shortDescription;

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

const createFeatures = async (longDescription: string) => {
	'use server';
	const long_description = longDescription;

	try {
		const { data } = await backlogApi.post<FeaturesResponse>('generate/features', {
			field: Fields.LONG,
			content: long_description,
		});

		features = data.features;
		revalidatePath('/');
	} catch (error) {
		console.error(error);
	}
};

export default function Home() {
	return (
		<>
			<h1 className='py-8 text-2xl font-semibold text-center'>Product Definition</h1>
			<section id={Sections.SIMPLE_DESCRIPTION}>
				<ShortDescriptionForm createEnahncedDescription={createEnahncedDescription} />
			</section>

			{long_description ? (
				<section id={Sections.ENHANCED_DESCRIPTION} className='my-12 pb-12'>
					<LongDescriptionForm
						long_description={long_description}
						createFeatures={createFeatures}
					/>
				</section>
			) : null}

			{features.length ? (
				<section id={Sections.FEATURES} className='my-12 pb-12'>
					<label className='text-lg mb-4 block text-center'>
						These are the features we understood from your description. Please, feel free to edit
					</label>
					{features.map((feature) => (
						<Feature key={feature.title} feature={feature} />
					))}
				</section>
			) : null}
		</>
	);
}
