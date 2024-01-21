import { createContext, useContext } from 'react';

const NoteContext = createContext();

export const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNoteContext must be used within a NoteProvider');
  }
  return context;
};

export default NoteContext;