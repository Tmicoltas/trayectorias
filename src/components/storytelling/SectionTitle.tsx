// src/components/storytelling/SectionTitle.tsx

interface Props{
    label:string
    title:string
    description?:string
  }
  
  function SectionTitle({
    label,
    title,
    description
  }:Props){
  
    return (
  
      <div className="max-w-5xl mb-32">
  
        <p
          className="
          uppercase
          tracking-[0.35em]
          text-xs
          mb-8
          text-[#5C5C5C]
          "
        >
  
          {label}
  
        </p>
  
        <h2
          className="
          text-[clamp(3rem,7vw,7rem)]
          leading-[0.92]
          tracking-[-0.04em]
          mb-10
          "
        >
  
          {title}
  
        </h2>
  
        {description && (
  
          <p
            className="
            text-xl
            leading-loose
            text-[#4a4a4a]
            max-w-3xl
            "
          >
  
            {description}
  
          </p>
  
        )}
  
      </div>
  
    )
  }
  
  export default SectionTitle