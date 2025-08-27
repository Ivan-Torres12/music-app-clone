import { useEffect, useRef, useState } from "react";

const RenderWebp = ({ src, alt = "", className = "", transitionName }) => {
  const imgRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(async (entries, obs) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          try {
            // pedir placeholder al API
            const res = await fetch(`/api/image/${src}?placeholder=true`);
            const { placeholder } = await res.json();

            // crear div blur
            const bg = document.createElement("div");
            bg.className = "blur-bg";
            bg.style.backgroundImage = `url(${placeholder})`;
            img.parentNode?.insertBefore(bg, img);

            // cargar imagen real
            img.src = `/api/image/${src}`;
            img.onload = () => {
              setVisible(true);
              bg.style.opacity = "0";
              setTimeout(() => bg.remove(), 400);
            };
          } catch (err) {
            console.error("Error cargando placeholder:", err);
          }
          obs.unobserve(img);
        }
      });
    });

    observer.observe(img);

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      alt={alt}
      decoding="async"
      data-src={`/api/image/${src}`}
      className={`real-img ${className} ${visible ? "visible" : ""}`}
      data-transition-name={transitionName}
    />
  );
};

export default RenderWebp;
