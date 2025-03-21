export type Achievement = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  link?: AchievementLink[];
};

export type AchievementLink = {
  title: string;
  url: string;
};
