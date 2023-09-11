'use client';
import React from 'react';
import cn from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'link' | 'unstyled';
	isLoading?: boolean;
	className?: string;
	children: React.ReactNode;
}

export const Button = ({
	variant,
	className,
	children,
	disabled,
	isLoading,
	...buttonProps
}: Props) => {
	return (
		<button
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
			disabled={disabled || isLoading}
			{...buttonProps}
		>
			{isLoading ? 'Loading...' : children}
		</button>
	);
};
