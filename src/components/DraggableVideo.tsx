import Draggable from 'react-draggable';
import { VideoPlayer } from './VideoPlayer';
import { ArrowSquareIn, DotsSix, X } from 'phosphor-react';
import { useDraggableVideo } from '../hooks/UseDraggableVideo';

export function DraggableVideo() {
  const { slug } = useDraggableVideo();

  if (!slug) {
    return <span />;
  }
  return (
    <Draggable
      defaultClassNameDragging='cursor-move'
      handle='.handle'
      bounds='body'
    >
      <div className=' p-1 min-w-[400px] bg-gray-900 bottom-0 right-0 absolute z-50 select-none'>
        <strong className=' p-1 w-full flex justify-between align-center border-gray-300'>

          <a href={`http://localhost:3000/event/lesson/${slug}`}>
            <span className=' flex justify-center cursor-pointer hover:text-green-500 transition-colors'>
              <ArrowSquareIn size={20} />
            </span>
          </a>

          <span className='flex justify-center cursor-move hover:text-green-500 transition-colors handle'>
            <DotsSix size={20} />
          </span>

          <span className=' flex justify-center cursor-pointer hover:text-green-500 transition-colors'>
            <X size={20} />
          </span>

        </strong>
        <div className='bg-black flex justify-center'>
          <div className='h-full w-full aspect-video'>
            <VideoPlayer lessonSlug={slug} />
          </div>
        </div>
      </div>
    </Draggable>
  );
}
