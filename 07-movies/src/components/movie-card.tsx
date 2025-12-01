import { Star, Trash } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Toggle } from './ui/toggle';
import type { Movie } from '@/types/movie';
import { Button } from './ui/button';

interface MovieCardProps {
  onFavorite: (id: string, isFavorite: boolean) => void;
  onDelete: (id: string) => void;
  movie: Movie;
}

export default function MovieCard({
  movie,
  onFavorite,
  onDelete,
}: MovieCardProps) {
  return (
    <Card>
      <CardContent className="flex justify-between items-center">
        <p>{movie.title}</p>
        <div className="flex items-center gap-1">
          <Toggle
            pressed={movie.isFavorite}
            onPressedChange={(isPressed) => onFavorite(movie.id, isPressed)}
            className="data-[state=on]:text-yellow-500 data-[state=on]:*:[svg]:fill-current"
          >
            <Star />
          </Toggle>
          <Button
            type="button"
            variant="destructive"
            size="icon-sm"
            onClick={() => onDelete(movie.id)}
          >
            <Trash />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
