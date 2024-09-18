export interface NewsItem {
  com: string;
  title: string;
}

export interface NewsData {
  "종합/경제": NewsItem[];
  "방송/통신": NewsItem[];
  IT: NewsItem[];
  영자지: NewsItem[];
  "스포츠/연예": NewsItem[];
  "매거진/전문지": NewsItem[];
  지역: NewsItem[];
}

export interface Company {
  id: number;
  name: string;
}
