import link_preview_generator from "link-preview-generator";

export const checkTwiter = async (data) => {
  console.log({ TwitterLink: data });
  const info = await link_preview_generator(data);

  return {
    title: info.title,
    description: info.description,
    domain: info.domain,
    img: info.img,
    favicon: info.favicon,
    link: null,
  };
};
