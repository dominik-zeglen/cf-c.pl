export interface IPage {
  id: string;
  name: string;
  slug: string;
  fields: Array<{
    name: string;
    value: string;
  }>;
}

export const isScrolledTo = (nodeId: string) => {
  const node = document.querySelector('#' + nodeId);
  if (!node) {
    return false;
  }
  const topPosition = node.getBoundingClientRect().top;
  const bottomPosition = node.getBoundingClientRect().bottom;

  return topPosition < 5 && bottomPosition > 5;
};

export const getPageBySlug = (pages: IPage[], slug: string) =>
  pages.filter(page => page.slug === slug)[0];
export const getPageFields = (page: IPage): { [key: string]: string } =>
  page.fields.reduce((prev, curr) => {
    prev[curr.name] = curr.value;
    return prev;
  }, {});
