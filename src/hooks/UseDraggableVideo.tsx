import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

interface DraggableVideoProviderProps {
  children: ReactNode;
}

interface DraggableVideoData {
  slug: string;
  setSlugInLocalStorage: (slug: string) => void;
}

const DraggableVideoContext = createContext<DraggableVideoData>({} as DraggableVideoData);

export function SlugProvider({ children }: DraggableVideoProviderProps) {
  const [slug, setSlug] = useState('');
  useEffect(() => {
    const slugFromLocalStorage = window.localStorage.getItem('slug');

    setSlug(slugFromLocalStorage || '');
  }, []);

  function setSlugInLocalStorage(slugData: string) {
    setSlug(slugData);
    window.localStorage.setItem('slug', slugData);
  }
  return (
    <DraggableVideoContext.Provider value={{ slug, setSlugInLocalStorage }}>
      {children}
    </DraggableVideoContext.Provider>
  );
}

export function useDraggableVideo() {
  const context = useContext(DraggableVideoContext);

  return context;
}
