"use client";

import { useState, useEffect, useCallback } from "react";
import ImageCard from "@/components/ImageCard";
import Filters from "@/components/Filters";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

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

export interface FilterState {
  rover: string;
  camera: string;
  date: string;
}

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY || "DEMO_KEY";
const IMAGES_MAX = 12; 

async function getMarsPhotos(params: {
  rover?: string;
  earth_date?: string;
  camera?: string;
  page?: number;
}): Promise<MarsPhoto[]> {
  const { rover = "curiosity", earth_date = "2020-07-01", camera = "", page = 1 } = params;
  
  try {
    const url = new URL(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`);
    url.searchParams.set("earth_date", earth_date);
    url.searchParams.set("page", String(page));
    url.searchParams.set("api_key", API_KEY);
    
    if (camera) {
      url.searchParams.set("camera", camera);
    }

    const res = await fetch(url.toString());
    if (!res.ok) {
      throw new Error(`Erro na API: ${res.status} ${res.statusText}`);
    }
    
    const data = await res.json();

    return Array.isArray(data?.photos) ? data.photos.slice(0, IMAGES_MAX + 1) : [];
  } catch (error) {
    console.error("Erro ao buscar fotos:", error);
    return [];
  }
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    rover: "Curiosity",
    camera: "",
    date: "2020-07-01",
  });
  const [page, setPage] = useState(1);

  const fetchPhotos = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getMarsPhotos({
        rover: filters.rover.toLowerCase(),
        earth_date: filters.date,
        camera: filters.camera,
        page: page
      });
      setPhotos(data);
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  }, [filters, page]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const showPagination = photos.length > 0;
  
  const hasMore = photos.length > IMAGES_MAX;

  const visiblePhotos = photos.slice(0, IMAGES_MAX);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Galeria de Marte</h1>

        <Filters
          onFilterChange={(f) => {
            setFilters(f);
            setPage(1);
          }}
        />

        {loading ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-4">Carregando fotos...</p>
            <div className="mt-4 inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-orange-500"></div>
          </div>
        ) : visiblePhotos.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-lg mb-2">Nenhuma foto encontrada</p>
            <p className="text-gray-500 text-sm">
              Tente ajustar os filtros ou selecionar outra data.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {visiblePhotos.map((photo) => (
                <ImageCard key={photo.id} photo={photo} />
              ))}
            </div>
            
            {showPagination && (
              <Pagination page={page} setPage={setPage} hasMore={hasMore} />
            )}
          </>
        )}
      </div>
      
      <Footer/>
    </div>
  );
}
