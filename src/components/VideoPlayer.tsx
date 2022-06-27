import { DefaultUi, Player, Youtube } from '@vime/react';
import { useGetLessonBySlugQuery } from '../graphql/generated';

interface VideoProps {
  lessonSlug: string;
}

export function VideoPlayer(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className='flex-1'>
        <p>Carregando...</p>
      </div>
    );
  }
  return (    
        <Player>
          <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
          <DefaultUi />
        </Player>
  );
}
