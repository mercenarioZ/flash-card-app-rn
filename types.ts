export type Flashcard = {
  id: string;
  front: string;
  back: string;
};

export type Topic = {
  id: string;
  name: string;
  flashcards: Flashcard[];
};

export const topics: Topic[] = [
  {
    id: "1",
    name: "English Vocabulary",
    flashcards: [
      { id: "1", front: "Hello", back: "Xin chào" },
      { id: "2", front: "Goodbye", back: "Tạm biệt" },
    ],
  },
  {
    id: "2",
    name: "React Native",
    flashcards: [
      { id: "1", front: "State", back: "Component's state" },
      { id: "2", front: "Props", back: "Pass value to components" },
    ],
  },
];
