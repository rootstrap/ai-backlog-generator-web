'use client';
import React from 'react';
import cn from 'classnames';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'link' | 'unstyled';
	className?: string;
	children: React.ReactNode;
}

export const SubmitButton = ({ variant, className, children, disabled, ...buttonProps }: Props) => {
	const { pending } = useFormStatus();
	return (
		<button
			type='submit'
			className={cn(
				'w-full md:w-fit md:min-w-[75px] rounded-md py-2 px-4 mb-2 border',
				{ 'bg-gray-500 cursor-not-allowed': disabled },
				{
					'bg-primary-main text-light hover:bg-neutral-100 hover:text-dark hover:border-dark':
						variant === 'primary',
				},
				{ 'bg-secondary-main text-dark hover:bg-secondary-dark': variant === 'secondary' },
				{ 'hover:opacity-75 hover:underline': variant === 'link' },
				className
			)}
			{...buttonProps}
		>
			{pending ? 'Loading...' : children}
		</button>
	);
};
