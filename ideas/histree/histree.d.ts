type HistreeData = [
  {
    date: string;
    nodes: HistreeNode[];
  }
];

type HistreeNode = {
  url: string;
  title: string;
  nodes?: HistreeNode[];
};
