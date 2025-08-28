interface ProductImageProps {
  imageUrl: string;
  name: string;
}

export const ProductImage = ({ imageUrl, name }: ProductImageProps) => {
  return (
    <div className="aspect-square rounded-3xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
