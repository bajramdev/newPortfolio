import { getNowPlaying } from '../../lib/spotify';

export default async (_, res) => {
    const response = await getNowPlaying();

    return res.status(200).json({
        response
    });
};
