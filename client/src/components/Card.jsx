import React from "react";

function Card({ image, title, description, className }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300
        hover:shadow-xl hover:shadow-luxury/20 hover:-translate-y-1
        w-full max-w-sm mx-auto ${className || ""}`}>
      <figure className="relative overflow-hidden">
        <img
          src={image}
          alt={title || "Hotel amenity"}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </figure>

      <div className="p-6 space-y-3">
        {title && (
          <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}

export default Card;
