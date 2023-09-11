export enum Fields {
	SHORT = 'short_description',
	LONG = 'long_description',
	FEATURES = 'features',
}

export type LongDescriptionResponse = {
	long_description: string;
};

export type FeaturesResponse = {
	features: Feature[];
};

export type Feature = {
	title: string;
	description: string;
	epic: string;
};
