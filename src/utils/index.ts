import { basePath } from '../../next.config';

export const getAssetPath = (src: string) => `${basePath}${src}`;