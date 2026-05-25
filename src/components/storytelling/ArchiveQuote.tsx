// src/components/storytelling/ArchiveQuote.tsx

interface Props{
    quote:string
    author?:string
    theory?:string
  }
  
  function ArchiveQuote({
    quote,
    author,
    theory
  }:Props){
  
    return (
  
      <div
        className="
        relative
        bg-[#F8F5EF]
        border
        border-black/10
        p-10
        shadow-xl
        rotate-[-1deg]
        hover:rotate-0
        transition-all
        duration-700
        "
      >
  
        {/* CINTA */}
  
        <div
          className="
          absolute
          top-[-14px]
          left-10
          w-28
          h-8
          bg-[#d7c7a3]
          opacity-70
          rotate-[-3deg]
          "
        />
  
        <p
          className="
          text-3xl
          leading-relaxed
          relative
          z-10
          "
        >
  
          “{quote}”
  
        </p>
  
        {(author || theory) && (
  
          <div
            className="
            mt-10
            pt-6
            border-t
            border-black/10
            flex
            flex-col
            gap-3
            "
          >
  
            {author && (
  
              <span
                className="
                uppercase
                tracking-[0.25em]
                text-xs
                "
              >
  
                {author}
  
              </span>
  
            )}
  
            {theory && (
  
              <span
                className="
                text-sm
                text-[#6b6b6b]
                italic
                "
              >
  
                {theory}
  
              </span>
  
            )}
  
          </div>
  
        )}
  
      </div>
  
    )
  }
  
  export default ArchiveQuote