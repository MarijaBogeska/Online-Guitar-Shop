import type { Musician } from "../../model/musicians.model";
import "./MusicianCard.css";

interface MusicianCardProps {
  musician: Musician;
}

export default function MusicianCard({ musician }: MusicianCardProps) {
  return (
    <div className="MusicianCard">
      <div className="image">
        <img src={musician.musicianImage} alt={musician.name} />
      </div>
      <div className="name">{musician.name}</div>
    </div>
  );
}
