const prod = process.env.NODE_ENV === 'production';

const getPhotoUrl = (path, transforms) => {
    const cloudinaryUrl = 'https://res.cloudinary.com/demo/image/fetch';
    const siteUrl = 'https://wtm.gdgcebu.org';

    const segments = [
        prod ? cloudinaryUrl : null,
        prod ? transforms : null,
        prod ? siteUrl : null,
        path
    ];
    return segments.filter(Boolean).join('/');
};

export default getPhotoUrl;
