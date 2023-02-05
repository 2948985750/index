import myAxios from "../../../../../yuindex/src/plugins/myAxios";

/**
 * 搜索单条音乐
 * @param keywords
 */
export const getSingleMusic = async (keywords: string) => {
  if (!keywords) {
    return null;
  }
  return await myAxios.post("/music/get", { keywords });
};
