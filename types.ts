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

