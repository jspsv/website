import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { MdBody, MdMeta } from '../types';

/**
 * Fetch content from markdown file which matches the slug for 'id'
 */
export const GET: RequestHandler = async ({ params, fetch }) => {
	const id = Number(params.slug);

	if (isNaN(id) || id < 0) {
		throw error(400, 'post id must be a positive number');
	}

	const response = await fetch('/api/content');
	const result = (await response.json()) as MdMeta[];

	if (id >= result.length) {
		throw error(400, 'post id too large');
	}

	const postModule = await import(`./../../../../content/${result[id].fileName}.md`);
	const { html } = postModule.default.render();

	return json({
		meta: result[id],
		html
	} as MdBody);
};