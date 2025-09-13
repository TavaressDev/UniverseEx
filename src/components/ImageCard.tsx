import Image from "next/image";

export interface MarsPhoto {
  id: number;
  img_src: string;
  earth_date: string;
  camera: { 
    name: string;
    full_name: string; 
  };
  rover: { 
    name: string;
    status: string;
  };
}

interface ImageCardProps {
  photo: MarsPhoto;
  priority?: boolean;
}

export default function ImageCard({ photo }: ImageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image
          src={photo.img_src}
          alt={`Foto de Marte tirada pelo rover ${photo.rover.name}`}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 
            (max-width: 1200px) 50vw, 
            33vw"
        />
      </div>

      <div className="px-4 py-3 border-t border-gray-100">
        <h3 className="font-semibold text-sm text-gray-900 mb-1 truncate">
          {photo.camera.full_name}
        </h3>

        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">
            {photo.camera.name}
          </span>
          <span className="text-xs text-gray-500">{photo.earth_date}</span>
        </div>

        <p className="text-sm font-semibold text-gray-900 truncate">
          Rover: {photo.rover.name}
        </p>

      </div>
    </div>
  );
}
