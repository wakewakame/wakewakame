import React from 'react';

export type Work = {
	title: string,
	date: string,
	thumbnail: string,
	description: string,
	content: React.FC,
};
